/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।  */

const student = {
    name: 'mahmud',
    age: 24,
    isHonest: true,
    hobbies: ['cricket', 'movies', 'coding', 'games'],
    address: {
        street: 'puran bogra, bogra',
        zila: 'bogra',
        city: 'bogra'
    },
    passion: function () {
        return this.name + ' wants to be a web developer';
    }
}

// console.log(student.passion())

/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।  */

const getElementFromObject = `
My name is ${student.name}.
I am ${student.age} years old.
My city is ${student.address.city}
One of my best hobby is ${student.hobbies[2]}.
${student.passion()}

`;
// console.log(getElementFromObject);

/* 
৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */

const return89 = () => 89;
// console.log(return89());

/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।  */

const dividedBySeventeen = num => num / 17;

// console.log(dividedBySeventeen(17));

/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।  */

const getAverageFromTwoNumber = (n1, n2) => (n1 + n2) / 2;

// console.log(getAverageFromTwoNumber(6,6))

/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */

const multiLineArrow = (n1, n2) => {
    const firstSum = n1 + 7;
    const secondSum = n2 + 7;
    const totalSum = firstSum + secondSum;
    if (totalSum % 2 == 0) {
        return totalSum;
    }
    return false;
};

// console.log(multiLineArrow(7, 7));

/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

const number = [23, 56, 78, 12, 99, 45, 67];
const dividedSeven = number.map(n => n / 7);
// console.log(dividedSeven);

/* ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */

// map = go through every element of array and do some action with return;
// forEach = go through every element and do action but does not return anything;
// filter = take a condition and go through every element of array and return only mathing condition;
// find = take a condition and go through every element of array and return only first mathing condition;
// reduce = return a single value from an array like total sum;

/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */

const person = {
    name: 'mahmud',
    money: 5000,
    age: 25,
    job: 'developer'
};

// const { money:balance, ...rest } = person;
// console.log(balance,rest)

const data = ['mahmud', 40000, true, 34];
const [name, balance, ...rest] = data;
// console.log(name, balance, rest)


