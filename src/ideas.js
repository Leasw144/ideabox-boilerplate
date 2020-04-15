class Idea {
  constructor(titleInput, bodyInput) {
    this.id = Date.now();
    this.title = titleInput;
    this.body = bodyInput;
    this.starred = false;
  }



  saveToStorage() {
  // this is json stuff
  }

  deleteFromStorage() {
// more json stuff
  }

  updateIdea() {
// overwrite existing idea card -- erase and s
  }

  toggleStarred() {
       this.starred = !this.starred;
  }
}
