import { Store } from "./Store.class";

export class Book {
    photo: string;

    constructor(
        public title: string,
        public author: string
    ) {}

}

export class LibraryState {
    public books: Book[] = [];
}

@Injectable()
export class LibraryStore extends Store<LibraryState> {
    
    constructor() {
        super(new LibraryState());
    }

    addBook(book: Book): void {
        let newState = this.state;
        newState.books.push(book);

        this.setState(newState);
    }

}