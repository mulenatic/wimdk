export class Transaction {

    constructor(
        public betrag: number,
        public user: string,
        public grund: string,
        public erstellDatum: Date,
        public bestaetigt: boolean,
        public sonstiges: Array<any>
    ) {

    }

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

        transaction = new Transaction(
            -9.39, "user1", "Wasserschlauch", new Date(2016, 6, 22, 15, 0, 0), true, new Array());
        result.push(transaction);

        return result;

    }


}
