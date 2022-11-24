import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                    <h6 className="mb-2 text-2xl leading-8 font-semibold">1. What are the different ways to manage a state in a React application?</h6>
                    <p className="mb-3 text-md text-gray-900">
                        There are four main types of state you need to properly manage in your React apps:
                        Local state ,Global state , Server state ,URL state. <br />
                        Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it. <br />
                        To manage it using Global State, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.

                    </p>
                </div>
                <div>
                    <h6 className="mb-2 text-2xl leading-8 font-semibold">2. How does prototypical inheritance work?</h6>
                    <p className="mb-3 text-md text-gray-900">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                    </p>
                </div>
                <div>
                    <h6 className="mb-2 text-2xl leading-8 font-semibold">3. What is a unit test? Why should we write unit tests?</h6>
                    <p className="mb-3 text-md text-gray-900">
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                    </p>
                </div>

                <div>
                    <h6 className="mb-2 text-2xl leading-8 font-semibold">4. React vs. Angular vs. Vue? </h6>
                    <p className="mb-3 text-md text-gray-900">
                        <span><h2 className='text-2xl text-red-600 mb-6 mt-4'>React :</h2>

                            <p>1. GitHub Stars 181K / Fork 36.9k / Contributors 1538/ Used By 8.8 Million Users</p> <br />
                            <p>2. App Update Release in React :

                                In React, scripts like React codemod help you to migrate more comfortably than Angular and Vue. Since Facebook said that stability is their central concern, therefore huge companies like Twitter and Airbnb use React.

                            </p> 
                        </span> <br />
                        <span><h2 className='text-2xl text-red-600 mb-6'>Angular :</h2>

                            <p>1. GitHub Stars 79.2K / Fork 20.8k / Contributors 1528 / Used By 2.1 Million Users</p> <br />
                            <p>2. App Migration Via Angular :

                                There is no doubt, Angular releases updates more often than React and Vue. Every six months Angular releases each update. However, before releasing any major APIs, it takes another six months which ultimately gives you the time of two release cycles.

                            </p> 

                        </span> <br />
                        <span><h2 className='text-2xl text-red-600 mb-6'>Vue :</h2>

                            <p>1. GitHub Stars 193K / Fork 31.3k / Contributors 404</p> <br />
                            <p>2. App Migration With Vue :

                                App migrations become far easier with Vue as they agree that 90% of the APIs are the same if you are migrating from 1.x to 2. Apart, there is a migration helper tool available that works on the console to access the status of the sites.
                                
                                </p> 

                        </span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;