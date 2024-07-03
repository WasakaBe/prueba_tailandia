const datasource = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeQK-LKozwpPHynLfOPNzvnHaBTY9q7_amw&s",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "¡Bienvenido a la skill de Londres!"
                }
            },
            "logoUrl": "",
            "hintText": "Puedes decir: \"Alexa, ayuda\""
        }
    }
};


const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const datasourceayuda = {
    "multipleChoiceTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
            "titleText": "Ayuda",
            "primaryText": "Puedes pedir datos curiosos sobre Londres diciendo frases como:",
            "choices": [
                "describeme la ciudad",
                "quiero saber sobre la ciudad",
                "qué comida típica hay",
                "qué traje típico hay"
            ],
            "choiceListType": "alphabet",
            "headerAttributionImage": "",
            "footerHintText": ""
        }
    }
};

const createDirectivePayloadayuda = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const datasourcecancelar = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://www.solofondos.com/wp-content/uploads/2020/12/76243aa41b764831e85d6a10c8bfc962.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Te deseo un bonito dia, adios"
                }
            },
            "logoUrl": "",
            "hintText": ""
        }
    }
};

const createDirectivePayloadcancelar = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const datasourcecomida = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Comida tipica",
        "listItems": [
            {
                "primaryText": "Fish and Chips",
                "imageSource": "https://www.paulinacocina.net/wp-content/uploads/2023/11/fish-and-chips-receta-original-Paulina-Cocina-Recetas.jpg"
            },
            {
                "primaryText": "Desayuno inglés completo",
                "imageSource": "https://www.pequerecetas.com/wp-content/uploads/2024/03/desayuno-ingles-o-english-breakfast.jpg"
            },
            {
                "primaryText": "Té de la tarde",
                "imageSource": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tea_for_two.jpg/1200px-Tea_for_two.jpg"
            },
            {
                "primaryText": "Shepherd's Pie",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdH97d3ItxeiwjL_QcIClaqEObe0Hls8gFw&s"
            },
            {
                "primaryText": "Roast Beef and Yorkshire Pudding",
                "imageSource": "https://img.taste.com.au/98ElZMij/taste/2016/11/roast-beef-with-yorkshire-puddings-and-red-wine-gravy-80315-1.jpeg"
            }
        ],
        "logoUrl": ""
    }
};

const createDirectivePayloadcomida = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};




const datasourcedescripcion = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBWQSLwnKprDSr7K7cwnF2WRBnJ-rZWlJfQ&s",
            "displayFullscreen": false,
            "headerTitle": "Descripcion de la ciudad",
            "headerSubtitle": "",
            "logoUrl": "",
            "videoControlType": "skip",
            "videoSources": [
                "https://pktzflimqmdciuzdonva.supabase.co/storage/v1/object/public/videos/Video_de_WhatsApp_2024_07_03_a_las_04.37.49_cc0d48ac.mp4?t=2024-07-03T11%3A14%3A28.250Z",
                "https://pktzflimqmdciuzdonva.supabase.co/storage/v1/object/public/videos/Video_de_WhatsApp_2024_07_03_a_las_04.37.49_cc0d48ac.mp4?t=2024-07-03T11%3A14%3A28.250Z"
            ],
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayloaddescripcion = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const datasourceerror = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://s1.1zoom.me/big0/635/England_London_Big_Ben_447997.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Error de sintaxis, vuelva intentarlo de nuevo"
                }
            },
            "logoUrl": "",
            "hintText": "Puedes decir: \"Alexa, ayuda\""
        }
    }
};

const createDirectivePayloaderror = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const datasourcelugares = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://img.freepik.com/foto-gratis/torre-reloj-big-ben-londres-al-atardecer-procesamiento-fotografico-especial_268835-1109.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1719100800&semt=ais_user",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "",
            "primaryText": "Lugares turisticos",
            "listItems": [
                {
                    "primaryText": "Big",
                    "secondaryText": "Ben",
                    "thumbnailImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdnIQDBct1mcDZPpl6I9eLfvuCwzlirMsIg&s"
                },
                {
                    "primaryText": "Tower",
                    "secondaryText": "Bridge",
                    "thumbnailImage": "https://www.thelondres.com/wp-content/uploads/2018/08/tower-bridge.jpg"
                },
                {
                    "primaryText": "Palacio de",
                    "secondaryText": "Buckingham",
                    "thumbnailImage": "https://loving-london.com/es/wp-content/uploads/2017/01/buckingham-palace-170120142034002.jpg"
                },
                {
                    "primaryText": "Museo ",
                    "secondaryText": "Británico",
                    "thumbnailImage": "https://www.viajandoporelmundomundial.com/wp-content/uploads/2022/12/museo-britanico3.jpg.webp"
                }
            ]
        }
    }
};

