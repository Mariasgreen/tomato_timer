
export class Task {
  constructor(text, importance) {
    this.id = this.generateUniqueId();
    this.text = text;
    this.count = 0;
    this.importance = importance;
  }

  generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

export class ImportantTask extends Task {
  constructor(text) {
    super(text, 'important');
  }
}

export class StandardTask extends Task {
  constructor(text) {
    super(text, 'default');
  }
}

export class UnimportantTask extends Task {
  constructor(text) {
    super(text, 'so-so');
  }
}
