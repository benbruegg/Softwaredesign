namespace L02_HelloWorld {
    console.log("Hello World");

    let valueBool: boolean = true;
    let valueNumber: number = 1;
    let valueString: string | number = "Hallo";
    let valueAny: any = "Ich bin verboten!"; // verboten

    valueString = 123;

    console.log(valueBool, valueNumber, valueString, valueAny);
}