const createDirectivePayloadlugares = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const datasourcepersonaje = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://s1.1zoom.me/big0/663/England_London_Big_Ben_500874.jpg",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "",
            "primaryText": "Personajes sobresalientes",
            "listItems": [
                {
                    "primaryText": "William ",
                    "secondaryText": "Shakespeare",
                    "thumbnailImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/1200px-Shakespeare.jpg"
                },
                {
                    "primaryText": "Charles :",
                    "secondaryText": "Dickens",
                    "thumbnailImage": "https://www.diariodenavarra.es/uploads/2015/12/03/60b0e256e877a.jpeg"
                },
                {
                    "primaryText": "Reina",
                    "secondaryText": " Isabel II",
                    "thumbnailImage": "https://hoydia.com.ar/wp-content/uploads/2022/09/isabelii_vbig-1.webp"
                },
                {
                    "primaryText": "David ",
                    "secondaryText": "Beckham",
                    "thumbnailImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5AlRS90bVVfqYEpSRD42oZccziRTP-GrAg&s"
                },
                {
                    "primaryText": "Sir Isaac ",
                    "secondaryText": "Newton",
                    "thumbnailImage": "https://cdn.britannica.com/56/59856-050-AAA3AA05/Godfrey-Kneller-Isaaac-Newton-oil-painting-National-1702.jpg"
                }
            ]
        }
    }
};

const createDirectivePayloadpersonaje = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};





const datasourcetraje = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large"
                }
            ]
        },
        "title": "Traje tipico",
        "listItems": [
            {
                "primaryText": "Uniforme de Beefeater",
                "imageSource": "data:image/jpeg;base64,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"
            },
            {
                "primaryText": "Uniforme de la Guardia Real",
                "imageSource": "data:image/jpeg;base64,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"
            },
            {
                "primaryText": "Sombrero bombín y traje",
                "imageSource": "https://i.blogs.es/a9474c/sombrero/650_1200.jpg"
            }
        ],
        "logoUrl": "",
        "hintText": ""
    }
};

const createDirectivePayloadtraje = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};



const datasourcemusica = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://pktzflimqmdciuzdonva.supabase.co/storage/v1/object/public/videos/Audio_de_WhatsApp_2024_07_03_a_las_05.39.57_a80a7575.mp3?t=2024-07-03T12%3A07%3A09.800Z",
                "https://pktzflimqmdciuzdonva.supabase.co/storage/v1/object/public/videos/Audio_de_WhatsApp_2024_07_03_a_las_05.39.57_a80a7575.mp3?t=2024-07-03T12%3A07%3A09.800Z"
            ],
            "backgroundImage": "https://www.discovertravelnews.com/wp-content/uploads/2020/07/Londres_tamesis-1300x731.jpg",
            "coverImageSource": "https://e1.pxfuel.com/desktop-wallpaper/999/45/desktop-wallpaper-london-uk-london.jpg",
            "headerTitle": "Música ",
            "logoUrl": "",
            "primaryText": "Musica de inglaterra",
            "secondaryText": "",
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayloadmusica = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};




module.exports = {datasource,createDirectivePayload,datasourceayuda,createDirectivePayloadayuda,datasourcecancelar,createDirectivePayloadcancelar,datasourcecomida, createDirectivePayloadcomida, datasourcedescripcion,createDirectivePayloaddescripcion, datasourceerror, createDirectivePayloaderror, datasourcelugares, createDirectivePayloadlugares, datasourcepersonaje, createDirectivePayloadpersonaje, datasourcetraje, createDirectivePayloadtraje,datasourcemusica, createDirectivePayloadmusica}
