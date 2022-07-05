// factory pattern user case: modal

interface IModal {
    title?: string,
    content?: string,
    color?: string,
    getAttribiutes: () => {
        title: string,
        content: string,
        color: string,
    }
}

class Modal implements IModal {
    title = '';
    content = '';
    color = '';
    getAttribiutes () {
        return {
            title: this.title,
            content: this.content,
            color: this.color
        }
    }
}

class DefaultModal extends Modal {
    constructor() {
        super()
        this.title = 'Default';
        this.content = 'Default';
        this.color = 'Default';
    }
}

class SuccessModal extends Modal {
    constructor() {
        super()
        this.title = 'Success';
        this.content = 'Success';
        this.color = 'green';
    }
}

class ErrorModal extends Modal {
    constructor() {
        super()
        this.title = 'Error';
        this.content = 'Error';
        this.color = 'red';
    }
}

class WarningModal extends Modal {
    constructor() {
        super()
        this.title = 'Warning';
        this.content = 'Warning';
        this.color = 'orange';
    }
}

class ModalFactory {
    static show(type: string): IModal{
        switch (type) {
            case 'success':
                return new SuccessModal()
                break;
            case 'error':
                return new ErrorModal() 
                break;
            case 'warning':
                return new WarningModal()
                break;
            default:
                return new DefaultModal()
                break;
        }

    }
}

const SUCCESS_MODAL = ModalFactory.show('success');
console.log(SUCCESS_MODAL.getAttribiutes())