# written by Gemini

library(shiny)
library(ggplot2)
library(dplyr)
library(lubridate)

# UI: Strict Minimalism
ui <- fluidPage(
  titlePanel("System State Tracker"),
  sidebarLayout(
    sidebarPanel(
      fileInput("file", "Upload CSV", accept = ".csv"),
      # Keep inputs minimal; only necessary for data loading
      helpText("Ensure columns: Date, Energy, O, P, S")
    ),
    mainPanel(
      plotOutput("moodPlot", height = "600px")
    )
  )
)

# Server: Backend calculation and Date parsing
server <- function(input, output) {
  
  data <- reactive({
    req(input$file)
    df <- read.csv(input$file$datapath, stringsAsFactors = FALSE)
    
    # Handle 'Ctrl + ;' format (M/D/YYYY) or standard ISO (YYYY-MM-DD)
    # lubridate::parse_date_time handles multiple formats automatically
    df$Date <- parse_date_time(df$Date, orders = c("mdy", "ymd", "dmy"))
    
    # Vector math: Normalize 1-10 scale to 0-1 for RGB function
    df <- df %>%
      filter(!is.na(Date)) %>%
      mutate(
        r = (P - 1) / 9,
        g = (O - 1) / 9,
        b = (S - 1) / 9,
        # Generate the single hex color from the O, P, S coordinates
        hex_color = rgb(
          pmin(pmax(r, 0), 1), 
          pmin(pmax(g, 0), 1), 
          pmin(pmax(b, 0), 1)
        )
      )
    return(df)
  })
  
  output$moodPlot <- renderPlot({
    df <- data()
    
    ggplot(df, aes(x = Date, y = Energy)) +
      # Connecting line shows the temporal trajectory
      geom_line(color = "#E0E0E0", size = 0.7) + 
      # Points represent the specific state color
      geom_point(aes(color = I(hex_color)), size = 6) + 
      scale_y_continuous(limits = c(0, 10), breaks = 0:10) +
      theme_minimal() +
      labs(
        title = "Temporal Energy/State Distribution",
        y = "Magnitude",
        x = "Interval"
      ) +
      theme(
        panel.grid.minor = element_blank(),
        axis.title = element_text(size = 12),
        plot.title = element_text(face = "bold", size = 14)
      )
  })
}

shinyApp(ui = ui, server = server)
