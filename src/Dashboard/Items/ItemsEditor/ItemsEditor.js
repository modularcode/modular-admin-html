import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';



const Editor = {
  refs: {},
  init: function() {
    const vm = this;

    // vm.refs.$el = $("#ItemsEditorPage");

    // if (!vm.refs.$el.length) {
    //   return false;
    // }

    var container = document.getElementById('Editor');
    var editor = new Quill(container);

    var quill = new Quill('#Editor', {
      modules: { toolbar: true },
      theme: 'snow'
    });

  }

};


export default Editor;
