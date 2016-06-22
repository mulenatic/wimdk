export class SonstigesPair {

    constructor(
        private _label: string,
        private _value: string
    ) { }

    get label(): string { return this._label; }
    get value(): string { return this._value; }

}

export class Transaction {

    constructor(
        private _betrag: number,
        private _user: string,
        private _grund: string,
        private _erstellDatum: Date,
        private _bestaetigt: boolean,
        private _sonstiges: Array<SonstigesPair>
    ) {

    }

    get betrag(): number { return this._betrag; }
    get user(): string { return this._user; }
    get grund(): string { return this._grund; }
    get erstellDatum(): Date { return this._erstellDatum; }
    get bestaetigt(): boolean { return this._bestaetigt; }
    get sonstiges(): Array<SonstigesPair> { return this._sonstiges; }



}

export class TransactionSummary {

    constructor(
        private _users: string,
        private _saldo: number,
        private _openTransactions: number,
        private _transactionsLastWeek: number) { }

    get users(): string {
        return this._users;
    }

    get saldo(): number {
        return this._saldo;
    }

    get openTransactions(): number {
        return this._openTransactions;
    }

    get transactionsLastWeek(): number {
        return this._transactionsLastWeek;
    }


}

export class TransactionSearchService {

    getTransactionSummary(): TransactionSummary {

        return new TransactionSummary("Alle", -9.63, 2, 3);

    }

    getTransactions(): Array<Transaction> {

        let result: Array<Transaction> = new Array();

        let transaction: Transaction = new Transaction(
            -50, "user1", "Monatsbeitrag Haushalt", new Date(2016, 6, 22, 17, 0, 0), false, new Array());
        result.push(transaction);


        transaction = new Transaction(
            30.99, "user2", "Bierchen in der Kneipe", new Date(2016, 6, 22, 16, 0, 0), false, new Array());
        result.push(transaction);

        let sonstiges: Array<SonstigesPair> = new Array<SonstigesPair>();
        sonstiges.push(new SonstigesPair("Ort", "Baushaus Frechen"));
        sonstiges.push(new SonstigesPair("Farbe", "blau"));


        transaction = new Transaction(
            9.39, "user1", "Wasserschlauch", new Date(2016, 6, 22, 15, 0, 0), true, sonstiges);
        result.push(transaction);

        return result;

    }


}
