var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (namei in names) {
    
    if (names[namei].charAt(0).toLowerCase() == 'j' ) {
      
        goodBye(names[namei]);
    } else {
      
        Hello(names[namei]);

    }
  }
  