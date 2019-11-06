webpackJsonp([8],{"./app/containers/IntentPage/constants.js":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return s}),a.d(t,"u",function(){return r}),a.d(t,"d",function(){return i}),a.d(t,"f",function(){return l}),a.d(t,"e",function(){return d}),a.d(t,"g",function(){return u}),a.d(t,"j",function(){return c}),a.d(t,"k",function(){return p}),a.d(t,"h",function(){return g}),a.d(t,"i",function(){return f}),a.d(t,"l",function(){return _}),a.d(t,"m",function(){return y}),a.d(t,"n",function(){return I}),a.d(t,"o",function(){return P}),a.d(t,"p",function(){return m}),a.d(t,"t",function(){return h}),a.d(t,"r",function(){return b}),a.d(t,"s",function(){return w}),a.d(t,"q",function(){return N}),a.d(t,"x",function(){return T}),a.d(t,"w",function(){return D}),a.d(t,"v",function(){return M}),a.d(t,"D",function(){return k}),a.d(t,"C",function(){return S}),a.d(t,"B",function(){return E}),a.d(t,"A",function(){return O}),a.d(t,"z",function(){return v}),a.d(t,"y",function(){return x}),a.d(t,"E",function(){return A});var n="IntentPage/CHANGE_INTENT_DATA",o="IntentPage/CHANGE_WEBHOOK_DATA",s="IntentPage/CHANGE_POSTFORMAT_DATA",r="IntentPage/FIND_SYS_ENTITIES",i="IntentPage/RESET_INTENT_DATA",l="IntentPage/TAG_ENTITY",d="IntentPage/UNTAG_ENTITY",u="IntentPage/TOGGLE_FLAG",c="IntentPage/ADD_TEXT_PROMPT",p="IntentPage/DELETE_TEXT_PROMPT",g="IntentPage/CHANGE_SLOT_NAME",f="IntentPage/CHANGE_SLOT_AGENT",_="IntentPage/REMOVE_USER_SAYING",y="IntentPage/REMOVE_AGENT_RESPONSE",I="IntentPage/REMOVE_SLOT",P="IntentPage/ADD_SLOT",m="IntentPage/SET_WINDOW_SELECTION",h="IntentPage/LOAD_INTENT",b="IntentPage/LOAD_INTENT_SUCCESS",w="IntentPage/RELOAD_INTENT_WITH_SYS_ENTITIES",N="IntentPage/LOAD_INTENT_ERROR",T="IntentPage/LOAD_SCENARIO",D="IntentPage/LOAD_SCENARIO_SUCCESS",M="IntentPage/LOAD_SCENARIO_ERROR",k="AgentPage/LOAD_POSTFORMAT",S="AgentPage/LOAD_POSTFORMAT_SUCCESS",E="AgentPage/LOAD_POSTFORMAT_ERROR",O="IntentPage/LOAD_WEBHOOK",v="IntentPage/LOAD_WEBHOOK_SUCCESS",x="IntentPage/LOAD_WEBHOOK_ERROR",A="IntentPage/SORT_SLOTS"},"./app/containers/IntentPage/messages.js":function(e,t,a){"use strict";var n=a("./node_modules/react-intl/lib/index.es.js");t.a=a.i(n.c)({createIntentTitle:{id:"containers.IntentPage.create_intent.title",defaultMessage:"Creating New Intent"},defaultPostFormat:{id:"containers.IntentPage.create_intent.defaultPostFormat",defaultMessage:'{ "textResponse" : "{{ textResponse }}" }'},createIntentDescription:{id:"containers.IntentPage.create_intent.description",defaultMessage:'Intents are grouped user sayings with a similar purpose. For example a user may say, "I want to order a cheese pizza" and that may be labeled with an intent of "Order Pizza".'},editIntentTitle:{id:"containers.IntentPage.create_intent.title",defaultMessage:"Editing the intent"},editIntentDescription:{id:"containers.IntentPage.create_intent.description",defaultMessage:"Please make the desired changes in your intent and click on the update button"},agent:{id:"containers.IntentPage.create_intent.agent",defaultMessage:"Agent"},domain:{id:"containers.IntentPage.create_intent.domain",defaultMessage:"Domain"},intentName:{id:"containers.IntentPage.create_intent.intentName",defaultMessage:"Intent Name"},intentNamePlaceholder:{id:"containers.IntentPage.create_intent.intent_name_placeholder",defaultMessage:"Type a name here"},userSaysTitle:{id:"containers.IntentPage.create_intent.user_says",defaultMessage:"User Says"},userSaysExample:{id:"containers.IntentPage.create_intent.user_says_example",defaultMessage:"Example: How's the weather looking for today?"},agentResponsesTitle:{id:"containers.IntentPage.create_intent.agent_responses_title",defaultMessage:"Agent Responses"},agentResponseExample:{id:"containers.IntentPage.create_intent.agent_responses_example",defaultMessage:"The {{slots.location.name}} you said is {{slots.location.value}} but you originally said {{slots.location.sourceText}}."},userSaysInput:{id:"containers.IntentPage.create_intent.user_says_input",defaultMessage:"Type sample dialogue and press Enter"},responsesInput:{id:"containers.IntentPage.create_intent.responses_input",defaultMessage:"Type an agent response and press Enter"},userSaysSearch:{id:"containers.IntentPage.create_intent.user_says_search",defaultMessage:"Search user says"},slots:{id:"containers.IntentPage.create_intent.slots",defaultMessage:"Slots"},slotNameTooltip:{id:"containers.IntentPage.create_intent.slot_name_tooltip",defaultMessage:"This is one instance of the intent you named upwards."},slotEntityTooltip:{id:"containers.IntentPage.create_intent.slot_entity_tooltip",defaultMessage:"Synonyms will help the agent to recognize this example in several different ways."},slotIsRequiredTooltip:{id:"containers.IntentPage.create_intent.slot_is_required_tooltip",defaultMessage:"Flag to indicate if the user should fulfilled this slot before sending intent."},slotIsListTooltip:{id:"containers.IntentPage.create_intent.slot_is_list_tooltip",defaultMessage:"Flag to indicate if this slot should be grouped in a list of elements."},slotPromptTooltip:{id:"containers.IntentPage.create_intent.slot_prompt_tooltip",defaultMessage:"Flag to indicate if this slot should be grouped in a list of elements."},slotNameTitle:{id:"containers.IntentPage.create_intent.slot_name_title",defaultMessage:"Slot Name"},slotEntityTitle:{id:"containers.IntentPage.create_intent.slot_entity_title",defaultMessage:"Entity"},slotIsRequiredTitle:{id:"containers.IntentPage.create_intent.slot_is_required_title",defaultMessage:"Required?"},slotIsListTitle:{id:"containers.IntentPage.create_intent.slot_is_list_title",defaultMessage:"List?"},slotPromptTitle:{id:"containers.IntentPage.create_intent.slot_prompt_title",defaultMessage:"Text Prompt"},slotNamePlaceholder:{id:"containers.IntentPage.create_intent.slot_name_placeholder",defaultMessage:"Add Slot"},slotEntityPlaceholder:{id:"containers.IntentPage.create_intent.slot_entity_placeholder",defaultMessage:"Select Entity"},slotPromptPlaceholder:{id:"containers.IntentPage.create_intent.slot_name_placeholder",defaultMessage:"Add Text Prompt"},createButton:{id:"containers.IntentPage.create_intent.create_button",defaultMessage:"+ Create"},editButton:{id:"containers.IntentPage.create_intent.edit_button",defaultMessage:"+ Update"},emptyEntityList:{id:"containers.IntentPage.create_agent.empty_entity_list",defaultMessage:"Please select an agent first"},noEntitiesInAgent:{id:"containers.IntentPage.create_agent.empty_entity_list",defaultMessage:"No entities created"},createEntity:{id:"containers.IntentPage.create_agent.create_entity",defaultMessage:"+ Create Entity"},emptySlotList:{id:"containers.IntentPage.create_agent.empty_slot_list",defaultMessage:"You haven't created slots"},webhook:{id:"containers.IntentPage.create_agent.webhook",defaultMessage:"Webhook Url"},webhookPlaceholder:{id:"containers.IntentPage.create_agent.webhook_placeholder",defaultMessage:"example: http://localhost:4500"},successMessage:{id:"containers.IntentPage.create_agent.success_message",defaultMessage:"Intent created"},successMessageEdit:{id:"containers.IntentPage.create_agent.success_message",defaultMessage:"Intent updated"},missingResponsesMessage:{id:"containers.IntentPage.create_agent.missing_response_message",defaultMessage:"Please add at least one agent response"},missingWebhookMessage:{id:"containers.IntentPage.create_agent.missing_webhook_message",defaultMessage:"Please add at the webhook url"},missingPostFormatPayload:{id:"containers.IntentPage.create_agent.missing_postFormat_payload",defaultMessage:"Please add a POST format response for the intent, default one has been added."},invalidSlotNameInPrompt:{id:"containers.IntentPage.create_agent.invalid_slot_name_prompt",defaultMessage:"Please verify that every text prompt for required slots are referencing valid slots names"},invalidSlotNameInResponse:{id:"containers.IntentPage.create_agent.invalid_slot_name_response",defaultMessage:"Please verify that every agent response are referencing valid slots names"},webhookDescription:{id:"containers.IntentPage.create_agent.webhook_description",defaultMessage:"A webhook will help you to process the parsed text by the agent in order to complete you business logic."},webhookVerb:{id:"containers.IntentPage.create_agent.webhook_verb",defaultMessage:"Method"},webhookUrl:{id:"containers.IntentPage.create_agent.webhook_url",defaultMessage:"URL"},webhookUrlPlaceholder:{id:"containers.IntentPage.create_agent.webhook_url_placeholder",defaultMessage:"http://localhost:3000"},webhookPayloadType:{id:"containers.IntentPage.create_agent.webhook_payload_type",defaultMessage:"Body Type"},webhookPayload:{id:"containers.IntentPage.create_agent.webhook_payload",defaultMessage:"Body"},missingWebhookUrl:{id:"containers.IntentPage.create_agent.missing_webhook_url",defaultMessage:"Please add a webhook url for your webhook"},useWebhook:{id:"containers.IntentPage.create_agent.use_webhook",defaultMessage:"Webhook Definition"},usePostFormat:{id:"containers.IntentPage.create_agent.use_postFormat",defaultMessage:"Response Definition"},postFormat:{id:"containers.IntentPage.create_agent.postFormat",defaultMessage:"Response definition"},newSlotButton:{id:"containers.IntentPage.create_agent.new_slot_button",defaultMessage:"New +"},defaultNewSlotName:{id:"containers.IntentPage.create_agent.default_new_slot_name",defaultMessage:"New slot"},checkEntitiesOfSlots:{id:"containers.IntentPage.create_agent.default_new_slot_name",defaultMessage:"Please verify that every slot have an entity value"}})},"./app/containers/IntentPage/reducer.js":function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case r.a:return"examples"===t.payload.field?e.updateIn(["intentData","examples"],function(e){return s()([{userSays:t.payload.value,entities:[]}]).concat(e)}).set("touched",!0):"responses"===t.payload.field?e.updateIn(["scenarioData","intentResponses"],function(e){return s()([t.payload.value]).concat(e)}).set("touched",!0):"useWebhook"===t.payload.field?e.setIn(["intentData",t.payload.field],t.payload.value).set("touched",!0):"usePostFormat"===t.payload.field?null!==e.oldIntent&&e.oldIntent.usePostFormat?e.setIn(["intentData",t.payload.field],t.payload.value).set("touched",!0):e.setIn(["intentData",t.payload.field],t.payload.value).setIn(["postFormatData","postFormatPayload"],i.a.defaultPostFormat.defaultMessage).set("touched",!0):"webhookUrl"===t.payload.field?e.setIn(["scenarioData","webhookUrl"],t.payload.value).set("touched",!0):"intentName"===t.payload.field?e.setIn(["scenarioData","scenarioName"],t.payload.value).setIn(["scenarioData","intent"],t.payload.value).setIn(["webhookData","intent"],t.payload.value).setIn(["intentData",t.payload.field],t.payload.value).setIn(["postFormatData","intent"],t.payload.value).set("touched",!0):e.updateIn(["webhookData"],function(e){return e.set(t.payload.field,"agent"===t.payload.field?t.payload.value.split("~")[1]:t.payload.value)}).updateIn(["scenarioData"],function(e){return e.set(t.payload.field,"agent"===t.payload.field?t.payload.value.split("~")[1]:t.payload.value)}).updateIn(["intentData"],function(e){return e.set(t.payload.field,"agent"===t.payload.field?t.payload.value.split("~")[1]:t.payload.value)}).set("touched",!0);case r.b:return"webhookPayloadType"===t.payload.field&&"None"===t.payload.value?("JSON"===e.webhookData.webhookPayloadType&&(e=e.set("oldPayloadJSON",e.webhookData.webhookPayload)),"XML"===e.webhookData.webhookPayloadType&&(e=e.set("oldPayloadXML",e.webhookData.webhookPayload)),e.setIn(["webhookData","webhookPayload"],"").setIn(["webhookData",t.payload.field],t.payload.value).set("touched",!0)):("webhookPayloadType"===t.payload.field&&("JSON"===t.payload.value&&"JSON"!==e.webhookData.webhookPayloadType&&("XML"===e.webhookData.webhookPayloadType&&(e=e.set("oldPayloadXML",e.webhookData.webhookPayload)),e=e.setIn(["webhookData","webhookPayload"],e.oldPayloadJSON)),"XML"===t.payload.value&&"XML"!==e.webhookData.webhookPayloadType&&("JSON"===e.webhookData.webhookPayloadType&&(e=e.set("oldPayloadJSON",e.webhookData.webhookPayload)),e=e.setIn(["webhookData","webhookPayload"],e.oldPayloadXML))),e.setIn(["webhookData",t.payload.field],t.payload.value).set("touched",!0));case r.c:return e.setIn(["postFormatData","postFormatPayload"],t.payload.value).set("touched",!0);case r.d:return l;case r.f:var a=e.windowSelection;if(""!==a){var n=t.payload.userSays.indexOf(a),o=n+a.length,d=t.payload.userSays.substring(n,o);return e.updateIn(["intentData","examples"],function(e){return e.map(function(e){return e.userSays!==t.payload.userSays?e:e.updateIn(["entities"],function(e){var a={value:d,entity:t.payload.entity.entityName,start:n,end:o,entityId:t.payload.entity.id};return-1!==t.payload.entity.entityName.indexOf("sys.")&&(a.extractor="system",a.entityId=0),e.concat(a)})})}).set("touched",!0).set("windowSelection","")}return e;case r.e:return e.updateIn(["intentData","examples"],function(e){return e.concat({value:t.example,synonyms:[t.example]})}).set("touched",!0);case r.g:return e.updateIn(["scenarioData","slots"],function(e){return e.map(function(e){return e.slotName!==t.payload.slotName?e:e.set(t.payload.field,t.payload.value)})}).set("touched",!0);case r.h:return e.updateIn(["scenarioData","slots"],function(e){return e.map(function(e){var a=e.slotName===t.payload.slotName?t.payload.value:e.slotName;return e.set("slotName",a).update("textPrompts",function(e){return e.map(function(e){return e.indexOf("{{slots."+t.payload.slotName+".original}}")>-1||e.indexOf("{{slots."+t.payload.slotName+".value}}")>-1||e.indexOf("{{slots.["+t.payload.slotName+"].value}}")>-1||e.indexOf("{{slots.["+t.payload.slotName+"].value}}")>-1?e.replace(new RegExp("{{slots."+t.payload.slotName,"g"),"{{slots."+t.payload.value):e})})})}).updateIn(["scenarioData","intentResponses"],function(e){return e.map(function(e){return e.indexOf("{{slots."+t.payload.slotName+".original}}")>-1||e.indexOf("{{slots."+t.payload.slotName+".value}}")>-1||e.indexOf("{{slots.["+t.payload.slotName+"].value}}")>-1||e.indexOf("{{slots.["+t.payload.slotName+"].value}}")>-1?e.replace(new RegExp("{{slots."+t.payload.slotName,"g"),"{{slots."+t.payload.value):e})}).set("touched",!0);case r.i:return e.updateIn(["scenarioData","slots"],function(e){return e.map(function(e){return e.slotName===t.payload.slotName?e.set("entity",t.payload.entityName):e})}).set("touched",!0);case r.j:return e.updateIn(["scenarioData","slots"],function(e){return e.map(function(e){var a=e.slotName,n=e.textPrompts;return a!==t.payload.slotName?e:e.set("textPrompts",n.concat(t.payload.value))})}).set("touched",!0);case r.k:return e.updateIn(["scenarioData","slots"],function(e){return e.map(function(e){var a=e.slotName,n=e.textPrompts;return a!==t.payload.slotName?e:e.set("textPrompts",n.filter(function(e){return e!==t.payload.textPrompt}))})}).set("touched",!0);case r.l:return e.updateIn(["intentData","examples"],function(e){return e.filter(function(e,a){return a!==t.index})}).set("touched",!0);case r.m:return e.updateIn(["scenarioData","intentResponses"],function(e){return e.filter(function(e,a){return a!==t.index})}).set("touched",!0);case r.n:return e.updateIn(["scenarioData","slots"],function(e){return e.filter(function(e,a){return a!==t.index})}).set("touched",!0);case r.o:return e.updateIn(["scenarioData","slots"],function(e){return 0===e.filter(function(e){return e.entity&&e.entity===t.slot.entity}).length?e.concat(t.slot):e}).set("touched",!0);case r.p:return e.set("windowSelection",t.selection);case r.t:return e.set("loading",!0).set("error",!1);case r.r:return e.set("loading",!1).set("error",!1).set("oldIntent",t.intent).set("intentData",t.intent);case r.s:return e.set("loading",!1).set("error",!1).set("intentData",t.intent);case r.q:return e.set("error",t.error).set("loading",!1);case r.x:return e.set("loading",!0).set("error",!1);case r.w:return e.set("loading",!1).set("error",!1).set("oldScenario",t.scenario).set("scenarioData",t.scenario);case r.v:return e.set("error",t.error).set("oldScenario",null).set("loading",!1);case r.A:case r.D:return e.set("loading",!0).set("error",!1);case r.B:return e.set("error",t.error).set("loading",!1);case r.C:return e.set("loading",!1).set("error",!1).set("postFormatData",t.postFormat);case r.z:return e.set("loading",!1).set("error",!1).set("oldWebhook",t.webhook).set("webhookData",t.webhook);case r.y:return e.set("error",t.error).set("oldWebhook",null).set("loading",!1);case r.E:var u=s.a.asMutable(e.scenarioData.slots,{deep:!0});return u.splice(t.newIndex,0,u.splice(t.oldIndex,1)[0]),e.setIn(["scenarioData","slots"],s()(u));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("./node_modules/seamless-immutable/seamless-immutable.development.js"),s=a.n(o),r=a("./app/containers/IntentPage/constants.js"),i=a("./app/containers/IntentPage/messages.js"),l=s()({windowSelection:"",intentData:{agent:null,domain:null,intentName:"",examples:[],useWebhook:!1,usePostFormat:!1},scenarioData:{agent:null,domain:null,intent:null,scenarioName:"",slots:[],intentResponses:[]},webhookData:{agent:null,domain:null,intent:null,webhookUrl:"",webhookVerb:"GET",webhookPayloadType:"None",webhookPayload:""},postFormatData:{agent:null,domain:null,intent:null,postFormatPayload:""},touched:!1,oldIntent:null,oldScenario:null,oldWebhook:null,oldPayloadJSON:'{\n\t"text": "{{text}}",\n\t"intent": {{{JSONstringify intent}}},\n\t"slots": {{{JSONstringify slots}}}\n}',oldPayloadXML:'<?xml version="1.0" encoding="UTF-8"?>\n<data>\n\t<text>{{text}}</text>\n\t<intent>{{{toXML intent}}}</intent>\n\t<slots>{{{toXML slots}}}</slots>\n</data>'});t.default=n}});