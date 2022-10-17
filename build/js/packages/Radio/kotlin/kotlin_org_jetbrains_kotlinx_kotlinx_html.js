(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_html'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_html'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_html = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_html === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_html, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var getProgressionLastElement = kotlin_kotlin.$crossModule$.getProgressionLastElement;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var setOf = kotlin_kotlin.$crossModule$.setOf;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var Map = kotlin_kotlin.$crossModule$.Map;
  var Entry = kotlin_kotlin.$crossModule$.Entry;
  var emptyMap = kotlin_kotlin.$crossModule$.emptyMap;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default;
  var Set = kotlin_kotlin.$crossModule$.Set;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var emptySet = kotlin_kotlin.$crossModule$.emptySet;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var Regex_init_$Create$ = kotlin_kotlin.$crossModule$.Regex_init_$Create$;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var toSet = kotlin_kotlin.$crossModule$.toSet;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_2;
  var MutableMap = kotlin_kotlin.$crossModule$.MutableMap;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var mapCapacity = kotlin_kotlin.$crossModule$.mapCapacity;
  var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$;
  var last = kotlin_kotlin.$crossModule$.last;
  var _get_lastIndex__339712501 = kotlin_kotlin.$crossModule$._get_lastIndex__339712501_1;
  //endregion
  'use strict';
  //region block: pre-declaration
  function onTagError(tag, exception) {
    throw exception;
  }
  StringAttribute.prototype = Object.create(Attribute.prototype);
  StringAttribute.prototype.constructor = StringAttribute;
  StringSetAttribute.prototype = Object.create(Attribute.prototype);
  StringSetAttribute.prototype.constructor = StringSetAttribute;
  BooleanAttribute.prototype = Object.create(Attribute.prototype);
  BooleanAttribute.prototype.constructor = BooleanAttribute;
  TickerAttribute.prototype = Object.create(Attribute.prototype);
  TickerAttribute.prototype.constructor = TickerAttribute;
  EnumAttribute.prototype = Object.create(Attribute.prototype);
  EnumAttribute.prototype.constructor = EnumAttribute;
  function empty(attributeName, tag) {
    throw IllegalStateException_init_$Create$('Attribute ' + attributeName + ' is not yet defined for tag ' + tag._get_tagName__1345925740_m9buy4_k$());
  }
  ButtonFormEncType.prototype = Object.create(Enum.prototype);
  ButtonFormEncType.prototype.constructor = ButtonFormEncType;
  ButtonFormMethod.prototype = Object.create(Enum.prototype);
  ButtonFormMethod.prototype.constructor = ButtonFormMethod;
  ButtonType.prototype = Object.create(Enum.prototype);
  ButtonType.prototype.constructor = ButtonType;
  CommandType.prototype = Object.create(Enum.prototype);
  CommandType.prototype.constructor = CommandType;
  Dir.prototype = Object.create(Enum.prototype);
  Dir.prototype.constructor = Dir;
  Draggable.prototype = Object.create(Enum.prototype);
  Draggable.prototype.constructor = Draggable;
  FormEncType.prototype = Object.create(Enum.prototype);
  FormEncType.prototype.constructor = FormEncType;
  FormMethod.prototype = Object.create(Enum.prototype);
  FormMethod.prototype.constructor = FormMethod;
  IframeSandbox.prototype = Object.create(Enum.prototype);
  IframeSandbox.prototype.constructor = IframeSandbox;
  InputFormEncType.prototype = Object.create(Enum.prototype);
  InputFormEncType.prototype.constructor = InputFormEncType;
  InputFormMethod.prototype = Object.create(Enum.prototype);
  InputFormMethod.prototype.constructor = InputFormMethod;
  InputType.prototype = Object.create(Enum.prototype);
  InputType.prototype.constructor = InputType;
  KeyGenKeyType.prototype = Object.create(Enum.prototype);
  KeyGenKeyType.prototype.constructor = KeyGenKeyType;
  RunAt.prototype = Object.create(Enum.prototype);
  RunAt.prototype.constructor = RunAt;
  TextAreaWrap.prototype = Object.create(Enum.prototype);
  TextAreaWrap.prototype.constructor = TextAreaWrap;
  ThScope.prototype = Object.create(Enum.prototype);
  ThScope.prototype.constructor = ThScope;
  AreaShape.prototype = Object.create(Enum.prototype);
  AreaShape.prototype.constructor = AreaShape;
  DIV.prototype = Object.create(HTMLTag.prototype);
  DIV.prototype.constructor = DIV;
  IMG.prototype = Object.create(HTMLTag.prototype);
  IMG.prototype.constructor = IMG;
  //endregion
  function _get_emptyMap__61640924() {
    init_properties_api_kt_2184348218();
    return emptyMap_0;
  }
  var emptyMap_0;
  function AttributeEnum() {
  }
  AttributeEnum.$metadata$ = {
    simpleName: 'AttributeEnum',
    kind: 'interface',
    interfaces: []
  };
  function Tag() {
  }
  Tag.$metadata$ = {
    simpleName: 'Tag',
    kind: 'interface',
    interfaces: []
  };
  function TagConsumer() {
  }
  TagConsumer.$metadata$ = {
    simpleName: 'TagConsumer',
    kind: 'interface',
    interfaces: []
  };
  function attributesMapOf(key, value) {
    init_properties_api_kt_2184348218();
    var tmp0_subject = value;
    return tmp0_subject == null ? _get_emptyMap__61640924() : singletonMapOf(key, value);
  }
  function attributesMapOf_0(pairs) {
    init_properties_api_kt_2184348218();
    var result = null;
    var nestedLast = pairs.length - 1 | 0;
    var inductionVariable = 0;
    var last = getProgressionLastElement(0, nestedLast, 2);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 2 | 0;
        var k = pairs[i];
        var v = pairs[i + 1 | 0];
        if (!(k == null) ? !(v == null) : false) {
          if (result == null) {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = LinkedHashMap_init_$Create$();
              break $l$block;
            }
            result = tmp$ret$0;
          }
          result.put_3mhbri_k$(k, v);
          Unit_getInstance();
        }
      }
       while (!(i === last));
    var tmp1_elvis_lhs = result;
    return tmp1_elvis_lhs == null ? _get_emptyMap__61640924() : tmp1_elvis_lhs;
  }
  function singletonMapOf(key, value) {
    init_properties_api_kt_2184348218();
    return new SingletonStringMap(key, value);
  }
  function SingletonStringMap(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  SingletonStringMap.prototype._get_key__857139730_e6bh8y_k$ = function () {
    return this.key_1;
  };
  SingletonStringMap.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  SingletonStringMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    return setOf(this);
  };
  SingletonStringMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    return setOf(this.key_1);
  };
  SingletonStringMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return 1;
  };
  SingletonStringMap.prototype.containsKey_mw51tt_k$ = function (key) {
    return key === this.key_1;
  };
  SingletonStringMap.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    else {
    }
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  SingletonStringMap.prototype.get_4u8u51_k$ = function (key) {
    return key === this.key_1 ? this.value_1 : null;
  };
  SingletonStringMap.prototype.get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  SingletonStringMap.prototype.isEmpty_y1axqb_k$ = function () {
    return false;
  };
  SingletonStringMap.prototype.toString = function () {
    return 'SingletonStringMap(key=' + this.key_1 + ', value=' + this.value_1 + ')';
  };
  SingletonStringMap.prototype.hashCode = function () {
    return imul(getStringHashCode(this.key_1), 31) + getStringHashCode(this.value_1) | 0;
  };
  SingletonStringMap.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SingletonStringMap))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SingletonStringMap ? other : THROW_CCE();
    if (!(this.key_1 === tmp0_other_with_cast.key_1))
      return false;
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  SingletonStringMap.$metadata$ = {
    simpleName: 'SingletonStringMap',
    kind: 'class',
    interfaces: [Map, Entry]
  };
  var properties_initialized_api_kt_2143042710;
  function init_properties_api_kt_2184348218() {
    if (!properties_initialized_api_kt_2143042710) {
      properties_initialized_api_kt_2143042710 = true;
      emptyMap_0 = emptyMap();
    }
  }
  function Attribute(encoder) {
    this.encoder_1 = encoder;
  }
  Attribute.prototype.get_kdqgs6_k$ = function (thisRef, attributeName) {
    var tmp0_safe_receiver = thisRef._get_attributes__2098778644_ypk3ys_k$().get_1mhr4y_k$(attributeName);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = this.encoder_1.decode_w6qcwk_k$(attributeName, tmp0_safe_receiver);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.encoder_1.empty_mnkn29_k$(attributeName, thisRef) : tmp1_elvis_lhs;
  };
  Attribute.prototype.set_r65rse_k$ = function (thisRef, attributeName, value) {
    thisRef._get_attributes__2098778644_ypk3ys_k$().put_3mhbri_k$(attributeName, this.encoder_1.encode_y2bd9m_k$(attributeName, value));
    Unit_getInstance();
  };
  Attribute.$metadata$ = {
    simpleName: 'Attribute',
    kind: 'class',
    interfaces: []
  };
  function StringAttribute() {
    Attribute.call(this, StringEncoder_getInstance());
  }
  StringAttribute.$metadata$ = {
    simpleName: 'StringAttribute',
    kind: 'class',
    interfaces: []
  };
  function StringSetAttribute() {
    Attribute.call(this, StringSetEncoder_getInstance());
  }
  StringSetAttribute.$metadata$ = {
    simpleName: 'StringSetAttribute',
    kind: 'class',
    interfaces: []
  };
  function BooleanAttribute_init_$Init$(trueValue, falseValue, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      trueValue = 'true';
    if (!(($mask0 & 2) === 0))
      falseValue = 'false';
    BooleanAttribute.call($this, trueValue, falseValue);
    return $this;
  }
  function BooleanAttribute_init_$Create$(trueValue, falseValue, $mask0, $marker) {
    return BooleanAttribute_init_$Init$(trueValue, falseValue, $mask0, $marker, Object.create(BooleanAttribute.prototype));
  }
  function BooleanAttribute(trueValue, falseValue) {
    Attribute.call(this, new BooleanEncoder(trueValue, falseValue));
  }
  BooleanAttribute.$metadata$ = {
    simpleName: 'BooleanAttribute',
    kind: 'class',
    interfaces: []
  };
  function TickerAttribute() {
    Attribute.call(this, TickerEncoder_getInstance());
  }
  TickerAttribute.prototype.set_yc3875_k$ = function (thisRef, attributeName, value) {
    if (value) {
      thisRef._get_attributes__2098778644_ypk3ys_k$().put_3mhbri_k$(attributeName, attributeName);
      Unit_getInstance();
    } else {
      thisRef._get_attributes__2098778644_ypk3ys_k$().remove_8hbkc0_k$(attributeName);
      Unit_getInstance();
    }
  };
  TickerAttribute.prototype.set_r65rse_k$ = function (thisRef, attributeName, value) {
    return this.set_yc3875_k$(thisRef, attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  TickerAttribute.$metadata$ = {
    simpleName: 'TickerAttribute',
    kind: 'class',
    interfaces: []
  };
  function EnumAttribute(values) {
    Attribute.call(this, new EnumEncoder(values));
    this.values_1 = values;
  }
  EnumAttribute.$metadata$ = {
    simpleName: 'EnumAttribute',
    kind: 'class',
    interfaces: []
  };
  function AttributeEncoder() {
  }
  AttributeEncoder.$metadata$ = {
    simpleName: 'AttributeEncoder',
    kind: 'interface',
    interfaces: []
  };
  function StringEncoder() {
    StringEncoder_instance = this;
  }
  StringEncoder.prototype.encode_ewfsk4_k$ = function (attributeName, value) {
    return value;
  };
  StringEncoder.prototype.encode_y2bd9m_k$ = function (attributeName, value) {
    return this.encode_ewfsk4_k$(attributeName, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringEncoder.prototype.decode_w6qcwk_k$ = function (attributeName, value) {
    return value;
  };
  StringEncoder.$metadata$ = {
    simpleName: 'StringEncoder',
    kind: 'object',
    interfaces: [AttributeEncoder]
  };
  var StringEncoder_instance;
  function StringEncoder_getInstance() {
    if (StringEncoder_instance == null)
      new StringEncoder();
    return StringEncoder_instance;
  }
  function StringSetEncoder() {
    StringSetEncoder_instance = this;
  }
  StringSetEncoder.prototype.encode_5c7nxm_k$ = function (attributeName, value) {
    return joinToString$default(value, ' ', null, null, 0, null, null, 62, null);
  };
  StringSetEncoder.prototype.encode_y2bd9m_k$ = function (attributeName, value) {
    return this.encode_5c7nxm_k$(attributeName, (!(value == null) ? isInterface(value, Set) : false) ? value : THROW_CCE());
  };
  StringSetEncoder.prototype.decode_w6qcwk_k$ = function (attributeName, value) {
    return ensureNotNull(stringSetDecode(value));
  };
  StringSetEncoder.prototype.empty_mnkn29_k$ = function (attributeName, tag) {
    return emptySet();
  };
  StringSetEncoder.$metadata$ = {
    simpleName: 'StringSetEncoder',
    kind: 'object',
    interfaces: [AttributeEncoder]
  };
  var StringSetEncoder_instance;
  function StringSetEncoder_getInstance() {
    if (StringSetEncoder_instance == null)
      new StringSetEncoder();
    return StringSetEncoder_instance;
  }
  function BooleanEncoder(trueValue, falseValue) {
    this.trueValue_1 = trueValue;
    this.falseValue_1 = falseValue;
  }
  BooleanEncoder.prototype.encode_33b5x7_k$ = function (attributeName, value) {
    return value ? this.trueValue_1 : this.falseValue_1;
  };
  BooleanEncoder.prototype.encode_y2bd9m_k$ = function (attributeName, value) {
    return this.encode_33b5x7_k$(attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanEncoder.prototype.decode_w6qcwk_k$ = function (attributeName, value) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject === this.trueValue_1) {
      tmp = true;
    } else if (tmp0_subject === this.falseValue_1) {
      tmp = false;
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown value ' + value + ' for ' + attributeName);
    }
    return tmp;
  };
  BooleanEncoder.$metadata$ = {
    simpleName: 'BooleanEncoder',
    kind: 'class',
    interfaces: [AttributeEncoder]
  };
  function TickerEncoder() {
    TickerEncoder_instance = this;
  }
  TickerEncoder.prototype.encode_33b5x7_k$ = function (attributeName, value) {
    return tickerEncode(value, attributeName);
  };
  TickerEncoder.prototype.encode_y2bd9m_k$ = function (attributeName, value) {
    return this.encode_33b5x7_k$(attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  TickerEncoder.prototype.decode_w6qcwk_k$ = function (attributeName, value) {
    return value === attributeName;
  };
  TickerEncoder.$metadata$ = {
    simpleName: 'TickerEncoder',
    kind: 'object',
    interfaces: [AttributeEncoder]
  };
  var TickerEncoder_instance;
  function TickerEncoder_getInstance() {
    if (TickerEncoder_instance == null)
      new TickerEncoder();
    return TickerEncoder_instance;
  }
  function EnumEncoder(valuesMap) {
    this.valuesMap_1 = valuesMap;
  }
  EnumEncoder.prototype.encode_y2bd9m_k$ = function (attributeName, value) {
    return value._get_realValue__1065264702_hm8bi6_k$();
  };
  EnumEncoder.prototype.decode_w6qcwk_k$ = function (attributeName, value) {
    var tmp0_elvis_lhs = this.valuesMap_1.get_1mhr4y_k$(value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Unknown value ' + value + ' for ' + attributeName);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  EnumEncoder.$metadata$ = {
    simpleName: 'EnumEncoder',
    kind: 'class',
    interfaces: [AttributeEncoder]
  };
  function stringSetDecode(value) {
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = Regex_init_$Create$('\\s+');
          break $l$block;
        }
        var tmp0_split_0 = tmp$ret$0;
        tmp$ret$1 = tmp0_split_0.split_8rwwda_k$(tmp0_safe_receiver, 0);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$5;
      $l$block_4: {
        var tmp$ret$4;
        $l$block_3: {
          var tmp0_filterNotTo_0_1 = ArrayList_init_$Create$();
          var tmp0_iterator_1_2 = tmp1_safe_receiver.iterator_jk1svi_k$();
          while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
            var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
            var tmp$ret$3;
            $l$block_2: {
              var tmp$ret$2;
              $l$block_1: {
                tmp$ret$2 = charSequenceLength(element_2_3) === 0;
                break $l$block_1;
              }
              tmp$ret$3 = tmp$ret$2;
              break $l$block_2;
            }
            if (!tmp$ret$3) {
              tmp0_filterNotTo_0_1.add_1j60pz_k$(element_2_3);
              Unit_getInstance();
            } else {
            }
          }
          tmp$ret$4 = tmp0_filterNotTo_0_1;
          break $l$block_3;
        }
        tmp$ret$5 = tmp$ret$4;
        break $l$block_4;
      }
      tmp_0 = tmp$ret$5;
    }
    var tmp2_safe_receiver = tmp_0;
    return tmp2_safe_receiver == null ? null : toSet(tmp2_safe_receiver);
  }
  function tickerEncode(_this__1828080292, attributeName) {
    return _this__1828080292 ? attributeName : '';
  }
  function switchToMutable($this) {
    var tmp;
    if ($this.backingMutable_1) {
      tmp = $this.backing_1;
    } else {
      $this.backingMutable_1 = true;
      $this.backing_1 = LinkedHashMap_init_$Create$_0($this.backing_1);
      tmp = $this.backing_1;
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, MutableMap) ? tmp_0 : THROW_CCE();
  }
  function DelegatingMap(initialValues, tag, consumer) {
    this.tag_1 = tag;
    this.consumer_1 = consumer;
    this.backing_1 = initialValues;
    this.backingMutable_1 = false;
  }
  DelegatingMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.backing_1._get_size__809037418_ddoh9m_k$();
  };
  DelegatingMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this.backing_1.isEmpty_y1axqb_k$();
  };
  DelegatingMap.prototype.containsKey_mw51tt_k$ = function (key) {
    return this.backing_1.containsKey_wgk31w_k$(key);
  };
  DelegatingMap.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    else {
    }
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype.get_4u8u51_k$ = function (key) {
    return this.backing_1.get_1mhr4y_k$(key);
  };
  DelegatingMap.prototype.get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype.put_6z04z7_k$ = function (key, value) {
    var mutable = switchToMutable(this);
    var old = mutable.put_3mhbri_k$(key, value);
    if (!(old === value)) {
      this.consumer_1().onTagAttributeChange_agii2c_k$(this.tag_1, key, value);
    }
    return old;
  };
  DelegatingMap.prototype.put_3mhbri_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_6z04z7_k$(tmp, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  DelegatingMap.prototype.remove_kj1003_k$ = function (key) {
    var mutable = switchToMutable(this);
    var tmp0_safe_receiver = mutable.remove_8hbkc0_k$(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          this.consumer_1().onTagAttributeChange_agii2c_k$(this.tag_1, key, null);
          tmp$ret$0 = tmp0_safe_receiver;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  DelegatingMap.prototype.remove_8hbkc0_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.remove_kj1003_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype._get_immutableEntries__1785007069_tiqw9p_k$ = function () {
    return this.backing_1._get_entries__31877249_iz8n5_k$();
  };
  DelegatingMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    return switchToMutable(this)._get_keys__801529559_d97k5z_k$();
  };
  DelegatingMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    return switchToMutable(this)._get_entries__31877249_iz8n5_k$();
  };
  DelegatingMap.$metadata$ = {
    simpleName: 'DelegatingMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function onFinalize(_this__1828080292, block) {
    return new FinalizeConsumer(_this__1828080292, onFinalize$lambda(block));
  }
  function FinalizeConsumer(downstream, block) {
    this.downstream_1 = downstream;
    this.block_1 = block;
    this.level_1 = 0;
  }
  FinalizeConsumer.prototype.onTagStart_jhb705_k$ = function (tag) {
    this.downstream_1.onTagStart_jhb705_k$(tag);
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 + 1 | 0;
    Unit_getInstance();
  };
  FinalizeConsumer.prototype.onTagEnd_f3ehek_k$ = function (tag) {
    this.downstream_1.onTagEnd_f3ehek_k$(tag);
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 - 1 | 0;
    Unit_getInstance();
  };
  FinalizeConsumer.prototype.onTagAttributeChange_agii2c_k$ = function (tag, attribute, value) {
    return this.downstream_1.onTagAttributeChange_agii2c_k$(tag, attribute, value);
  };
  FinalizeConsumer.prototype.onTagEvent_ll97zc_k$ = function (tag, event, value) {
    return this.downstream_1.onTagEvent_ll97zc_k$(tag, event, value);
  };
  FinalizeConsumer.prototype.onTagError_d07vof_k$ = function (tag, exception) {
    return this.downstream_1.onTagError_d07vof_k$(tag, exception);
  };
  FinalizeConsumer.prototype.finalize_b9lof6_k$ = function () {
    return this.block_1(this.downstream_1.finalize_b9lof6_k$(), this.level_1 > 0);
  };
  FinalizeConsumer.$metadata$ = {
    simpleName: 'FinalizeConsumer',
    kind: 'class',
    interfaces: [TagConsumer]
  };
  function onFinalize$lambda($block) {
    return function (to, partial) {
      $block(to, partial);
      return to;
    };
  }
  function _set_classes__72476703(_this__1828080292, newValue) {
    _get_attributeSetStringStringSet__3092282967().set_r65rse_k$(_this__1828080292, 'class', newValue);
  }
  function _get_classes__2818451371(_this__1828080292) {
    return _get_attributeSetStringStringSet__3092282967().get_kdqgs6_k$(_this__1828080292, 'class');
  }
  function _set_style__1257298356(_this__1828080292, newValue) {
    _get_attributeStringString__4203734355().set_r65rse_k$(_this__1828080292, 'style', newValue);
  }
  function CommonAttributeGroupFacade() {
  }
  CommonAttributeGroupFacade.$metadata$ = {
    simpleName: 'CommonAttributeGroupFacade',
    kind: 'interface',
    interfaces: [Tag]
  };
  function _get_attributeStringString__4203734355() {
    init_properties_gen_attributes_kt_223674630();
    return attributeStringString;
  }
  var attributeStringString;
  function _get_attributeSetStringStringSet__3092282967() {
    init_properties_gen_attributes_kt_223674630();
    return attributeSetStringStringSet;
  }
  var attributeSetStringStringSet;
  var attributeBooleanBoolean;
  var attributeBooleanBooleanOnOff;
  var attributeBooleanTicker;
  var attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  var attributeButtonFormMethodEnumButtonFormMethodValues;
  var attributeButtonTypeEnumButtonTypeValues;
  var attributeCommandTypeEnumCommandTypeValues;
  var attributeDirEnumDirValues;
  var attributeDraggableEnumDraggableValues;
  var attributeFormEncTypeEnumFormEncTypeValues;
  var attributeFormMethodEnumFormMethodValues;
  var attributeIframeSandboxEnumIframeSandboxValues;
  var attributeInputFormEncTypeEnumInputFormEncTypeValues;
  var attributeInputFormMethodEnumInputFormMethodValues;
  var attributeInputTypeEnumInputTypeValues;
  var attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  var attributeRunAtEnumRunAtValues;
  var attributeTextAreaWrapEnumTextAreaWrapValues;
  var attributeThScopeEnumThScopeValues;
  var properties_initialized_gen_attributes_kt_1177187626;
  function init_properties_gen_attributes_kt_223674630() {
    if (!properties_initialized_gen_attributes_kt_1177187626) {
      properties_initialized_gen_attributes_kt_1177187626 = true;
      attributeStringString = new StringAttribute();
      attributeSetStringStringSet = new StringSetAttribute();
      attributeBooleanBoolean = BooleanAttribute_init_$Create$(null, null, 3, null);
      attributeBooleanBooleanOnOff = new BooleanAttribute('on', 'off');
      attributeBooleanTicker = new TickerAttribute();
      attributeButtonFormEncTypeEnumButtonFormEncTypeValues = new EnumAttribute(_get_buttonFormEncTypeValues__2123763473());
      attributeButtonFormMethodEnumButtonFormMethodValues = new EnumAttribute(_get_buttonFormMethodValues__1950722194());
      attributeButtonTypeEnumButtonTypeValues = new EnumAttribute(_get_buttonTypeValues__417721021());
      attributeCommandTypeEnumCommandTypeValues = new EnumAttribute(_get_commandTypeValues__2465359242());
      attributeDirEnumDirValues = new EnumAttribute(_get_dirValues__2719695906());
      attributeDraggableEnumDraggableValues = new EnumAttribute(_get_draggableValues__932286690());
      attributeFormEncTypeEnumFormEncTypeValues = new EnumAttribute(_get_formEncTypeValues__2358095487());
      attributeFormMethodEnumFormMethodValues = new EnumAttribute(_get_formMethodValues__2789565284());
      attributeIframeSandboxEnumIframeSandboxValues = new EnumAttribute(_get_iframeSandboxValues__1591318700());
      attributeInputFormEncTypeEnumInputFormEncTypeValues = new EnumAttribute(_get_inputFormEncTypeValues__2628336035());
      attributeInputFormMethodEnumInputFormMethodValues = new EnumAttribute(_get_inputFormMethodValues__1689904064());
      attributeInputTypeEnumInputTypeValues = new EnumAttribute(_get_inputTypeValues__2537136235());
      attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues = new EnumAttribute(_get_keyGenKeyTypeValues__770921479());
      attributeRunAtEnumRunAtValues = new EnumAttribute(_get_runAtValues__4231515825());
      attributeTextAreaWrapEnumTextAreaWrapValues = new EnumAttribute(_get_textAreaWrapValues__196229957());
      attributeThScopeEnumThScopeValues = new EnumAttribute(_get_thScopeValues__2797166479());
    }
  }
  function _get_dirValues__2719695906() {
    init_properties_gen_enums_kt_2510485983();
    return dirValues;
  }
  var dirValues;
  function _get_draggableValues__932286690() {
    init_properties_gen_enums_kt_2510485983();
    return draggableValues;
  }
  var draggableValues;
  function _get_runAtValues__4231515825() {
    init_properties_gen_enums_kt_2510485983();
    return runAtValues;
  }
  var runAtValues;
  var areaShapeValues;
  function _get_buttonFormEncTypeValues__2123763473() {
    init_properties_gen_enums_kt_2510485983();
    return buttonFormEncTypeValues;
  }
  var buttonFormEncTypeValues;
  function _get_buttonFormMethodValues__1950722194() {
    init_properties_gen_enums_kt_2510485983();
    return buttonFormMethodValues;
  }
  var buttonFormMethodValues;
  function _get_buttonTypeValues__417721021() {
    init_properties_gen_enums_kt_2510485983();
    return buttonTypeValues;
  }
  var buttonTypeValues;
  function _get_commandTypeValues__2465359242() {
    init_properties_gen_enums_kt_2510485983();
    return commandTypeValues;
  }
  var commandTypeValues;
  function _get_formEncTypeValues__2358095487() {
    init_properties_gen_enums_kt_2510485983();
    return formEncTypeValues;
  }
  var formEncTypeValues;
  function _get_formMethodValues__2789565284() {
    init_properties_gen_enums_kt_2510485983();
    return formMethodValues;
  }
  var formMethodValues;
  function _get_iframeSandboxValues__1591318700() {
    init_properties_gen_enums_kt_2510485983();
    return iframeSandboxValues;
  }
  var iframeSandboxValues;
  function _get_inputTypeValues__2537136235() {
    init_properties_gen_enums_kt_2510485983();
    return inputTypeValues;
  }
  var inputTypeValues;
  function _get_inputFormEncTypeValues__2628336035() {
    init_properties_gen_enums_kt_2510485983();
    return inputFormEncTypeValues;
  }
  var inputFormEncTypeValues;
  function _get_inputFormMethodValues__1689904064() {
    init_properties_gen_enums_kt_2510485983();
    return inputFormMethodValues;
  }
  var inputFormMethodValues;
  function _get_keyGenKeyTypeValues__770921479() {
    init_properties_gen_enums_kt_2510485983();
    return keyGenKeyTypeValues;
  }
  var keyGenKeyTypeValues;
  function _get_textAreaWrapValues__196229957() {
    init_properties_gen_enums_kt_2510485983();
    return textAreaWrapValues;
  }
  var textAreaWrapValues;
  function _get_thScopeValues__2797166479() {
    init_properties_gen_enums_kt_2510485983();
    return thScopeValues;
  }
  var thScopeValues;
  var ButtonFormEncType_multipartFormData_instance;
  var ButtonFormEncType_applicationXWwwFormUrlEncoded_instance;
  var ButtonFormEncType_textPlain_instance;
  function values() {
    return [ButtonFormEncType_multipartFormData_getInstance(), ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance(), ButtonFormEncType_textPlain_getInstance()];
  }
  var ButtonFormEncType_entriesInitialized;
  function ButtonFormEncType_initEntries() {
    if (ButtonFormEncType_entriesInitialized)
      return Unit_getInstance();
    ButtonFormEncType_entriesInitialized = true;
    ButtonFormEncType_multipartFormData_instance = new ButtonFormEncType('multipartFormData', 0, 'multipart/form-data');
    ButtonFormEncType_applicationXWwwFormUrlEncoded_instance = new ButtonFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    ButtonFormEncType_textPlain_instance = new ButtonFormEncType('textPlain', 2, 'text/plain');
  }
  function ButtonFormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  ButtonFormEncType.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  ButtonFormEncType.$metadata$ = {
    simpleName: 'ButtonFormEncType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var ButtonFormMethod_get_instance;
  var ButtonFormMethod_post_instance;
  var ButtonFormMethod_put_instance;
  var ButtonFormMethod_delete_instance;
  var ButtonFormMethod_patch_instance;
  function values_0() {
    return [ButtonFormMethod_get_getInstance(), ButtonFormMethod_post_getInstance(), ButtonFormMethod_put_getInstance(), ButtonFormMethod_delete_getInstance(), ButtonFormMethod_patch_getInstance()];
  }
  var ButtonFormMethod_entriesInitialized;
  function ButtonFormMethod_initEntries() {
    if (ButtonFormMethod_entriesInitialized)
      return Unit_getInstance();
    ButtonFormMethod_entriesInitialized = true;
    ButtonFormMethod_get_instance = new ButtonFormMethod('get', 0, 'get');
    ButtonFormMethod_post_instance = new ButtonFormMethod('post', 1, 'post');
    ButtonFormMethod_put_instance = new ButtonFormMethod('put', 2, 'put');
    ButtonFormMethod_delete_instance = new ButtonFormMethod('delete', 3, 'delete');
    ButtonFormMethod_patch_instance = new ButtonFormMethod('patch', 4, 'patch');
  }
  function ButtonFormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  ButtonFormMethod.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  ButtonFormMethod.$metadata$ = {
    simpleName: 'ButtonFormMethod',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var ButtonType_button_instance;
  var ButtonType_reset_instance;
  var ButtonType_submit_instance;
  function values_1() {
    return [ButtonType_button_getInstance(), ButtonType_reset_getInstance(), ButtonType_submit_getInstance()];
  }
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_getInstance();
    ButtonType_entriesInitialized = true;
    ButtonType_button_instance = new ButtonType('button', 0, 'button');
    ButtonType_reset_instance = new ButtonType('reset', 1, 'reset');
    ButtonType_submit_instance = new ButtonType('submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  ButtonType.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  ButtonType.$metadata$ = {
    simpleName: 'ButtonType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var CommandType_command_instance;
  var CommandType_checkBox_instance;
  var CommandType_radio_instance;
  function values_2() {
    return [CommandType_command_getInstance(), CommandType_checkBox_getInstance(), CommandType_radio_getInstance()];
  }
  var CommandType_entriesInitialized;
  function CommandType_initEntries() {
    if (CommandType_entriesInitialized)
      return Unit_getInstance();
    CommandType_entriesInitialized = true;
    CommandType_command_instance = new CommandType('command', 0, 'command');
    CommandType_checkBox_instance = new CommandType('checkBox', 1, 'checkbox');
    CommandType_radio_instance = new CommandType('radio', 2, 'radio');
  }
  function CommandType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  CommandType.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  CommandType.$metadata$ = {
    simpleName: 'CommandType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var Dir_ltr_instance;
  var Dir_rtl_instance;
  function values_3() {
    return [Dir_ltr_getInstance(), Dir_rtl_getInstance()];
  }
  var Dir_entriesInitialized;
  function Dir_initEntries() {
    if (Dir_entriesInitialized)
      return Unit_getInstance();
    Dir_entriesInitialized = true;
    Dir_ltr_instance = new Dir('ltr', 0, 'ltr');
    Dir_rtl_instance = new Dir('rtl', 1, 'rtl');
  }
  function Dir(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  Dir.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  Dir.$metadata$ = {
    simpleName: 'Dir',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var Draggable_htmlTrue_instance;
  var Draggable_htmlFalse_instance;
  var Draggable_auto_instance;
  function values_4() {
    return [Draggable_htmlTrue_getInstance(), Draggable_htmlFalse_getInstance(), Draggable_auto_getInstance()];
  }
  var Draggable_entriesInitialized;
  function Draggable_initEntries() {
    if (Draggable_entriesInitialized)
      return Unit_getInstance();
    Draggable_entriesInitialized = true;
    Draggable_htmlTrue_instance = new Draggable('htmlTrue', 0, 'true');
    Draggable_htmlFalse_instance = new Draggable('htmlFalse', 1, 'false');
    Draggable_auto_instance = new Draggable('auto', 2, 'auto');
  }
  function Draggable(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  Draggable.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  Draggable.$metadata$ = {
    simpleName: 'Draggable',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var FormEncType_multipartFormData_instance;
  var FormEncType_applicationXWwwFormUrlEncoded_instance;
  var FormEncType_textPlain_instance;
  function values_5() {
    return [FormEncType_multipartFormData_getInstance(), FormEncType_applicationXWwwFormUrlEncoded_getInstance(), FormEncType_textPlain_getInstance()];
  }
  var FormEncType_entriesInitialized;
  function FormEncType_initEntries() {
    if (FormEncType_entriesInitialized)
      return Unit_getInstance();
    FormEncType_entriesInitialized = true;
    FormEncType_multipartFormData_instance = new FormEncType('multipartFormData', 0, 'multipart/form-data');
    FormEncType_applicationXWwwFormUrlEncoded_instance = new FormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    FormEncType_textPlain_instance = new FormEncType('textPlain', 2, 'text/plain');
  }
  function FormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  FormEncType.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  FormEncType.$metadata$ = {
    simpleName: 'FormEncType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var FormMethod_get_instance;
  var FormMethod_post_instance;
  var FormMethod_put_instance;
  var FormMethod_delete_instance;
  var FormMethod_patch_instance;
  function values_6() {
    return [FormMethod_get_getInstance(), FormMethod_post_getInstance(), FormMethod_put_getInstance(), FormMethod_delete_getInstance(), FormMethod_patch_getInstance()];
  }
  var FormMethod_entriesInitialized;
  function FormMethod_initEntries() {
    if (FormMethod_entriesInitialized)
      return Unit_getInstance();
    FormMethod_entriesInitialized = true;
    FormMethod_get_instance = new FormMethod('get', 0, 'get');
    FormMethod_post_instance = new FormMethod('post', 1, 'post');
    FormMethod_put_instance = new FormMethod('put', 2, 'put');
    FormMethod_delete_instance = new FormMethod('delete', 3, 'delete');
    FormMethod_patch_instance = new FormMethod('patch', 4, 'patch');
  }
  function FormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  FormMethod.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  FormMethod.$metadata$ = {
    simpleName: 'FormMethod',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var IframeSandbox_allowSameOrigin_instance;
  var IframeSandbox_allowFormS_instance;
  var IframeSandbox_allowScripts_instance;
  function values_7() {
    return [IframeSandbox_allowSameOrigin_getInstance(), IframeSandbox_allowFormS_getInstance(), IframeSandbox_allowScripts_getInstance()];
  }
  var IframeSandbox_entriesInitialized;
  function IframeSandbox_initEntries() {
    if (IframeSandbox_entriesInitialized)
      return Unit_getInstance();
    IframeSandbox_entriesInitialized = true;
    IframeSandbox_allowSameOrigin_instance = new IframeSandbox('allowSameOrigin', 0, 'allow-same-origin');
    IframeSandbox_allowFormS_instance = new IframeSandbox('allowFormS', 1, 'allow-forms');
    IframeSandbox_allowScripts_instance = new IframeSandbox('allowScripts', 2, 'allow-scripts');
  }
  function IframeSandbox(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  IframeSandbox.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  IframeSandbox.$metadata$ = {
    simpleName: 'IframeSandbox',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var InputFormEncType_multipartFormData_instance;
  var InputFormEncType_applicationXWwwFormUrlEncoded_instance;
  var InputFormEncType_textPlain_instance;
  function values_8() {
    return [InputFormEncType_multipartFormData_getInstance(), InputFormEncType_applicationXWwwFormUrlEncoded_getInstance(), InputFormEncType_textPlain_getInstance()];
  }
  var InputFormEncType_entriesInitialized;
  function InputFormEncType_initEntries() {
    if (InputFormEncType_entriesInitialized)
      return Unit_getInstance();
    InputFormEncType_entriesInitialized = true;
    InputFormEncType_multipartFormData_instance = new InputFormEncType('multipartFormData', 0, 'multipart/form-data');
    InputFormEncType_applicationXWwwFormUrlEncoded_instance = new InputFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    InputFormEncType_textPlain_instance = new InputFormEncType('textPlain', 2, 'text/plain');
  }
  function InputFormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  InputFormEncType.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  InputFormEncType.$metadata$ = {
    simpleName: 'InputFormEncType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var InputFormMethod_get_instance;
  var InputFormMethod_post_instance;
  var InputFormMethod_put_instance;
  var InputFormMethod_delete_instance;
  var InputFormMethod_patch_instance;
  function values_9() {
    return [InputFormMethod_get_getInstance(), InputFormMethod_post_getInstance(), InputFormMethod_put_getInstance(), InputFormMethod_delete_getInstance(), InputFormMethod_patch_getInstance()];
  }
  var InputFormMethod_entriesInitialized;
  function InputFormMethod_initEntries() {
    if (InputFormMethod_entriesInitialized)
      return Unit_getInstance();
    InputFormMethod_entriesInitialized = true;
    InputFormMethod_get_instance = new InputFormMethod('get', 0, 'get');
    InputFormMethod_post_instance = new InputFormMethod('post', 1, 'post');
    InputFormMethod_put_instance = new InputFormMethod('put', 2, 'put');
    InputFormMethod_delete_instance = new InputFormMethod('delete', 3, 'delete');
    InputFormMethod_patch_instance = new InputFormMethod('patch', 4, 'patch');
  }
  function InputFormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  InputFormMethod.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  InputFormMethod.$metadata$ = {
    simpleName: 'InputFormMethod',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var InputType_button_instance;
  var InputType_checkBox_instance;
  var InputType_color_instance;
  var InputType_date_instance;
  var InputType_dateTime_instance;
  var InputType_dateTimeLocal_instance;
  var InputType_email_instance;
  var InputType_file_instance;
  var InputType_hidden_instance;
  var InputType_image_instance;
  var InputType_month_instance;
  var InputType_number_instance;
  var InputType_password_instance;
  var InputType_radio_instance;
  var InputType_range_instance;
  var InputType_reset_instance;
  var InputType_search_instance;
  var InputType_submit_instance;
  var InputType_text_instance;
  var InputType_tel_instance;
  var InputType_time_instance;
  var InputType_url_instance;
  var InputType_week_instance;
  function values_10() {
    return [InputType_button_getInstance(), InputType_checkBox_getInstance(), InputType_color_getInstance(), InputType_date_getInstance(), InputType_dateTime_getInstance(), InputType_dateTimeLocal_getInstance(), InputType_email_getInstance(), InputType_file_getInstance(), InputType_hidden_getInstance(), InputType_image_getInstance(), InputType_month_getInstance(), InputType_number_getInstance(), InputType_password_getInstance(), InputType_radio_getInstance(), InputType_range_getInstance(), InputType_reset_getInstance(), InputType_search_getInstance(), InputType_submit_getInstance(), InputType_text_getInstance(), InputType_tel_getInstance(), InputType_time_getInstance(), InputType_url_getInstance(), InputType_week_getInstance()];
  }
  var InputType_entriesInitialized;
  function InputType_initEntries() {
    if (InputType_entriesInitialized)
      return Unit_getInstance();
    InputType_entriesInitialized = true;
    InputType_button_instance = new InputType('button', 0, 'button');
    InputType_checkBox_instance = new InputType('checkBox', 1, 'checkbox');
    InputType_color_instance = new InputType('color', 2, 'color');
    InputType_date_instance = new InputType('date', 3, 'date');
    InputType_dateTime_instance = new InputType('dateTime', 4, 'datetime');
    InputType_dateTimeLocal_instance = new InputType('dateTimeLocal', 5, 'datetime-local');
    InputType_email_instance = new InputType('email', 6, 'email');
    InputType_file_instance = new InputType('file', 7, 'file');
    InputType_hidden_instance = new InputType('hidden', 8, 'hidden');
    InputType_image_instance = new InputType('image', 9, 'image');
    InputType_month_instance = new InputType('month', 10, 'month');
    InputType_number_instance = new InputType('number', 11, 'number');
    InputType_password_instance = new InputType('password', 12, 'password');
    InputType_radio_instance = new InputType('radio', 13, 'radio');
    InputType_range_instance = new InputType('range', 14, 'range');
    InputType_reset_instance = new InputType('reset', 15, 'reset');
    InputType_search_instance = new InputType('search', 16, 'search');
    InputType_submit_instance = new InputType('submit', 17, 'submit');
    InputType_text_instance = new InputType('text', 18, 'text');
    InputType_tel_instance = new InputType('tel', 19, 'tel');
    InputType_time_instance = new InputType('time', 20, 'time');
    InputType_url_instance = new InputType('url', 21, 'url');
    InputType_week_instance = new InputType('week', 22, 'week');
  }
  function InputType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  InputType.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  InputType.$metadata$ = {
    simpleName: 'InputType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var KeyGenKeyType_rsa_instance;
  function values_11() {
    return [KeyGenKeyType_rsa_getInstance()];
  }
  var KeyGenKeyType_entriesInitialized;
  function KeyGenKeyType_initEntries() {
    if (KeyGenKeyType_entriesInitialized)
      return Unit_getInstance();
    KeyGenKeyType_entriesInitialized = true;
    KeyGenKeyType_rsa_instance = new KeyGenKeyType('rsa', 0, 'rsa');
  }
  function KeyGenKeyType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  KeyGenKeyType.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  KeyGenKeyType.$metadata$ = {
    simpleName: 'KeyGenKeyType',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var RunAt_server_instance;
  function values_12() {
    return [RunAt_server_getInstance()];
  }
  var RunAt_entriesInitialized;
  function RunAt_initEntries() {
    if (RunAt_entriesInitialized)
      return Unit_getInstance();
    RunAt_entriesInitialized = true;
    RunAt_server_instance = new RunAt('server', 0, 'server');
  }
  function RunAt(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  RunAt.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  RunAt.$metadata$ = {
    simpleName: 'RunAt',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var TextAreaWrap_hard_instance;
  var TextAreaWrap_soft_instance;
  function values_13() {
    return [TextAreaWrap_hard_getInstance(), TextAreaWrap_soft_getInstance()];
  }
  var TextAreaWrap_entriesInitialized;
  function TextAreaWrap_initEntries() {
    if (TextAreaWrap_entriesInitialized)
      return Unit_getInstance();
    TextAreaWrap_entriesInitialized = true;
    TextAreaWrap_hard_instance = new TextAreaWrap('hard', 0, 'hard');
    TextAreaWrap_soft_instance = new TextAreaWrap('soft', 1, 'soft');
  }
  function TextAreaWrap(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  TextAreaWrap.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  TextAreaWrap.$metadata$ = {
    simpleName: 'TextAreaWrap',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var ThScope_col_instance;
  var ThScope_colGroup_instance;
  var ThScope_row_instance;
  var ThScope_rowGroup_instance;
  function values_14() {
    return [ThScope_col_getInstance(), ThScope_colGroup_getInstance(), ThScope_row_getInstance(), ThScope_rowGroup_getInstance()];
  }
  var ThScope_entriesInitialized;
  function ThScope_initEntries() {
    if (ThScope_entriesInitialized)
      return Unit_getInstance();
    ThScope_entriesInitialized = true;
    ThScope_col_instance = new ThScope('col', 0, 'col');
    ThScope_colGroup_instance = new ThScope('colGroup', 1, 'colgroup');
    ThScope_row_instance = new ThScope('row', 2, 'row');
    ThScope_rowGroup_instance = new ThScope('rowGroup', 3, 'rowgroup');
  }
  function ThScope(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  ThScope.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  ThScope.$metadata$ = {
    simpleName: 'ThScope',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  var AreaShape_rect_instance;
  var AreaShape_circle_instance;
  var AreaShape_poly_instance;
  var AreaShape_default_instance;
  function values_15() {
    return [AreaShape_rect_getInstance(), AreaShape_circle_getInstance(), AreaShape_poly_getInstance(), AreaShape_default_getInstance()];
  }
  var AreaShape_entriesInitialized;
  function AreaShape_initEntries() {
    if (AreaShape_entriesInitialized)
      return Unit_getInstance();
    AreaShape_entriesInitialized = true;
    AreaShape_rect_instance = new AreaShape('rect', 0, 'rect');
    AreaShape_circle_instance = new AreaShape('circle', 1, 'circle');
    AreaShape_poly_instance = new AreaShape('poly', 2, 'poly');
    AreaShape_default_instance = new AreaShape('default', 3, 'default');
  }
  function AreaShape(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.realValue_1 = realValue;
  }
  AreaShape.prototype._get_realValue__1065264702_hm8bi6_k$ = function () {
    return this.realValue_1;
  };
  AreaShape.$metadata$ = {
    simpleName: 'AreaShape',
    kind: 'class',
    interfaces: [AttributeEnum]
  };
  function ButtonFormEncType_multipartFormData_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_multipartFormData_instance;
  }
  function ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function ButtonFormEncType_textPlain_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_textPlain_instance;
  }
  function ButtonFormMethod_get_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_get_instance;
  }
  function ButtonFormMethod_post_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_post_instance;
  }
  function ButtonFormMethod_put_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_put_instance;
  }
  function ButtonFormMethod_delete_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_delete_instance;
  }
  function ButtonFormMethod_patch_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_patch_instance;
  }
  function ButtonType_button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_button_instance;
  }
  function ButtonType_reset_getInstance() {
    ButtonType_initEntries();
    return ButtonType_reset_instance;
  }
  function ButtonType_submit_getInstance() {
    ButtonType_initEntries();
    return ButtonType_submit_instance;
  }
  function CommandType_command_getInstance() {
    CommandType_initEntries();
    return CommandType_command_instance;
  }
  function CommandType_checkBox_getInstance() {
    CommandType_initEntries();
    return CommandType_checkBox_instance;
  }
  function CommandType_radio_getInstance() {
    CommandType_initEntries();
    return CommandType_radio_instance;
  }
  function Dir_ltr_getInstance() {
    Dir_initEntries();
    return Dir_ltr_instance;
  }
  function Dir_rtl_getInstance() {
    Dir_initEntries();
    return Dir_rtl_instance;
  }
  function Draggable_htmlTrue_getInstance() {
    Draggable_initEntries();
    return Draggable_htmlTrue_instance;
  }
  function Draggable_htmlFalse_getInstance() {
    Draggable_initEntries();
    return Draggable_htmlFalse_instance;
  }
  function Draggable_auto_getInstance() {
    Draggable_initEntries();
    return Draggable_auto_instance;
  }
  function FormEncType_multipartFormData_getInstance() {
    FormEncType_initEntries();
    return FormEncType_multipartFormData_instance;
  }
  function FormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    FormEncType_initEntries();
    return FormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function FormEncType_textPlain_getInstance() {
    FormEncType_initEntries();
    return FormEncType_textPlain_instance;
  }
  function FormMethod_get_getInstance() {
    FormMethod_initEntries();
    return FormMethod_get_instance;
  }
  function FormMethod_post_getInstance() {
    FormMethod_initEntries();
    return FormMethod_post_instance;
  }
  function FormMethod_put_getInstance() {
    FormMethod_initEntries();
    return FormMethod_put_instance;
  }
  function FormMethod_delete_getInstance() {
    FormMethod_initEntries();
    return FormMethod_delete_instance;
  }
  function FormMethod_patch_getInstance() {
    FormMethod_initEntries();
    return FormMethod_patch_instance;
  }
  function IframeSandbox_allowSameOrigin_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowSameOrigin_instance;
  }
  function IframeSandbox_allowFormS_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowFormS_instance;
  }
  function IframeSandbox_allowScripts_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowScripts_instance;
  }
  function InputFormEncType_multipartFormData_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_multipartFormData_instance;
  }
  function InputFormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function InputFormEncType_textPlain_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_textPlain_instance;
  }
  function InputFormMethod_get_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_get_instance;
  }
  function InputFormMethod_post_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_post_instance;
  }
  function InputFormMethod_put_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_put_instance;
  }
  function InputFormMethod_delete_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_delete_instance;
  }
  function InputFormMethod_patch_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_patch_instance;
  }
  function InputType_button_getInstance() {
    InputType_initEntries();
    return InputType_button_instance;
  }
  function InputType_checkBox_getInstance() {
    InputType_initEntries();
    return InputType_checkBox_instance;
  }
  function InputType_color_getInstance() {
    InputType_initEntries();
    return InputType_color_instance;
  }
  function InputType_date_getInstance() {
    InputType_initEntries();
    return InputType_date_instance;
  }
  function InputType_dateTime_getInstance() {
    InputType_initEntries();
    return InputType_dateTime_instance;
  }
  function InputType_dateTimeLocal_getInstance() {
    InputType_initEntries();
    return InputType_dateTimeLocal_instance;
  }
  function InputType_email_getInstance() {
    InputType_initEntries();
    return InputType_email_instance;
  }
  function InputType_file_getInstance() {
    InputType_initEntries();
    return InputType_file_instance;
  }
  function InputType_hidden_getInstance() {
    InputType_initEntries();
    return InputType_hidden_instance;
  }
  function InputType_image_getInstance() {
    InputType_initEntries();
    return InputType_image_instance;
  }
  function InputType_month_getInstance() {
    InputType_initEntries();
    return InputType_month_instance;
  }
  function InputType_number_getInstance() {
    InputType_initEntries();
    return InputType_number_instance;
  }
  function InputType_password_getInstance() {
    InputType_initEntries();
    return InputType_password_instance;
  }
  function InputType_radio_getInstance() {
    InputType_initEntries();
    return InputType_radio_instance;
  }
  function InputType_range_getInstance() {
    InputType_initEntries();
    return InputType_range_instance;
  }
  function InputType_reset_getInstance() {
    InputType_initEntries();
    return InputType_reset_instance;
  }
  function InputType_search_getInstance() {
    InputType_initEntries();
    return InputType_search_instance;
  }
  function InputType_submit_getInstance() {
    InputType_initEntries();
    return InputType_submit_instance;
  }
  function InputType_text_getInstance() {
    InputType_initEntries();
    return InputType_text_instance;
  }
  function InputType_tel_getInstance() {
    InputType_initEntries();
    return InputType_tel_instance;
  }
  function InputType_time_getInstance() {
    InputType_initEntries();
    return InputType_time_instance;
  }
  function InputType_url_getInstance() {
    InputType_initEntries();
    return InputType_url_instance;
  }
  function InputType_week_getInstance() {
    InputType_initEntries();
    return InputType_week_instance;
  }
  function KeyGenKeyType_rsa_getInstance() {
    KeyGenKeyType_initEntries();
    return KeyGenKeyType_rsa_instance;
  }
  function RunAt_server_getInstance() {
    RunAt_initEntries();
    return RunAt_server_instance;
  }
  function TextAreaWrap_hard_getInstance() {
    TextAreaWrap_initEntries();
    return TextAreaWrap_hard_instance;
  }
  function TextAreaWrap_soft_getInstance() {
    TextAreaWrap_initEntries();
    return TextAreaWrap_soft_instance;
  }
  function ThScope_col_getInstance() {
    ThScope_initEntries();
    return ThScope_col_instance;
  }
  function ThScope_colGroup_getInstance() {
    ThScope_initEntries();
    return ThScope_colGroup_instance;
  }
  function ThScope_row_getInstance() {
    ThScope_initEntries();
    return ThScope_row_instance;
  }
  function ThScope_rowGroup_getInstance() {
    ThScope_initEntries();
    return ThScope_rowGroup_instance;
  }
  function AreaShape_rect_getInstance() {
    AreaShape_initEntries();
    return AreaShape_rect_instance;
  }
  function AreaShape_circle_getInstance() {
    AreaShape_initEntries();
    return AreaShape_circle_instance;
  }
  function AreaShape_poly_getInstance() {
    AreaShape_initEntries();
    return AreaShape_poly_instance;
  }
  function AreaShape_default_getInstance() {
    AreaShape_initEntries();
    return AreaShape_default_instance;
  }
  var properties_initialized_gen_enums_kt_3526786875;
  function init_properties_gen_enums_kt_2510485983() {
    if (!properties_initialized_gen_enums_kt_3526786875) {
      properties_initialized_gen_enums_kt_3526786875 = true;
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_associateBy_0 = values_3();
        var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_associateByTo_0_2 = LinkedHashMap_init_$Create$_1(capacity_1);
          var indexedObject = tmp0_associateBy_0;
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var element_2_4 = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = element_2_4.realValue_1;
              break $l$block;
            }
            tmp0_associateByTo_0_2.put_3mhbri_k$(tmp$ret$0, element_2_4);
            Unit_getInstance();
          }
          tmp$ret$1 = tmp0_associateByTo_0_2;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      dirValues = tmp$ret$2;
      var tmp$ret$2_0;
      $l$block_4: {
        var tmp0_associateBy_0_0 = values_4();
        var capacity_1_0 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_0.length), 16);
        var tmp$ret$1_0;
        $l$block_3: {
          var tmp0_associateByTo_0_2_0 = LinkedHashMap_init_$Create$_1(capacity_1_0);
          var indexedObject_0 = tmp0_associateBy_0_0;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var element_2_4_0 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$0_0;
            $l$block_2: {
              tmp$ret$0_0 = element_2_4_0.realValue_1;
              break $l$block_2;
            }
            tmp0_associateByTo_0_2_0.put_3mhbri_k$(tmp$ret$0_0, element_2_4_0);
            Unit_getInstance();
          }
          tmp$ret$1_0 = tmp0_associateByTo_0_2_0;
          break $l$block_3;
        }
        tmp$ret$2_0 = tmp$ret$1_0;
        break $l$block_4;
      }
      draggableValues = tmp$ret$2_0;
      var tmp$ret$2_1;
      $l$block_7: {
        var tmp0_associateBy_0_1 = values_12();
        var capacity_1_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_1.length), 16);
        var tmp$ret$1_1;
        $l$block_6: {
          var tmp0_associateByTo_0_2_1 = LinkedHashMap_init_$Create$_1(capacity_1_1);
          var indexedObject_1 = tmp0_associateBy_0_1;
          var inductionVariable_1 = 0;
          var last_1 = indexedObject_1.length;
          while (inductionVariable_1 < last_1) {
            var element_2_4_1 = indexedObject_1[inductionVariable_1];
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var tmp$ret$0_1;
            $l$block_5: {
              tmp$ret$0_1 = element_2_4_1.realValue_1;
              break $l$block_5;
            }
            tmp0_associateByTo_0_2_1.put_3mhbri_k$(tmp$ret$0_1, element_2_4_1);
            Unit_getInstance();
          }
          tmp$ret$1_1 = tmp0_associateByTo_0_2_1;
          break $l$block_6;
        }
        tmp$ret$2_1 = tmp$ret$1_1;
        break $l$block_7;
      }
      runAtValues = tmp$ret$2_1;
      var tmp$ret$2_2;
      $l$block_10: {
        var tmp0_associateBy_0_2 = values_15();
        var capacity_1_2 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_2.length), 16);
        var tmp$ret$1_2;
        $l$block_9: {
          var tmp0_associateByTo_0_2_2 = LinkedHashMap_init_$Create$_1(capacity_1_2);
          var indexedObject_2 = tmp0_associateBy_0_2;
          var inductionVariable_2 = 0;
          var last_2 = indexedObject_2.length;
          while (inductionVariable_2 < last_2) {
            var element_2_4_2 = indexedObject_2[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var tmp$ret$0_2;
            $l$block_8: {
              tmp$ret$0_2 = element_2_4_2.realValue_1;
              break $l$block_8;
            }
            tmp0_associateByTo_0_2_2.put_3mhbri_k$(tmp$ret$0_2, element_2_4_2);
            Unit_getInstance();
          }
          tmp$ret$1_2 = tmp0_associateByTo_0_2_2;
          break $l$block_9;
        }
        tmp$ret$2_2 = tmp$ret$1_2;
        break $l$block_10;
      }
      areaShapeValues = tmp$ret$2_2;
      var tmp$ret$2_3;
      $l$block_13: {
        var tmp0_associateBy_0_3 = values();
        var capacity_1_3 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_3.length), 16);
        var tmp$ret$1_3;
        $l$block_12: {
          var tmp0_associateByTo_0_2_3 = LinkedHashMap_init_$Create$_1(capacity_1_3);
          var indexedObject_3 = tmp0_associateBy_0_3;
          var inductionVariable_3 = 0;
          var last_3 = indexedObject_3.length;
          while (inductionVariable_3 < last_3) {
            var element_2_4_3 = indexedObject_3[inductionVariable_3];
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var tmp$ret$0_3;
            $l$block_11: {
              tmp$ret$0_3 = element_2_4_3.realValue_1;
              break $l$block_11;
            }
            tmp0_associateByTo_0_2_3.put_3mhbri_k$(tmp$ret$0_3, element_2_4_3);
            Unit_getInstance();
          }
          tmp$ret$1_3 = tmp0_associateByTo_0_2_3;
          break $l$block_12;
        }
        tmp$ret$2_3 = tmp$ret$1_3;
        break $l$block_13;
      }
      buttonFormEncTypeValues = tmp$ret$2_3;
      var tmp$ret$2_4;
      $l$block_16: {
        var tmp0_associateBy_0_4 = values_0();
        var capacity_1_4 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_4.length), 16);
        var tmp$ret$1_4;
        $l$block_15: {
          var tmp0_associateByTo_0_2_4 = LinkedHashMap_init_$Create$_1(capacity_1_4);
          var indexedObject_4 = tmp0_associateBy_0_4;
          var inductionVariable_4 = 0;
          var last_4 = indexedObject_4.length;
          while (inductionVariable_4 < last_4) {
            var element_2_4_4 = indexedObject_4[inductionVariable_4];
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var tmp$ret$0_4;
            $l$block_14: {
              tmp$ret$0_4 = element_2_4_4.realValue_1;
              break $l$block_14;
            }
            tmp0_associateByTo_0_2_4.put_3mhbri_k$(tmp$ret$0_4, element_2_4_4);
            Unit_getInstance();
          }
          tmp$ret$1_4 = tmp0_associateByTo_0_2_4;
          break $l$block_15;
        }
        tmp$ret$2_4 = tmp$ret$1_4;
        break $l$block_16;
      }
      buttonFormMethodValues = tmp$ret$2_4;
      var tmp$ret$2_5;
      $l$block_19: {
        var tmp0_associateBy_0_5 = values_1();
        var capacity_1_5 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_5.length), 16);
        var tmp$ret$1_5;
        $l$block_18: {
          var tmp0_associateByTo_0_2_5 = LinkedHashMap_init_$Create$_1(capacity_1_5);
          var indexedObject_5 = tmp0_associateBy_0_5;
          var inductionVariable_5 = 0;
          var last_5 = indexedObject_5.length;
          while (inductionVariable_5 < last_5) {
            var element_2_4_5 = indexedObject_5[inductionVariable_5];
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var tmp$ret$0_5;
            $l$block_17: {
              tmp$ret$0_5 = element_2_4_5.realValue_1;
              break $l$block_17;
            }
            tmp0_associateByTo_0_2_5.put_3mhbri_k$(tmp$ret$0_5, element_2_4_5);
            Unit_getInstance();
          }
          tmp$ret$1_5 = tmp0_associateByTo_0_2_5;
          break $l$block_18;
        }
        tmp$ret$2_5 = tmp$ret$1_5;
        break $l$block_19;
      }
      buttonTypeValues = tmp$ret$2_5;
      var tmp$ret$2_6;
      $l$block_22: {
        var tmp0_associateBy_0_6 = values_2();
        var capacity_1_6 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_6.length), 16);
        var tmp$ret$1_6;
        $l$block_21: {
          var tmp0_associateByTo_0_2_6 = LinkedHashMap_init_$Create$_1(capacity_1_6);
          var indexedObject_6 = tmp0_associateBy_0_6;
          var inductionVariable_6 = 0;
          var last_6 = indexedObject_6.length;
          while (inductionVariable_6 < last_6) {
            var element_2_4_6 = indexedObject_6[inductionVariable_6];
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var tmp$ret$0_6;
            $l$block_20: {
              tmp$ret$0_6 = element_2_4_6.realValue_1;
              break $l$block_20;
            }
            tmp0_associateByTo_0_2_6.put_3mhbri_k$(tmp$ret$0_6, element_2_4_6);
            Unit_getInstance();
          }
          tmp$ret$1_6 = tmp0_associateByTo_0_2_6;
          break $l$block_21;
        }
        tmp$ret$2_6 = tmp$ret$1_6;
        break $l$block_22;
      }
      commandTypeValues = tmp$ret$2_6;
      var tmp$ret$2_7;
      $l$block_25: {
        var tmp0_associateBy_0_7 = values_5();
        var capacity_1_7 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_7.length), 16);
        var tmp$ret$1_7;
        $l$block_24: {
          var tmp0_associateByTo_0_2_7 = LinkedHashMap_init_$Create$_1(capacity_1_7);
          var indexedObject_7 = tmp0_associateBy_0_7;
          var inductionVariable_7 = 0;
          var last_7 = indexedObject_7.length;
          while (inductionVariable_7 < last_7) {
            var element_2_4_7 = indexedObject_7[inductionVariable_7];
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var tmp$ret$0_7;
            $l$block_23: {
              tmp$ret$0_7 = element_2_4_7.realValue_1;
              break $l$block_23;
            }
            tmp0_associateByTo_0_2_7.put_3mhbri_k$(tmp$ret$0_7, element_2_4_7);
            Unit_getInstance();
          }
          tmp$ret$1_7 = tmp0_associateByTo_0_2_7;
          break $l$block_24;
        }
        tmp$ret$2_7 = tmp$ret$1_7;
        break $l$block_25;
      }
      formEncTypeValues = tmp$ret$2_7;
      var tmp$ret$2_8;
      $l$block_28: {
        var tmp0_associateBy_0_8 = values_6();
        var capacity_1_8 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_8.length), 16);
        var tmp$ret$1_8;
        $l$block_27: {
          var tmp0_associateByTo_0_2_8 = LinkedHashMap_init_$Create$_1(capacity_1_8);
          var indexedObject_8 = tmp0_associateBy_0_8;
          var inductionVariable_8 = 0;
          var last_8 = indexedObject_8.length;
          while (inductionVariable_8 < last_8) {
            var element_2_4_8 = indexedObject_8[inductionVariable_8];
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var tmp$ret$0_8;
            $l$block_26: {
              tmp$ret$0_8 = element_2_4_8.realValue_1;
              break $l$block_26;
            }
            tmp0_associateByTo_0_2_8.put_3mhbri_k$(tmp$ret$0_8, element_2_4_8);
            Unit_getInstance();
          }
          tmp$ret$1_8 = tmp0_associateByTo_0_2_8;
          break $l$block_27;
        }
        tmp$ret$2_8 = tmp$ret$1_8;
        break $l$block_28;
      }
      formMethodValues = tmp$ret$2_8;
      var tmp$ret$2_9;
      $l$block_31: {
        var tmp0_associateBy_0_9 = values_7();
        var capacity_1_9 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_9.length), 16);
        var tmp$ret$1_9;
        $l$block_30: {
          var tmp0_associateByTo_0_2_9 = LinkedHashMap_init_$Create$_1(capacity_1_9);
          var indexedObject_9 = tmp0_associateBy_0_9;
          var inductionVariable_9 = 0;
          var last_9 = indexedObject_9.length;
          while (inductionVariable_9 < last_9) {
            var element_2_4_9 = indexedObject_9[inductionVariable_9];
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var tmp$ret$0_9;
            $l$block_29: {
              tmp$ret$0_9 = element_2_4_9.realValue_1;
              break $l$block_29;
            }
            tmp0_associateByTo_0_2_9.put_3mhbri_k$(tmp$ret$0_9, element_2_4_9);
            Unit_getInstance();
          }
          tmp$ret$1_9 = tmp0_associateByTo_0_2_9;
          break $l$block_30;
        }
        tmp$ret$2_9 = tmp$ret$1_9;
        break $l$block_31;
      }
      iframeSandboxValues = tmp$ret$2_9;
      var tmp$ret$2_10;
      $l$block_34: {
        var tmp0_associateBy_0_10 = values_10();
        var capacity_1_10 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_10.length), 16);
        var tmp$ret$1_10;
        $l$block_33: {
          var tmp0_associateByTo_0_2_10 = LinkedHashMap_init_$Create$_1(capacity_1_10);
          var indexedObject_10 = tmp0_associateBy_0_10;
          var inductionVariable_10 = 0;
          var last_10 = indexedObject_10.length;
          while (inductionVariable_10 < last_10) {
            var element_2_4_10 = indexedObject_10[inductionVariable_10];
            inductionVariable_10 = inductionVariable_10 + 1 | 0;
            var tmp$ret$0_10;
            $l$block_32: {
              tmp$ret$0_10 = element_2_4_10.realValue_1;
              break $l$block_32;
            }
            tmp0_associateByTo_0_2_10.put_3mhbri_k$(tmp$ret$0_10, element_2_4_10);
            Unit_getInstance();
          }
          tmp$ret$1_10 = tmp0_associateByTo_0_2_10;
          break $l$block_33;
        }
        tmp$ret$2_10 = tmp$ret$1_10;
        break $l$block_34;
      }
      inputTypeValues = tmp$ret$2_10;
      var tmp$ret$2_11;
      $l$block_37: {
        var tmp0_associateBy_0_11 = values_8();
        var capacity_1_11 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_11.length), 16);
        var tmp$ret$1_11;
        $l$block_36: {
          var tmp0_associateByTo_0_2_11 = LinkedHashMap_init_$Create$_1(capacity_1_11);
          var indexedObject_11 = tmp0_associateBy_0_11;
          var inductionVariable_11 = 0;
          var last_11 = indexedObject_11.length;
          while (inductionVariable_11 < last_11) {
            var element_2_4_11 = indexedObject_11[inductionVariable_11];
            inductionVariable_11 = inductionVariable_11 + 1 | 0;
            var tmp$ret$0_11;
            $l$block_35: {
              tmp$ret$0_11 = element_2_4_11.realValue_1;
              break $l$block_35;
            }
            tmp0_associateByTo_0_2_11.put_3mhbri_k$(tmp$ret$0_11, element_2_4_11);
            Unit_getInstance();
          }
          tmp$ret$1_11 = tmp0_associateByTo_0_2_11;
          break $l$block_36;
        }
        tmp$ret$2_11 = tmp$ret$1_11;
        break $l$block_37;
      }
      inputFormEncTypeValues = tmp$ret$2_11;
      var tmp$ret$2_12;
      $l$block_40: {
        var tmp0_associateBy_0_12 = values_9();
        var capacity_1_12 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_12.length), 16);
        var tmp$ret$1_12;
        $l$block_39: {
          var tmp0_associateByTo_0_2_12 = LinkedHashMap_init_$Create$_1(capacity_1_12);
          var indexedObject_12 = tmp0_associateBy_0_12;
          var inductionVariable_12 = 0;
          var last_12 = indexedObject_12.length;
          while (inductionVariable_12 < last_12) {
            var element_2_4_12 = indexedObject_12[inductionVariable_12];
            inductionVariable_12 = inductionVariable_12 + 1 | 0;
            var tmp$ret$0_12;
            $l$block_38: {
              tmp$ret$0_12 = element_2_4_12.realValue_1;
              break $l$block_38;
            }
            tmp0_associateByTo_0_2_12.put_3mhbri_k$(tmp$ret$0_12, element_2_4_12);
            Unit_getInstance();
          }
          tmp$ret$1_12 = tmp0_associateByTo_0_2_12;
          break $l$block_39;
        }
        tmp$ret$2_12 = tmp$ret$1_12;
        break $l$block_40;
      }
      inputFormMethodValues = tmp$ret$2_12;
      var tmp$ret$2_13;
      $l$block_43: {
        var tmp0_associateBy_0_13 = values_11();
        var capacity_1_13 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_13.length), 16);
        var tmp$ret$1_13;
        $l$block_42: {
          var tmp0_associateByTo_0_2_13 = LinkedHashMap_init_$Create$_1(capacity_1_13);
          var indexedObject_13 = tmp0_associateBy_0_13;
          var inductionVariable_13 = 0;
          var last_13 = indexedObject_13.length;
          while (inductionVariable_13 < last_13) {
            var element_2_4_13 = indexedObject_13[inductionVariable_13];
            inductionVariable_13 = inductionVariable_13 + 1 | 0;
            var tmp$ret$0_13;
            $l$block_41: {
              tmp$ret$0_13 = element_2_4_13.realValue_1;
              break $l$block_41;
            }
            tmp0_associateByTo_0_2_13.put_3mhbri_k$(tmp$ret$0_13, element_2_4_13);
            Unit_getInstance();
          }
          tmp$ret$1_13 = tmp0_associateByTo_0_2_13;
          break $l$block_42;
        }
        tmp$ret$2_13 = tmp$ret$1_13;
        break $l$block_43;
      }
      keyGenKeyTypeValues = tmp$ret$2_13;
      var tmp$ret$2_14;
      $l$block_46: {
        var tmp0_associateBy_0_14 = values_13();
        var capacity_1_14 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_14.length), 16);
        var tmp$ret$1_14;
        $l$block_45: {
          var tmp0_associateByTo_0_2_14 = LinkedHashMap_init_$Create$_1(capacity_1_14);
          var indexedObject_14 = tmp0_associateBy_0_14;
          var inductionVariable_14 = 0;
          var last_14 = indexedObject_14.length;
          while (inductionVariable_14 < last_14) {
            var element_2_4_14 = indexedObject_14[inductionVariable_14];
            inductionVariable_14 = inductionVariable_14 + 1 | 0;
            var tmp$ret$0_14;
            $l$block_44: {
              tmp$ret$0_14 = element_2_4_14.realValue_1;
              break $l$block_44;
            }
            tmp0_associateByTo_0_2_14.put_3mhbri_k$(tmp$ret$0_14, element_2_4_14);
            Unit_getInstance();
          }
          tmp$ret$1_14 = tmp0_associateByTo_0_2_14;
          break $l$block_45;
        }
        tmp$ret$2_14 = tmp$ret$1_14;
        break $l$block_46;
      }
      textAreaWrapValues = tmp$ret$2_14;
      var tmp$ret$2_15;
      $l$block_49: {
        var tmp0_associateBy_0_15 = values_14();
        var capacity_1_15 = coerceAtLeast(mapCapacity(tmp0_associateBy_0_15.length), 16);
        var tmp$ret$1_15;
        $l$block_48: {
          var tmp0_associateByTo_0_2_15 = LinkedHashMap_init_$Create$_1(capacity_1_15);
          var indexedObject_15 = tmp0_associateBy_0_15;
          var inductionVariable_15 = 0;
          var last_15 = indexedObject_15.length;
          while (inductionVariable_15 < last_15) {
            var element_2_4_15 = indexedObject_15[inductionVariable_15];
            inductionVariable_15 = inductionVariable_15 + 1 | 0;
            var tmp$ret$0_15;
            $l$block_47: {
              tmp$ret$0_15 = element_2_4_15.realValue_1;
              break $l$block_47;
            }
            tmp0_associateByTo_0_2_15.put_3mhbri_k$(tmp$ret$0_15, element_2_4_15);
            Unit_getInstance();
          }
          tmp$ret$1_15 = tmp0_associateByTo_0_2_15;
          break $l$block_48;
        }
        tmp$ret$2_15 = tmp$ret$1_15;
        break $l$block_49;
      }
      thScopeValues = tmp$ret$2_15;
    }
  }
  function HtmlBlockTag() {
  }
  HtmlBlockTag.$metadata$ = {
    simpleName: 'HtmlBlockTag',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, FlowContent]
  };
  function CommonAttributeGroupFacadeFlowInteractivePhrasingContent() {
  }
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.$metadata$ = {
    simpleName: 'CommonAttributeGroupFacadeFlowInteractivePhrasingContent',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, CommonAttributeGroupFacadeFlowInteractiveContent, FlowPhrasingContent, HtmlBlockInlineTag, HtmlBlockTag, HtmlInlineTag]
  };
  function CommonAttributeGroupFacadeFlowInteractiveContent() {
  }
  CommonAttributeGroupFacadeFlowInteractiveContent.$metadata$ = {
    simpleName: 'CommonAttributeGroupFacadeFlowInteractiveContent',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, HtmlBlockTag, InteractiveContent]
  };
  function FlowPhrasingContent() {
  }
  FlowPhrasingContent.$metadata$ = {
    simpleName: 'FlowPhrasingContent',
    kind: 'interface',
    interfaces: [FlowContent, PhrasingContent]
  };
  function HtmlBlockInlineTag() {
  }
  HtmlBlockInlineTag.$metadata$ = {
    simpleName: 'HtmlBlockInlineTag',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, FlowPhrasingContent, HtmlBlockTag, HtmlInlineTag]
  };
  function HtmlInlineTag() {
  }
  HtmlInlineTag.$metadata$ = {
    simpleName: 'HtmlInlineTag',
    kind: 'interface',
    interfaces: [CommonAttributeGroupFacade, PhrasingContent]
  };
  function FlowContent() {
  }
  FlowContent.$metadata$ = {
    simpleName: 'FlowContent',
    kind: 'interface',
    interfaces: [FlowOrHeadingContent, FlowOrMetaDataContent, FlowOrInteractiveContent, FlowOrPhrasingContent, FlowOrPhrasingOrMetaDataContent, SectioningOrFlowContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function InteractiveContent() {
  }
  InteractiveContent.$metadata$ = {
    simpleName: 'InteractiveContent',
    kind: 'interface',
    interfaces: [FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function PhrasingContent() {
  }
  PhrasingContent.$metadata$ = {
    simpleName: 'PhrasingContent',
    kind: 'interface',
    interfaces: [FlowOrPhrasingContent, FlowOrPhrasingOrMetaDataContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function FlowOrHeadingContent() {
  }
  FlowOrHeadingContent.$metadata$ = {
    simpleName: 'FlowOrHeadingContent',
    kind: 'interface',
    interfaces: [Tag]
  };
  function FlowOrMetaDataContent() {
  }
  FlowOrMetaDataContent.$metadata$ = {
    simpleName: 'FlowOrMetaDataContent',
    kind: 'interface',
    interfaces: [FlowOrPhrasingOrMetaDataContent, Tag]
  };
  function FlowOrInteractiveContent() {
  }
  FlowOrInteractiveContent.$metadata$ = {
    simpleName: 'FlowOrInteractiveContent',
    kind: 'interface',
    interfaces: [FlowOrInteractiveOrPhrasingContent, Tag]
  };
  function FlowOrPhrasingContent() {
  }
  FlowOrPhrasingContent.$metadata$ = {
    simpleName: 'FlowOrPhrasingContent',
    kind: 'interface',
    interfaces: [FlowOrInteractiveOrPhrasingContent, FlowOrPhrasingOrMetaDataContent, Tag]
  };
  function FlowOrPhrasingOrMetaDataContent() {
  }
  FlowOrPhrasingOrMetaDataContent.$metadata$ = {
    simpleName: 'FlowOrPhrasingOrMetaDataContent',
    kind: 'interface',
    interfaces: [Tag]
  };
  function SectioningOrFlowContent() {
  }
  SectioningOrFlowContent.$metadata$ = {
    simpleName: 'SectioningOrFlowContent',
    kind: 'interface',
    interfaces: [Tag]
  };
  function FlowOrInteractiveOrPhrasingContent() {
  }
  FlowOrInteractiveOrPhrasingContent.$metadata$ = {
    simpleName: 'FlowOrInteractiveOrPhrasingContent',
    kind: 'interface',
    interfaces: [Tag]
  };
  function DIV(initialAttributes, consumer) {
    HTMLTag.call(this, 'div', consumer, initialAttributes, null, false, false);
    this.consumer_2 = consumer;
  }
  DIV.prototype._get_consumer__1060829845_hjl9jp_k$ = function () {
    return this.consumer_2;
  };
  DIV.$metadata$ = {
    simpleName: 'DIV',
    kind: 'class',
    interfaces: [HtmlBlockTag]
  };
  function IMG(initialAttributes, consumer) {
    HTMLTag.call(this, 'img', consumer, initialAttributes, null, true, true);
    this.consumer_2 = consumer;
  }
  IMG.prototype._get_consumer__1060829845_hjl9jp_k$ = function () {
    return this.consumer_2;
  };
  IMG.prototype._set_src__296277409_u0oimn_k$ = function (newValue) {
    _get_attributeStringString__4203734355().set_r65rse_k$(this, 'src', newValue);
  };
  IMG.$metadata$ = {
    simpleName: 'IMG',
    kind: 'class',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent]
  };
  function HTMLTag$attributes$lambda(this$0) {
    return function () {
      return this$0._get_consumer__1060829845_hjl9jp_k$();
    };
  }
  function HTMLTag(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag) {
    this.tagName_1 = tagName;
    this.consumer_1 = consumer;
    this.namespace_1 = namespace;
    this.inlineTag_1 = inlineTag;
    this.emptyTag_1 = emptyTag;
    var tmp = this;
    tmp.attributes_1 = new DelegatingMap(initialAttributes, this, HTMLTag$attributes$lambda(this));
  }
  HTMLTag.prototype._get_tagName__1345925740_m9buy4_k$ = function () {
    return this.tagName_1;
  };
  HTMLTag.prototype._get_consumer__1060829845_hjl9jp_k$ = function () {
    return this.consumer_1;
  };
  HTMLTag.prototype._get_namespace__3151251542_iwxsq2_k$ = function () {
    return this.namespace_1;
  };
  HTMLTag.prototype._get_attributes__2098778644_ypk3ys_k$ = function () {
    return this.attributes_1;
  };
  HTMLTag.prototype._get_attributesEntries__1255015224_kr7by0_k$ = function () {
    return this._get_attributes__2098778644_ypk3ys_k$()._get_immutableEntries__1785007069_tiqw9p_k$();
  };
  HTMLTag.$metadata$ = {
    simpleName: 'HTMLTag',
    kind: 'class',
    interfaces: [Tag]
  };
  function append(_this__1828080292, block) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = ArrayList_init_$Create$();
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp = createTree(_get_ownerDocumentExt__807464664(_this__1828080292));
        block(onFinalize(tmp, append$lambda(tmp0_let_0, _this__1828080292)));
        tmp$ret$0 = tmp0_let_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function createTree(_this__1828080292) {
    return new JSDOMBuilder(_this__1828080292);
  }
  function _get_ownerDocumentExt__807464664(_this__1828080292) {
    var tmp;
    if (_this__1828080292 instanceof Document) {
      tmp = _this__1828080292;
    } else {
      {
        var tmp0_elvis_lhs = _this__1828080292.ownerDocument;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('Node has no ownerDocument');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      }
    }
    return tmp;
  }
  function asR(_this__1828080292, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function JSDOMBuilder(document) {
    this.document_1 = document;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp.path_1 = tmp$ret$0;
    this.lastLeaved_1 = null;
  }
  JSDOMBuilder.prototype.onTagStart_jhb705_k$ = function (tag) {
    var tmp;
    if (!(tag._get_namespace__3151251542_iwxsq2_k$() == null)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_asDynamic_0 = this.document_1.createElementNS(ensureNotNull(tag._get_namespace__3151251542_iwxsq2_k$()), tag._get_tagName__1345925740_m9buy4_k$());
        tmp$ret$0 = tmp0_asDynamic_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp_0 = this.document_1.createElement(tag._get_tagName__1345925740_m9buy4_k$());
      tmp = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    }
    var element = tmp;
    {
      var tmp1_forEach_0 = tag._get_attributesEntries__1255015224_kr7by0_k$();
      var tmp0_iterator_1 = tmp1_forEach_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        {
          element.setAttribute(element_2._get_key__857139730_e6bh8y_k$(), element_2._get_value__3683422336_a43j40_k$());
        }
      }
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp2_isNotEmpty_0 = this.path_1;
      tmp$ret$1 = !tmp2_isNotEmpty_0.isEmpty_y1axqb_k$();
      break $l$block_0;
    }
    if (tmp$ret$1) {
      last(this.path_1).appendChild(element);
      Unit_getInstance();
    } else {
    }
    this.path_1.add_1j60pz_k$(element);
    Unit_getInstance();
  };
  JSDOMBuilder.prototype.onTagAttributeChange_agii2c_k$ = function (tag, attribute, value) {
    if (this.path_1.isEmpty_y1axqb_k$())
      throw IllegalStateException_init_$Create$('No current tag');
    else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_toLowerCase_0 = last(this.path_1).tagName;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_toLowerCase_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.toLowerCase();
        break $l$block_0;
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_toLowerCase_0 = tag._get_tagName__1345925740_m9buy4_k$();
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = tmp1_toLowerCase_0;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2.toLowerCase();
        break $l$block_2;
      }
      if (!(tmp === tmp$ret$3))
        throw IllegalStateException_init_$Create$('Wrong current tag');
      else {
        {
          var tmp$ret$4;
          $l$block_3: {
            var tmp2_let_0 = last(this.path_1);
            {
            }
            var tmp_0;
            if (value == null) {
              tmp_0 = tmp2_let_0.removeAttribute(attribute);
            } else {
              tmp_0 = tmp2_let_0.setAttribute(attribute, value);
            }
            tmp$ret$4 = tmp_0;
            break $l$block_3;
          }
        }
      }
    }
  };
  JSDOMBuilder.prototype.onTagEvent_ll97zc_k$ = function (tag, event, value) {
    if (this.path_1.isEmpty_y1axqb_k$())
      throw IllegalStateException_init_$Create$('No current tag');
    else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_toLowerCase_0 = last(this.path_1).tagName;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_toLowerCase_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.toLowerCase();
        break $l$block_0;
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_toLowerCase_0 = tag._get_tagName__1345925740_m9buy4_k$();
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = tmp1_toLowerCase_0;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2.toLowerCase();
        break $l$block_2;
      }
      if (!(tmp === tmp$ret$3))
        throw IllegalStateException_init_$Create$('Wrong current tag');
      else {
        {
          var tmp2_setEvent_0 = last(this.path_1);
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = tmp2_setEvent_0;
            break $l$block_3;
          }
          tmp$ret$4[event] = value;
        }
      }
    }
  };
  JSDOMBuilder.prototype.onTagEnd_f3ehek_k$ = function (tag) {
    var tmp;
    if (this.path_1.isEmpty_y1axqb_k$()) {
      tmp = true;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_toLowerCase_0 = last(this.path_1).tagName;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_toLowerCase_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.toLowerCase();
        break $l$block_0;
      }
      var tmp_0 = tmp$ret$1;
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_toLowerCase_0 = tag._get_tagName__1345925740_m9buy4_k$();
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = tmp1_toLowerCase_0;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2.toLowerCase();
        break $l$block_2;
      }
      tmp = !(tmp_0 === tmp$ret$3);
    }
    if (tmp) {
      throw IllegalStateException_init_$Create$("We haven't entered tag " + tag._get_tagName__1345925740_m9buy4_k$() + ' but trying to leave');
    } else {
    }
    this.lastLeaved_1 = this.path_1.removeAt_qvpkxi_k$(_get_lastIndex__339712501(this.path_1));
  };
  JSDOMBuilder.prototype.finalize_b9lof6_k$ = function () {
    var tmp0_safe_receiver = this.lastLeaved_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : asR(tmp0_safe_receiver, this);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("We can't finalize as there was no tags");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  JSDOMBuilder.$metadata$ = {
    simpleName: 'JSDOMBuilder',
    kind: 'class',
    interfaces: [TagConsumer]
  };
  function append$lambda($tmp0_let_0, $this_append) {
    return function (it, partial) {
      var tmp;
      if (!partial) {
        $tmp0_let_0.add_1j60pz_k$(it);
        Unit_getInstance();
        $this_append.appendChild(it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _set_onClickFunction__3534137028(_this__1828080292, newValue) {
    _this__1828080292._get_consumer__1060829845_hjl9jp_k$().onTagEvent_ll97zc_k$(_this__1828080292, 'onclick', newValue);
  }
  function visitTagAndFinalize(_this__1828080292, consumer, block) {
    if (!(_this__1828080292._get_consumer__1060829845_hjl9jp_k$() === consumer)) {
      throw IllegalArgumentException_init_$Create$('Wrong exception');
    }
    visitTag(_this__1828080292, block);
    return consumer.finalize_b9lof6_k$();
  }
  function visitTag(_this__1828080292, block) {
    _this__1828080292._get_consumer__1060829845_hjl9jp_k$().onTagStart_jhb705_k$(_this__1828080292);
    try {
      block(_this__1828080292);
    } catch ($p) {
      if ($p instanceof Error) {
        _this__1828080292._get_consumer__1060829845_hjl9jp_k$().onTagError_d07vof_k$(_this__1828080292, $p);
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      _this__1828080292._get_consumer__1060829845_hjl9jp_k$().onTagEnd_f3ehek_k$(_this__1828080292);
    }
  }
  //region block: post-declaration
  StringEncoder.prototype.empty_mnkn29_k$ = empty;
  BooleanEncoder.prototype.empty_mnkn29_k$ = empty;
  TickerEncoder.prototype.empty_mnkn29_k$ = empty;
  EnumEncoder.prototype.empty_mnkn29_k$ = empty;
  JSDOMBuilder.prototype.onTagError_d07vof_k$ = onTagError;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.append = append;
  _.$crossModule$._set_onClickFunction__3534137028 = _set_onClickFunction__3534137028;
  _.$crossModule$.DIV = DIV;
  _.$crossModule$.IMG = IMG;
  _.$crossModule$.attributesMapOf = attributesMapOf_0;
  _.$crossModule$.attributesMapOf_1 = attributesMapOf;
  _.$crossModule$._get_classes__2818451371 = _get_classes__2818451371;
  _.$crossModule$._set_classes__72476703 = _set_classes__72476703;
  _.$crossModule$._set_style__1257298356 = _set_style__1257298356;
  _.$crossModule$.visitTagAndFinalize = visitTagAndFinalize;
  _.$crossModule$.visitTag = visitTag;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_html.js.map