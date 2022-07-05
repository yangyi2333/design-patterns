// singleton pattern user case: modal

interface INoticeModal {
  title: string;
  content: string;
}

class NoticeModal implements INoticeModal{
  title = '';
  content = '';
  private isShow:boolean = false;
  private constructor() {}
  private static instance: NoticeModal; 

  static getInstance(): NoticeModal {
      if(!this.instance){
          this.instance = new NoticeModal()
      }
      return this.instance
  }

  show(configs:INoticeModal) {
    this.title = configs.title;
    this.content = configs.content;
    this.isShow = true;
    console.log(this.isShow, this.title, this.content)
  }

  hide() {
    this.isShow = false;
    console.log(this.isShow)
  }
}

const MODAL1 = NoticeModal.getInstance();
const MODAL2 = NoticeModal.getInstance();
MODAL1.show({title: 'error1', content: 'error message1'})
MODAL2.show({title: 'error2', content: 'error message2'})
console.log(MODAL1 === MODAL2)