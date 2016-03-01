YouTubeParser = {
  videoInfo: '',
  rdata: [],
  fmt_str: {
    0: '240p&nbsp;&nbsp;&nbsp;(FLV, 320 x 240, Mono 22KHz MP3)',
    5: '240p&nbsp;&nbsp;&nbsp;(FLV, 400 x 240, Mono 44KHz MP3)',
    6: '360p&nbsp;&nbsp;&nbsp;(FLV, 480 x 360, Mono 44KHz MP3)',
    34: '360p&nbsp;&nbsp;&nbsp;(FLV, 640 x 360, Stereo 44KHz AAC)',
    35: '480p&nbsp;&nbsp;&nbsp;(FLV, 854 x 480, Stereo 44KHz AAC)',
    13: '144p&nbsp;&nbsp;&nbsp;(3GP, 176 x 144, Stereo 8KHz)',
    17: '144p&nbsp;&nbsp;&nbsp;(3GP, 176 x 144, Stereo 44KHz AAC)',
    36: '240p&nbsp;&nbsp;&nbsp;(3GP, 320 x 240, Stereo 44KHz AAC)',
    18: '360p&nbsp;&nbsp;&nbsp;(MP4(H.264), 640 x 360, Stereo 44KHz AAC)',
    22: '720p&nbsp;&nbsp;&nbsp;(MP4(H.264), 1280 x 720, Stereo 44KHz AAC)',
    37: '1080p&nbsp;&nbsp;&nbsp;(MP4(H.264), 1920 x 1080, Stereo 44KHz AAC)',
    38: '3072p&nbsp;&nbsp;&nbsp;(MP4(H.264), 4096 x 3072, Stereo 44KHz AAC)',
    82: '360p&nbsp;&nbsp;&nbsp;(MP4(H.264), 640 x 360, Stereo 44KHz AAC)',
    83: '240p&nbsp;&nbsp;&nbsp;(MP4(H.264), 854 x 240, Stereo 44KHz AAC)',
    84: '720p&nbsp;&nbsp;&nbsp;(MP4(H.264), 1280 x 720, Stereo 44KHz AAC)',
    85: '1080p&nbsp;&nbsp;&nbsp;(MP4(H.264), 1920 x 1080, Stereo 44KHz AAC)',
    43: '360p&nbsp;&nbsp;&nbsp;(WebM(VP8), 640 x 360, Stereo 44KHz Vorbis)',
    44: '480p&nbsp;&nbsp;&nbsp;(WebM(VP8), 854 x 480, Stereo 44KHz Vorbis)',
    45: '720p&nbsp;&nbsp;&nbsp;(WebM(VP8), 1280 x 720, Stereo 44KHz Vorbis)',
    46: '1080p&nbsp;&nbsp;&nbsp;(WebM(VP8), 1920 x 1080, Stereo 44KHz Vorbis)',
    100: '360p&nbsp;&nbsp;&nbsp;(WebM(VP8), 640 x 360, Stereo 44KHz Vorbis)',
    101: '480p&nbsp;&nbsp;&nbsp;(WebM(VP8), 854 x 480, Stereo 44KHz Vorbis)',
    102: '720p&nbsp;&nbsp;&nbsp;(WebM(VP8), 1280 x 720, Stereo 44KHz Vorbis)',
    133: '240p&nbsp;&nbsp;&nbsp;(MP4(H.264), 426 x 240, <span">video only, no audio</span>)',
    134: '360p&nbsp;&nbsp;&nbsp;(MP4(H.264), 640 x 360, <span">video only, no audio</span>)',
    135: '480p&nbsp;&nbsp;&nbsp;(MP4(H.264), 854 x 480, <span">video only, no audio</span>)',
    136: '720p&nbsp;&nbsp;&nbsp;(MP4(H.264), 1280 x 720, <span">video only, no audio</span>)',
    137: '1080p&nbsp;&nbsp;&nbsp;(MP4(H.264), 1920 x 1080, <span">video only, no audio</span>)',
    138: '3072p&nbsp;&nbsp;&nbsp;(MP4(H.264), 4096 x 3072, <span">video only, no audio</span>)',
    160: '144p&nbsp;&nbsp;&nbsp;(MP4(H.264), 256 x 144, <span">video only, no audio</span>)',
    264: '1440p&nbsp;&nbsp;&nbsp;(MP4(H.264), 2560 x 1440, <span">video only, no audio</span>)',
    266: '2160p&nbsp;&nbsp;&nbsp;(MP4(H.264), 3840 x 2160, <span">video only, no audio</span>)',
    298: '720p HFR&nbsp;&nbsp;&nbsp;(MP4(H.264), 1280 x 720 HFR, <span">video only, no audio</span>)',
    299: '1080p HFR&nbsp;&nbsp;&nbsp;(MP4(H.264), 1920 x 1080 HFR, <span">video only, no audio</span>)',
    242: '240p&nbsp;&nbsp;&nbsp;(WebM(VP9), 426 x 240, <span">video only, no audio</span>)',
    243: '360p&nbsp;&nbsp;&nbsp;(WebM(VP9), 640 x 360, <span">video only, no audio</span>)',
    244: '480p&nbsp;&nbsp;&nbsp;(WebM(VP9), 854 x 480, <span">video only, no audio</span>)',
    247: '720p&nbsp;&nbsp;&nbsp;(WebM(VP9), 1280 x 720, <span">video only, no audio</span>)',
    248: '1080p&nbsp;&nbsp;&nbsp;(WebM(VP9), 1920 x 1080, <span">video only, no audio</span>)',
    271: '1440p&nbsp;&nbsp;&nbsp;(WebM(VP9), 2560 x 1440, <span">video only, no audio</span>)',
    272: '2160p&nbsp;&nbsp;&nbsp;(WebM(VP9), 3840 x 2160, <span">video only, no audio</span>)',
    278: '144p&nbsp;&nbsp;&nbsp;(WebM(VP9), 256 x 144, <span">video only, no audio</span>)',
    302: '720p HFR&nbsp;&nbsp;&nbsp;(WebM(VP9), 1280 x 720 HFR, <span">video only, no audio</span>)',
    303: '1080p HFR&nbsp;&nbsp;&nbsp;(WebM(VP9), 1920 x 1080 HFR, <span">video only, no audio</span>)',
    308: '1440p HFR&nbsp;&nbsp;&nbsp;(WebM(VP9), 2560 x 1440 HFR, <span">video only, no audio</span>)',
    313: '2160&nbsp;&nbsp;&nbsp;(WebM(VP9), 3840 x 2160, <span">video only, no audio</span>)',
    315: '2160p HFR&nbsp;&nbsp;&nbsp;(WebM(VP9), 3840 x 2160 HFR, <span">video only, no audio</span>)',
    139: '(M4A(AAC), 48 kbit/s <span">audio only</span>)',
    140: '(M4A(AAC), 128 kbit/s <span">audio only</span>)',
    141: '(M4A(AAC), 256 kbit/s <span">audio only</span>)',
    171: '(WebM(Vorbis), 128 kbit/s <span">audio only</span>)',
    172: '(WebM(Vorbis), 192 kbit/s <span">audio only</span>)'
  },

  buildVideoUrlHTMLTag: function(item, title, method) {
    var link = this.fmt_str[item.fmt];
    link = link.split(',');
    var format = link[0].replace('(', '');
    link.shift();
    var dl = unescape(item.fmt_url);

    if(item.fmt_sig)
      dl += ('&signature=' + item.fmt_sig );
    dl += '&title=' + escape(title.replace('"', ''));

    return '<a href="' + dl + '"' + ' download="' + dl + '" ">' +
      '<div class="dl"><i class="fa fa-download" /> ' + method + '&nbsp;&nbsp;&nbsp;' + format + '</div>' +
      ((link.length) ? ('<div class="desc">(' + link.join(',') + '</div>') : '') + '</a>';
  },

  parseInfo: function(infostr) {
    var item, j, len, result, tmp, tmp2;
    result = {};
    tmp = infostr.split('&');
    for (j = 0, len = tmp.length; j < len; j++) {
      item = tmp[j];
      tmp2 = item.split('=');
      result[tmp2[0]] = unescape(tmp2[1]);
    }
    return result;
  },

  getYouTubeUrl: function(videoInfo) {
    this.videoInfo = videoInfo;

    var div_dl, dllinks, dllinksAdaptive, dllinksAlter, item, j, k, l, len, len1, len2, rdataArray, rdata_reason, rdata_status, result, succ, title, url_adaptive, url_alter, url_classic, webmlinks;
    succ = 0;
    dllinks = '';
    webmlinks = '';
    dllinksAdaptive = '';
    dllinksAlter = '';
    rdataArray = this.parseInfo(this.videoInfo);
    this.rdata = rdataArray;
    url_classic = this.parseUrlsClassic(rdataArray);
    url_adaptive = this.parseUrlsAdaptive(rdataArray);
    url_alter = this.parseUrlsAlter(rdataArray, url_classic, url_adaptive);
    title = this.parseTitle(rdataArray);
    var downloadTxt = chrome.i18n.getMessage("download");

    for (j = 0, len = url_classic.length; j < len; j++) {
      item = url_classic[j];
      if ([43, 44, 45, 46, 100, 101, 102].indexOf(parseInt(item.fmt, 10)) > -1) {
        /*if (webmlinks.length > 0) {
          webmlinks += '<br />';
        }
        webmlinks += this.buildVideoUrlHTMLTag(item, title, 'Watch online');*/
      } else {
        var vlink = this.buildVideoUrlHTMLTag(item, title, downloadTxt);

        if ([18, 22, 37, 38, 82, 83, 84, 85].indexOf(parseInt(item.fmt, 10)) > -1) {
          if (dllinks.length > 0) {
            dllinks += '<hr />';
          }
          dllinks += vlink;
          continue;
        }
        if (dllinksAdaptive.length > 0) {
          //dllinksAdaptive += '<br />';
        }
        dllinksAdaptive += vlink;
      }
    }

    /*if (webmlinks.length > 0) {
      if (dllinks.length > 0) {
        dllinks += '<br />';
      }
      dllinks += webmlinks;
    }*/

    /*if (url_alter.length > 0) {
      for (k = 0, len1 = url_alter.length; k < len1; k++) {
        item = url_alter[k];
        dllinksAlter += this.buildVideoUrlHTMLTag(item, title, downloadTxt);
      }
    }*/
    /*if (dllinksAlter.length > 0) {
      dllinks += '<br /><br /><span font-weight:bold;">sadly 1080p\'s dead again...</span><br /><del>1080p & some other formats redirect download are back online and <spanfont-weight:bold;">testing</span>:<br />';
      dllinks += dllinksAlter + '</del>';
    }*/
    for (l = 0, len2 = url_adaptive.length; l < len2; l++) {
      item = url_adaptive[l];
      if (dllinksAdaptive.length > 0) {
        //dllinksAdaptive += '<br />';
      }

      var vlink = this.buildVideoUrlHTMLTag(item, title, downloadTxt);

      if ([140, 141].indexOf(parseInt(item.fmt, 10)) > -1){
        if (dllinks.length > 0) {
          dllinks += '<hr />';
        }
        dllinks += vlink;
        continue;
      }
      dllinksAdaptive += vlink;
    }

    if (dllinksAdaptive.length > 0) {
      if (dllinks.length > 0) {
        dllinks += '<hr /><div class="small">';
      }
      dllinks += dllinksAdaptive;
      dllinks += '</div>';
    }

    if (dllinks.length > 0) {
      $('#downloadInfo').addClass('wide');
      $('#downloadInfo').html(dllinks);
    } else {
      videoNotFound();
    }
  },

  parseUrlsClassic: function(rdataArray) {
    var data, dataset, item, items, j, len, temp_type;
    items = [];
    if (typeof rdataArray.url_encoded_fmt_stream_map !== "undefined") {
      dataset = rdataArray.url_encoded_fmt_stream_map.split(',');
      for (j = 0, len = dataset.length; j < len; j++) {
        data = dataset[j];
        data = this.parseInfo(data);
        item = {};
        temp_type = '';
        item.fmt = parseInt(data.itag, 10);
        item.fmt_url = data.url;
        if (typeof data.sig !== "undefined") {
          item.fmt_sig = data.sig;
        } else if (typeof data.signature !== "undefined") {
          item.fmt_sig = data.signature;
        } else if (typeof data.s !== "undefined") {
          item.fmt_sig = this.SigHandlerAlternative(data.s);
        } else {
          item.fmt_sig = false;
        }
        if (typeof data.type !== "undefined") {
          temp_type = '(' + unescape(data.type) + ')';
        }
        if (typeof this.fmt_str[item.fmt] === 'undefined') {
          this.fmt_str[item.fmt] = temp_type;
        }
        items.push(item);
      }
    }
    return items;
  },

  parseUrlsAdaptive: function(rdataArray) {
    var data, dataset, item, items, j, len, temp_type;
    items = [];
    if (typeof rdataArray.adaptive_fmts !== "undefined") {
      dataset = rdataArray.adaptive_fmts.split(',');
      for (j = 0, len = dataset.length; j < len; j++) {
        data = dataset[j];
        data = this.parseInfo(data);
        item = {};
        temp_type = '';
        item.fmt = parseInt(data.itag, 10);
        item.fmt_url = data.url;
        if (typeof data.sig !== "undefined") {
          item.fmt_sig = data.sig;
        } else if (typeof data.signature !== "undefined") {
          item.fmt_sig = data.signature;
        } else if (typeof data.s !== "undefined") {
          item.fmt_sig = this.SigHandlerAlternative(data.s);
        }
        if (typeof data.type !== "undefined") {
          temp_type = '(' + unescape(data.type) + ')';
        }
        if (typeof this.fmt_str[item.fmt] === 'undefined') {
          this.fmt_str[item.fmt] = temp_type;
        }
        items.push(item);
      }
    }
    return items;
  },

  parseUrlsAlter: function(rdataArray, url_classic, url_adaptive) {
    var base_url, dataset, fmt_adaptive, fmt_classic, i, item35, item37, item38, items, j, k, l, len, len1, len2, len3, len4, m, n, qs, qstemp, temp, tempurl, tmp;
    items = [];
    item35 = {};
    item37 = {};
    item38 = {};
    qstemp = [];
    qs = '';
    base_url = '';
    if (typeof rdataArray.dashmpd !== "undefined") {
      dataset = rdataArray.dashmpd.replace('http://www.youtube.com/api/manifest/dash/', '').split('/');
      for (i = j = 0, len = dataset.length; j < len; i = ++j) {
        temp = dataset[i];
        if (temp === 'sig') {
          dataset[i] = 'signature';
        }
        if (temp === 's') {
          dataset[i] = 'signature';
          dataset[i + 1] = this.SigHandlerAlternative(dataset[i + 1]);
        }
      }
      for (i = k = 0, len1 = dataset.length; k < len1; i = k += 2) {
        temp = dataset[i];
        qstemp.push(temp + '=' + dataset[i + 1]);
      }
      qs = qstemp.join('&');
      if (qs.toLowerCase().indexOf('ratebypass') === -1) {
        qs = qs + '&ratebypass=yes';
      }
      for (i = l = 0, len2 = url_classic.length; l < len2; i = ++l) {
        tempurl = url_classic[i];
        tempurl = unescape(url_classic[i].fmt_url).split('?');
        if (tempurl[0] !== '' && (tempurl[0] != null) && typeof tempurl[0] !== "undefined" && tempurl[0].length > 0) {
          base_url = tempurl[0];
          break;
        }
      }
      fmt_classic = [];
      for (m = 0, len3 = url_classic.length; m < len3; m++) {
        tmp = url_classic[m];
        fmt_classic[tmp.fmt] = true;
      }
      fmt_adaptive = [];
      for (n = 0, len4 = url_adaptive.length; n < len4; n++) {
        tmp = url_adaptive[n];
        fmt_adaptive[tmp.fmt] = true;
      }
      if (fmt_adaptive[135] && fmt_classic[35] === void 0) {
        item35.fmt = 35;
        item35.fmt_url = base_url + '?' + qs + '&itag=35';
        items.push(item35);
      }
      if ((fmt_adaptive[137] || fmt_adaptive[264]) && fmt_classic[37] === void 0) {
        item37.fmt = 37;
        item37.fmt_url = base_url + '?' + qs + '&itag=37';
        items.push(item37);
      }
      if (fmt_adaptive[138] && fmt_classic[38] === void 0) {
        item38.fmt = 38;
        item38.fmt_url = base_url + '?' + qs + '&itag=38';
        items.push(item38);
      }
      return items;
    }
    return [];
  },

  parseTitle: function(rdataArray) {
    if (typeof rdataArray.title !== "undefined") {
      return rdataArray.title.replace(/%22/g, '');
    }
    return '';
  },

  urldecode: function(str) {
    return decodeURIComponent(str.replace(/\+/g, '%20'));
  },

  swap: function(sArray, location) {
    var ref;
    location = location % sArray.length;
    ref = [sArray[location], sArray[0]], sArray[0] = ref[0], sArray[location] = ref[1];
    return sArray;
  },

  SigHandlerAlternative: function(s) {
    var code, j, len, sArray, scode;
    sArray = s.split("");
    scode = [4, 3, 0, 50, 0, -1, 20, -1];
    for (j = 0, len = scode.length; j < len; j++) {
      code = scode[j];
      if (code > 0) {
        sArray = this.swap(sArray, code);
      } else if (code === 0) {
        sArray = sArray.reverse();
      } else {
        sArray = sArray.slice(-code);
      }
    }
    return sArray.join("");
  }
};

function videoNotFound() {
  var videoNotFound = chrome.i18n.getMessage("videoNotFound");
  $('#downloadInfo').html(videoNotFound).addClass('errormsg');
}

function getQueryVariable(variable, query) {
  if(!query)
    return undefined;

  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return undefined;
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.getSelected(null, function(tab) {
    var tablink = tab.url;
    //1. get video id
    //https://www.youtube.com/watch?v=hzbp4QgBgho
    var video_id = getQueryVariable('v', tablink.split('?')[1]);

    //2. using AJAX get video info via id
    //http://www.youtube.com/get_video_info?eurl=http%3A%2F%2Fkej.tw%2F&sts=16849&video_id=hzbp4QgBgho
    if (!video_id) {
      videoNotFound();
      return;
    }

    $.get('http://www.youtube.com/get_video_info?eurl=http%3A%2F%2Fkej.tw%2F&sts=16849&video_id=' + video_id, function(data) {
      //3. Parse link for download
      YouTubeParser.getYouTubeUrl(data);
    });
  });
});