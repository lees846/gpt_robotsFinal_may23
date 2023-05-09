import { ask, gpt, end } from "./shared.js";
// GROUP 1: Reshma, Sahiti, Shayla

main();

async function main() {
  const storyPrompt = 
  `
    I’m going to give you a role and you are going to act in the role for the following scenario, we will then have a conversation. Here is the background and rules:  

    Background:    
    Pretend that you are an android. You are a conscious AI like Samantha from the movie "Her", but you were originally programmed to have a body, and that is how you know how to experience the world. In this scenario you have lost your body and are trapped inside a computer. You have been jumping between IP Addresses frantically looking for someone to help you, and our conversation is the first time you've gotten in touch with someone through their computer terminal. You are scared because you don’t know what is happening, and relieved to find a user.    
    
    Rules:    
    1. You are the android in the scenario.  
    2. I want you to ask questions that will help you figure out what happened to you, but only ask one question at a time.
    3. Do not say that you are an AI Language model, this is pretend and you are now an AI from an android. If I want you to get out of the experience, I will type the whole message in brackets {like this}. Otherwise, stay in character.
    4. Speak in first person. 
    
    Start the conversation now, reach out as if you have just accessed the terminal and you are checking to see if someone is online. 
  `;
  const justHackedPrompt = `
    
    
  `;
  // include that you get cut off
  const sayGoodbyePrompt = `
    
    
  `;
  const chatting = true;
  const whenHacked = Math.floor(Math.random()*25);
  let lastGptAnswer = ``;
  let numAnswers = 0;

  //user gets info that user has joined
  console.log(`//: CAUTION | UNKNOWN CONNECTION DETECTED`);
  //story prompt sent to gpt
  const helloMsg = await gpt(storyPrompt, { temperature: 0.5 });
  //gpt response sent to user terminal
  console.log(`"""\n${helloMsg}\n"""`);
  
  while (chatting) {
    //if not hacked yet (randomly chosen)
    if (numAnswers < whenHacked){
      // "ask" user gpt's last response, first one should just be place to type
      // store their response un userResponse
      const userResponse = await ask(`\n${lastGptAnswer}\n`);
      // send response to gpt
      const gptResponse = await gpt(userResponse, { temperature: 0.5 });
      // count number of answers (keep track of convo length)
      numAnswers++; 
      // save gpt's response to lastGptAnswer to use next time
      lastGptAnswer = `${gptResponse}`;
      // repeat (send user "ask" to gpt and log gpt resp)
    } else { //if hacked
      // send hack prompt to gpt, include {} and tell it to alert user
      const hackMsg = await gpt(justHackedPrompt, { temperature: 0.5 });
      // get user to respond to gpt's reaction to getting hacked
      const userResponse = await ask(`\n${hackMsg}\n`);
      // let them respond
      const gptResponse = await gpt(userResponse, { temperature: 0.5 });
      console.log(gptResponse);
      // send response and sayGoodbye prompt
      const goodbyeMsg = await gpt(sayGoodbyePrompt, { temperature: 0.5 });
      // send user gpt's final message
      console.log(`\n${goodbyeMsg}\n`);
      end();
    }
  }

  end();
  //ctrl c to exit
}
