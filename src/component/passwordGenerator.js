import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');

    const getPassword = () => {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const numbers = '0123456789'.split('');
        const symbols = '!#$%&()*+'.split('');

        let tempPassword = [];

        const nr_letters = parseInt(prompt("How many letters would you like in your password?\n"), 10);
        const nr_symbols = parseInt(prompt("How many symbols would you like?\n"), 10);
        const nr_numbers = parseInt(prompt("How many numbers would you like?\n"), 10);

        for (let i = 0; i < nr_letters; i++) {
            tempPassword.push(letters[Math.floor(Math.random() * letters.length)]);
        }

        for (let i = 0; i < nr_symbols; i++) {
            tempPassword.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }

        for (let i = 0; i < nr_numbers; i++) {
            tempPassword.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }

        tempPassword.sort(() => Math.random() - 0.5);

        const yourPassword = tempPassword.join('');
        setPassword(yourPassword);
        alert(`Your new password: ${yourPassword}`);
    };

    return (
        <div className="container">
            <h1 id="title">Password Generator</h1>
            <button type="button" onClick={getPassword} className="btn btn-primary">
                Click me
            </button>
            {password && (
                <div>
                    <p>Your generated password: {password}</p>
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;