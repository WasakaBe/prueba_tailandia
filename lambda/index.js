/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');


const DOCUMENT_ID_bienvenido = "bienvenidoapl";
const DOCUMENT_ID_ayuda = "ayudaapl";
const DOCUMENT_ID_cancelar = "cancelarapl";
const DOCUMENT_ID_comida = "comidaapn";
const DOCUMENT_ID_descripcion = "descripcionapl";
const DOCUMENT_ID_error = "errorapl";
const DOCUMENT_ID_lugares = "lugaresapl";
const DOCUMENT_ID_personaje = "Personajeapl";
const DOCUMENT_ID_traje = "trajeapl";
const DOCUMENT_ID_musica = "musicaapl";

const {datasource,createDirectivePayload,datasourceayuda,createDirectivePayloadayuda,datasourcecancelar,createDirectivePayloadcancelar,datasourcecomida, createDirectivePayloadcomida, datasourcedescripcion,createDirectivePayloaddescripcion, datasourceerror, createDirectivePayloaderror, datasourcelugares, createDirectivePayloadlugares, datasourcepersonaje, createDirectivePayloadpersonaje, datasourcetraje, createDirectivePayloadtraje,datasourcemusica, createDirectivePayloadmusica} = require('./vistas')


const languageStrings = {
  en: {
    translation: {
      WELCOME_MESSAGE: 'Welcome to the London Guide! You can request a fun fact by saying "tell me a London fact". If you need help with the phrases to interact with the skill, say "help". To stop, simply say "Cancel!"',
      HELP_MESSAGE: 'You can ask for a London fact, phrases you can use include "tell me a fact about London", "a curious fact about London", "what is a fun fact about London", "what is an interesting fact about London", "tell me something about London", "I want to hear a fact about London". How can I help you?',
      GOODBYE_MESSAGE: 'Goodbye!',
      FALLBACK_MESSAGE: 'Sorry, I don\'t know about that. Please try again.',
      ERROR_MESSAGE: 'Sorry, there was an error. Please try again.',
      GET_FRASES_MSG: 'Here is a London fact: ',
      Get_Descripcion: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower, and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.you need help with the phrases to interact with the skill, say "help". To stop, simply say "Cancel!"',
      lugares: "'Big Ben: The nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London, and often extended to refer to the clock and the clock tower. Tower Bridge: A combined bascule and suspension bridge in London, built between 1886 and 1894. Buckingham Palace: The London residence and administrative headquarters of the monarch of the United Kingdom. British Museum: A public institution dedicated to human history, art, and culture located in the Bloomsbury area of London. London Eye: A cantilevered observation wheel on the South Bank of the River Thames in London. It is Europe's tallest cantilevered observation wheel and is the most popular paid tourist attraction in the United Kingdom.'",
      COMIDA_TIPICA: "'Fish and Chips: This traditional British dish consists of fried battered fish and hot potato chips. It is a common take-away food in the United Kingdom and is often associated with seaside resorts. Full English Breakfast: A substantial breakfast that typically includes bacon, sausages, eggs, black pudding, baked beans, tomatoes, mushrooms, and toast. Afternoon Tea: A traditional British meal typically eaten between 3:30 pm and 5 pm. It consists of tea served with sandwiches, scones with clotted cream and jam, sweet pastries, and cakes. Roast Beef and Yorkshire Pudding: This traditional British meal is typically served on Sundays and consists of roast beef, Yorkshire pudding, vegetables, and gravy. Shepherd's Pie: A savoury pie made with minced meat (often lamb) and topped with mashed potatoes. It is a common comfort food in the United Kingdom.'",
      trajeTipico: 'Beefeater Uniform: The distinctive uniform worn by the Yeomen Warders of the Tower of London. It includes a knee-length tunic, stockings, and a hat. The uniform is usually red, but a blue version is worn for certain occasions. The Beefeaters are responsible for guarding the Tower of London and its treasures. Royal Guard Uniform: The uniform worn by the soldiers who guard the royal residences in the United Kingdom. It includes a red tunic, black trousers, and a bearskin hat. The soldiers are famous for their discipline and ability to stand motionless for long periods. Bowler Hat and Suit: The bowler hat and suit combination is a classic British look often associated with the city of London. The bowler hat is a hard felt hat with a rounded crown, and it is typically worn with a suit and tie.',
      personajes: 'William Shakespeare: An English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world\'s greatest dramatist. His works include "Romeo and Juliet", "Hamlet", and "Macbeth". Charles Dickens: An English writer and social critic. He created some of the world\'s best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era. His works include "Oliver Twist", "A Christmas Carol", and "Great Expectations". Queen Elizabeth II: The longest-reigning current monarch, having ascended the throne in 1952. She has been a significant figurehead in British history and culture. David Beckham: An English former professional footballer who played for Manchester United, Real Madrid, and the England national team. He is known for his exceptional skills and contributions to the sport. Sir Isaac Newton: An English mathematician, physicist, astronomer, and author who is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution.',
      musica: 'Typical London song'
        
    }
  },
  es: {
    translation: {
      WELCOME_MESSAGE: 'Bienvenido a la guía de Londres! ',
      HELP_MESSAGE: 'Puedes pedir un dato sobre Londres, frases que puedes ocupar "dime un dato sobre Londres", "un dato curioso sobre Londres", "cual es un dato curioso sobre Londres", "dime algo sobre Londres", "quiero escuchar un dato sobre Londres". ¿Cómo te puedo ayudar?',
      GOODBYE_MESSAGE: '¡Gracias por usar Londres! ¡Espero verte pronto!',
      FALLBACK_MESSAGE: 'Lo siento, no sé sobre eso. Por favor intenta de nuevo.',
      ERROR_MESSAGE: 'Lo siento, ha ocurrido un problema en la pronunciacion. Por favor, inténtalo de nuevo más tarde.',
      GET_FRASES_MSG: 'Aquí tienes un dato sobre Londres: ',
      Get_Descripcion: 'Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se encuentran las imponentes Casas del Parlamento, la icónica torre del reloj "Big Ben" y la Abadía de Westminster, lugar de las coronaciones de los monarcas británicos. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural de South Bank y de toda la ciudad. si necesitas ayuda con las frases para interactuar con la skill, di "ayuda". Para detener, simplemente di "¡Cancelar!"',
      lugares: 'Big Ben: El apodo de la Gran Campana del reloj en el extremo norte del Palacio de Westminster en Londres, y a menudo se extiende para referirse al reloj y a la torre del reloj. Tower Bridge: Un puente basculante y de suspensión combinado en Londres, construido entre 1886 y 1894. Palacio de Buckingham: La residencia en Londres y la sede administrativa del monarca del Reino Unido. Museo Británico: Una institución pública dedicada a la historia humana, el arte y la cultura, ubicada en el área de Bloomsbury en Londres. London Eye: Una rueda de observación en voladizo en la orilla sur del río Támesis en Londres. Es la rueda de observación en voladizo más alta de Europa y la atracción turística de pago más popular en el Reino Unido.',
      COMIDA_TIPICA: 'Fish and Chips: Este plato tradicional británico consiste en pescado frito rebozado y papas fritas calientes. Es una comida para llevar común en el Reino Unido y a menudo se asocia con las estaciones costeras. Desayuno inglés completo: Un desayuno sustancial que generalmente incluye tocino, salchichas, huevos, morcilla, frijoles horneados, tomates, champiñones y tostadas. Té de la tarde: Una comida tradicional británica que se come típicamente entre las 3:30 pm y las 5 pm. Consiste en té servido con sándwiches, bollos con crema y mermelada, pasteles dulces y tortas. Roast Beef and Yorkshire Pudding: Esta comida tradicional británica se sirve típicamente los domingos e incluye rosbif, pudín de Yorkshire, verduras y salsa. Shepherd\'s Pie: Un pastel salado hecho con carne picada (a menudo cordero) y cubierto con puré de papas. Es una comida reconfortante común en el Reino Unido.',
      trajeTipico: 'Uniforme de Beefeater: El uniforme distintivo que usan los Yeomen Warders de la Torre de Londres. Incluye una túnica hasta la rodilla, medias y un sombrero. El uniforme suele ser rojo, pero una versión azul se usa para ciertas ocasiones. Los Beefeaters son responsables de guardar la Torre de Londres y sus tesoros. Uniforme de la Guardia Real: El uniforme que usan los soldados que guardan las residencias reales en el Reino Unido. Incluye una túnica roja, pantalones negros y un sombrero de piel de oso. Los soldados son famosos por su disciplina y capacidad para mantenerse inmóviles durante largos períodos. Sombrero bombín y traje: La combinación de sombrero bombín y traje es un look británico clásico a menudo asociado con la ciudad de Londres. El sombrero bombín es un sombrero de fieltro duro con una corona redondeada, y típicamente se usa con un traje y corbata.',
      personajes: 'William Shakespeare: Un dramaturgo, poeta y actor inglés, ampliamente considerado como el mejor escritor en lengua inglesa y el mayor dramaturgo del mundo. Sus obras incluyen "Romeo y Julieta", "Hamlet" y "Macbeth". Charles Dickens: Un escritor y crítico social inglés. Creó algunos de los personajes de ficción más conocidos del mundo y es considerado por muchos como el mejor novelista de la era victoriana. Sus obras incluyen "Oliver Twist", "Un cuento de Navidad" y "Grandes esperanzas". Reina Isabel II: La monarca actual con el reinado más largo, habiendo ascendido al trono en 1952. Ha sido una figura importante en la historia y cultura británica. David Beckham: Un exfutbolista profesional inglés que jugó para el Manchester United, el Real Madrid y la selección nacional de Inglaterra. Es conocido por sus habilidades excepcionales y contribuciones al deporte. Sir Isaac Newton: Un matemático, físico, astrónomo y autor inglés que es ampliamente reconocido como uno de los científicos más influyentes de todos los tiempos y una figura clave en la revolución científica.',
      musica: "Cancion tipica de londres"
        
    }
  }
};


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID_bienvenido, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};



