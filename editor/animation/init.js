//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        
        var $tryit;

        var io = new extIO({
            multipleArguments: true,
            functions: {
                python: 'sum_light',
                js: 'sumLight'
            }
        });
        io.parseInputArguments = function(data) {
            var fname = '';
            if (this.getLanguage() == "python") {
                fname = 'datetime';
            } else {
                fname = 'new Date';
            }
            var els = data[0];
            els = els.map(function(ee) {return fname + '(' + ee.join(', ') + ')'})

            var start_watching = '';
            if (data.length > 1) {
                start_watching = ',\n' + fname + '(' + data[1].join(', ') +')';
            }

            return '[\n' + els.join(',\n') + '\n]' + start_watching
        }
        io.start();
    }
);
