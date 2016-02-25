var React = require('react');
var STATE_IDS = require('../constants/stateIDs');



var Map = React.createClass({
	componentDidMount: function(){
		$.fn.maphilight.defaults = {
				fill: true,
				fillColor: '98bbec',
				fillOpacity: 1,
				stroke: true,
				strokeColor: '000000',
				strokeOpacity: 1,
				strokeWidth: 1,
				fade: true,
				alwaysOn: false,
				neverOn: false,
				groupBy: false,
				wrapClass: true,
				shadow: false,
				shadowX: 0,
				shadowY: 0,
				shadowRadius: 6,
				shadowColor: '000000',
				shadowOpacity: 0.8,
				shadowPosition: 'outside',
				shadowFrom: false
				
			}


		$('#ImageMap').maphilight();

	},
	 contextTypes: {
     router: React.PropTypes.object.isRequired
    },
	clicked: function(e){
	  e.preventDefault();	
		var id = STATE_IDS[e.target.title];
		this.context.router.replace({pathname:'/state/'+ id, query:{stateId: id}});
     
	},

	render: function(){
		
		return (
			<div >

<div className="login-background">
    <h3 className="header-text">Select a state to start browsing blurbs</h3>
    <img id="ImageMap" src="./assets/usmap.svg" useMap={"#ImageMapAreas"} />
</div>


	<map id="ImageMapAreas" name="ImageMapAreas">
<area onClick={this.clicked} title="CA" shape="poly" coords="132,394, 136,393, 138,391, 138,388, 135,388, 134,387, 135,385, 135,380, 137,379, 140,376, 140,371, 142,368, 144,366, 147,364, 149,363, 149,361, 148,360, 147,359, 146,354, 143,349, 144,346, 141,343, 127,321, 108,293, 86,260, 74,242, 76,236, 83,210, 91,180, 77,177, 64,173, 52,169, 45,167, 34,164, 27,162, 26,167, 25,174, 20,185, 17,188, 17,189, 15,190, 14,194, 13,197, 16,201, 17,205, 19,208, 18,215, 17,218, 16,223, 15,227, 17,231, 19,235, 22,240, 23,243, 22,247, 22,247, 22,249, 28,255, 27,258, 27,260, 26,262, 26,270, 28,273, 30,276, 33,276, 34,279, 32,282, 30,284, 29,284, 29,288, 29,290, 32,295, 34,300, 35,304, 36,307, 40,313, 41,315, 42,318, 43,319, 43,321, 42,323, 41,330, 40,332, 42,335, 47,335, 51,337, 55,339, 57,339, 60,342, 63,347, 64,349, 68,351, 72,352, 74,354, 74,357, 73,357, 73,358, 76,359, 79,359, 82,364, 86,368, 86,370, 89,374, 89,377, 89,386, 90,388, 99,389, 118,392, 132,394" />
<area href="#" title="SC" shape="poly" coords="735,418, 734,419, 731,418, 731,416, 729,413, 727,411, 725,410, 723,405, 720,399, 716,398, 714,396, 713,393, 711,391, 709,390, 707,387, 704,385, 699,383, 699,382, 697,379, 696,378, 693,373, 690,373, 686,371, 684,369, 684,368, 685,366, 687,365, 687,363, 693,360, 701,356, 708,355, 724,355, 727,356, 728,360, 732,359, 745,358, 747,358, 760,366, 769,374, 764,379, 762,385, 761,391, 759,392, 758,394, 756,395, 754,398, 751,401, 749,404, 748,405, 744,408, 741,409, 742,412, 737,417, 735,418" />
<area href="#" title="HI" shape="poly" coords="225,521, 227,518, 229,517, 229,518, 227,521, 225,521" />
<area href="#" title="HI" shape="poly" coords="235,518, 241,520, 243,520, 244,516, 244,513, 240,512, 236,514, 235,518" />
<area href="#" title="HI" shape="poly" coords="265,527, 268,533, 270,532, 272,532, 273,533, 277,533, 277,531, 275,530, 273,526, 271,523, 265,526, 265,527" />
<area href="#" title="HI" shape="poly" coords="284,536, 285,534, 290,535, 290,534, 296,535, 296,536, 294,538, 289,537, 284,536" />
<area href="#" title="HI" shape="poly" coords="289,541, 291,545, 294,543, 294,542, 293,540, 289,540, 289,541" />
<area href="#" title="HI" shape="poly" coords="296,540, 298,537, 303,539, 307,540, 311,543, 311,545, 308,547, 303,548, 301,546, 296,540" />
<area href="#" title="HI" shape="poly" coords="312,555, 314,553, 317,555, 324,558, 327,561, 329,563, 331,567, 335,570, 335,571, 331,574, 327,575, 325,575, 322,576, 320,580, 318,582, 316,582, 313,580, 312,575, 313,573, 311,568, 309,566, 309,563, 311,562, 313,559, 314,558, 312,557, 312,555" />
<area href="#" title="AK" shape="poly" coords="152,458, 152,540, 154,541, 157,541, 158,540, 161,540, 161,543, 167,550, 168,552, 171,550, 172,550, 172,547, 174,546, 175,545, 177,544, 180,546, 180,549, 182,550, 183,552, 187,554, 190,560, 193,563, 195,566, 196,570, 201,571, 206,573, 207,578, 208,581, 207,584, 205,586, 203,585, 202,582, 199,581, 198,580, 197,581, 198,583, 198,587, 197,587, 195,586, 193,584, 194,586, 195,588, 194,588, 190,582, 190,580, 188,578, 188,573, 187,573, 187,577, 186,577, 185,573, 184,570, 183,569, 184,575, 184,576, 182,575, 179,569, 177,568, 176,565, 175,562, 173,561, 173,559, 175,558, 175,557, 172,558, 169,556, 166,553, 162,550, 158,548, 159,545, 159,543, 157,545, 154,546, 151,545, 145,542, 140,542, 139,543, 133,539, 131,539, 128,533, 125,533, 122,535, 122,539, 123,536, 124,537, 123,541, 126,538, 126,540, 123,544, 121,544, 121,542, 120,541, 118,542, 116,540, 113,542, 111,544, 108,546, 103,546, 103,544, 106,544, 106,542, 104,542, 105,539, 107,536, 107,534, 107,533, 112,531, 113,532, 115,532, 114,530, 110,529, 106,532, 103,535, 102,538, 100,540, 96,541, 93,544, 93,546, 95,546, 96,548, 93,552, 87,556, 80,560, 78,561, 72,562, 67,564, 69,565, 68,567, 67,568, 65,567, 61,567, 61,569, 60,569, 60,567, 57,568, 54,569, 50,568, 48,570, 45,570, 42,571, 41,572, 39,571, 36,570, 34,571, 33,572, 32,571, 32,569, 35,568, 41,568, 45,567, 47,565, 50,564, 52,563, 54,563, 56,565, 57,564, 59,562, 62,561, 65,560, 66,560, 67,560, 68,560, 69,557, 73,555, 75,552, 77,547, 79,546, 79,543, 77,545, 74,545, 73,543, 72,543, 71,544, 71,546, 70,546, 68,541, 67,542, 66,541, 66,540, 62,540, 60,541, 57,541, 59,539, 59,537, 58,535, 60,534, 61,534, 60,532, 60,528, 60,527, 59,528, 53,528, 51,527, 51,523, 49,520, 49,519, 51,518, 51,516, 52,515, 51,514, 50,515, 49,512, 50,507, 54,504, 57,503, 59,499, 61,498, 64,499, 64,501, 66,501, 70,499, 71,499, 72,500, 74,500, 76,499, 77,494, 77,488, 75,489, 72,490, 70,489, 66,488, 62,488, 58,484, 59,480, 59,478, 57,476, 55,473, 56,472, 62,471, 64,471, 65,472, 66,472, 66,471, 70,470, 72,470, 73,471, 72,473, 72,475, 74,476, 79,478, 81,477, 79,473, 78,470, 79,469, 75,467, 75,466, 75,465, 75,461, 72,456, 69,452, 72,450, 75,450, 77,451, 81,451, 85,447, 86,444, 89,442, 91,443, 94,442, 97,440, 98,440, 99,441, 104,441, 106,438, 107,438, 111,440, 113,442, 112,443, 113,444, 114,443, 118,443, 118,447, 120,448, 127,449, 133,453, 135,452, 140,454, 142,454, 144,453, 148,455, 152,458" />
<area href="#" title="AK" shape="poly" coords="41,486, 43,491, 43,492, 40,491, 39,488, 37,486, 35,486, 34,484, 36,481, 37,484, 39,485, 41,486" />
<area href="#" title="AK" shape="poly" coords="39,518, 42,519, 46,520, 47,521, 45,524, 42,524, 39,521, 39,518" />
<area href="#" title="AK" shape="poly" coords="19,504, 20,507, 21,508, 20,509, 18,506, 18,504, 19,504" />
<area href="#" title="AK" shape="poly" coords="5,575, 9,573, 12,572, 14,572, 15,574, 17,574, 19,572, 18,571, 21,570, 24,573, 23,574, 19,576, 16,575, 12,574, 8,575, 7,576, 5,575" />
<area href="#" title="AK" shape="poly" coords="53,571, 54,573, 56,571, 55,570, 53,571" />
<area href="#" title="AK" shape="poly" coords="56,574, 57,571, 59,572, 58,574, 56,574" />
<area href="#" title="AK" shape="poly" coords="78,572, 80,573, 81,572, 80,571, 78,572" />
<area href="#" title="AK" shape="poly" coords="87,560, 88,565, 91,566, 96,563, 100,561, 98,558, 99,556, 97,557, 94,557, 95,556, 97,556, 101,555, 102,553, 99,552, 100,551, 97,552, 93,556, 88,559, 87,560" />
<area href="#" title="AK" shape="poly" coords="128,541, 130,539, 129,537, 127,538, 128,541" />
<area href="#" title="FL" shape="poly" coords="730,449, 732,457, 736,466, 741,475, 744,481, 749,487, 753,490, 754,493, 753,494, 753,496, 755,503, 758,506, 761,511, 764,516, 769,524, 770,532, 770,543, 771,545, 771,548, 768,550, 769,551, 768,553, 768,556, 769,558, 766,561, 763,562, 759,562, 758,564, 756,565, 754,564, 753,563, 753,561, 752,557, 749,552, 745,550, 742,550, 741,551, 738,547, 737,543, 735,539, 733,538, 732,540, 730,540, 728,535, 725,531, 722,526, 720,523, 716,520, 718,517, 721,512, 721,511, 717,510, 715,510, 716,511, 718,512, 717,516, 716,517, 714,513, 713,508, 713,505, 714,501, 714,492, 711,488, 710,485, 705,484, 703,483, 701,481, 698,479, 697,476, 694,475, 692,471, 688,470, 685,468, 683,468, 679,469, 679,471, 679,472, 679,473, 676,473, 672,476, 669,478, 665,478, 662,480, 662,477, 660,475, 657,474, 656,473, 648,469, 641,467, 636,468, 631,468, 625,470, 621,471, 621,463, 619,461, 617,459, 617,456, 627,455, 652,452, 658,452, 664,452, 667,455, 668,457, 676,457, 686,456, 707,455, 712,454, 717,454, 717,457, 720,458, 720,454, 718,449, 719,448, 725,449, 730,449" />
<area href="#" title="FL" shape="poly" coords="742,578, 744,577, 746,577, 747,575, 749,573, 750,574, 752,574, 752,575, 749,576, 745,577, 743,579, 742,578" />
<area href="#" title="FL" shape="poly" coords="755,573, 756,574, 759,572, 764,568, 768,564, 770,558, 771,556, 771,553, 770,553, 769,556, 768,560, 765,566, 761,570, 757,571, 755,573" />
<area href="#" title="GA" shape="poly" coords="666,365, 662,366, 653,367, 645,368, 645,370, 645,372, 646,375, 649,383, 652,393, 653,398, 655,403, 656,410, 658,416, 660,419, 661,423, 663,423, 663,425, 661,430, 661,433, 661,435, 662,439, 662,444, 662,447, 662,448, 664,448, 664,452, 667,455, 668,457, 676,457, 686,456, 707,455, 712,454, 717,454, 717,457, 720,458, 720,454, 718,449, 719,448, 725,449, 730,449, 729,443, 731,433, 733,429, 732,427, 736,420, 735,418, 734,419, 731,418, 731,416, 729,413, 727,411, 725,410, 723,405, 720,399, 716,398, 714,396, 713,393, 711,391, 709,390, 707,387, 704,385, 699,383, 699,382, 697,379, 696,378, 693,373, 690,373, 686,371, 684,369, 684,368, 685,366, 687,365, 687,363, 685,363, 680,364, 673,365, 666,365" />
<area href="#" title="AL" shape="poly" coords="604,470, 603,456, 600,438, 600,424, 601,394, 601,378, 601,372, 609,371, 635,369, 645,368, 645,370, 645,372, 646,375, 649,383, 652,393, 653,398, 655,403, 656,410, 658,416, 660,419, 661,423, 663,423, 663,425, 661,430, 661,433, 661,435, 662,439, 662,444, 662,447, 662,448, 664,448, 665,452, 658,452, 652,452, 627,455, 617,456, 617,459, 619,461, 621,463, 622,471, 615,473, 613,473, 615,471, 615,470, 612,464, 610,464, 609,468, 608,471, 607,470, 604,470" />
<area href="#" title="NC" shape="poly" coords="804,308, 806,312, 809,318, 811,321, 812,323, 810,323, 810,324, 810,328, 808,329, 807,331, 806,334, 802,336, 800,335, 798,335, 797,334, 797,335, 797,336, 799,336, 800,337, 798,343, 802,343, 803,345, 805,343, 806,342, 804,346, 801,350, 800,350, 799,350, 796,351, 791,353, 785,358, 782,363, 780,369, 779,371, 775,372, 769,374, 760,366, 747,358, 745,358, 732,359, 728,360, 727,356, 724,355, 708,355, 701,356, 693,360, 687,363, 685,363, 680,364, 673,365, 666,365, 667,361, 668,359, 671,358, 672,355, 676,352, 679,351, 683,347, 688,345, 688,342, 692,339, 693,338, 697,336, 700,336, 702,336, 703,333, 706,330, 707,328, 707,324, 711,325, 718,324, 733,322, 750,319, 770,316, 788,312, 799,309, 804,308" />
<area href="#" title="NC" shape="poly" coords="808,340, 810,337, 813,335, 815,334, 815,332, 814,326, 813,324, 812,322, 813,322, 816,327, 816,331, 816,335, 813,336, 810,339, 809,340, 808,340" />
<area href="#" title="TN" shape="poly" coords="673,329, 623,334, 608,336, 604,336, 600,336, 600,340, 592,340, 585,341, 574,341, 574,347, 572,353, 571,356, 570,360, 569,362, 565,365, 567,368, 566,372, 564,374, 572,374, 596,372, 601,372, 609,371, 635,369, 645,368, 653,367, 662,366, 666,365, 667,361, 668,359, 671,358, 672,355, 676,352, 679,351, 683,347, 688,345, 688,342, 692,339, 693,338, 697,336, 700,336, 702,336, 703,333, 706,330, 707,328, 707,324, 705,324, 702,326, 695,326, 683,328, 673,329" />
<area href="#" title="RI" shape="poly" coords="844,193, 844,189, 843,185, 842,179, 847,178, 849,179, 852,183, 855,187, 852,189, 851,188, 850,190, 847,192, 844,193" />
<area href="#" title="CT" shape="poly" coords="845,193, 844,189, 843,185, 842,179, 837,180, 816,185, 816,188, 818,195, 818,203, 817,205, 818,207, 823,204, 827,201, 828,198, 829,199, 832,198, 837,197, 845,193" />
<area href="#" title="MA" shape="poly" coords="870,187, 872,187, 872,185, 873,185, 874,187, 873,188, 869,188, 870,187" />
<area href="#" title="MA" shape="poly" coords="860,188, 863,185, 864,185, 866,187, 864,188, 862,189, 860,188" />
<area href="#" title="MA" shape="poly" coords="827,167, 844,163, 846,162, 848,159, 852,157, 854,162, 852,167, 852,168, 854,171, 855,170, 856,170, 859,172, 862,178, 866,178, 868,178, 870,176, 869,173, 867,172, 865,172, 864,171, 865,171, 867,171, 869,171, 871,174, 872,176, 872,179, 868,180, 864,182, 860,186, 858,188, 858,187, 861,186, 861,184, 860,181, 858,182, 857,184, 857,186, 855,187, 852,183, 849,179, 847,178, 842,179, 837,180, 816,185, 815,179, 815,169, 820,168, 827,167" />
<area href="#" title="ME" shape="poly" coords="892,94, 894,96, 896,100, 896,101, 894,106, 892,107, 889,110, 884,115, 880,113, 879,114, 877,116, 876,117, 878,119, 877,119, 877,122, 875,122, 875,120, 874,119, 873,119, 871,116, 869,117, 871,119, 871,120, 870,121, 870,124, 871,126, 869,128, 866,129, 866,131, 861,134, 859,135, 858,133, 855,137, 856,140, 854,141, 854,146, 853,153, 850,152, 850,149, 846,148, 846,145, 839,122, 834,108, 837,108, 838,108, 838,106, 839,100, 841,96, 843,92, 841,90, 841,84, 842,83, 842,80, 842,79, 842,74, 844,69, 847,61, 849,57, 850,57, 851,57, 851,58, 852,60, 855,61, 856,60, 856,59, 860,56, 862,55, 863,55, 869,57, 871,58, 879,87, 885,87, 886,89, 886,93, 889,96, 890,96, 890,95, 889,94, 892,94" />
<area href="#" title="ME" shape="poly" coords="872,123, 873,122, 875,123, 875,125, 873,126, 872,123" />
<area href="#" title="ME" shape="poly" coords="878,117, 880,119, 882,116, 882,115, 880,115, 878,117" />
<area href="#" title="NH" shape="poly" coords="852,157, 852,156, 853,153, 850,152, 850,149, 846,148, 846,145, 839,122, 834,108, 834,108, 833,110, 832,109, 831,108, 830,110, 829,116, 829,121, 831,124, 831,128, 828,132, 825,133, 825,134, 826,136, 826,144, 825,153, 825,157, 826,159, 826,163, 826,165, 827,167, 844,163, 846,162, 848,159, 852,157" />
<area href="#" title="VT" shape="poly" coords="815,169, 815,164, 812,153, 811,153, 808,151, 809,149, 808,147, 806,142, 807,138, 806,133, 804,127, 803,122, 829,116, 829,121, 831,124, 831,128, 828,132, 825,133, 825,134, 826,136, 826,144, 825,153, 825,157, 826,159, 826,163, 826,165, 827,167, 820,168, 815,169" />
<area href="#" title="NY" shape="poly" coords="800,203, 799,202, 797,202, 794,200, 792,195, 789,194, 787,192, 769,196, 727,204, 719,206, 718,199, 721,197, 722,196, 723,195, 724,194, 726,192, 727,190, 729,188, 730,187, 730,186, 729,183, 727,183, 725,177, 728,175, 732,174, 736,172, 739,172, 745,172, 747,173, 749,173, 751,172, 753,171, 758,170, 760,169, 762,166, 763,164, 765,164, 767,163, 767,160, 766,158, 766,157, 767,155, 767,153, 765,153, 763,153, 763,152, 762,149, 768,144, 769,143, 770,140, 773,136, 776,132, 778,130, 780,128, 783,127, 788,126, 791,126, 796,124, 803,122, 804,127, 806,133, 807,138, 806,142, 808,147, 809,149, 808,151, 811,153, 812,153, 815,164, 815,169, 815,179, 815,184, 816,188, 818,195, 818,203, 817,205, 818,207, 818,208, 816,210, 817,211, 818,211, 819,210, 821,207, 822,207, 824,207, 826,207, 834,204, 837,201, 838,200, 842,201, 839,205, 835,207, 828,213, 826,213, 820,215, 816,216, 815,216, 814,213, 815,210, 814,208, 812,207, 807,206, 804,205, 800,203"/>
<area href="#" title="NJ" shape="poly" coords="800,203, 798,206, 798,208, 796,211, 796,213, 797,214, 797,217, 795,218, 796,220, 796,221, 799,222, 800,224, 803,227, 805,228, 805,229, 802,232, 801,234, 799,237, 797,238, 796,239, 796,240, 795,242, 796,245, 799,247, 804,250, 808,250, 808,252, 807,253, 807,255, 808,255, 810,253, 811,248, 814,244, 817,238, 818,233, 817,232, 817,223, 815,219, 814,220, 812,220, 811,220, 812,219, 814,217, 814,216, 814,213, 815,210, 814,208, 812,207, 807,206, 804,205, 800,203" />
<area href="#" title="PA" shape="poly" coords="796,239, 797,238, 799,237, 801,234, 802,232, 805,229, 805,228, 803,227, 800,224, 799,222, 796,221, 796,220, 795,218, 797,217, 797,214, 796,213, 796,211, 798,208, 798,206, 800,203, 799,202, 797,202, 794,200, 792,195, 789,194, 787,192, 769,196, 727,204, 719,206, 718,199, 713,204, 712,205, 708,208, 710,226, 712,237, 716,255, 720,255, 732,253, 768,246, 783,243, 791,241, 792,240, 794,239, 796,239" />
<area href="#" title="DE" shape="poly" coords="795,242, 796,240, 796,239, 794,239, 792,240, 790,242, 792,246, 794,251, 796,261, 798,267, 802,266, 808,265, 806,258, 805,259, 802,256, 800,252, 798,248, 796,247, 794,244, 795,242" />
<area href="#" title="MD" shape="poly" coords="808,265, 802,266, 798,267, 796,261, 794,251, 792,246, 791,241, 783,243, 768,246, 732,253, 733,258, 734,263, 734,263, 736,261, 739,258, 741,258, 742,256, 744,254, 745,254, 748,254, 751,252, 753,251, 754,250, 756,251, 759,253, 761,254, 762,256, 766,257, 766,260, 771,261, 773,263, 774,261, 776,262, 775,266, 774,268, 773,271, 773,273, 773,274, 778,276, 782,276, 785,277, 787,277, 788,275, 787,273, 787,271, 784,269, 782,264, 784,259, 784,257, 782,255, 786,250, 788,248, 788,249, 787,251, 786,254, 786,256, 788,256, 788,261, 786,262, 787,266, 787,265, 788,263, 790,265, 788,266, 788,270, 790,273, 794,273, 796,273, 799,278, 800,278, 800,282, 798,286, 798,293, 799,296, 801,296, 802,292, 803,289, 803,282, 806,277, 808,271, 808,265" />
<area href="#" title="MD" shape="poly" coords="793,275, 794,277, 794,279, 795,281, 794,274, 793,275" />
<area href="#" title="WV" shape="poly" coords="732,253, 733,258, 734,263, 734,263, 736,261, 739,258, 741,258, 742,256, 744,254, 745,254, 748,254, 751,252, 753,251, 754,250, 756,251, 759,253, 761,254, 762,256, 761,260, 755,257, 751,256, 751,261, 750,263, 749,266, 748,267, 745,269, 745,272, 742,272, 741,275, 740,280, 738,280, 736,279, 735,277, 733,277, 733,281, 731,288, 726,298, 727,299, 727,302, 725,304, 723,303, 720,306, 717,305, 716,309, 707,311, 704,312, 702,311, 700,310, 698,307, 695,305, 693,302, 690,299, 689,297, 687,295, 686,294, 686,289, 688,288, 690,288, 690,285, 691,284, 692,279, 692,275, 694,274, 695,276, 695,277, 697,276, 698,275, 697,273, 697,271, 697,269, 700,266, 701,265, 703,265, 705,264, 708,260, 710,257, 711,251, 711,246, 711,242, 710,239, 711,237, 712,236, 716,255, 720,255, 732,253" />
<area href="#" title="VA" shape="poly" coords="698,306, 700,310, 702,311, 704,312, 707,311, 709,309, 717,305, 720,306, 723,303, 725,304, 727,302, 727,299, 726,298, 731,288, 733,281, 733,277, 735,277, 736,279, 738,280, 740,280, 741,275, 742,272, 745,272, 745,269, 748,267, 749,266, 750,263, 751,261, 751,256, 755,257, 761,260, 762,255, 766,257, 766,260, 771,261, 773,263, 774,261, 776,262, 775,266, 774,268, 773,271, 773,273, 773,274, 778,276, 780,277, 785,278, 787,280, 791,280, 792,282, 791,286, 792,287, 792,289, 794,291, 794,293, 790,292, 790,293, 792,294, 792,295, 794,296, 795,298, 795,300, 793,302, 793,302, 796,302, 799,301, 800,301, 804,308, 799,309, 788,312, 770,316, 750,319, 733,322, 718,324, 711,325, 707,324, 705,324, 702,326, 695,326, 683,328, 673,329, 676,328, 681,325, 685,323, 685,321, 687,319, 691,314, 695,310, 698,306" />
<area href="#" title="KY" shape="poly" coords="698,307, 695,310, 691,314, 687,319, 685,321, 685,323, 681,325, 676,328, 673,329, 623,334, 608,336, 604,336, 600,336, 600,340, 592,340, 585,341, 575,341, 576,340, 578,338, 580,337, 580,334, 581,332, 580,330, 580,328, 582,326, 585,326, 587,327, 591,328, 592,328, 592,326, 591,323, 591,321, 593,320, 595,319, 597,318, 596,317, 595,315, 597,314, 598,311, 600,309, 606,308, 610,308, 611,310, 613,311, 614,307, 617,306, 619,308, 620,309, 622,308, 622,305, 625,303, 626,303, 627,304, 631,304, 632,302, 632,300, 635,296, 639,293, 640,288, 642,288, 646,286, 649,284, 648,283, 647,281, 647,279, 651,279, 654,278, 657,280, 658,284, 664,284, 665,286, 667,286, 670,285, 673,285, 674,286, 677,284, 678,283, 680,283, 681,285, 682,286, 686,288, 686,294, 687,295, 689,297, 690,299, 693,302, 695,305, 698,307" />
<area href="#" title="OH" shape="poly" coords="708,208, 701,212, 697,214, 694,217, 690,221, 687,222, 684,222, 679,225, 677,225, 673,222, 668,223, 666,221, 663,220, 659,221, 649,222, 641,223, 643,238, 644,251, 647,273, 647,279, 651,279, 654,278, 657,280, 658,284, 664,284, 665,286, 667,286, 670,285, 673,285, 674,286, 677,284, 678,283, 680,283, 681,285, 682,286, 686,289, 688,288, 690,288, 690,285, 691,284, 692,279, 692,275, 694,274, 695,276, 695,277, 697,276, 698,275, 697,273, 697,271, 697,269, 700,266, 701,265, 703,265, 705,264, 708,260, 710,257, 711,251, 711,246, 711,242, 710,239, 711,237, 712,237, 710,226, 708,208" />
<area href="#" title="MI" shape="poly" coords="562,99, 564,97, 566,96, 571,92, 573,91, 574,92, 569,97, 565,99, 563,100, 562,99" />
<area href="#" title="MI" shape="poly" coords="645,130, 646,132, 649,132, 650,131, 646,128, 645,128, 644,129, 645,130" />
<area href="#" title="MI" shape="poly" coords="674,191, 671,183, 669,174, 667,171, 664,169, 662,170, 659,172, 657,177, 654,180, 653,181, 652,180, 653,172, 654,169, 654,166, 657,165, 657,155, 655,153, 654,152, 653,150, 654,149, 655,150, 655,148, 653,146, 652,143, 649,143, 645,142, 640,139, 637,139, 636,139, 635,139, 632,137, 630,138, 627,141, 627,144, 628,144, 630,145, 631,146, 628,146, 626,147, 624,148, 624,150, 624,152, 624,157, 621,159, 620,159, 620,155, 622,153, 622,150, 622,150, 620,150, 619,154, 616,156, 614,157, 614,158, 615,159, 614,162, 612,162, 612,163, 613,166, 612,171, 610,175, 611,180, 611,181, 610,183, 610,184, 610,187, 613,193, 616,199, 617,203, 617,208, 616,214, 613,219, 613,221, 610,224, 609,225, 614,225, 635,223, 641,222, 641,223, 649,222, 659,221, 664,220, 662,219, 663,218, 665,214, 667,212, 666,208, 668,206, 669,206, 669,202, 671,199, 672,200, 672,201, 673,201, 674,200, 674,191" />
<area href="#" title="MI" shape="poly" coords="547,127, 549,126, 552,125, 555,123, 555,122, 556,122, 561,121, 564,119, 568,117, 568,116, 570,113, 572,112, 573,110, 575,108, 579,106, 584,105, 585,106, 585,107, 581,108, 580,111, 577,112, 577,114, 575,117, 574,120, 575,120, 576,119, 579,116, 581,118, 583,118, 586,119, 587,120, 589,123, 592,125, 595,125, 597,124, 598,126, 600,126, 601,125, 602,125, 604,124, 608,121, 611,120, 617,119, 622,118, 624,116, 626,116, 626,122, 626,122, 629,123, 631,123, 637,121, 638,120, 639,120, 639,127, 642,130, 644,131, 645,132, 644,132, 643,132, 639,131, 637,132, 635,132, 632,133, 630,133, 624,132, 619,132, 618,134, 611,135, 609,136, 607,139, 606,140, 606,140, 604,138, 600,141, 599,141, 598,139, 597,139, 596,143, 595,147, 591,155, 589,154, 588,153, 587,143, 583,142, 582,139, 570,137, 567,136, 559,133, 551,132, 547,127" />
<area href="#" title="WY" shape="poly" coords="343,158, 332,157, 301,154, 285,152, 258,148, 239,145, 237,156, 233,180, 228,209, 227,219, 225,231, 232,232, 248,234, 256,235, 276,237, 312,241, 336,243, 340,200, 342,176, 343,158" />
<area href="#" title="MT" shape="poly" coords="345,138, 346,127, 348,103, 349,88, 351,74, 320,71, 292,68, 263,64, 232,58, 214,55, 183,49, 178,69, 182,76, 180,81, 182,85, 185,87, 189,97, 192,100, 193,101, 196,102, 196,104, 189,121, 189,124, 192,127, 193,127, 197,124, 198,123, 200,124, 199,129, 202,141, 205,143, 206,144, 208,146, 207,149, 208,153, 209,154, 211,151, 214,151, 217,153, 219,152, 223,152, 227,154, 229,153, 230,150, 233,150, 234,151, 235,154, 237,156, 239,145, 258,148, 285,152, 301,154, 332,157, 343,159, 345,143, 345,138" />
<area href="#" title="ID" shape="poly" coords="136,191, 140,173, 144,156, 146,152, 148,146, 147,144, 145,144, 144,143, 144,142, 145,139, 149,134, 151,133, 152,132, 152,129, 153,128, 157,123, 161,118, 161,115, 158,112, 156,108, 157,99, 160,83, 165,63, 168,50, 169,46, 183,49, 178,69, 182,76, 180,81, 182,85, 185,87, 189,97, 192,100, 193,101, 196,102, 196,104, 189,121, 189,124, 192,127, 193,127, 197,124, 198,123, 200,124, 199,129, 202,141, 205,143, 206,144, 208,146, 207,149, 208,153, 209,154, 211,151, 214,151, 217,153, 219,152, 223,152, 227,154, 229,153, 230,150, 233,150, 234,151, 235,154, 237,156, 233,180, 229,209, 224,208, 216,207, 206,205, 194,203, 182,201, 174,199, 165,197, 156,195, 136,191" />
<area href="#" title="WA" shape="poly" coords="90,25, 94,27, 104,29, 112,31, 131,37, 154,42, 169,46, 168,50, 165,63, 160,83, 157,99, 157,108, 143,105, 128,101, 113,101, 113,100, 108,102, 103,102, 101,100, 100,101, 95,100, 94,99, 89,97, 88,97, 84,96, 82,98, 76,97, 70,93, 71,92, 71,85, 69,81, 65,81, 64,78, 62,78, 60,76, 58,77, 56,74, 56,72, 59,71, 61,67, 58,66, 58,63, 62,62, 60,59, 58,53, 59,50, 59,42, 57,39, 59,30, 62,30, 64,33, 67,36, 70,38, 74,40, 77,40, 80,42, 83,43, 85,42, 85,40, 87,39, 89,38, 89,39, 89,41, 87,41, 87,43, 88,44, 89,47, 90,49, 92,48, 92,47, 91,46, 90,43, 91,41, 90,40, 90,38, 92,34, 91,32, 89,27, 89,26, 90,25" />
<area href="#" title="WA" shape="poly" coords="81,31, 83,31, 83,32, 85,31, 87,31, 88,32, 86,34, 87,35, 86,37, 85,37, 84,34, 84,35, 83,36, 81,34, 81,31" />
<area href="#" title="TX" shape="poly" coords="345,341, 367,342, 397,344, 395,367, 395,384, 395,385, 399,389, 401,390, 402,390, 403,388, 404,390, 406,390, 406,388, 409,390, 408,393, 412,394, 415,395, 419,395, 421,397, 423,395, 427,396, 429,399, 430,399, 430,401, 432,402, 434,400, 436,400, 439,400, 439,403, 444,405, 445,404, 447,400, 448,400, 449,402, 453,403, 457,404, 460,405, 462,404, 462,401, 466,401, 468,402, 471,400, 472,400, 473,402, 477,402, 478,400, 480,400, 482,403, 485,405, 488,405, 491,407, 493,409, 496,407, 499,408, 499,419, 499,428, 500,438, 501,441, 503,445, 504,450, 508,455, 508,458, 509,459, 508,467, 505,472, 507,474, 506,477, 506,484, 504,487, 505,490, 498,492, 489,496, 488,498, 485,500, 483,501, 482,502, 477,507, 474,509, 469,513, 463,515, 457,518, 456,520, 450,523, 447,524, 443,529, 439,529, 438,531, 440,533, 439,538, 438,543, 437,546, 436,551, 437,553, 438,560, 439,566, 441,568, 440,570, 437,572, 432,568, 426,567, 425,567, 422,567, 418,564, 413,563, 405,559, 403,556, 402,549, 399,548, 398,545, 399,545, 399,541, 398,541, 397,540, 399,536, 397,533, 394,532, 391,528, 387,522, 383,519, 383,517, 378,505, 377,501, 376,499, 376,498, 370,493, 367,490, 367,489, 365,487, 358,486, 351,485, 348,483, 344,485, 340,486, 338,489, 337,493, 333,499, 331,501, 328,500, 326,499, 324,498, 321,496, 321,496, 319,494, 314,492, 307,484, 305,480, 305,472, 302,466, 301,463, 299,462, 298,460, 294,458, 292,456, 285,449, 284,446, 280,443, 278,439, 276,436, 274,436, 273,431, 281,432, 309,435, 337,436, 339,413, 343,360, 345,341, 346,341" />
<area href="#" title="TX" shape="poly" coords="442,568, 441,561, 438,554, 438,547, 439,539, 443,532, 446,527, 449,524, 450,524, 445,530, 441,537, 439,543, 438,548, 439,554, 442,561, 442,566, 442,567, 442,568" />
<area href="#" title="AZ" shape="poly" coords="133,394, 130,396, 130,397, 130,398, 149,408, 160,416, 175,424, 191,434, 203,436, 229,440, 231,427, 234,401, 241,349, 245,319, 220,316, 194,311, 162,305, 159,323, 158,323, 157,326, 154,326, 153,323, 150,323, 150,321, 149,321, 148,322, 146,323, 146,330, 146,331, 145,344, 144,346, 143,349, 146,354, 147,359, 148,360, 149,361, 149,363, 147,364, 144,366, 142,368, 140,371, 140,376, 137,379, 135,380, 135,385, 134,387, 135,388, 138,388, 138,391, 136,393, 133,394" />
<area href="#" title="NV" shape="poly" coords="136,191, 156,195, 165,197, 174,199, 182,201, 181,206, 177,223, 174,243, 172,252, 170,265, 167,281, 164,295, 162,306, 159,323, 158,323, 157,326, 154,326, 153,323, 150,323, 150,321, 149,321, 148,322, 146,323, 146,330, 146,331, 145,344, 144,346, 141,343, 127,321, 108,293, 86,260, 74,242, 76,236, 83,210, 90,180, 123,188, 136,191" />
<area href="#" title="UT" shape="poly" coords="245,320, 220,316, 194,311, 162,305, 164,295, 167,281, 170,265, 172,252, 174,243, 177,223, 181,206, 182,201, 194,203, 206,205, 216,207, 224,208, 229,209, 227,219, 225,231, 232,232, 248,234, 257,235, 254,256, 251,278, 247,305, 246,316, 245,320" />
<area href="#" title="CO" shape="poly" coords="363,331, 367,268, 368,246, 336,243, 312,241, 276,237, 256,235, 254,256, 251,278, 247,305, 246,316, 245,320, 278,323, 314,328, 346,330, 352,331, 363,331" />
<area href="#" title="NM" shape="poly" coords="274,436, 273,431, 281,432, 309,435, 337,436, 339,413, 343,360, 345,341, 346,341, 346,330, 314,328, 278,323, 245,320, 241,349, 234,401, 231,427, 229,440, 244,441, 245,432, 261,434, 274,436" />
<area href="#" title="OR" shape="poly" coords="136,190, 140,173, 144,156, 146,152, 148,146, 147,144, 145,144, 144,143, 144,142, 145,139, 149,134, 151,133, 152,132, 152,129, 153,128, 157,123, 161,118, 161,115, 158,112, 157,108, 143,105, 128,101, 113,101, 113,100, 108,102, 103,102, 101,100, 100,101, 95,100, 94,99, 89,97, 88,97, 84,96, 82,98, 76,97, 70,93, 71,92, 71,85, 69,81, 65,81, 64,78, 62,78, 56,80, 54,86, 51,96, 48,102, 43,116, 37,129, 29,141, 27,144, 26,152, 25,158, 27,162, 34,164, 45,167, 52,169, 64,173, 77,177, 91,180" />
<area href="#" title="OR" shape="poly" coords="136,191, 90,180, 123,188, 136,191" />
<area href="#" title="ND" shape="poly" coords="456,143, 455,135, 454,128, 452,115, 451,106, 450,102, 448,97, 448,87, 449,84, 447,78, 418,78, 400,77, 375,76, 351,74, 349,88, 348,103, 346,127, 345,138, 400,142, 456,143" />
<area href="#" title="SD" shape="poly" coords="457,216, 457,214, 455,212, 457,207, 458,202, 455,200, 455,197, 456,195, 458,195, 458,188, 458,159, 457,156, 453,153, 452,151, 452,149, 454,148, 456,146, 456,143, 400,142, 345,138, 345,143, 343,159, 342,176, 340,201, 355,202, 375,203, 392,204, 415,205, 425,205, 427,207, 432,210, 433,211, 437,209, 441,209, 444,209, 445,210, 450,211, 453,213, 454,215, 454,217, 456,217, 457,216" />
<area href="#" title="NE" shape="poly" coords="469,258, 470,260, 470,262, 472,266, 475,270, 469,270, 427,270, 388,268, 367,267, 368,246, 336,243, 340,201, 355,202, 375,203, 392,204, 415,205, 425,205, 427,207, 432,210, 433,211, 437,209, 441,209, 444,209, 445,210, 450,211, 453,213, 454,215, 454,217, 456,217, 458,216, 459,222, 462,229, 462,234, 465,237, 465,242, 467,246, 467,253, 469,258" />
<area href="#" title="IA" shape="poly" coords="548,214, 548,216, 551,216, 551,217, 552,219, 556,223, 556,225, 556,228, 554,232, 553,234, 551,236, 549,236, 544,238, 543,240, 543,242, 543,243, 545,244, 545,248, 543,250, 543,251, 543,254, 541,255, 539,256, 539,257, 539,259, 538,261, 534,257, 533,255, 526,256, 516,256, 492,257, 479,257, 470,258, 469,258, 467,253, 467,246, 465,242, 465,237, 462,234, 462,229, 459,222, 458,216, 456,214, 455,212, 457,207, 458,202, 455,200, 455,197, 456,195, 457,195, 469,195, 517,194, 534,194, 538,193, 539,197, 541,198, 541,200, 539,203, 539,206, 542,210, 544,211, 547,211, 548,214" />
<area href="#" title="MS" shape="poly" coords="604,471, 603,472, 598,472, 597,471, 595,471, 588,473, 586,472, 584,476, 583,477, 582,474, 581,470, 577,467, 578,460, 578,459, 576,459, 568,460, 545,461, 544,459, 545,451, 548,445, 553,437, 552,435, 553,435, 554,432, 552,430, 552,428, 550,424, 550,418, 551,416, 551,412, 549,409, 551,407, 549,405, 550,404, 551,398, 554,395, 553,393, 557,388, 559,387, 559,385, 559,383, 561,378, 564,377, 564,374, 572,374, 596,372, 601,372, 601,378, 601,394, 600,424, 600,438, 603,456, 604,471" />
<area href="#" title="IN" shape="poly" coords="598,311, 597,307, 598,303, 600,300, 602,296, 604,292, 604,287, 602,284, 602,281, 603,276, 602,269, 601,253, 600,238, 599,227, 602,228, 603,229, 604,229, 606,227, 609,225, 614,225, 635,223, 641,222, 641,223, 643,238, 644,251, 647,273, 647,279, 647,281, 648,283, 649,284, 646,286, 642,288, 640,288, 639,293, 635,296, 632,300, 632,302, 631,304, 627,304, 626,303, 625,303, 622,305, 622,308, 620,309, 619,308, 617,306, 614,307, 613,311, 611,310, 610,308, 606,308, 600,309, 598,311" />
<area href="#" title="IL" shape="poly" coords="597,311, 597,307, 598,303, 600,300, 602,296, 604,292, 604,287, 602,284, 602,281, 603,276, 602,269, 601,253, 600,238, 599,227, 598,226, 597,224, 596,220, 594,219, 593,216, 592,211, 583,212, 557,214, 548,213, 548,216, 551,216, 551,217, 552,219, 556,223, 556,225, 556,228, 554,232, 553,234, 551,236, 549,236, 544,238, 543,240, 543,242, 543,243, 545,244, 545,248, 543,250, 543,251, 543,254, 541,255, 539,256, 539,257, 539,259, 538,260, 537,263, 537,266, 539,274, 546,281, 552,284, 551,289, 552,290, 559,290, 561,292, 561,295, 558,301, 558,304, 560,308, 566,313, 570,314, 572,318, 574,321, 574,324, 575,328, 577,330, 580,330, 580,328, 582,326, 585,326, 587,327, 591,328, 592,328, 592,326, 591,323, 591,321, 593,320, 595,319, 597,318, 596,317, 595,315, 597,314, 597,311" />
<area href="#" title="MN" shape="poly" coords="456,143, 455,135, 454,128, 452,115, 451,106, 450,102, 448,97, 448,87, 449,84, 447,78, 476,78, 476,71, 477,70, 479,71, 481,72, 482,77, 483,83, 485,84, 489,84, 490,86, 496,86, 496,88, 501,88, 501,87, 502,86, 504,85, 505,86, 508,86, 512,89, 517,91, 519,91, 520,91, 521,90, 522,93, 524,94, 525,94, 526,94, 526,96, 529,97, 532,97, 533,96, 536,93, 539,92, 539,94, 540,95, 541,95, 542,95, 550,94, 552,97, 553,97, 553,96, 558,96, 557,98, 553,100, 544,104, 540,106, 537,108, 534,112, 532,115, 531,116, 526,121, 525,121, 522,124, 522,125, 520,127, 519,130, 519,138, 518,140, 513,143, 511,149, 511,149, 514,151, 515,154, 513,158, 513,161, 513,168, 516,171, 519,171, 521,174, 524,174, 528,180, 535,184, 537,186, 538,194, 534,194, 517,194, 469,195, 457,195, 458,188, 458,159, 457,156, 453,153, 452,151, 452,149, 454,148, 456,146, 456,143" />
<area href="#" title="WI" shape="poly" coords="592,211, 592,207, 591,203, 590,197, 589,194, 590,191, 591,188, 592,186, 592,183, 591,179, 592,178, 593,175, 594,173, 593,171, 593,169, 594,166, 597,160, 599,154, 599,151, 599,151, 598,151, 594,157, 592,161, 590,163, 589,165, 588,166, 587,168, 585,167, 585,166, 586,163, 588,159, 590,157, 591,155, 589,154, 588,153, 587,143, 583,142, 582,139, 570,137, 567,136, 559,133, 551,132, 547,127, 547,128, 546,128, 545,127, 542,126, 541,126, 539,127, 539,127, 539,125, 541,122, 542,121, 540,119, 538,120, 535,122, 528,125, 525,126, 523,125, 522,125, 520,127, 519,130, 519,138, 518,140, 513,143, 511,149, 511,149, 514,151, 515,154, 513,158, 513,161, 513,168, 516,171, 519,171, 521,174, 524,174, 528,180, 535,184, 537,186, 538,193, 539,197, 541,198, 541,200, 539,203, 539,206, 542,210, 544,211, 547,211, 548,214, 557,214, 583,212, 592,211" />
<area href="#" title="MO" shape="poly" coords="538,261, 534,257, 533,255, 526,256, 516,256, 492,257, 479,257, 471,258, 469,258, 470,260, 470,262, 472,266, 475,270, 478,273, 481,273, 482,274, 482,277, 480,278, 480,280, 482,284, 484,287, 486,288, 488,300, 487,334, 487,338, 488,345, 510,344, 533,344, 553,343, 564,342, 565,345, 565,348, 562,350, 561,353, 567,354, 572,353, 574,347, 574,341, 577,340, 578,338, 580,337, 580,334, 581,332, 580,330, 577,330, 575,328, 574,324, 574,321, 572,318, 570,314, 566,313, 560,308, 558,304, 558,301, 561,295, 561,292, 559,290, 552,290, 551,289, 552,284, 546,281, 539,274, 537,266, 537,263, 538,261" />
<area href="#" title="AR" shape="poly" coords="572,353, 567,354, 561,353, 562,350, 565,348, 565,345, 564,342, 553,343, 533,344, 510,344, 488,345, 489,352, 489,360, 491,370, 491,407, 493,409, 496,407, 499,408, 499,419, 521,419, 539,418, 550,418, 551,416, 551,412, 549,409, 551,407, 549,405, 550,404, 551,398, 554,395, 553,393, 557,388, 559,387, 559,385, 559,383, 561,378, 564,377, 564,374, 566,373, 567,368, 565,365, 569,362, 570,360, 571,356, 572,353" />
<area href="#" title="OK" shape="poly" coords="362,331, 352,331, 346,330, 346,330, 346,341, 367,342, 397,344, 395,367, 395,384, 395,385, 399,389, 401,390, 402,390, 403,388, 404,390, 406,390, 406,388, 409,390, 408,393, 412,394, 415,395, 419,395, 421,397, 423,395, 427,396, 429,399, 430,399, 430,401, 432,402, 434,400, 436,400, 439,400, 439,403, 444,405, 445,404, 447,400, 448,400, 449,402, 453,403, 457,404, 460,405, 462,404, 462,401, 466,401, 468,402, 471,400, 472,400, 473,402, 477,402, 478,400, 480,400, 482,403, 485,405, 488,405, 491,407, 491,370, 489,360, 489,352, 488,345, 487,338, 487,334, 474,335, 429,334, 386,332, 362,331" />
<area href="#" title="KS" shape="poly" coords="487,334, 474,335, 429,334, 386,332, 363,331, 367,267, 388,268, 427,270, 469,270, 475,270, 478,273, 481,273, 482,274, 482,277, 480,278, 480,280, 482,284, 484,287, 486,288, 488,300, 487,334" />
<area href="#" title="LA" shape="poly" coords="583,476, 582,474, 581,470, 577,467, 578,460, 578,459, 576,459, 568,460, 545,461, 544,459, 545,451, 548,445, 553,437, 552,435, 553,435, 554,432, 552,430, 552,428, 550,424, 550,418, 539,418, 521,419, 499,419, 499,428, 500,438, 501,441, 503,445, 504,450, 508,455, 508,458, 509,459, 508,467, 505,472, 507,474, 506,477, 506,484, 504,487, 505,490, 509,489, 517,488, 527,492, 533,493, 537,492, 540,493, 543,494, 544,492, 541,491, 538,491, 535,489, 541,488, 543,488, 546,488, 547,491, 547,493, 552,493, 554,495, 553,496, 552,497, 553,499, 561,502, 565,501, 566,498, 568,498, 570,496, 571,497, 572,500, 570,501, 570,502, 574,500, 576,497, 577,497, 574,496, 575,495, 575,493, 577,493, 578,492, 579,492, 587,498, 588,499, 591,499, 592,500, 594,497, 594,496, 593,496, 590,493, 584,492, 581,490, 582,488, 584,488, 585,487, 583,486, 583,486, 586,486, 588,483, 587,481, 586,478, 585,478, 583,481, 582,483, 579,482, 578,481, 580,479, 582,477, 583,476" />
</map>
			
			</div>
		);
	}

});

module.exports = Map;