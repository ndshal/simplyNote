class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, message: "length must be at least 6" }, allow_nil: true
  after_initialize :ensure_session_token

  has_many :notes, foreign_key: :author_id
  has_many :notebooks, foreign_key: :author_id

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_token
  end

  def self.generate_token
    SecureRandom.urlsafe_base64
  end

  def generate_default_materials
    default = Notebook.create(
      name: "#{self.username.capitalize}'s Notebook",
      author: self,
      is_default: true
    )

    yours = Note.create!(
      notebook: default,
      author: self,
      title: 'Your Notebook',
      body: '{"entityMap":{},"blocks":[{"key":"bnbpp","text":"When you create an account, you automatically get a notebook, personalized with your username.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"86hji","text":"By default, when you create a note, it will start out in this notebook. If you would like to change this, just select a different notebook from the toolbar above!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1aip3","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b1r1b","text":"An upcoming feature will allow you to choose which notebook is the default.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":16,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"brbeu","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    )
    yours.tag_names = ['info']

    welcome = Note.create!(
      notebook: default,
      author: self,
      title: 'Welcome to SimplyNote!',
      body: '{"entityMap":{"0":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"✏️"}},"2":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"✏️"}},"3":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"🎉"}},"4":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"🎉"}},"5":{"type":"emoji","mutability":"IMMUTABLE","data":{"emojiUnicode":"🎉"}}},"blocks":[{"key":"d5g48","text":"SimplyNote is a full-stack app inspired by Evernote.  ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"big7m","text":"It allows you to store, edit, and organize your notes. Notes are saved in a database, so every time you log in, all of your notes will be available.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d7o7l","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8ppju","text":"A Quick Tour: ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":14,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"adt2q","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6qv9l","text":"1. The Sidebar","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":11,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"6t4hs","text":"The sidebar is always on the left of the screen. It allows you to ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":8,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"clddh","text":"Create a new note","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e5767","text":"View all of your notes (this page!)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a3cjt","text":"View a list of all of your notebooks","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4p6jm","text":"View a list of tags that you have added to your notes","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"anc8a","text":"2. The notes index","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":15,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"2p0la","text":"The notes index will display all of your notes. ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":12,"style":"ITALIC"},{"offset":41,"length":5,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"5tcuk","text":"Click on a particular note to pull it up in the editor","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":48,"length":6,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"8ig2v","text":"When you hover a note, a delete button will appear","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6fhab","text":"Use the search bar to filter your notes","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4arsr","text":"3. The editor","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":10,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"d38g3","text":"This is where you can add to your notes ✏️✏️ ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":40,"length":2,"key":1},{"offset":42,"length":2,"key":2}],"data":{}},{"key":"92a7p","text":"Either write plain text, or use the toolbar to style your notes with","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d8s25","text":"bold, italic, highlights","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":4,"style":"BOLD"},{"offset":6,"length":8,"style":"ITALIC"},{"offset":14,"length":10,"style":"HIGHLIGHT"}],"entityRanges":[],"data":{}},{"key":"8u8el","text":"edits, and re-edits","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":5,"style":"STRIKETHROUGH"}],"entityRanges":[],"data":{}},{"key":"4vmoq","text":"lists","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4jsig","text":"Lists can have nested items","type":"unordered-list-item","depth":1,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1c35m","text":"Just hit [tab] or [shift-tab] to nest or un-nest your lists","type":"unordered-list-item","depth":2,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b4tel","text":"and add plenty of flare with emojis  🎉 🎉 🎉 ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":37,"length":1,"key":3},{"offset":39,"length":1,"key":4},{"offset":41,"length":1,"key":5}],"data":{}},{"key":"d5ffd","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8d021","text":"3. Notebooks and Tags","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":3,"length":18,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"898n2","text":"The toolbar at the top also allows you to give your notes custom tags and move them to a different notebook. Try out the notebooks and tags menus (from the sidebar) for more.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6ma6d","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"232s1","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6mn8k","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"el963","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
    )
    welcome.tag_names=['welcome', 'info']
  end
end
