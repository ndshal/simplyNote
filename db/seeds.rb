# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create!(username: 'notetaker23', password: 'password')

react = Notebook.create!(author_id: demo.id, name: 'React Concepts')
Note.create!(
  notebook_id: react.id,
  author_id: demo.id,
  title: 'Single Page App',
  body: '{"entityMap":{},"blocks":[{"key":"f84a6","text":"Single page apps only have one backend route that renders HTML. To allow users to interact with the database, asynchronous Ajax requests send and retrieve information to the backend, and React updates the relevant portion of the page. This brings an improvement in performance because the page isn\'t entirely reloaded with every click. Rather, React attempts to update a minimal number of elements. Users still have the feeling that they\'re navigating to other pages on a single page app because the browser\'s history is synchronized with the page.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}'
)

Note.create!(
  notebook_id: react.id,
  author_id: demo.id,
  title: 'Virtual DOM',
  body: '{"entityMap":{},"blocks":[{"key":"du872","text":"The DOM stands for Document Object Model and is a tree structure in which each node is an object that represents an HTML element. As nodes of the tree are manipulated, the corresponding HTML on the webpage is changed. The DOM provides us an API to traverse and change nodes. It is accessible through document.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1patu","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2fogk","text":" The issue and relevance to our understanding of React is that as web pages grow in size, the DOM becomes more expensive to manage and traverse. This is where the Virtual DOM comes in.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5r343","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fbk0j","text":" The virtual DOM is a simpler and faster abstraction of the HTML DOM. While it might be more expensive to manage two DOMs in some respects, being able to traverse and perform operations on the virtual DOM saves React from having to have costly interactions with the real one, only updating it when it absolutely needs to.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}'
)

Note.create!(
  notebook_id: react.id,
  author_id: demo.id,
  title: 'Diffing Algorithm',
  body: '{"entityMap":{},"blocks":[{"key":"28ifu","text":"When rendering, React creates a tree of React elements. When state or props update, React then renders a tree of potentially different elements. The diffing algorithm figures out how to efficiently update the DOM, removing old DOM nodes and replacing them only when necessary. We give unique HTML elements unique IDs so the diffing algorithm can tell them apart.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f9pov","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6cis1","text":"This algorithm solves the problem of generating the fewest number of operations needed to manage re-rendering. The React diffing algorithm manages to run in O(n) time (where n is the number of HTML elements) using a series of rules to determine when a node will need to be updated. To read about the specific implementation, check out this post on the React website.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}'
)

Note.create!(
  notebook_id: react.id,
  author_id: demo.id,
  title: 'JSX',
  body: '{"entityMap":{},"blocks":[{"key":"7g4v9","text":"JSX provides syntactic sugar for the React.createElement(component, props, ...children) function and in doing so makes the code you write more readable and concise. We use Babel to transpile JSX into Javascript. Remember, JSX doesn\'t have to be used with React; it just makes life easier. For more information on JSX refer to the reading from the curriculum.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}'
)


Note.create!(
  notebook_id: react.id,
  author_id: demo.id,
  title: 'Enzyme and Jest',
  body: '{"entityMap":{},"blocks":[{"key":"4dkrv","text":"Enzyme is a testing library developed by AirBnB that is used to compare React outputs. Central to testing in Enzyme is the concept of shallow rendering, which allows us to unit test a single component and not rely on the performance of its children. Enzyme is often used in conjunction with Jest, a framework created by Facebook for running tests on React code. Jest is syntactically similar to Jasmine (JS testing framework), and reads similarly to RSpec. The creators of React recommend Enzyme\'s rendering methods for testing over those provided by Jest.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}'
)

demo_notes = Notebook.create(author_id: demo.id, name: "Notetaker23\'s Notebook", is_default: true)
yours = Note.create!(
  notebook_id: demo_notes.id,
  author_id: demo.id,
  title: 'Your Notebook',
  body: '{"entityMap":{},"blocks":[{"key":"bnbpp","text":"When you create an account, you automatically get a notebook, personalized with your username.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"86hji","text":"By default, when you create a note, it will start out in this notebook. If you would like to change this, just select a different notebook from the toolbar above!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1aip3","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b1r1b","text":"An upcoming feature will allow you to choose which notebook is the default.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":16,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"brbeu","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
)
yours.tag_names = ['info']

welcome = Note.create!(
  notebook_id: demo_notes.id,
  author_id: demo.id,
  title: 'Welcome to SimplyNote!',
  body: '{"entityMap":{"0":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"✏️"}},"2":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"✏️"}},"3":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"🎉"}},"4":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"🎉"}},"5":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"🎉"}}},"blocks":[{"key":"d5g48","text":"SimplyNote is a full-stack app inspired by Evernote.  ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"big7m","text":"It allows you to store, edit, and organize your notes. Notes are saved in a database, so every time you log in, all of your notes will be available.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d7o7l","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8ppju","text":"A Quick Tour: ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":14,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"adt2q","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6qv9l","text":"1. The Sidebar","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":11,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"6t4hs","text":"The sidebar is always on the left of the screen. It allows you to ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":8,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"clddh","text":"Create a new note","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e5767","text":"View all of your notes (this page!)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a3cjt","text":"View a list of all of your notebooks","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4p6jm","text":"View a list of tags that you have added to your notes","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"anc8a","text":"2. The notes index","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":15,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"2p0la","text":"The notes index will display all of your notes. ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":12,"style":"ITALIC"},{"offset":41,"length":5,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"5tcuk","text":"Click on a particular note to pull it up in the editor","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":48,"length":6,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"8ig2v","text":"When you hover a note, a delete button will appear","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6fhab","text":"Use the search bar to filter your notes","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4arsr","text":"3. The editor","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":10,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"d38g3","text":"This is where you can add to your notes ✏️✏️ ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":40,"length":2,"key":1},{"offset":42,"length":2,"key":2}],"data":{}},{"key":"92a7p","text":"Either write plain text, or use the toolbar to style your notes with","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d8s25","text":"bold, italic, highlights","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":4,"style":"BOLD"},{"offset":6,"length":8,"style":"ITALIC"},{"offset":14,"length":10,"style":"HIGHLIGHT"}],"entityRanges":[],"data":{}},{"key":"8u8el","text":"edits, and re-edits","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":5,"style":"STRIKETHROUGH"}],"entityRanges":[],"data":{}},{"key":"4vmoq","text":"lists","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4jsig","text":"Lists can have nested items","type":"unordered-list-item","depth":1,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1c35m","text":"Just hit [tab] or [shift-tab] to nest or un-nest your lists","type":"unordered-list-item","depth":2,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b4tel","text":"and add plenty of flare with emojis  🎉 🎉 🎉 ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":37,"length":1,"key":3},{"offset":39,"length":1,"key":4},{"offset":41,"length":1,"key":5}],"data":{}},{"key":"d5ffd","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8d021","text":"3. Notebooks and Tags","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":18,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"898n2","text":"The toolbar at the top also allows you to give your notes custom tags and move them to a different notebook. Try out the notebooks and tags menus (from the sidebar) for more.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6ma6d","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"232s1","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6mn8k","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"el963","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
)
welcome.tag_names = ['welcome', 'info']
