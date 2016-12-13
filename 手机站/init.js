seajs.config({
	alias:{
		's':'slider'	
	}	
});
seajs.use('s',function(mod){
	mod.slider('play');
});