/**
 * Configuration file for ribbon-1
 * Use the variable name as value of the "config" property of the ribbon
 * <vc-ribbon :config="word" />
 * **/

import colors from './colors'

const word = {
  fileTabMenu: {
    name: 'file-tab-menu:generic-actions',
    activator: {
      label: 'File'
    },
    items: [{
      label: 'Info',
      icon: 'info',
      commands: [{
        label: 'Info 1',
        icon: 'info',
        name: 'info-1'
      }, {
        label: 'Info 2',
        icon: 'info',
        name: 'info-2'
      }, {
        label: 'Info 2',
        icon: 'info',
        name: 'info-3'
      }]
    }, {
      label: 'New',
      icon: 'star',
      commands: [{
        label: 'New 1',
        icon: 'info',
        name: 'star-1'
      }, {
        label: 'New 2',
        icon: 'info',
        name: 'star-2'
      }, {
        label: 'New 3',
        icon: 'info',
        name: 'star-3'
      }]
    }, {
      label: 'Open',
      icon: 'folder_open',
      commands: [{
        label: 'Open 1',
        icon: 'info',
        name: 'open-1'
      }, {
        label: 'Open 2',
        icon: 'info',
        name: 'open-2'
      }, {
        label: 'Open 3',
        icon: 'info',
        name: 'open-3'
      }]
    }, {
      label: 'Save As',
      icon: 'save',
      commands: [{
        label: 'Save As 1',
        icon: 'info',
        name: 'save-as-1'
      }, {
        label: 'Save As 2',
        icon: 'info',
        name: 'save-as-2'
      }, {
        label: 'Save As 3',
        icon: 'info',
        name: 'save-as-3'
      }]
    }, {
      label: 'Transform',
      icon: 'transform',
      commands: [{
        label: 'Transform 1',
        icon: 'info',
        name: 'transform-1'
      }, {
        label: 'Transform 2',
        icon: 'info',
        name: 'transform-2'
      }, {
        label: 'Transform 3',
        icon: 'info',
        name: 'transform-3'
      }]
    }, {
      label: 'Print',
      icon: 'print',
      commands: [{
        label: 'Print 1',
        icon: 'info',
        name: 'print-1'
      }, {
        label: 'Print 2',
        icon: 'info',
        name: 'print-2'
      }, {
        label: 'Print 3',
        icon: 'info',
        name: 'print-3'
      }]
    }, {
      label: 'Share',
      icon: 'share',
      commands: [{
        label: 'Share 1',
        icon: 'info',
        name: 'share-1'
      }, {
        label: 'Share 2',
        icon: 'info',
        name: 'share-2'
      }, {
        label: 'Share 3',
        icon: 'info',
        name: 'share-3'
      }]
    }, {
      label: 'About',
      icon: 'info_outline',
      commands: [{
        label: 'About 1',
        icon: 'info',
        name: 'about-1'
      }, {
        label: 'About 2',
        icon: 'info',
        name: 'about-2'
      }, {
        label: 'About 3',
        icon: 'info',
        name: 'about-3'
      }]
    }, {
      label: 'Help',
      icon: 'help',
      commands: [{
        label: 'Help 1',
        icon: 'info',
        name: 'help-1'
      }, {
        label: 'Help 2',
        icon: 'info',
        name: 'help-2'
      }, {
        label: 'Help 3',
        icon: 'info',
        name: 'help-3'
      }]
    }]
  },
  quickLaunchToolbar: [{
    name: 'save',
    hint: 'Save (Ctrl+S)', // optional
    icon: 'save'
  }, {
    name: 'cut',
    hint: 'Cut (Ctrl+X)', // optional
    icon: 'content_cut'
  }, {
    name: 'copy',
    hint: 'Copy (Ctrl+C)', // optional
    icon: 'content_copy'
  }, {
    name: 'paste',
    hint: 'Paste (Paste+V)', // optional
    icon: 'content_paste'
  }, {
    name: 'undo',
    hint: 'Undo (Ctl+Z)', // optional
    icon: 'undo'
  }, {
    name: 'redo',
    hint: 'Redo (Ctl+Y)', // optional
    icon: 'redo'
  }, {
    name: 'repeat',
    hint: 'Repeat', // optional
    icon: 'repeat'
  }],
  tabs: [{
    label: 'Home',
    ribbons: [{
      label: 'Undo',
      width: '58px',
      name: 'undo-redo',
      tools: [{
        type: 'buttons',
        size: 'small',
        name: 'buttons:undo-redo',
        items: 'break', // display the buttons list vertically
        commands: [{
          name: 'undo',
          hint: 'Undo (Ctl+Z)', // optional
          label: 'Undo', // optional
          icon: 'undo'
        }, {
          name: 'redo',
          hint: 'Redo (Ctl+Y)', // optional
          label: 'Redo', // optional
          icon: 'redo'
        }]
      }]
    }, {
      label: 'Clipboard',
      name: 'clipboard',
      width: '174px', // optional width in pixels or percentage, if not set ribbon width will be automatic
      tools: [{
        type: 'split-button',
        name: 'split-button:paste-options',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'paste',
          hint: 'Paste', // optional
          label: 'Paste', // optional
          icon: 'mdi-content-paste'
        }, {
          name: 'paste-special',
          hint: 'Paste Special', // optional
          label: 'Paste Special', // optional
          icon: 'mdi-content-paste'
        }, {
          name: 'paste-from-word',
          hint: 'Paste Word', // optional
          label: 'Paste Word', // optional
          icon: 'mdi-content-paste'
        }, {
          name: 'paste-as-hyperlink',
          hint: 'Paste Link', // optional
          label: 'Paste Link', // optional
          icon: 'mdi-content-paste'
        }, {
          name: 'paste-plain',
          hint: 'Paste Plain', // optional
          label: 'Paste Plain', // optional
          icon: 'mdi-content-paste'
        }]
      }, {
        type: 'buttons',
        size: 'small',
        name: 'buttons:clipboard',
        items: 'break', // display the buttons list vertically
        commands: [{
          name: 'cut',
          hint: 'Cut (Ctrl+X)', // optional
          label: 'Cut', // optional
          icon: 'content_cut'
        }, {
          name: 'copy',
          hint: 'Copy (Ctrl+C)', // optional
          label: 'Copy', // optional
          icon: 'content_copy'
        }, {
          name: 'format-painter',
          hint: 'Format painter', // optional
          label: 'Format Painter', // optional
          icon: 'format_paint'
        }]
      }]
    }, {
      label: 'Font',
      name: 'font',
      width: '278px',
      tools: [{
        type: 'dropdown',
        name: 'dropdown:font-family',
        width: '120px', // width of the dropdown in pixels or percentage. if not set, width will be automatic
        items: [{
          name: 'Arial',
          value: 'Arial, Helvetica, Sans-serif',
          label: 'Arial',
          style: { // optional style to apply to the item
            fontFamily: 'Arial, Helvetica, Sans-serif'
          }
        }, {
          name: 'Comic Sans MS',
          label: 'Comic Sans MS',
          value: 'Comic Sans MS',
          style: { // optional style to apply to the item
            fontFamily: 'Comic Sans MS, Segoe UI, Arial'
          }
        }, {
          name: 'Consolas',
          label: 'Consolas',
          value: 'Consolas',
          style: { // optional style to apply to the item
            fontFamily: 'Consolas, Segoe UI, Arial'
          }
        }, {
          name: 'Cambria',
          label: 'Cambria',
          value: 'Cambria',
          style: { // optional style to apply to the item
            fontFamily: 'Cambria, Segoe UI, Arial'
          }
        }, {
          name: 'Arial Black',
          label: 'Arial Black',
          value: 'Arial Black',
          style: { // optional style to apply to the item
            fontFamily: 'Arial Black, Segoe UI, Arial'
          }
        }, {
          name: 'Courier',
          label: 'Courier',
          value: 'Courier',
          style: { // optional style to apply to the item
            fontFamily: 'Courier, Segoe UI, Arial'
          }
        }, {
          name: 'Courier New',
          label: 'Courier New',
          value: 'Courier New',
          style: { // optional style to apply to the item
            fontFamily: 'Courier New, Segoe UI, Arial'
          }
        }, {
          name: 'Garamond',
          label: 'Garamond',
          value: 'Garamond',
          style: { // optional style to apply to the item
            fontFamily: 'Garamond, Segoe UI, Arial'
          }
        }, {
          name: 'Georgia',
          label: 'Georgia',
          value: 'Georgia',
          style: { // optional style to apply to the item
            fontFamily: 'Georgia, Segoe UI, Arial'
          }
        }, {
          name: 'Segoe UI',
          label: 'Segoe UI',
          value: 'Segoe UI',
          style: { // optional style to apply to the item
            fontFamily: 'Segoe UI, Arial'
          }
        }, {
          name: 'Segoe UI, Light',
          label: 'Segoe UI, Light',
          value: 'Segoe UI, Light',
          style: { // optional style to apply to the item
            fontFamily: 'Segoe UI, Light, Arial'
          }
        }, {
          name: 'Segoe UI Semibold',
          label: 'Segoe UI Semibold',
          value: 'Segoe UI Semibold',
          style: { // optional style to apply to the item
            fontFamily: 'Segoe UI Semibold, Segoe UI, Arial'
          }
        }, {
          name: 'Segoe UI Symbol',
          label: 'Segoe UI Symbol',
          value: 'Segoe UI Symbol',
          style: { // optional style to apply to the item
            fontFamily: 'Segoe UI Symbol, Segoe UI, Arial'
          }
        }, {
          name: 'Sans-Serif',
          label: 'Sans-Serif',
          value: 'Sans-Serif',
          style: { // optional style to apply to the item
            fontFamily: 'Sans-Serif, Arial'
          }
        }, {
          name: 'Serif',
          label: 'Serif',
          value: 'Serif',
          style: { // optional style to apply to the item
            fontFamily: 'Serif, Arial'
          }
        }, {
          name: 'Times New Roman',
          label: 'Times New Roman',
          value: 'Times New Roman',
          style: { // optional style to apply to the item
            fontFamily: 'Times New Roman, Segoe UI, Arial'
          }
        }, {
          name: 'Trebuchet MS',
          label: 'Trebuchet MS',
          value: 'Trebuchet MS',
          style: { // optional style to apply to the item
            fontFamily: 'Trebuchet MS, Segoe UI, Arial'
          }
        }, {
          name: 'Verdana',
          label: 'Verdana',
          value: 'Verdana',
          style: { // optional style to apply to the item
            fontFamily: 'Verdana, Segoe UI, Arial'
          }
        }, {
          name: 'Arial Rounded MT',
          label: 'Arial Rounded MT',
          value: 'Arial Rounded MT',
          style: { // optional style to apply to the item
            fontFamily: 'Arial Rounded MT, Segoe UI, Arial'
          }
        }, {
          name: 'Nueva Roman',
          label: 'Nueva Roman',
          value: 'Nueva Roman',
          style: { // optional style to apply to the item
            fontFamily: 'Nueva Roman, Segoe UI, Arial'
          }
        }, {
          name: 'Helvetica',
          label: 'Helvetica',
          value: 'Helvetica',
          style: { // optional style to apply to the item
            fontFamily: 'Helvetica, Segoe UI, Arial'
          }
        }, {
          name: 'Calibri',
          label: 'Calibri',
          value: 'Calibri',
          style: { // optional style to apply to the item
            fontFamily: 'Calibri, Segoe UI, Arial'
          }
        }, {
          name: 'Lucida Console',
          label: 'Lucida Console',
          value: 'Lucida Console',
          style: { // optional style to apply to the item
            fontFamily: 'Lucida Console, Segoe UI, Arial'
          }
        }, {
          name: 'Calibri Light',
          label: 'Calibri Light',
          value: 'Calibri Light',
          style: { // optional style to apply to the item
            fontFamily: 'Arial, Helvetica, Sans-serif, Segoe UI, Arial'
          }
        }, {
          name: 'Century Gothic',
          label: 'Century Gothic',
          value: 'Century Gothic',
          style: { // optional style to apply to the item
            fontFamily: 'Century Gothic, Segoe UI, Arial'
          }
        }, {
          name: 'Impact',
          label: 'Impact',
          value: 'Impact',
          style: { // optional style to apply to the item
            fontFamily: 'Impact, Segoe UI, Arial'
          }
        }]
      }, {
        type: 'dropdown',
        name: 'dropdown:font-size',
        width: '70px', // width of the dropdown in pixels or percentage. if not set, width will be automatic
        items: [{
          name: 'size-8',
          label: 8,
          value: 8,
          style: {
            fontSize: '8px'
          }
        }, {
          name: 'size-9',
          label: 9,
          value: 9,
          style: {
            fontSize: '9px'
          }
        }, {
          name: 'size-10',
          label: 10,
          value: 10,
          style: {
            fontSize: '10px'
          }
        }, {
          name: 'size-12',
          label: 12,
          value: 12,
          style: {
            fontSize: '12px'
          }
        }, {
          name: 'size-14',
          label: 14,
          value: 14,
          style: {
            fontSize: '14px'
          }
        }, {
          name: 'size-16',
          label: 16,
          value: 16,
          style: {
            fontSize: '16px'
          }
        }, {
          name: 'size-18',
          label: 18,
          value: 18,
          style: {
            fontSize: '18px'
          }
        }, {
          name: 'size-20',
          label: 20,
          value: 20,
          style: {
            fontSize: '20px'
          }
        }, {
          name: 'size-24',
          label: 24,
          value: 24,
          style: {
            fontSize: '24px'
          }
        }, {
          name: 'size-28',
          label: 28,
          value: 28,
          style: {
            fontSize: '28px'
          }
        }, {
          name: 'size-32',
          label: 32,
          value: 32,
          style: {
            fontSize: '32px'
          }
        }]
      }, {
        type: 'buttons',
        size: 'small',
        name: 'buttons:font-sizing',
        commands: [{
          name: 'font-grow',
          hint: 'Grow Font', // optional
          // label: 'Grow Font', // optional
          icon: 'mdi-plus'
        }, {
          name: 'font-shrink',
          hint: 'Shrink Font', // optional
          // label: 'Shrink Font', // optional
          icon: 'mdi-minus'
        }, {
          name: 'format-clear',
          hint: 'Clear formatting', // optional
          // label: 'Clear formatting', // optional
          icon: 'mdi-format-clear'
        }]
      }, {
        type: 'break'
      }, {
        type: 'toggle-buttons',
        name: 'toggle-buttons:bold-italic-underline-strikethrough',
        size: 'small',
        commands: [{
          name: 'bold',
          hint: 'Bold (Ctrl+B)', // optional
          // label: 'Bold', // optional
          icon: 'format_bold'
        }, {
          name: 'italic',
          hint: 'Italic (Ctrl+I)', // optional
          // label: 'Italic', // optional
          icon: 'format_italic'
        }, {
          name: 'underline',
          hint: 'Underline (Ctrl+U)', // optional
          // label: 'Underline', // optional
          icon: 'format_underline'
        }, {
          name: 'strikethrough',
          hint: 'Strikethrough', // optional
          // label: 'Strikethrough', // optional
          icon: 'strikethrough_s'
        }]
      }, {
        type: 'separator'
      }, {
        type: 'exclusive-buttons',
        size: 'small',
        name: 'exclusive-buttons:sub-sup-script',
        commands: [{
          name: 'subscript',
          hint: 'Subscript', // optional
          // label: 'Subscript', // optional
          icon: 'mdi-format-subscript'
        }, {
          name: 'superscript',
          hint: 'Superscript', // optional
          // label: 'Superscript', // optional
          icon: 'mdi-format-superscript'
        }]
      }, {
        type: 'separator'
      }, {
        type: 'color-picker',
        name: 'color-picker:font-color',
        size: 'small',
        hint: 'Set font color', // optional
        icon: 'font_download',
        // label: 'Font Color',
        labels: {
          standard: 'Standard Colors',
          palette: 'Palette',
          auto: 'Automatic'
        },
        colors: colors
      }, {
        type: 'color-picker',
        name: 'color-picker:highlight-color',
        hint: 'Set background color',
        icon: 'mdi-palette',
        size: 'small',
        // label: 'Highlight Color',
        labels: {
          standard: 'Standard Colors',
          palette: 'Palette',
          auto: 'Automatic'
        },
        colors: colors
      }, {
        type: 'menu',
        name: 'menu:change-case',
        size: 'small',
        hint: 'Change Case',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        activator: {
          label: 'Change Case',
          icon: 'mdi-format-font'
        },
        commands: [{
          name: 'sentence-case',
          label: 'Sentence case',
          icon: 'mdi-format-font'
        }, {
          name: 'lower-case',
          label: 'lowercase',
          icon: 'mdi-format-font'
        }, {
          name: 'uppercase',
          label: 'UPPERCASE',
          icon: 'mdi-format-font'
        }, {
          name: 'capitalize-each-word',
          label: 'Capitalize Each Word',
          icon: 'mdi-format-font'
        }, {
          name: 'toggle-case',
          label: 'tOGGLE cASE',
          icon: 'mdi-format-font'
        }]
      }]
    }, {
      label: 'Paragraph',
      name: 'paragraph',
      width: '191px',
      tools: [{
        type: 'buttons',
        size: 'small',
        name: 'buttons:lists',
        commands: [{
          name: 'bullets',
          hint: 'Bulleted list', // optional
          // label: 'Bulleted List', // optional
          icon: 'mdi-format-list-bulleted'
        }, {
          name: 'numbers',
          hint: 'Numbered List', // optional
          // label: 'Numbered List', // optional
          icon: 'mdi-format-list-numbers'
        }, {
          name: 'multilevel-list',
          hint: 'Multilevel List', // optional
          // label: 'Multilevel List', // optional
          icon: 'mdi-format-list-bulleted-type'
        }, {
          name: 'outdent',
          hint: 'Decrease indent', // optional
          // label: 'Decrease Indent', // optional
          icon: 'mdi-format-indent-decrease'
        }, {
          name: 'indent',
          hint: 'Increase indent', // optional
          // label: 'Increase Indent', // optional
          icon: 'mdi-format-indent-increase'
        }]
      }, {
        type: 'separator'
      }, {
        type: 'exclusive-buttons',
        name: 'exclusive-buttons:text-direction',
        size: 'small',
        commands: [{
          name: 'ltr',
          hint: 'Left-to-Right Text Direction', // optional
          // label: 'Left-to-Right', // optional
          icon: 'format_textdirection_l_to_r'
        }, {
          name: 'rtl',
          hint: 'Right-to-Left Text Direction', // optional
          // label: 'Right-to-Left', // optional
          icon: 'format_textdirection_r_to_l'
        }]
      }, {
        type: 'break'
      }, {
        type: 'exclusive-buttons',
        name: 'exclusive-buttons:format-align',
        size: 'small',
        commands: [{
          name: 'align-left',
          hint: 'Align Text Left', // optional
          // label: 'Align Text Left', // optional
          icon: 'format_align_left'
        }, {
          name: 'align-center',
          hint: 'Center', // optional
          // label: 'Center', // optional
          icon: 'format_align_center'
        }, {
          name: 'align-right',
          hint: 'Align Text Right', // optional
          // label: 'Align Text Right', // optional
          icon: 'format_align_right'
        }, {
          name: 'align-justify',
          hint: 'Justify', // optional
          // label: 'Justify', // optional
          icon: 'format_align_justify'
        }]
      }, {
        type: 'menu',
        name: 'menu:line-spacing',
        size: 'small',
        hint: 'Line Spacing',
        dropDownCssClasses: [
          'vue-ribbon-menu-dropdown-no-icons'
        ], // additional optional CSS classes to apply to the menu dropdown
        activator: {
          icon: 'format_line_spacing'
        },
        commands: [{
          name: 1,
          // icon: 'format_line_spacing',
          label: '1'
        }, {
          name: 1.15,
          // icon: 'format_line_spacing',
          label: 1.15
        }, {
          name: 1.5,
          // icon: 'format_line_spacing',
          label: 1.5
        }, {
          name: 2,
          // icon: 'format_line_spacing',
          label: 2
        }, {
          name: 2.5,
          // icon: 'format_line_spacing',
          label: 2.5
        }, {
          name: 3,
          // icon: 'format_line_spacing',
          label: 3
        }]
      }, {
        type: 'menu',
        name: 'menu:special-indent',
        size: 'small',
        hint: 'Special Indent',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        activator: {
          icon: 'mdi-format-indent-increase'
        },
        commands: [{
          name: 'none',
          icon: 'mdi-format-indent-increase',
          label: 'None'
        }, {
          name: 'first-line',
          icon: 'mdi-format-indent-increase',
          label: 'First Line'
        }, {
          name: 'hanging',
          icon: 'mdi-format-indent-increase',
          label: 'Hanging'
        }]
      }]
    }, {
      label: 'Styles',
      name: 'styles',
      width: '250px',
      tools: [{
        type: 'exclusive-boxes',
        name: 'exclusive-boxes:styles-options',
        boxCssClasses: [
          'word-styles'
        ], // additional optional CSS classes to apply to the box
        data: {
          command: 'styles',
          items: [{
            name: 'Normal',
            value: 'normal',
            html: '<span style="font-size: 11px; color: #000;">AaBbCc</span><span>Normal</span>'
          }, {
            name: 'No Spacing',
            value: 'no-spacing',
            html: '<span style="font-size: 12px; color: #000;">AaBbCc</span><span>No Spacing</span>'
          }, {
            name: 'Heading 1',
            value: 'heading-1',
            html: '<span style="font-size: 16px; color: #2e74b5;">AaBbCc</span><span>Heading 1</span>'
          }, {
            name: 'Heading 2',
            value: 'heading-2',
            html: '<span style="font-size: 13px; color: #2e74b5;">AaBbCc</span><span>Heading 2</span>'
          }, {
            name: 'Heading 3',
            value: 'heading-3',
            html: '<span style="font-size: 12px; color: #2e74b5;">AaBbCc</span><span>Heading 3</span>'
          }, {
            name: 'Heading 4',
            value: 'heading-4',
            html: '<span style="font-size: 12px; color: #2e74b5; font-style: italic;">AaBbCc</span><span>Heading 4</span>'
          }, {
            name: 'Heading 5',
            value: 'heading-5',
            html: '<span style="font-size: 11px; color: #2e74b5;">AaBbCc</span><span>Heading 5</span>'
          }, {
            name: 'Heading 6',
            value: 'heading-6',
            html: '<span style="font-size: 11px; color: #1f4d78;">AaBbCc</span><span>Heading 6</span>'
          }, {
            name: 'Heading 7',
            value: 'heading-7',
            html: '<span style="font-size: 11px; color: #1f4d78; font-style: italic">AaBbCc</span><span>Heading 7</span>'
          }, {
            name: 'Heading 8',
            value: 'heading-8',
            html: '<span>AaBbCc</span><span>Heading 8</span>'
          }, {
            name: 'Heading 9',
            value: 'heading-9',
            html: '<span>AaBbCc</span><span>Heading 9</span>'
          }, {
            name: 'Title',
            value: 'title',
            html: '<span style="font-weight: bold">AaBbCc</span><span>Title</span>'
          }, {
            name: 'Subtitle',
            value: 'subtitle',
            html: '<span>AaBbCc</span><span>Subtitle</span>'
          }, {
            name: 'Subtitle Emphasis',
            value: 'subtitle-emphasis',
            html: '<span style="font-style: italic">AaBbCc</span><span>Subtitle Emphasis</span>'
          }, {
            name: 'Emphasis',
            value: 'emphasis',
            html: '<span style="font-weight: bold; font-style: italic">AaBbCc</span><span>Emphasis</span>'
          }, {
            name: 'Intense Emphasis',
            value: 'intense-emphasis',
            html: '<span style="font-weight: bold">AaBbCc</span><span>Intense Emphasis</span>'
          }]
        }
      }]
    }, {
      label: 'Editing',
      name: 'editing',
      width: '132px',
      tools: [{
        type: 'split-button',
        name: 'split-button:find-options',
        size: 'small',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'advanced-find',
          label: 'Advanced Find', // optional
          icon: 'find_in_page',
          hint: 'Advanced Find' // optional
        }, {
          name: 'find',
          label: 'Find', // optional
          icon: 'find_in_page',
          hint: 'Find' // optional
        }, {
          name: 'go-to',
          label: 'Go to...', // optional
          icon: 'find_in_page',
          hint: 'Go to...' // optional
        }]
      }, {
        type: 'break'
      }, {
        type: 'buttons',
        size: 'small',
        name: 'split-button:replace',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'replace',
          label: 'Replace', // optional
          icon: 'find_replace',
          hint: 'Find and replace' // optional
        }]
      }, {
        type: 'break'
      }, {
        type: 'menu',
        size: 'small',
        name: 'menu:selections',
        hint: 'Selections',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        activator: {
          label: 'Select',
          icon: 'mdi-select'
        },
        commands: [{
          name: 'select',
          icon: 'mdi-select',
          label: 'Select'
        }, {
          name: 'select-all',
          icon: 'mdi-select-all',
          label: 'Select All'
        }, {
          name: 'select-objects',
          // icon: 'mdi-select-objects',
          label: 'Select Objects'
        }, {
          name: 'select-inverse',
          icon: 'mdi-select-inverse',
          label: 'Select Inverse'
        }]
      }]
    }]
  }, {
    label: 'Insert',
    ribbons: [{
      label: 'Page',
      width: '70px',
      name: 'page',
      tools: [{
        type: 'split-button',
        name: 'split-button:page-break',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'format-page-break',
          hint: 'Page Break', // optional
          label: 'Page Break', // optional
          icon: 'mdi-format-page-break'
        }]
      }]
    }, {
      label: 'Tables',
      name: 'tables',
      width: '70px',
      tools: [{
        type: 'split-button',
        size: 'large',
        name: 'split-button:insert-table',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'table',
          hint: 'Insert table', // optional
          label: 'Insert Table', // optional
          icon: 'mdi-table-large'
        }]
      }]
    }, {
      label: 'Pictures',
      name: 'pictures',
      width: '136px',
      tools: [{
        type: 'split-button',
        size: 'large',
        name: 'split-button:insert-pictures',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'picture',
          hint: 'Insert picture', // optional
          label: 'Insert Picture', // optional
          icon: 'mdi-file-image'
        }]
      }, {
        type: 'split-button',
        name: 'split-button:insert-online-pictures',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'online-pictures',
          hint: 'Online pictures', // optional
          label: 'Online pictures', // optional
          icon: 'mdi-image-filter-drama'
        }, {
          name: 'picture-google',
          hint: 'Picture from Google', // optional
          label: 'Picture from Google', // optional
          icon: 'mdi-folder-google-drive'
        }, {
          name: 'picture-bing',
          hint: 'Picture from Bing', // optional
          label: 'Picture from Bing', // optional
          icon: 'mdi-bing'
        }]
      }]
    }, {
      label: 'Add-ins',
      name: 'add-ins',
      width: '70px',
      tools: [{
        type: 'split-button',
        size: 'large',
        name: 'split-button:add-ins',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'add-ins',
          hint: 'Office Add-ins', // optional
          label: 'Office Add-ins', // optional
          icon: 'mdi-office'
        }]
      }]
    }, {
      label: 'Links',
      name: 'links',
      width: '70px',
      tools: [{
        type: 'split-button',
        size: 'large',
        name: 'split-button:insert-link',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'insert-link',
          hint: 'Link', // optional
          label: 'Link', // optional
          icon: 'mdi-link'
        }]
      }]
    }, {
      label: 'Comments',
      name: 'comments',
      width: '70px',
      tools: [{
        type: 'split-button',
        size: 'large',
        name: 'split-button:insert-comment',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'insert-comment',
          hint: 'Comment', // optional
          label: 'Comment', // optional
          icon: 'mdi-comment'
        }]
      }]
    }, {
      label: 'Header & Footer',
      name: 'header-footer',
      width: '136px',
      tools: [{
        type: 'split-button',
        name: 'split-button:insert-header',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'insert-header',
          hint: 'Header', // optional
          label: 'Header', // optional
          icon: 'mdi-page-layout-header'
        }]
      }, {
        type: 'split-button',
        name: 'split-button:insert-footer',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'insert-footer',
          hint: 'Footer', // optional
          label: 'Footer', // optional
          icon: 'mdi-page-layout-footer'
        }]
      }]
    }, {
      label: 'Footnotes',
      name: 'footnotes',
      width: '70px',
      tools: [{
        type: 'split-button',
        name: 'split-button:footnotes',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'insert-footnote',
          hint: 'Insert Footnote', // optional
          label: 'Insert Footnote', // optional
          icon: 'mdi-note-text'
        }]
      }]
    }, {
      label: 'Symbols', // custom split button for symbol insertion
      width: '70px',
      name: 'symbols',
      tools: [{
        type: 'split-button',
        name: 'split-button:symbols',
        size: 'large',
        dropDownCssClasses: [
          'vc-ribbon-dropdown-inline-items',
          'vc-ribbon-dropdown-no-icons',
          'vc-ribbon-dropdown-5x'
        ], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'symbols:&bull;',
          label: '&bull;',
          hint: 'Bullet', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&euro;',
          label: '&euro;',
          hint: 'Euro', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&pound;',
          label: '&pound;',
          hint: 'Pound', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&yen;',
          label: '&yen;',
          hint: 'Yen', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&copy;',
          label: '&copy;',
          hint: 'Copyright', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&reg;',
          label: '&reg;',
          hint: 'Registered', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&trade;',
          label: '&trade;',
          hint: 'Trademark', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&ohm;',
          label: '&ohm;',
          hint: 'Ohm', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&raquo;',
          label: '&raquo;',
          hint: 'Right quote', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&laquo;',
          label: '&laquo;',
          hint: 'Left quote', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&dollar;',
          label: '&dollar;',
          hint: 'Dollar', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&lt;',
          label: '&lt;',
          hint: 'Less than...', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&gt;',
          label: '&gt;',
          hint: 'Greater than...', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&percnt;',
          label: '&percnt;',
          hint: 'Percent', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&commat;',
          label: '&commat;',
          hint: 'At sign', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&alpha;',
          label: '&alpha;',
          hint: 'Alpha', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&beta;',
          label: '&beta;',
          hint: 'Beta', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&gamma;',
          label: '&gamma;',
          hint: 'Gamma', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&delta;',
          label: '&delta;',
          hint: 'Delta', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&epsiv;',
          label: '&epsiv;',
          hint: 'Upsilon', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&spades;',
          label: '&spades;',
          hint: 'Spades', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&hearts;',
          label: '&hearts;',
          hint: 'Hearts', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&clubs;',
          label: '&clubs;',
          hint: 'Clubs', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&diams;',
          label: '&diams;',
          hint: 'Diamonds', // optional
          icon: 'mdi-currency-eur'
        }, {
          name: 'symbols:&sung;',
          label: '&sung;',
          hint: 'Note', // optional
          icon: 'mdi-currency-eur'
        }]
      }]
    }, {
      label: 'Emoji',
      width: '70px',
      name: 'emoji',
      tools: [{
        type: 'split-button',
        name: 'split-button:emoji',
        size: 'large',
        dropDownCssClasses: [
          'vc-ribbon-dropdown-inline-items',
          'vc-ribbon-dropdown-no-labels',
          'vc-ribbon-dropdown-3x'
        ], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'emoticon:emoticon;',
          label: 'Emoticon',
          hint: 'Emoticon', // optional
          icon: 'mdi-emoticon'
        }, {
          name: 'emoticon:emoticon-cool',
          label: 'Cool',
          hint: 'Cool', // optional
          icon: 'mdi-emoticon-cool'
        }, {
          name: 'emoticon:emoticon-dead',
          label: 'Dead',
          hint: 'Dead', // optional
          icon: 'mdi-emoticon-dead'
        }, {
          name: 'emoticon:emoticon-devil;',
          label: 'Devil',
          hint: 'Devil', // optional
          icon: 'mdi-emoticon-devil'
        }, {
          name: 'emoticon:emoticon-excited',
          label: 'Excited',
          hint: 'Excited', // optional
          icon: 'mdi-emoticon-excited'
        }, {
          name: 'emoticon:emoticon-happy',
          label: 'Happy',
          hint: 'Happy', // optional
          icon: 'mdi-emoticon-happy'
        }, {
          name: 'emoticon:emoticon-neutral',
          label: 'Neutral',
          hint: 'Neutral', // optional
          icon: 'mdi-emoticon-neutral'
        }, {
          name: 'emoticon:emoticon-poop',
          label: 'Poop',
          hint: 'Poop', // optional
          icon: 'mdi-emoticon-poop'
        }, {
          name: 'emoticon:emoticon-sad',
          label: 'Sad',
          hint: 'Sad', // optional
          icon: 'mdi-emoticon-sad'
        }]
      }]
    }]
  }, {
    label: 'Page Layout',
    ribbons: [{
      label: 'Page Setup',
      name: 'page-setup',
      width: '204px',
      tools: [{
        type: 'split-button',
        name: 'split-button:margins',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'margins-normal',
          hint: 'Normal', // optional
          label: 'Normal', // optional
          subLabel: 'Top: 0.5", Bottom: 0.5", Left: 0.5", Right: 0.5"', // optional
          icon: 'mdi-margin'
        }, {
          name: 'margins-narrow',
          hint: 'Narrow', // optional
          label: 'Narrow', // optional
          subLabel: 'Top: 1", Bottom: 1", Left: 0.75", Right: 0.75"', // optional
          icon: 'mdi-margin'
        }, {
          name: 'margins-moderate',
          hint: 'Moderate', // optional
          label: 'Moderate', // optional
          subLabel: 'Top: 1", Bottom: 1", Left: 2", Right: 2"', // optional
          icon: 'mdi-margin'
        }, {
          name: 'margins-wide',
          hint: 'Wide', // optional
          label: 'Wide', // optional
          subLabel: 'Top: 1", Bottom: 1", Left: 1.25", Right: 1.25"', // optional
          icon: 'mdi-margin'
        }, {
          name: 'margins-office-default',
          hint: 'Office Default', // optional
          label: 'Office Default', // optional
          subLabel: 'Top: 1", Bottom: 1", Left: 1.25", Right: 1.25"', // optional
          icon: 'mdi-margin'
        }, {
          name: 'margins-set-custom-margins',
          hint: 'Set custom margins', // optional
          label: 'Custom Margins..', // optional
          subLabel: '8.5" x 14"', // optional
          icon: 'mdi-margin'
        }]
      }, {
        type: 'split-button',
        name: 'split-button:orientation',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'orientation-portrait',
          hint: 'Portrait', // optional
          label: 'Portrait', // optional
          // subLabel: '8.5" x 11"', // optional
          icon: 'mdi-cellphone'
        }, {
          name: 'orientation-landscape',
          hint: 'Landscape', // optional
          label: 'Landscape', // optional
          // subLabel: '8.5" x 14"', // optional
          icon: 'mdi-cellphone'
        }]
      }, {
        type: 'split-button',
        name: 'split-button:size',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'size-letter',
          hint: 'Letter', // optional
          label: 'Letter', // optional
          subLabel: '8.5" x 11"', // optional
          icon: 'mdi-format-size'
        }, {
          name: 'size-legal',
          hint: 'Legal', // optional
          label: 'Legal', // optional
          subLabel: '8.5" x 14"', // optional
          icon: 'mdi-format-size'
        }, {
          name: 'size-executive',
          hint: 'Executive', // optional
          label: 'Executive', // optional
          subLabel: '7.25" x 10.5"', // optional
          icon: 'mdi-format-size'
        }, {
          name: 'size-a4',
          hint: 'A4', // optional
          label: 'A4', // optional
          subLabel: '8.27" x 11.69"', // optional
          icon: 'mdi-format-size'
        }, {
          name: 'size-a5',
          hint: 'A5', // optional
          label: 'A5', // optional
          subLabel: '5.83" x 8.27"', // optional
          icon: 'mdi-format-size'
        }]
      }]
    }, {
      label: 'Page Properties',
      name: 'page-properties',
      width: '320px',
      tools: [{
        type: 'spinners',
        units: 'in', // in, cm, pt, px, pc etc
        name: 'spinners:indent',
        label: 'Indent',
        spinners: [{
          label: 'Left', // optional
          name: 'indent-left',
          icon: 'mdi-format-indent-decrease',
          min: -5,
          max: 5,
          step: 0.5
        }, {
          label: 'Right', // optional
          name: 'indent-right',
          icon: 'mdi-format-indent-increase',
          min: -5,
          max: 5,
          step: 0.5
        }]
      }, {
        type: 'spinners',
        label: 'Spacing',
        units: 'in', // in, cm, pt, px, pc etc
        name: 'spinners:spacing',
        spinners: [{
          label: 'Before', // optional
          name: 'spacing-before',
          icon: 'mdi-format-indent-increase',
          min: -5,
          max: 5,
          step: 0.5
        }, {
          label: 'After', // optional
          icon: 'mdi-format-indent-decrease',
          name: 'spacing-after',
          min: -5,
          max: 5,
          step: 0.5
        }]
      }]
    }]
  }, {
    label: 'Review',
    ribbons: [{
      label: 'Proofing',
      name: 'proofing',
      width: '70px',
      tools: [{
        type: 'split-button',
        name: 'split-button:spelling-and-grammar',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'spelling-and-grammar',
          hint: 'Spelling and Grammar', // optional
          label: 'Spelling and Grammar', // optional
          // subLabel: '8.5" x 11"', // optional
          icon: 'mdi-spellcheck'
        }, {
          name: 'autocorrect-options',
          hint: 'Autocorrect Options', // optional
          label: 'Autocorrect Options', // optional
          // subLabel: '8.5" x 14"', // optional
          icon: 'mdi-spellcheck'
        }, {
          name: 'set-proofing-language',
          hint: 'Set Proofing Language', // optional
          label: 'Set Proofing Language', // optional
          // subLabel: '8.5" x 14"', // optional
          icon: 'mdi-spellcheck'
        }]
      }]
    }, {
      label: 'Word Count',
      name: 'word-count',
      width: '70px',
      tools: [{
        type: 'split-button',
        name: 'split-button:word-count',
        size: 'large',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'word-count',
          hint: 'Word Count', // optional
          label: 'Word Count...', // optional
          // subLabel: '8.5" x 11"', // optional
          icon: 'mdi-checkbox-marked-outline'
        }, {
          name: 'show-word-count',
          hint: 'Show Word Count', // optional
          label: 'Show Word Count', // optional
          // subLabel: '8.5" x 14"', // optional
          icon: 'mdi-checkbox-marked-outline'
        }]
      }]
    }, {
      label: 'Accessibility',
      name: 'accessibility',
      width: '70px',
      tools: [{
        type: 'split-button',
        size: 'large',
        name: 'split-button:accessibility',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'check-accessibility',
          hint: 'Check Accessibility', // optional
          label: 'Check Accessib...', // optional
          icon: 'mdi-wheelchair-accessibility'
        }]
      }]
    }, {
      label: 'Insights',
      name: 'insights',
      width: '70px',
      tools: [{
        type: 'split-button',
        size: 'large',
        name: 'split-button:smart-lookup',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'smart-lookup',
          hint: 'Smart Lookup', // optional
          label: 'Smart Lookup', // optional
          icon: 'mdi-magnify'
        }]
      }]
    }, {
      label: 'Comments',
      width: '342px',
      name: 'comments',
      tools: [{
        type: 'split-button',
        size: 'large',
        name: 'split-button:new-comment',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'new-comment',
          hint: 'New Comment', // optional
          label: 'New Comment', // optional
          icon: 'mdi-comment-plus-outline'
        }]
      }, {
        type: 'split-button',
        size: 'large',
        name: 'split-button:delete-comment',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'delete-comment',
          hint: 'Delete Comment', // optional
          label: 'Delete', // optional
          icon: 'mdi-comment-remove-outline'
        }]
      }, {
        type: 'split-button',
        size: 'large',
        name: 'split-button:prev-comment',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'prev-comment',
          hint: 'Previous Comment', // optional
          label: 'Previous', // optional
          icon: 'mdi-chevron-left'
        }]
      }, {
        type: 'split-button',
        size: 'large',
        name: 'split-button:next-comment',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'next-comment',
          hint: 'Next Comment', // optional
          label: 'Next', // optional
          icon: 'mdi-chevron-right'
        }]
      }, {
        type: 'split-button',
        size: 'large',
        name: 'split-button:show-comments',
        dropDownCssClasses: [], // additional optional CSS classes to apply to the menu dropdown
        commands: [{
          name: 'show-comments',
          hint: 'Show Comments', // optional
          label: 'Show Comments', // optional
          icon: 'mdi-comment-multiple-outline'
        }]
      }]
    }]
  }, {
    label: 'View',
    ribbons: [{
      label: 'Document Views',
      width: '198px',
      name: 'document-views',
      tools: [{
        type: 'exclusive-buttons',
        size: 'large',
        name: 'exclusive-buttons:document-views',
        commands: [{
          name: 'editing-view',
          hint: 'Editing View', // optional
          label: 'Editing View',  // optional
          icon: 'mdi-book-open'
        }, {
          name: 'reading-view',
          hint: 'Reading View', // optional
          label: 'Reading View', // optional
          icon: 'mdi-tooltip-edit'
        }, {
          name: 'immersive-reader',
          hint: 'Immersive Reader', // optional
          label: 'Immersive Reader', // optional
          icon: 'mdi-read'
        }]
      }]
    }, {
      label: 'Show',
      name: 'show',
      width: '336px',
      tools: [{
        type: 'toggle-buttons',
        name: 'toggle-buttons:show',
        size: 'large',
        commands: [{
          name: 'navigation-pane',
          hint: 'Navigation Pane', // optional
          label: 'Navigation Pane', // optional
          icon: 'mdi-navigation'
        }, {
          name: 'header-and-footer',
          hint: 'Header and Footer', // optional
          label: 'Header & Footer', // optional
          icon: 'mdi-page-layout-body'
        }]
      }, {
        type: 'buttons',
        size: 'large',
        name: 'buttons:notes',
        // items: 'break', // display the buttons list vertically
        commands: [{
          name: 'footnotes',
          hint: 'Footnotes', // optional
          label: 'Footnotes', // optional
          icon: 'mdi-note-multiple'
        }, {
          name: 'endnotes',
          hint: 'Endnotes', // optional
          label: 'Footnotes', // optional
          icon: 'mdi-note-multiple-outline'
        }]
      }, {
        type: 'toggle-buttons',
        name: 'toggle-buttons:page-ends',
        size: 'large',
        commands: [{
          name: 'page-ends',
          hint: 'Page Ends', // optional
          label: 'Page Ends', // optional
          icon: 'mdi-format-page-break'
        }]
      }]
    }, {
      label: 'Zoom',
      width: '136px',
      name: 'zoom',
      tools: [{
        type: 'buttons',
        size: 'large',
        name: 'buttons:zoom',
        // items: 'break', // display the buttons list vertically
        commands: [{
          name: 'zoom',
          hint: 'Zoom', // optional
          label: 'Zoom', // optional
          icon: 'mdi-magnify'
        }, {
          name: 'magnify',
          hint: '100%', // optional
          label: '100%', // optional
          icon: 'mdi-magnify'
        }]
      }]
    }]
  }, {
    label: 'More VueRibbon Tools',
    ribbons: [{
      label: 'Checkboxes',
      name: 'checkboxes',
      width: '106px',
      tools: [{
        type: 'checkbox',
        label: 'Rulers', // optional
        name: 'checkbox:rulers',
        value: 'checkbox-rulers-value'
      }, {
        type: 'break'
      }, {
        type: 'checkbox',
        label: 'Gridlines',
        name: 'checkbox:gridlines',
        value: 'checkbox-gridlines-value'
      }, {
        type: 'break'
      }, {
        type: 'checkbox',
        label: 'Navigation Pane', // optional
        name: 'checkbox:navigation-pane',
        value: 'checkbox-navigation-pane-value'
      }]
    }, {
      label: 'Radios',
      name: 'radios',
      width: '106px',
      tools: [{
        type: 'radios',
        name: 'radios:operation-systems',
        items: [{
          label: 'MacOS',
          value: 'macos'
        }, {
          label: 'Linux',
          value: 'linux'
        }, {
          label: 'Windows',
          value: 'windows'
        }]
      }]
    }]
  }]
}

export default word