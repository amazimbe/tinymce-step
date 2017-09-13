import html from './template'

const plugin = (editor) => {
  editor.addButton('step', {
    tooltip: 'Step',
    icon: 'step',
    onclick() {
      editor.insertContent(html);
    }
  });
};

export default plugin;
