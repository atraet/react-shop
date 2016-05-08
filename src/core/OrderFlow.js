// abstract class
class OrderState {
    constructor() {
        if (new.target === OrderState) {
            throw new TypeError('Oops! Invalid instantiation!');
        }

        if (this.selectCompany === undefined) {
            throw new TypeError('Oops, function "selectCompany" not implemented!');
        }

        if (this.selectProduct === undefined) {
            throw new TypeError('Oops, function "selectProduct" not implemented!');
        }

        if (this.checkOut === undefined) {
            throw new TypeError('Oops, function "checkOut" not implemented!');
        }
    }
}

export class OrderInit extends OrderState {
    constructor() {
        super();
    }

    selectCompany(order) {

        let newState = order.hasProduct
            ? new ProductSelected()
            : new CompanySelected();

        order.state(newState)
    }

    selectProduct(order) {

    }

    checkOut() {

    }
}

export class CompanySelected extends OrderState {
    constructor() {
        super();
    }

    selectCompany(order) {

    }

    selectProduct(order) {

    }

    checkOut(order) {

    }
}

export class ProductSelected extends OrderState {
    selectCompany() {

    }

    selectProduct() {

    }

    checkOut() {

    }
}

export class Context {
    constructor(state) {
        this._state = state;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }

    goNext() {
        this._state.selectCompany(this);
    }
}

export class Order {
    constructor() {
        this.company = {};
        this.product = {};
        this.payment = {};
    }

    get hasCompany() {
        return this.company.id;
    }

    get hasProduct() {
        return this.product.id;
    }

    get hasPayment() {
        return this.payment.id;
    }
}

export function foo() {
    var orderInit = getCurrentOrderState();
    var orderFlow = new Context(orderInit);
    orderFlow.goNext();
    orderFlow.goNext();

    function getCurrentOrderState(order) {
        if (order.hasCompany) {
            return new CompanySelected(order)
        }
        if (order.hasProduct) {
            return new ProductSelected(order)
        }

        if (order.hasPayment) {
            return new ProductSelected(order)
        }


        return new OrderInit();
    }
}