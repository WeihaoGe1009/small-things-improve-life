import React, { useState } from 'react';

const VerbSentenceCompletionDrill = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const drillData = {
    title: "Spanish/Portuguese/Italian -ar/-are verbs – Present tense (sentences)",
    pattern: "Present indicative",
    sentences: [
      {
        english_complete: "I speak Spanish.",
        spanish: { before: "Yo ", after: " español.", answer: "hablo" },
        portuguese: { before: "Eu ", after: " português.", answer: "falo" },
        italian: { before: "Io ", after: " italiano.", answer: "parlo" }
      },
      {
        english_complete: "You sing very well.",
        spanish: { before: "Tú ", after: " muy bien.", answer: "cantas" },
        portuguese: { before: "Tu ", after: " muito bem.", answer: "cantas" },
        italian: { before: "Tu ", after: " molto bene.", answer: "canti" }
      },
      {
        english_complete: "He dances in the nightclub.",
        spanish: { before: "Él ", after: " en la discoteca.", answer: "baila" },
        portuguese: { before: "Ele ", after: " na discoteca.", answer: "dança" },
        italian: { before: "Lui ", after: " in discoteca.", answer: "balla" }
      },
      {
        english_complete: "We work in an office.",
        spanish: { before: "Nosotros ", after: " en una oficina.", answer: "trabajamos" },
        portuguese: { before: "Nós ", after: " em um escritório.", answer: "trabalhamos" },
        italian: { before: "Noi ", after: " in un ufficio.", answer: "lavoriamo" }
      },
      {
        english_complete: "They study mathematics.",
        spanish: { before: "Ellos ", after: " matemáticas.", answer: "estudian" },
        portuguese: { before: "Eles ", after: " matemática.", answer: "estudam" },
        italian: { before: "Loro ", after: " matematica.", answer: "studiano" }
      },
      {
        english_complete: "I wait for the bus.",
        spanish: { before: "Yo ", after: " el autobús.", answer: "espero" },
        portuguese: { before: "Eu ", after: " o ônibus.", answer: "espero" },
        italian: { before: "Io ", after: " l'autobus.", answer: "spero" }
      },
      {
        english_complete: "Where do you buy the food?",
        spanish: { before: "¿Dónde ", after: " tú la comida?", answer: "compras" },
        portuguese: { before: "Onde você ", after: " a comida?", answer: "compra" },
        italian: { before: "Dove tu ", after: " il cibo?", answer: "compri" }
      },
      {
        english_complete: "We travel to Madrid.",
        spanish: { before: "Nosotros ", after: " a Madrid.", answer: "viajamos" },
        portuguese: { before: "Nós ", after: " para Madri.", answer: "viajamos" },
        italian: { before: "Noi ", after: " a Madrid.", answer: "viaggiamo" }
      },
      {
        english_complete: "She swims in the pool.",
        spanish: { before: "Ella ", after: " en la piscina.", answer: "nada" },
        portuguese: { before: "Ela ", after: " na piscina.", answer: "nada" },
        italian: { before: "Lei ", after: " in piscina.", answer: "nuota" }
      },
      {
        english_complete: "I call you tomorrow.",
        spanish: { before: "Yo te ", after: " mañana.", answer: "llamo" },
        portuguese: { before: "Eu te ", after: " amanhã.", answer: "chamo" },
        italian: { before: "Io ti ", after: " domani.", answer: "chiamo" }
      },
      {
        english_complete: "They rest on the weekend.",
        spanish: { before: "Ellos ", after: " el fin de semana.", answer: "descansan" },
        portuguese: { before: "Eles ", after: " no fim de semana.", answer: "descansam" },
        italian: { before: "Loro ", after: " nel fine settimana.", answer: "riposano" }
      },
      {
        english_complete: "We walk in the park.",
        spanish: { before: "Nosotros ", after: " en el parque.", answer: "caminamos" },
        portuguese: { before: "Nós ", after: " no parque.", answer: "caminhamos" },
        italian: { before: "Noi ", after: " nel parco.", answer: "camminiamo" }
      },
      {
        english_complete: "What do you watch in the cinema?",
        spanish: { before: "¿Qué ", after: " tú en el cine?", answer: "miras" },
        portuguese: { before: "O que você ", after: " no cinema?", answer: "olha" },
        italian: { before: "Cosa tu ", after: " al cinema?", answer: "guardi" }
      },
      {
        english_complete: "I always listen to music.",
        spanish: { before: "Yo siempre ", after: " música.", answer: "escucho" },
        portuguese: { before: "Eu sempre ", after: " música.", answer: "ouço" },
        italian: { before: "Io sempre ", after: " musica.", answer: "ascolto" }
      },
      {
        english_complete: "She prepares dinner.",
        spanish: { before: "Ella ", after: " la cena.", answer: "prepara" },
        portuguese: { before: "Ela ", after: " a ceia.", answer: "prepara" },
        italian: { before: "Lei ", after: " la cena.", answer: "prepara" }
      },
      {
        english_complete: "Do you use a computer?",
        spanish: { before: "¿", after: " tú un ordenador?", answer: "usas" },
        portuguese: { before: "Você ", after: " um computador?", answer: "usa" },
        italian: { before: "Tu ", after: " un computer?", answer: "usi" }
      },
      {
        english_complete: "I think that it is correct.",
        spanish: { before: "Yo ", after: " que es correcto.", answer: "pienso" },
        portuguese: { before: "Eu ", after: " que é correto.", answer: "penso" },
        italian: { before: "Io ", after: " che è corretto.", answer: "penso" }
      },
      {
        english_complete: "We finish the work.",
        spanish: { before: "Nosotros ", after: " el trabajo.", answer: "terminamos" },
        portuguese: { before: "Nós ", after: " o trabalho.", answer: "terminamos" },
        italian: { before: "Noi ", after: " il lavoro.", answer: "terminiamo" }
      },
      {
        english_complete: "When do you start?",
        spanish: { before: "¿Cuándo ", after: " tú?", answer: "empiezas" },
        portuguese: { before: "Quando você ", after: "?", answer: "começa" },
        italian: { before: "Quando tu ", after: "?", answer: "inizi" }
      },
      {
        english_complete: "They cross the street.",
        spanish: { before: "Ellos ", after: " la calle.", answer: "cruzan" },
        portuguese: { before: "Eles ", after: " a rua.", answer: "cruzam" },
        italian: { before: "Loro ", after: " la strada.", answer: "attraversano" }
      }
    ]
  };

  const currentSentence = drillData.sentences[currentSentenceIndex];
  const totalSentences = drillData.sentences.length;

  const getAnswerStatus = (lang) => {
    const key = `${currentSentenceIndex}-${lang}`;
    return userAnswers[key] || '';
  };

  const isAnswerCorrect = (lang, answer) => {
    return answer.trim().toLowerCase() === currentSentence[lang].answer.toLowerCase();
  };

  const isAllCorrect = () => {
    return isAnswerCorrect('spanish', getAnswerStatus('spanish')) &&
           isAnswerCorrect('portuguese', getAnswerStatus('portuguese')) &&
           isAnswerCorrect('italian', getAnswerStatus('italian'));
  };

  const handleInputChange = (lang, value) => {
    const key = `${currentSentenceIndex}-${lang}`;
    setUserAnswers(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = () => {
    setSubmitted(prev => ({
      ...prev,
      [currentSentenceIndex]: true
    }));
  };

  const handleNext = () => {
    if (currentSentenceIndex < totalSentences - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex(currentSentenceIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentSentenceIndex(0);
    setUserAnswers({});
    setSubmitted({});
  };

  const isLastSentence = currentSentenceIndex === totalSentences - 1;
  const isCurrentSubmitted = submitted[currentSentenceIndex];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', color: '#e0e0e0', padding: '2rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Sentence Completion Drill
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#7c8aff', marginBottom: '0.5rem' }}>
            {drillData.pattern}
          </p>
          <p style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>
            {drillData.title}
          </p>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ background: '#0f3460', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.75rem' }}>
            <div style={{
              background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
              height: '100%',
              width: `${((currentSentenceIndex + 1) / totalSentences) * 100}%`,
              transition: 'width 0.3s ease'
            }}></div>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>
            Sentence {currentSentenceIndex + 1}/{totalSentences}
          </p>
        </div>

        {/* Main Exercise */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          borderRadius: '12px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          marginBottom: '2rem'
        }}>
          {/* English Reference (Complete) */}
          <div style={{ marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0, 212, 255, 0.2)' }}>
            <p style={{ fontSize: '0.75rem', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: '600' }}>
              English Reference
            </p>
            <p style={{ fontSize: '1.15rem', color: '#ffffff', lineHeight: '1.6', fontWeight: '500' }}>
              {currentSentence.english_complete}
            </p>
          </div>

          {/* Language Input Sections */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '2rem' }}>
            {/* Spanish */}
            <div>
              <p style={{ fontSize: '0.75rem', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontWeight: '600' }}>
                Spanish
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1rem', color: '#ffffff' }}>
                  {currentSentence.spanish.before}
                </span>
                <input
                  type="text"
                  value={getAnswerStatus('spanish')}
                  onChange={(e) => handleInputChange('spanish', e.target.value)}
                  placeholder="..."
                  disabled={isCurrentSubmitted}
                  style={{
                    padding: '0.5rem 0.75rem',
                    fontSize: '1rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: isCurrentSubmitted && isAnswerCorrect('spanish', getAnswerStatus('spanish')) ? '2px solid #00ff00' : 
                            isCurrentSubmitted ? '2px solid #ff6464' : '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '4px',
                    color: '#00d4ff',
                    minWidth: '120px',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease'
                  }}
                />
                <span style={{ fontSize: '1rem', color: '#ffffff' }}>
                  {currentSentence.spanish.after}
                </span>
              </div>
            </div>

            {/* Portuguese */}
            <div>
              <p style={{ fontSize: '0.75rem', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontWeight: '600' }}>
                Portuguese
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1rem', color: '#ffffff' }}>
                  {currentSentence.portuguese.before}
                </span>
                <input
                  type="text"
                  value={getAnswerStatus('portuguese')}
                  onChange={(e) => handleInputChange('portuguese', e.target.value)}
                  placeholder="..."
                  disabled={isCurrentSubmitted}
                  style={{
                    padding: '0.5rem 0.75rem',
                    fontSize: '1rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: isCurrentSubmitted && isAnswerCorrect('portuguese', getAnswerStatus('portuguese')) ? '2px solid #00ff00' : 
                            isCurrentSubmitted ? '2px solid #ff6464' : '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '4px',
                    color: '#00d4ff',
                    minWidth: '120px',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease'
                  }}
                />
                <span style={{ fontSize: '1rem', color: '#ffffff' }}>
                  {currentSentence.portuguese.after}
                </span>
              </div>
            </div>

            {/* Italian */}
            <div>
              <p style={{ fontSize: '0.75rem', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontWeight: '600' }}>
                Italian
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1rem', color: '#ffffff' }}>
                  {currentSentence.italian.before}
                </span>
                <input
                  type="text"
                  value={getAnswerStatus('italian')}
                  onChange={(e) => handleInputChange('italian', e.target.value)}
                  placeholder="..."
                  disabled={isCurrentSubmitted}
                  style={{
                    padding: '0.5rem 0.75rem',
                    fontSize: '1rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: isCurrentSubmitted && isAnswerCorrect('italian', getAnswerStatus('italian')) ? '2px solid #00ff00' : 
                            isCurrentSubmitted ? '2px solid #ff6464' : '1px solid rgba(0, 212, 255, 0.3)',
                    borderRadius: '4px',
                    color: '#00d4ff',
                    minWidth: '120px',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease'
                  }}
                />
                <span style={{ fontSize: '1rem', color: '#ffffff' }}>
                  {currentSentence.italian.after}
                </span>
              </div>
            </div>
          </div>

          {/* Feedback */}
          {isCurrentSubmitted && (
            <div style={{
              background: isAllCorrect() ? 'rgba(0, 255, 0, 0.15)' : 'rgba(255, 100, 100, 0.15)',
              border: isAllCorrect() ? '1px solid rgba(0, 255, 0, 0.5)' : '1px solid rgba(255, 100, 100, 0.5)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: isAllCorrect() ? '#00ff00' : '#ff6464' }}>
                {isAllCorrect() ? '✓ All correct!' : '✗ Some answers need correction.'}
              </p>
            </div>
          )}

          {/* Submit Button */}
          {!isCurrentSubmitted && (
            <div>
              <button
                onClick={handleSubmit}
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Submit Answer
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <button
            onClick={handlePrev}
            disabled={currentSentenceIndex === 0}
            style={{
              background: 'rgba(255, 100, 100, 0.2)',
              border: '1px solid rgba(255, 100, 100, 0.5)',
              color: '#ff6464',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              opacity: currentSentenceIndex === 0 ? 0.5 : 1
            }}
          >
            ← Back
          </button>

          <button
            onClick={handleNext}
            disabled={isLastSentence}
            style={{
              background: isLastSentence ? 'rgba(124, 58, 237, 0.2)' : 'linear-gradient(90deg, #00d4ff, #7c3aed)',
              border: 'none',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: isLastSentence ? 'default' : 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600',
              opacity: isLastSentence ? 0.5 : 1
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

export default VerbSentenceCompletionDrill;