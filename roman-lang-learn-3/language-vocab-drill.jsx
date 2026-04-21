import React, { useState } from 'react';

const LanguageVocabDrill = () => {
  const [currentUnit, setCurrentUnit] = useState(0);
  const [currentChunk, setCurrentChunk] = useState(0);
  const [showTranslations, setShowTranslations] = useState(false);

  const units = [
    {
      name: "Common pronouns",
      vocabulary: [
        { en: "I", fr: "je /joː/", es: "yo /ˈjo/", pt: "eu /ˈɛw/", it: "io /ˈio/" },
        { en: "you (singular)", fr: "tu /ty/", es: "tú /ˈtu/", pt: "tu /tu/", it: "tu /tu/" },
        { en: "he", fr: "il /il/", es: "él /ˈɛl/", pt: "ele /ˈɛlə/", it: "lui /ˈlu.i/" },
        { en: "she", fr: "elle /ɛl/", es: "ella /ˈɛʎa/", pt: "ela /ˈɛla/", it: "lei /ˈle.i/" },
        { en: "we", fr: "nous /nu/", es: "nosotros /noˈsotros/", pt: "nós /ˈnɔs/", it: "noi /ˈno.i/" },
        { en: "you (plural)", fr: "vous /vu/", es: "vosotros /boˈsotros/", pt: "vós /ˈvɔs/", it: "voi /ˈvo.i/" },
        { en: "they (m)", fr: "ils /il/", es: "ellos /ˈɛʎos/", pt: "eles /ˈɛləs/", it: "loro /ˈlo.ro/" },
        { en: "they (f)", fr: "elles /ɛl/", es: "ellas /ˈɛʎas/", pt: "elas /ˈɛlas/", it: "loro /ˈlo.ro/" }
      ]
    },
    {
      name: "Basic verbs (infinitive)",
      vocabulary: [
        { en: "to be", fr: "être /ɛtʁ/", es: "ser /ser/", pt: "ser /ser/", it: "essere /ˈɛs.se.re/" },
        { en: "to have", fr: "avoir /avwaʁ/", es: "haber /aˈβeɾ/", pt: "haver /aˈveɾ/", it: "avere /aˈvɛ.re/" },
        { en: "to go", fr: "aller /ale/", es: "ir /iɾ/", pt: "ir /iɾ/", it: "andare /anˈda.re/" },
        { en: "to do/make", fr: "faire /fɛʁ/", es: "hacer /aˈθeɾ/", pt: "fazer /faˈzeɾ/", it: "fare /ˈfa.re/" },
        { en: "to want", fr: "vouloir /vulwaʁ/", es: "querer /keˈɾeɾ/", pt: "querer /keˈɾeɾ/", it: "volere /voˈle.re/" },
        { en: "to can/be able", fr: "pouvoir /puvwaʁ/", es: "poder /poˈðeɾ/", pt: "poder /poˈdeɾ/", it: "potere /poˈte.re/" },
        { en: "to say", fr: "dire /diʁ/", es: "decir /deˈθiɾ/", pt: "dizer /diˈzeɾ/", it: "dire /ˈdi.re/" },
        { en: "to see", fr: "voir /vwaʁ/", es: "ver /beɾ/", pt: "ver /veɾ/", it: "vedere /veˈde.re/" }
      ]
    },
    {
      name: "Numbers 0–20",
      vocabulary: [
        { en: "0", fr: "zéro /ˈzeɾo/", es: "cero /ˈθeɾo/", pt: "zero /ˈzeɾu/", it: "zero /ˈdze.ro/" },
        { en: "1", fr: "un /œ̃/", es: "uno /ˈuno/", pt: "um /ũ/", it: "uno /ˈu.no/" },
        { en: "2", fr: "deux /dø/", es: "dos /dos/", pt: "dois /ˈdoys/", it: "due /ˈdu.e/" },
        { en: "3", fr: "trois /tʁwa/", es: "tres /tɾes/", pt: "três /ˈtrɛs/", it: "tre /tre/" },
        { en: "4", fr: "quatre /katʁ/", es: "cuatro /ˈkwatɾo/", pt: "quatro /ˈkwatɾu/", it: "quattro /ˈkwa.tro/" },
        { en: "5", fr: "cinq /sɛ̃k/", es: "cinco /ˈθinko/", pt: "cinco /ˈsĩku/", it: "cinque /ˈtʃiŋ.kwe/" },
        { en: "10", fr: "dix /dis/", es: "diez /djes/", pt: "dez /des/", it: "dieci /ˈdye.tʃi/" },
        { en: "20", fr: "vingt /vɛ̃/", es: "veinte /ˈbeinte/", pt: "vinte /ˈvĩtə/", it: "venti /ˈven.ti/" }
      ]
    },
    {
      name: "Days, months, seasons",
      vocabulary: [
        { en: "Monday", fr: "lundi /lœ̃di/", es: "lunes /ˈlunes/", pt: "segunda /seˈɡũda/", it: "lunedì /luneˈdi/" },
        { en: "Tuesday", fr: "mardi /maʁdi/", es: "martes /ˈmaɾtes/", pt: "terça /ˈtɛɾsa/", it: "martedì /marteˈdi/" },
        { en: "Wednesday", fr: "mercredi /mɛʁkʁədi/", es: "miércoles /ˈmjeɾkoles/", pt: "quarta /ˈkwaɾta/", it: "mercoledì /merkoloˈdi/" },
        { en: "Thursday", fr: "jeudi /ʒødi/", es: "jueves /ˈxweβes/", pt: "quinta /ˈkĩta/", it: "giovedì /dʒovedˈdi/" },
        { en: "Friday", fr: "vendredi /vɑ̃dʁədi/", es: "viernes /ˈbjeɾnes/", pt: "sexta /ˈsɛʃta/", it: "venerdì /venerˈdi/" },
        { en: "Saturday", fr: "samedi /samdi/", es: "sábado /ˈsaβado/", pt: "sábado /ˈsabadu/", it: "sabato /ˈsa.ba.to/" },
        { en: "Sunday", fr: "dimanche /dimɑ̃ʃ/", es: "domingo /doˈmiŋɡo/", pt: "domingo /doˈmĩɡu/", it: "domenica /doˈmenica/" },
        { en: "January", fr: "janvier /ɑ̃vje/", es: "enero /eˈneɾo/", pt: "janeiro /ʒaˈnejɾu/", it: "gennaio /dʒenˈna.jo/" }
      ]
    },
    {
      name: "Question words",
      vocabulary: [
        { en: "who", fr: "qui /ki/", es: "quién /ˈkjen/", pt: "quem /ˈkɛ̃/", it: "chi /ki/" },
        { en: "what", fr: "quoi /kwa/", es: "qué /ˈke/", pt: "o que /u ˈke/", it: "che /ke/" },
        { en: "where", fr: "où /u/", es: "dónde /ˈdonde/", pt: "onde /ˈõde/", it: "dove /ˈdo.ve/" },
        { en: "when", fr: "quand /kɑ̃/", es: "cuándo /ˈkwando/", pt: "quando /ˈkwã.du/", it: "quando /ˈkwan.do/" },
        { en: "why", fr: "pourquoi /puʁkwa/", es: "por qué /poɾ ˈke/", pt: "por quê /poɾ ˈke/", it: "perché /perˈke/" },
        { en: "how", fr: "comment /komɑ̃/", es: "cómo /ˈkomo/", pt: "como /ˈko.mu/", it: "come /ˈko.me/" },
        { en: "how many", fr: "combien /kɔ̃bjɛ̃/", es: "cuántos /ˈkwantos/", pt: "quantos /ˈkwã.tus/", it: "quanti /ˈkwan.ti/" },
        { en: "which", fr: "lequel /ləkɛl/", es: "cuál /ˈkwal/", pt: "qual /ˈkwal/", it: "quale /ˈkwa.le/" }
      ]
    },
    {
      name: "Emotions/feelings",
      vocabulary: [
        { en: "happy", fr: "heureux /ørø/", es: "feliz /feˈlis/", pt: "feliz /feˈlis/", it: "felice /feˈli.tʃe/" },
        { en: "sad", fr: "triste /tʁist/", es: "triste /ˈtɾiste/", pt: "triste /ˈtɾistə/", it: "triste /ˈtri.ste/" },
        { en: "angry", fr: "en colère /ɑ̃kɔlɛʁ/", es: "enojado /enoˈxado/", pt: "bravo /ˈbɾavu/", it: "arrabbiato /arranˈbja.to/" },
        { en: "tired", fr: "fatigué /fatigɛ/", es: "cansado /kanˈsado/", pt: "cansado /kãˈsadu/", it: "stanco /ˈstan.ko/" },
        { en: "scared", fr: "peur /pœʁ/", es: "asustado /asusˈtado/", pt: "assustado /asusˈtadu/", it: "spaventato /spavvenˈta.to/" },
        { en: "surprised", fr: "surpris /syʁpʁi/", es: "sorprendido /sorprenˈdido/", pt: "surpreso /supɾeˈzu/", it: "sorpreso /sorˈpre.so/" },
        { en: "confused", fr: "confus /kɔ̃fy/", es: "confundido /konfunˈdido/", pt: "confuso /kõˈfuzu/", it: "confuso /konˈfu.so/" },
        { en: "love", fr: "amour /amuʁ/", es: "amor /aˈmoɾ/", pt: "amor /aˈmoɾ/", it: "amore /aˈmo.re/" }
      ]
    },
    {
      name: "Common adverbs",
      vocabulary: [
        { en: "very", fr: "très /tʁɛ/", es: "muy /ˈmwi/", pt: "muito /ˈmwitu/", it: "molto /ˈmol.to/" },
        { en: "also", fr: "aussi /osi/", es: "también /tamˈbjen/", pt: "também /tãˈbɛ̃/", it: "anche /ˈan.ke/" },
        { en: "still", fr: "encore /ɑ̃koʁ/", es: "todavía /todaˈβia/", pt: "ainda /aˈĩda/", it: "ancora /ˈan.ko.ra/" },
        { en: "only", fr: "seulement /sølmɑ̃/", es: "solo /ˈsolo/", pt: "só /ˈsɔ/", it: "solo /ˈso.lo/" },
        { en: "now", fr: "maintenant /mɛ̃tnɑ̃/", es: "ahora /aˈoɾa/", pt: "agora /aˈɡoɾa/", it: "adesso /aˈdɛs.so/" },
        { en: "already", fr: "déjà /deʒa/", es: "ya /ˈja/", pt: "já /ˈʒa/", it: "già /ˈdʒa/" },
        { en: "never", fr: "jamais /ʒamɛ/", es: "nunca /ˈnũŋka/", pt: "nunca /ˈnũka/", it: "mai /ˈma.i/" },
        { en: "always", fr: "toujours /tuʒuʁ/", es: "siempre /ˈsjempɾe/", pt: "sempre /ˈsẽpɾə/", it: "sempre /ˈsem.pre/" }
      ]
    },
    {
      name: "Colors",
      vocabulary: [
        { en: "red", fr: "rouge /ʁuʒ/", es: "rojo /ˈɾoxo/", pt: "vermelho /veɾˈmeʎu/", it: "rosso /ˈros.so/" },
        { en: "blue", fr: "bleu /blø/", es: "azul /aˈθul/", pt: "azul /aˈzul/", it: "blu /blu/" },
        { en: "green", fr: "vert /vɛʁ/", es: "verde /ˈbeɾde/", pt: "verde /ˈvɛɾdə/", it: "verde /ˈver.de/" },
        { en: "yellow", fr: "jaune /ʒon/", es: "amarillo /amaˈɾiʎo/", pt: "amarelo /amaˈɾɛlu/", it: "giallo /ˈdʒal.lo/" },
        { en: "black", fr: "noir /nwaʁ/", es: "negro /ˈneɡɾo/", pt: "preto /ˈpɾetu/", it: "nero /ˈne.ro/" },
        { en: "white", fr: "blanc /blɑ̃/", es: "blanco /ˈblɑŋko/", pt: "branco /ˈbɾã.ku/", it: "bianco /ˈbjan.ko/" },
        { en: "gray", fr: "gris /ɡʁi/", es: "gris /ɡɾis/", pt: "cinzento /sĩˈzẽtu/", it: "grigio /ˈɡri.dʒo/" },
        { en: "brown", fr: "marron /maˈʁɔ̃/", es: "marrón /maˈɾon/", pt: "castanho /kasˈtaɲu/", it: "marrone /marˈro.ne/" }
      ]
    },
    {
      name: "Family relations",
      vocabulary: [
        { en: "mother", fr: "mère /mɛʁ/", es: "madre /ˈmaðɾe/", pt: "mãe /ˈmɛ̃/", it: "madre /ˈma.dre/" },
        { en: "father", fr: "père /pɛʁ/", es: "padre /ˈpadɾe/", pt: "pai /ˈpay/", it: "padre /ˈpa.dre/" },
        { en: "sister", fr: "soeur /sœʁ/", es: "hermana /eɾˈmana/", pt: "irmã /iɾˈmɛ̃/", it: "sorella /soˈrɛl.la/" },
        { en: "brother", fr: "frère /fʁɛʁ/", es: "hermano /eɾˈmano/", pt: "irmão /iɾˈmɛ̃w/", it: "fratello /fraˈtɛl.lo/" },
        { en: "daughter", fr: "fille /fij/", es: "hija /ˈixa/", pt: "filha /ˈfiya/", it: "figlia /ˈfil.lja/" },
        { en: "son", fr: "fils /fis/", es: "hijo /ˈixo/", pt: "filho /ˈfiju/", it: "figlio /ˈfil.jo/" },
        { en: "grandmother", fr: "grand-mère /ɡʁɑ̃mɛʁ/", es: "abuela /aˈβwela/", pt: "avó /aˈvɔ/", it: "nonna /ˈnon.na/" },
        { en: "grandfather", fr: "grand-père /ɡʁɑ̃pɛʁ/", es: "abuelo /aˈβwelo/", pt: "avô /aˈvo/", it: "nonno /ˈnon.no/" }
      ]
    },
    {
      name: "Body parts",
      vocabulary: [
        { en: "head", fr: "tête /tɛt/", es: "cabeza /kaˈβeθa/", pt: "cabeça /kaˈbesa/", it: "testa /ˈte.sta/" },
        { en: "arm", fr: "bras /bʁa/", es: "brazo /ˈbɾaθo/", pt: "braço /ˈbɾasu/", it: "braccio /ˈbra.tʃo/" },
        { en: "leg", fr: "jambe /ʒɑ̃b/", es: "pierna /ˈpjeɾna/", pt: "perna /ˈpɛɾna/", it: "gamba /ˈgam.ba/" },
        { en: "hand", fr: "main /mɛ̃/", es: "mano /ˈmano/", pt: "mão /ˈmɛ̃w/", it: "mano /ˈma.no/" },
        { en: "foot", fr: "pied /pje/", es: "pie /ˈpie/", pt: "pé /ˈpe/", it: "piede /ˈpje.de/" },
        { en: "eye", fr: "oeil /œj/", es: "ojo /ˈoxo/", pt: "olho /ˈoʎu/", it: "occhio /ˈo.kjo/" },
        { en: "ear", fr: "oreille /oʁɛj/", es: "oído /oˈido/", pt: "ouvido /owˈvidu/", it: "orecchio /oˈrɛk.kjo/" },
        { en: "mouth", fr: "bouche /buʃ/", es: "boca /ˈboka/", pt: "boca /ˈboka/", it: "bocca /ˈbok.ka/" }
      ]
    },
    {
      name: "Basic prepositions",
      vocabulary: [
        { en: "in", fr: "dans /dɑ̃/", es: "en /ɛn/", pt: "em /ɛ̃/", it: "in /in/" },
        { en: "on", fr: "sur /syʁ/", es: "en /ɛn/", pt: "em /ɛ̃/", it: "su /su/" },
        { en: "under", fr: "sous /su/", es: "bajo /ˈbaxo/", pt: "sob /ˈsoβ/", it: "sotto /ˈsot.to/" },
        { en: "with", fr: "avec /avɛk/", es: "con /kɔn/", pt: "com /ˈkõ/", it: "con /kɔn/" },
        { en: "to/towards", fr: "à /a/", es: "a /a/", pt: "a /a/", it: "a /a/" },
        { en: "from", fr: "de /də/", es: "de /de/", pt: "de /de/", it: "da /da/" },
        { en: "between", fr: "entre /ɑ̃tʁ/", es: "entre /ˈɛntɾe/", pt: "entre /ˈɛ̃tɾe/", it: "tra /tra/" },
        { en: "without", fr: "sans /sɑ̃/", es: "sin /sin/", pt: "sem /ˈsɛ̃/", it: "senza /ˈsɛn.tsa/" }
      ]
    },
    {
      name: "Food basics",
      vocabulary: [
        { en: "bread", fr: "pain /pɛ̃/", es: "pan /pan/", pt: "pão /ˈpɛ̃w/", it: "pane /ˈpa.ne/" },
        { en: "water", fr: "eau /o/", es: "agua /ˈaɡwa/", pt: "água /ˈaɡwa/", it: "acqua /ˈa.kwa/" },
        { en: "milk", fr: "lait /lɛ/", es: "leche /ˈletʃe/", pt: "leite /ˈlejtə/", it: "latte /ˈla.te/" },
        { en: "cheese", fr: "fromage /fʁomaʒ/", es: "queso /ˈkeso/", pt: "queijo /ˈkejʒu/", it: "formaggio /forˈma.dʒo/" },
        { en: "apple", fr: "pomme /pɔm/", es: "manzana /manˈθana/", pt: "maçã /maˈsɛ̃/", it: "mela /ˈme.la/" },
        { en: "meat", fr: "viande /vjɑ̃d/", es: "carne /ˈkaɾne/", pt: "carne /ˈkaɾnə/", it: "carne /ˈka.rne/" },
        { en: "fish", fr: "poisson /pwasɔ̃/", es: "pescado /pesˈkado/", pt: "peixe /ˈpejʃə/", it: "pesce /ˈpe.ʃe/" },
        { en: "coffee", fr: "café /kafe/", es: "café /kaˈfe/", pt: "café /kaˈfe/", it: "caffè /kafˈfɛ/" }
      ]
    },
    {
      name: "Household objects",
      vocabulary: [
        { en: "table", fr: "table /tabl/", es: "mesa /ˈmesa/", pt: "mesa /ˈmɛza/", it: "tavolo /ˈta.vo.lo/" },
        { en: "chair", fr: "chaise /ʃɛz/", es: "silla /ˈsiʎa/", pt: "cadeira /kaˈdejɾa/", it: "sedia /ˈsɛ.dja/" },
        { en: "bed", fr: "lit /li/", es: "cama /ˈkama/", pt: "cama /ˈkama/", it: "letto /ˈle.to/" },
        { en: "door", fr: "porte /pɔʁt/", es: "puerta /ˈpweɾta/", pt: "porta /ˈpoɾta/", it: "porta /ˈpo.rta/" },
        { en: "window", fr: "fenêtre /fənɛtʁ/", es: "ventana /benˈtana/", pt: "janela /ʒaˈnɛla/", it: "finestra /fiˈne.stra/" },
        { en: "lamp", fr: "lampe /lɑ̃p/", es: "lámpara /ˈlampara/", pt: "lâmpada /ˈlɛ̃pada/", it: "lampada /ˈla.mpa.da/" },
        { en: "book", fr: "livre /livʁ/", es: "libro /ˈliβɾo/", pt: "livro /ˈlivɾu/", it: "libro /ˈli.bro/" },
        { en: "pen", fr: "stylo /stilo/", es: "bolígrafo /boˈliɡɾafo/", pt: "caneta /kaˈnɛta/", it: "penna /ˈpɛn.na/" }
      ]
    },
    {
      name: "Clothing items",
      vocabulary: [
        { en: "shirt", fr: "chemise /ʃəmiz/", es: "camisa /kaˈmisa/", pt: "camisa /kaˈmiza/", it: "camicia /kaˈmi.tʃa/" },
        { en: "pants", fr: "pantalon /pɑ̃talɔ̃/", es: "pantalones /pantaˈlones/", pt: "calças /ˈkalsa/", it: "pantaloni /pantaˈlo.ni/" },
        { en: "dress", fr: "robe /ʁɔb/", es: "vestido /besˈtido/", pt: "vestido /vesˈtidu/", it: "vestito /vesˈti.to/" },
        { en: "coat", fr: "manteau /mɑ̃to/", es: "abrigo /aˈβɾiɡo/", pt: "casaco /kaˈzaku/", it: "cappotto /kapˈpo.to/" },
        { en: "hat", fr: "chapeau /ʃapo/", es: "sombrero /somˈbɾeɾo/", pt: "chapéu /ʃaˈpew/", it: "cappello /kapˈpɛl.lo/" },
        { en: "shoe", fr: "chaussure /ʃosy ʁ/", es: "zapato /θaˈpato/", pt: "sapato /saˈpatu/", it: "scarpa /ˈskar.pa/" },
        { en: "sock", fr: "chaussette /ʃoset/", es: "calcetín /kalθeˈtin/", pt: "meia /ˈmejə/", it: "calzino /kalˈtsi.no/" },
        { en: "glove", fr: "gant /ɡɑ̃/", es: "guante /ˈɡwante/", pt: "luva /ˈluva/", it: "guanto /ˈɡwan.to/" }
      ]
    },
    {
      name: "Animals",
      vocabulary: [
        { en: "dog", fr: "chien /ʃjɛ̃/", es: "perro /ˈpeɾo/", pt: "cachorro /kaˈʃoɾu/", it: "cane /ˈka.ne/" },
        { en: "cat", fr: "chat /ʃa/", es: "gato /ˈɡato/", pt: "gato /ˈɡatu/", it: "gatto /ˈgat.to/" },
        { en: "bird", fr: "oiseau /wazo/", es: "pájaro /ˈpaxaɾo/", pt: "pássaro /ˈpasaɾu/", it: "uccello /utˈtʃɛl.lo/" },
        { en: "fish", fr: "poisson /pwasɔ̃/", es: "pez /peθ/", pt: "peixe /ˈpejʃə/", it: "pesce /ˈpe.ʃe/" },
        { en: "horse", fr: "cheval /ʃəval/", es: "caballo /kaˈβaʎo/", pt: "cavalo /kaˈvalu/", it: "cavallo /kaˈval.lo/" },
        { en: "cow", fr: "vache /vaʃ/", es: "vaca /ˈβaka/", pt: "vaca /ˈvaka/", it: "mucca /ˈmuk.ka/" },
        { en: "chicken", fr: "poulet /pule/", es: "pollo /ˈpoʎo/", pt: "frango /ˈfɾã.ɡu/", it: "pollo /ˈpol.lo/" },
        { en: "snake", fr: "serpent /sɛʁpɑ̃/", es: "serpiente /seɾˈpjente/", pt: "serpente /seɾˈpẽtə/", it: "serpente /serˈpɛn.te/" }
      ]
    },
    {
      name: "Professions",
      vocabulary: [
        { en: "doctor", fr: "médecin /mɛdəsɛ̃/", es: "médico /ˈmeðiko/", pt: "médico /ˈmɛdiku/", it: "medico /ˈme.di.ko/" },
        { en: "teacher", fr: "professeur /pɾɔfɛsœʁ/", es: "profesor /pɾofeˈsoɾ/", pt: "professor /pɾofeˈsoɾ/", it: "insegnante /inseɲˈnan.te/" },
        { en: "engineer", fr: "ingénieur /ɛ̃ʒenjœʁ/", es: "ingeniero /indʒeˈnjeɾo/", pt: "engenheiro /ẽʒeˈɲejɾu/", it: "ingegnere /indʒeˈɲe.re/" },
        { en: "artist", fr: "artiste /aʁtist/", es: "artista /aɾˈtista/", pt: "artista /aɾˈtista/", it: "artista /arˈti.sta/" },
        { en: "farmer", fr: "fermier /fɛʁmje/", es: "granjero /ɡɾanˈxeɾo/", pt: "fazendeiro /fazɛ̃ˈdejɾu/", it: "contadino /kontaˈdi.no/" },
        { en: "cook", fr: "cuisinier /kɥizinje/", es: "cocinero /koθiˈneɾo/", pt: "cozinheiro /kuziˈɲejɾu/", it: "cuoco /kuˈo.ko/" },
        { en: "musician", fr: "musicien /myzisʃɛ̃/", es: "músico /ˈmusiko/", pt: "músico /ˈmuziku/", it: "musicista /muziˈtʃi.sta/" },
        { en: "athlete", fr: "athlète /atlɛt/", es: "atleta /atˈleta/", pt: "atleta /atˈlɛta/", it: "atleta /atˈle.ta/" }
      ]
    },
    {
      name: "Weather terms",
      vocabulary: [
        { en: "sun", fr: "soleil /sɔlɛj/", es: "sol /sol/", pt: "sol /ˈsɔl/", it: "sole /ˈso.le/" },
        { en: "rain", fr: "pluie /plɥi/", es: "lluvia /ˈʎuβja/", pt: "chuva /ˈʃuva/", it: "pioggia /ˈpjɔdʒ.dʒa/" },
        { en: "cloud", fr: "nuage /nɥaʒ/", es: "nube /ˈnube/", pt: "nuvem /ˈnuvẽ/", it: "nuvola /ˈnu.vo.la/" },
        { en: "wind", fr: "vent /vɑ̃/", es: "viento /ˈbjento/", pt: "vento /ˈvẽtu/", it: "vento /ˈven.to/" },
        { en: "snow", fr: "neige /nɛʒ/", es: "nieve /ˈnjebe/", pt: "neve /ˈnɛve/", it: "neve /ˈne.ve/" },
        { en: "ice", fr: "glace /ɡlas/", es: "hielo /ˈjelo/", pt: "gelo /ˈʒɛlu/", it: "ghiaccio /ɡˈjat.tʃo/" },
        { en: "cold", fr: "froid /fʁwa/", es: "frío /ˈfɾio/", pt: "frio /ˈfɾiu/", it: "freddo /ˈfre.do/" },
        { en: "hot", fr: "chaud /ʃo/", es: "caliente /kaˈljente/", pt: "quente /ˈkẽtə/", it: "caldo /ˈka.lo/" }
      ]
    },
    {
      name: "Time expressions",
      vocabulary: [
        { en: "hour", fr: "heure /œʁ/", es: "hora /ˈoɾa/", pt: "hora /ˈoɾa/", it: "ora /ˈo.ra/" },
        { en: "minute", fr: "minute /minyt/", es: "minuto /miˈnuto/", pt: "minuto /miˈnutu/", it: "minuto /miˈnu.to/" },
        { en: "second", fr: "seconde /səɡɔ̃d/", es: "segundo /seˈɡundo/", pt: "segundo /seˈɡũdu/", it: "secondo /seˈkɔn.do/" },
        { en: "day", fr: "jour /ʒuʁ/", es: "día /ˈdia/", pt: "dia /ˈdia/", it: "giorno /ˈdʒo.rno/" },
        { en: "week", fr: "semaine /səmɛn/", es: "semana /seˈmana/", pt: "semana /seˈmana/", it: "settimana /settiˈma.na/" },
        { en: "month", fr: "mois /mwa/", es: "mes /mes/", pt: "mês /ˈmɛs/", it: "mese /ˈme.se/" },
        { en: "year", fr: "an /ɑ̃/", es: "año /ˈaɲo/", pt: "ano /ˈanu/", it: "anno /ˈan.no/" },
        { en: "morning", fr: "matin /matɛ̃/", es: "mañana /maˈɲana/", pt: "manhã /maˈɲɛ̃/", it: "mattina /matˈti.na/" }
      ]
    },
    {
      name: "Classroom/learning words",
      vocabulary: [
        { en: "book", fr: "livre /livʁ/", es: "libro /ˈliβɾo/", pt: "livro /ˈlivɾu/", it: "libro /ˈli.bro/" },
        { en: "pen", fr: "stylo /stilo/", es: "bolígrafo /boˈliɡɾafo/", pt: "caneta /kaˈnɛta/", it: "penna /ˈpɛn.na/" },
        { en: "paper", fr: "papier /papje/", es: "papel /paˈpel/", pt: "papel /paˈpɛl/", it: "carta /ˈka.rta/" },
        { en: "language", fr: "langue /lɑ̃ɡ/", es: "lengua /ˈleŋɡwa/", pt: "língua /ˈlĩɡwa/", it: "lingua /ˈlin.ɡwa/" },
        { en: "lesson", fr: "leçon /ləsɔ̃/", es: "lección /lekˈθjon/", pt: "lição /liˈsɛ̃w/", it: "lezione /letsˈjo.ne/" },
        { en: "student", fr: "étudiant /etydjɑ̃/", es: "estudiante /estudˈjante/", pt: "estudante /estuˈdã.tə/", it: "studente /stuˈden.te/" },
        { en: "class", fr: "classe /klas/", es: "clase /ˈklase/", pt: "classe /ˈklasə/", it: "classe /ˈkla.se/" },
        { en: "school", fr: "école /ekɔl/", es: "escuela /esˈkwela/", pt: "escola /isˈkola/", it: "scuola /ˈskwo.la/" }
      ]
    }
  ];

  const chunkSize = 3;
  const unit = units[currentUnit];
  const vocab = unit.vocabulary;
  const totalChunks = Math.ceil(vocab.length / chunkSize);
  const currentVocab = vocab.slice(currentChunk * chunkSize, (currentChunk + 1) * chunkSize);

  const handleNext = () => {
    if (currentChunk < totalChunks - 1) {
      setCurrentChunk(currentChunk + 1);
      setShowTranslations(false);
    } else if (currentUnit < units.length - 1) {
      setCurrentUnit(currentUnit + 1);
      setCurrentChunk(0);
      setShowTranslations(false);
    }
  };

  const handlePrev = () => {
    if (currentChunk > 0) {
      setCurrentChunk(currentChunk - 1);
      setShowTranslations(false);
    } else if (currentUnit > 0) {
      setCurrentUnit(currentUnit - 1);
      setCurrentChunk(Math.ceil(units[currentUnit - 1].vocabulary.length / chunkSize) - 1);
      setShowTranslations(false);
    }
  };

  const handleReset = () => {
    setCurrentUnit(0);
    setCurrentChunk(0);
    setShowTranslations(false);
  };

  const isLastChunk = currentChunk === totalChunks - 1 && currentUnit === units.length - 1;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', color: '#e0e0e0', padding: '2rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Polyglot Vocab
          </h1>
          <p style={{ fontSize: '1rem', color: '#a0a0a0' }}>
            Unit {currentUnit + 1}/{units.length} • {unit.name} • Chunk {currentChunk + 1}/{totalChunks}
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ background: '#0f3460', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
              height: '100%',
              width: `${((currentUnit * totalChunks + currentChunk + 1) / (units.length * totalChunks)) * 100}%`,
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>

        {/* Flashcards */}
        <div style={{ display: 'grid', gap: '2rem', marginBottom: '2rem' }}>
          {currentVocab.map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              backdropFilter: 'blur(10px)',
            }}>
              {/* English side */}
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ffffff' }}>
                  {item.en}
                </p>
              </div>

              {/* Translations table */}
              {showTranslations && (
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.9rem',
                  color: '#e0e0e0'
                }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(0, 212, 255, 0.2)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#00d4ff' }}>French</td>
                      <td style={{ padding: '0.75rem' }}>{item.fr}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(0, 212, 255, 0.2)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#7c3aed' }}>Spanish</td>
                      <td style={{ padding: '0.75rem' }}>{item.es}</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(0, 212, 255, 0.2)' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#ff6464' }}>Portuguese</td>
                      <td style={{ padding: '0.75rem' }}>{item.pt}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', fontWeight: 'bold', color: '#ffa500' }}>Italian</td>
                      <td style={{ padding: '0.75rem' }}>{item.it}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>

        {/* Toggle & Navigation */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <button
            onClick={() => setShowTranslations(!showTranslations)}
            style={{
              background: showTranslations ? 'rgba(0, 212, 255, 0.3)' : 'rgba(124, 58, 237, 0.2)',
              border: showTranslations ? '2px solid #00d4ff' : '1px solid rgba(124, 58, 237, 0.5)',
              color: showTranslations ? '#00d4ff' : '#a78bfa',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
          >
            {showTranslations ? '✓ Show Translations' : 'Show Translations'}
          </button>

          <button
            onClick={handlePrev}
            disabled={currentUnit === 0 && currentChunk === 0}
            style={{
              background: 'rgba(255, 100, 100, 0.2)',
              border: '1px solid rgba(255, 100, 100, 0.5)',
              color: '#ff6464',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              opacity: (currentUnit === 0 && currentChunk === 0) ? 0.5 : 1
            }}
          >
            ← Back
          </button>

          <button
            onClick={handleNext}
            disabled={isLastChunk}
            style={{
              background: isLastChunk ? 'rgba(124, 58, 237, 0.2)' : 'linear-gradient(90deg, #00d4ff, #7c3aed)',
              border: 'none',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: isLastChunk ? 'default' : 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600',
              opacity: isLastChunk ? 0.5 : 1
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

export default LanguageVocabDrill;