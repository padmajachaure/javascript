const language = {
    js : 'JavaScript',
    cpp : " C++",
    rb : 'Ruby',
    swift :"swift by apple"
}

for (const key in language) {
    
   console.log(`${key} shortcut for ${language[key]}`);
   
}