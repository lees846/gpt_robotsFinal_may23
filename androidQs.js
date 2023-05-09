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
  const sayGoodbyePrompt = `
    
    
  `;
  // const chatting = true;
  let lastAnswer = "";
  let numAnswers = 0;
  let whenHacked = Math.floor(Math.random()*25);
  console.log(`//: CAUTION | UNKNOWN CONNECTION DETECTED`);
  const helloMsg = await gpt(storyPrompt, { temperature: 0.5 });
  console.log(`"""\n${helloMsg}\n"""`);

  //user gets info that user has joined
  //story prompt sent to gpt
  //gpt response sent to user terminal
  //if not hacked yet,
    // let user respond
    // "ask" user the last response from gpt
    // store their response
    // send response to gpt
    // count number of answers (keep track of convo length)
    // repeat (send user "ask" to gpt and log gpt resp)
  //if hacked
    // send hack prompt to gpt, include {} and tell it to alert user
    // log something to user
    // let them respond
    // send response and sayGoodbye prompt
    // end();

  if (numAnswers < whenHacked){
    let response = await ask(`${lastAnswer}\n`);
    numAnswers++;
    lastAnswer = ``;
  } else {
    // submit hacked prompt in brackets
  }

  // const prompt = await ask();
  // const result = await gpt(prompt + " is your name", { temperature: 0.3 });
  //console.log(`"""\n${result}\n"""`);


  //const result3 = await gpt(prompt3, { temperature: 0.3 });
  
  const finalResult = await gpt(queryForGPT, { temperature: 0.3 });
  console.log(`"""\n${finalResult}\n"""`);

  //  const prompt = `My name is ${name} and I am from ${town}. Create a limerick about me.`;

  end();
  //ctrl c to exit
}
