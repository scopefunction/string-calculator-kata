class StringCalculator {
    add() {
    }
}

// The goal is to build a robust string splitter that will take a string and add the numbers in that string together and return the result.
// TODO: Complete the unit tests for the following test cases INCREMENTALLY.
// DO NOT SKIP TO SOLVING THE FINAL PROBLEM FIRST!
// Case 1: '1,1' => should equal 2.
// Case 2: '1 , 1' => should equal 2.
// Case 3: '1,3' => should equal 4.
// Case 4: '1, 3' => should equal 4.
// Case 5: '1,,2' => should equal 3.
// Case 6: '1, ,2' => should equal 3.
// Case 7: '1,a,3' => should equal 4.
// Case 8: '1 2' => should equal 3. // not comma separated.
// Case 9: '12 1' => should equal 13. // not comma separated.
// Case 10: '12 a 1' => should equal 13. // not comma separated.
// Case 11: '12, 1, 3, A,' => should equal 16.
// Case 12: '1 2, 3 d 4' => should equal 10.
// Case 13: '1#3,2 3' => should equal 9.

describe("String Calculator", () => {
    // TODO: add tests here...
    function Create() {
        return new StringCalculator();
    }
});
