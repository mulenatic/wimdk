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


}
