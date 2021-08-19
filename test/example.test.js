// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin, getRandomThrow } from '../get-random-throw.js'

const test = QUnit.test;

test('player rock vs computer rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock','rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player rock vs computer paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'computer';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock','paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player rock vs computer scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'player';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock','scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// ======

test('player paper vs computer rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'player';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper','rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player paper vs computer paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper','paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player paper vs computer scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'computer';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper','scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// ===

test('player scissors vs computer rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'computer';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors','rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player scissors vs computer paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'player';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors','paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('player scissors vs computer scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors','scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//===

// test('get random throw', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
    
//     const expected = ;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = getRandomThrow();

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
