
    const data = [
        {
            firstName: "ayesha",
            lastName: "sheikh",
            birtyYear: 1997,
            birthPlace: "karachi",
            currentCity: "london",
            nationality: "pakistani",
            occupation: "english teacher",
            age: new Date().getFullYear() - 1997,
            mobile: "nokia",
            materialStatus: "single",
        },
        {
            firstName: "arzoo",
            lastname: "sheikh",
            birthYear: 2003,
            birthPlace: "lahore",
            currentCity: "london",
            nationality: "pakistani",
            occupation: "software developer",
            age: new Date().getFullYear() - 2003,
            mobile: "vivo",
            materialStatus: "single"
        },
        {
            firstName: "fiza",
            lastName: "sheikh",
            birthYear: 2002,
            birthPlace: "islamabad",
            currentCity: "london",
            nationality: "uk",
            occupation: "web developer",
            age: new Date().getFullYear() - 2002,
            mobile: "iphone",
            materialStatus: "single",
        },
        {
            firstName: "zoya",
            lastName: "qureshi",
            birthYear: 2000,
            birthPlace: "new delhi",
            currentCity: "ontario",
            nationality: "canadian",
            occupation: "software architecture",
            age: new Date().getFullYear() - 2000,
            mobile: "iphone",
            materialStatus: "single",
        },
        {
            firstName: "sana",
            lastName: "batool",
            birthYear: 1995,
            birthPlace: "hyderabad",
            currentCity: "paris",
            nationality: "pakistani",
            occupation: "web developer",
            age: new Date().getFullYear() - 1995,
            mobile: "xiaomi",
            materialStatus: "married",
        },
        {
            firstName: "farheen",
            lastName: "ansari",
            birthYear: 1993,
            birthPlace: "mumbai",
            currentCity: "pune",
            nationality: "indian",
            occupation: "english teacher",
            age: new Date().getFullYear() - 1993,
            mobile: "oppo",
            materialStatus: "married",
        },
        {
            firstName: "faiza",
            lastname: "khan",
            birthYear: 1998,
            birthPlace: "ahmedabad",
            currentCity: "dehradun",
            nationality: "indian",
            occupation: "computer teacher",
            age: new Date().getFullYear() - 1998,
            mobile: "samsung",
            materialStatus: "single",
        },
        {
            firstName: "shazia",
            lastname: "qureshi",
            birthYear: 1999,
            birthPlace: "rajkot",
            currentCity: "rajkot",
            nationality: "indian",
            occupation: "software developer",
            age: new Date().getFullYear() - 1999,
            mobile: "vivo",
            materialStatus: "single",
        },
        {
            firstName: "shehnaz",
            lastName: "ajmeri",
            birthYear: 2003,
            birthPlace: "bhavnagar",
            currentCity: "surat",
            nationality: "indian",
            occupation: "student",
            age: new Date().getFullYear() - 2003,
            mobile: "xiaomi",
            materialStatus: "single",
        },
        {
            firstName: "jasmine",
            lastName: "sharif",
            birthYear: 2004,
            birthPlace: "karachi",
            currentCity: "karachi",
            nationality: "pakistani",
            occupation: "student",
            age: new Date().getFullYear() - 2004,
            mobile: "none",
            materialStatus: "single",
        },
        {
            firstName: "kiran",
            lastname: "khan",
            birthYear: 1993,
            birthPlace: "faislabad",
            currentCity: "faislabad",
            nationality: "pakistani",
            occupation: "web developer",
            age: new Date().getFullYear() - 1993,
            mobile: "iphone",
            materialStatus: "widow",
        },
        {
            firstName: "razia",
            lastName: "sheikh",
            birthYear: 1999,
            birthPlace: "rajkot",
            currentCity: "surat",
            nationality: "indian",
            occupation: "software developer",
            age: new Date().getFullYear() - 1999,
            mobile: "samsung",
            materialStatus: "married",
        },
        {
            firstName: "arzoo",
            lastName: "rabbani",
            birthYear: 2003,
            birthPlace: "vadodara",
            currentCity: "jamnagar",
            nationality: "indian",
            occupation: "student",
            age: new Date().getFullYear() - 2003,
            mobile: "iphone",
            materialStatus: "single"
        }
    ];
    // ========================


    // Data Filtering using Javascript

    // people who have iphone

    for (let index = 0; index < data.length; index++) {

        if (data[index].mobile === "iphone") {
            console.log(data[index].firstName + " " + data[index].lastName);
        }
    }
    // ======================================================================

    // =========== People with Sheikh surename(lastname) ==========
    console.log("===========================================")

    console.log("list of people whose surename is sheikh")
    for (let index = 0; index < data.length; index++) {
        if (data[index].lastName === "sheikh") {
            console.log(data[index])
        }
    }

    console.log("===========================================")

    // people whose current city is london

    console.log("list of people whose current city is london")
    for (let index of data) {
        if (index.currentCity === "london") {
            console.log(index)
        }
    }

    console.log("===========================================")

    // people whose birthdate is above  or 2000
    console.log("List of people whose birthDate is above or 2000")
    for (let index of data) {
        if (index.birthYear >= 2000) {
            console.log(index)
        }
    }

    console.log("===========================================")

    // ======== people who are student

    console.log("list of students");

    for (let index of data) {
        if (index.occupation === "student") {
            console.log(index.firstName + " " + index.lastName + " ==> " + index.occupation)
        }
    }

