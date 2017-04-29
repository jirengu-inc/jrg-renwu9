var Dialog = (function() {
    function Modal(opts) {
        this.opts = opts
        this.createDialog()
        this.bindEvent()
    }
    Modal.prototype.defaultOpts = { //预设模版
        title: '',
        message: '',
        isShowCancelBtn: true,
        isShowConfirmBtn: false,
        onCancel: function() {},
        onConfirm: function() {}
    }
    Modal.prototype.open = function(opts) {
        this.closeDialog() //关闭其他按钮之前打开的dialog
        this.setOpts(opts) //设置opts
        this.setDialog() //设置dialog
        this.showDialog() //显示dialog
    }
    Modal.prototype.setOpts = function(opts) {
        if (typeof opts === 'string') {
            this.opts = $.extend({}, this.defaultOpts, {
                message: opts
            });
        } else if (typeof opts === 'object') {
            this.opts = $.extend({}, this.defaultOpts, opts);
        }
    }
    Modal.prototype.setDialog = function() {
        if (!this.opts.title) {
            this.$dialog.find('.dialog-header').hide()
        } else {
            this.$dialog.find('.dialog-header').show()
        }

        if (!this.opts.isShowCancelBtn) {
            this.$dialog.find('.dialog-choice .cancel').hide()
        } else {
            this.$dialog.find('.dialog-choice .cancel').show()
        }

        if (!this.opts.isShowConfirmBtn) {
            this.$dialog.find('.dialog-choice .confirm').show()
        } else {
            this.$dialog.find('.dialog-choice .confirm').hide()
        }

        this.$dialog.find('.dialog-header h3').text(this.opts.title)
        this.$dialog.find('.dialog-content').html(this.opts.message)
    }
    Modal.prototype.createDialog = function() {
        var tpl = `
            <div class='dialog-container'>
            <div class='dialog'>
                 <div class="dialog-header clearfix"><h3></h3><span class="btn-close">x</span></div>
                <div class="dialog-content "></div>
                <div class='dialog-chioce'>
                     <a href="#" class='confirm'>确定</a>
                     <a href="#" class='cancel'>取消</a>
                </div>
                
             </div>
             <div class="background-cover"></div>
             </div>
        `

        $('body').append($(tpl))
        this.$dialog = $('body').find('.dialog-container')
        console.log('1')
        this.closeDialog()
    }
    Modal.prototype.bindEvent = function() {
        var _this = this
            //关闭dialog
        this.$dialog.find('.confirm').on('click', function() {
            _this.opts.onConfirm() //确定后要执行的
            _this.closeDialog()
        })
        this.$dialog.find('.cancel').on('click', function() {
            _this.opts.onCancel() //确定后要执行的
            _this.closeDialog()
        })
        this.$dialog.find('.btn-close').on('click', function() {
            _this.closeDialog()
        })
        this.$dialog.find('.background-cover').on('click', function() {
            _this.closeDialog()
        })
    }
    Modal.prototype.closeDialog = function() {
        this.$dialog.hide()
    }
    Modal.prototype.showDialog = function() {
        this.$dialog.show()
    }

    return new Modal()
})()