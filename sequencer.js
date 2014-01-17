
var SequencerUI = {
	settings: {
		padding: 5,
		width: 800,
		height: 400,
	},

	init: function(seq) {
		console.log("blarg")
		s = this.settings;
		s.seq = seq;
		s.seq_box_width = s.width - 10;
		s.seq_box_height = s.height*3.0/4
		s.raph = Raphael("container", s.width, s.height),
				
		this.container = s.raph.rect(0, 0, s.width, s.height).attr({
			'stroke': 'none'
		});
		this.draw_instrument_box();
		this.draw_sequencer();
	},

	draw_instrument_box: function() {
		s.seq_inst_box_width = s.seq_box_width/4.0;
		s.seq_inst_box_height = s.seq_box_height;
		this.seq_inst_box = s.raph.rect(s.padding, s.padding, s.seq_inst_box_width, s.seq_inst_box_height).attr({
			'fill': '#aaa',
			'stroke': '#111',
			'stroke-width': 2
		});
		this.seq_insts = [];
		var inst_box_height = s.seq_inst_box_height/s.seq.settings.num_insts;
		for (var i=0; i<s.seq.settings.num_insts; i++) {
			this.seq_insts.push(
				s.raph.rect(s.padding, s.padding+i*inst_box_height, s.seq_inst_box_width, inst_box_height).attr({
					'fill': '#ccc',
					'stroke': '#111',
					'stroke-width': 1
				})
			);
		}
	},

	draw_sequencer: function() {
		s.seq_left = s.seq_inst_box_width+s.padding;
		s.seq_width = s.seq_box_width - s.seq_left;
		console.log(s.seq_left);
		console.log(s.seq_width);
		this.seq_box = s.raph.rect(s.seq_left, s.padding, s.seq_width, s.seq_box_height).attr({
			'fill': '#777',
			'stroke-width': 2,
			'stroke': '#111'
		});
	}
};

var Sequencer = {
	settings: {
		tempo: 120,
		beats_in_measure: 4,
		beat_type: 4,
		beat_subdiv: 4,
		num_insts: 4
	},

	init: function() {	
		s = this.settings;
		this.draw_sequencer();
	},

	draw_sequencer: function() {
		s.ui = SequencerUI.init(this);
	},

};

$(document).ready(function() {
	Sequencer.init();
});