const descripcionin = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescripcionCiudadIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('Get_Descripcion');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloaddescripcion(DOCUMENT_ID_descripcion, datasourcedescripcion);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const comida = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaTipicaIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('COMIDA_TIPICA');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloadcomida(DOCUMENT_ID_comida, datasourcecomida);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const lugares = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LugaresTuristicosIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('lugares');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloadlugares(DOCUMENT_ID_lugares, datasourcelugares);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const trajestipicos = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TrajeTipicoIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('trajeTipico');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloadtraje(DOCUMENT_ID_traje, datasourcetraje);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const personasobresalientes = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PersonajesSobresalientesIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('personajes');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloadpersonaje(DOCUMENT_ID_personaje, datasourcepersonaje);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const musica = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'musicaintent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('musica');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloadmusica(DOCUMENT_ID_musica, datasourcemusica);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};



const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HELP_MESSAGE');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloadayuda(DOCUMENT_ID_ayuda, datasourceayuda);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloadcancelar(DOCUMENT_ID_cancelar, datasourcecancelar);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('ERROR_MESSAGE');
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayloaderror(DOCUMENT_ID_error, datasourceerror);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};




// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};


// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

// This request interceptor will bind a translation function 't' to the requestAttributes.
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'en',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        descripcionin,
        comida,
        lugares,
        trajestipicos,
        personasobresalientes,
        musica,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
        .addRequestInterceptors(
        LocalizationInterceptor,
        LoggingRequestInterceptor)
    .addResponseInterceptors(
        LoggingResponseInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();