import React, { useState } from 'react';

const VerbConjugationDrill = () => {
  const [currentConcept, setCurrentConcept] = useState(0);
  const [showConjugation, setShowConjugation] = useState(false);

  const concepts = [
    {
      name: "Present indicative – Regular -ar/-ire patterns",
      description: "Regular verbs ending in -ar (Spanish/Portuguese) and -ire (Italian)",
      concepts: [
        {
          tense: "Spanish -ar (hablar: to speak)",
          conjugations: [
            { person: "yo", form: "hablo" },
            { person: "tú", form: "hablas" },
            { person: "él/ella", form: "habla" },
            { person: "nosotros", form: "hablamos" },
            { person: "vosotros", form: "habláis" },
            { person: "ellos/ellas", form: "hablan" }
          ],
          examples: [
            "Yo hablo español. (I speak Spanish.)",
            "¿Hablas inglés? (Do you speak English?)",
            "Él habla con su amigo. (He speaks with his friend.)"
          ]
        },
        {
          tense: "Portuguese -ar (falar: to speak)",
          conjugations: [
            { person: "eu", form: "falo" },
            { person: "tu", form: "falas" },
            { person: "ele/ela", form: "fala" },
            { person: "nós", form: "falamos" },
            { person: "vós", form: "falais" },
            { person: "eles/elas", form: "falam" }
          ],
          examples: [
            "Eu falo português. (I speak Portuguese.)",
            "Tu falas inglês? (Do you speak English?)",
            "Ela fala com a mãe. (She speaks with her mother.)"
          ]
        },
        {
          tense: "Italian -are (parlare: to speak)",
          conjugations: [
            { person: "io", form: "parlo" },
            { person: "tu", form: "parli" },
            { person: "lui/lei", form: "parla" },
            { person: "noi", form: "parliamo" },
            { person: "voi", form: "parlate" },
            { person: "loro", form: "parlano" }
          ],
          examples: [
            "Io parlo italiano. (I speak Italian.)",
            "Tu parli inglese? (Do you speak English?)",
            "Lei parla con suo padre. (She speaks with her father.)"
          ]
        }
      ]
    },
    {
      name: "Present indicative – Regular -er/-ere patterns",
      description: "Regular verbs ending in -er (Spanish/Portuguese) and -ere (Italian)",
      concepts: [
        {
          tense: "Spanish -er (comer: to eat)",
          conjugations: [
            { person: "yo", form: "como" },
            { person: "tú", form: "comes" },
            { person: "él/ella", form: "come" },
            { person: "nosotros", form: "comemos" },
            { person: "vosotros", form: "coméis" },
            { person: "ellos/ellas", form: "comen" }
          ],
          examples: [
            "Yo como manzanas. (I eat apples.)",
            "¿Comes carne? (Do you eat meat?)",
            "Ella come pan. (She eats bread.)"
          ]
        },
        {
          tense: "Portuguese -er (comer: to eat)",
          conjugations: [
            { person: "eu", form: "como" },
            { person: "tu", form: "comes" },
            { person: "ele/ela", form: "come" },
            { person: "nós", form: "comemos" },
            { person: "vós", form: "comeis" },
            { person: "eles/elas", form: "comem" }
          ],
          examples: [
            "Eu como maçãs. (I eat apples.)",
            "Tu comes carne? (Do you eat meat?)",
            "Ele come pão. (He eats bread.)"
          ]
        },
        {
          tense: "Italian -ere (mangiare: to eat)",
          conjugations: [
            { person: "io", form: "mangio" },
            { person: "tu", form: "mangi" },
            { person: "lui/lei", form: "mangia" },
            { person: "noi", form: "mangiamo" },
            { person: "voi", form: "mangiate" },
            { person: "loro", form: "mangiano" }
          ],
          examples: [
            "Io mangio mele. (I eat apples.)",
            "Tu mangi carne? (Do you eat meat?)",
            "Lei mangia pane. (She eats bread.)"
          ]
        }
      ]
    },
    {
      name: "Present indicative – Regular -ir patterns",
      description: "Regular verbs ending in -ir across Spanish, Portuguese, and Italian",
      concepts: [
        {
          tense: "Spanish -ir (vivir: to live)",
          conjugations: [
            { person: "yo", form: "vivo" },
            { person: "tú", form: "vives" },
            { person: "él/ella", form: "vive" },
            { person: "nosotros", form: "vivimos" },
            { person: "vosotros", form: "vivís" },
            { person: "ellos/ellas", form: "viven" }
          ],
          examples: [
            "Yo vivo en Madrid. (I live in Madrid.)",
            "¿Dónde vives? (Where do you live?)",
            "Él vive con su familia. (He lives with his family.)"
          ]
        },
        {
          tense: "Portuguese -ir (viver: to live)",
          conjugations: [
            { person: "eu", form: "vivo" },
            { person: "tu", form: "vives" },
            { person: "ele/ela", form: "vive" },
            { person: "nós", form: "vivemos" },
            { person: "vós", form: "viveis" },
            { person: "eles/elas", form: "vivem" }
          ],
          examples: [
            "Eu vivo em Lisboa. (I live in Lisbon.)",
            "Tu vives onde? (Where do you live?)",
            "Ela vive com sua família. (She lives with her family.)"
          ]
        },
        {
          tense: "Italian -ire (vivere: to live)",
          conjugations: [
            { person: "io", form: "vivo" },
            { person: "tu", form: "vivi" },
            { person: "lui/lei", form: "vive" },
            { person: "noi", form: "viviamo" },
            { person: "voi", form: "vivete" },
            { person: "loro", form: "vivono" }
          ],
          examples: [
            "Io vivo a Roma. (I live in Rome.)",
            "Tu dove vivi? (Where do you live?)",
            "Lei vive con sua famiglia. (She lives with her family.)"
          ]
        }
      ]
    },
    {
      name: "Preterite / Simple past",
      description: "Past tense for completed actions – regular patterns",
      concepts: [
        {
          tense: "Spanish preterite -ar (hablar)",
          conjugations: [
            { person: "yo", form: "hablé" },
            { person: "tú", form: "hablaste" },
            { person: "él/ella", form: "habló" },
            { person: "nosotros", form: "hablamos" },
            { person: "vosotros", form: "hablasteis" },
            { person: "ellos/ellas", form: "hablaron" }
          ],
          examples: [
            "Yo hablé con ella ayer. (I spoke with her yesterday.)",
            "¿Hablaste con tu madre? (Did you speak with your mother?)",
            "Él habló español todo el día. (He spoke Spanish all day.)"
          ]
        },
        {
          tense: "Portuguese preterite -ar (falar)",
          conjugations: [
            { person: "eu", form: "falei" },
            { person: "tu", form: "falaste" },
            { person: "ele/ela", form: "falou" },
            { person: "nós", form: "falámos" },
            { person: "vós", form: "falastes" },
            { person: "eles/elas", form: "falaram" }
          ],
          examples: [
            "Eu falei com ela ontem. (I spoke with her yesterday.)",
            "Tu falaste com tua mãe? (Did you speak with your mother?)",
            "Ela falou português o dia todo. (She spoke Portuguese all day.)"
          ]
        },
        {
          tense: "Italian passato remoto -are (parlare)",
          conjugations: [
            { person: "io", form: "parlai" },
            { person: "tu", form: "parlasti" },
            { person: "lui/lei", form: "parlò" },
            { person: "noi", form: "parlammo" },
            { person: "voi", form: "parlaste" },
            { person: "loro", form: "parlarono" }
          ],
          examples: [
            "Io parlai con lei ieri. (I spoke with her yesterday.)",
            "Tu parlasti con tua madre? (Did you speak with your mother?)",
            "Lei parlò italiano tutto il giorno. (She spoke Italian all day.)"
          ]
        }
      ]
    },
    {
      name: "Imperfect – Habitual or continuous past",
      description: "Used to, was -ing – regular patterns",
      concepts: [
        {
          tense: "Spanish imperfect -ar (hablar)",
          conjugations: [
            { person: "yo", form: "hablaba" },
            { person: "tú", form: "hablabas" },
            { person: "él/ella", form: "hablaba" },
            { person: "nosotros", form: "hablábamos" },
            { person: "vosotros", form: "hablabais" },
            { person: "ellos/ellas", form: "hablaban" }
          ],
          examples: [
            "Yo hablaba español cuando era niño. (I used to speak Spanish when I was a child.)",
            "¿Hablabas con tus amigos? (Were you speaking with your friends?)",
            "Ella hablaba muy rápido. (She was speaking very fast.)"
          ]
        },
        {
          tense: "Portuguese imperfect -ar (falar)",
          conjugations: [
            { person: "eu", form: "falava" },
            { person: "tu", form: "falavas" },
            { person: "ele/ela", form: "falava" },
            { person: "nós", form: "falávamos" },
            { person: "vós", form: "faláveis" },
            { person: "eles/elas", form: "falavam" }
          ],
          examples: [
            "Eu falava português quando era criança. (I used to speak Portuguese when I was a child.)",
            "Tu falavas com teus amigos? (Were you speaking with your friends?)",
            "Ele falava muito rápido. (He was speaking very fast.)"
          ]
        },
        {
          tense: "Italian imperfect -are (parlare)",
          conjugations: [
            { person: "io", form: "parlavo" },
            { person: "tu", form: "parlavi" },
            { person: "lui/lei", form: "parlava" },
            { person: "noi", form: "parlavamo" },
            { person: "voi", form: "parlavate" },
            { person: "loro", form: "parlavano" }
          ],
          examples: [
            "Io parlavo italiano quando ero bambino. (I used to speak Italian when I was a child.)",
            "Tu parlavi con i tuoi amici? (Were you speaking with your friends?)",
            "Lei parlava molto velocemente. (She was speaking very fast.)"
          ]
        }
      ]
    },
    {
      name: "Present perfect – Have spoken",
      description: "Recent past or life experience – recognition focus",
      concepts: [
        {
          tense: "Spanish present perfect (he hablado)",
          conjugations: [
            { person: "yo", form: "he hablado" },
            { person: "tú", form: "has hablado" },
            { person: "él/ella", form: "ha hablado" },
            { person: "nosotros", form: "hemos hablado" },
            { person: "vosotros", form: "habéis hablado" },
            { person: "ellos/ellas", form: "han hablado" }
          ],
          examples: [
            "Yo he hablado con ella hoy. (I have spoken with her today.)",
            "¿Has hablado español antes? (Have you spoken Spanish before?)",
            "Él ha hablado muchas veces. (He has spoken many times.)"
          ]
        },
        {
          tense: "Portuguese present perfect (tenho falado)",
          conjugations: [
            { person: "eu", form: "tenho falado" },
            { person: "tu", form: "tens falado" },
            { person: "ele/ela", form: "tem falado" },
            { person: "nós", form: "temos falado" },
            { person: "vós", form: "tendes falado" },
            { person: "eles/elas", form: "têm falado" }
          ],
          examples: [
            "Eu tenho falado com ela hoje. (I have spoken with her today.)",
            "Tu tens falado português antes? (Have you spoken Portuguese before?)",
            "Ela tem falado muitas vezes. (She has spoken many times.)"
          ]
        },
        {
          tense: "Italian present perfect (ho parlato)",
          conjugations: [
            { person: "io", form: "ho parlato" },
            { person: "tu", form: "hai parlato" },
            { person: "lui/lei", form: "ha parlato" },
            { person: "noi", form: "abbiamo parlato" },
            { person: "voi", form: "avete parlato" },
            { person: "loro", form: "hanno parlato" }
          ],
          examples: [
            "Io ho parlato con lei oggi. (I have spoken with her today.)",
            "Tu hai parlato italiano prima? (Have you spoken Italian before?)",
            "Lei ha parlato molte volte. (She has spoken many times.)"
          ]
        }
      ]
    },
    {
      name: "Future simple – Will speak",
      description: "Simple future tense",
      concepts: [
        {
          tense: "Spanish future (hablar)",
          conjugations: [
            { person: "yo", form: "hablaré" },
            { person: "tú", form: "hablarás" },
            { person: "él/ella", form: "hablará" },
            { person: "nosotros", form: "hablaremos" },
            { person: "vosotros", form: "hablaréis" },
            { person: "ellos/ellas", form: "hablarán" }
          ],
          examples: [
            "Yo hablaré con ella mañana. (I will speak with her tomorrow.)",
            "¿Hablarás español? (Will you speak Spanish?)",
            "Él hablará con su amigo. (He will speak with his friend.)"
          ]
        },
        {
          tense: "Portuguese future (falar)",
          conjugations: [
            { person: "eu", form: "falarei" },
            { person: "tu", form: "falarás" },
            { person: "ele/ela", form: "falará" },
            { person: "nós", form: "falaremos" },
            { person: "vós", form: "falareis" },
            { person: "eles/elas", form: "falarão" }
          ],
          examples: [
            "Eu falarei com ela amanhã. (I will speak with her tomorrow.)",
            "Tu falarás português? (Will you speak Portuguese?)",
            "Ela falará com sua amiga. (She will speak with her friend.)"
          ]
        },
        {
          tense: "Italian future (parlare)",
          conjugations: [
            { person: "io", form: "parlerò" },
            { person: "tu", form: "parlerai" },
            { person: "lui/lei", form: "parlerà" },
            { person: "noi", form: "parleremo" },
            { person: "voi", form: "parlerete" },
            { person: "loro", form: "parleranno" }
          ],
          examples: [
            "Io parlerò con lei domani. (I will speak with her tomorrow.)",
            "Tu parlerai italiano? (Will you speak Italian?)",
            "Lei parlerà con sua amica. (She will speak with her friend.)"
          ]
        }
      ]
    },
    {
      name: "Conditional – Would speak",
      description: "Conditional mood – polite, hypothetical",
      concepts: [
        {
          tense: "Spanish conditional (hablar)",
          conjugations: [
            { person: "yo", form: "hablaría" },
            { person: "tú", form: "hablarías" },
            { person: "él/ella", form: "hablaría" },
            { person: "nosotros", form: "hablaríamos" },
            { person: "vosotros", form: "hablaríais" },
            { person: "ellos/ellas", form: "hablarían" }
          ],
          examples: [
            "Yo hablaría contigo si tuviera tiempo. (I would speak with you if I had time.)",
            "¿Hablarías español? (Would you speak Spanish?)",
            "Él hablaría más, pero es tímido. (He would speak more, but he is shy.)"
          ]
        },
        {
          tense: "Portuguese conditional (falar)",
          conjugations: [
            { person: "eu", form: "falaria" },
            { person: "tu", form: "falarias" },
            { person: "ele/ela", form: "falaria" },
            { person: "nós", form: "falaríamos" },
            { person: "vós", form: "falaríeis" },
            { person: "eles/elas", form: "falariam" }
          ],
          examples: [
            "Eu falaria contigo se tivesse tempo. (I would speak with you if I had time.)",
            "Tu falarias português? (Would you speak Portuguese?)",
            "Ela falaria mais, mas é tímida. (She would speak more, but she is shy.)"
          ]
        },
        {
          tense: "Italian conditional (parlare)",
          conjugations: [
            { person: "io", form: "parlerei" },
            { person: "tu", form: "parleresti" },
            { person: "lui/lei", form: "parlerebbe" },
            { person: "noi", form: "parleremmo" },
            { person: "voi", form: "parlereste" },
            { person: "loro", form: "parlerebbero" }
          ],
          examples: [
            "Io parlerei con te se avessi tempo. (I would speak with you if I had time.)",
            "Tu parleresti italiano? (Would you speak Italian?)",
            "Lei parlerebbe più, ma è timida. (She would speak more, but she is shy.)"
          ]
        }
      ]
    },
    {
      name: "Subjunctive present – That I speak",
      description: "Subjunctive mood – doubt, desire, hypothetical – recognition focus",
      concepts: [
        {
          tense: "Spanish subjunctive -ar (hablar)",
          conjugations: [
            { person: "yo", form: "hable" },
            { person: "tú", form: "hables" },
            { person: "él/ella", form: "hable" },
            { person: "nosotros", form: "hablemos" },
            { person: "vosotros", form: "habléis" },
            { person: "ellos/ellas", form: "hablen" }
          ],
          examples: [
            "Espero que yo hable bien. (I hope (that) I speak well.)",
            "Dudo que hables español. (I doubt (that) you speak Spanish.)",
            "Es posible que él hable inglés. (It's possible (that) he speaks English.)"
          ]
        },
        {
          tense: "Portuguese subjunctive -ar (falar)",
          conjugations: [
            { person: "eu", form: "fale" },
            { person: "tu", form: "fales" },
            { person: "ele/ela", form: "fale" },
            { person: "nós", form: "falemos" },
            { person: "vós", form: "faleis" },
            { person: "eles/elas", form: "falem" }
          ],
          examples: [
            "Espero que eu fale bem. (I hope (that) I speak well.)",
            "Duvido que tu fales português. (I doubt (that) you speak Portuguese.)",
            "É possível que ela fale inglês. (It's possible (that) she speaks English.)"
          ]
        },
        {
          tense: "Italian subjunctive -are (parlare)",
          conjugations: [
            { person: "io", form: "parli" },
            { person: "tu", form: "parli" },
            { person: "lui/lei", form: "parli" },
            { person: "noi", form: "parliamo" },
            { person: "voi", form: "parliate" },
            { person: "loro", form: "parlino" }
          ],
          examples: [
            "Spero che io parli bene. (I hope (that) I speak well.)",
            "Dubito che tu parli italiano. (I doubt (that) you speak Italian.)",
            "È possibile che lei parli inglese. (It's possible (that) she speaks English.)"
          ]
        }
      ]
    }
  ];

  const current = concepts[currentConcept];
  const totalConcepts = concepts.length;

  const handleNext = () => {
    if (currentConcept < totalConcepts - 1) {
      setCurrentConcept(currentConcept + 1);
      setShowConjugation(false);
    }
  };

  const handlePrev = () => {
    if (currentConcept > 0) {
      setCurrentConcept(currentConcept - 1);
      setShowConjugation(false);
    }
  };

  const handleReset = () => {
    setCurrentConcept(0);
    setShowConjugation(false);
  };

  const isLastConcept = currentConcept === totalConcepts - 1;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', color: '#e0e0e0', padding: '2rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Polyglot Verb Conjugations
          </h1>
          <p style={{ fontSize: '1rem', color: '#a0a0a0' }}>
            Concept {currentConcept + 1}/{totalConcepts}
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ background: '#0f3460', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
              height: '100%',
              width: `${((currentConcept + 1) / totalConcepts) * 100}%`,
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>

        {/* Concept Title */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#ffffff' }}>
            {current.name}
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#a0a0a0' }}>
            {current.description}
          </p>
        </div>

        {/* Conjugation Tables */}
        <div style={{ display: 'grid', gap: '2rem', marginBottom: '2rem' }}>
          {current.concepts.map((concept, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              backdropFilter: 'blur(10px)',
            }}>
              {/* Tense Label */}
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#00d4ff' }}>
                {concept.tense}
              </h3>

              {/* Show/Hide Toggle */}
              <button
                onClick={() => setShowConjugation(!showConjugation)}
                style={{
                  background: showConjugation ? 'rgba(0, 212, 255, 0.3)' : 'rgba(124, 58, 237, 0.2)',
                  border: showConjugation ? '2px solid #00d4ff' : '1px solid rgba(124, 58, 237, 0.5)',
                  color: showConjugation ? '#00d4ff' : '#a78bfa',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {showConjugation ? '✓ Show Conjugation' : 'Show Conjugation'}
              </button>

              {/* Conjugation Table */}
              {showConjugation && (
                <>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem',
                    color: '#e0e0e0'
                  }}>
                    <tbody>
                      {concept.conjugations.map((conj, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid rgba(0, 212, 255, 0.2)' }}>
                          <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#7c3aed', width: '25%' }}>
                            {conj.person}
                          </td>
                          <td style={{ padding: '0.75rem', color: '#00d4ff', fontSize: '1.1rem' }}>
                            {conj.form}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Example Sentences */}
                  <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid #00d4ff' }}>
                    <p style={{ fontSize: '0.85rem', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      Examples
                    </p>
                    {concept.examples.map((example, idx) => (
                      <p key={idx} style={{ fontSize: '0.9rem', color: '#e0e0e0', marginBottom: idx < concept.examples.length - 1 ? '0.5rem' : '0' }}>
                        {example}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <button
            onClick={handlePrev}
            disabled={currentConcept === 0}
            style={{
              background: 'rgba(255, 100, 100, 0.2)',
              border: '1px solid rgba(255, 100, 100, 0.5)',
              color: '#ff6464',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              opacity: currentConcept === 0 ? 0.5 : 1
            }}
          >
            ← Back
          </button>

          <button
            onClick={handleNext}
            disabled={isLastConcept}
            style={{
              background: isLastConcept ? 'rgba(124, 58, 237, 0.2)' : 'linear-gradient(90deg, #00d4ff, #7c3aed)',
              border: 'none',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: isLastConcept ? 'default' : 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600',
              opacity: isLastConcept ? 0.5 : 1
            }}
          >
            Next →
          </button>

          <button
            onClick={handleReset}
            style={{
              background: 'rgba(255, 200, 100, 0.2)',
              border: '1px solid rgba(255, 200, 100, 0.5)',
              color: '#ffc864',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerbConjugationDrill;