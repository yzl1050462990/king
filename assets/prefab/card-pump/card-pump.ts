
import StateManager from '../../script/framework/fsm-system/fsmManager';
import CloseState from './state/close';
import OpenState from './state/open';


const {ccclass, property} = cc._decorator;

enum StateType {
    open,
    close,
}

@ccclass
export default class CardPump extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    public ani: cc.Animation;
    public fsmManager: StateManager;

    onLoad () {
        this.node.width = 190;
        this.node.zIndex = 3000;
        this.ani = this.node.getComponent(cc.Animation);
        // 创建状态机
        this.fsmManager = new StateManager();
        this.fsmManager.appendState(new CloseState(StateType.close, this, this.fsmManager));
        this.fsmManager.appendState(new OpenState(StateType.open, this, this.fsmManager));

        // this.ani.on('finished', (e, animation) => {
        //     if(animation.name === 'card-pump-open') {
                
        //     }
        // }, this)
    }
    open() {
        // var animState = this.ani.getAnimationState('card-pump-open');
        // animState.wrapMode = cc.WrapMode.Normal;
        // this.ani.play('card-pump-open')
        this.fsmManager.changeState(StateType.open);
    }

    close() {
        this.fsmManager.changeState(StateType.close);
    }

    start () {
    }

    // update (dt) {}
}