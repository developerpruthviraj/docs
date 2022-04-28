 const person =
    {
        firstName: null,
        lastName: null,
        city: null,
        district: null,
        state: null,
        add: function (property, value) { this[property] = value },
        remove: function (property) { this[property] = null }
    }

    console.log(person);
    person.add("firstName", "Chauhan");
    person.add("lastName", "Pruthviraj");
    person.add("city", "Mahuva");
    person.add("district", "Bhavnagar");
    person.add("state", "Karnataka");
    console.log(person)
    person.remove("state");
    person.add("state", "Gujrat")
    console.log(person);

/*
in this example you can see that we can change person's property through add function which set property's value 

you can create big object with lot of properties as per your application's need and then provide functionality to change set delete update property value

through using javascript's function
*/
