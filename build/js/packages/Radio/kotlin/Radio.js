(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.js', './kotlin_kotlin.js', './kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js', './kotlin_org_jetbrains_kotlinx_kotlinx_html.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.js'), require('./kotlin_kotlin.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_html.js'));
  else {
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json === 'undefined') {
      throw new Error("Error loading module 'Radio'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json' is loaded prior to 'Radio'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'Radio'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'Radio'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined') {
      throw new Error("Error loading module 'Radio'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' is loaded prior to 'Radio'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_html === 'undefined') {
      throw new Error("Error loading module 'Radio'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_html' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_html' is loaded prior to 'Radio'.");
    }
    root.Radio = factory(typeof Radio === 'undefined' ? {} : Radio, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_html);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_html) {
  //region block: imports
  var imul = Math.imul;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$crossModule$.Default_getInstance;
  var getKClass = kotlin_kotlin.$crossModule$.getKClass;
  var arrayOf = kotlin_kotlin.$crossModule$.arrayOf;
  var createKType = kotlin_kotlin.$crossModule$.createKType;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer_1;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.KSerializer;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var append = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$.append;
  var println = kotlin_kotlin.$crossModule$.println;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PluginGeneratedSerialDescriptor;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ArrayListSerializer;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.UnknownFieldException_init_$Create$;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.typeParametersSerializers;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.GeneratedSerializer;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.throwMissingFieldException;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.StringSerializer_getInstance;
  var _get_nullable__2526391434 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_nullable__2526391434;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var indexOf$default = kotlin_kotlin.$crossModule$.indexOf$default;
  var contains$default = kotlin_kotlin.$crossModule$.contains$default;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var _set_style__1257298356 = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$._set_style__1257298356;
  var _set_onClickFunction__3534137028 = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$._set_onClickFunction__3534137028;
  var _get_classes__2818451371 = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$._get_classes__2818451371;
  var plus = kotlin_kotlin.$crossModule$.plus_1;
  var _set_classes__72476703 = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$._set_classes__72476703;
  var attributesMapOf = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$.attributesMapOf;
  var IMG = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$.IMG;
  var visitTag = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$.visitTag;
  var attributesMapOf_0 = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$.attributesMapOf_1;
  var DIV = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$.DIV;
  var visitTagAndFinalize = kotlin_org_jetbrains_kotlinx_kotlinx_html.$crossModule$.visitTagAndFinalize;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function _get_audio__3100431035() {
    init_properties_Client_kt_2453434543();
    return audio;
  }
  var audio;
  function main() {
    init_properties_Client_kt_2453434543();
    var tmp = window;
    tmp.onload = main$lambda();
  }
  function addStations(rawFeed) {
    init_properties_Client_kt_2453434543();
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_decodeFromString_0 = Default_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_serializer_0_1 = tmp0_decodeFromString_0._get_serializersModule__364239364_60uww4_k$();
        var tmp$ret$0;
        $l$block: {
          var tmp0_cast_0_2 = serializer(tmp1_serializer_0_1, createKType(getKClass(Stations), arrayOf([]), false));
          tmp$ret$0 = isInterface(tmp0_cast_0_2, KSerializer) ? tmp0_cast_0_2 : THROW_CCE();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp0_decodeFromString_0.decodeFromString_ink0ik_k$(tmp$ret$1, rawFeed);
      break $l$block_1;
    }
    var stations = tmp$ret$2;
    var gridHolder = document.getElementById('grid_holder');
    {
      var tmp1_forEach_0 = stations.defaultStations_1;
      var tmp0_iterator_1 = tmp1_forEach_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          var tmp0_safe_receiver_4 = gridHolder;
          if (tmp0_safe_receiver_4 == null)
            null;
          else {
            append(tmp0_safe_receiver_4, addStations$lambda(element_2));
          }
          Unit_getInstance();
        }
      }
    }
  }
  function playStation(station) {
    init_properties_Client_kt_2453434543();
    var tmp0_safe_receiver = station.streamUrl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          println('Play station ' + station.streamUrl_1);
          _get_audio__3100431035().src = tmp0_safe_receiver;
          var tmp = _get_audio__3100431035().play();
          tmp.then(playStation$lambda(station));
          Unit_getInstance();
          var controlsLayout_3 = document.getElementById('controls');
          var tmp0_safe_receiver_4 = controlsLayout_3;
          var tmp_0;
          if (tmp0_safe_receiver_4 == null) {
            tmp_0 = null;
          } else {
            tmp0_safe_receiver_4.setAttribute('style', 'display: block;');
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$0 = tmp_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
    }
    Unit_getInstance();
  }
  function getFeed(url, onFeed) {
    init_properties_Client_kt_2453434543();
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.onload = getFeed$lambda(xmlHttp, onFeed);
    xmlHttp.send();
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Stations', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('defaultStations', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  $serializer.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_arrayOf_0 = [new ArrayListSerializer($serializer_getInstance_0())];
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_arrayOf_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  $serializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_5lsbxj_k$(tmp0_desc, 0, new ArrayListSerializer($serializer_getInstance_0()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_5lsbxj_k$(tmp0_desc, 0, new ArrayListSerializer($serializer_getInstance_0()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return Stations_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Stations_init_$Init$(seen1, defaultStations, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance().descriptor_1);
    $this.defaultStations_1 = defaultStations;
    return $this;
  }
  function Stations_init_$Create$(seen1, defaultStations, serializationConstructorMarker) {
    return Stations_init_$Init$(seen1, defaultStations, serializationConstructorMarker, Object.create(Stations.prototype));
  }
  function Stations(defaultStations) {
    Companion_getInstance();
    this.defaultStations_1 = defaultStations;
  }
  Stations.prototype.toString = function () {
    return 'Stations(defaultStations=' + this.defaultStations_1 + ')';
  };
  Stations.prototype.hashCode = function () {
    return hashCode(this.defaultStations_1);
  };
  Stations.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stations))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Stations ? other : THROW_CCE();
    if (!equals(this.defaultStations_1, tmp0_other_with_cast.defaultStations_1))
      return false;
    return true;
  };
  Stations.$metadata$ = {
    simpleName: 'Stations',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance}
  };
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Station', this, 4);
    tmp0_serialDesc.addElement_ifop3j_k$('title', false);
    tmp0_serialDesc.addElement_ifop3j_k$('website', false);
    tmp0_serialDesc.addElement_ifop3j_k$('streamUrl', false);
    tmp0_serialDesc.addElement_ifop3j_k$('logoUrl', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_0.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_arrayOf_0 = [_get_nullable__2526391434(StringSerializer_getInstance()), _get_nullable__2526391434(StringSerializer_getInstance()), _get_nullable__2526391434(StringSerializer_getInstance()), _get_nullable__2526391434(StringSerializer_getInstance())];
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_arrayOf_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  };
  $serializer_0.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeNullableSerializableElement_ri3t5d_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeNullableSerializableElement_ri3t5d_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeNullableSerializableElement_ri3t5d_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeNullableSerializableElement_ri3t5d_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeNullableSerializableElement_ri3t5d_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeNullableSerializableElement_ri3t5d_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeNullableSerializableElement_ri3t5d_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeNullableSerializableElement_ri3t5d_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_e64gd4_k$(tmp0_desc);
    return Station_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  $serializer_0.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Station_init_$Init$(seen1, title, website, streamUrl, logoUrl, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1)))
      throwMissingFieldException(seen1, 15, $serializer_getInstance_0().descriptor_1);
    $this.title_1 = title;
    $this.website_1 = website;
    $this.streamUrl_1 = streamUrl;
    $this.logoUrl_1 = logoUrl;
    return $this;
  }
  function Station_init_$Create$(seen1, title, website, streamUrl, logoUrl, serializationConstructorMarker) {
    return Station_init_$Init$(seen1, title, website, streamUrl, logoUrl, serializationConstructorMarker, Object.create(Station.prototype));
  }
  function Station() {
  }
  Station.prototype.toString = function () {
    return 'Station(title=' + this.title_1 + ', website=' + this.website_1 + ', streamUrl=' + this.streamUrl_1 + ', logoUrl=' + this.logoUrl_1 + ')';
  };
  Station.prototype.hashCode = function () {
    var result = this.title_1 == null ? 0 : getStringHashCode(this.title_1);
    result = imul(result, 31) + (this.website_1 == null ? 0 : getStringHashCode(this.website_1)) | 0;
    result = imul(result, 31) + (this.streamUrl_1 == null ? 0 : getStringHashCode(this.streamUrl_1)) | 0;
    result = imul(result, 31) + (this.logoUrl_1 == null ? 0 : getStringHashCode(this.logoUrl_1)) | 0;
    return result;
  };
  Station.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Station))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Station ? other : THROW_CCE();
    if (!(this.title_1 == tmp0_other_with_cast.title_1))
      return false;
    if (!(this.website_1 == tmp0_other_with_cast.website_1))
      return false;
    if (!(this.streamUrl_1 == tmp0_other_with_cast.streamUrl_1))
      return false;
    if (!(this.logoUrl_1 == tmp0_other_with_cast.logoUrl_1))
      return false;
    return true;
  };
  Station.$metadata$ = {
    simpleName: 'Station',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance_0}
  };
  function main$lambda$lambda() {
    return function (rawFeed) {
      addStations(rawFeed);
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda_0() {
    return function (rawFeed) {
      addStations(rawFeed);
      return Unit_getInstance();
    };
  }
  function main$lambda() {
    return function (it) {
      println('document.documentURI: ' + document.documentURI);
      var tmp;
      var tmp_0 = document.documentURI;
      if (contains$default(tmp_0, '?', false, 2, null)) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_substring_0 = document.documentURI;
          var tmp_1 = document.documentURI;
          var tmp1_substring_0 = indexOf$default(tmp_1, '?', 0, false, 6, null) + 1 | 0;
          var tmp2_substring_0 = document.documentURI.length;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_substring_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.substring(tmp1_substring_0, tmp2_substring_0);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      } else {
        {
          tmp = '';
        }
      }
      var feedQuery = tmp;
      Unit_getInstance();
      var tmp_2;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = charSequenceLength(feedQuery) === 0;
        break $l$block_1;
      }
      if (tmp$ret$2) {
        tmp_2 = getFeed('https://orllewin.uk/default_stations.json', main$lambda$lambda());
      } else {
        {
          tmp_2 = getFeed(feedQuery, main$lambda$lambda_0());
        }
      }
      return Unit_getInstance();
    };
  }
  function addStations$lambda$lambda$lambda($element_2) {
    return function (it) {
      playStation($element_2);
      return Unit_getInstance();
    };
  }
  function addStations$lambda$lambda$lambda_0($tmp1_safe_receiver_7_10) {
    return function (_this__1828080292) {
      _set_style__1257298356(_this__1828080292, 'width: 100%;height: auto;');
      _this__1828080292._set_src__296277409_u0oimn_k$($tmp1_safe_receiver_7_10);
      return Unit_getInstance();
    };
  }
  function addStations$lambda$lambda($element_2) {
    return function (_this__1828080292) {
      _set_onClickFunction__3534137028(_this__1828080292, addStations$lambda$lambda$lambda($element_2));
      var tmp0_receiver_6_9 = _this__1828080292;
      _set_classes__72476703(tmp0_receiver_6_9, plus(_get_classes__2818451371(tmp0_receiver_6_9), 'station'));
      var tmp1_safe_receiver_7_10 = $element_2.logoUrl_1;
      if (tmp1_safe_receiver_7_10 == null)
        null;
      else {
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              var tmp0_visit_0_2_2_8_11 = new IMG(attributesMapOf(['alt', null, 'src', null, 'class', null]), _this__1828080292._get_consumer__1060829845_hjl9jp_k$());
              tmp$ret$0 = visitTag(tmp0_visit_0_2_2_8_11, addStations$lambda$lambda$lambda_0(tmp1_safe_receiver_7_10));
              break $l$block;
            }
            tmp$ret$1 = tmp$ret$0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function addStations$lambda($element_2) {
    return function ($this$append) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_visitAndFinalize_0_2_6 = new DIV(attributesMapOf_0('class', null), $this$append);
          tmp$ret$0 = visitTagAndFinalize(tmp0_visitAndFinalize_0_2_6, $this$append, addStations$lambda$lambda($element_2));
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function playStation$lambda($station) {
    return function (it) {
      setMetadata($station.title_1, $station.logoUrl_1);
      return Unit_getInstance();
    };
  }
  function getFeed$lambda($xmlHttp, $onFeed) {
    return function (it) {
      var tmp;
      if ($xmlHttp.readyState === XMLHttpRequest.DONE ? $xmlHttp.status === 200 : false) {
        tmp = $onFeed($xmlHttp.responseText);
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Client_kt_281692371;
  function init_properties_Client_kt_2453434543() {
    if (!properties_initialized_Client_kt_281692371) {
      properties_initialized_Client_kt_281692371 = true;
      audio = new Audio();
    }
  }
  //region block: post-declaration
  $serializer.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_0.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=Radio.js.map