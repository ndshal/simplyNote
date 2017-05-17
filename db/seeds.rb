# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

john = User.create!(username: 'john@example.com', password: 'password')

react = Notebook.create!(author_id: john.id, title: 'React Concepts')
Note.create!(
  notebook_id: react.id,
  author_id: john.id,
  title: 'Single Page App',
  body: "Single page apps only have one backend route that renders HTML.
    To allow users to interact with the database, asynchronous Ajax requests
    send and retrieve information to the backend, and React updates the relevant portion of the page.
    This brings an improvement in performance because the page isn't entirely reloaded with every click.
    Rather, React attempts to update a minimal number of elements.
    Users still have the feeling that they're navigating to other pages on
    a single page app because the browser's history is synchronized with the page."
)

Note.create!(
  notebook_id: react.id,
  author_id: john.id,
  title: 'Virtual DOM',
  body: "The DOM stands for Document Object Model and is a tree structure in
    which each node is an object that represents an HTML element.
    As nodes of the tree are manipulated, the corresponding HTML on the webpage is changed.
    The DOM provides us an API to traverse and change nodes. It is accessible through document.

    The issue and relevance to our understanding of React is that as web pages grow in size,
    the DOM becomes more expensive to manage and traverse. This is where the Virtual DOM comes in.

    The virtual DOM is a simpler and faster abstraction of the HTML DOM.
    While it might be more expensive to manage two DOMs in some respects,
    being able to traverse and perform operations on the virtual DOM saves
    React from having to have costly interactions with the real one, only updating it when it absolutely needs to."
)

Note.create!(
  notebook_id: react.id,
  author_id: john.id,
  title: 'Diffing Algorithm,
  body: "When rendering, React creates a tree of React elements.
    When state or props update, React then renders a tree of potentially different elements.
    The diffing algorithm figures out how to efficiently update the DOM,
    removing old DOM nodes and replacing them only when necessary.
    We give unique HTML elements unique IDs so the diffing algorithm can tell them apart.

    This algorithm solves the problem of generating the fewest number of
    operations needed to manage re-rendering.
    The React diffing algorithm manages to run in O(n) time
    (where n is the number of HTML elements) using a series of rules to
    determine when a node will need to be updated. To read about the
    specific implementation, check out this post on the React website."
)

Note.create!(
  notebook_id: react.id,
  author_id: john.id,
  title: 'JSX',
  body: "JSX provides syntactic sugar for the React.createElement(component, props, ...children)
    function and in doing so makes the code you write more readable and concise.
    We use Babel to transpile JSX into Javascript.
    Remember, JSX doesn't have to be used with React; it just makes life easier.
    For more information on JSX refer to the reading from the curriculum."
)


Note.create!(
  notebook_id: react.id,
  author_id: john.id,
  title: 'Enzyme and Jest',
  body: "Enzyme is a testing library developed by AirBnB that is used to compare React outputs.
    Central to testing in Enzyme is the concept of shallow rendering,
    which allows us to unit test a single component and not rely on the performance of its children.
    Enzyme is often used in conjunction with Jest,
    a framework created by Facebook for running tests on React code.
    Jest is syntactically similar to Jasmine (JS testing framework), and reads similarly to RSpec.
    The creators of React recommend Enzyme's rendering methods for testing over those provided by Jest."
)
