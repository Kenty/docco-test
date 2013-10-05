module.exports = function(grunt) {
	var pkg = grunt.file.readJSON('package.json'); //package.jsonの情報を読み込む
	grunt.initConfig({

		/*ここにプラグインの設定を書いていく*/

		mincss: {
			compress: {
				'css/all.css': [ 'css/style.css' ]
			}
		},
		styleguide: {
			dist: {
				options: {
					framework: {
						name: 'styledocco'
					},
					name: 'Style Guides'
				},
				files: {
					'docs': 'css/style.css'
				}
			}
		},
		clean: ['docs'],
		watch: {
			styleguide: {
					files: [ 'css/*.css' ],
					tasks: ['mincss', 'clean', 'styleguide']
				}
			}
	});
	//プラグインの読み込み
	// grunt.loadNpmTasks( 'grunt-contrib-watch' );
	// grunt.loadNpmTasks( 'grunt-contrib-mincss' );
	// grunt.loadNpmTasks( 'grunt-contrib-clean' );
	// grunt.loadNpmTasks( 'grunt-styleguide' );
	// loadNmpTasksを変更
	var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}

	grunt.registerTask('default',['watch']); //"grunt"コマンドで実行するタスクの登録
};