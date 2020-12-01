2. Explore the push() method

    -What is the length, capacity and memory address of your array?
        {length: 1, _capacity: 3, ptr: 0}

    -What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
        {length: 6, _capacity: 12, ptr: 3}
        Once the 4th push was implemented, the length was 3, this prompted an increase of capacity to 12


3. Exploring the pop() method

    -What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
        {length: 3, _capacity: 12, ptr: 3}
        The pop removed the last two items in the array. This does not change the capacity or pointer


4. Understanding more about how arrays work

    -Print the 1st item in the array arr.
        3
    -Empty the array and add just 1 item: arr.push("tauhida");

    -Print this 1 item that you just added. What is the result? Can you explain your result?
        NaN was the result. This is because it is a float 64 array and only accepts numbers

    -What is the purpose of the _resize() function in your Array class?
        _resize is called when there is no memory left. 