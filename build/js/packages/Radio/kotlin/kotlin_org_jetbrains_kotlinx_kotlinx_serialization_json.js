(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'), require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  //region block: imports
  var imul = Math.imul;
  var _get_EmptySerializersModule__1292120011 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_EmptySerializersModule__1292120011;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.StringFormat;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.Decoder;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.CompositeDecoder;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$crossModule$.StringBuilder_init_$Create$;
  var _Char___init__impl__380027157 = kotlin_kotlin.$crossModule$._Char___init__impl__380027157;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var hashCode = kotlin_kotlin.$crossModule$.hashCode;
  var joinToString$default = kotlin_kotlin.$crossModule$.joinToString$default;
  var Map = kotlin_kotlin.$crossModule$.Map;
  var List = kotlin_kotlin.$crossModule$.List;
  var toString = kotlin_kotlin.$crossModule$.toString_1;
  var getKClassFromExpression = kotlin_kotlin.$crossModule$.getKClassFromExpression;
  var getStringHashCode = kotlin_kotlin.$crossModule$.getStringHashCode;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$crossModule$.LazyThreadSafetyMode_PUBLICATION_getInstance;
  var lazy = kotlin_kotlin.$crossModule$.lazy;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializerFactory;
  var toInt = kotlin_kotlin.$crossModule$.toInt;
  var toLong = kotlin_kotlin.$crossModule$.toLong_1;
  var toDouble = kotlin_kotlin.$crossModule$.toDouble;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$_1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SEALED_getInstance;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.buildSerialDescriptor$default;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.KSerializer;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.STRING_getInstance;
  var StringCompanionObject_getInstance = kotlin_kotlin.$crossModule$.StringCompanionObject_getInstance;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.serializer;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.MapSerializer;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerialDescriptor;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ListSerializer;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ENUM_getInstance;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PrimitiveSerialDescriptor;
  var isInterface = kotlin_kotlin.$crossModule$.isInterface;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$crossModule$.IllegalStateException_init_$Create$;
  var lazy_0 = kotlin_kotlin.$crossModule$.lazy_1;
  var _get_isNullable__336674624 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_isNullable__336674624;
  var _get_isInline__2852845512 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_isInline__2852845512;
  var _get_annotations__1905959661 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$._get_annotations__1905959661;
  var KProperty1 = kotlin_kotlin.$crossModule$.KProperty1;
  var getPropertyCallableRef = kotlin_kotlin.$crossModule$.getPropertyCallableRef;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.ElementMarker;
  var captureStack = kotlin_kotlin.$crossModule$.captureStack;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationException;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.SerializationException_init_$Init$;
  var charSequenceLength = kotlin_kotlin.$crossModule$.charSequenceLength;
  var charSequenceSubSequence = kotlin_kotlin.$crossModule$.charSequenceSubSequence;
  var coerceAtLeast = kotlin_kotlin.$crossModule$.coerceAtLeast;
  var coerceAtMost = kotlin_kotlin.$crossModule$.coerceAtMost;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.Companion_getInstance;
  var ArrayList_init_$Create$ = kotlin_kotlin.$crossModule$.ArrayList_init_$Create$_1;
  var singleOrNull = kotlin_kotlin.$crossModule$.singleOrNull;
  var arrayIterator = kotlin_kotlin.$crossModule$.arrayIterator;
  var ensureNotNull = kotlin_kotlin.$crossModule$.ensureNotNull;
  var emptyMap = kotlin_kotlin.$crossModule$.emptyMap;
  var getValue = kotlin_kotlin.$crossModule$.getValue;
  var copyOf = kotlin_kotlin.$crossModule$.copyOf_7;
  var copyOf_0 = kotlin_kotlin.$crossModule$.copyOf_8;
  var fillArrayVal = kotlin_kotlin.$crossModule$.fillArrayVal;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.LIST_getInstance;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$crossModule$.LinkedHashMap_init_$Create$_1;
  var DeepRecursiveFunction = kotlin_kotlin.$crossModule$.DeepRecursiveFunction;
  var invoke = kotlin_kotlin.$crossModule$.invoke;
  var CoroutineImpl = kotlin_kotlin.$crossModule$.CoroutineImpl;
  var DeepRecursiveScope = kotlin_kotlin.$crossModule$.DeepRecursiveScope;
  var Unit = kotlin_kotlin.$crossModule$.Unit;
  var _get_COROUTINE_SUSPENDED__2870145053 = kotlin_kotlin.$crossModule$._get_COROUTINE_SUSPENDED__2870145053;
  var SuspendFunction2 = kotlin_kotlin.$crossModule$.SuspendFunction2;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.AbstractPolymorphicSerializer;
  var getKClass = kotlin_kotlin.$crossModule$.getKClass;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.DeserializationStrategy;
  var isObject = kotlin_kotlin.$crossModule$.isObject;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.AbstractDecoder;
  var plus = kotlin_kotlin.$crossModule$.plus_2;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.MissingFieldException;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeSerializableElement$default;
  var toLong_0 = kotlin_kotlin.$crossModule$.toLong;
  var IllegalArgumentException = kotlin_kotlin.$crossModule$.IllegalArgumentException;
  var isFinite = kotlin_kotlin.$crossModule$.isFinite_1;
  var isFinite_0 = kotlin_kotlin.$crossModule$.isFinite;
  var charSequenceGet = kotlin_kotlin.$crossModule$.charSequenceGet;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeSequentially;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.decodeCollectionSize;
  var numberToChar = kotlin_kotlin.$crossModule$.numberToChar;
  var Char__toInt_impl_2402388783 = kotlin_kotlin.$crossModule$.Char__toInt_impl_2402388783;
  var equals_0 = kotlin_kotlin.$crossModule$.equals_1;
  var Char = kotlin_kotlin.$crossModule$.Char;
  var toByte = kotlin_kotlin.$crossModule$.toByte;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.NamedValueDecoder;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PolymorphicKind;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.PrimitiveKind;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.MAP_getInstance;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$crossModule$.IllegalArgumentException_init_$Create$;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$crossModule$.ByteCompanionObject_getInstance;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$crossModule$.ShortCompanionObject_getInstance;
  var toShort = kotlin_kotlin.$crossModule$.toShort;
  var single = kotlin_kotlin.$crossModule$.single;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.jsonCachedSerialNames;
  var emptySet = kotlin_kotlin.$crossModule$.emptySet;
  var plus_0 = kotlin_kotlin.$crossModule$.plus;
  var toList = kotlin_kotlin.$crossModule$.toList;
  var Enum = kotlin_kotlin.$crossModule$.Enum;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.getContextualDescriptor;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$crossModule$.CONTEXTUAL_getInstance;
  var toString_0 = kotlin_kotlin.$crossModule$.toString;
  var last = kotlin_kotlin.$crossModule$.last;
  var removeLast = kotlin_kotlin.$crossModule$.removeLast;
  var lastIndexOf$default = kotlin_kotlin.$crossModule$.lastIndexOf$default;
  var Long = kotlin_kotlin.$crossModule$.Long;
  var Char__minus_impl_3686210483 = kotlin_kotlin.$crossModule$.Char__minus_impl_3686210483;
  var Companion_getInstance_0 = kotlin_kotlin.$crossModule$.Companion_getInstance_1;
  var charArray = kotlin_kotlin.$crossModule$.charArray;
  var indexOf$default = kotlin_kotlin.$crossModule$.indexOf$default_1;
  var HashMap_init_$Create$ = kotlin_kotlin.$crossModule$.HashMap_init_$Create$;
  //endregion
  'use strict';
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), _get_EmptySerializersModule__1292120011());
  }
  Default.$metadata$ = {
    simpleName: 'Default',
    kind: 'object',
    interfaces: []
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.configuration_1 = configuration;
    this.serializersModule_1 = serializersModule;
    this._schemaCache_1 = new DescriptorSchemaCache();
  }
  Json.prototype._get_configuration__311089819_557qfv_k$ = function () {
    return this.configuration_1;
  };
  Json.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  Json.prototype._get__schemaCache__4146643177_2gb3mf_k$ = function () {
    return this._schemaCache_1;
  };
  Json.prototype.decodeFromString_ink0ik_k$ = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer._get_descriptor__684124924_bbb664_k$());
    var result = input.decodeSerializableValue_xpp80o_k$(deserializer);
    lexer.expectEof_2xcy36_k$();
    return result;
  };
  Json.$metadata$ = {
    simpleName: 'Json',
    kind: 'class',
    interfaces: [StringFormat]
  };
  function JsonClassDiscriminator() {
  }
  JsonClassDiscriminator.prototype._get_discriminator__2118466997_z1a3lh_k$ = function () {
    return this.discriminator_1;
  };
  JsonClassDiscriminator.$metadata$ = {
    simpleName: 'JsonClassDiscriminator',
    kind: 'class',
    interfaces: [Annotation]
  };
  function JsonNames() {
  }
  JsonNames.prototype._get_names__3454403977_dwg6t3_k$ = function () {
    return this.names_1;
  };
  JsonNames.$metadata$ = {
    simpleName: 'JsonNames',
    kind: 'class',
    interfaces: [Annotation]
  };
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.encodeDefaults_1 = encodeDefaults;
    this.ignoreUnknownKeys_1 = ignoreUnknownKeys;
    this.isLenient_1 = isLenient;
    this.allowStructuredMapKeys_1 = allowStructuredMapKeys;
    this.prettyPrint_1 = prettyPrint;
    this.explicitNulls_1 = explicitNulls;
    this.prettyPrintIndent_1 = prettyPrintIndent;
    this.coerceInputValues_1 = coerceInputValues;
    this.useArrayPolymorphism_1 = useArrayPolymorphism;
    this.classDiscriminator_1 = classDiscriminator;
    this.allowSpecialFloatingPointValues_1 = allowSpecialFloatingPointValues;
    this.useAlternativeNames_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype._get_ignoreUnknownKeys__4153108645_2cgiu3_k$ = function () {
    return this.ignoreUnknownKeys_1;
  };
  JsonConfiguration.prototype._get_isLenient__4131730692_2p6q64_k$ = function () {
    return this.isLenient_1;
  };
  JsonConfiguration.prototype._get_allowStructuredMapKeys__141016373_2bygxh_k$ = function () {
    return this.allowStructuredMapKeys_1;
  };
  JsonConfiguration.prototype._get_explicitNulls__3748731353_917qcn_k$ = function () {
    return this.explicitNulls_1;
  };
  JsonConfiguration.prototype._get_coerceInputValues__1564306208_pvcie8_k$ = function () {
    return this.coerceInputValues_1;
  };
  JsonConfiguration.prototype._get_useArrayPolymorphism__4259793650_kxw5q_k$ = function () {
    return this.useArrayPolymorphism_1;
  };
  JsonConfiguration.prototype._get_classDiscriminator__1173799943_jeultz_k$ = function () {
    return this.classDiscriminator_1;
  };
  JsonConfiguration.prototype._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$ = function () {
    return this.allowSpecialFloatingPointValues_1;
  };
  JsonConfiguration.prototype._get_useAlternativeNames__3550019471_cbitf5_k$ = function () {
    return this.useAlternativeNames_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.encodeDefaults_1 + ', ignoreUnknownKeys=' + this.ignoreUnknownKeys_1 + ', isLenient=' + this.isLenient_1 + ', ' + ('allowStructuredMapKeys=' + this.allowStructuredMapKeys_1 + ', prettyPrint=' + this.prettyPrint_1 + ', explicitNulls=' + this.explicitNulls_1 + ', ') + ("prettyPrintIndent='" + this.prettyPrintIndent_1 + "', coerceInputValues=" + this.coerceInputValues_1 + ', useArrayPolymorphism=' + this.useArrayPolymorphism_1 + ', ') + ("classDiscriminator='" + this.classDiscriminator_1 + "', allowSpecialFloatingPointValues=" + this.allowSpecialFloatingPointValues_1 + ')');
  };
  JsonConfiguration.$metadata$ = {
    simpleName: 'JsonConfiguration',
    kind: 'class',
    interfaces: []
  };
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = {
    simpleName: 'JsonDecoder',
    kind: 'interface',
    interfaces: [Decoder, CompositeDecoder]
  };
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_1();
  }
  JsonElement.$metadata$ = {
    simpleName: 'JsonElement',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: JsonElementSerializer_getInstance}
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonPrimitive() {
    Companion_getInstance_2();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this._get_content__1558689208_ps04ag_k$();
  };
  JsonPrimitive.$metadata$ = {
    simpleName: 'JsonPrimitive',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: JsonPrimitiveSerializer_getInstance}
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda() {
    return function (_name_for_destructuring_parameter_0__1970834502) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _name_for_destructuring_parameter_0__1970834502._get_key__857139730_e6bh8y_k$();
        break $l$block;
      }
      var k = tmp$ret$0;
      Unit_getInstance();
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _name_for_destructuring_parameter_0__1970834502._get_value__3683422336_a43j40_k$();
        break $l$block_0;
      }
      var v = tmp$ret$1;
      Unit_getInstance();
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp0_apply_0_1 = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply_0_1, k);
            tmp0_apply_0_1.append_t8oh9e_k$(_Char___init__impl__380027157(58));
            Unit_getInstance();
            tmp0_apply_0_1.append_t8pm91_k$(v);
            Unit_getInstance();
          }
          tmp$ret$2 = tmp0_apply_0_1;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2.toString();
        break $l$block_2;
      }
      return tmp$ret$3;
    };
  }
  function JsonObject(content) {
    Companion_getInstance_3();
    JsonElement.call(this);
    this.content_1 = content;
  }
  JsonObject.prototype._get_entries__31877249_iz8n5_k$ = function () {
    return this.content_1._get_entries__31877249_iz8n5_k$();
  };
  JsonObject.prototype._get_keys__801529559_d97k5z_k$ = function () {
    return this.content_1._get_keys__801529559_d97k5z_k$();
  };
  JsonObject.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.content_1._get_size__809037418_ddoh9m_k$();
  };
  JsonObject.prototype.containsKey_mw51tt_k$ = function (key) {
    return this.content_1.containsKey_wgk31w_k$(key);
  };
  JsonObject.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    else {
    }
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.get_4u8u51_k$ = function (key) {
    return this.content_1.get_1mhr4y_k$(key);
  };
  JsonObject.prototype.get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.content_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.content_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.content_1._get_entries__31877249_iz8n5_k$();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda(), 24, null);
  };
  JsonObject.$metadata$ = {
    simpleName: 'JsonObject',
    kind: 'class',
    interfaces: [Map],
    associatedObjects: {0: JsonObjectSerializer_getInstance}
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_4();
    JsonElement.call(this);
    this.content_1 = content;
  }
  JsonArray.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.content_1._get_size__809037418_ddoh9m_k$();
  };
  JsonArray.prototype.containsAll_o6wx2e_k$ = function (elements) {
    return this.content_1.containsAll_jr3fla_k$(elements);
  };
  JsonArray.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_o6wx2e_k$(elements);
  };
  JsonArray.prototype.get_fkrdnv_k$ = function (index) {
    return this.content_1.get_fkrdnv_k$(index);
  };
  JsonArray.prototype.isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  JsonArray.prototype.iterator_jk1svi_k$ = function () {
    return this.content_1.iterator_jk1svi_k$();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.content_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.content_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.content_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = {
    simpleName: 'JsonArray',
    kind: 'class',
    interfaces: [List],
    associatedObjects: {0: JsonArraySerializer_getInstance}
  };
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.isString_1 = isString;
    this.content_1 = toString(body);
  }
  JsonLiteral.prototype._get_isString__3315263824_g7ag1c_k$ = function () {
    return this.isString_1;
  };
  JsonLiteral.prototype._get_content__1558689208_ps04ag_k$ = function () {
    return this.content_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.isString_1) {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0_1 = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply_0_1, this.content_1);
          }
          tmp$ret$0 = tmp0_apply_0_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.toString();
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = this.content_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this.isString_1 === other.isString_1))
      return false;
    if (!(this.content_1 === other.content_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.isString_1 | 0;
    result = imul(31, result) + getStringHashCode(this.content_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = {
    simpleName: 'JsonLiteral',
    kind: 'class',
    interfaces: []
  };
  function JsonNull$$cachedSerializer$delegate$_anonymous__3817836111() {
    return function () {
      return JsonNullSerializer_getInstance();
    };
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.content_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__3817836111());
  }
  JsonNull.prototype._get_content__1558689208_ps04ag_k$ = function () {
    return this.content_1;
  };
  JsonNull.prototype.serializer_9w0wvi_k$ = function () {
    return this.$cachedSerializer$delegate_1._get_value__3683422336_a43j40_k$();
  };
  JsonNull.prototype.serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  };
  JsonNull.$metadata$ = {
    simpleName: 'JsonNull',
    kind: 'object',
    interfaces: [SerializerFactory],
    associatedObjects: {0: JsonNullSerializer_getInstance}
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function _get_booleanOrNull__1934131903(_this__1828080292) {
    return toBooleanStrictOrNull(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_int__857088642(_this__1828080292) {
    return toInt(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_long__802740047(_this__1828080292) {
    return toLong(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_float__3235585269(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_toFloat_0 = _this__1828080292._get_content__1558689208_ps04ag_k$();
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0_1 = toDouble(tmp0_toFloat_0);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function _get_double__4130307418(_this__1828080292) {
    return toDouble(_this__1828080292._get_content__1558689208_ps04ag_k$());
  }
  function _get_contentOrNull__3948604750(_this__1828080292) {
    var tmp;
    if (_this__1828080292 instanceof JsonNull) {
      tmp = null;
    } else {
      {
        tmp = _this__1828080292._get_content__1558689208_ps04ag_k$();
      }
    }
    return tmp;
  }
  function _get_jsonPrimitive__1390217170(_this__1828080292) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof JsonPrimitive ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__1828080292, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__1828080292, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__1828080292) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return function () {
      return JsonPrimitiveSerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return function () {
      return JsonNullSerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return function () {
      return JsonLiteralSerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return function () {
      return JsonObjectSerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return function () {
      return JsonArraySerializer_getInstance().descriptor_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda() {
    return function ($this$buildSerialDescriptor) {
      var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonPrimitive', tmp, null, false, 12, null);
      var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonNull', tmp_0, null, false, 12, null);
      var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonLiteral', tmp_1, null, false, 12, null);
      var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonObject', tmp_2, null, false, 12, null);
      var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3());
      $this$buildSerialDescriptor.element$default_m7h690_k$('JsonArray', tmp_3, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda(), 4, null);
  }
  JsonElementSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonElementSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.decodeJsonElement_6lz9ye_k$();
  };
  JsonElementSerializer.$metadata$ = {
    simpleName: 'JsonElementSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonPrimitiveSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_6lz9ye_k$();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    else {
    }
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = {
    simpleName: 'JsonPrimitiveSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.$$delegate_0__1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance())._get_descriptor__684124924_bbb664_k$();
    this.serialName_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    return this.$$delegate_0__1._get_annotations__1905959661_virbvx_k$();
  };
  JsonObjectDescriptor.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.$$delegate_0__1._get_elementsCount__2919979385_mqmrgn_k$();
  };
  JsonObjectDescriptor.prototype._get_isInline__2852845512_nuloag_k$ = function () {
    return this.$$delegate_0__1._get_isInline__2852845512_nuloag_k$();
  };
  JsonObjectDescriptor.prototype._get_isNullable__336674624_5kg3sw_k$ = function () {
    return this.$$delegate_0__1._get_isNullable__336674624_5kg3sw_k$();
  };
  JsonObjectDescriptor.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return this.$$delegate_0__1._get_kind__801637687_d99vlj_k$();
  };
  JsonObjectDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.$$delegate_0__1.getElementAnnotations_a57oar_k$(index);
  };
  JsonObjectDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.$$delegate_0__1.getElementDescriptor_sqz94k_k$(index);
  };
  JsonObjectDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.$$delegate_0__1.getElementIndex_2hwbkl_k$(name);
  };
  JsonObjectDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.$$delegate_0__1.getElementName_ykpypc_k$(index);
  };
  JsonObjectDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.$$delegate_0__1.isElementOptional_c3hgb3_k$(index);
  };
  JsonObjectDescriptor.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  JsonObjectDescriptor.$metadata$ = {
    simpleName: 'JsonObjectDescriptor',
    kind: 'object',
    interfaces: [SerialDescriptor]
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.descriptor_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonObjectSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
  };
  JsonObjectSerializer.$metadata$ = {
    simpleName: 'JsonObjectSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.$$delegate_0__1 = ListSerializer(JsonElementSerializer_getInstance())._get_descriptor__684124924_bbb664_k$();
    this.serialName_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype._get_annotations__1905959661_virbvx_k$ = function () {
    return this.$$delegate_0__1._get_annotations__1905959661_virbvx_k$();
  };
  JsonArrayDescriptor.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return this.$$delegate_0__1._get_elementsCount__2919979385_mqmrgn_k$();
  };
  JsonArrayDescriptor.prototype._get_isInline__2852845512_nuloag_k$ = function () {
    return this.$$delegate_0__1._get_isInline__2852845512_nuloag_k$();
  };
  JsonArrayDescriptor.prototype._get_isNullable__336674624_5kg3sw_k$ = function () {
    return this.$$delegate_0__1._get_isNullable__336674624_5kg3sw_k$();
  };
  JsonArrayDescriptor.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return this.$$delegate_0__1._get_kind__801637687_d99vlj_k$();
  };
  JsonArrayDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.$$delegate_0__1.getElementAnnotations_a57oar_k$(index);
  };
  JsonArrayDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.$$delegate_0__1.getElementDescriptor_sqz94k_k$(index);
  };
  JsonArrayDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.$$delegate_0__1.getElementIndex_2hwbkl_k$(name);
  };
  JsonArrayDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.$$delegate_0__1.getElementName_ykpypc_k$(index);
  };
  JsonArrayDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.$$delegate_0__1.isElementOptional_c3hgb3_k$(index);
  };
  JsonArrayDescriptor.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return this.serialName_1;
  };
  JsonArrayDescriptor.$metadata$ = {
    simpleName: 'JsonArrayDescriptor',
    kind: 'object',
    interfaces: [SerialDescriptor]
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.descriptor_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonArraySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).deserialize_2t41fm_k$(decoder));
  };
  JsonArraySerializer.$metadata$ = {
    simpleName: 'JsonArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonNullSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    verify(decoder);
    if (decoder.decodeNotNullMark_us4ba1_k$()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.decodeNull_jzrmuj_k$();
    Unit_getInstance();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = {
    simpleName: 'JsonNullSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype._get_descriptor__684124924_bbb664_k$ = function () {
    return this.descriptor_1;
  };
  JsonLiteralSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_6lz9ye_k$();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    else {
    }
    return result;
  };
  JsonLiteralSerializer.$metadata$ = {
    simpleName: 'JsonLiteralSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function asJsonDecoder(_this__1828080292) {
    var tmp0_elvis_lhs = isInterface(_this__1828080292, JsonDecoder) ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__1828080292)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify(decoder) {
    asJsonDecoder(decoder);
    Unit_getInstance();
  }
  function _get_original__1282519066($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = original$factory();
      tmp$ret$0 = $this.original$delegate_1._get_value__3683422336_a43j40_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.original$delegate_1 = lazy_0($deferred);
  }
  defer$1.prototype._get_serialName__1025298892_gyfpos_k$ = function () {
    return _get_original__1282519066(this)._get_serialName__1025298892_gyfpos_k$();
  };
  defer$1.prototype._get_kind__801637687_d99vlj_k$ = function () {
    return _get_original__1282519066(this)._get_kind__801637687_d99vlj_k$();
  };
  defer$1.prototype._get_elementsCount__2919979385_mqmrgn_k$ = function () {
    return _get_original__1282519066(this)._get_elementsCount__2919979385_mqmrgn_k$();
  };
  defer$1.prototype.getElementName_ykpypc_k$ = function (index) {
    return _get_original__1282519066(this).getElementName_ykpypc_k$(index);
  };
  defer$1.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return _get_original__1282519066(this).getElementIndex_2hwbkl_k$(name);
  };
  defer$1.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return _get_original__1282519066(this).getElementAnnotations_a57oar_k$(index);
  };
  defer$1.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return _get_original__1282519066(this).getElementDescriptor_sqz94k_k$(index);
  };
  defer$1.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return _get_original__1282519066(this).isElementOptional_c3hgb3_k$(index);
  };
  defer$1.$metadata$ = {
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__1282519066(receiver);
    }, null);
  }
  function readIfAbsent($this, descriptor, index) {
    $this.isUnmarkedNull_1 = !descriptor.isElementOptional_c3hgb3_k$(index) ? descriptor.getElementDescriptor_sqz94k_k$(index)._get_isNullable__336674624_5kg3sw_k$() : false;
    return $this.isUnmarkedNull_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.origin_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.isUnmarkedNull_1 = false;
  }
  JsonElementMarker.prototype._get_isUnmarkedNull__2430853973_utuf1n_k$ = function () {
    return this.isUnmarkedNull_1;
  };
  JsonElementMarker.prototype.mark_xwbrr1_k$ = function (index) {
    this.origin_1.mark_xwbrr1_k$(index);
  };
  JsonElementMarker.prototype.nextUnmarkedIndex_u6mxd2_k$ = function () {
    return this.origin_1.nextUnmarkedIndex_u6mxd2_k$();
  };
  JsonElementMarker.$metadata$ = {
    simpleName: 'JsonElementMarker',
    kind: 'class',
    interfaces: []
  };
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = {
    simpleName: 'JsonEncodingException',
    kind: 'class',
    interfaces: []
  };
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor._get_serialName__1025298892_gyfpos_k$() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor._get_kind__801637687_d99vlj_k$() + "'.\n") + _get_allowStructuredMapKeysHint__3890899950());
  }
  function throwInvalidFloatingPointDecoded(_this__1828080292, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__1828080292.fail$default_p0pca1_k$(tmp, 0, _get_specialFlowingValuesHint__2362587175(), 2, null);
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = {
    simpleName: 'JsonDecodingException',
    kind: 'class',
    interfaces: []
  };
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (_get_ignoreUnknownKeysHint__4251639646() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = {
    simpleName: 'JsonException',
    kind: 'class',
    interfaces: []
  };
  function minify(_this__1828080292, offset) {
    if (charSequenceLength(_this__1828080292) < 200)
      return _this__1828080292;
    if (offset === -1) {
      var start = charSequenceLength(_this__1828080292) - 60 | 0;
      if (start <= 0)
        return _this__1828080292;
      var tmp$ret$0;
      $l$block: {
        var tmp0_substring_0 = charSequenceLength(_this__1828080292);
        tmp$ret$0 = toString(charSequenceSubSequence(_this__1828080292, start, tmp0_substring_0));
        break $l$block;
      }
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__1828080292) ? '' : '.....';
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_substring_0 = coerceAtLeast(start_0, 0);
      var tmp2_substring_0 = coerceAtMost(end, charSequenceLength(_this__1828080292));
      tmp$ret$1 = toString(charSequenceSubSequence(_this__1828080292, tmp1_substring_0, tmp2_substring_0));
      break $l$block_0;
    }
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__1828080292, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__1828080292, offset);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (_get_specialFlowingValuesHint__2362587175() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function _get_JsonAlternativeNamesKey__1245246965() {
    init_properties_JsonNamesMap_kt_4202451614();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function getJsonNameIndex(_this__1828080292, json, name) {
    init_properties_JsonNamesMap_kt_4202451614();
    var index = _this__1828080292.getElementIndex_2hwbkl_k$(name);
    if (!(index === Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$()))
      return index;
    if (!json._get_configuration__311089819_557qfv_k$()._get_useAlternativeNames__3550019471_cbitf5_k$())
      return index;
    var tmp = _get_schemaCache__3869482832(json);
    var tmp_0 = _get_JsonAlternativeNamesKey__1245246965();
    var alternativeNamesMap = tmp.getOrPut_2oe0zz_k$(_this__1828080292, tmp_0, buildAlternativeNamesMap$ref(_this__1828080292));
    var tmp0_elvis_lhs = alternativeNamesMap.get_1mhr4y_k$(name);
    return tmp0_elvis_lhs == null ? Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$() : tmp0_elvis_lhs;
  }
  function buildAlternativeNamesMap(_this__1828080292) {
    init_properties_JsonNamesMap_kt_4202451614();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__1828080292._get_elementsCount__2919979385_mqmrgn_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_filterIsInstance_0 = _this__1828080292.getElementAnnotations_a57oar_k$(i);
          var tmp$ret$0;
          $l$block: {
            var tmp0_filterIsInstanceTo_0_1 = ArrayList_init_$Create$();
            var tmp0_iterator_1_2 = tmp0_filterIsInstance_0.iterator_jk1svi_k$();
            while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
              var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
              if (element_2_3 instanceof JsonNames) {
                tmp0_filterIsInstanceTo_0_1.add_1j60pz_k$(element_2_3);
                Unit_getInstance();
              } else {
              }
            }
            tmp$ret$0 = tmp0_filterIsInstanceTo_0_1;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_names__3454403977_dwg6t3_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          {
            var tmp0_iterator_1 = arrayIterator(tmp2_safe_receiver);
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_2 = tmp0_iterator_1.next_20eer_k$();
              {
                if (builder == null)
                  builder = createMapForCache(_this__1828080292._get_elementsCount__2919979385_mqmrgn_k$());
                buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__1828080292, element_2, i);
              }
            }
          }
          Unit_getInstance();
        }
        Unit_getInstance();
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__1828080292, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = (isInterface(_this__1828080292, Map) ? _this__1828080292 : THROW_CCE()).containsKey_wgk31w_k$(name);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.getElementName_ykpypc_k$(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.getElementName_ykpypc_k$(getValue(_this__1828080292, name)) + ' in ' + $this_buildAlternativeNamesMap));
    } else {
    }
    {
      _this__1828080292.put_3mhbri_k$(name, index);
      Unit_getInstance();
    }
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_1302888386;
  function init_properties_JsonNamesMap_kt_4202451614() {
    if (!properties_initialized_JsonNamesMap_kt_1302888386) {
      properties_initialized_JsonNamesMap_kt_1302888386 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  Tombstone.$metadata$ = {
    simpleName: 'Tombstone',
    kind: 'object',
    interfaces: []
  };
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.currentDepth_1, 2);
    $this.currentObjectPath_1 = copyOf($this.currentObjectPath_1, newSize);
    $this.indicies_1 = copyOf_0($this.indicies_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(8), null);
      break $l$block;
    }
    tmp.currentObjectPath_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = -1;
        break $l$block_0;
      }
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.indicies_1 = tmp_3;
    this.currentDepth_1 = -1;
  }
  JsonPath.prototype.pushDescriptor_yqld09_k$ = function (sd) {
    var tmp0_this = this;
    tmp0_this.currentDepth_1 = tmp0_this.currentDepth_1 + 1 | 0;
    var depth = tmp0_this.currentDepth_1;
    if (depth === this.currentObjectPath_1.length) {
      resize(this);
    }
    this.currentObjectPath_1[depth] = sd;
  };
  JsonPath.prototype.updateDescriptorIndex_64kjsa_k$ = function (index) {
    this.indicies_1[this.currentDepth_1] = index;
  };
  JsonPath.prototype.updateCurrentMapKey_rvnz6l_k$ = function (key) {
    var tmp;
    if (!(this.indicies_1[this.currentDepth_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.currentDepth_1 = tmp0_this.currentDepth_1 + 1 | 0;
      tmp = tmp0_this.currentDepth_1 === this.currentObjectPath_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    } else {
    }
    this.currentObjectPath_1[this.currentDepth_1] = key;
    this.indicies_1[this.currentDepth_1] = -2;
  };
  JsonPath.prototype.resetCurrentMapKey_1lk2sk_k$ = function () {
    if (this.indicies_1[this.currentDepth_1] === -2) {
      this.currentObjectPath_1[this.currentDepth_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.popDescriptor_wfdf7z_k$ = function () {
    var depth = this.currentDepth_1;
    if (this.indicies_1[depth] === -2) {
      this.indicies_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentDepth_1;
      tmp0_this.currentDepth_1 = tmp1 - 1 | 0;
      Unit_getInstance();
    }
    if (!(this.currentDepth_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.currentDepth_1;
      tmp2_this.currentDepth_1 = tmp3 - 1 | 0;
      Unit_getInstance();
    }
  };
  JsonPath.prototype.getPath_18su3p_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply_0_1.append_ssq29y_k$('$');
          Unit_getInstance();
          {
            var tmp0_repeat_0_3 = this.currentDepth_1 + 1 | 0;
            {
            }
            var inductionVariable = 0;
            if (inductionVariable < tmp0_repeat_0_3)
              do {
                var index_2_5 = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                {
                  var element_4_6 = this.currentObjectPath_1[index_2_5];
                  if (!(element_4_6 == null) ? isInterface(element_4_6, SerialDescriptor) : false) {
                    if (equals(element_4_6._get_kind__801637687_d99vlj_k$(), LIST_getInstance())) {
                      if (!(this.indicies_1[index_2_5] === -1)) {
                        tmp0_apply_0_1.append_ssq29y_k$('[');
                        Unit_getInstance();
                        tmp0_apply_0_1.append_t8pm91_k$(this.indicies_1[index_2_5]);
                        Unit_getInstance();
                        tmp0_apply_0_1.append_ssq29y_k$(']');
                        Unit_getInstance();
                      }
                    } else {
                      var idx_5_7 = this.indicies_1[index_2_5];
                      if (idx_5_7 >= 0) {
                        tmp0_apply_0_1.append_ssq29y_k$('.');
                        Unit_getInstance();
                        tmp0_apply_0_1.append_ssq29y_k$(element_4_6.getElementName_ykpypc_k$(idx_5_7));
                        Unit_getInstance();
                      }
                    }
                  } else {
                    if (!(element_4_6 === Tombstone_getInstance())) {
                      tmp0_apply_0_1.append_ssq29y_k$('[');
                      Unit_getInstance();
                      tmp0_apply_0_1.append_ssq29y_k$("'");
                      Unit_getInstance();
                      tmp0_apply_0_1.append_t8pm91_k$(element_4_6);
                      Unit_getInstance();
                      tmp0_apply_0_1.append_ssq29y_k$("'");
                      Unit_getInstance();
                      tmp0_apply_0_1.append_ssq29y_k$(']');
                      Unit_getInstance();
                    } else {
                    }
                  }
                }
              }
               while (inductionVariable < tmp0_repeat_0_3);
          }
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.getPath_18su3p_k$();
  };
  JsonPath.$metadata$ = {
    simpleName: 'JsonPath',
    kind: 'class',
    interfaces: []
  };
  function readObject($this) {
    var tmp$ret$2;
    $l$block_1: {
      var lastToken_1 = $this.lexer_1.consumeNextToken_trhodc_k$(_get_TC_BEGIN_OBJ__3637395738());
      if ($this.lexer_1.peekNextToken_1gqwr9_k$() === _get_TC_COMMA__1190675334()) {
        $this.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
        break $l$block;
      }
      var result_2 = tmp$ret$0;
      $l$loop: while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
        var key_3 = $this.isLenient_1 ? $this.lexer_1.consumeStringLenient_9oypvu_k$() : $this.lexer_1.consumeString_j3j2z7_k$();
        $this.lexer_1.consumeNextToken_trhodc_k$(_get_TC_COLON__1190647868());
        Unit_getInstance();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = $this.read_22xsm_k$();
          break $l$block_0;
        }
        var element_4 = tmp$ret$1;
        {
          result_2.put_3mhbri_k$(key_3, element_4);
          Unit_getInstance();
        }
        lastToken_1 = $this.lexer_1.consumeNextToken_uf1vsa_k$();
        var tmp0_subject_5 = lastToken_1;
        if (tmp0_subject_5 === _get_TC_COMMA__1190675334())
          Unit_getInstance();
        else if (tmp0_subject_5 === _get_TC_END_OBJ__4135196520())
          break $l$loop;
        else {
          $this.lexer_1.fail$default_p0pca1_k$('Expected end of the object or comma', 0, null, 6, null);
        }
      }
      if (lastToken_1 === _get_TC_BEGIN_OBJ__3637395738()) {
        $this.lexer_1.consumeNextToken_trhodc_k$(_get_TC_END_OBJ__4135196520());
        Unit_getInstance();
      } else if (lastToken_1 === _get_TC_COMMA__1190675334()) {
        $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
      }
      tmp$ret$2 = new JsonObject(result_2);
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function readObject_0(_this__1828080292, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__1828080292, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function readArray($this) {
    var lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === _get_TC_COMMA__1190675334()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var result = tmp$ret$0;
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      var element = $this.read_22xsm_k$();
      result.add_1j60pz_k$(element);
      Unit_getInstance();
      lastToken = $this.lexer_1.consumeNextToken_uf1vsa_k$();
      if (!(lastToken === _get_TC_COMMA__1190675334())) {
        {
          var tmp0_require_0 = $this.lexer_1;
          var tmp1_require_0 = lastToken === _get_TC_END_LIST__3634487903();
          var tmp2_require_0 = tmp0_require_0._get_currentPosition__868736655_ed81hr_k$();
          if (!tmp1_require_0) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Expected end of the array or comma';
              break $l$block_0;
            }
            var tmp = tmp$ret$1;
            tmp0_require_0.fail$default_p0pca1_k$(tmp, tmp2_require_0, null, 4, null);
          }
        }
      }
    }
    if (lastToken === _get_TC_BEGIN_LIST__1087565549()) {
      $this.lexer_1.consumeNextToken_trhodc_k$(_get_TC_END_LIST__3634487903());
      Unit_getInstance();
    } else if (lastToken === _get_TC_COMMA__1190675334()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.isLenient_1 ? true : !isString) {
      tmp = $this.lexer_1.consumeStringLenient_9oypvu_k$();
    } else {
      tmp = $this.lexer_1.consumeString_j3j2z7_k$();
    }
    var string = tmp;
    if (!isString ? string === _get_NULL__774226340() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.invoke_3bmcpd_k$ = function ($this$$receiver, it, $cont) {
    var tmp = this.create_mx6x0i_k$($this$$receiver, it, $cont);
    tmp._set_result__3294305178_cat9z_k$(Unit_getInstance());
    tmp._set_exception__4196179798_3fu58l_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.invoke_3bmcpd_k$(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(3);
            this.tmp0_subject0__1 = this.this$0__1.lexer_1.peekNextToken_1gqwr9_k$();
            if (this.tmp0_subject0__1 === _get_TC_STRING__4014011024()) {
              this.WHEN_RESULT1__1 = readValue(this.this$0__1, true);
              this._set_state__1256591060_i39zdo_k$(2);
              continue $sm;
            } else {
              if (this.tmp0_subject0__1 === _get_TC_OTHER__1538686635()) {
                this.WHEN_RESULT1__1 = readValue(this.this$0__1, false);
                this._set_state__1256591060_i39zdo_k$(2);
                continue $sm;
              } else {
                if (this.tmp0_subject0__1 === _get_TC_BEGIN_OBJ__3637395738()) {
                  this._set_state__1256591060_i39zdo_k$(1);
                  suspendResult = readObject_0(this.$this$$receiver_1, this.this$0__1, this);
                  if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.tmp0_subject0__1 === _get_TC_BEGIN_LIST__1087565549()) {
                    this.WHEN_RESULT1__1 = readArray(this.this$0__1);
                    this._set_state__1256591060_i39zdo_k$(2);
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.this$0__1.lexer_1.fail$default_p0pca1_k$("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
              }
              Unit_getInstance();
            }

            break;
          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this._set_state__1256591060_i39zdo_k$(2);
            continue $sm;
          case 2:
            return this.WHEN_RESULT1__1;
          case 3:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 3) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.create_mx6x0i_k$ = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.this$0__1, completion);
    i.$this$$receiver_1 = $this$$receiver;
    i.it_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = {
    simpleName: 'JsonTreeReader$readDeepRecursive$slambda',
    kind: 'class',
    interfaces: [],
    suspendArity: [2]
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.invoke_3bmcpd_k$($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__1828080292, _this__1828080292_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__1828080292__1 = _this__1828080292;
    this._this__1828080292__2 = _this__1828080292_0;
  }
  $readObjectCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this._get_result__3382885006_f31376_k$();
    $sm: do
      try {
        var tmp = this._get_state__3614753120_b8zcm8_k$();
        switch (tmp) {
          case 0:
            this._set_exceptionState__118868437_8fc1n_k$(5);
            this.lastToken_10__1 = this._this__1828080292__1.lexer_1.consumeNextToken_trhodc_k$(_get_TC_BEGIN_OBJ__3637395738());
            if (this._this__1828080292__1.lexer_1.peekNextToken_1gqwr9_k$() === _get_TC_COMMA__1190675334()) {
              this._this__1828080292__1.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.result_21__1 = LinkedHashMap_init_$Create$();
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 1:
            if (!this._this__1828080292__1.lexer_1.canConsumeValue_oljqd7_k$()) {
              this._set_state__1256591060_i39zdo_k$(4);
              continue $sm;
            }

            this.key_32__1 = this._this__1828080292__1.isLenient_1 ? this._this__1828080292__1.lexer_1.consumeStringLenient_9oypvu_k$() : this._this__1828080292__1.lexer_1.consumeString_j3j2z7_k$();
            this._this__1828080292__1.lexer_1.consumeNextToken_trhodc_k$(_get_TC_COLON__1190647868());
            Unit_getInstance();
            this._set_state__1256591060_i39zdo_k$(2);
            suspendResult = this._this__1828080292__2.callRecursive_6euk1h_k$(Unit_getInstance(), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED__2870145053()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element_4 = suspendResult;
            this.result_21__1.put_3mhbri_k$(this.key_32__1, element_4);
            Unit_getInstance();
            this.lastToken_10__1 = this._this__1828080292__1.lexer_1.consumeNextToken_uf1vsa_k$();
            var tmp0_subject_5 = this.lastToken_10__1;
            if (tmp0_subject_5 === _get_TC_COMMA__1190675334()) {
              Unit_getInstance();
              this._set_state__1256591060_i39zdo_k$(3);
              continue $sm;
            } else {
              if (tmp0_subject_5 === _get_TC_END_OBJ__4135196520()) {
                this._set_state__1256591060_i39zdo_k$(4);
                continue $sm;
              } else {
                this._this__1828080292__1.lexer_1.fail$default_p0pca1_k$('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this._set_state__1256591060_i39zdo_k$(1);
            continue $sm;
          case 4:
            if (this.lastToken_10__1 === _get_TC_BEGIN_OBJ__3637395738()) {
              this._this__1828080292__1.lexer_1.consumeNextToken_trhodc_k$(_get_TC_END_OBJ__4135196520());
              Unit_getInstance();
            } else if (this.lastToken_10__1 === _get_TC_COMMA__1190675334()) {
              this._this__1828080292__1.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.result_21__1);
          case 5:
            throw this._get_exception__1672948706_ro13he_k$();
        }
      } catch ($p) {
        if (this._get_exceptionState__1662596297_rhv7ih_k$() === 5) {
          throw $p;
        } else {
          this._set_state__1256591060_i39zdo_k$(this._get_exceptionState__1662596297_rhv7ih_k$());
          this._set_exception__4196179798_3fu58l_k$($p);
        }
      }
     while (true);
  };
  $readObjectCOROUTINE$0.$metadata$ = {
    simpleName: '$readObjectCOROUTINE$0',
    kind: 'class',
    interfaces: []
  };
  function JsonTreeReader(configuration, lexer) {
    this.lexer_1 = lexer;
    this.isLenient_1 = configuration._get_isLenient__4131730692_2p6q64_k$();
    this.stackDepth_1 = 0;
  }
  JsonTreeReader.prototype.read_22xsm_k$ = function () {
    var token = this.lexer_1.peekNextToken_1gqwr9_k$();
    var tmp;
    if (token === _get_TC_STRING__4014011024()) {
      tmp = readValue(this, true);
    } else if (token === _get_TC_OTHER__1538686635()) {
      tmp = readValue(this, false);
    } else if (token === _get_TC_BEGIN_OBJ__3637395738()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.stackDepth_1 = tmp0_this.stackDepth_1 + 1 | 0;
      if (tmp0_this.stackDepth_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        {
          tmp_0 = readObject(this);
        }
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.stackDepth_1 = tmp1_this.stackDepth_1 - 1 | 0;
      Unit_getInstance();
      tmp = result;
    } else if (token === _get_TC_BEGIN_LIST__1087565549()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.lexer_1.fail$default_p0pca1_k$(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = {
    simpleName: 'JsonTreeReader',
    kind: 'class',
    interfaces: []
  };
  function decodeSerializableValuePolymorphic(_this__1828080292, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      {
        tmp = _this__1828080292._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_useArrayPolymorphism__4259793650_kxw5q_k$();
      }
    }
    if (tmp) {
      return deserializer.deserialize_2t41fm_k$(_this__1828080292);
    } else {
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_cast_0 = _this__1828080292.decodeJsonElement_6lz9ye_k$();
      var tmp1_cast_0 = deserializer._get_descriptor__684124924_bbb664_k$();
      if (!(tmp0_cast_0 instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast_0._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(tmp0_cast_0));
      } else {
      }
      tmp$ret$0 = tmp0_cast_0;
      break $l$block;
    }
    var jsonTree = tmp$ret$0;
    var discriminator = classDiscriminator(deserializer._get_descriptor__684124924_bbb664_k$(), _this__1828080292._get_json__801013347_d8whur_k$());
    var tmp0_safe_receiver = jsonTree.get_4u8u51_k$(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : _get_jsonPrimitive__1390217170(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_content__1558689208_ps04ag_k$();
    var tmp2_elvis_lhs = deserializer.findPolymorphicSerializerOrNull_e7t5h9_k$(_this__1828080292, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__1828080292._get_json__801013347_d8whur_k$();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function classDiscriminator(_this__1828080292, json) {
    var tmp0_iterator = _this__1828080292._get_annotations__1905959661_virbvx_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var annotation = tmp0_iterator.next_20eer_k$();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation._get_discriminator__2118466997_z1a3lh_k$();
      else {
      }
    }
    return json._get_configuration__311089819_557qfv_k$()._get_classDiscriminator__1173799943_jeultz_k$();
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function Key() {
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'class',
    interfaces: []
  };
  function DescriptorSchemaCache() {
    this.map_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.set_h659ud_k$ = function (descriptor, key, value) {
    {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_getOrPut_0 = this.map_1;
        var value_1 = tmp0_getOrPut_0.get_1mhr4y_k$(descriptor);
        var tmp;
        if (value_1 == null) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = createMapForCache(1);
            break $l$block;
          }
          var answer_2 = tmp$ret$0;
          tmp0_getOrPut_0.put_3mhbri_k$(descriptor, answer_2);
          Unit_getInstance();
          tmp = answer_2;
        } else {
          tmp = value_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      var tmp1_set_0 = tmp$ret$1;
      var tmp2_set_0 = key instanceof Key ? key : THROW_CCE();
      var tmp3_set_0 = isObject(value) ? value : THROW_CCE();
      tmp1_set_0.put_3mhbri_k$(tmp2_set_0, tmp3_set_0);
      Unit_getInstance();
    }
  };
  DescriptorSchemaCache.prototype.getOrPut_2oe0zz_k$ = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.get_eg3l1p_k$(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return tmp0_safe_receiver;
      }
    }
    Unit_getInstance();
    var value = defaultValue();
    this.set_h659ud_k$(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.get_eg3l1p_k$ = function (descriptor, key) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.get_1mhr4y_k$(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = {
    simpleName: 'DescriptorSchemaCache',
    kind: 'class',
    interfaces: []
  };
  function skipLeftoverElements($this, descriptor) {
    while (!($this.decodeElementIndex_nk5a2l_k$(descriptor) === Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$())) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.lexer_1.peekNextToken_1gqwr9_k$() === _get_TC_COMMA__1190675334()) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !($this.currentIndex_1 % 2 === 0);
    if (decodingKey) {
      if (!($this.currentIndex_1 === -1)) {
        hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
      }
    } else {
      $this.lexer_1.consumeNextToken_ev7fkz_k$(_get_COLON__2205721714());
    }
    var tmp;
    if ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      if (decodingKey) {
        if ($this.currentIndex_1 === -1) {
          var tmp0_require_0 = $this.lexer_1;
          var tmp1_require_0 = !hasComma;
          var tmp2_require_0 = tmp0_require_0._get_currentPosition__868736655_ed81hr_k$();
          if (!tmp1_require_0) {
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = 'Unexpected trailing comma';
              break $l$block;
            }
            var tmp_0 = tmp$ret$0;
            tmp0_require_0.fail$default_p0pca1_k$(tmp_0, tmp2_require_0, null, 4, null);
          }
        } else {
          var tmp3_require_0 = $this.lexer_1;
          var tmp4_require_0 = hasComma;
          var tmp5_require_0 = tmp3_require_0._get_currentPosition__868736655_ed81hr_k$();
          if (!tmp4_require_0) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Expected comma after the key-value pair';
              break $l$block_0;
            }
            var tmp_1 = tmp$ret$1;
            tmp3_require_0.fail$default_p0pca1_k$(tmp_1, tmp5_require_0, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    } else {
      if (hasComma) {
        $this.lexer_1.fail$default_p0pca1_k$("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      tmp = Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_4: {
      var tmp0_tryCoerceValue_0 = $this.json_1;
      var tmp1_tryCoerceValue_0 = descriptor.getElementDescriptor_sqz94k_k$(index);
      var tmp;
      if (!tmp1_tryCoerceValue_0._get_isNullable__336674624_5kg3sw_k$()) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = !$this.lexer_1.tryConsumeNotNull_blklc7_k$();
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_4;
      } else {
      }
      if (equals(tmp1_tryCoerceValue_0._get_kind__801637687_d99vlj_k$(), ENUM_getInstance())) {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = $this.lexer_1.peekString_9klnyq_k$($this.configuration_1._get_isLenient__4131730692_2p6q64_k$());
          break $l$block_1;
        }
        var tmp0_elvis_lhs_3 = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs_3 == null) {
          tmp$ret$1 = false;
          break $l$block_4;
        } else {
          tmp_0 = tmp0_elvis_lhs_3;
        }
        var enumValue_2 = tmp_0;
        var enumIndex_4 = getJsonNameIndex(tmp1_tryCoerceValue_0, tmp0_tryCoerceValue_0, enumValue_2);
        if (enumIndex_4 === Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$()) {
          {
            $this.lexer_1.consumeString_j3j2z7_k$();
            Unit_getInstance();
          }
          tmp$ret$1 = true;
          break $l$block_4;
        }
      }
      tmp$ret$1 = false;
      break $l$block_4;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
    while ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.lexer_1.consumeNextToken_ev7fkz_k$(_get_COLON__2205721714());
      var index = getJsonNameIndex(descriptor, $this.json_1, key);
      var tmp;
      if (!(index === Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$())) {
        var tmp_0;
        if ($this.configuration_1._get_coerceInputValues__1564306208_pvcie8_k$() ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.elementMarker_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.mark_xwbrr1_k$(index);
            Unit_getInstance();
          }
          Unit_getInstance();
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.elementMarker_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nextUnmarkedIndex_u6mxd2_k$();
    return tmp2_elvis_lhs == null ? Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$() : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.configuration_1._get_ignoreUnknownKeys__4153108645_2cgiu3_k$()) {
      $this.lexer_1.skipElement_wcp1ak_k$($this.configuration_1._get_isLenient__4131730692_2p6q64_k$());
    } else {
      $this.lexer_1.failOnUnknownKey_6lfa5c_k$(key);
    }
    return $this.lexer_1.tryConsumeComma_9n2ve4_k$();
  }
  function decodeListIndex($this) {
    var hasComma = $this.lexer_1.tryConsumeComma_9n2ve4_k$();
    var tmp;
    if ($this.lexer_1.canConsumeValue_oljqd7_k$()) {
      if (!($this.currentIndex_1 === -1) ? !hasComma : false) {
        $this.lexer_1.fail$default_p0pca1_k$('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.currentIndex_1 = tmp0_this.currentIndex_1 + 1 | 0;
      tmp = tmp0_this.currentIndex_1;
    } else {
      if (hasComma) {
        $this.lexer_1.fail$default_p0pca1_k$('Unexpected trailing comma', 0, null, 6, null);
      }
      tmp = Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.configuration_1._get_isLenient__4131730692_2p6q64_k$()) {
      tmp = $this.lexer_1.consumeStringLenientNotNull_m2rgts_k$();
    } else {
      tmp = $this.lexer_1.consumeKeyString_mfa3ws_k$();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor) {
    AbstractDecoder.call(this);
    this.json_1 = json;
    this.mode_1 = mode;
    this.lexer_1 = lexer;
    this.serializersModule_1 = this.json_1._get_serializersModule__364239364_60uww4_k$();
    this.currentIndex_1 = -1;
    this.configuration_1 = this.json_1._get_configuration__311089819_557qfv_k$();
    this.elementMarker_1 = this.configuration_1._get_explicitNulls__3748731353_917qcn_k$() ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype._get_json__801013347_d8whur_k$ = function () {
    return this.json_1;
  };
  StreamingJsonDecoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this.serializersModule_1;
  };
  StreamingJsonDecoder.prototype.decodeJsonElement_6lz9ye_k$ = function () {
    return (new JsonTreeReader(this.json_1._get_configuration__311089819_557qfv_k$(), this.lexer_1)).read_22xsm_k$();
  };
  StreamingJsonDecoder.prototype.decodeSerializableValue_xpp80o_k$ = function (deserializer) {
    try {
      return decodeSerializableValuePolymorphic(this, deserializer);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException(plus($p.message, ' at path: ') + this.lexer_1._get_path__806022854_dbvv7q_k$().getPath_18su3p_k$(), $p);
      } else {
        {
          throw $p;
        }
      }
    }
  };
  StreamingJsonDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var newMode = switchMode(this.json_1, descriptor);
    this.lexer_1._get_path__806022854_dbvv7q_k$().pushDescriptor_yqld09_k$(descriptor);
    this.lexer_1.consumeNextToken_ev7fkz_k$(newMode._get_begin__3114373192_c9kma1_k$());
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.json_1, newMode, this.lexer_1, descriptor);
        break;
      default:
        var tmp_0;
        if (this.mode_1.equals(newMode) ? this.json_1._get_configuration__311089819_557qfv_k$()._get_explicitNulls__3748731353_917qcn_k$() : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.json_1, newMode, this.lexer_1, descriptor);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    if (this.json_1._get_configuration__311089819_557qfv_k$()._get_ignoreUnknownKeys__4153108645_2cgiu3_k$() ? descriptor._get_elementsCount__2919979385_mqmrgn_k$() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.lexer_1.consumeNextToken_ev7fkz_k$(this.mode_1._get_end__856968982_ypp5lj_k$());
    this.lexer_1._get_path__806022854_dbvv7q_k$().popDescriptor_wfdf7z_k$();
  };
  StreamingJsonDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var tmp;
    var tmp0_safe_receiver = this.elementMarker_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isUnmarkedNull__2430853973_utuf1n_k$();
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.lexer_1.tryConsumeNotNull_blklc7_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.decodeSerializableElement_5lsbxj_k$ = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.mode_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.lexer_1._get_path__806022854_dbvv7q_k$().resetCurrentMapKey_1lk2sk_k$();
    }
    var value = AbstractDecoder.prototype.decodeSerializableElement_5lsbxj_k$.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.lexer_1._get_path__806022854_dbvv7q_k$().updateCurrentMapKey_rvnz6l_k$(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var tmp0_subject = this.mode_1;
    var tmp0 = tmp0_subject._get_ordinal__3363892928_fec5kw_k$();
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.mode_1.equals(WriteMode_MAP_getInstance())) {
      this.lexer_1._get_path__806022854_dbvv7q_k$().updateDescriptorIndex_64kjsa_k$(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    var tmp;
    if (this.configuration_1._get_isLenient__4131730692_2p6q64_k$()) {
      tmp = this.lexer_1.consumeBooleanLenient_iqeqb9_k$();
    } else {
      tmp = this.lexer_1.consumeBoolean_8eci30_k$();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toByte_edm0nx_k$()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.lexer_1.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
    return value.toByte_edm0nx_k$();
  };
  StreamingJsonDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toShort_ja8oqn_k$()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.lexer_1.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
    return value.toShort_ja8oqn_k$();
  };
  StreamingJsonDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    var value = this.lexer_1.consumeNumericLiteral_rdea66_k$();
    if (!value.equals(toLong_0(value.toInt_1tsl84_k$()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.lexer_1.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
    return value.toInt_1tsl84_k$();
  };
  StreamingJsonDecoder.prototype.decodeLong_jzt186_k$ = function () {
    return this.lexer_1.consumeNumericLiteral_rdea66_k$();
  };
  StreamingJsonDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_parseString_0 = this.lexer_1;
      var input_1 = tmp0_parseString_0.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            var tmp$ret$1;
            $l$block_0: {
              var tmp0_unsafeCast_0_1_4 = toDouble(input_1);
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_unsafeCast_0_1_4;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.json_1._get_configuration__311089819_557qfv_k$()._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.lexer_1, result);
  };
  StreamingJsonDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_parseString_0 = this.lexer_1;
      var input_1 = tmp0_parseString_0.consumeStringLenient_9oypvu_k$();
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = toDouble(input_1);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.json_1._get_configuration__311089819_557qfv_k$()._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.lexer_1, result);
  };
  StreamingJsonDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    var string = this.lexer_1.consumeStringLenient_9oypvu_k$();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.lexer_1.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    var tmp;
    if (this.configuration_1._get_isLenient__4131730692_2p6q64_k$()) {
      tmp = this.lexer_1.consumeStringLenientNotNull_m2rgts_k$();
    } else {
      tmp = this.lexer_1.consumeString_j3j2z7_k$();
    }
    return tmp;
  };
  StreamingJsonDecoder.$metadata$ = {
    simpleName: 'StreamingJsonDecoder',
    kind: 'class',
    interfaces: [JsonDecoder]
  };
  function _get_ESCAPE_STRINGS__2623815143() {
    init_properties_StringOps_kt_977888371();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_977888371();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 48;
        break $l$block;
      }
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = 97;
        break $l$block_0;
      }
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__1828080292, value) {
    init_properties_StringOps_kt_977888371();
    _this__1828080292.append_t8oh9e_k$(_get_STRING__1121561882());
    Unit_getInstance();
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__get_code__0_2225219253 = charSequenceGet(value, i);
          tmp$ret$0 = Char__toInt_impl_2402388783(tmp0__get_code__0_2225219253);
          break $l$block;
        }
        var c = tmp$ret$0;
        if (c < _get_ESCAPE_STRINGS__2623815143().length ? !(_get_ESCAPE_STRINGS__2623815143()[c] == null) : false) {
          _this__1828080292.append_tbojcw_k$(value, lastPos, i);
          Unit_getInstance();
          _this__1828080292.append_ssq29y_k$(_get_ESCAPE_STRINGS__2623815143()[c]);
          Unit_getInstance();
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__1828080292.append_tbojcw_k$(value, lastPos, value.length);
      Unit_getInstance();
    } else {
      _this__1828080292.append_ssq29y_k$(value);
      Unit_getInstance();
    }
    _this__1828080292.append_t8oh9e_k$(_get_STRING__1121561882());
    Unit_getInstance();
  }
  function toBooleanStrictOrNull(_this__1828080292) {
    init_properties_StringOps_kt_977888371();
    return equals_0(_this__1828080292, 'true', true) ? true : equals_0(_this__1828080292, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_1994189263;
  function init_properties_StringOps_kt_977888371() {
    if (!properties_initialized_StringOps_kt_1994189263) {
      properties_initialized_StringOps_kt_1994189263 = true;
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = fillArrayVal(Array(93), null);
          break $l$block;
        }
        var tmp0_apply_0 = tmp$ret$0;
        {
        }
        {
          var inductionVariable = 0;
          if (inductionVariable <= 31)
            do {
              var c_3 = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var c1_4 = toHexChar(c_3 >> 12);
              var c2_5 = toHexChar(c_3 >> 8);
              var c3_6 = toHexChar(c_3 >> 4);
              var c4_7 = toHexChar(c_3);
              tmp0_apply_0[c_3] = '\\u' + new Char(c1_4) + new Char(c2_5) + new Char(c3_6) + new Char(c4_7);
            }
             while (inductionVariable <= 31);
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 34;
            break $l$block_0;
          }
          tmp0_apply_0[tmp$ret$1] = '\\"';
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = 92;
            break $l$block_1;
          }
          tmp0_apply_0[tmp$ret$2] = '\\\\';
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = 9;
            break $l$block_2;
          }
          tmp0_apply_0[tmp$ret$3] = '\\t';
          var tmp$ret$4;
          $l$block_3: {
            tmp$ret$4 = 8;
            break $l$block_3;
          }
          tmp0_apply_0[tmp$ret$4] = '\\b';
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = 10;
            break $l$block_4;
          }
          tmp0_apply_0[tmp$ret$5] = '\\n';
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = 13;
            break $l$block_5;
          }
          tmp0_apply_0[tmp$ret$6] = '\\r';
          tmp0_apply_0[12] = '\\f';
        }
        tmp$ret$7 = tmp0_apply_0;
        break $l$block_6;
      }
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      $l$block_20: {
        var tmp0_apply_0_0 = new Int8Array(93);
        {
        }
        {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 <= 31)
            do {
              var c_3_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              tmp0_apply_0_0[c_3_0] = 1;
            }
             while (inductionVariable_0 <= 31);
          var tmp$ret$0_0;
          $l$block_7: {
            tmp$ret$0_0 = 34;
            break $l$block_7;
          }
          var tmp = tmp$ret$0_0;
          var tmp$ret$1_0;
          $l$block_8: {
            tmp$ret$1_0 = 34;
            break $l$block_8;
          }
          tmp0_apply_0_0[tmp] = toByte(tmp$ret$1_0);
          var tmp$ret$2_0;
          $l$block_9: {
            tmp$ret$2_0 = 92;
            break $l$block_9;
          }
          var tmp_0 = tmp$ret$2_0;
          var tmp$ret$3_0;
          $l$block_10: {
            tmp$ret$3_0 = 92;
            break $l$block_10;
          }
          tmp0_apply_0_0[tmp_0] = toByte(tmp$ret$3_0);
          var tmp$ret$4_0;
          $l$block_11: {
            tmp$ret$4_0 = 9;
            break $l$block_11;
          }
          var tmp_1 = tmp$ret$4_0;
          var tmp$ret$5_0;
          $l$block_12: {
            tmp$ret$5_0 = 116;
            break $l$block_12;
          }
          tmp0_apply_0_0[tmp_1] = toByte(tmp$ret$5_0);
          var tmp$ret$6_0;
          $l$block_13: {
            tmp$ret$6_0 = 8;
            break $l$block_13;
          }
          var tmp_2 = tmp$ret$6_0;
          var tmp$ret$7_0;
          $l$block_14: {
            tmp$ret$7_0 = 98;
            break $l$block_14;
          }
          tmp0_apply_0_0[tmp_2] = toByte(tmp$ret$7_0);
          var tmp$ret$8;
          $l$block_15: {
            tmp$ret$8 = 10;
            break $l$block_15;
          }
          var tmp_3 = tmp$ret$8;
          var tmp$ret$9;
          $l$block_16: {
            tmp$ret$9 = 110;
            break $l$block_16;
          }
          tmp0_apply_0_0[tmp_3] = toByte(tmp$ret$9);
          var tmp$ret$10;
          $l$block_17: {
            tmp$ret$10 = 13;
            break $l$block_17;
          }
          var tmp_4 = tmp$ret$10;
          var tmp$ret$11;
          $l$block_18: {
            tmp$ret$11 = 114;
            break $l$block_18;
          }
          tmp0_apply_0_0[tmp_4] = toByte(tmp$ret$11);
          var tmp$ret$12;
          $l$block_19: {
            tmp$ret$12 = 102;
            break $l$block_19;
          }
          tmp0_apply_0_0[12] = toByte(tmp$ret$12);
        }
        tmp$ret$13 = tmp0_apply_0_0;
        break $l$block_20;
      }
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this._get_currentTagOrNull__3083342688_k1dbj4_k$();
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
          tmp$ret$0 = $this.currentElement_sx22im_k$(tmp0_safe_receiver);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this._get_value__3683422336_a43j40_k$() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__1828080292, $this, type) {
    var tmp0_elvis_lhs = _this__1828080292 instanceof JsonLiteral ? _this__1828080292 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.json_1 = json;
    this.value_1 = value;
    this.configuration_1 = this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$();
  }
  AbstractJsonTreeDecoder.prototype._get_json__801013347_d8whur_k$ = function () {
    return this.json_1;
  };
  AbstractJsonTreeDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  AbstractJsonTreeDecoder.prototype._get_serializersModule__364239364_60uww4_k$ = function () {
    return this._get_json__801013347_d8whur_k$()._get_serializersModule__364239364_60uww4_k$();
  };
  AbstractJsonTreeDecoder.prototype._get_configuration__311089819_557qfv_k$ = function () {
    return this.configuration_1;
  };
  AbstractJsonTreeDecoder.prototype.decodeJsonElement_6lz9ye_k$ = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.decodeSerializableValue_xpp80o_k$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor._get_kind__801637687_d99vlj_k$();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this._get_json__801013347_d8whur_k$();
      var tmp$ret$0;
      $l$block: {
        if (!(currentObject_0 instanceof JsonArray)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
        } else {
        }
        tmp$ret$0 = currentObject_0;
        break $l$block;
      }
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        $l$block_4: {
          var tmp0_selectMapMode_0 = this._get_json__801013347_d8whur_k$();
          var keyDescriptor_1 = carrierDescriptor(descriptor.getElementDescriptor_sqz94k_k$(0), tmp0_selectMapMode_0._get_serializersModule__364239364_60uww4_k$());
          var keyKind_2 = keyDescriptor_1._get_kind__801637687_d99vlj_k$();
          var tmp_2;
          var tmp_3;
          if (keyKind_2 instanceof PrimitiveKind) {
            tmp_3 = true;
          } else {
            {
              tmp_3 = equals(keyKind_2, ENUM_getInstance());
            }
          }
          if (tmp_3) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp_4 = this._get_json__801013347_d8whur_k$();
              var tmp$ret$1;
              $l$block_0: {
                if (!(currentObject_0 instanceof JsonObject)) {
                  throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
                } else {
                }
                tmp$ret$1 = currentObject_0;
                break $l$block_0;
              }
              tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
              break $l$block_1;
            }
            tmp_2 = tmp$ret$2;
          } else {
            if (tmp0_selectMapMode_0._get_configuration__311089819_557qfv_k$()._get_allowStructuredMapKeys__141016373_2bygxh_k$()) {
              var tmp$ret$4;
              $l$block_3: {
                var tmp_5 = this._get_json__801013347_d8whur_k$();
                var tmp$ret$3;
                $l$block_2: {
                  if (!(currentObject_0 instanceof JsonArray)) {
                    throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
                  } else {
                  }
                  tmp$ret$3 = currentObject_0;
                  break $l$block_2;
                }
                tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
                break $l$block_3;
              }
              tmp_2 = tmp$ret$4;
            } else {
              {
                throw InvalidKeyKindException(keyDescriptor_1);
              }
            }
          }
          tmp$ret$5 = tmp_2;
          break $l$block_4;
        }
        tmp = tmp$ret$5;
      } else {
        {
          var tmp_6 = this._get_json__801013347_d8whur_k$();
          var tmp$ret$6;
          $l$block_5: {
            if (!(currentObject_0 instanceof JsonObject)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor._get_serialName__1025298892_gyfpos_k$() + ', but had ' + getKClassFromExpression(currentObject_0));
            } else {
            }
            tmp$ret$6 = currentObject_0;
            break $l$block_5;
          }
          var tmp_7 = tmp$ret$6;
          tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
        }
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.getPrimitiveValue_r7a8w1_k$ = function (tag) {
    var currentElement = this.currentElement_sx22im_k$(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_o4mjck_k$ = function (tag) {
    return !(this.currentElement_sx22im_k$(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_lc2tyw_k$ = function (tag) {
    return this.decodeTaggedNotNullMark_o4mjck_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_69nto3_k$ = function (tag) {
    var value = this.getPrimitiveValue_r7a8w1_k$(tag);
    if (!this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_isLenient__4131730692_2p6q64_k$()) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal._get_isString__3315263824_g7ag1c_k$())
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + _get_lenientHint__2822994611(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block_0: {
      try {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_4 = _get_booleanOrNull__1934131903(value);
          var tmp;
          if (tmp0_elvis_lhs_4 == null) {
            throw IllegalArgumentException_init_$Create$_0();
          } else {
            tmp = tmp0_elvis_lhs_4;
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_kbjyq1_k$ = function (tag) {
    return this.decodeTaggedBoolean_69nto3_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_z232qn_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          var result_4 = _get_int__857088642(tmp0_primitive_0);
          var tmp;
          var containsLower = ByteCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$();
          if (result_4 <= ByteCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() ? containsLower <= result_4 : false) {
            tmp = toByte(result_4);
          } else {
            {
              tmp = null;
            }
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_weg8ir_k$ = function (tag) {
    return this.decodeTaggedByte_z232qn_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_d78pwf_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          var result_4 = _get_int__857088642(tmp0_primitive_0);
          var tmp;
          var containsLower = ShortCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$();
          if (result_4 <= ShortCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() ? containsLower <= result_4 : false) {
            tmp = toShort(result_4);
          } else {
            {
              tmp = null;
            }
          }
          tmp$ret$0 = tmp;
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_9lw2oz_k$ = function (tag) {
    return this.decodeTaggedShort_d78pwf_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_g5h384_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_int__857088642(tmp0_primitive_0);
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_rqx040_k$ = function (tag) {
    return this.decodeTaggedInt_g5h384_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_vws05x_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_long__802740047(tmp0_primitive_0);
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_z7jgpd_k$ = function (tag) {
    return this.decodeTaggedLong_vws05x_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_wuaksh_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_float__3235585269(tmp0_primitive_0);
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_azhupv_k$ = function (tag) {
    return this.decodeTaggedFloat_wuaksh_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_c9vp4a_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _get_double__4130307418(tmp0_primitive_0);
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_allowSpecialFloatingPointValues__1768724981_t91wxh_k$();
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_qq3qze_k$ = function (tag) {
    return this.decodeTaggedDouble_c9vp4a_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_ouxcj4_k$ = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_primitive_0 = this.getPrimitiveValue_r7a8w1_k$(tag);
      try {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = single(tmp0_primitive_0._get_content__1558689208_ps04ag_k$());
          break $l$block;
        }
        var tmp0_elvis_lhs_1 = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs_1;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          {
            tmp = tmp0_elvis_lhs_1;
          }
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          {
            throw $p;
          }
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_xsxsj0_k$ = function (tag) {
    return this.decodeTaggedChar_ouxcj4_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_9404dm_k$ = function (tag) {
    var value = this.getPrimitiveValue_r7a8w1_k$(tag);
    if (!this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_isLenient__4131730692_2p6q64_k$()) {
      var literal = asLiteral(value, this, 'string');
      if (!literal._get_isString__3315263824_g7ag1c_k$())
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + _get_lenientHint__2822994611(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    else {
    }
    return value._get_content__1558689208_ps04ag_k$();
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_5es7hi_k$ = function (tag) {
    return this.decodeTaggedString_9404dm_k$((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.$metadata$ = {
    simpleName: 'AbstractJsonTreeDecoder',
    kind: 'class',
    interfaces: [JsonDecoder]
  };
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_5: {
      var tmp0_tryCoerceValue_0 = $this._get_json__801013347_d8whur_k$();
      var tmp1_tryCoerceValue_0 = descriptor.getElementDescriptor_sqz94k_k$(index);
      var tmp;
      if (!tmp1_tryCoerceValue_0._get_isNullable__336674624_5kg3sw_k$()) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = $this.currentElement_sx22im_k$(tag);
          tmp$ret$0 = tmp_0 instanceof JsonNull;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_5;
      } else {
      }
      if (equals(tmp1_tryCoerceValue_0._get_kind__801637687_d99vlj_k$(), ENUM_getInstance())) {
        var tmp$ret$2;
        $l$block_1: {
          var tmp_1 = $this.currentElement_sx22im_k$(tag);
          var tmp0_safe_receiver_7 = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
          tmp$ret$2 = tmp0_safe_receiver_7 == null ? null : _get_contentOrNull__3948604750(tmp0_safe_receiver_7);
          break $l$block_1;
        }
        var tmp0_elvis_lhs_3 = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs_3 == null) {
          tmp$ret$1 = false;
          break $l$block_5;
        } else {
          tmp_2 = tmp0_elvis_lhs_3;
        }
        var enumValue_2 = tmp_2;
        var enumIndex_4 = getJsonNameIndex(tmp1_tryCoerceValue_0, tmp0_tryCoerceValue_0, enumValue_2);
        if (enumIndex_4 === Companion_getInstance()._get_UNKNOWN_NAME__1523688395_p75xhn_k$()) {
          var tmp$ret$3;
          $l$block_3: {
            tmp$ret$3 = Unit_getInstance();
            break $l$block_3;
          }
          tmp$ret$1 = true;
          break $l$block_5;
        }
      }
      tmp$ret$1 = false;
      break $l$block_5;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.forceNull_1 = (!$this._get_json__801013347_d8whur_k$()._get_configuration__311089819_557qfv_k$()._get_explicitNulls__3748731353_917qcn_k$() ? !descriptor.isElementOptional_c3hgb3_k$(index) : false) ? descriptor.getElementDescriptor_sqz94k_k$(index)._get_isNullable__336674624_5kg3sw_k$() : false;
    return $this.forceNull_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.polyDiscriminator_1 = polyDiscriminator;
    this.polyDescriptor_1 = polyDescriptor;
    this.position_1 = 0;
    this.forceNull_1 = false;
  }
  JsonTreeDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_2;
  };
  JsonTreeDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.position_1 < descriptor._get_elementsCount__2919979385_mqmrgn_k$()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.position_1;
      tmp0_this.position_1 = tmp1 + 1 | 0;
      var name = this.getTag_8zycz2_k$(descriptor, tmp1);
      var index = this.position_1 - 1 | 0;
      this.forceNull_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_contains_0 = this._get_value__3683422336_a43j40_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = (isInterface(tmp0_contains_0, Map) ? tmp0_contains_0 : THROW_CCE()).containsKey_wgk31w_k$(name);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        {
          tmp_0 = absenceIsNull(this, descriptor, index);
        }
      }
      if (tmp_0) {
        tmp = !this._get_configuration__311089819_557qfv_k$()._get_coerceInputValues__1564306208_pvcie8_k$() ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        return index;
      } else {
      }
    }
    return Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
  };
  JsonTreeDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return !this.forceNull_1 ? AbstractJsonTreeDecoder.prototype.decodeNotNullMark_us4ba1_k$.call(this) : false;
  };
  JsonTreeDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    var mainName = desc.getElementName_ykpypc_k$(index);
    if (!this._get_configuration__311089819_557qfv_k$()._get_useAlternativeNames__3550019471_cbitf5_k$())
      return mainName;
    if (this._get_value__3683422336_a43j40_k$()._get_keys__801529559_d97k5z_k$().contains_2ehdt1_k$(mainName))
      return mainName;
    var tmp = _get_schemaCache__3869482832(this._get_json__801013347_d8whur_k$());
    var tmp_0 = _get_JsonAlternativeNamesKey__1245246965();
    var alternativeNamesMap = tmp.getOrPut_2oe0zz_k$(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    $l$block_2: {
      var tmp0_find_0 = this._get_value__3683422336_a43j40_k$()._get_keys__801529559_d97k5z_k$();
      var tmp$ret$1;
      $l$block_1: {
        var tmp0_iterator_1_1 = tmp0_find_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_1.hasNext_bitz1p_k$()) {
          var element_2_2 = tmp0_iterator_1_1.next_20eer_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = alternativeNamesMap.get_1mhr4y_k$(element_2_2) === index;
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element_2_2;
            break $l$block_1;
          } else {
          }
        }
        tmp$ret$1 = null;
        break $l$block_1;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_2;
    }
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return getValue(this._get_value__3683422336_a43j40_k$(), tag);
  };
  JsonTreeDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    if (descriptor === this.polyDescriptor_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.beginStructure_dv3yt3_k$.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    var tmp;
    if (this._get_configuration__311089819_557qfv_k$()._get_ignoreUnknownKeys__4153108645_2cgiu3_k$()) {
      tmp = true;
    } else {
      var tmp_0 = descriptor._get_kind__801637687_d99vlj_k$();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    else {
    }
    var tmp_1;
    if (!this._get_configuration__311089819_557qfv_k$()._get_useAlternativeNames__3550019471_cbitf5_k$()) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      $l$block: {
        var tmp0_safe_receiver = _get_schemaCache__3869482832(this._get_json__801013347_d8whur_k$()).get_eg3l1p_k$(descriptor, _get_JsonAlternativeNamesKey__1245246965());
        var tmp0_orEmpty_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_keys__801529559_d97k5z_k$();
        var tmp0_elvis_lhs_1 = tmp0_orEmpty_0;
        tmp$ret$0 = tmp0_elvis_lhs_1 == null ? emptySet() : tmp0_elvis_lhs_1;
        break $l$block;
      }
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this._get_value__3683422336_a43j40_k$()._get_keys__801529559_d97k5z_k$().iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var key = tmp1_iterator.next_20eer_k$();
      if (!names.contains_2ehdt1_k$(key) ? !(key === this.polyDiscriminator_1) : false) {
        throw UnknownKeyException(key, this._get_value__3683422336_a43j40_k$().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = {
    simpleName: 'JsonTreeDecoder',
    kind: 'class',
    interfaces: []
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_2 = value;
    this.size_1 = this.value_2._get_size__809037418_ddoh9m_k$();
    this.currentIndex_1 = -1;
  }
  JsonTreeListDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_2;
  };
  JsonTreeListDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return this.value_2.get_fkrdnv_k$(toInt(tag));
  };
  JsonTreeListDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.currentIndex_1 < (this.size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentIndex_1;
      tmp0_this.currentIndex_1 = tmp1 + 1 | 0;
      Unit_getInstance();
      return this.currentIndex_1;
    }
    return Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
  };
  JsonTreeListDecoder.$metadata$ = {
    simpleName: 'JsonTreeListDecoder',
    kind: 'class',
    interfaces: []
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.value_3 = value;
    this.keys_1 = toList(this.value_3._get_keys__801529559_d97k5z_k$());
    this.size_1 = imul(this.keys_1._get_size__809037418_ddoh9m_k$(), 2);
    this.position_2 = -1;
  }
  JsonTreeMapDecoder.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_3;
  };
  JsonTreeMapDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    var i = index / 2 | 0;
    return this.keys_1.get_fkrdnv_k$(i);
  };
  JsonTreeMapDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    while (this.position_2 < (this.size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.position_2;
      tmp0_this.position_2 = tmp1 + 1 | 0;
      Unit_getInstance();
      return this.position_2;
    }
    return Companion_getInstance()._get_DECODE_DONE__3215019198_huz1aa_k$();
  };
  JsonTreeMapDecoder.prototype.currentElement_sx22im_k$ = function (tag) {
    return this.position_2 % 2 === 0 ? JsonPrimitive_0(tag) : getValue(this.value_3, tag);
  };
  JsonTreeMapDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = {
    simpleName: 'JsonTreeMapDecoder',
    kind: 'class',
    interfaces: []
  };
  function readPolymorphicJson(_this__1828080292, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__1828080292, element, discriminator, deserializer._get_descriptor__684124924_bbb664_k$())).decodeSerializableValue_xpp80o_k$(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _get_BEGIN_OBJ__318898768(), _get_END_OBJ__368619038());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _get_BEGIN_LIST__1293374583(), _get_END_LIST__2834702953());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _get_BEGIN_OBJ__318898768(), _get_END_OBJ__368619038());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _get_BEGIN_LIST__1293374583(), _get_END_LIST__2834702953());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.begin_1 = begin;
    this.end_1 = end;
  }
  WriteMode.prototype._get_begin__3114373192_c9kma1_k$ = function () {
    return this.begin_1;
  };
  WriteMode.prototype._get_end__856968982_ypp5lj_k$ = function () {
    return this.end_1;
  };
  WriteMode.$metadata$ = {
    simpleName: 'WriteMode',
    kind: 'class',
    interfaces: []
  };
  function switchMode(_this__1828080292, desc) {
    var tmp0_subject = desc._get_kind__801637687_d99vlj_k$();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          $l$block_1: {
            var keyDescriptor_1 = carrierDescriptor(desc.getElementDescriptor_sqz94k_k$(0), _this__1828080292._get_serializersModule__364239364_60uww4_k$());
            var keyKind_2 = keyDescriptor_1._get_kind__801637687_d99vlj_k$();
            var tmp_0;
            var tmp_1;
            if (keyKind_2 instanceof PrimitiveKind) {
              tmp_1 = true;
            } else {
              {
                tmp_1 = equals(keyKind_2, ENUM_getInstance());
              }
            }
            if (tmp_1) {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = WriteMode_MAP_getInstance();
                break $l$block;
              }
              tmp_0 = tmp$ret$0;
            } else {
              if (_this__1828080292._get_configuration__311089819_557qfv_k$()._get_allowStructuredMapKeys__141016373_2bygxh_k$()) {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = WriteMode_LIST_getInstance();
                  break $l$block_0;
                }
                tmp_0 = tmp$ret$1;
              } else {
                {
                  throw InvalidKeyKindException(keyDescriptor_1);
                }
              }
            }
            tmp$ret$2 = tmp_0;
            break $l$block_1;
          }
          tmp = tmp$ret$2;
        } else {
          {
            tmp = WriteMode_OBJ_getInstance();
          }
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__1828080292, module_0) {
    var tmp;
    if (equals(_this__1828080292._get_kind__801637687_d99vlj_k$(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__1828080292);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__1828080292 : tmp1_elvis_lhs;
    } else if (_this__1828080292._get_isInline__2852845512_nuloag_k$()) {
      tmp = carrierDescriptor(_this__1828080292.getElementDescriptor_sqz94k_k$(0), module_0);
    } else {
      tmp = _this__1828080292;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function _get_COLON__2205721714() {
    return COLON;
  }
  var COLON;
  function _get_NULL__774226340() {
    return NULL;
  }
  var NULL;
  function _get_BEGIN_OBJ__318898768() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function _get_END_OBJ__368619038() {
    return END_OBJ;
  }
  var END_OBJ;
  function _get_BEGIN_LIST__1293374583() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function _get_END_LIST__2834702953() {
    return END_LIST;
  }
  var END_LIST;
  function appendEscape($this, lastPosition, current) {
    $this.appendRange_nm7sha_k$(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.appendRange_nm7sha_k$(lastPosition, currentPosition);
    var result = $this.escapedString_1.toString();
    $this.escapedString_1.setLength_kzn4fs_k$(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = ensureNotNull($this.peekedString_1);
      {
      }
      {
        $this.peekedString_1 = null;
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this._get_source__263461456_4cuw5s_k$(), $this.currentPosition_1 - 1 | 0)), new Char(_Char___init__impl__380027157(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.prefetchOrEof_yw6lb3_k$(currentPosition);
    if (currentPosition === -1) {
      $this.fail$default_p0pca1_k$('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this._get_source__263461456_4cuw5s_k$();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__380027157(117)))) {
      return appendHex($this, $this._get_source__263461456_4cuw5s_k$(), currentPosition);
    }
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(currentChar);
      break $l$block;
    }
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__380027157(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.fail$default_p0pca1_k$(tmp_0, 0, null, 6, null);
    }
    $this.escapedString_1.append_t8oh9e_k$(c);
    Unit_getInstance();
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.currentPosition_1 = startPos;
      $this.ensureHaveChars_2ohzs6_k$();
      if (($this.currentPosition_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.fail$default_p0pca1_k$('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.currentPosition_1);
    }
    $this.escapedString_1.append_t8oh9e_k$(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    Unit_getInstance();
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__380027157(48) <= character ? character <= _Char___init__impl__380027157(57) : false) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Char__toInt_impl_2402388783(character);
        break $l$block;
      }
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = 48;
        break $l$block_0;
      }
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__380027157(97) <= character ? character <= _Char___init__impl__380027157(102) : false) {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = Char__toInt_impl_2402388783(character);
        break $l$block_1;
      }
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      $l$block_2: {
        tmp$ret$3 = 97;
        break $l$block_2;
      }
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__380027157(65) <= character ? character <= _Char___init__impl__380027157(70) : false) {
      var tmp$ret$4;
      $l$block_3: {
        tmp$ret$4 = Char__toInt_impl_2402388783(character);
        break $l$block_3;
      }
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      $l$block_4: {
        tmp$ret$5 = 65;
        break $l$block_4;
      }
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.fail$default_p0pca1_k$(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.prefetchOrEof_yw6lb3_k$(start);
    if (current >= charSequenceLength($this._get_source__263461456_4cuw5s_k$()) ? true : current === -1) {
      $this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    $l$block: {
      var tmp = $this._get_source__263461456_4cuw5s_k$();
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      var tmp0__get_code__0_2225219253 = charSequenceGet(tmp, tmp0);
      tmp$ret$0 = Char__toInt_impl_2402388783(tmp0__get_code__0_2225219253);
      break $l$block;
    }
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = 116;
      break $l$block_0;
    }
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = 102;
        break $l$block_1;
      }
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        {
          var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient_9oypvu_k$() + "'";
          $this.fail$default_p0pca1_k$(tmp_1, 0, null, 6, null);
        }
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this._get_source__263461456_4cuw5s_k$()) - current | 0) < literalSuffix.length) {
      $this.fail$default_p0pca1_k$('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this._get_source__263461456_4cuw5s_k$(), current + i | 0);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = Char__toInt_impl_2402388783(expected);
          break $l$block;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = Char__toInt_impl_2402388783(actual);
          break $l$block_0;
        }
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient_9oypvu_k$() + "'";
          $this.fail$default_p0pca1_k$(tmp_0, 0, null, 6, null);
        } else {
        }
      }
       while (inductionVariable <= last);
    $this.currentPosition_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.currentPosition_1 = 0;
    this.path_1 = new JsonPath();
    this.peekedString_1 = null;
    this.escapedString_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype._set_currentPosition__257813251_ilyt3h_k$ = function (_set____804775014) {
    this.currentPosition_1 = _set____804775014;
  };
  AbstractJsonLexer.prototype._get_currentPosition__868736655_ed81hr_k$ = function () {
    return this.currentPosition_1;
  };
  AbstractJsonLexer.prototype._get_path__806022854_dbvv7q_k$ = function () {
    return this.path_1;
  };
  AbstractJsonLexer.prototype.ensureHaveChars_2ohzs6_k$ = function () {
  };
  AbstractJsonLexer.prototype.isValidValueStart_3nntvd_k$ = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__380027157(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__380027157(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__380027157(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__380027157(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.expectEof_2xcy36_k$ = function () {
    var nextToken = this.consumeNextToken_uf1vsa_k$();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), this.currentPosition_1 - 1 | 0)) + ' instead';
      this.fail$default_p0pca1_k$(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.consumeNextToken_trhodc_k$ = function (expected) {
    var token = this.consumeNextToken_uf1vsa_k$();
    if (!(token === expected)) {
      this.fail_pcesvg_k$(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.consumeNextToken_ev7fkz_k$ = function (expected) {
    this.ensureHaveChars_2ohzs6_k$();
    var source = this._get_source__263461456_4cuw5s_k$();
    var cpos = this.currentPosition_1;
    $l$loop_0: while (true) {
      cpos = this.prefetchOrEof_yw6lb3_k$(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(9))))
        continue $l$loop_0;
      this.currentPosition_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.unexpectedToken_v8110b_k$(expected);
    }
    this.currentPosition_1 = cpos;
    this.unexpectedToken_v8110b_k$(expected);
  };
  AbstractJsonLexer.prototype.unexpectedToken_v8110b_k$ = function (expected) {
    var tmp0_this = this;
    tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 - 1 | 0;
    Unit_getInstance();
    if ((this.currentPosition_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__380027157(34))) : false) ? this.consumeStringLenient_9oypvu_k$() === 'null' : false) {
      this.fail_icoaf1_k$("Expected string literal but 'null' literal was found", this.currentPosition_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.fail_pcesvg_k$(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.fail_pcesvg_k$ = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "semicolon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.currentPosition_1 === charSequenceLength(this._get_source__263461456_4cuw5s_k$()) ? true : this.currentPosition_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), this.currentPosition_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.currentPosition_1 - 1 | 0;
    this.fail$default_p0pca1_k$(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.peekNextToken_1gqwr9_k$ = function () {
    var source = this._get_source__263461456_4cuw5s_k$();
    var cpos = this.currentPosition_1;
    $l$loop_0: while (true) {
      cpos = this.prefetchOrEof_yw6lb3_k$(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__380027157(9)))) {
        cpos = cpos + 1 | 0;
        Unit_getInstance();
        continue $l$loop_0;
      }
      this.currentPosition_1 = cpos;
      return charToTokenClass(ch);
    }
    this.currentPosition_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.tryConsumeNotNull_blklc7_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    current = this.prefetchOrEof_yw6lb3_k$(current);
    var len = charSequenceLength(this._get_source__263461456_4cuw5s_k$()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current + 4 | 0)) === 0 : false)
      return true;
    this.currentPosition_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.skipWhitespaces_ox013r_k$ = function () {
    var current = this.currentPosition_1;
    $l$loop_0: while (true) {
      current = this.prefetchOrEof_yw6lb3_k$(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(9)))) {
        current = current + 1 | 0;
        Unit_getInstance();
      } else {
        break $l$loop_0;
      }
    }
    this.currentPosition_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.peekString_9klnyq_k$ = function (isLenient) {
    var token = this.peekNextToken_1gqwr9_k$();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.consumeStringLenient_9oypvu_k$();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.consumeString_j3j2z7_k$();
    }
    var string = tmp;
    this.peekedString_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.substring_8we4nj_k$ = function (startPos, endPos) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_substring_0 = this._get_source__263461456_4cuw5s_k$();
      tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring_0, startPos, endPos));
      break $l$block;
    }
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.consumeString_j3j2z7_k$ = function () {
    if (!(this.peekedString_1 == null)) {
      return takePeeked(this);
    }
    return this.consumeKeyString_mfa3ws_k$();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__380027157(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__380027157(92)))) {
        usedAppend = true;
        currentPosition = this.prefetchOrEof_yw6lb3_k$(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.fail$default_p0pca1_k$('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.appendRange_nm7sha_k$(lastPosition, currentPosition);
          currentPosition = this.prefetchOrEof_yw6lb3_k$(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.fail$default_p0pca1_k$('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        } else {
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.substring_8we4nj_k$(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.currentPosition_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.consumeStringLenientNotNull_m2rgts_k$ = function () {
    var result = this.consumeStringLenient_9oypvu_k$();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.fail$default_p0pca1_k$("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.consumeStringLenient_9oypvu_k$ = function () {
    if (!(this.peekedString_1 == null)) {
      return takePeeked(this);
    }
    var current = this.skipWhitespaces_ox013r_k$();
    if (current >= charSequenceLength(this._get_source__263461456_4cuw5s_k$()) ? true : current === -1) {
      var tmp = current;
      this.fail$default_p0pca1_k$('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current));
    if (token === 1) {
      return this.consumeString_j3j2z7_k$();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current));
      this.fail$default_p0pca1_k$(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current)) === 0) {
      current = current + 1 | 0;
      Unit_getInstance();
      if (current >= charSequenceLength(this._get_source__263461456_4cuw5s_k$())) {
        usedAppend = true;
        this.appendRange_nm7sha_k$(this.currentPosition_1, current);
        var eof = this.prefetchOrEof_yw6lb3_k$(current);
        if (eof === -1) {
          this.currentPosition_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.substring_8we4nj_k$(this.currentPosition_1, current);
    } else {
      tmp_1 = decodedString(this, this.currentPosition_1, current);
    }
    var result = tmp_1;
    this.currentPosition_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.appendRange_nm7sha_k$ = function (fromIndex, toIndex) {
    this.escapedString_1.append_tbojcw_k$(this._get_source__263461456_4cuw5s_k$(), fromIndex, toIndex);
    Unit_getInstance();
  };
  AbstractJsonLexer.prototype.skipElement_wcp1ak_k$ = function (allowLenientStrings) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var tokenStack = tmp$ret$0;
    var lastToken = this.peekNextToken_1gqwr9_k$();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.consumeStringLenient_9oypvu_k$();
      Unit_getInstance();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.peekNextToken_1gqwr9_k$();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.consumeStringLenient_9oypvu_k$();
          Unit_getInstance();
        } else {
          this.consumeKeyString_mfa3ws_k$();
          Unit_getInstance();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.add_1j60pz_k$(lastToken);
        Unit_getInstance();
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.currentPosition_1, 'found ] instead of } at path: ' + this.path_1, this._get_source__263461456_4cuw5s_k$());
        removeLast(tokenStack);
        Unit_getInstance();
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.currentPosition_1, 'found } instead of ] at path: ' + this.path_1, this._get_source__263461456_4cuw5s_k$());
        removeLast(tokenStack);
        Unit_getInstance();
      } else if (tmp0_subject === 10) {
        this.fail$default_p0pca1_k$('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.consumeNextToken_uf1vsa_k$();
      Unit_getInstance();
      if (tokenStack._get_size__809037418_ddoh9m_k$() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this._get_source__263461456_4cuw5s_k$() + "', currentPosition=" + this.currentPosition_1 + ')';
  };
  AbstractJsonLexer.prototype.failOnUnknownKey_6lfa5c_k$ = function (key) {
    var processed = this.substring_8we4nj_k$(0, this.currentPosition_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.fail_icoaf1_k$("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.fail_icoaf1_k$ = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(hint) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = '';
    } else {
      {
        tmp = '\n' + hint;
      }
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.path_1.getPath_18su3p_k$() + hintMessage, this._get_source__263461456_4cuw5s_k$());
  };
  AbstractJsonLexer.prototype.fail$default_p0pca1_k$ = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.currentPosition_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.fail_icoaf1_k$(message, position, hint);
  };
  AbstractJsonLexer.prototype.consumeNumericLiteral_rdea66_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    current = this.prefetchOrEof_yw6lb3_k$(current);
    if (current >= charSequenceLength(this._get_source__263461456_4cuw5s_k$()) ? true : current === -1) {
      this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current)), new Char(_Char___init__impl__380027157(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this._get_source__263461456_4cuw5s_k$())) {
        this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
      } else {
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__380027157(45)))) {
        if (!(current === start)) {
          this.fail$default_p0pca1_k$("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        Unit_getInstance();
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      Unit_getInstance();
      hasChars = !(current === charSequenceLength(this._get_source__263461456_4cuw5s_k$()));
      var digit = Char__minus_impl_3686210483(ch, _Char___init__impl__380027157(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.fail$default_p0pca1_k$(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_times_0 = accumulator;
          tmp$ret$0 = tmp0_times_0.times_2zfqpc_k$(new Long(10, 0));
          break $l$block;
        }
        var tmp1_minus_0 = tmp$ret$0;
        tmp$ret$1 = tmp1_minus_0.minus_llf5ei_k$(toLong_0(digit));
        break $l$block_0;
      }
      accumulator = tmp$ret$1;
      if (accumulator.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
        this.fail$default_p0pca1_k$('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.fail$default_p0pca1_k$('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current)), new Char(_Char___init__impl__380027157(34)))) {
        this.fail$default_p0pca1_k$('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
      Unit_getInstance();
    }
    this.currentPosition_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else if (!accumulator.equals(Companion_getInstance_0()._get_MIN_VALUE__1378605517_mssatp_k$())) {
      tmp_1 = accumulator.unaryMinus_6uz0qp_k$();
    } else {
      this.fail$default_p0pca1_k$('Numeric value overflow', 0, null, 6, null);
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.consumeBoolean_8eci30_k$ = function () {
    return consumeBoolean(this, this.skipWhitespaces_ox013r_k$());
  };
  AbstractJsonLexer.prototype.consumeBooleanLenient_iqeqb9_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    if (current === charSequenceLength(this._get_source__263461456_4cuw5s_k$())) {
      this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), current)), new Char(_Char___init__impl__380027157(34)))) {
      current = current + 1 | 0;
      Unit_getInstance();
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.currentPosition_1 === charSequenceLength(this._get_source__263461456_4cuw5s_k$())) {
        this.fail$default_p0pca1_k$('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this._get_source__263461456_4cuw5s_k$(), this.currentPosition_1)), new Char(_Char___init__impl__380027157(34)))) {
        this.fail$default_p0pca1_k$('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.currentPosition_1 = tmp0_this.currentPosition_1 + 1 | 0;
      Unit_getInstance();
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = {
    simpleName: 'AbstractJsonLexer',
    kind: 'class',
    interfaces: []
  };
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(c);
      break $l$block;
    }
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().CHAR_TO_TOKEN_1;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = Char__toInt_impl_2402388783(c);
        break $l$block_0;
      }
      tmp = tmp_0[tmp$ret$1];
    } else {
      {
        tmp = 0;
      }
    }
    return tmp;
  }
  function _get_TC_WHITESPACE__55179300() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function _get_TC_EOF__1534257535() {
    return TC_EOF;
  }
  var TC_EOF;
  function _get_STRING__1121561882() {
    return STRING;
  }
  var STRING;
  function _get_TC_STRING__4014011024() {
    return TC_STRING;
  }
  var TC_STRING;
  function _get_STRING_ESC__3080402244() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function _get_TC_COMMA__1190675334() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function _get_lenientHint__2822994611() {
    return lenientHint;
  }
  var lenientHint;
  function _get_TC_COLON__1190647868() {
    return TC_COLON;
  }
  var TC_COLON;
  function _get_TC_BEGIN_OBJ__3637395738() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function _get_TC_END_OBJ__4135196520() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function _get_TC_BEGIN_LIST__1087565549() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function _get_TC_END_LIST__3634487903() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function _get_TC_OTHER__1538686635() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().ESCAPE_2_CHAR_1[c] : _Char___init__impl__380027157(0);
  }
  function _get_ignoreUnknownKeysHint__4251639646() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__380027157(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__380027157(98));
    initC2ESC($this, 9, _Char___init__impl__380027157(116));
    initC2ESC($this, 10, _Char___init__impl__380027157(110));
    initC2ESC($this, 12, _Char___init__impl__380027157(102));
    initC2ESC($this, 13, _Char___init__impl__380027157(114));
    initC2ESC_0($this, _Char___init__impl__380027157(47), _Char___init__impl__380027157(47));
    initC2ESC_0($this, _Char___init__impl__380027157(34), _Char___init__impl__380027157(34));
    initC2ESC_0($this, _Char___init__impl__380027157(92), _Char___init__impl__380027157(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__380027157(44), 4);
    initC2TC_0($this, _Char___init__impl__380027157(58), 5);
    initC2TC_0($this, _Char___init__impl__380027157(123), 6);
    initC2TC_0($this, _Char___init__impl__380027157(125), 7);
    initC2TC_0($this, _Char___init__impl__380027157(91), 8);
    initC2TC_0($this, _Char___init__impl__380027157(93), 9);
    initC2TC_0($this, _Char___init__impl__380027157(34), 1);
    initC2TC_0($this, _Char___init__impl__380027157(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__380027157(117)))) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Char__toInt_impl_2402388783(esc);
        break $l$block;
      }
      $this.ESCAPE_2_CHAR_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(c);
      break $l$block;
    }
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.CHAR_TO_TOKEN_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(c);
      break $l$block;
    }
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.ESCAPE_2_CHAR_1 = charArray(117);
    this.CHAR_TO_TOKEN_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = {
    simpleName: 'CharMappings',
    kind: 'object',
    interfaces: []
  };
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function _get_specialFlowingValuesHint__2362587175() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function _get_allowStructuredMapKeysHint__3890899950() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.source_1 = source;
  }
  StringJsonLexer.prototype._get_source__263461456_4cuw5s_k$ = function () {
    return this.source_1;
  };
  StringJsonLexer.prototype.prefetchOrEof_yw6lb3_k$ = function (position) {
    return position < this.source_1.length ? position : -1;
  };
  StringJsonLexer.prototype.consumeNextToken_uf1vsa_k$ = function () {
    var source = this.source_1;
    $l$loop: while (!(this._get_currentPosition__868736655_ed81hr_k$() === -1) ? this._get_currentPosition__868736655_ed81hr_k$() < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._get_currentPosition__868736655_ed81hr_k$();
      tmp0_this._set_currentPosition__257813251_ilyt3h_k$(tmp1 + 1 | 0);
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === _get_TC_WHITESPACE__55179300()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return _get_TC_EOF__1534257535();
  };
  StringJsonLexer.prototype.tryConsumeComma_9n2ve4_k$ = function () {
    var current = this.skipWhitespaces_ox013r_k$();
    if (current === this.source_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.source_1, current)), new Char(_Char___init__impl__380027157(44)))) {
      var tmp0_this = this;
      tmp0_this._set_currentPosition__257813251_ilyt3h_k$(tmp0_this._get_currentPosition__868736655_ed81hr_k$() + 1 | 0);
      tmp0_this._get_currentPosition__868736655_ed81hr_k$();
      Unit_getInstance();
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.canConsumeValue_oljqd7_k$ = function () {
    var current = this._get_currentPosition__868736655_ed81hr_k$();
    if (current === -1)
      return false;
    $l$loop: while (current < this.source_1.length) {
      var c = charSequenceGet(this.source_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(9)))) {
        current = current + 1 | 0;
        Unit_getInstance();
        continue $l$loop;
      }
      this._set_currentPosition__257813251_ilyt3h_k$(current);
      return this.isValidValueStart_3nntvd_k$(c);
    }
    this._set_currentPosition__257813251_ilyt3h_k$(current);
    return false;
  };
  StringJsonLexer.prototype.skipWhitespaces_ox013r_k$ = function () {
    var current = this._get_currentPosition__868736655_ed81hr_k$();
    if (current === -1)
      return current;
    $l$loop: while (current < this.source_1.length) {
      var c = charSequenceGet(this.source_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(9)))) {
        current = current + 1 | 0;
        Unit_getInstance();
      } else {
        break $l$loop;
      }
    }
    this._set_currentPosition__257813251_ilyt3h_k$(current);
    return current;
  };
  StringJsonLexer.prototype.consumeNextToken_ev7fkz_k$ = function (expected) {
    if (this._get_currentPosition__868736655_ed81hr_k$() === -1)
      this.unexpectedToken_v8110b_k$(expected);
    var source = this.source_1;
    $l$loop: while (this._get_currentPosition__868736655_ed81hr_k$() < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._get_currentPosition__868736655_ed81hr_k$();
      tmp0_this._set_currentPosition__257813251_ilyt3h_k$(tmp1 + 1 | 0);
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__380027157(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__380027157(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.unexpectedToken_v8110b_k$(expected);
    }
    this.unexpectedToken_v8110b_k$(expected);
  };
  StringJsonLexer.prototype.consumeKeyString_mfa3ws_k$ = function () {
    this.consumeNextToken_ev7fkz_k$(_get_STRING__1121561882());
    var current = this._get_currentPosition__868736655_ed81hr_k$();
    var tmp = _Char___init__impl__380027157(34);
    var closingQuote = indexOf$default(this.source_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.fail_pcesvg_k$(_get_TC_STRING__4014011024());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.source_1, i)), new Char(_get_STRING_ESC__3080402244()))) {
          return this.consumeString2(this.source_1, this._get_currentPosition__868736655_ed81hr_k$(), i);
        }
      }
       while (inductionVariable < closingQuote);
    this._set_currentPosition__257813251_ilyt3h_k$(closingQuote + 1 | 0);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this.source_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  StringJsonLexer.$metadata$ = {
    simpleName: 'StringJsonLexer',
    kind: 'class',
    interfaces: []
  };
  function _get_schemaCache__3869482832(_this__1828080292) {
    return _this__1828080292._get__schemaCache__4146643177_2gb3mf_k$();
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype._get_isNullable__336674624_5kg3sw_k$ = _get_isNullable__336674624;
  defer$1.prototype._get_isInline__2852845512_nuloag_k$ = _get_isInline__2852845512;
  defer$1.prototype._get_annotations__1905959661_virbvx_k$ = _get_annotations__1905959661;
  StreamingJsonDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  StreamingJsonDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeListDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeListDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  JsonTreeMapDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  //endregion
  //region block: init
  COLON = _Char___init__impl__380027157(58);
  NULL = 'null';
  BEGIN_OBJ = _Char___init__impl__380027157(123);
  END_OBJ = _Char___init__impl__380027157(125);
  BEGIN_LIST = _Char___init__impl__380027157(91);
  END_LIST = _Char___init__impl__380027157(93);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__380027157(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__380027157(92);
  TC_COMMA = 4;
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Default_getInstance = Default_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.js.map