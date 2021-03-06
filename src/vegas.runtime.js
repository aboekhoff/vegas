var RT = {

    'vegas::Symbol'  : Symbol,
    'vegas::Keyword' : Keyword,
    'vegas::Tag'     : Tag,

    'vegas::+' : function(x, y) {
	switch(arguments.length) {
	case 0: return 0
	case 1: return x
	case 2: return x + y
	default:
	    var r = x + y
	    var i = 2;
	    while (i<arguments.length) { r += arguments[i++] }
	    return r
	}
    },

    'vegas::*' : function(x, y) {
	switch(arguments.length) {
	case 0: return 1
	case 1: return x
	case 2: return x * y
	default:
	    var r = x * y
	    var i = 2;
	    while (i<arguments.length) { r *= arguments[i++] }
	    return r
	}
    },

    'vegas::-' : function(x, y) {
	switch(arguments.length) {
	case 0: throw Error('vegas::- requires at least one argument')
	case 1: return -x
	case 2: return x - y
	default:
	    var r = x - y
	    var i = 2;
	    while (i<arguments.length) { r -= arguments[i++] }
	    return r
	}
    },

    'vegas::/' : function(x, y) {
	switch(arguments.length) {
	case 0: throw Error('vegas::/ requires at least one argument')
	case 1: return 1/x
	case 2: return x / y
	default:
	    var r = x/y
	    var i = 2;
	    while (i<arguments.length) { r /= arguments[i++] }
	    return r
	}
    },

    'vegas::<' : function(x, y) {
	switch (arguments.length) {
	    case 0: throw Error('vegas::< requires at least one argument')
	    case 1: return true
	    case 2: return x<y
	    default:
	    var r = x<y
	    var i = 2
	    while (i<arguments.length && r) { x=y; y=arguments[i]; r=x<y }
	    return r	    
	}
    },

    'vegas::>' : function(x, y) {
	switch (arguments.length) {
	    case 0: throw Error('vegas::> requires at least one argument')
	    case 1: return true
	    case 2: return x>y
	    default:
	    var r = x>y
	    var i = 2
	    while (i<arguments.length && r) { x=y; y=arguments[i]; r=x>y }
	    return r	    
	}
    },

    'vegas::<=' : function(x, y) {
	switch (arguments.length) {
	    case 0: throw Error('vegas::<= requires at least one argument')
	    case 1: return true
	    case 2: return x<=y
	    default:
	    var r = x<=y
	    var i = 2
	    while (i<arguments.length && r) { x=y; y=arguments[i]; r=x<=y }
	    return r	    
	}
    },

    'vegas::>=' : function(x, y) {
	switch (arguments.length) {
	    case 0: throw Error('vegas::>= requires at least one argument')
	    case 1: return true
	    case 2: return x>=y
	    default:
	    var r = x>=y
	    var i = 2
	    while (i<arguments.length && r) { x=y; y=arguments[i]; r=x>=y }
	    return r	    
	}
    },

    'vegas::=' : function(x, y) {
	switch (arguments.length) {
	    case 0: throw Error('vegas::< requires at least one argument')
	    case 1: return true
	    case 2: return x===y
	    default:
	    var r = x===y
	    var i = 2
	    while (i<arguments.length && r) { x=y; y=arguments[i]; r=x===y }
	    return r	    
	}
    },

    'vegas::mod' : function(x, y) {
	return x % y
    },

    'vegas::div' : function(x, y) {
	return Math.floor(x/y)
    },

    'vegas::array?' : Array.isArray,

    'vegas::boolean?' : function(x) {
	return typeof x == 'boolean'
    },

    'vegas::number?' : function(x) {
	return typeof x == 'number'
    },

    'vegas::string?' : function(x) {
	return typeof x == 'string'
    },

    'vegas::array' : function() {
	var len = arguments.length
	var arr = new Array(len)
	for (var i=0; i<len; i++) { arr[i] = arguments[i] }
	return arr
    },

    'vegas::array*' : function() {
	var alen = arguments.length
	var b    = arguments[alen-1]
	var blen = b.length
	var arr = new Array(alen+blen-1)
	for (var i=0; i<alen-1; i++) { arr[i]   = arguments[i] }	
	for (var j=0; j<blen; j++)   { arr[i+j] = b[j] }
	return arr
    },

    'vegas::concat' : function() {
	var res = []
	for (var i=0; i<arguments.length; i++) {
	    var xs = arguments[i]
	    if (xs) {
		for (var j=0; j<xs.length; j++) {
		    res.push(xs[j])
		}
	    }
	}
	return res
    },
   
    'vegas::apply' : function(f) {
	var len  = arguments.length
	var more = arguments[len-1]
	var mlen = more.length
	var args = new Array((len-2) + mlen)

	for (var i=0; i<len-2; i++) {
	    args[i] = arguments[i+1]
	}

	for (var j=0; j<mlen; j++) {
	    args[i+j] = more[j]
	}

	return f.apply(null, args)
    }


}
