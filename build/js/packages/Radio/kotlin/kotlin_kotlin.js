(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_kotlin = factory(typeof kotlin_kotlin === 'undefined' ? {} : kotlin_kotlin);
}(this, function (_) {
  //region block: imports
  var imul = Math.imul;
  //endregion
  'use strict';
  //region block: pre-declaration
  AbstractSet.prototype = Object.create(AbstractCollection.prototype);
  AbstractSet.prototype.constructor = AbstractSet;
  AbstractMap$keys$1.prototype = Object.create(AbstractSet.prototype);
  AbstractMap$keys$1.prototype.constructor = AbstractMap$keys$1;
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  DeepRecursiveScopeImpl.prototype = Object.create(DeepRecursiveScope.prototype);
  DeepRecursiveScopeImpl.prototype.constructor = DeepRecursiveScopeImpl;
  LazyThreadSafetyMode.prototype = Object.create(Enum.prototype);
  LazyThreadSafetyMode.prototype.constructor = LazyThreadSafetyMode;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  NotImplementedError.prototype = Object.create(Error_0.prototype);
  NotImplementedError.prototype.constructor = NotImplementedError;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  AbstractMutableMap$keys$1.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractMutableMap$keys$1.prototype.constructor = AbstractMutableMap$keys$1;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  function createJsMap() {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  }
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  LinkedHashSet.prototype = Object.create(HashSet.prototype);
  LinkedHashSet.prototype.constructor = LinkedHashSet;
  NodeJsOutput.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput.prototype.constructor = NodeJsOutput;
  BufferedOutput.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput.prototype.constructor = BufferedOutput;
  BufferedOutputToConsoleLog.prototype = Object.create(BufferedOutput.prototype);
  BufferedOutputToConsoleLog.prototype.constructor = BufferedOutputToConsoleLog;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  findNext$1$groups$1.prototype = Object.create(AbstractCollection.prototype);
  findNext$1$groups$1.prototype.constructor = findNext$1$groups$1;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  NumberFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  NumberFormatException.prototype.constructor = NumberFormatException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  //endregion
  function toList(_this__1828080292) {
    var tmp0_subject = _this__1828080292.length;
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__1828080292[0]);
      default:
        return toMutableList(_this__1828080292);
    }
  }
  function withIndex(_this__1828080292) {
    return new IndexingIterable(withIndex$lambda(_this__1828080292));
  }
  function _get_indices__2241594442(_this__1828080292) {
    return new IntRange(0, _get_lastIndex__339712501(_this__1828080292));
  }
  function _get_indices__2241594442_0(_this__1828080292) {
    return new IntRange(0, _get_lastIndex__339712501_0(_this__1828080292));
  }
  function toMutableList(_this__1828080292) {
    return ArrayList_init_$Create$_1(asCollection(_this__1828080292));
  }
  function _get_lastIndex__339712501(_this__1828080292) {
    return _this__1828080292.length - 1 | 0;
  }
  function _get_lastIndex__339712501_0(_this__1828080292) {
    return _this__1828080292.length - 1 | 0;
  }
  function contains(_this__1828080292, element) {
    return indexOf(_this__1828080292, element) >= 0;
  }
  function indexOf(_this__1828080292, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__1828080292.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__1828080292[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__1828080292.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_1(element, _this__1828080292[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function toCollection(_this__1828080292, destination) {
    var indexedObject = _this__1828080292;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.add_1j60pz_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function single(_this__1828080292) {
    var tmp0_subject = _this__1828080292.length;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('Array is empty.');
      case 1:
        tmp = _this__1828080292[0];
        break;
      default:
        throw IllegalArgumentException_init_$Create$_0('Array has more than one element.');
    }
    return tmp;
  }
  function joinToString(_this__1828080292, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this__1828080292, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this__1828080292, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this__1828080292, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_oz4qxs_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this__1828080292;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_oz4qxs_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_oz4qxs_k$(truncated);
      Unit_getInstance();
    }
    buffer.append_oz4qxs_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function _get_lastIndex__339712501_1(_this__1828080292) {
    return _this__1828080292.length - 1 | 0;
  }
  function withIndex$lambda($this_withIndex) {
    return function () {
      return arrayIterator($this_withIndex);
    };
  }
  function joinToString_0(_this__1828080292, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this__1828080292, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this__1828080292, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this__1828080292, separator, prefix, postfix, limit, truncated, transform);
  }
  function toSet(_this__1828080292) {
    if (isInterface(_this__1828080292, Collection)) {
      var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptySet();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__1828080292, List)) {
            tmp_0 = _this__1828080292.get_fkrdnv_k$(0);
          } else {
            {
              tmp_0 = _this__1828080292.iterator_jk1svi_k$().next_20eer_k$();
            }
          }

          tmp = setOf(tmp_0);
          break;
        default:
          tmp = toCollection_0(_this__1828080292, LinkedHashSet_init_$Create$_1(mapCapacity(_this__1828080292._get_size__809037418_ddoh9m_k$())));
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlySet(toCollection_0(_this__1828080292, LinkedHashSet_init_$Create$()));
  }
  function toHashSet(_this__1828080292) {
    return toCollection_0(_this__1828080292, HashSet_init_$Create$_1(mapCapacity(collectionSizeOrDefault(_this__1828080292, 12))));
  }
  function toBooleanArray(_this__1828080292) {
    var result = booleanArray(_this__1828080292._get_size__809037418_ddoh9m_k$());
    var index = 0;
    var tmp0_iterator = _this__1828080292.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function joinTo_0(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_oz4qxs_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this__1828080292.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_oz4qxs_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_oz4qxs_k$(truncated);
      Unit_getInstance();
    }
    buffer.append_oz4qxs_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo_0(_this__1828080292, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function toCollection_0(_this__1828080292, destination) {
    var tmp0_iterator = _this__1828080292.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      destination.add_1j60pz_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function asSequence(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_2832250971(_this__1828080292);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function last(_this__1828080292) {
    if (_this__1828080292.isEmpty_y1axqb_k$())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this__1828080292.get_fkrdnv_k$(_get_lastIndex__339712501_2(_this__1828080292));
  }
  function toList_0(_this__1828080292) {
    if (isInterface(_this__1828080292, Collection)) {
      var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__1828080292, List)) {
            tmp_0 = _this__1828080292.get_fkrdnv_k$(0);
          } else {
            {
              tmp_0 = _this__1828080292.iterator_jk1svi_k$().next_20eer_k$();
            }
          }

          tmp = listOf(tmp_0);
          break;
        default:
          tmp = toMutableList_0(_this__1828080292);
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlyList(toMutableList_1(_this__1828080292));
  }
  function singleOrNull(_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$() === 1 ? _this__1828080292.get_fkrdnv_k$(0) : null;
  }
  function toMutableList_0(_this__1828080292) {
    return ArrayList_init_$Create$_1(_this__1828080292);
  }
  function toMutableList_1(_this__1828080292) {
    if (isInterface(_this__1828080292, Collection))
      return toMutableList_0(_this__1828080292);
    else {
    }
    return toCollection_0(_this__1828080292, ArrayList_init_$Create$());
  }
  function lastOrNull(_this__1828080292) {
    return _this__1828080292.isEmpty_y1axqb_k$() ? null : _this__1828080292.get_fkrdnv_k$(_this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0);
  }
  function minOrNull(_this__1828080292) {
    var iterator = _this__1828080292.iterator_jk1svi_k$();
    if (!iterator.hasNext_bitz1p_k$())
      return null;
    var min = iterator.next_20eer_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var e = iterator.next_20eer_k$();
      if (compareTo(min, e) > 0)
        min = e;
    }
    return min;
  }
  function single_0(_this__1828080292) {
    var tmp0_subject = _this__1828080292;
    if (isInterface(tmp0_subject, List))
      return single_1(_this__1828080292);
    else {
      {
        var iterator = _this__1828080292.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single = iterator.next_20eer_k$();
        if (iterator.hasNext_bitz1p_k$())
          throw IllegalArgumentException_init_$Create$_0('Collection has more than one element.');
        return single;
      }
    }
  }
  function single_1(_this__1828080292) {
    var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this__1828080292.get_fkrdnv_k$(0);
        break;
      default:
        throw IllegalArgumentException_init_$Create$_0('List has more than one element.');
    }
    return tmp;
  }
  function _no_name_provided__1_2832250971($this_asSequence) {
    this.$this_asSequence_1 = $this_asSequence;
  }
  _no_name_provided__1_2832250971.prototype.iterator_2_syqo9r_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = this.$this_asSequence_1.iterator_jk1svi_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  _no_name_provided__1_2832250971.prototype.iterator_jk1svi_k$ = function () {
    return this.iterator_2_syqo9r_k$();
  };
  _no_name_provided__1_2832250971.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Sequence]
  };
  function titlecaseImpl(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = toString_0(_this__1828080292);
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        var tmp1_unsafeCast_0 = tmp$ret$0.toUpperCase();
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var uppercase = tmp$ret$2;
    if (uppercase.length > 1) {
      var tmp;
      if (equals_1(new Char(_this__1828080292), new Char(_Char___init__impl__380027157(329)))) {
        tmp = uppercase;
      } else {
        var tmp$ret$7;
        $l$block_6: {
          var tmp3_plus_0 = charSequenceGet(uppercase, 0);
          var tmp$ret$6;
          $l$block_5: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                tmp$ret$3 = uppercase;
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3.substring(1);
              break $l$block_3;
            }
            var tmp2_lowercase_0 = tmp$ret$4;
            var tmp$ret$5;
            $l$block_4: {
              tmp$ret$5 = tmp2_lowercase_0;
              break $l$block_4;
            }
            tmp$ret$6 = tmp$ret$5.toLowerCase();
            break $l$block_5;
          }
          var tmp4_plus_0 = tmp$ret$6;
          tmp$ret$7 = toString_0(tmp3_plus_0) + tmp4_plus_0;
          break $l$block_6;
        }
        tmp = tmp$ret$7;
      }
      return tmp;
    }
    return toString_0(titlecaseChar(_this__1828080292));
  }
  function until(_this__1828080292, to) {
    if (to <= IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$())
      return Companion_getInstance_4()._get_EMPTY__2261257284_xmtgos_k$();
    return numberRangeToNumber(_this__1828080292, to - 1 | 0);
  }
  function coerceAtLeast(_this__1828080292, minimumValue) {
    return _this__1828080292 < minimumValue ? minimumValue : _this__1828080292;
  }
  function step(_this__1828080292, step) {
    checkStepIsPositive(step > 0, step);
    return Companion_getInstance_3().fromClosedRange_vhxzyy_k$(_this__1828080292._get_first__3232921377_hkbbvj_k$(), _this__1828080292._get_last__802328181_d9oodx_k$(), _this__1828080292._get_step__809345279_ddv2tb_k$() > 0 ? step : -step | 0);
  }
  function coerceAtMost(_this__1828080292, maximumValue) {
    return _this__1828080292 > maximumValue ? maximumValue : _this__1828080292;
  }
  function downTo(_this__1828080292, to) {
    return Companion_getInstance_3().fromClosedRange_vhxzyy_k$(_this__1828080292, to, -1);
  }
  function coerceIn(_this__1828080292, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$_0('Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this__1828080292 < minimumValue)
      return minimumValue;
    if (_this__1828080292 > maximumValue)
      return maximumValue;
    return _this__1828080292;
  }
  function take(_this__1828080292, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Requested element count ' + n + ' is less than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_2));
      }
    }
    var tmp;
    if (n === 0) {
      tmp = emptySequence();
    } else {
      if (isInterface(_this__1828080292, DropTakeSequence)) {
        tmp = _this__1828080292.take_fj41k6_k$(n);
      } else {
        {
          tmp = new TakeSequence(_this__1828080292, n);
        }
      }
    }
    return tmp;
  }
  function map(_this__1828080292, transform) {
    return new TransformingSequence(_this__1828080292, transform);
  }
  function toList_1(_this__1828080292) {
    return optimizeReadOnlyList(toMutableList_2(_this__1828080292));
  }
  function toMutableList_2(_this__1828080292) {
    return toCollection_1(_this__1828080292, ArrayList_init_$Create$());
  }
  function toCollection_1(_this__1828080292, destination) {
    var tmp0_iterator = _this__1828080292.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      destination.add_1j60pz_k$(item);
      Unit_getInstance();
    }
    return destination;
  }
  function plus(_this__1828080292, element) {
    var result = LinkedHashSet_init_$Create$_1(mapCapacity(_this__1828080292._get_size__809037418_ddoh9m_k$() + 1 | 0));
    result.addAll_oxxjjk_k$(_this__1828080292);
    Unit_getInstance();
    result.add_1j60pz_k$(element);
    Unit_getInstance();
    return result;
  }
  function plus_0(_this__1828080292, elements) {
    var tmp0_safe_receiver = collectionSizeOrNull(elements);
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
          tmp$ret$0 = _this__1828080292._get_size__809037418_ddoh9m_k$() + tmp0_safe_receiver | 0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var result = LinkedHashSet_init_$Create$_1(mapCapacity(tmp1_elvis_lhs == null ? imul(_this__1828080292._get_size__809037418_ddoh9m_k$(), 2) : tmp1_elvis_lhs));
    result.addAll_oxxjjk_k$(_this__1828080292);
    Unit_getInstance();
    addAll(result, elements);
    Unit_getInstance();
    return result;
  }
  function single_2(_this__1828080292) {
    var tmp0_subject = charSequenceLength(_this__1828080292);
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('Char sequence is empty.');
      case 1:
        tmp = charSequenceGet(_this__1828080292, 0);
        break;
      default:
        throw IllegalArgumentException_init_$Create$_0('Char sequence has more than one element.');
    }
    return tmp;
  }
  function drop(_this__1828080292, n) {
    {
      var tmp0_require_0 = n >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Requested character count ' + n + ' is less than zero.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_2));
      }
    }
    var tmp$ret$2;
    $l$block_1: {
      var tmp1_substring_0 = coerceAtMost(n, _this__1828080292.length);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this__1828080292;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.substring(tmp1_substring_0);
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_1(it);
    };
  }
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_2ehdt1_k$ = function (element) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = equals_1(element_2, element);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_jr3fla_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2ehdt1_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_y1axqb_k$ = function () {
    return this._get_size__809037418_ddoh9m_k$() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, AbstractCollection$toString$lambda(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.checkElementIndex_ux0wz1_k$ = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  Companion.prototype.checkPositionIndex_kxpgsw_k$ = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  Companion.prototype.checkBoundsIndexes_7787d9_k$ = function (startIndex, endIndex, size) {
    if (startIndex < 0 ? true : endIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex: ' + startIndex + ', endIndex: ' + endIndex + ', size: ' + size);
    }
    if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$_0('startIndex: ' + startIndex + ' > endIndex: ' + endIndex);
    }
  };
  Companion.prototype.orderedHashCode_2n0xp_k$ = function (c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator.next_20eer_k$();
      var tmp = imul(31, hashCode_0);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion.prototype.orderedEquals_40uhas_k$ = function (c, other) {
    if (!(c._get_size__809037418_ddoh9m_k$() === other._get_size__809037418_ddoh9m_k$()))
      return false;
    var otherIterator = other.iterator_jk1svi_k$();
    var tmp0_iterator = c.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var elem = tmp0_iterator.next_20eer_k$();
      var elemOther = otherIterator.next_20eer_k$();
      if (!equals_1(elem, elemOther)) {
        return false;
      }
    }
    return true;
  };
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
  function AbstractMap$keys$1$iterator$1($entryIterator) {
    this.$entryIterator_1 = $entryIterator;
  }
  AbstractMap$keys$1$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.$entryIterator_1.hasNext_bitz1p_k$();
  };
  AbstractMap$keys$1$iterator$1.prototype.next_20eer_k$ = function () {
    return this.$entryIterator_1.next_20eer_k$()._get_key__857139730_e6bh8y_k$();
  };
  AbstractMap$keys$1$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_1(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_firstOrNull_0 = $this._get_entries__31877249_iz8n5_k$();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = equals_1(element_2._get_key__857139730_e6bh8y_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.entryHashCode_6enkgc_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp2_safe_receiver_4 = e._get_key__857139730_e6bh8y_k$();
        var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
        var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
        var tmp0_safe_receiver_6 = e._get_value__3683422336_a43j40_k$();
        var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
        tmp$ret$0 = tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_0.prototype.entryToString_sxv7wb_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = toString_1(e._get_key__857139730_e6bh8y_k$()) + '=' + toString_1(e._get_value__3683422336_a43j40_k$());
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_0.prototype.entryEquals_sgqdyf_k$ = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_1(e._get_key__857139730_e6bh8y_k$(), other._get_key__857139730_e6bh8y_k$()) ? equals_1(e._get_value__3683422336_a43j40_k$(), other._get_value__3683422336_a43j40_k$()) : false;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AbstractMap$keys$1(this$0) {
    this.this$0__1 = this$0;
    AbstractSet.call(this);
  }
  AbstractMap$keys$1.prototype.contains_2ehdt7_k$ = function (element) {
    return this.this$0__1.containsKey_wgk31w_k$(element);
  };
  AbstractMap$keys$1.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_2ehdt7_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMap$keys$1.prototype.iterator_jk1svi_k$ = function () {
    var entryIterator = this.this$0__1._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
    return new AbstractMap$keys$1$iterator$1(entryIterator);
  };
  AbstractMap$keys$1.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.this$0__1._get_size__809037418_ddoh9m_k$();
  };
  AbstractMap$keys$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return this$0.toString_rmr516_k$(it);
    };
  }
  function AbstractMap() {
    Companion_getInstance_0();
    this._keys_1 = null;
    this._values_1 = null;
  }
  AbstractMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_lxbt7v_k$ = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__857139730_e6bh8y_k$();
    var value = entry._get_value__3683422336_a43j40_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = (isInterface(this, Map) ? this : THROW_CCE()).get_1mhr4y_k$(key);
      break $l$block;
    }
    var ourValue = tmp$ret$0;
    if (!equals_1(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = (isInterface(this, Map) ? this : THROW_CCE()).containsKey_wgk31w_k$(key);
        break $l$block_0;
      }
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map) : false))
      return false;
    else {
    }
    if (!(this._get_size__809037418_ddoh9m_k$() === other._get_size__809037418_ddoh9m_k$()))
      return false;
    var tmp$ret$0;
    $l$block_2: {
      var tmp0_all_0 = other._get_entries__31877249_iz8n5_k$();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.containsEntry_lxbt7v_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_1mhr4y_k$ = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3683422336_a43j40_k$();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__31877249_iz8n5_k$());
  };
  AbstractMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this._get_size__809037418_ddoh9m_k$() === 0;
  };
  AbstractMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this._get_entries__31877249_iz8n5_k$()._get_size__809037418_ddoh9m_k$();
  };
  AbstractMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    if (this._keys_1 == null) {
      var tmp = this;
      tmp._keys_1 = new AbstractMap$keys$1(this);
    }
    return ensureNotNull(this._keys_1);
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__31877249_iz8n5_k$();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, AbstractMap$toString$lambda(this), 24, null);
  };
  AbstractMap.prototype.toString_rmr516_k$ = function (entry) {
    return toString(this, entry._get_key__857139730_e6bh8y_k$()) + '=' + toString(this, entry._get_value__3683422336_a43j40_k$());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map]
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.unorderedHashCode_hl8x0c_k$ = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp = hashCode_0;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion_1.prototype.setEquals_mwtoa3_k$ = function (c, other) {
    if (!(c._get_size__809037418_ddoh9m_k$() === other._get_size__809037418_ddoh9m_k$()))
      return false;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = c.containsAll_jr3fla_k$(other);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function AbstractSet() {
    Companion_getInstance_1();
    AbstractCollection.call(this);
  }
  AbstractSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals_mwtoa3_k$(this, other);
  };
  AbstractSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode_hl8x0c_k$(this);
  };
  AbstractSet.$metadata$ = {
    simpleName: 'AbstractSet',
    kind: 'class',
    interfaces: [Set]
  };
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this.serialVersionUID_1 = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_y1axqb_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_y1axqb_k$ = function () {
    return true;
  };
  EmptyList.prototype.containsAll_4bfz49_k$ = function (elements) {
    return elements.isEmpty_y1axqb_k$();
  };
  EmptyList.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_4bfz49_k$(elements);
  };
  EmptyList.prototype.get_fkrdnv_k$ = function (index) {
    throw IndexOutOfBoundsException_init_$Create$("Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.iterator_jk1svi_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function asCollection(_this__1828080292) {
    return new ArrayAsCollection(_this__1828080292, false);
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_bitz1p_k$ = function () {
    return false;
  };
  EmptyIterator.prototype.next_20eer_k$ = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function _get_indices__2241594442_1(_this__1828080292) {
    return numberRangeToNumber(0, _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0);
  }
  function ArrayAsCollection(values, isVarargs) {
    this.values_1 = values;
    this.isVarargs_1 = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.values_1.length;
  };
  ArrayAsCollection.prototype.isEmpty_y1axqb_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = this.values_1;
      tmp$ret$0 = tmp0_isEmpty_0.length === 0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.contains_2ehdtg_k$ = function (element) {
    return contains(this.values_1, element);
  };
  ArrayAsCollection.prototype.containsAll_jr3fy7_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_y1axqb_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2ehdtg_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_jr3fy7_k$(elements);
  };
  ArrayAsCollection.prototype.iterator_jk1svi_k$ = function () {
    return arrayIterator(this.values_1);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _get_lastIndex__339712501_2(_this__1828080292) {
    return _this__1828080292._get_size__809037418_ddoh9m_k$() - 1 | 0;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function optimizeReadOnlyList(_this__1828080292) {
    var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__1828080292.get_fkrdnv_k$(0));
      default:
        return _this__1828080292;
    }
  }
  function IndexedValue(index, value) {
    this.index_1 = index;
    this.value_1 = value;
  }
  IndexedValue.prototype._get_index__3322996031_g2optt_k$ = function () {
    return this.index_1;
  };
  IndexedValue.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this.value_1;
  };
  IndexedValue.prototype.toString = function () {
    return 'IndexedValue(index=' + this.index_1 + ', value=' + this.value_1 + ')';
  };
  IndexedValue.prototype.hashCode = function () {
    var result = this.index_1;
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  IndexedValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IndexedValue))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IndexedValue ? other : THROW_CCE();
    if (!(this.index_1 === tmp0_other_with_cast.index_1))
      return false;
    if (!equals_1(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  IndexedValue.$metadata$ = {
    simpleName: 'IndexedValue',
    kind: 'class',
    interfaces: []
  };
  function IndexingIterable(iteratorFactory) {
    this.iteratorFactory_1 = iteratorFactory;
  }
  IndexingIterable.prototype.iterator_jk1svi_k$ = function () {
    return new IndexingIterator(this.iteratorFactory_1());
  };
  IndexingIterable.$metadata$ = {
    simpleName: 'IndexingIterable',
    kind: 'class',
    interfaces: [Iterable]
  };
  function collectionSizeOrDefault(_this__1828080292, default_0) {
    var tmp;
    if (isInterface(_this__1828080292, Collection)) {
      tmp = _this__1828080292._get_size__809037418_ddoh9m_k$();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function collectionSizeOrNull(_this__1828080292) {
    var tmp;
    if (isInterface(_this__1828080292, Collection)) {
      tmp = _this__1828080292._get_size__809037418_ddoh9m_k$();
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function IndexingIterator(iterator) {
    this.iterator_1 = iterator;
    this.index_1 = 0;
  }
  IndexingIterator.prototype.hasNext_bitz1p_k$ = function () {
    return this.iterator_1.hasNext_bitz1p_k$();
  };
  IndexingIterator.prototype.next_20eer_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.index_1;
    tmp0_this.index_1 = tmp1 + 1 | 0;
    return new IndexedValue(checkIndexOverflow(tmp1), this.iterator_1.next_20eer_k$());
  };
  IndexingIterator.$metadata$ = {
    simpleName: 'IndexingIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function getOrImplicitDefault(_this__1828080292, key) {
    if (isInterface(_this__1828080292, MapWithDefault))
      return _this__1828080292.getOrImplicitDefault_r2k68f_k$(key);
    else {
    }
    var tmp$ret$0;
    $l$block: {
      var value_1 = _this__1828080292.get_1mhr4y_k$(key);
      if (value_1 == null ? !_this__1828080292.containsKey_wgk31w_k$(key) : false) {
        throw NoSuchElementException_init_$Create$_0('Key ' + key + ' is missing in the map.');
      } else {
        tmp$ret$0 = (value_1 == null ? true : isObject(value_1)) ? value_1 : THROW_CCE();
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function MapWithDefault() {
  }
  MapWithDefault.$metadata$ = {
    simpleName: 'MapWithDefault',
    kind: 'interface',
    interfaces: [Map]
  };
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map) ? tmp : THROW_CCE();
  }
  function mapOf(pairs) {
    return pairs.length > 0 ? toMap_0(pairs, LinkedHashMap_init_$Create$_1(mapCapacity(pairs.length))) : emptyMap();
  }
  function getValue(_this__1828080292, key) {
    return getOrImplicitDefault(_this__1828080292, key);
  }
  function toMap(_this__1828080292) {
    if (isInterface(_this__1828080292, Collection)) {
      var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyMap();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__1828080292, List)) {
            tmp_0 = _this__1828080292.get_fkrdnv_k$(0);
          } else {
            {
              tmp_0 = _this__1828080292.iterator_jk1svi_k$().next_20eer_k$();
            }
          }

          tmp = mapOf_0(tmp_0);
          break;
        default:
          tmp = toMap_1(_this__1828080292, LinkedHashMap_init_$Create$_1(mapCapacity(_this__1828080292._get_size__809037418_ddoh9m_k$())));
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlyMap(toMap_1(_this__1828080292, LinkedHashMap_init_$Create$()));
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this.serialVersionUID_1 = new Long(-888910638, 1920087921);
  }
  EmptyMap.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map) : false) {
      tmp = other.isEmpty_y1axqb_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyMap.prototype.hashCode = function () {
    return 0;
  };
  EmptyMap.prototype.toString = function () {
    return '{}';
  };
  EmptyMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return 0;
  };
  EmptyMap.prototype.isEmpty_y1axqb_k$ = function () {
    return true;
  };
  EmptyMap.prototype.containsKey_v2r3nj_k$ = function (key) {
    return false;
  };
  EmptyMap.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    else {
    }
    return this.containsKey_v2r3nj_k$((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.get_eccq09_k$ = function (key) {
    return null;
  };
  EmptyMap.prototype.get_1mhr4y_k$ = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    else {
    }
    return this.get_eccq09_k$((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.$metadata$ = {
    simpleName: 'EmptyMap',
    kind: 'object',
    interfaces: [Map, Serializable]
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function toMap_0(_this__1828080292, destination) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        putAll(destination, _this__1828080292);
      }
      tmp$ret$0 = destination;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toMap_1(_this__1828080292, destination) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        putAll_0(destination, _this__1828080292);
      }
      tmp$ret$0 = destination;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function optimizeReadOnlyMap(_this__1828080292) {
    var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = emptyMap();
        break;
      case 1:
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this__1828080292;
          break $l$block;
        }

        tmp = tmp$ret$0;
        break;
      default:
        tmp = _this__1828080292;
        break;
    }
    return tmp;
  }
  function putAll(_this__1828080292, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.component1_7eebsc_k$();
      var value = tmp1_loop_parameter.component2_7eebsb_k$();
      _this__1828080292.put_3mhbri_k$(key, value);
      Unit_getInstance();
    }
  }
  function putAll_0(_this__1828080292, pairs) {
    var tmp0_iterator = pairs.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      var key = tmp1_loop_parameter.component1_7eebsc_k$();
      var value = tmp1_loop_parameter.component2_7eebsb_k$();
      _this__1828080292.put_3mhbri_k$(key, value);
      Unit_getInstance();
    }
  }
  function hashMapOf(pairs) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = HashMap_init_$Create$_1(mapCapacity(pairs.length));
      {
      }
      {
        putAll(tmp0_apply_0, pairs);
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function removeLast(_this__1828080292) {
    var tmp;
    if (_this__1828080292.isEmpty_y1axqb_k$()) {
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    } else {
      tmp = _this__1828080292.removeAt_qvpkxi_k$(_get_lastIndex__339712501_2(_this__1828080292));
    }
    return tmp;
  }
  function addAll(_this__1828080292, elements) {
    var tmp0_subject = elements;
    if (isInterface(tmp0_subject, Collection))
      return _this__1828080292.addAll_oxxjjk_k$(elements);
    else {
      {
        var result = false;
        var tmp1_iterator = elements.iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
          var item = tmp1_iterator.next_20eer_k$();
          if (_this__1828080292.add_1j60pz_k$(item))
            result = true;
        }
        return result;
      }
    }
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function generateSequence(seedFunction, nextFunction) {
    return new GeneratorSequence(seedFunction, nextFunction);
  }
  function calcNext($this) {
    $this.nextItem_1 = $this.nextState_1 === -2 ? $this.this$0__1.getInitialValue_1() : $this.this$0__1.getNextValue_1(ensureNotNull($this.nextItem_1));
    $this.nextState_1 = $this.nextItem_1 == null ? 0 : 1;
  }
  function GeneratorSequence$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.nextItem_1 = null;
    this.nextState_1 = -2;
  }
  GeneratorSequence$iterator$1.prototype.next_20eer_k$ = function () {
    if (this.nextState_1 < 0)
      calcNext(this);
    if (this.nextState_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this.nextItem_1;
    var result = isObject(tmp) ? tmp : THROW_CCE();
    this.nextState_1 = -1;
    return result;
  };
  GeneratorSequence$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    if (this.nextState_1 < 0)
      calcNext(this);
    return this.nextState_1 === 1;
  };
  GeneratorSequence$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function GeneratorSequence(getInitialValue, getNextValue) {
    this.getInitialValue_1 = getInitialValue;
    this.getNextValue_1 = getNextValue;
  }
  GeneratorSequence.prototype.iterator_jk1svi_k$ = function () {
    return new GeneratorSequence$iterator$1(this);
  };
  GeneratorSequence.$metadata$ = {
    simpleName: 'GeneratorSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function emptySequence() {
    return EmptySequence_getInstance();
  }
  function DropTakeSequence() {
  }
  DropTakeSequence.$metadata$ = {
    simpleName: 'DropTakeSequence',
    kind: 'interface',
    interfaces: [Sequence]
  };
  function TakeSequence$iterator$1(this$0) {
    this.left_1 = this$0.count_1;
    this.iterator_1 = this$0.sequence_1.iterator_jk1svi_k$();
  }
  TakeSequence$iterator$1.prototype.next_20eer_k$ = function () {
    if (this.left_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    var tmp1 = tmp0_this.left_1;
    tmp0_this.left_1 = tmp1 - 1 | 0;
    Unit_getInstance();
    return this.iterator_1.next_20eer_k$();
  };
  TakeSequence$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.left_1 > 0 ? this.iterator_1.hasNext_bitz1p_k$() : false;
  };
  TakeSequence$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TakeSequence(sequence, count) {
    this.sequence_1 = sequence;
    this.count_1 = count;
    {
      var tmp0_require_0 = this.count_1 >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'count must be non-negative, but was ' + this.count_1 + '.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_2));
      }
    }
  }
  TakeSequence.prototype.take_fj41k6_k$ = function (n) {
    return n >= this.count_1 ? this : new TakeSequence(this.sequence_1, n);
  };
  TakeSequence.prototype.iterator_jk1svi_k$ = function () {
    return new TakeSequence$iterator$1(this);
  };
  TakeSequence.$metadata$ = {
    simpleName: 'TakeSequence',
    kind: 'class',
    interfaces: [Sequence, DropTakeSequence]
  };
  function TransformingSequence$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.iterator_1 = this$0.sequence_1.iterator_jk1svi_k$();
  }
  TransformingSequence$iterator$1.prototype.next_20eer_k$ = function () {
    return this.this$0__1.transformer_1(this.iterator_1.next_20eer_k$());
  };
  TransformingSequence$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.iterator_1.hasNext_bitz1p_k$();
  };
  TransformingSequence$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TransformingSequence(sequence, transformer) {
    this.sequence_1 = sequence;
    this.transformer_1 = transformer;
  }
  TransformingSequence.prototype.iterator_jk1svi_k$ = function () {
    return new TransformingSequence$iterator$1(this);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function EmptySequence() {
    EmptySequence_instance = this;
  }
  EmptySequence.prototype.iterator_jk1svi_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptySequence.prototype.take_fj41k6_k$ = function (n) {
    return EmptySequence_getInstance();
  };
  EmptySequence.$metadata$ = {
    simpleName: 'EmptySequence',
    kind: 'object',
    interfaces: [Sequence, DropTakeSequence]
  };
  var EmptySequence_instance;
  function EmptySequence_getInstance() {
    if (EmptySequence_instance == null)
      new EmptySequence();
    return EmptySequence_instance;
  }
  function emptySet() {
    return EmptySet_getInstance();
  }
  function EmptySet() {
    EmptySet_instance = this;
    this.serialVersionUID_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_y1axqb_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return 0;
  };
  EmptySet.prototype.isEmpty_y1axqb_k$ = function () {
    return true;
  };
  EmptySet.prototype.contains_a7ux40_k$ = function (element) {
    return false;
  };
  EmptySet.prototype.contains_2ehdt1_k$ = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_a7ux40_k$(tmp);
  };
  EmptySet.prototype.containsAll_4bfz49_k$ = function (elements) {
    return elements.isEmpty_y1axqb_k$();
  };
  EmptySet.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_4bfz49_k$(elements);
  };
  EmptySet.prototype.iterator_jk1svi_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = {
    simpleName: 'EmptySet',
    kind: 'object',
    interfaces: [Set, Serializable]
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function optimizeReadOnlySet(_this__1828080292) {
    var tmp0_subject = _this__1828080292._get_size__809037418_ddoh9m_k$();
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this__1828080292.iterator_jk1svi_k$().next_20eer_k$());
      default:
        return _this__1828080292;
    }
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet_init_$Create$_1(mapCapacity(elements.length)));
  }
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  function CoroutineContext() {
  }
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this.serialVersionUID_1 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_1pi7hg_k$ = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function _get_COROUTINE_SUSPENDED__2870145053() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function checkStepIsPositive(isPositive, step) {
    if (!isPositive)
      throw IllegalArgumentException_init_$Create$_0('Step must be positive, was: ' + toString_2(step) + '.');
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function KTypeParameter() {
  }
  KTypeParameter.$metadata$ = {
    simpleName: 'KTypeParameter',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function appendElement(_this__1828080292, element, transform) {
    if (!(transform == null)) {
      _this__1828080292.append_oz4qxs_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__1828080292.append_oz4qxs_k$(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this__1828080292.append_t8oh9e_k$(element.value_1);
          Unit_getInstance();
        } else {
          {
            _this__1828080292.append_oz4qxs_k$(toString_1(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this__1828080292, other, ignoreCase) {
    if (equals_1(new Char(_this__1828080292), new Char(other)))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this__1828080292);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (equals_1(new Char(thisUpper), new Char(otherUpper))) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              var tmp0_asDynamic_0 = toString_0(thisUpper);
              tmp$ret$0 = tmp0_asDynamic_0;
              break $l$block;
            }
            var tmp1_unsafeCast_0 = tmp$ret$0.toLowerCase();
            tmp$ret$1 = tmp1_unsafeCast_0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
        break $l$block_2;
      }
      var tmp_0 = new Char(tmp$ret$3);
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_asDynamic_0 = toString_0(otherUpper);
              tmp$ret$4 = tmp2_asDynamic_0;
              break $l$block_3;
            }
            var tmp3_unsafeCast_0 = tmp$ret$4.toLowerCase();
            tmp$ret$5 = tmp3_unsafeCast_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
        break $l$block_6;
      }
      tmp = equals_1(tmp_0, new Char(tmp$ret$7));
    }
    return tmp;
  }
  function titlecase(_this__1828080292) {
    return titlecaseImpl(_this__1828080292);
  }
  function trimIndent(_this__1828080292) {
    return replaceIndent(_this__1828080292, '');
  }
  function replaceIndent(_this__1828080292, newIndent) {
    var lines_0 = lines(_this__1828080292);
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
          var tmp0_iterator_1_2 = lines_0.iterator_jk1svi_k$();
          while (tmp0_iterator_1_2.hasNext_bitz1p_k$()) {
            var element_2_3 = tmp0_iterator_1_2.next_20eer_k$();
            if (isNotBlank(element_2_3)) {
              tmp0_filterTo_0_1.add_1j60pz_k$(element_2_3);
              Unit_getInstance();
            }
          }
          tmp$ret$0 = tmp0_filterTo_0_1;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var tmp0_map_0 = tmp$ret$1;
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
        var tmp0_iterator_1_2_0 = tmp0_map_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1_2_0.hasNext_bitz1p_k$()) {
          var item_2_3 = tmp0_iterator_1_2_0.next_20eer_k$();
          tmp0_mapTo_0_1.add_1j60pz_k$(indentWidth(item_2_3));
          Unit_getInstance();
        }
        tmp$ret$2 = tmp0_mapTo_0_1;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    var tmp0_elvis_lhs = minOrNull(tmp$ret$3);
    var minCommonIndent = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp$ret$10;
    $l$block_9: {
      var tmp1_reindent_0 = _this__1828080292.length + imul(newIndent.length, lines_0._get_size__809037418_ddoh9m_k$()) | 0;
      var tmp2_reindent_0 = getIndentFunction(newIndent);
      var lastIndex_1 = _get_lastIndex__339712501_2(lines_0);
      var tmp$ret$9;
      $l$block_8: {
        var tmp$ret$8;
        $l$block_7: {
          var tmp1_mapIndexedNotNullTo_0_1 = ArrayList_init_$Create$();
          {
            var index_1_2 = 0;
            var tmp0_iterator_2_3 = lines_0.iterator_jk1svi_k$();
            while (tmp0_iterator_2_3.hasNext_bitz1p_k$()) {
              var item_3_4 = tmp0_iterator_2_3.next_20eer_k$();
              {
                var tmp1_4_6 = index_1_2;
                index_1_2 = tmp1_4_6 + 1 | 0;
                var tmp0__anonymous__1_5_5_1758104773 = checkIndexOverflow(tmp1_4_6);
                var tmp$ret$6;
                $l$block_5: {
                  var tmp;
                  if ((tmp0__anonymous__1_5_5_1758104773 === 0 ? true : tmp0__anonymous__1_5_5_1758104773 === lastIndex_1) ? isBlank(item_3_4) : false) {
                    tmp = null;
                  } else {
                    var tmp$ret$4;
                    $l$block_3: {
                      tmp$ret$4 = drop(item_3_4, minCommonIndent);
                      break $l$block_3;
                    }
                    var tmp0_safe_receiver_4_10 = tmp$ret$4;
                    var tmp_0;
                    if (tmp0_safe_receiver_4_10 == null) {
                      tmp_0 = null;
                    } else {
                      var tmp$ret$5;
                      $l$block_4: {
                        {
                        }
                        tmp$ret$5 = tmp2_reindent_0(tmp0_safe_receiver_4_10);
                        break $l$block_4;
                      }
                      tmp_0 = tmp$ret$5;
                    }
                    var tmp1_elvis_lhs_3_9 = tmp_0;
                    tmp = tmp1_elvis_lhs_3_9 == null ? item_3_4 : tmp1_elvis_lhs_3_9;
                  }
                  tmp$ret$6 = tmp;
                  break $l$block_5;
                }
                var tmp0_safe_receiver_2_6_7 = tmp$ret$6;
                if (tmp0_safe_receiver_2_6_7 == null)
                  null;
                else {
                  var tmp$ret$7;
                  $l$block_6: {
                    {
                    }
                    tmp1_mapIndexedNotNullTo_0_1.add_1j60pz_k$(tmp0_safe_receiver_2_6_7);
                    tmp$ret$7 = Unit_getInstance();
                    break $l$block_6;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
              }
            }
          }
          tmp$ret$8 = tmp1_mapIndexedNotNullTo_0_1;
          break $l$block_7;
        }
        tmp$ret$9 = tmp$ret$8;
        break $l$block_8;
      }
      var tmp_1 = tmp$ret$9;
      var tmp_2 = StringBuilder_init_$Create$(tmp1_reindent_0);
      tmp$ret$10 = joinTo$default(tmp_1, tmp_2, '\n', null, null, 0, null, null, 124, null).toString();
      break $l$block_9;
    }
    return tmp$ret$10;
  }
  function indentWidth(_this__1828080292) {
    var tmp$ret$3;
    $l$block_3: {
      var tmp$ret$1;
      $l$block_1: {
        var inductionVariable = 0;
        var last = charSequenceLength(_this__1828080292) - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$0;
            $l$block: {
              var tmp0__anonymous__3_2495602523 = charSequenceGet(_this__1828080292, index_2);
              tmp$ret$0 = !isWhitespace(tmp0__anonymous__3_2495602523);
              break $l$block;
            }
            if (tmp$ret$0) {
              tmp$ret$1 = index_2;
              break $l$block_1;
            } else {
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = -1;
        break $l$block_1;
      }
      var tmp1_let_0 = tmp$ret$1;
      {
      }
      var tmp$ret$2;
      $l$block_2: {
        tmp$ret$2 = tmp1_let_0 === -1 ? _this__1828080292.length : tmp1_let_0;
        break $l$block_2;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_3;
    }
    return tmp$ret$3;
  }
  function getIndentFunction(indent) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(indent) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = getIndentFunction$lambda();
    } else {
      {
        tmp = getIndentFunction$lambda_0(indent);
      }
    }
    return tmp;
  }
  function getIndentFunction$lambda() {
    return function (line) {
      return line;
    };
  }
  function getIndentFunction$lambda_0($indent) {
    return function (line) {
      return $indent + line;
    };
  }
  function toIntOrNull(_this__1828080292) {
    return toIntOrNull_0(_this__1828080292, 10);
  }
  function toIntOrNull_0(_this__1828080292, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this__1828080292.length;
    if (length === 0)
      return null;
    var start;
    var isNegative;
    var limit;
    var firstChar = charSequenceGet(_this__1828080292, 0);
    if (Char__compareTo_impl_2098686179(firstChar, _Char___init__impl__380027157(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (equals_1(new Char(firstChar), new Char(_Char___init__impl__380027157(45)))) {
        isNegative = true;
        limit = IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$();
      } else if (equals_1(new Char(firstChar), new Char(_Char___init__impl__380027157(43)))) {
        isNegative = false;
        limit = -IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() | 0;
      } else
        return null;
    } else {
      start = 0;
      isNegative = false;
      limit = -IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() | 0;
    }
    var limitForMaxRadix = (-IntCompanionObject_getInstance()._get_MAX_VALUE__3201573499_i2z81x_k$() | 0) / 36 | 0;
    var limitBeforeMul = limitForMaxRadix;
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this__1828080292, i), radix);
        if (digit < 0)
          return null;
        if (result < limitBeforeMul) {
          if (limitBeforeMul === limitForMaxRadix) {
            limitBeforeMul = limit / radix | 0;
            if (result < limitBeforeMul) {
              return null;
            }
          } else {
            return null;
          }
        }
        result = imul(result, radix);
        if (result < (limit + digit | 0))
          return null;
        result = result - digit | 0;
      }
       while (inductionVariable < length);
    return isNegative ? result : -result | 0;
  }
  function numberFormatError(input) {
    throw NumberFormatException_init_$Create$("Invalid number format: '" + input + "'");
  }
  function toLongOrNull(_this__1828080292) {
    return toLongOrNull_0(_this__1828080292, 10);
  }
  function toLongOrNull_0(_this__1828080292, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this__1828080292.length;
    if (length === 0)
      return null;
    var start;
    var isNegative;
    var limit;
    var firstChar = charSequenceGet(_this__1828080292, 0);
    if (Char__compareTo_impl_2098686179(firstChar, _Char___init__impl__380027157(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (equals_1(new Char(firstChar), new Char(_Char___init__impl__380027157(45)))) {
        isNegative = true;
        limit = Companion_getInstance_8()._get_MIN_VALUE__1378605517_mssatp_k$();
      } else if (equals_1(new Char(firstChar), new Char(_Char___init__impl__380027157(43)))) {
        isNegative = false;
        limit = Companion_getInstance_8()._get_MAX_VALUE__3201573499_i2z81x_k$().unaryMinus_6uz0qp_k$();
      } else
        return null;
    } else {
      start = 0;
      isNegative = false;
      limit = Companion_getInstance_8()._get_MAX_VALUE__3201573499_i2z81x_k$().unaryMinus_6uz0qp_k$();
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_div_0 = Companion_getInstance_8()._get_MAX_VALUE__3201573499_i2z81x_k$().unaryMinus_6uz0qp_k$();
      tmp$ret$0 = tmp0_div_0.div_9s1fi3_k$(new Long(36, 0));
      break $l$block;
    }
    var limitForMaxRadix = tmp$ret$0;
    var limitBeforeMul = limitForMaxRadix;
    var result = new Long(0, 0);
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this__1828080292, i), radix);
        if (digit < 0)
          return null;
        if (result.compareTo_n4fqi2_k$(limitBeforeMul) < 0) {
          if (limitBeforeMul.equals(limitForMaxRadix)) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = limit.div_9s1fi3_k$(toLong_0(radix));
              break $l$block_0;
            }
            limitBeforeMul = tmp$ret$1;
            if (result.compareTo_n4fqi2_k$(limitBeforeMul) < 0) {
              return null;
            }
          } else {
            return null;
          }
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp1_times_0 = result;
          tmp$ret$2 = tmp1_times_0.times_2zfqpc_k$(toLong_0(radix));
          break $l$block_1;
        }
        result = tmp$ret$2;
        var tmp = result;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = limit.plus_u6jwas_k$(toLong_0(digit));
          break $l$block_2;
        }
        if (tmp.compareTo_n4fqi2_k$(tmp$ret$3) < 0)
          return null;
        else {
        }
        var tmp$ret$4;
        $l$block_3: {
          var tmp2_minus_0 = result;
          tmp$ret$4 = tmp2_minus_0.minus_llf5ei_k$(toLong_0(digit));
          break $l$block_3;
        }
        result = tmp$ret$4;
      }
       while (inductionVariable < length);
    return isNegative ? result : result.unaryMinus_6uz0qp_k$();
  }
  function isNotBlank(_this__1828080292) {
    return !isBlank(_this__1828080292);
  }
  function contains_0(_this__1828080292, other, ignoreCase) {
    var tmp;
    if (typeof other === 'string') {
      tmp = indexOf$default(_this__1828080292, other, 0, ignoreCase, 2, null) >= 0;
    } else {
      {
        var tmp_0 = charSequenceLength(_this__1828080292);
        tmp = indexOf$default_0(_this__1828080292, other, 0, tmp_0, ignoreCase, false, 16, null) >= 0;
      }
    }
    return tmp;
  }
  function contains$default(_this__1828080292, other, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return contains_0(_this__1828080292, other, ignoreCase);
  }
  function indexOf_0(_this__1828080292, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__1828080292 === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this__1828080292);
      tmp = indexOf$default_0(_this__1828080292, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeIndexOf_0 = _this__1828080292;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.indexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function indexOf$default(_this__1828080292, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_0(_this__1828080292, string, startIndex, ignoreCase);
  }
  function indexOf_1(_this__1828080292, other, startIndex, endIndex, ignoreCase, last) {
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this__1828080292))) : downTo(coerceAtMost(startIndex, _get_lastIndex__339712501_3(_this__1828080292)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this__1828080292 === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._get_first__3232921377_hkbbvj_k$();
      var last_0 = indices._get_last__802328181_d9oodx_k$();
      var step = indices._get_step__809345279_ddv2tb_k$();
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this__1828080292, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      {
        var inductionVariable_0 = indices._get_first__3232921377_hkbbvj_k$();
        var last_1 = indices._get_last__802328181_d9oodx_k$();
        var step_0 = indices._get_step__809345279_ddv2tb_k$();
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            if (regionMatchesImpl(other, 0, _this__1828080292, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_1));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this__1828080292, other, startIndex, endIndex, ignoreCase, last, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last = false;
    return indexOf_1(_this__1828080292, other, startIndex, endIndex, ignoreCase, last);
  }
  function _get_lastIndex__339712501_3(_this__1828080292) {
    return charSequenceLength(_this__1828080292) - 1 | 0;
  }
  function regionMatchesImpl(_this__1828080292, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this__1828080292) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this__1828080292, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function requireNonNegativeLimit(limit) {
    var tmp0_require_0 = limit >= 0;
    {
    }
    var tmp;
    if (!tmp0_require_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 'Limit must be non-negative, but was ' + limit;
        break $l$block;
      }
      var message_2 = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$_0(toString_2(message_2));
    }
    return tmp;
  }
  function _get_indices__2241594442_2(_this__1828080292) {
    return numberRangeToNumber(0, charSequenceLength(_this__1828080292) - 1 | 0);
  }
  function indexOf_2(_this__1828080292, char, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__1828080292 === 'string');
    }
    if (tmp_0) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = charArrayOf([char]);
        break $l$block;
      }
      tmp = indexOfAny(_this__1828080292, tmp$ret$0, startIndex, ignoreCase);
    } else {
      {
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_nativeIndexOf_0 = _this__1828080292;
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_nativeIndexOf_0 = toString_0(char);
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = tmp1_nativeIndexOf_0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1.indexOf(tmp0_nativeIndexOf_0, startIndex);
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp = tmp$ret$3;
      }
    }
    return tmp;
  }
  function indexOf$default_1(_this__1828080292, char, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_2(_this__1828080292, char, startIndex, ignoreCase);
  }
  function indexOfAny(_this__1828080292, chars, startIndex, ignoreCase) {
    var tmp;
    if (!ignoreCase ? chars.length === 1 : false) {
      tmp = typeof _this__1828080292 === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var char = single(chars);
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_nativeIndexOf_0 = _this__1828080292;
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeIndexOf_0 = toString_0(char);
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp1_nativeIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.indexOf(tmp0_nativeIndexOf_0, startIndex);
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      return tmp$ret$2;
    } else {
    }
    var inductionVariable = coerceAtLeast(startIndex, 0);
    var last = _get_lastIndex__339712501_3(_this__1828080292);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var charAtIndex = charSequenceGet(_this__1828080292, index);
        var tmp$ret$4;
        $l$block_4: {
          var indexedObject = chars;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject.length;
          while (inductionVariable_0 < last_0) {
            var element_2 = indexedObject[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$3;
            $l$block_2: {
              tmp$ret$3 = equals(element_2, charAtIndex, ignoreCase);
              break $l$block_2;
            }
            if (tmp$ret$3) {
              tmp$ret$4 = true;
              break $l$block_4;
            } else {
            }
          }
          tmp$ret$4 = false;
          break $l$block_4;
        }
        if (tmp$ret$4)
          return index;
        else {
        }
      }
       while (!(index === last));
    return -1;
  }
  function lastIndexOf(_this__1828080292, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__1828080292 === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_1(_this__1828080292, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_nativeLastIndexOf_0 = _this__1828080292;
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_nativeLastIndexOf_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0.lastIndexOf(string, startIndex);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this__1828080292, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__339712501_3(_this__1828080292);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this__1828080292, string, startIndex, ignoreCase);
  }
  function lines(_this__1828080292) {
    return toList_1(lineSequence(_this__1828080292));
  }
  function lineSequence(_this__1828080292) {
    return splitToSequence$default(_this__1828080292, ['\r\n', '\n', '\r'], false, 0, 6, null);
  }
  function splitToSequence(_this__1828080292, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this__1828080292, delimiters, 0, ignoreCase, limit, 2, null);
    return map(tmp, splitToSequence$lambda(_this__1828080292));
  }
  function splitToSequence$default(_this__1828080292, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this__1828080292, delimiters, ignoreCase, limit);
  }
  function substring(_this__1828080292, range) {
    return toString_2(charSequenceSubSequence(_this__1828080292, range._get_start__3614751663_b8zdqp_k$(), range._get_endInclusive__731268122_c3dm3e_k$() + 1 | 0));
  }
  function rangesDelimitedBy(_this__1828080292, delimiters, startIndex, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this__1828080292, startIndex, limit, rangesDelimitedBy$lambda(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this__1828080292, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this__1828080292, delimiters, startIndex, ignoreCase, limit);
  }
  function calcNext_0($this) {
    if ($this.nextSearchIndex_1 < 0) {
      $this.nextState_1 = 0;
      $this.nextItem_1 = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this.this$0__1.limit_1 > 0) {
        var tmp0_this = $this;
        tmp0_this.counter_1 = tmp0_this.counter_1 + 1 | 0;
        tmp_0 = tmp0_this.counter_1 >= $this.this$0__1.limit_1;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this.nextSearchIndex_1 > charSequenceLength($this.this$0__1.input_1);
        }
      }
      if (tmp) {
        $this.nextItem_1 = numberRangeToNumber($this.currentStartIndex_1, _get_lastIndex__339712501_3($this.this$0__1.input_1));
        $this.nextSearchIndex_1 = -1;
      } else {
        {
          var match = $this.this$0__1.getNextMatch_1($this.this$0__1.input_1, $this.nextSearchIndex_1);
          if (match == null) {
            $this.nextItem_1 = numberRangeToNumber($this.currentStartIndex_1, _get_lastIndex__339712501_3($this.this$0__1.input_1));
            $this.nextSearchIndex_1 = -1;
          } else {
            var tmp1_container = match;
            var index = tmp1_container.component1_7eebsc_k$();
            var length = tmp1_container.component2_7eebsb_k$();
            $this.nextItem_1 = until($this.currentStartIndex_1, index);
            $this.currentStartIndex_1 = index + length | 0;
            $this.nextSearchIndex_1 = $this.currentStartIndex_1 + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this.nextState_1 = 1;
    }
  }
  function DelimitedRangesSequence$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.nextState_1 = -1;
    this.currentStartIndex_1 = coerceIn(this$0.startIndex_1, 0, charSequenceLength(this$0.input_1));
    this.nextSearchIndex_1 = this.currentStartIndex_1;
    this.nextItem_1 = null;
    this.counter_1 = 0;
  }
  DelimitedRangesSequence$iterator$1.prototype.next_20eer_k$ = function () {
    if (this.nextState_1 === -1)
      calcNext_0(this);
    if (this.nextState_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this.nextItem_1;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this.nextItem_1 = null;
    this.nextState_1 = -1;
    return result;
  };
  DelimitedRangesSequence$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    if (this.nextState_1 === -1)
      calcNext_0(this);
    return this.nextState_1 === 1;
  };
  DelimitedRangesSequence$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this.input_1 = input;
    this.startIndex_1 = startIndex;
    this.limit_1 = limit;
    this.getNextMatch_1 = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_jk1svi_k$ = function () {
    return new DelimitedRangesSequence$iterator$1(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this__1828080292, strings, startIndex, ignoreCase, last) {
    if (!ignoreCase ? strings._get_size__809037418_ddoh9m_k$() === 1 : false) {
      var string = single_0(strings);
      var tmp;
      if (!last) {
        tmp = indexOf$default(_this__1828080292, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this__1828080292, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this__1828080292)) : downTo(coerceAtMost(startIndex, _get_lastIndex__339712501_3(_this__1828080292)), 0);
    if (typeof _this__1828080292 === 'string') {
      var inductionVariable = indices._get_first__3232921377_hkbbvj_k$();
      var last_0 = indices._get_last__802328181_d9oodx_k$();
      var step = indices._get_step__809345279_ddv2tb_k$();
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block_1: {
            var tmp0_iterator_1 = strings.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_2 = tmp0_iterator_1.next_20eer_k$();
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = regionMatches(element_2, 0, _this__1828080292, index_0, element_2.length, ignoreCase);
                break $l$block;
              }
              if (tmp$ret$0) {
                tmp$ret$1 = element_2;
                break $l$block_1;
              } else {
              }
            }
            tmp$ret$1 = null;
            break $l$block_1;
          }
          var matchingString = tmp$ret$1;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_0));
    } else {
      {
        var inductionVariable_0 = indices._get_first__3232921377_hkbbvj_k$();
        var last_1 = indices._get_last__802328181_d9oodx_k$();
        var step_0 = indices._get_step__809345279_ddv2tb_k$();
        if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var tmp$ret$3;
            $l$block_4: {
              var tmp0_iterator_1_0 = strings.iterator_jk1svi_k$();
              while (tmp0_iterator_1_0.hasNext_bitz1p_k$()) {
                var element_2_0 = tmp0_iterator_1_0.next_20eer_k$();
                var tmp$ret$2;
                $l$block_2: {
                  tmp$ret$2 = regionMatchesImpl(element_2_0, 0, _this__1828080292, index_1, element_2_0.length, ignoreCase);
                  break $l$block_2;
                }
                if (tmp$ret$2) {
                  tmp$ret$3 = element_2_0;
                  break $l$block_4;
                } else {
                }
              }
              tmp$ret$3 = null;
              break $l$block_4;
            }
            var matchingString_0 = tmp$ret$3;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_1));
      }
    }
    return null;
  }
  function splitToSequence$lambda($this_splitToSequence) {
    return function (it) {
      return substring($this_splitToSequence, it);
    };
  }
  function rangesDelimitedBy$lambda($delimitersList, $ignoreCase) {
    return function ($this$$receiver, currentIndex) {
      var tmp0_safe_receiver = findAnyOf($this$$receiver, $delimitersList, currentIndex, $ignoreCase, false);
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
            tmp$ret$0 = to(tmp0_safe_receiver._get_first__3232921377_hkbbvj_k$(), tmp0_safe_receiver._get_second__4255435031_njbah_k$().length);
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      return tmp;
    };
  }
  function MatchResult() {
  }
  MatchResult.$metadata$ = {
    simpleName: 'MatchResult',
    kind: 'interface',
    interfaces: []
  };
  function MatchGroupCollection() {
  }
  MatchGroupCollection.$metadata$ = {
    simpleName: 'MatchGroupCollection',
    kind: 'interface',
    interfaces: [Collection]
  };
  function _get_UNDEFINED_RESULT__4133933631() {
    init_properties_DeepRecursive_kt_3625982990();
    return UNDEFINED_RESULT;
  }
  var UNDEFINED_RESULT;
  function DeepRecursiveScope() {
  }
  DeepRecursiveScope.$metadata$ = {
    simpleName: 'DeepRecursiveScope',
    kind: 'class',
    interfaces: []
  };
  function invoke(_this__1828080292, value) {
    init_properties_DeepRecursive_kt_3625982990();
    return (new DeepRecursiveScopeImpl(_this__1828080292.block_1, value)).runCallLoop_pzbl0z_k$();
  }
  function DeepRecursiveFunction(block) {
    this.block_1 = block;
  }
  DeepRecursiveFunction.$metadata$ = {
    simpleName: 'DeepRecursiveFunction',
    kind: 'class',
    interfaces: []
  };
  function DeepRecursiveScopeImpl(block, value) {
    DeepRecursiveScope.call(this);
    var tmp = this;
    tmp.function_1 = isSuspendFunction(block, 2) ? block : THROW_CCE();
    this.value_1 = value;
    var tmp_0 = this;
    tmp_0.cont_1 = isInterface(this, Continuation) ? this : THROW_CCE();
    this.result_1 = _get_UNDEFINED_RESULT__4133933631();
  }
  DeepRecursiveScopeImpl.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  DeepRecursiveScopeImpl.prototype.resumeWith_4vzby1_k$ = function (result) {
    this.cont_1 = null;
    this.result_1 = result;
  };
  DeepRecursiveScopeImpl.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_4vzby1_k$(result);
  };
  DeepRecursiveScopeImpl.prototype.callRecursive_6euk1h_k$ = function (value, $cont) {
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_2495602521 = $cont;
      var tmp = this;
      tmp.cont_1 = isInterface(tmp0__anonymous__1_2495602521, Continuation) ? tmp0__anonymous__1_2495602521 : THROW_CCE();
      this.value_1 = value;
      tmp$ret$0 = _get_COROUTINE_SUSPENDED__2870145053();
      break $l$block;
    }
    return tmp$ret$0;
  };
  DeepRecursiveScopeImpl.prototype.runCallLoop_pzbl0z_k$ = function () {
    $l$loop: while (true) {
      var result = this.result_1;
      var tmp0_elvis_lhs = this.cont_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_getOrThrow_0 = new Result(result) instanceof Result ? result : THROW_CCE();
          throwOnFailure(tmp0_getOrThrow_0);
          var tmp_0 = _Result___get_value__impl__3597185688(tmp0_getOrThrow_0);
          tmp$ret$0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          break $l$block;
        }
        return tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var cont = tmp;
      if (equals_1(_get_UNDEFINED_RESULT__4133933631(), result)) {
        var tmp_1;
        try {
          var tmp$ret$2;
          $l$block_1: {
            var tmp1_startCoroutineUninterceptedOrReturn_0 = this.function_1;
            var tmp2_startCoroutineUninterceptedOrReturn_0 = this.value_1;
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = tmp1_startCoroutineUninterceptedOrReturn_0;
              break $l$block_0;
            }
            var a_1 = tmp$ret$1;
            tmp$ret$2 = typeof a_1 === 'function' ? a_1(this, tmp2_startCoroutineUninterceptedOrReturn_0, cont) : tmp1_startCoroutineUninterceptedOrReturn_0.invoke_f2mof9_k$(this, tmp2_startCoroutineUninterceptedOrReturn_0, cont);
            break $l$block_1;
          }
          tmp_1 = tmp$ret$2;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Error) {
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_failure_0_1 = Companion_getInstance_2();
                tmp$ret$3 = _Result___init__impl__2241242780(createFailure($p));
                break $l$block_2;
              }
              tmp$ret$4 = cont.resumeWith_s3a3yh_k$(tmp$ret$3);
              break $l$block_3;
            }
            continue $l$loop;
          } else {
            {
              throw $p;
            }
          }
          tmp_1 = tmp_2;
        }
        var r = tmp_1;
        if (!(r === _get_COROUTINE_SUSPENDED__2870145053())) {
          var tmp$ret$6;
          $l$block_5: {
            var tmp3_resume_0 = (r == null ? true : isObject(r)) ? r : THROW_CCE();
            var tmp$ret$5;
            $l$block_4: {
              var tmp0_success_0_1 = Companion_getInstance_2();
              tmp$ret$5 = _Result___init__impl__2241242780(tmp3_resume_0);
              break $l$block_4;
            }
            tmp$ret$6 = cont.resumeWith_s3a3yh_k$(tmp$ret$5);
            break $l$block_5;
          }
        }
      } else {
        this.result_1 = _get_UNDEFINED_RESULT__4133933631();
        cont.resumeWith_s3a3yh_k$(result);
      }
    }
  };
  DeepRecursiveScopeImpl.$metadata$ = {
    simpleName: 'DeepRecursiveScopeImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  var properties_initialized_DeepRecursive_kt_3933836138;
  function init_properties_DeepRecursive_kt_3625982990() {
    if (!properties_initialized_DeepRecursive_kt_3933836138) {
      properties_initialized_DeepRecursive_kt_3933836138 = true;
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0 = Companion_getInstance_2();
        var tmp1_success_0 = _get_COROUTINE_SUSPENDED__2870145053();
        tmp$ret$0 = _Result___init__impl__2241242780(tmp1_success_0);
        break $l$block;
      }
      UNDEFINED_RESULT = tmp$ret$0;
      new Result(Unit_getInstance());
    }
  }
  function Lazy() {
  }
  Lazy.$metadata$ = {
    simpleName: 'Lazy',
    kind: 'interface',
    interfaces: []
  };
  var LazyThreadSafetyMode_SYNCHRONIZED_instance;
  var LazyThreadSafetyMode_PUBLICATION_instance;
  var LazyThreadSafetyMode_NONE_instance;
  var LazyThreadSafetyMode_entriesInitialized;
  function LazyThreadSafetyMode_initEntries() {
    if (LazyThreadSafetyMode_entriesInitialized)
      return Unit_getInstance();
    LazyThreadSafetyMode_entriesInitialized = true;
    LazyThreadSafetyMode_SYNCHRONIZED_instance = new LazyThreadSafetyMode('SYNCHRONIZED', 0);
    LazyThreadSafetyMode_PUBLICATION_instance = new LazyThreadSafetyMode('PUBLICATION', 1);
    LazyThreadSafetyMode_NONE_instance = new LazyThreadSafetyMode('NONE', 2);
  }
  function LazyThreadSafetyMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  LazyThreadSafetyMode.$metadata$ = {
    simpleName: 'LazyThreadSafetyMode',
    kind: 'class',
    interfaces: []
  };
  function UnsafeLazyImpl(initializer) {
    this.initializer_1 = initializer;
    this._value_1 = UNINITIALIZED_VALUE_getInstance();
  }
  UnsafeLazyImpl.prototype._get_value__3683422336_a43j40_k$ = function () {
    if (this._value_1 === UNINITIALIZED_VALUE_getInstance()) {
      this._value_1 = ensureNotNull(this.initializer_1)();
      this.initializer_1 = null;
    }
    var tmp = this._value_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  UnsafeLazyImpl.prototype.isInitialized_2wsk3a_k$ = function () {
    return !(this._value_1 === UNINITIALIZED_VALUE_getInstance());
  };
  UnsafeLazyImpl.prototype.toString = function () {
    return this.isInitialized_2wsk3a_k$() ? toString_1(this._get_value__3683422336_a43j40_k$()) : 'Lazy value not initialized yet.';
  };
  UnsafeLazyImpl.$metadata$ = {
    simpleName: 'UnsafeLazyImpl',
    kind: 'class',
    interfaces: [Lazy, Serializable]
  };
  function UNINITIALIZED_VALUE() {
    UNINITIALIZED_VALUE_instance = this;
  }
  UNINITIALIZED_VALUE.$metadata$ = {
    simpleName: 'UNINITIALIZED_VALUE',
    kind: 'object',
    interfaces: []
  };
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    if (UNINITIALIZED_VALUE_instance == null)
      new UNINITIALIZED_VALUE();
    return UNINITIALIZED_VALUE_instance;
  }
  function LazyThreadSafetyMode_PUBLICATION_getInstance() {
    LazyThreadSafetyMode_initEntries();
    return LazyThreadSafetyMode_PUBLICATION_instance;
  }
  function _Result___init__impl__2241242780(value) {
    return value;
  }
  function _Result___get_value__impl__3597185688(this_0) {
    return this_0;
  }
  function _Result___get_isFailure__impl__3103244073(this_0) {
    var tmp = _Result___get_value__impl__3597185688(this_0);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl_1523290257(this_0) {
    var tmp0_subject = _Result___get_value__impl__3597185688(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl__3597185688(this_0).exception_1;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Result__toString_impl_2106507044(this_0) {
    var tmp0_subject = _Result___get_value__impl__3597185688(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = toString_2(_Result___get_value__impl__3597185688(this_0));
    } else {
      {
        tmp = 'Success(' + toString_1(_Result___get_value__impl__3597185688(this_0)) + ')';
      }
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Failure(exception) {
    this.exception_1 = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_1(this.exception_1, other.exception_1);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this.exception_1);
  };
  Failure.prototype.toString = function () {
    return 'Failure(' + this.exception_1 + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function Result__hashCode_impl_791091925(this_0) {
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function Result__equals_impl_721330801(this_0, other) {
    if (!(other instanceof Result))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Result ? other.value_1 : THROW_CCE();
    if (!equals_1(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Result(value) {
    Companion_getInstance_2();
    this.value_1 = value;
  }
  Result.prototype.toString = function () {
    return Result__toString_impl_2106507044(this.value_1);
  };
  Result.prototype.hashCode = function () {
    return Result__hashCode_impl_791091925(this.value_1);
  };
  Result.prototype.equals = function (other) {
    return Result__equals_impl_721330801(this.value_1, other);
  };
  Result.$metadata$ = {
    simpleName: 'Result',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function throwOnFailure(_this__1828080292) {
    var tmp = _Result___get_value__impl__3597185688(_this__1828080292);
    if (tmp instanceof Failure)
      throw _Result___get_value__impl__3597185688(_this__1828080292).exception_1;
    else {
    }
  }
  function NotImplementedError(message) {
    Error_init_$Init$(message, this);
    captureStack(this, NotImplementedError);
  }
  NotImplementedError.$metadata$ = {
    simpleName: 'NotImplementedError',
    kind: 'class',
    interfaces: []
  };
  function Pair(first, second) {
    this.first_1 = first;
    this.second_1 = second;
  }
  Pair.prototype._get_first__3232921377_hkbbvj_k$ = function () {
    return this.first_1;
  };
  Pair.prototype._get_second__4255435031_njbah_k$ = function () {
    return this.second_1;
  };
  Pair.prototype.toString = function () {
    return '(' + this.first_1 + ', ' + this.second_1 + ')';
  };
  Pair.prototype.component1_7eebsc_k$ = function () {
    return this.first_1;
  };
  Pair.prototype.component2_7eebsb_k$ = function () {
    return this.second_1;
  };
  Pair.prototype.hashCode = function () {
    var result = this.first_1 == null ? 0 : hashCode(this.first_1);
    result = imul(result, 31) + (this.second_1 == null ? 0 : hashCode(this.second_1)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_1(this.first_1, tmp0_other_with_cast.first_1))
      return false;
    if (!equals_1(this.second_1, tmp0_other_with_cast.second_1))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this__1828080292, that) {
    return new Pair(_this__1828080292, that);
  }
  function Triple(first, second, third) {
    this.first_1 = first;
    this.second_1 = second;
    this.third_1 = third;
  }
  Triple.prototype.toString = function () {
    return '(' + this.first_1 + ', ' + this.second_1 + ', ' + this.third_1 + ')';
  };
  Triple.prototype.hashCode = function () {
    var result = this.first_1 == null ? 0 : hashCode(this.first_1);
    result = imul(result, 31) + (this.second_1 == null ? 0 : hashCode(this.second_1)) | 0;
    result = imul(result, 31) + (this.third_1 == null ? 0 : hashCode(this.third_1)) | 0;
    return result;
  };
  Triple.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Triple))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Triple ? other : THROW_CCE();
    if (!equals_1(this.first_1, tmp0_other_with_cast.first_1))
      return false;
    if (!equals_1(this.second_1, tmp0_other_with_cast.second_1))
      return false;
    if (!equals_1(this.third_1, tmp0_other_with_cast.third_1))
      return false;
    return true;
  };
  Triple.$metadata$ = {
    simpleName: 'Triple',
    kind: 'class',
    interfaces: [Serializable]
  };
  function _UShort___init__impl__3115094534(data) {
    return data;
  }
  function _UShort___get_data__impl__26876597(this_0) {
    return this_0;
  }
  function Annotation() {
  }
  Annotation.$metadata$ = {
    simpleName: 'Annotation',
    kind: 'interface',
    interfaces: []
  };
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_20eer_k$ = function () {
    return this.nextInt_ujorgc_k$();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.step_1 = step;
    this.finalElement_1 = last;
    this.hasNext_1 = this.step_1 > 0 ? first <= last : first >= last;
    this.next_1 = this.hasNext_1 ? first : this.finalElement_1;
  }
  IntProgressionIterator.prototype.hasNext_bitz1p_k$ = function () {
    return this.hasNext_1;
  };
  IntProgressionIterator.prototype.nextInt_ujorgc_k$ = function () {
    var value = this.next_1;
    if (value === this.finalElement_1) {
      if (!this.hasNext_1)
        throw NoSuchElementException_init_$Create$();
      this.hasNext_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this.next_1 = tmp0_this.next_1 + this.step_1 | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.fromClosedRange_vhxzyy_k$ = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_3();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._get_MIN_VALUE__1378605517_mssatp_k$())
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.first_1 = start;
    this.last_1 = getProgressionLastElement(start, endInclusive, step);
    this.step_1 = step;
  }
  IntProgression.prototype._get_first__3232921377_hkbbvj_k$ = function () {
    return this.first_1;
  };
  IntProgression.prototype._get_last__802328181_d9oodx_k$ = function () {
    return this.last_1;
  };
  IntProgression.prototype._get_step__809345279_ddv2tb_k$ = function () {
    return this.step_1;
  };
  IntProgression.prototype.iterator_jk1svi_k$ = function () {
    return new IntProgressionIterator(this.first_1, this.last_1, this.step_1);
  };
  IntProgression.prototype.isEmpty_y1axqb_k$ = function () {
    return this.step_1 > 0 ? this.first_1 > this.last_1 : this.first_1 < this.last_1;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_y1axqb_k$() ? other.isEmpty_y1axqb_k$() : false) ? true : (this.first_1 === other.first_1 ? this.last_1 === other.last_1 : false) ? this.step_1 === other.step_1 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_y1axqb_k$() ? -1 : imul(31, imul(31, this.first_1) + this.last_1 | 0) + this.step_1 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this.step_1 > 0 ? '' + this.first_1 + '..' + this.last_1 + ' step ' + this.step_1 : '' + this.first_1 + ' downTo ' + this.last_1 + ' step ' + (-this.step_1 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.EMPTY_1 = new IntRange(1, 0);
  }
  Companion_4.prototype._get_EMPTY__2261257284_xmtgos_k$ = function () {
    return this.EMPTY_1;
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_4();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start__3614751663_b8zdqp_k$ = function () {
    return this._get_first__3232921377_hkbbvj_k$();
  };
  IntRange.prototype._get_endInclusive__731268122_c3dm3e_k$ = function () {
    return this._get_last__802328181_d9oodx_k$();
  };
  IntRange.prototype.isEmpty_y1axqb_k$ = function () {
    return this._get_first__3232921377_hkbbvj_k$() > this._get_last__802328181_d9oodx_k$();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_y1axqb_k$() ? other.isEmpty_y1axqb_k$() : false) ? true : this._get_first__3232921377_hkbbvj_k$() === other._get_first__3232921377_hkbbvj_k$() ? this._get_last__802328181_d9oodx_k$() === other._get_last__802328181_d9oodx_k$() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_y1axqb_k$() ? -1 : imul(31, this._get_first__3232921377_hkbbvj_k$()) + this._get_last__802328181_d9oodx_k$() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__3232921377_hkbbvj_k$() + '..' + this._get_last__802328181_d9oodx_k$();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod = a % b;
    return mod >= 0 ? mod : mod + b | 0;
  }
  function ByteCompanionObject() {
    ByteCompanionObject_instance = this;
    this.MIN_VALUE_1 = -128;
    this.MAX_VALUE_1 = 127;
    this.SIZE_BYTES_1 = 1;
    this.SIZE_BITS_1 = 8;
  }
  ByteCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$ = function () {
    return this.MIN_VALUE_1;
  };
  ByteCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$ = function () {
    return this.MAX_VALUE_1;
  };
  ByteCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$ = function () {
    return this.SIZE_BYTES_1;
  };
  ByteCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$ = function () {
    return this.SIZE_BITS_1;
  };
  ByteCompanionObject.$metadata$ = {
    simpleName: 'ByteCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(ByteCompanionObject.prototype, 'MIN_VALUE', {
    configurable: true,
    get: ByteCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$
  });
  Object.defineProperty(ByteCompanionObject.prototype, 'MAX_VALUE', {
    configurable: true,
    get: ByteCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$
  });
  Object.defineProperty(ByteCompanionObject.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: ByteCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$
  });
  Object.defineProperty(ByteCompanionObject.prototype, 'SIZE_BITS', {
    configurable: true,
    get: ByteCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$
  });
  var ByteCompanionObject_instance;
  function ByteCompanionObject_getInstance() {
    if (ByteCompanionObject_instance == null)
      new ByteCompanionObject();
    return ByteCompanionObject_instance;
  }
  function ShortCompanionObject() {
    ShortCompanionObject_instance = this;
    this.MIN_VALUE_1 = -32768;
    this.MAX_VALUE_1 = 32767;
    this.SIZE_BYTES_1 = 2;
    this.SIZE_BITS_1 = 16;
  }
  ShortCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$ = function () {
    return this.MIN_VALUE_1;
  };
  ShortCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$ = function () {
    return this.MAX_VALUE_1;
  };
  ShortCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$ = function () {
    return this.SIZE_BYTES_1;
  };
  ShortCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$ = function () {
    return this.SIZE_BITS_1;
  };
  ShortCompanionObject.$metadata$ = {
    simpleName: 'ShortCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(ShortCompanionObject.prototype, 'MIN_VALUE', {
    configurable: true,
    get: ShortCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$
  });
  Object.defineProperty(ShortCompanionObject.prototype, 'MAX_VALUE', {
    configurable: true,
    get: ShortCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$
  });
  Object.defineProperty(ShortCompanionObject.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: ShortCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$
  });
  Object.defineProperty(ShortCompanionObject.prototype, 'SIZE_BITS', {
    configurable: true,
    get: ShortCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$
  });
  var ShortCompanionObject_instance;
  function ShortCompanionObject_getInstance() {
    if (ShortCompanionObject_instance == null)
      new ShortCompanionObject();
    return ShortCompanionObject_instance;
  }
  function IntCompanionObject() {
    IntCompanionObject_instance = this;
    this.MIN_VALUE_1 = -2147483648;
    this.MAX_VALUE_1 = 2147483647;
    this.SIZE_BYTES_1 = 4;
    this.SIZE_BITS_1 = 32;
  }
  IntCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$ = function () {
    return this.MIN_VALUE_1;
  };
  IntCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$ = function () {
    return this.MAX_VALUE_1;
  };
  IntCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$ = function () {
    return this.SIZE_BYTES_1;
  };
  IntCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$ = function () {
    return this.SIZE_BITS_1;
  };
  IntCompanionObject.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$
  });
  Object.defineProperty(IntCompanionObject.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$
  });
  Object.defineProperty(IntCompanionObject.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$
  });
  Object.defineProperty(IntCompanionObject.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject();
    return IntCompanionObject_instance;
  }
  function FloatCompanionObject() {
    FloatCompanionObject_instance = this;
    this.MIN_VALUE_1 = 1.4E-45;
    this.MAX_VALUE_1 = 3.4028235E38;
    this.POSITIVE_INFINITY_1 = Infinity;
    this.NEGATIVE_INFINITY_1 = -Infinity;
    this.NaN_1 = NaN;
    this.SIZE_BYTES_1 = 4;
    this.SIZE_BITS_1 = 32;
  }
  FloatCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$ = function () {
    return this.MIN_VALUE_1;
  };
  FloatCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$ = function () {
    return this.MAX_VALUE_1;
  };
  FloatCompanionObject.prototype._get_POSITIVE_INFINITY__280378211_4mxh7n_k$ = function () {
    return this.POSITIVE_INFINITY_1;
  };
  FloatCompanionObject.prototype._get_NEGATIVE_INFINITY__4282258079_7keht_k$ = function () {
    return this.NEGATIVE_INFINITY_1;
  };
  FloatCompanionObject.prototype._get_NaN__856270614_e5sumu_k$ = function () {
    return this.NaN_1;
  };
  FloatCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$ = function () {
    return this.SIZE_BYTES_1;
  };
  FloatCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$ = function () {
    return this.SIZE_BITS_1;
  };
  FloatCompanionObject.$metadata$ = {
    simpleName: 'FloatCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(FloatCompanionObject.prototype, 'MIN_VALUE', {
    configurable: true,
    get: FloatCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$
  });
  Object.defineProperty(FloatCompanionObject.prototype, 'MAX_VALUE', {
    configurable: true,
    get: FloatCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$
  });
  Object.defineProperty(FloatCompanionObject.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: FloatCompanionObject.prototype._get_POSITIVE_INFINITY__280378211_4mxh7n_k$
  });
  Object.defineProperty(FloatCompanionObject.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: FloatCompanionObject.prototype._get_NEGATIVE_INFINITY__4282258079_7keht_k$
  });
  Object.defineProperty(FloatCompanionObject.prototype, 'NaN', {
    configurable: true,
    get: FloatCompanionObject.prototype._get_NaN__856270614_e5sumu_k$
  });
  Object.defineProperty(FloatCompanionObject.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: FloatCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$
  });
  Object.defineProperty(FloatCompanionObject.prototype, 'SIZE_BITS', {
    configurable: true,
    get: FloatCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$
  });
  var FloatCompanionObject_instance;
  function FloatCompanionObject_getInstance() {
    if (FloatCompanionObject_instance == null)
      new FloatCompanionObject();
    return FloatCompanionObject_instance;
  }
  function DoubleCompanionObject() {
    DoubleCompanionObject_instance = this;
    this.MIN_VALUE_1 = 4.9E-324;
    this.MAX_VALUE_1 = 1.7976931348623157E308;
    this.POSITIVE_INFINITY_1 = Infinity;
    this.NEGATIVE_INFINITY_1 = -Infinity;
    this.NaN_1 = NaN;
    this.SIZE_BYTES_1 = 8;
    this.SIZE_BITS_1 = 64;
  }
  DoubleCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$ = function () {
    return this.MIN_VALUE_1;
  };
  DoubleCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$ = function () {
    return this.MAX_VALUE_1;
  };
  DoubleCompanionObject.prototype._get_POSITIVE_INFINITY__280378211_4mxh7n_k$ = function () {
    return this.POSITIVE_INFINITY_1;
  };
  DoubleCompanionObject.prototype._get_NEGATIVE_INFINITY__4282258079_7keht_k$ = function () {
    return this.NEGATIVE_INFINITY_1;
  };
  DoubleCompanionObject.prototype._get_NaN__856270614_e5sumu_k$ = function () {
    return this.NaN_1;
  };
  DoubleCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$ = function () {
    return this.SIZE_BYTES_1;
  };
  DoubleCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$ = function () {
    return this.SIZE_BITS_1;
  };
  DoubleCompanionObject.$metadata$ = {
    simpleName: 'DoubleCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(DoubleCompanionObject.prototype, 'MIN_VALUE', {
    configurable: true,
    get: DoubleCompanionObject.prototype._get_MIN_VALUE__1378605517_mssatp_k$
  });
  Object.defineProperty(DoubleCompanionObject.prototype, 'MAX_VALUE', {
    configurable: true,
    get: DoubleCompanionObject.prototype._get_MAX_VALUE__3201573499_i2z81x_k$
  });
  Object.defineProperty(DoubleCompanionObject.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject.prototype._get_POSITIVE_INFINITY__280378211_4mxh7n_k$
  });
  Object.defineProperty(DoubleCompanionObject.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject.prototype._get_NEGATIVE_INFINITY__4282258079_7keht_k$
  });
  Object.defineProperty(DoubleCompanionObject.prototype, 'NaN', {
    configurable: true,
    get: DoubleCompanionObject.prototype._get_NaN__856270614_e5sumu_k$
  });
  Object.defineProperty(DoubleCompanionObject.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: DoubleCompanionObject.prototype._get_SIZE_BYTES__3045450654_knxh7m_k$
  });
  Object.defineProperty(DoubleCompanionObject.prototype, 'SIZE_BITS', {
    configurable: true,
    get: DoubleCompanionObject.prototype._get_SIZE_BITS__2591616077_s64q7n_k$
  });
  var DoubleCompanionObject_instance;
  function DoubleCompanionObject_getInstance() {
    if (DoubleCompanionObject_instance == null)
      new DoubleCompanionObject();
    return DoubleCompanionObject_instance;
  }
  function StringCompanionObject() {
    StringCompanionObject_instance = this;
  }
  StringCompanionObject.$metadata$ = {
    simpleName: 'StringCompanionObject',
    kind: 'object',
    interfaces: []
  };
  var StringCompanionObject_instance;
  function StringCompanionObject_getInstance() {
    if (StringCompanionObject_instance == null)
      new StringCompanionObject();
    return StringCompanionObject_instance;
  }
  function BooleanCompanionObject() {
    BooleanCompanionObject_instance = this;
  }
  BooleanCompanionObject.$metadata$ = {
    simpleName: 'BooleanCompanionObject',
    kind: 'object',
    interfaces: []
  };
  var BooleanCompanionObject_instance;
  function BooleanCompanionObject_getInstance() {
    if (BooleanCompanionObject_instance == null)
      new BooleanCompanionObject();
    return BooleanCompanionObject_instance;
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function mapOf_0(pair) {
    return hashMapOf([pair]);
  }
  function listOf(element) {
    return arrayListOf([element]);
  }
  function setOf(element) {
    return hashSetOf([element]);
  }
  function copyToArray(collection) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = collection;
      break $l$block;
    }
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = collection;
          break $l$block_0;
        }
        var tmp0_unsafeCast_0 = tmp$ret$1.toArray();
        tmp$ret$2 = tmp0_unsafeCast_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      {
        var tmp$ret$4;
        $l$block_3: {
          var tmp1_unsafeCast_0 = copyToArrayImpl(collection);
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = tmp1_unsafeCast_0;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp = tmp$ret$4;
      }
    }
    return tmp;
  }
  function copyToArrayImpl(collection) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    var array = tmp$ret$0;
    var iterator = collection.iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = array;
        break $l$block_0;
      }
      tmp$ret$1.push(iterator.next_20eer_k$());
    }
    return array;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }
    return index;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.addAll_oxxjjk_k$ = function (elements) {
    this.checkIsMutable_h4zzmr_k$();
    var modified = false;
    var tmp0_iterator = elements.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (this.add_1j60pz_k$(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_h4zzmr_k$ = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this.$this_1 = $outer;
    this.index_1 = 0;
    this.last_1 = -1;
  }
  IteratorImpl.prototype.hasNext_bitz1p_k$ = function () {
    return this.index_1 < this.$this_1._get_size__809037418_ddoh9m_k$();
  };
  IteratorImpl.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this.index_1;
    tmp0_this.index_1 = tmp1 + 1 | 0;
    tmp.last_1 = tmp1;
    return this.$this_1.get_fkrdnv_k$(this.last_1);
  };
  IteratorImpl.prototype.remove_le47v1_k$ = function () {
    {
      var tmp0_check_0 = !(this.last_1 === -1);
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Call next() or previous() before removing element from the iterator.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_2(message_1));
      }
    }
    this.$this_1.removeAt_qvpkxi_k$(this.last_1);
    Unit_getInstance();
    this.index_1 = this.last_1;
    this.last_1 = -1;
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.modCount_1 = 0;
  }
  AbstractMutableList.prototype._set_modCount__3570657354_7f6d5y_k$ = function (_set____804775014) {
    this.modCount_1 = _set____804775014;
  };
  AbstractMutableList.prototype._get_modCount__2796526142_os4sle_k$ = function () {
    return this.modCount_1;
  };
  AbstractMutableList.prototype.add_1j60pz_k$ = function (element) {
    this.checkIsMutable_h4zzmr_k$();
    this.add_ydlf05_k$(this._get_size__809037418_ddoh9m_k$(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_jk1svi_k$ = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_2ehdt1_k$ = function (element) {
    return this.indexOf_dcv8dt_k$(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_dcv8dt_k$ = function (element) {
    var inductionVariable = 0;
    var last = _get_lastIndex__339712501_2(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_1(this.get_fkrdnv_k$(index), element)) {
          return index;
        }
      }
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals_40uhas_k$(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode_2n0xp_k$(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function AbstractMutableMap$keys$1$iterator$1($entryIterator) {
    this.$entryIterator_1 = $entryIterator;
  }
  AbstractMutableMap$keys$1$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.$entryIterator_1.hasNext_bitz1p_k$();
  };
  AbstractMutableMap$keys$1$iterator$1.prototype.next_20eer_k$ = function () {
    return this.$entryIterator_1.next_20eer_k$()._get_key__857139730_e6bh8y_k$();
  };
  AbstractMutableMap$keys$1$iterator$1.prototype.remove_le47v1_k$ = function () {
    return this.$entryIterator_1.remove_le47v1_k$();
  };
  AbstractMutableMap$keys$1$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this.key_1 = key;
    this._value_1 = value;
  }
  SimpleEntry.prototype._get_key__857139730_e6bh8y_k$ = function () {
    return this.key_1;
  };
  SimpleEntry.prototype._get_value__3683422336_a43j40_k$ = function () {
    return this._value_1;
  };
  SimpleEntry.prototype.setValue_i0ryyi_k$ = function (newValue) {
    var oldValue = this._value_1;
    this._value_1 = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode_6enkgc_k$(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString_sxv7wb_k$(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals_sgqdyf_k$(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_2ehdt1_k$ = function (element) {
    return this.containsEntry_1men9v_k$(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap$keys$1(this$0) {
    this.this$0__1 = this$0;
    AbstractMutableSet.call(this);
  }
  AbstractMutableMap$keys$1.prototype.add_1j60q5_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  AbstractMutableMap$keys$1.prototype.add_1j60pz_k$ = function (element) {
    return this.add_1j60q5_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.contains_2ehdt7_k$ = function (element) {
    return this.this$0__1.containsKey_wgk31w_k$(element);
  };
  AbstractMutableMap$keys$1.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_2ehdt7_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.iterator_jk1svi_k$ = function () {
    var entryIterator = this.this$0__1._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
    return new AbstractMutableMap$keys$1$iterator$1(entryIterator);
  };
  AbstractMutableMap$keys$1.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.this$0__1._get_size__809037418_ddoh9m_k$();
  };
  AbstractMutableMap$keys$1.prototype.checkIsMutable_h4zzmr_k$ = function () {
    return this.this$0__1.checkIsMutable_h4zzmr_k$();
  };
  AbstractMutableMap$keys$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this._keys_2 = null;
    this._values_2 = null;
  }
  AbstractMutableMap.prototype._get_keys__801529559_d97k5z_k$ = function () {
    if (this._keys_2 == null) {
      var tmp = this;
      tmp._keys_2 = new AbstractMutableMap$keys$1(this);
    }
    return ensureNotNull(this._keys_2);
  };
  AbstractMutableMap.prototype.putAll_mee1c3_k$ = function (from) {
    this.checkIsMutable_h4zzmr_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = from._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
      break $l$block;
    }
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp1_loop_parameter._get_key__857139730_e6bh8y_k$();
        break $l$block_0;
      }
      var key = tmp$ret$1;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_loop_parameter._get_value__3683422336_a43j40_k$();
        break $l$block_1;
      }
      var value = tmp$ret$2;
      this.put_3mhbri_k$(key, value);
      Unit_getInstance();
    }
  };
  AbstractMutableMap.prototype.remove_8hbkc0_k$ = function (key) {
    this.checkIsMutable_h4zzmr_k$();
    var iter = this._get_entries__31877249_iz8n5_k$().iterator_jk1svi_k$();
    while (iter.hasNext_bitz1p_k$()) {
      var entry = iter.next_20eer_k$();
      var k = entry._get_key__857139730_e6bh8y_k$();
      if (equals_1(key, k)) {
        var value = entry._get_value__3683422336_a43j40_k$();
        iter.remove_le47v1_k$();
        return value;
      }
    }
    return null;
  };
  AbstractMutableMap.prototype.checkIsMutable_h4zzmr_k$ = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals_mwtoa3_k$(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode_hl8x0c_k$(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = copyToArray(elements);
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkElementIndex_ux0wz1_k$(index, $this._get_size__809037418_ddoh9m_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkPositionIndex_kxpgsw_k$(index, $this._get_size__809037418_ddoh9m_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this.array_1 = array;
    this.isReadOnly_1 = false;
  }
  ArrayList.prototype.ensureCapacity_ignus8_k$ = function (minCapacity) {
  };
  ArrayList.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.array_1.length;
  };
  ArrayList.prototype.get_fkrdnv_k$ = function (index) {
    var tmp = this.array_1[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_1j60pz_k$ = function (element) {
    this.checkIsMutable_h4zzmr_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this.array_1;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__2796526142_os4sle_k$();
    tmp0_this._set_modCount__3570657354_7f6d5y_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_ydlf05_k$ = function (index, element) {
    this.checkIsMutable_h4zzmr_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this.array_1;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__2796526142_os4sle_k$();
    tmp0_this._set_modCount__3570657354_7f6d5y_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_oxxjjk_k$ = function (elements) {
    this.checkIsMutable_h4zzmr_k$();
    if (elements.isEmpty_y1axqb_k$())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_plus_0 = tmp0_this.array_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = copyToArray(elements);
        break $l$block;
      }
      var tmp1_plus_0 = tmp$ret$0;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_plus_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.concat(tmp1_plus_0);
      break $l$block_1;
    }
    tmp.array_1 = tmp$ret$2;
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__2796526142_os4sle_k$();
    tmp1_this._set_modCount__3570657354_7f6d5y_k$(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.removeAt_qvpkxi_k$ = function (index) {
    this.checkIsMutable_h4zzmr_k$();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__2796526142_os4sle_k$();
    tmp0_this._set_modCount__3570657354_7f6d5y_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    var tmp;
    if (index === _get_lastIndex__339712501_2(this)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_asDynamic_0 = this.array_1;
        tmp$ret$0 = tmp0_asDynamic_0;
        break $l$block;
      }
      tmp = tmp$ret$0.pop();
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_asDynamic_0 = this.array_1;
        tmp$ret$1 = tmp1_asDynamic_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1.splice(index, 1)[0];
    }
    return tmp;
  };
  ArrayList.prototype.indexOf_dcv8dt_k$ = function (element) {
    return indexOf(this.array_1, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this.array_1);
  };
  ArrayList.prototype.toArray_jjyjqa_k$ = function () {
    return [].slice.call(this.array_1);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_jjyjqa_k$();
  };
  ArrayList.prototype.checkIsMutable_h4zzmr_k$ = function () {
    if (this.isReadOnly_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_bs7q9r_k$ = function (value1, value2) {
    return equals_1(value1, value2);
  };
  HashCode.prototype.getHashCode_uyct7y_k$ = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this.$this_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_c92ay9_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_1j60pz_k$ = function (element) {
    return this.add_c92ay9_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_1men9v_k$ = function (element) {
    return this.$this_1.containsEntry_lxbt7v_k$(element);
  };
  EntrySet.prototype.iterator_jk1svi_k$ = function () {
    return this.$this_1.internalMap_1.iterator_jk1svi_k$();
  };
  EntrySet.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.$this_1._get_size__809037418_ddoh9m_k$();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.internalMap_1 = internalMap;
    $this.equality_1 = internalMap._get_equality__2325359121_wknje7_k$();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    {
      var tmp0_require_0 = initialCapacity >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Negative initial capacity: ' + initialCapacity;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    {
      var tmp1_require_0 = loadFactor >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 'Non-positive load factor: ' + loadFactor;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1_0));
      }
    }
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_2(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashMap_init_$Create$_1(initialCapacity) {
    return HashMap_init_$Init$_2(initialCapacity, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_3(original, $this) {
    HashMap_init_$Init$_0($this);
    $this.putAll_mee1c3_k$(original);
    return $this;
  }
  function HashMap_init_$Create$_2(original) {
    return HashMap_init_$Init$_3(original, Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return this.internalMap_1.contains_2ehdt7_k$(key);
  };
  HashMap.prototype._get_entries__31877249_iz8n5_k$ = function () {
    if (this._entries_1 == null) {
      this._entries_1 = this.createEntrySet_jd8v2s_k$();
    }
    return ensureNotNull(this._entries_1);
  };
  HashMap.prototype.createEntrySet_jd8v2s_k$ = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_1mhr4y_k$ = function (key) {
    return this.internalMap_1.get_1mhr4y_k$(key);
  };
  HashMap.prototype.put_3mhbri_k$ = function (key, value) {
    return this.internalMap_1.put_3mhbri_k$(key, value);
  };
  HashMap.prototype.remove_8hbkc0_k$ = function (key) {
    return this.internalMap_1.remove_8hbkc0_k$(key);
  };
  HashMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.internalMap_1._get_size__809037418_ddoh9m_k$();
  };
  function HashMap() {
    this._entries_1 = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$($this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.map_1 = HashMap_init_$Create$();
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$(Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_0(elements, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.map_1 = HashMap_init_$Create$_1(elements._get_size__809037418_ddoh9m_k$());
    $this.addAll_oxxjjk_k$(elements);
    Unit_getInstance();
    return $this;
  }
  function HashSet_init_$Create$_0(elements) {
    return HashSet_init_$Init$_0(elements, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.map_1 = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_2(initialCapacity, $this) {
    HashSet_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_1(initialCapacity) {
    return HashSet_init_$Init$_2(initialCapacity, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_3(map, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.map_1 = map;
    return $this;
  }
  HashSet.prototype._get_map__857195189_e6co1h_k$ = function () {
    return this.map_1;
  };
  HashSet.prototype.add_1j60pz_k$ = function (element) {
    var old = this.map_1.put_3mhbri_k$(element, this);
    return old == null;
  };
  HashSet.prototype.contains_2ehdt1_k$ = function (element) {
    return this.map_1.containsKey_wgk31w_k$(element);
  };
  HashSet.prototype.isEmpty_y1axqb_k$ = function () {
    return this.map_1.isEmpty_y1axqb_k$();
  };
  HashSet.prototype.iterator_jk1svi_k$ = function () {
    return this.map_1._get_keys__801529559_d97k5z_k$().iterator_jk1svi_k$();
  };
  HashSet.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.map_1._get_size__809037418_ddoh9m_k$();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this.chainOrEntry_1 != null ? $this.isChain_1 : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = $this.chainOrEntry_1;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this.itemIndex_1 = tmp0_this.itemIndex_1 + 1 | 0;
      if (tmp0_this.itemIndex_1 < chainSize)
        return 0;
      else {
      }
    }
    var tmp1_this = $this;
    tmp1_this.keyIndex_1 = tmp1_this.keyIndex_1 + 1 | 0;
    if (tmp1_this.keyIndex_1 < $this.keys_1.length) {
      $this.chainOrEntry_1 = $this.this$0__1.backingMap_1[$this.keys_1[$this.keyIndex_1]];
      var tmp = $this;
      var tmp_0 = $this.chainOrEntry_1;
      tmp.isChain_1 = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this.itemIndex_1 = 0;
      return 0;
    } else {
      {
        $this.chainOrEntry_1 = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this.equality_1.getHashCode_uyct7y_k$(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this.equality_1.equals_bs7q9r_k$(entry._get_key__857139730_e6bh8y_k$(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this__1828080292, $this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var indexedObject = _this__1828080292;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this.equality_1.equals_bs7q9r_k$(element_2._get_key__857139730_e6bh8y_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode) {
    var chainOrEntry = $this.backingMap_1[hashCode];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function InternalHashCodeMap$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.state_1 = -1;
    this.keys_1 = Object.keys(this$0.backingMap_1);
    this.keyIndex_1 = -1;
    this.chainOrEntry_1 = null;
    this.isChain_1 = false;
    this.itemIndex_1 = -1;
    this.lastEntry_1 = null;
  }
  InternalHashCodeMap$iterator$1.prototype.hasNext_bitz1p_k$ = function () {
    if (this.state_1 === -1)
      this.state_1 = computeNext(this);
    return this.state_1 === 0;
  };
  InternalHashCodeMap$iterator$1.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this.isChain_1) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = this.chainOrEntry_1;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0[this.itemIndex_1];
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_unsafeCast_0 = this.chainOrEntry_1;
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this.lastEntry_1 = lastEntry;
    this.state_1 = -1;
    return lastEntry;
  };
  InternalHashCodeMap$iterator$1.prototype.remove_le47v1_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_checkNotNull_0 = this.lastEntry_1;
      {
      }
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        if (tmp0_checkNotNull_0 == null) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Required value was null.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_2(message_2_1));
        } else {
          tmp$ret$1 = tmp0_checkNotNull_0;
          break $l$block_0;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    Unit_getInstance();
    this.this$0__1.remove_8hbkc0_k$(ensureNotNull(this.lastEntry_1)._get_key__857139730_e6bh8y_k$());
    Unit_getInstance();
    this.lastEntry_1 = null;
    var tmp0_this = this;
    var tmp1 = tmp0_this.itemIndex_1;
    tmp0_this.itemIndex_1 = tmp1 - 1 | 0;
    Unit_getInstance();
  };
  InternalHashCodeMap$iterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this.equality_1 = equality;
    this.backingMap_1 = this.createJsMap_8hfwp5_k$();
    this.size_1 = 0;
  }
  InternalHashCodeMap.prototype._get_equality__2325359121_wknje7_k$ = function () {
    return this.equality_1;
  };
  InternalHashCodeMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.size_1;
  };
  InternalHashCodeMap.prototype.put_3mhbri_k$ = function (key, value) {
    var hashCode = this.equality_1.getHashCode_uyct7y_k$(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode);
    if (chainOrEntry == null) {
      this.backingMap_1[hashCode] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this.equality_1.equals_bs7q9r_k$(entry._get_key__857139730_e6bh8y_k$(), key)) {
          return entry.setValue_i0ryyi_k$(value);
        } else {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
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
          this.backingMap_1[hashCode] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this.size_1;
          tmp0_this.size_1 = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_i0ryyi_k$(value);
          }
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = chain;
            break $l$block_2;
          }
          tmp$ret$3.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.size_1;
    tmp2_this.size_1 = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.remove_8hbkc0_k$ = function (key) {
    var hashCode = this.equality_1.getHashCode_uyct7y_k$(key);
    var tmp0_elvis_lhs = getChainOrEntryOrNull(this, hashCode);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if (this.equality_1.equals_bs7q9r_k$(entry._get_key__857139730_e6bh8y_k$(), key)) {
        jsDeleteProperty(this.backingMap_1, hashCode);
        var tmp1_this = this;
        var tmp2 = tmp1_this.size_1;
        tmp1_this.size_1 = tmp2 - 1 | 0;
        Unit_getInstance();
        return entry._get_value__3683422336_a43j40_k$();
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        var inductionVariable = 0;
        var last = chain.length - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var entry_0 = chain[index];
            if (this.equality_1.equals_bs7q9r_k$(key, entry_0._get_key__857139730_e6bh8y_k$())) {
              if (chain.length === 1) {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = chain;
                  break $l$block;
                }
                tmp$ret$0.length = 0;
                jsDeleteProperty(this.backingMap_1, hashCode);
              } else {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = chain;
                  break $l$block_0;
                }
                tmp$ret$1.splice(index, 1);
              }
              var tmp4_this = this;
              var tmp5 = tmp4_this.size_1;
              tmp4_this.size_1 = tmp5 - 1 | 0;
              Unit_getInstance();
              return entry_0._get_value__3683422336_a43j40_k$();
            }
          }
           while (inductionVariable <= last);
      }
    }
    return null;
  };
  InternalHashCodeMap.prototype.contains_2ehdt7_k$ = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_1mhr4y_k$ = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3683422336_a43j40_k$();
  };
  InternalHashCodeMap.prototype.iterator_jk1svi_k$ = function () {
    return new InternalHashCodeMap$iterator$1(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function EntryIterator($outer) {
    this.$this_1 = $outer;
    this.last_1 = null;
    this.next_1 = null;
    this.next_1 = this.$this_1.$this_1.head_1;
  }
  EntryIterator.prototype.hasNext_bitz1p_k$ = function () {
    return !(this.next_1 === null);
  };
  EntryIterator.prototype.next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this.next_1);
    this.last_1 = current;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_takeIf_0 = current.next_1;
      {
      }
      var tmp_0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !(tmp0_takeIf_0 === this.$this_1.$this_1.head_1);
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp_0 = tmp0_takeIf_0;
      } else {
        {
          tmp_0 = null;
        }
      }
      tmp$ret$1 = tmp_0;
      break $l$block_0;
    }
    tmp.next_1 = tmp$ret$1;
    return current;
  };
  EntryIterator.prototype.remove_le47v1_k$ = function () {
    {
      var tmp0_check_0 = !(this.last_1 == null);
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_2(message_2_1));
        }
      }
    }
    this.$this_1.checkIsMutable_h4zzmr_k$();
    remove(ensureNotNull(this.last_1), this.$this_1.$this_1);
    this.$this_1.$this_1.map_1.remove_8hbkc0_k$(ensureNotNull(this.last_1)._get_key__857139730_e6bh8y_k$());
    Unit_getInstance();
    this.last_1 = null;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this.$this_1 = $outer;
    SimpleEntry.call(this, key, value);
    this.next_1 = null;
    this.prev_1 = null;
  }
  ChainEntry.prototype.setValue_i0ryyi_k$ = function (newValue) {
    this.$this_1.checkIsMutable_h4zzmr_k$();
    return SimpleEntry.prototype.setValue_i0ryyi_k$.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this.$this_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_c92ay9_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_1j60pz_k$ = function (element) {
    return this.add_c92ay9_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.containsEntry_1men9v_k$ = function (element) {
    return this.$this_1.containsEntry_lxbt7v_k$(element);
  };
  EntrySet_0.prototype.iterator_jk1svi_k$ = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.$this_1._get_size__809037418_ddoh9m_k$();
  };
  EntrySet_0.prototype.checkIsMutable_h4zzmr_k$ = function () {
    return this.$this_1.checkIsMutable_h4zzmr_k$();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function addToEnd(_this__1828080292, $this) {
    {
      var tmp0_check_0 = _this__1828080292.next_1 == null ? _this__1828080292.prev_1 == null : false;
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_2(message_2_1));
        }
      }
    }
    var _head = $this.head_1;
    if (_head == null) {
      $this.head_1 = _this__1828080292;
      _this__1828080292.next_1 = _this__1828080292;
      _this__1828080292.prev_1 = _this__1828080292;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_checkNotNull_0 = _head.prev_1;
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          if (tmp1_checkNotNull_0 == null) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Required value was null.';
              break $l$block_0;
            }
            var message_2_1_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_2(message_2_1_0));
          } else {
            tmp$ret$2 = tmp1_checkNotNull_0;
            break $l$block_1;
          }
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var _tail = tmp$ret$3;
      _this__1828080292.prev_1 = _tail;
      _this__1828080292.next_1 = _head;
      _head.prev_1 = _this__1828080292;
      _tail.next_1 = _this__1828080292;
    }
  }
  function remove(_this__1828080292, $this) {
    if (_this__1828080292.next_1 === _this__1828080292) {
      $this.head_1 = null;
    } else {
      if ($this.head_1 === _this__1828080292) {
        $this.head_1 = _this__1828080292.next_1;
      }
      ensureNotNull(_this__1828080292.next_1).prev_1 = _this__1828080292.prev_1;
      ensureNotNull(_this__1828080292.prev_1).next_1 = _this__1828080292.next_1;
    }
    _this__1828080292.next_1 = null;
    _this__1828080292.prev_1 = null;
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this.map_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this.map_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_2(original, $this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this.map_1 = HashMap_init_$Create$();
    $this.putAll_mee1c3_k$(original);
    return $this;
  }
  function LinkedHashMap_init_$Create$_2(original) {
    return LinkedHashMap_init_$Init$_2(original, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.containsKey_wgk31w_k$ = function (key) {
    return this.map_1.containsKey_wgk31w_k$(key);
  };
  LinkedHashMap.prototype.createEntrySet_jd8v2s_k$ = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_1mhr4y_k$ = function (key) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3683422336_a43j40_k$();
  };
  LinkedHashMap.prototype.put_3mhbri_k$ = function (key, value) {
    this.checkIsMutable_h4zzmr_k$();
    var old = this.map_1.get_1mhr4y_k$(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this.map_1.put_3mhbri_k$(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_i0ryyi_k$(value);
    }
  };
  LinkedHashMap.prototype.remove_8hbkc0_k$ = function (key) {
    this.checkIsMutable_h4zzmr_k$();
    var entry = this.map_1.remove_8hbkc0_k$(key);
    if (!(entry == null)) {
      remove(entry, this);
      return entry._get_value__3683422336_a43j40_k$();
    }
    return null;
  };
  LinkedHashMap.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.map_1._get_size__809037418_ddoh9m_k$();
  };
  LinkedHashMap.prototype.checkIsMutable_h4zzmr_k$ = function () {
    if (this.isReadOnly_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this.head_1 = null;
    this.isReadOnly_1 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_3(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_0(elements, $this) {
    HashSet_init_$Init$_3(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    $this.addAll_oxxjjk_k$(elements);
    Unit_getInstance();
    return $this;
  }
  function LinkedHashSet_init_$Create$_0(elements) {
    return LinkedHashSet_init_$Init$_0(elements, Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_3(LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_2(initialCapacity, $this) {
    LinkedHashSet_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_1(initialCapacity) {
    return LinkedHashSet_init_$Init$_2(initialCapacity, Object.create(LinkedHashSet.prototype));
  }
  LinkedHashSet.prototype.checkIsMutable_h4zzmr_k$ = function () {
    return this._get_map__857195189_e6co1h_k$().checkIsMutable_h4zzmr_k$();
  };
  function LinkedHashSet() {
  }
  LinkedHashSet.$metadata$ = {
    simpleName: 'LinkedHashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function _get_output__1179223594() {
    init_properties_console_kt_3903220573();
    return output;
  }
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_uuzh5q_k$ = function () {
    this.print_o29p2b_k$('\n');
  };
  BaseOutput.prototype.println_gh3jfj_k$ = function (message) {
    this.print_o29p2b_k$(message);
    this.println_uuzh5q_k$();
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput(outputStream) {
    BaseOutput.call(this);
    this.outputStream_1 = outputStream;
  }
  NodeJsOutput.prototype.print_o29p2b_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var messageString = tmp$ret$0;
    this.outputStream_1.write(messageString);
  };
  NodeJsOutput.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog() {
    BufferedOutput.call(this);
  }
  BufferedOutputToConsoleLog.prototype.print_o29p2b_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var s = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_nativeLastIndexOf_0 = s;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_nativeLastIndexOf_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.lastIndexOf('\n', 0);
      break $l$block_1;
    }
    var i = tmp$ret$2;
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this._get_buffer__2513334987_tgqkad_k$();
      var tmp$ret$4;
      $l$block_3: {
        var tmp1_substring_0 = s;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = tmp1_substring_0;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3.substring(0, i);
        break $l$block_3;
      }
      tmp0_this._set_buffer__2424755159_nu2sqj_k$(tmp + tmp$ret$4);
      this.flush_sgqoqb_k$();
      var tmp$ret$6;
      $l$block_5: {
        var tmp2_substring_0 = s;
        var tmp3_substring_0 = i + 1 | 0;
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = tmp2_substring_0;
          break $l$block_4;
        }
        tmp$ret$6 = tmp$ret$5.substring(tmp3_substring_0);
        break $l$block_5;
      }
      s = tmp$ret$6;
    }
    var tmp1_this = this;
    tmp1_this._set_buffer__2424755159_nu2sqj_k$(tmp1_this._get_buffer__2513334987_tgqkad_k$() + s);
  };
  BufferedOutputToConsoleLog.prototype.flush_sgqoqb_k$ = function () {
    console.log(this._get_buffer__2513334987_tgqkad_k$());
    this._set_buffer__2424755159_nu2sqj_k$('');
  };
  BufferedOutputToConsoleLog.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutput() {
    BaseOutput.call(this);
    this.buffer_1 = '';
  }
  BufferedOutput.prototype._set_buffer__2424755159_nu2sqj_k$ = function (_set____804775014) {
    this.buffer_1 = _set____804775014;
  };
  BufferedOutput.prototype._get_buffer__2513334987_tgqkad_k$ = function () {
    return this.buffer_1;
  };
  BufferedOutput.prototype.print_o29p2b_k$ = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this.buffer_1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    tmp.buffer_1 = tmp_0 + tmp$ret$0;
  };
  BufferedOutput.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function println(message) {
    init_properties_console_kt_3903220573();
    _get_output__1179223594().println_gh3jfj_k$(message);
  }
  var properties_initialized_console_kt_1003722681;
  function init_properties_console_kt_3903220573() {
    if (!properties_initialized_console_kt_1003722681) {
      properties_initialized_console_kt_1003722681 = true;
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
          tmp$ret$0 = isNode_2 ? new NodeJsOutput(process.stdout) : new BufferedOutputToConsoleLog();
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      output = tmp$ret$1;
    }
  }
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this__1828080292) {
    return !(_this__1828080292 === _this__1828080292);
  }
  function isFinite(_this__1828080292) {
    return !isInfinite(_this__1828080292) ? !isNaN_1(_this__1828080292) : false;
  }
  function isFinite_0(_this__1828080292) {
    return !isInfinite_0(_this__1828080292) ? !isNaN_0(_this__1828080292) : false;
  }
  function isInfinite(_this__1828080292) {
    return _this__1828080292 === FloatCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? true : _this__1828080292 === FloatCompanionObject_getInstance()._get_NEGATIVE_INFINITY__4282258079_7keht_k$();
  }
  function isNaN_1(_this__1828080292) {
    return !(_this__1828080292 === _this__1828080292);
  }
  function isInfinite_0(_this__1828080292) {
    return _this__1828080292 === DoubleCompanionObject_getInstance()._get_POSITIVE_INFINITY__280378211_4mxh7n_k$() ? true : _this__1828080292 === DoubleCompanionObject_getInstance()._get_NEGATIVE_INFINITY__4282258079_7keht_k$();
  }
  function countTrailingZeroBits(_this__1828080292) {
    var low = _this__1828080292._get_low__857179069_e6cblp_k$();
    return low === 0 ? IntCompanionObject_getInstance()._get_SIZE_BITS__2591616077_s64q7n_k$() + countTrailingZeroBits_0(_this__1828080292._get_high__798860521_d7mcq1_k$()) | 0 : countTrailingZeroBits_0(low);
  }
  function countTrailingZeroBits_0(_this__1828080292) {
    var tmp = IntCompanionObject_getInstance()._get_SIZE_BITS__2591616077_s64q7n_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_countLeadingZeroBits_0 = ~(_this__1828080292 | (-_this__1828080292 | 0));
      tmp$ret$0 = Math.clz32(tmp0_countLeadingZeroBits_0);
      break $l$block;
    }
    return tmp - tmp$ret$0 | 0;
  }
  function _get_js__1413122402(_this__1828080292) {
    return (_this__1828080292 instanceof KClassImpl ? _this__1828080292 : THROW_CCE())._get_jClass__3892345245_6npl5v_k$();
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this.jClass_1 = jClass;
  }
  KClassImpl.prototype._get_jClass__3892345245_6npl5v_k$ = function () {
    return this.jClass_1;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_1(this._get_jClass__3892345245_6npl5v_k$(), other._get_jClass__3892345245_6npl5v_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__973554894_g3mnri_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return 'class ' + this._get_simpleName__973554894_g3mnri_k$();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.givenSimpleName_1 = givenSimpleName;
    this.isInstanceFunction_1 = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this.givenSimpleName_1 === other.givenSimpleName_1 : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__973554894_g3mnri_k$ = function () {
    return this.givenSimpleName_1;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.simpleName_1 = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__973554894_g3mnri_k$ = function () {
    return this.simpleName_1;
  };
  NothingKClassImpl.prototype._get_jClass__3892345245_6npl5v_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__973554894_g3mnri_k$ = function () {
    throw IllegalStateException_init_$Create$('Unknown simpleName for ErrorKClass');
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = jClass;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block_0;
    }
    tmp.simpleName_1 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype._get_simpleName__973554894_g3mnri_k$ = function () {
    return this.simpleName_1;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function KProperty1() {
  }
  KProperty1.$metadata$ = {
    simpleName: 'KProperty1',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty() {
  }
  KProperty.$metadata$ = {
    simpleName: 'KProperty',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KType() {
  }
  KType.$metadata$ = {
    simpleName: 'KType',
    kind: 'interface',
    interfaces: []
  };
  function createKType(classifier, arguments_0, isMarkedNullable) {
    return new KTypeImpl(classifier, asList(arguments_0), isMarkedNullable);
  }
  function KTypeImpl(classifier, arguments_0, isMarkedNullable) {
    this.classifier_1 = classifier;
    this.arguments_1 = arguments_0;
    this.isMarkedNullable_1 = isMarkedNullable;
  }
  KTypeImpl.prototype._get_classifier__2273016458_xftf92_k$ = function () {
    return this.classifier_1;
  };
  KTypeImpl.prototype._get_arguments__15705019_9cm2j_k$ = function () {
    return this.arguments_1;
  };
  KTypeImpl.prototype._get_isMarkedNullable__252231220_4666us_k$ = function () {
    return this.isMarkedNullable_1;
  };
  KTypeImpl.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof KTypeImpl) {
      tmp_1 = equals_1(this.classifier_1, other.classifier_1);
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      tmp_0 = equals_1(this.arguments_1, other.arguments_1);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = this.isMarkedNullable_1 === other.isMarkedNullable_1;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KTypeImpl.prototype.hashCode = function () {
    return imul(imul(hashCode(this.classifier_1), 31) + hashCode(this.arguments_1) | 0, 31) + (this.isMarkedNullable_1 | 0) | 0;
  };
  KTypeImpl.prototype.toString = function () {
    var tmp = this.classifier_1;
    var kClass = isInterface(tmp, KClass) ? tmp : null;
    var classifierName = kClass == null ? toString_2(this.classifier_1) : !(kClass._get_simpleName__973554894_g3mnri_k$() == null) ? kClass._get_simpleName__973554894_g3mnri_k$() : '(non-denotable type)';
    var tmp_0;
    if (this.arguments_1.isEmpty_y1axqb_k$()) {
      tmp_0 = '';
    } else {
      tmp_0 = joinToString$default_0(this.arguments_1, ', ', '<', '>', 0, null, null, 56, null);
    }
    var args = tmp_0;
    var nullable = this.isMarkedNullable_1 ? '?' : '';
    return plus_1(classifierName, args) + nullable;
  };
  KTypeImpl.$metadata$ = {
    simpleName: 'KTypeImpl',
    kind: 'class',
    interfaces: [KType]
  };
  function _get_functionClasses__573580451() {
    init_properties_primitives_kt_1669626638();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda() {
    return function (it) {
      return isObject(it);
    };
  }
  function PrimitiveClasses$numberClass$lambda() {
    return function (it) {
      return isNumber(it);
    };
  }
  function PrimitiveClasses$booleanClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'boolean' : false;
    };
  }
  function PrimitiveClasses$byteClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$shortClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$intClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$floatClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$doubleClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$arrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isArray(it) : false;
    };
  }
  function PrimitiveClasses$stringClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'string' : false;
    };
  }
  function PrimitiveClasses$throwableClass$lambda() {
    return function (it) {
      return it instanceof Error;
    };
  }
  function PrimitiveClasses$booleanArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isBooleanArray(it) : false;
    };
  }
  function PrimitiveClasses$charArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isCharArray(it) : false;
    };
  }
  function PrimitiveClasses$byteArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isByteArray(it) : false;
    };
  }
  function PrimitiveClasses$shortArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isShortArray(it) : false;
    };
  }
  function PrimitiveClasses$intArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isIntArray(it) : false;
    };
  }
  function PrimitiveClasses$longArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isLongArray(it) : false;
    };
  }
  function PrimitiveClasses$floatArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isFloatArray(it) : false;
    };
  }
  function PrimitiveClasses$doubleArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isDoubleArray(it) : false;
    };
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return function (it) {
      var tmp;
      if (typeof it === 'function') {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = it;
          break $l$block;
        }
        tmp = tmp$ret$0.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object;
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    tmp.anyClass_1 = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0_0;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1.numberClass_1 = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda());
    this.nothingClass_1 = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_0_1;
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3.booleanClass_1 = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_0_2;
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5.byteClass_1 = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_0_3;
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7.shortClass_1 = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_0_4;
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9.intClass_1 = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_0_5;
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11.floatClass_1 = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_0_6;
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13.doubleClass_1 = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_0_7;
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15.arrayClass_1 = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_0_8;
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17.stringClass_1 = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_0_9;
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19.throwableClass_1 = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_0_10;
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21.booleanArrayClass_1 = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_0_11;
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23.charArrayClass_1 = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_0_12;
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25.byteArrayClass_1 = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_0_13;
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27.shortArrayClass_1 = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_0_14;
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29.intArrayClass_1 = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_0_15;
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31.longArrayClass_1 = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_0_16;
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33.floatArrayClass_1 = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_0_17;
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35.doubleArrayClass_1 = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda());
  }
  PrimitiveClasses.prototype._get_anyClass__2722679391_q03l41_k$ = function () {
    return this.anyClass_1;
  };
  PrimitiveClasses.prototype._get_numberClass__2243734466_xx91dq_k$ = function () {
    return this.numberClass_1;
  };
  PrimitiveClasses.prototype._get_nothingClass__2888957184_n93ocg_k$ = function () {
    return this.nothingClass_1;
  };
  PrimitiveClasses.prototype._get_booleanClass__1099338011_i6immz_k$ = function () {
    return this.booleanClass_1;
  };
  PrimitiveClasses.prototype._get_byteClass__3017072385_l4tq0v_k$ = function () {
    return this.byteClass_1;
  };
  PrimitiveClasses.prototype._get_shortClass__2900162991_n2fhw1_k$ = function () {
    return this.shortClass_1;
  };
  PrimitiveClasses.prototype._get_intClass__1005394466_gml3c2_k$ = function () {
    return this.intClass_1;
  };
  PrimitiveClasses.prototype._get_floatClass__141668239_2ccfwv_k$ = function () {
    return this.floatClass_1;
  };
  PrimitiveClasses.prototype._get_doubleClass__2234697290_y2mqie_k$ = function () {
    return this.doubleClass_1;
  };
  PrimitiveClasses.prototype._get_arrayClass__2667531724_qwxlbo_k$ = function () {
    return this.arrayClass_1;
  };
  PrimitiveClasses.prototype._get_stringClass__1269070474_kzkl1m_k$ = function () {
    return this.stringClass_1;
  };
  PrimitiveClasses.prototype._get_throwableClass__2200583411_ymxwy5_k$ = function () {
    return this.throwableClass_1;
  };
  PrimitiveClasses.prototype._get_booleanArrayClass__3316760394_g6ed9y_k$ = function () {
    return this.booleanArrayClass_1;
  };
  PrimitiveClasses.prototype._get_charArrayClass__2352161302_w4p2p6_k$ = function () {
    return this.charArrayClass_1;
  };
  PrimitiveClasses.prototype._get_byteArrayClass__2177249572_z0u1gc_k$ = function () {
    return this.byteArrayClass_1;
  };
  PrimitiveClasses.prototype._get_shortArrayClass__1957270326_wdb3g6_k$ = function () {
    return this.shortArrayClass_1;
  };
  PrimitiveClasses.prototype._get_intArrayClass__787137187_d0n2xv_k$ = function () {
    return this.intArrayClass_1;
  };
  PrimitiveClasses.prototype._get_longArrayClass__2852100912_nv1mts_k$ = function () {
    return this.longArrayClass_1;
  };
  PrimitiveClasses.prototype._get_floatArrayClass__2432403798_usx76y_k$ = function () {
    return this.floatArrayClass_1;
  };
  PrimitiveClasses.prototype._get_doubleArrayClass__2928832379_mld0g5_k$ = function () {
    return this.doubleArrayClass_1;
  };
  PrimitiveClasses.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = _get_functionClasses__573580451()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = Function;
            tmp$ret$0 = tmp0_unsafeCast_0_3;
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = 'Function' + arity;
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0_5 = _get_functionClasses__573580451();
            tmp$ret$1 = tmp1_asDynamic_0_5;
            break $l$block_0;
          }
          tmp$ret$1[arity] = result_2;
          tmp$ret$2 = result_2;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_anyClass__2722679391_q03l41_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_numberClass__2243734466_xx91dq_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_nothingClass__2888957184_n93ocg_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_booleanClass__1099338011_i6immz_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_byteClass__3017072385_l4tq0v_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_shortClass__2900162991_n2fhw1_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_intClass__1005394466_gml3c2_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_floatClass__141668239_2ccfwv_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_doubleClass__2234697290_y2mqie_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_arrayClass__2667531724_qwxlbo_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_stringClass__1269070474_kzkl1m_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_throwableClass__2200583411_ymxwy5_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_booleanArrayClass__3316760394_g6ed9y_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_charArrayClass__2352161302_w4p2p6_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_byteArrayClass__2177249572_z0u1gc_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_shortArrayClass__1957270326_wdb3g6_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_intArrayClass__787137187_d0n2xv_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_longArrayClass__2852100912_nv1mts_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_floatArrayClass__2432403798_usx76y_k$
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype._get_doubleArrayClass__2928832379_mld0g5_k$
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_3110183218;
  function init_properties_primitives_kt_1669626638() {
    if (!properties_initialized_primitives_kt_3110183218) {
      properties_initialized_primitives_kt_3110183218 = true;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = fillArrayVal(Array(0), null);
        break $l$block;
      }
      functionClasses = tmp$ret$0;
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = jClass;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = getKClassM(tmp$ret$1);
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = jClass;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = getKClass1(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_unsafeCast_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$3;
        $l$block_2: {
          var tmp1_unsafeCast_0 = new ErrorKClass();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_unsafeCast_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._get_stringClass__1269070474_kzkl1m_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return tmp$ret$1;
    }
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = jClass;
      break $l$block_1;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_subject = typeof e;
      var tmp;
      switch (tmp0_subject) {
        case 'string':
          tmp = PrimitiveClasses_getInstance()._get_stringClass__1269070474_kzkl1m_k$();
          break;
        case 'number':
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }

          if (tmp$ret$0 === e) {
            tmp_0 = PrimitiveClasses_getInstance()._get_intClass__1005394466_gml3c2_k$();
          } else {
            {
              tmp_0 = PrimitiveClasses_getInstance()._get_doubleClass__2234697290_y2mqie_k$();
            }
          }

          tmp = tmp_0;
          break;
        case 'boolean':
          tmp = PrimitiveClasses_getInstance()._get_booleanClass__1099338011_i6immz_k$();
          break;
        case 'function':
          var tmp_1 = PrimitiveClasses_getInstance();
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = e;
            break $l$block_0;
          }

          tmp = tmp_1.functionClass(tmp$ret$1.length);
          break;
        default:
          var tmp_2;
          if (isBooleanArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._get_booleanArrayClass__3316760394_g6ed9y_k$();
          } else {
            if (isCharArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._get_charArrayClass__2352161302_w4p2p6_k$();
            } else {
              if (isByteArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._get_byteArrayClass__2177249572_z0u1gc_k$();
              } else {
                if (isShortArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._get_shortArrayClass__1957270326_wdb3g6_k$();
                } else {
                  if (isIntArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._get_intArrayClass__787137187_d0n2xv_k$();
                  } else {
                    if (isLongArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._get_longArrayClass__2852100912_nv1mts_k$();
                    } else {
                      if (isFloatArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._get_floatArrayClass__2432403798_usx76y_k$();
                      } else {
                        if (isDoubleArray(e)) {
                          tmp_2 = PrimitiveClasses_getInstance()._get_doubleArrayClass__2928832379_mld0g5_k$();
                        } else {
                          if (isInterface(e, KClass)) {
                            tmp_2 = getKClass(KClass);
                          } else {
                            if (isArray(e)) {
                              tmp_2 = PrimitiveClasses_getInstance()._get_arrayClass__2667531724_qwxlbo_k$();
                            } else {
                              {
                                var constructor = Object.getPrototypeOf(e).constructor;
                                var tmp_3;
                                if (constructor === Object) {
                                  tmp_3 = PrimitiveClasses_getInstance()._get_anyClass__2722679391_q03l41_k$();
                                } else if (constructor === Error) {
                                  tmp_3 = PrimitiveClasses_getInstance()._get_throwableClass__2200583411_ymxwy5_k$();
                                } else {
                                  var jsClass = constructor;
                                  tmp_3 = getKClass1(jsClass);
                                }
                                tmp_2 = tmp_3;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          tmp = tmp_2;
          break;
      }
      var tmp1_unsafeCast_0 = tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_unsafeCast_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this.string_1 = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__2347802853_w7ahp7_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this.string_1;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.get_a7b70_k$ = function (index) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getOrElse_0 = this.string_1;
      var tmp;
      if (index >= 0 ? index <= _get_lastIndex__339712501_3(tmp0_getOrElse_0) : false) {
        tmp = charSequenceGet(tmp0_getOrElse_0, index);
      } else {
        throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', length: ' + this._get_length__2347802853_w7ahp7_k$() + '}');
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  StringBuilder.prototype.subSequence_5fh70h_k$ = function (startIndex, endIndex) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_substring_0 = this.string_1;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_substring_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  StringBuilder.prototype.append_t8oh9e_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this.string_1 = tmp0_this.string_1 + new Char(value);
    return this;
  };
  StringBuilder.prototype.append_oz4qxs_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this.string_1 = tmp0_this.string_1 + toString_1(value);
    return this;
  };
  StringBuilder.prototype.append_tbojcw_k$ = function (value, startIndex, endIndex) {
    var tmp0_elvis_lhs = value;
    return this.appendRange_mncs5k_k$(tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs, startIndex, endIndex);
  };
  StringBuilder.prototype.append_t8pm91_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this.string_1 = tmp0_this.string_1 + toString_1(value);
    return this;
  };
  StringBuilder.prototype.append_ssq29y_k$ = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this.string_1;
    var tmp1_elvis_lhs = value;
    tmp.string_1 = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.setLength_kzn4fs_k$ = function (newLength) {
    if (newLength < 0) {
      throw IllegalArgumentException_init_$Create$_0('Negative new length: ' + newLength + '.');
    }
    if (newLength <= this._get_length__2347802853_w7ahp7_k$()) {
      var tmp = this;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_substring_0 = this.string_1;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_substring_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(0, newLength);
        break $l$block_0;
      }
      tmp.string_1 = tmp$ret$1;
    } else {
      var inductionVariable = this._get_length__2347802853_w7ahp7_k$();
      if (inductionVariable < newLength)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp1_this = this;
          tmp1_this.string_1 = tmp1_this.string_1 + new Char(_Char___init__impl__380027157(0));
        }
         while (inductionVariable < newLength);
    }
  };
  StringBuilder.prototype.toString = function () {
    return this.string_1;
  };
  StringBuilder.prototype.appendRange_mncs5k_k$ = function (value, startIndex, endIndex) {
    var stringCsq = toString_2(value);
    Companion_getInstance().checkBoundsIndexes_7787d9_k$(startIndex, endIndex, stringCsq.length);
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this.string_1;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = stringCsq;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
      break $l$block_0;
    }
    tmp.string_1 = tmp_0 + tmp$ret$1;
    return this;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function uppercaseChar(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = toString_0(_this__1828080292);
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        var tmp1_unsafeCast_0 = tmp$ret$0.toUpperCase();
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this__1828080292 : charSequenceGet(uppercase, 0);
  }
  function isWhitespace(_this__1828080292) {
    return isWhitespaceImpl(_this__1828080292);
  }
  function isLowerCase(_this__1828080292) {
    if (_Char___init__impl__380027157(97) <= _this__1828080292 ? _this__1828080292 <= _Char___init__impl__380027157(122) : false) {
      return true;
    }
    if (Char__compareTo_impl_2098686179(_this__1828080292, _Char___init__impl__380027157(128)) < 0) {
      return false;
    }
    return isLowerCaseImpl(_this__1828080292);
  }
  function titlecaseChar(_this__1828080292) {
    return titlecaseCharImpl(_this__1828080292);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$_0('radix ' + radix + ' was not in valid range 2..36');
    }
    return radix;
  }
  function toInt(_this__1828080292) {
    var tmp0_elvis_lhs = toIntOrNull(_this__1828080292);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this__1828080292);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function digitOf(char, radix) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = (Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(48)) >= 0 ? Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(57)) <= 0 : false) ? Char__minus_impl_3686210483(char, _Char___init__impl__380027157(48)) : (Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(65)) >= 0 ? Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(90)) <= 0 : false) ? Char__minus_impl_3686210483(char, _Char___init__impl__380027157(65)) + 10 | 0 : (Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(97)) >= 0 ? Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(122)) <= 0 : false) ? Char__minus_impl_3686210483(char, _Char___init__impl__380027157(97)) + 10 | 0 : Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(128)) < 0 ? -1 : (Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(65313)) >= 0 ? Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(65338)) <= 0 : false) ? Char__minus_impl_3686210483(char, _Char___init__impl__380027157(65313)) + 10 | 0 : (Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(65345)) >= 0 ? Char__compareTo_impl_2098686179(char, _Char___init__impl__380027157(65370)) <= 0 : false) ? Char__minus_impl_3686210483(char, _Char___init__impl__380027157(65345)) + 10 | 0 : digitToIntImpl(char);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_let_0 >= radix ? -1 : tmp0_let_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function toDouble(_this__1828080292) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this__1828080292;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = +tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      var tmp1_also_0 = tmp$ret$1;
      {
      }
      {
        if ((isNaN_0(tmp1_also_0) ? !isNaN_2(_this__1828080292) : false) ? true : tmp1_also_0 === 0.0 ? isBlank(_this__1828080292) : false) {
          numberFormatError(_this__1828080292);
        }
      }
      tmp$ret$2 = tmp1_also_0;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toLong(_this__1828080292) {
    var tmp0_elvis_lhs = toLongOrNull(_this__1828080292);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this__1828080292);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isNaN_2(_this__1828080292) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this__1828080292;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      break $l$block_0;
    }
    var tmp0_subject = tmp$ret$1;
    switch (tmp0_subject) {
      case 'nan':
      case '+nan':
      case '-nan':
        return true;
      default:
        return false;
    }
  }
  function Regex_init_$Init$(pattern, $this) {
    Regex.call($this, pattern, emptySet());
    return $this;
  }
  function Regex_init_$Create$(pattern) {
    return Regex_init_$Init$(pattern, Object.create(Regex.prototype));
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.patternEscape_1 = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
    this.replacementEscape_1 = new RegExp('[\\\\$]', 'g');
    this.nativeReplacementEscape_1 = new RegExp('\\$', 'g');
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Regex$findAll$lambda(this$0, $input, $startIndex) {
    return function () {
      return this$0.find_9caqn1_k$($input, $startIndex);
    };
  }
  function Regex$findAll$lambda_0() {
    return function (match) {
      return match.next_20eer_k$();
    };
  }
  function Regex(pattern, options) {
    Companion_getInstance_5();
    this.pattern_1 = pattern;
    this.options_1 = toSet(options);
    this.nativePattern_1 = new RegExp(pattern, toFlags(options, 'gu'));
    this.nativeStickyPattern_1 = null;
    this.nativeMatchesEntirePattern_1 = null;
  }
  Regex.prototype.find_9caqn1_k$ = function (input, startIndex) {
    if (startIndex < 0 ? true : startIndex > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$('Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
    }
    return findNext(this.nativePattern_1, toString_2(input), startIndex, this.nativePattern_1);
  };
  Regex.prototype.findAll_u4n4j0_k$ = function (input, startIndex) {
    if (startIndex < 0 ? true : startIndex > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$('Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
    }
    var tmp = Regex$findAll$lambda(this, input, startIndex);
    return generateSequence(tmp, Regex$findAll$lambda_0());
  };
  Regex.prototype.findAll$default_qbzddh_k$ = function (input, startIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    return this.findAll_u4n4j0_k$(input, startIndex);
  };
  Regex.prototype.split_8rwwda_k$ = function (input, limit) {
    requireNonNegativeLimit(limit);
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = this.findAll$default_qbzddh_k$(input, 0, 2, null);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = limit === 0 ? tmp0_let_0 : take(tmp0_let_0, limit - 1 | 0);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var matches = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = ArrayList_init_$Create$();
      break $l$block_1;
    }
    var result = tmp$ret$2;
    var lastStart = 0;
    var tmp0_iterator = matches.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var match = tmp0_iterator.next_20eer_k$();
      result.add_1j60pz_k$(toString_2(charSequenceSubSequence(input, lastStart, match._get_range__3568951860_c0913g_k$()._get_start__3614751663_b8zdqp_k$())));
      Unit_getInstance();
      lastStart = match._get_range__3568951860_c0913g_k$()._get_endInclusive__731268122_c3dm3e_k$() + 1 | 0;
    }
    result.add_1j60pz_k$(toString_2(charSequenceSubSequence(input, lastStart, charSequenceLength(input))));
    Unit_getInstance();
    return result;
  };
  Regex.prototype.toString = function () {
    return this.nativePattern_1.toString();
  };
  Regex.$metadata$ = {
    simpleName: 'Regex',
    kind: 'class',
    interfaces: []
  };
  function toFlags(_this__1828080292, prepend) {
    return joinToString$default_0(_this__1828080292, '', prepend, null, 0, null, toFlags$lambda(), 28, null);
  }
  function findNext(_this__1828080292, input, from, nextPattern) {
    _this__1828080292.lastIndex = from;
    var match = _this__1828080292.exec(input);
    if (match == null)
      return null;
    var range = numberRangeToNumber(match.index, _this__1828080292.lastIndex - 1 | 0);
    return new findNext$1(range, match, nextPattern, input);
  }
  function MatchGroup(value) {
    this.value_1 = value;
  }
  MatchGroup.prototype.toString = function () {
    return 'MatchGroup(value=' + this.value_1 + ')';
  };
  MatchGroup.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  MatchGroup.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MatchGroup))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MatchGroup ? other : THROW_CCE();
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  MatchGroup.$metadata$ = {
    simpleName: 'MatchGroup',
    kind: 'class',
    interfaces: []
  };
  function toFlags$lambda() {
    return function (it) {
      return it.value_1;
    };
  }
  function findNext$o$groups$o$iterator$lambda(this$0) {
    return function (it) {
      return this$0.get_fkrdnv_k$(it);
    };
  }
  function advanceToNextCharacter($this, index) {
    if (index < _get_lastIndex__339712501_3($this.$input_1)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this.$input_1;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      var code1 = tmp$ret$1;
      if (55296 <= code1 ? code1 <= 56319 : false) {
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = $this.$input_1;
            break $l$block_1;
          }
          var tmp1_unsafeCast_0 = tmp$ret$2.charCodeAt(index + 1 | 0);
          tmp$ret$3 = tmp1_unsafeCast_0;
          break $l$block_2;
        }
        var code2 = tmp$ret$3;
        if (56320 <= code2 ? code2 <= 57343 : false) {
          return index + 2 | 0;
        }
      }
    }
    return index + 1 | 0;
  }
  function findNext$1$groups$1($match) {
    this.$match_1 = $match;
    AbstractCollection.call(this);
  }
  findNext$1$groups$1.prototype._get_size__809037418_ddoh9m_k$ = function () {
    return this.$match_1.length;
  };
  findNext$1$groups$1.prototype.iterator_jk1svi_k$ = function () {
    var tmp = asSequence(_get_indices__2241594442_1(this));
    return map(tmp, findNext$o$groups$o$iterator$lambda(this)).iterator_jk1svi_k$();
  };
  findNext$1$groups$1.prototype.get_fkrdnv_k$ = function (index) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this.$match_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0[index];
      break $l$block_0;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = new MatchGroup(tmp0_safe_receiver);
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  findNext$1$groups$1.$metadata$ = {
    kind: 'class',
    interfaces: [MatchGroupCollection]
  };
  function findNext$1($range, $match, $nextPattern, $input) {
    this.$range_1 = $range;
    this.$match_1 = $match;
    this.$nextPattern_1 = $nextPattern;
    this.$input_1 = $input;
    this.range_1 = $range;
    var tmp = this;
    tmp.groups_1 = new findNext$1$groups$1($match);
    this.groupValues__1 = null;
  }
  findNext$1.prototype._get_range__3568951860_c0913g_k$ = function () {
    return this.range_1;
  };
  findNext$1.prototype.next_20eer_k$ = function () {
    return findNext(this.$nextPattern_1, this.$input_1, this.$range_1.isEmpty_y1axqb_k$() ? advanceToNextCharacter(this, this.$range_1._get_start__3614751663_b8zdqp_k$()) : this.$range_1._get_endInclusive__731268122_c3dm3e_k$() + 1 | 0, this.$nextPattern_1);
  };
  findNext$1.$metadata$ = {
    kind: 'class',
    interfaces: [MatchResult]
  };
  function isBlank(_this__1828080292) {
    var tmp;
    if (charSequenceLength(_this__1828080292) === 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_2: {
        var tmp0_all_0 = _get_indices__2241594442_2(_this__1828080292);
        var tmp_0;
        if (isInterface(tmp0_all_0, Collection)) {
          tmp_0 = tmp0_all_0.isEmpty_y1axqb_k$();
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
        var inductionVariable = tmp0_all_0._get_first__3232921377_hkbbvj_k$();
        var last = tmp0_all_0._get_last__802328181_d9oodx_k$();
        if (inductionVariable <= last)
          do {
            var element_2 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = isWhitespace(charSequenceGet(_this__1828080292, element_2));
              break $l$block_0;
            }
            if (!tmp$ret$1) {
              tmp$ret$0 = false;
              break $l$block_2;
            } else {
            }
          }
           while (!(element_2 === last));
        tmp$ret$0 = true;
        break $l$block_2;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function regionMatches(_this__1828080292, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this__1828080292, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function equals_0(_this__1828080292, other, ignoreCase) {
    if (_this__1828080292 == null)
      return other == null;
    if (other == null)
      return false;
    if (!ignoreCase)
      return _this__1828080292 == other;
    if (!(_this__1828080292.length === other.length))
      return false;
    var inductionVariable = 0;
    var last = _this__1828080292.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var thisChar = charSequenceGet(_this__1828080292, index);
        var otherChar = charSequenceGet(other, index);
        if (!equals(thisChar, otherChar, ignoreCase)) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function _Char___init__impl__380027157(value) {
    return value;
  }
  function _get_value__3683422336($this) {
    return $this;
  }
  function _Char___init__impl__380027157_0(code) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___get_data__impl__26876597(code) & 65535;
      break $l$block;
    }
    var tmp = _Char___init__impl__380027157(tmp$ret$0);
    return tmp;
  }
  function Char__compareTo_impl_2098686179(this_0, other) {
    return _get_value__3683422336(this_0) - _get_value__3683422336(other) | 0;
  }
  function Char__compareTo_impl_2098686179_0(this_0, other) {
    var tmp = this_0.value_1;
    return Char__compareTo_impl_2098686179(tmp, other instanceof Char ? other.value_1 : THROW_CCE());
  }
  function Char__minus_impl_3686210483(this_0, other) {
    return _get_value__3683422336(this_0) - _get_value__3683422336(other) | 0;
  }
  function Char__toInt_impl_2402388783(this_0) {
    return _get_value__3683422336(this_0);
  }
  function Char__equals_impl_2289177560(this_0, other) {
    if (!(other instanceof Char))
      return false;
    else {
    }
    return _get_value__3683422336(this_0) === _get_value__3683422336(other.value_1);
  }
  function Char__hashCode_impl_4253273724(this_0) {
    return _get_value__3683422336(this_0);
  }
  function toString_0(this_0) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = String.fromCharCode(_get_value__3683422336(this_0));
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.MIN_VALUE_1 = _Char___init__impl__380027157(0);
    this.MAX_VALUE_1 = _Char___init__impl__380027157(65535);
    this.MIN_HIGH_SURROGATE_1 = _Char___init__impl__380027157(55296);
    this.MAX_HIGH_SURROGATE_1 = _Char___init__impl__380027157(56319);
    this.MIN_LOW_SURROGATE_1 = _Char___init__impl__380027157(56320);
    this.MAX_LOW_SURROGATE_1 = _Char___init__impl__380027157(57343);
    this.MIN_SURROGATE_1 = _Char___init__impl__380027157(55296);
    this.MAX_SURROGATE_1 = _Char___init__impl__380027157(57343);
    this.SIZE_BYTES_1 = 2;
    this.SIZE_BITS_1 = 16;
  }
  Companion_6.prototype._get_MIN_VALUE__1378605517_f6clgy_k$ = function () {
    return this.MIN_VALUE_1;
  };
  Companion_6.prototype._get_MAX_VALUE__3201573499_zh3t30_k$ = function () {
    return this.MAX_VALUE_1;
  };
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Char(value) {
    Companion_getInstance_6();
    this.value_1 = value;
  }
  Char.prototype.compareTo_n49u4k_k$ = function (other) {
    return Char__compareTo_impl_2098686179(this.value_1, other);
  };
  Char.prototype.compareTo_6thzaj_k$ = function (other) {
    return Char__compareTo_impl_2098686179_0(this, other);
  };
  Char.prototype.equals = function (other) {
    return Char__equals_impl_2289177560(this.value_1, other);
  };
  Char.prototype.hashCode = function () {
    return Char__hashCode_impl_4253273724(this.value_1);
  };
  Char.prototype.toString = function () {
    return toString_0(this.value_1);
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map() {
  }
  Map.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_7() {
    Companion_instance_7 = this;
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_7();
    this.name_1 = name;
    this.ordinal_1 = ordinal;
  }
  Enum.prototype._get_ordinal__3363892928_fec5kw_k$ = function () {
    return this.ordinal_1;
  };
  Enum.prototype.compareTo_6thzay_k$ = function (other) {
    return compareTo(this.ordinal_1, other.ordinal_1);
  };
  Enum.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_6thzay_k$(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this.name_1;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function arrayOf(elements) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = elements;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function toString_1(_this__1828080292) {
    var tmp0_safe_receiver = _this__1828080292;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_2(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function plus_1(_this__1828080292, other) {
    var tmp2_safe_receiver = _this__1828080292;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toString_2(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 'null' : tmp3_elvis_lhs;
    var tmp0_safe_receiver = other;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_2(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new arrayIterator$1(array);
  }
  function booleanArray(size) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_withType_0 = fillArrayVal(Array(size), false);
        tmp0_withType_0.$type$ = 'BooleanArray';
        tmp$ret$0 = tmp0_withType_0;
        break $l$block;
      }
      var tmp1_unsafeCast_0 = tmp$ret$0;
      tmp$ret$1 = tmp1_unsafeCast_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function charArray(size) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_withType_0 = charArray$outlinedJsCode$(size);
        tmp0_withType_0.$type$ = 'CharArray';
        tmp$ret$0 = tmp0_withType_0;
        break $l$block;
      }
      var tmp1_unsafeCast_0 = tmp$ret$0;
      tmp$ret$1 = tmp1_unsafeCast_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function longArray(size) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_withType_0 = fillArrayVal(Array(size), new Long(0, 0));
        tmp0_withType_0.$type$ = 'LongArray';
        tmp$ret$0 = tmp0_withType_0;
        break $l$block;
      }
      var tmp1_unsafeCast_0 = tmp$ret$0;
      tmp$ret$1 = tmp1_unsafeCast_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function charArrayOf(arr) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_withType_0 = charArrayOf$outlinedJsCode$(arr);
        tmp0_withType_0.$type$ = 'CharArray';
        tmp$ret$0 = tmp0_withType_0;
        break $l$block;
      }
      var tmp1_unsafeCast_0 = tmp$ret$0;
      tmp$ret$1 = tmp1_unsafeCast_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function charArray$outlinedJsCode$(size) {
    return new Uint16Array(size);
  }
  function charArrayOf$outlinedJsCode$(arr) {
    return new Uint16Array(arr);
  }
  function arrayIterator$1($array) {
    this.$array_1 = $array;
    this.index_1 = 0;
  }
  arrayIterator$1.prototype.hasNext_bitz1p_k$ = function () {
    return !(this.index_1 === this.$array_1.length);
  };
  arrayIterator$1.prototype.next_20eer_k$ = function () {
    var tmp;
    if (!(this.index_1 === this.$array_1.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.index_1;
      tmp0_this.index_1 = tmp1 + 1 | 0;
      tmp = this.$array_1[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this.index_1);
    }
    return tmp;
  };
  arrayIterator$1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function _get_buf__856886398() {
    init_properties_bitUtils_kt_782416278();
    return buf;
  }
  var buf;
  function _get_bufFloat64__3281801540() {
    init_properties_bitUtils_kt_782416278();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function _get_bufInt32__721419088() {
    init_properties_bitUtils_kt_782416278();
    return bufInt32;
  }
  var bufInt32;
  function _get_lowIndex__162050477() {
    init_properties_bitUtils_kt_782416278();
    return lowIndex;
  }
  var lowIndex;
  function _get_highIndex__2347002881() {
    init_properties_bitUtils_kt_782416278();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    init_properties_bitUtils_kt_782416278();
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    } else {
    }
    _get_bufFloat64__3281801540()[0] = obj;
    return imul(_get_bufInt32__721419088()[_get_highIndex__2347002881()], 31) + _get_bufInt32__721419088()[_get_lowIndex__162050477()] | 0;
  }
  var properties_initialized_bitUtils_kt_1092294842;
  function init_properties_bitUtils_kt_782416278() {
    if (!properties_initialized_bitUtils_kt_1092294842) {
      properties_initialized_bitUtils_kt_1092294842 = true;
      buf = new ArrayBuffer(8);
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = new Float64Array(_get_buf__856886398());
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      bufFloat64 = tmp$ret$1;
      var tmp$ret$1_0;
      $l$block_2: {
        var tmp0_unsafeCast_0_0 = new Float32Array(_get_buf__856886398());
        var tmp$ret$0_0;
        $l$block_1: {
          tmp$ret$0_0 = tmp0_unsafeCast_0_0;
          break $l$block_1;
        }
        tmp$ret$1_0 = tmp$ret$0_0;
        break $l$block_2;
      }
      bufFloat32 = tmp$ret$1_0;
      var tmp$ret$1_1;
      $l$block_4: {
        var tmp0_unsafeCast_0_1 = new Int32Array(_get_buf__856886398());
        var tmp$ret$0_1;
        $l$block_3: {
          tmp$ret$0_1 = tmp0_unsafeCast_0_1;
          break $l$block_3;
        }
        tmp$ret$1_1 = tmp$ret$0_1;
        break $l$block_4;
      }
      bufInt32 = tmp$ret$1_1;
      var tmp$ret$1_2;
      $l$block_6: {
        {
        }
        var tmp$ret$0_2;
        $l$block_5: {
          _get_bufFloat64__3281801540()[0] = -1.0;
          tmp$ret$0_2 = !(_get_bufInt32__721419088()[0] === 0) ? 1 : 0;
          break $l$block_5;
        }
        tmp$ret$1_2 = tmp$ret$0_2;
        break $l$block_6;
      }
      lowIndex = tmp$ret$1_2;
      highIndex = 1 - _get_lowIndex__162050477() | 0;
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = a;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        var tmp1_Char_0 = tmp$ret$1;
        var tmp_0;
        var tmp$ret$2;
        $l$block_1: {
          var tmp0__get_code__0_1_3836959015 = Companion_getInstance_6()._get_MIN_VALUE__1378605517_f6clgy_k$();
          tmp$ret$2 = Char__toInt_impl_2402388783(tmp0__get_code__0_1_3836959015);
          break $l$block_1;
        }
        if (tmp1_Char_0 < tmp$ret$2) {
          tmp_0 = true;
        } else {
          {
            var tmp$ret$3;
            $l$block_2: {
              var tmp1__get_code__0_2_3326424839 = Companion_getInstance_6()._get_MAX_VALUE__3201573499_zh3t30_k$();
              tmp$ret$3 = Char__toInt_impl_2402388783(tmp1__get_code__0_2_3326424839);
              break $l$block_2;
            }
            tmp_0 = tmp1_Char_0 > tmp$ret$3;
          }
        }
        if (tmp_0) {
          throw IllegalArgumentException_init_$Create$_0('Invalid Char code: ' + tmp1_Char_0);
        } else {
        }
        tmp$ret$4 = numberToChar(tmp1_Char_0);
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      tmp = a.get_a7b70_k$(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.length;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a._get_length__2347802853_w7ahp7_k$();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.substring(startIndex, endIndex);
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a.subSequence_5fh70h_k$(startIndex, endIndex);
    }
    return tmp;
  }
  function contentEqualsInternal(_this__1828080292, other) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    var a = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = other;
      break $l$block_0;
    }
    var b = tmp$ret$1;
    if (a === b)
      return true;
    if (((a == null ? true : b == null) ? true : !isArrayish(b)) ? true : a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals_1(a[i], b[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function contentHashCodeInternal(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this__1828080292;
      break $l$block;
    }
    var a = tmp$ret$0;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode(a[i]) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, arrayToString$lambda(), 24, null);
  }
  function arrayToString$lambda() {
    return function (it) {
      return toString_2(it);
    };
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_ygsx0s_k$());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 1;
          break $l$block;
        }
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = 1;
          break $l$block_0;
        }
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_6thzaj_k$(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function equals_1(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 1;
            break $l$block;
          }
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = obj;
          break $l$block;
        }

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:
        tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function toString_2(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = o.toString();
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = str;
          break $l$block;
        }
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function boxIntrinsic(x) {
    throw IllegalStateException_init_$Create$('Should be lowered');
  }
  function unboxIntrinsic(x) {
    throw IllegalStateException_init_$Create$('Should be lowered');
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function lazy(mode, initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function lazy_0(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = dst;
      break $l$block;
    }
    var arr = tmp$ret$0;
    while (index < srcLen ? index < dstLen : false) {
      var tmp = index;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      arr[tmp] = src[tmp0];
    }
    return dst;
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = source.slice(0, newSize);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var result = tmp$ret$0;
    {
      if (source.$type$ !== undefined) {
        result.$type$ = source.$type$;
      }
    }
    var index = source.length;
    if (newSize > index) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = result;
        break $l$block_0;
      }
      tmp$ret$1.length = newSize;
      while (index < newSize) {
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        result[tmp0] = defaultValue;
      }
    }
    return result;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.MIN_VALUE_1 = new Long(0, -2147483648);
    this.MAX_VALUE_1 = new Long(-1, 2147483647);
    this.SIZE_BYTES_1 = 8;
    this.SIZE_BITS_1 = 64;
  }
  Companion_8.prototype._get_MIN_VALUE__1378605517_mssatp_k$ = function () {
    return this.MIN_VALUE_1;
  };
  Companion_8.prototype._get_MAX_VALUE__3201573499_i2z81x_k$ = function () {
    return this.MAX_VALUE_1;
  };
  Companion_8.prototype._get_SIZE_BITS__2591616077_s64q7n_k$ = function () {
    return this.SIZE_BITS_1;
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Long(low, high) {
    Companion_getInstance_8();
    Number_0.call(this);
    this.low_1 = low;
    this.high_1 = high;
  }
  Long.prototype._get_low__857179069_e6cblp_k$ = function () {
    return this.low_1;
  };
  Long.prototype._get_high__798860521_d7mcq1_k$ = function () {
    return this.high_1;
  };
  Long.prototype.compareTo_n4fqi2_k$ = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_n4fqi2_k$(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.plus_u6jwas_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_llf5ei_k$ = function (other) {
    return subtract(this, other);
  };
  Long.prototype.times_2zfqpc_k$ = function (other) {
    return multiply(this, other);
  };
  Long.prototype.div_9s1fi3_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.unaryMinus_6uz0qp_k$ = function () {
    return this.inv_28kx_k$().plus_u6jwas_k$(new Long(1, 0));
  };
  Long.prototype.shl_po5ip6_k$ = function (bitCount) {
    return shiftLeft(this, bitCount);
  };
  Long.prototype.or_s401rn_k$ = function (other) {
    return new Long(this.low_1 | other.low_1, this.high_1 | other.high_1);
  };
  Long.prototype.inv_28kx_k$ = function () {
    return new Long(~this.low_1, ~this.high_1);
  };
  Long.prototype.toByte_edm0nx_k$ = function () {
    return toByte(this.low_1);
  };
  Long.prototype.toShort_ja8oqn_k$ = function () {
    return toShort(this.low_1);
  };
  Long.prototype.toInt_1tsl84_k$ = function () {
    return this.low_1;
  };
  Long.prototype.toDouble_ygsx0s_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_ygsx0s_k$();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  function _get_ZERO__784837795() {
    init_properties_longjs_kt_2491794837();
    return ZERO;
  }
  var ZERO;
  function _get_ONE__856281867() {
    init_properties_longjs_kt_2491794837();
    return ONE;
  }
  var ONE;
  function _get_NEG_ONE__3857310458() {
    init_properties_longjs_kt_2491794837();
    return NEG_ONE;
  }
  var NEG_ONE;
  function _get_MAX_VALUE__3201573499() {
    init_properties_longjs_kt_2491794837();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function _get_MIN_VALUE__1378605517() {
    init_properties_longjs_kt_2491794837();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function _get_TWO_PWR_24___3968246811() {
    init_properties_longjs_kt_2491794837();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (equalsLong(_this__1828080292, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__1828080292);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__1828080292, other)) ? -1 : 1;
  }
  function add(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    var a48 = _this__1828080292._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var a32 = _this__1828080292._get_high__798860521_d7mcq1_k$() & 65535;
    var a16 = _this__1828080292._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var a00 = _this__1828080292._get_low__857179069_e6cblp_k$() & 65535;
    var b48 = other._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var b32 = other._get_high__798860521_d7mcq1_k$() & 65535;
    var b16 = other._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var b00 = other._get_low__857179069_e6cblp_k$() & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return add(_this__1828080292, other.unaryMinus_6uz0qp_k$());
  }
  function multiply(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (isZero(_this__1828080292)) {
      return _get_ZERO__784837795();
    } else if (isZero(other)) {
      return _get_ZERO__784837795();
    }
    if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
      return isOdd(other) ? _get_MIN_VALUE__1378605517() : _get_ZERO__784837795();
    } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
      return isOdd(_this__1828080292) ? _get_MIN_VALUE__1378605517() : _get_ZERO__784837795();
    }
    if (isNegative(_this__1828080292)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__1828080292), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__1828080292), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__1828080292, negate(other)));
    }
    if (lessThan(_this__1828080292, _get_TWO_PWR_24___3968246811()) ? lessThan(other, _get_TWO_PWR_24___3968246811()) : false) {
      return fromNumber(toNumber(_this__1828080292) * toNumber(other));
    }
    var a48 = _this__1828080292._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var a32 = _this__1828080292._get_high__798860521_d7mcq1_k$() & 65535;
    var a16 = _this__1828080292._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var a00 = _this__1828080292._get_low__857179069_e6cblp_k$() & 65535;
    var b48 = other._get_high__798860521_d7mcq1_k$() >>> 16 | 0;
    var b32 = other._get_high__798860521_d7mcq1_k$() & 65535;
    var b16 = other._get_low__857179069_e6cblp_k$() >>> 16 | 0;
    var b00 = other._get_low__857179069_e6cblp_k$() & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__1828080292)) {
      return _get_ZERO__784837795();
    }
    if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
      if (equalsLong(other, _get_ONE__856281867()) ? true : equalsLong(other, _get_NEG_ONE__3857310458())) {
        return _get_MIN_VALUE__1378605517();
      } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
        return _get_ONE__856281867();
      } else {
        var halfThis = shiftRight(_this__1828080292, 1);
        var approx = shiftLeft(halfThis.div_9s1fi3_k$(other), 1);
        if (equalsLong(approx, _get_ZERO__784837795())) {
          return isNegative(other) ? _get_ONE__856281867() : _get_NEG_ONE__3857310458();
        } else {
          var rem = subtract(_this__1828080292, multiply(other, approx));
          return add(approx, rem.div_9s1fi3_k$(other));
        }
      }
    } else if (equalsLong(other, _get_MIN_VALUE__1378605517())) {
      return _get_ZERO__784837795();
    }
    if (isNegative(_this__1828080292)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__1828080292).div_9s1fi3_k$(negate(other));
      } else {
        tmp = negate(negate(_this__1828080292).div_9s1fi3_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__1828080292.div_9s1fi3_k$(negate(other)));
    }
    var res = _get_ZERO__784837795();
    var rem_0 = _this__1828080292;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = _get_ONE__856281867();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__1828080292, numBits) {
    init_properties_longjs_kt_2491794837();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__1828080292;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__1828080292._get_low__857179069_e6cblp_k$() << numBits_0, _this__1828080292._get_high__798860521_d7mcq1_k$() << numBits_0 | (_this__1828080292._get_low__857179069_e6cblp_k$() >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__1828080292._get_low__857179069_e6cblp_k$() << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__1828080292, numBits) {
    init_properties_longjs_kt_2491794837();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__1828080292;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__1828080292._get_low__857179069_e6cblp_k$() >>> numBits_0 | 0 | _this__1828080292._get_high__798860521_d7mcq1_k$() << (32 - numBits_0 | 0), _this__1828080292._get_high__798860521_d7mcq1_k$() >> numBits_0);
      } else {
        return new Long(_this__1828080292._get_high__798860521_d7mcq1_k$() >> (numBits_0 - 32 | 0), _this__1828080292._get_high__798860521_d7mcq1_k$() >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() * 4.294967296E9 + getLowBitsUnsigned(_this__1828080292);
  }
  function equalsLong(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() === other._get_high__798860521_d7mcq1_k$() ? _this__1828080292._get_low__857179069_e6cblp_k$() === other._get_low__857179069_e6cblp_k$() : false;
  }
  function hashCode_0(l) {
    init_properties_longjs_kt_2491794837();
    return l._get_low__857179069_e6cblp_k$() ^ l._get_high__798860521_d7mcq1_k$();
  }
  function toStringImpl(_this__1828080292, radix) {
    init_properties_longjs_kt_2491794837();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__1828080292)) {
      return '0';
    }
    if (isNegative(_this__1828080292)) {
      if (equalsLong(_this__1828080292, _get_MIN_VALUE__1378605517())) {
        var radixLong = fromInt(radix);
        var div = _this__1828080292.div_9s1fi3_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__1828080292).toInt_1tsl84_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__1828080292), radix);
      }
    }
    var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this__1828080292;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_9s1fi3_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_1tsl84_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = tmp1_unsafeCast_0;
        break $l$block_2;
      }
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    init_properties_longjs_kt_2491794837();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() < 0;
  }
  function isZero(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_high__798860521_d7mcq1_k$() === 0 ? _this__1828080292._get_low__857179069_e6cblp_k$() === 0 : false;
  }
  function isOdd(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return (_this__1828080292._get_low__857179069_e6cblp_k$() & 1) === 1;
  }
  function negate(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292.unaryMinus_6uz0qp_k$();
  }
  function lessThan(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) < 0;
  }
  function fromNumber(value) {
    init_properties_longjs_kt_2491794837();
    if (isNaN_0(value)) {
      return _get_ZERO__784837795();
    } else if (value <= -9.223372036854776E18) {
      return _get_MIN_VALUE__1378605517();
    } else if (value + 1 >= 9.223372036854776E18) {
      return _get_MAX_VALUE__3201573499();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) > 0;
  }
  function greaterThanOrEqual(_this__1828080292, other) {
    init_properties_longjs_kt_2491794837();
    return compare(_this__1828080292, other) >= 0;
  }
  function getLowBitsUnsigned(_this__1828080292) {
    init_properties_longjs_kt_2491794837();
    return _this__1828080292._get_low__857179069_e6cblp_k$() >= 0 ? _this__1828080292._get_low__857179069_e6cblp_k$() : 4.294967296E9 + _this__1828080292._get_low__857179069_e6cblp_k$();
  }
  var properties_initialized_longjs_kt_320052665;
  function init_properties_longjs_kt_2491794837() {
    if (!properties_initialized_longjs_kt_320052665) {
      properties_initialized_longjs_kt_320052665 = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function toByte(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toByte$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_1tsl84_k$();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toShort$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toUShort_0 = numberToInt(a);
      tmp$ret$0 = _UShort___init__impl__3115094534(toShort(tmp0_toUShort_0));
      break $l$block;
    }
    return _Char___init__impl__380027157_0(tmp$ret$0);
  }
  function toLong_0(a) {
    return fromInt(a);
  }
  function toByte$outlinedJsCode$(a) {
    return a << 24 >> 24;
  }
  function toShort$outlinedJsCode$(a) {
    return a << 16 >> 16;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function _get_propertyRefClassMetadataCache__1118137304() {
    init_properties_reflectRuntime_kt_2213475647();
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    init_properties_reflectRuntime_kt_2213475647();
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter, type));
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getPropertyRefClass(obj, metadata) {
    init_properties_reflectRuntime_kt_2213475647();
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    return obj;
  }
  function getKPropMetadata(paramCount, setter, type) {
    init_properties_reflectRuntime_kt_2213475647();
    var mdata = _get_propertyRefClassMetadataCache__1118137304()[paramCount][setter == null ? 0 : 1];
    if (mdata.interfaces.length == 0) {
      mdata.interfaces.push(type);
    }
    return mdata;
  }
  var properties_initialized_reflectRuntime_kt_3166988643;
  function init_properties_reflectRuntime_kt_2213475647() {
    if (!properties_initialized_reflectRuntime_kt_3166988643) {
      properties_initialized_reflectRuntime_kt_3166988643 = true;
      var tmp$ret$17;
      $l$block_16: {
        var tmp$ret$4;
        $l$block_3: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = {kind: 'class', interfaces: []};
            break $l$block;
          }
          var tmp = tmp$ret$0;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = {kind: 'class', interfaces: []};
            break $l$block_0;
          }
          var tmp0_arrayOf_0 = [tmp, tmp$ret$1];
          var tmp$ret$3;
          $l$block_2: {
            var tmp$ret$2;
            $l$block_1: {
              tmp$ret$2 = tmp0_arrayOf_0;
              break $l$block_1;
            }
            tmp$ret$3 = tmp$ret$2;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        var tmp_0 = tmp$ret$4;
        var tmp$ret$9;
        $l$block_8: {
          var tmp$ret$5;
          $l$block_4: {
            tmp$ret$5 = {kind: 'class', interfaces: []};
            break $l$block_4;
          }
          var tmp_1 = tmp$ret$5;
          var tmp$ret$6;
          $l$block_5: {
            tmp$ret$6 = {kind: 'class', interfaces: []};
            break $l$block_5;
          }
          var tmp1_arrayOf_0 = [tmp_1, tmp$ret$6];
          var tmp$ret$8;
          $l$block_7: {
            var tmp$ret$7;
            $l$block_6: {
              tmp$ret$7 = tmp1_arrayOf_0;
              break $l$block_6;
            }
            tmp$ret$8 = tmp$ret$7;
            break $l$block_7;
          }
          tmp$ret$9 = tmp$ret$8;
          break $l$block_8;
        }
        var tmp_2 = tmp$ret$9;
        var tmp$ret$14;
        $l$block_13: {
          var tmp$ret$10;
          $l$block_9: {
            tmp$ret$10 = {kind: 'class', interfaces: []};
            break $l$block_9;
          }
          var tmp_3 = tmp$ret$10;
          var tmp$ret$11;
          $l$block_10: {
            tmp$ret$11 = {kind: 'class', interfaces: []};
            break $l$block_10;
          }
          var tmp2_arrayOf_0 = [tmp_3, tmp$ret$11];
          var tmp$ret$13;
          $l$block_12: {
            var tmp$ret$12;
            $l$block_11: {
              tmp$ret$12 = tmp2_arrayOf_0;
              break $l$block_11;
            }
            tmp$ret$13 = tmp$ret$12;
            break $l$block_12;
          }
          tmp$ret$14 = tmp$ret$13;
          break $l$block_13;
        }
        var tmp3_arrayOf_0 = [tmp_0, tmp_2, tmp$ret$14];
        var tmp$ret$16;
        $l$block_15: {
          var tmp$ret$15;
          $l$block_14: {
            tmp$ret$15 = tmp3_arrayOf_0;
            break $l$block_14;
          }
          tmp$ret$16 = tmp$ret$15;
          break $l$block_15;
        }
        tmp$ret$17 = tmp$ret$16;
        break $l$block_16;
      }
      propertyRefClassMetadataCache = tmp$ret$17;
    }
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Array.isArray(obj);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }
      }
    }
    var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = obj;
        break $l$block;
      }
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:
        return jsInstanceOf(obj, Object);
    }
  }
  function isSuspendFunction(obj, arity) {
    if (typeof obj === 'function') {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = obj.$arity;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      return tmp$ret$0 === arity;
    }
    if (typeof obj === 'object' ? jsIn('$metadata$', obj.constructor) : false) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_unsafeCast_0 = obj.constructor;
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      var tmp0_safe_receiver = tmp$ret$1.$metadata$;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.suspendArity;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        {
          {
          }
          var result_2 = false;
          var tmp0_iterator_3 = arrayIterator(tmp1_safe_receiver);
          $l$loop: while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
            var item_4 = tmp0_iterator_3.next_20eer_k$();
            if (arity === item_4) {
              result_2 = true;
              break $l$loop;
            }
          }
          return result_2;
        }
        tmp = tmp$ret$2;
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
    }
    return false;
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js__1413122402(getKClass(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return jsInstanceOf(a, Uint16Array) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function copyOf(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_withType_0 = fillFrom(_this__1828080292, charArray(newSize));
      tmp1_withType_0.$type$ = 'CharArray';
      tmp$ret$1 = tmp1_withType_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function copyOf_0(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    return fillFrom(_this__1828080292, new Float64Array(newSize));
  }
  function copyOf_1(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    return fillFrom(_this__1828080292, new Float32Array(newSize));
  }
  function copyOf_2(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_withType_0 = arrayCopyResize(_this__1828080292, newSize, new Long(0, 0));
      tmp1_withType_0.$type$ = 'LongArray';
      tmp$ret$1 = tmp1_withType_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function copyOf_3(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    return fillFrom(_this__1828080292, new Int32Array(newSize));
  }
  function copyOf_4(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    return fillFrom(_this__1828080292, new Int16Array(newSize));
  }
  function copyOf_5(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    return fillFrom(_this__1828080292, new Int8Array(newSize));
  }
  function copyOf_6(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    var tmp$ret$1;
    $l$block_0: {
      var tmp1_withType_0 = arrayCopyResize(_this__1828080292, newSize, false);
      tmp1_withType_0.$type$ = 'BooleanArray';
      tmp$ret$1 = tmp1_withType_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function asList(_this__1828080292) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this__1828080292;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return new ArrayList(tmp$ret$1);
  }
  function contentEquals(_this__1828080292, other) {
    return contentEqualsInternal(_this__1828080292, other);
  }
  function contentHashCode(_this__1828080292) {
    return contentHashCodeInternal(_this__1828080292);
  }
  function copyOf_7(_this__1828080292, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
      }
    }
    return arrayCopyResize(_this__1828080292, newSize, null);
  }
  function decodeVarLenBase64(base64, fromBase64, resultLength) {
    var result = new Int32Array(resultLength);
    var index = 0;
    var int = 0;
    var shift = 0;
    var indexedObject = base64;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var char = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Char__toInt_impl_2402388783(char);
        break $l$block;
      }
      var sixBit = fromBase64[tmp$ret$0];
      int = int | (sixBit & 31) << shift;
      if (sixBit < 32) {
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        result[tmp1] = int;
        int = 0;
        shift = 0;
      } else {
        shift = shift + 5 | 0;
      }
    }
    return result;
  }
  function digitToIntImpl(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(_this__1828080292);
      break $l$block;
    }
    var ch = tmp$ret$0;
    var index = binarySearchRange(Digit_getInstance().rangeStart_1, ch);
    var diff = ch - Digit_getInstance().rangeStart_1[index] | 0;
    return diff < 10 ? diff : -1;
  }
  function binarySearchRange(array, needle) {
    var bottom = 0;
    var top = array.length - 1 | 0;
    var middle = -1;
    var value = 0;
    while (bottom <= top) {
      middle = (bottom + top | 0) / 2 | 0;
      value = array[middle];
      if (needle > value)
        bottom = middle + 1 | 0;
      else if (needle === value)
        return middle;
      else
        top = middle - 1 | 0;
    }
    return middle - (needle < value ? 1 : 0) | 0;
  }
  function Digit() {
    Digit_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
      break $l$block;
    }
    tmp.rangeStart_1 = tmp$ret$0;
  }
  Digit.$metadata$ = {
    simpleName: 'Digit',
    kind: 'object',
    interfaces: []
  };
  var Digit_instance;
  function Digit_getInstance() {
    if (Digit_instance == null)
      new Digit();
    return Digit_instance;
  }
  function isLowerCaseImpl(_this__1828080292) {
    var tmp;
    if (getLetterType(_this__1828080292) === 1) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = Char__toInt_impl_2402388783(_this__1828080292);
        break $l$block;
      }
      tmp = isOtherLowercase(tmp$ret$0);
    }
    return tmp;
  }
  function getLetterType(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(_this__1828080292);
      break $l$block;
    }
    var ch = tmp$ret$0;
    var index = binarySearchRange(Letter_getInstance().decodedRangeStart_1, ch);
    var rangeStart = Letter_getInstance().decodedRangeStart_1[index];
    var rangeEnd = (rangeStart + Letter_getInstance().decodedRangeLength_1[index] | 0) - 1 | 0;
    var code = Letter_getInstance().decodedRangeCategory_1[index];
    if (ch > rangeEnd) {
      return 0;
    }
    var lastTwoBits = code & 3;
    if (lastTwoBits === 0) {
      var shift = 2;
      var threshold = rangeStart;
      var inductionVariable = 0;
      if (inductionVariable <= 1)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          threshold = threshold + (code >> shift & 127) | 0;
          if (threshold > ch) {
            return 3;
          }
          shift = shift + 7 | 0;
          threshold = threshold + (code >> shift & 127) | 0;
          if (threshold > ch) {
            return 0;
          }
          shift = shift + 7 | 0;
        }
         while (inductionVariable <= 1);
      return 3;
    }
    if (code <= 7) {
      return lastTwoBits;
    }
    var distance = ch - rangeStart | 0;
    var shift_0 = code <= 31 ? distance % 2 : distance;
    return code >> imul(2, shift_0) & 3;
  }
  function Letter() {
    Letter_instance = this;
    var toBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var fromBase64 = new Int32Array(128);
    var inductionVariable = 0;
    var last = charSequenceLength(toBase64) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp0__get_code__0_2225219253 = charSequenceGet(toBase64, i);
          tmp$ret$0 = Char__toInt_impl_2402388783(tmp0__get_code__0_2225219253);
          break $l$block;
        }
        fromBase64[tmp$ret$0] = i;
      }
       while (inductionVariable <= last);
    var rangeStartDiff = 'hCgBpCQGYHZH5BRpBPPPPPPRMP5BPPlCPP6BkEPPPPcPXPzBvBrB3BOiDoBHwD+E3DauCnFmBmB2D6E1BlBTiBmBlBP5BhBiBrBvBjBqBnBPRtBiCmCtBlB0BmB5BiB7BmBgEmChBZgCoEoGVpBSfRhBPqKQ2BwBYoFgB4CJuTiEvBuCuDrF5DgEgFlJ1DgFmBQtBsBRGsB+BPiBlD1EIjDPRPPPQPPPPPGQSQS/DxENVNU+B9zCwBwBPPCkDPNnBPqDYY1R8B7FkFgTgwGgwUwmBgKwBuBScmEP/BPPPPPPrBP8B7F1B/ErBqC6B7BiBmBfQsBUwCw/KwqIwLwETPcPjQgJxFgBlBsD';
    var diff = decodeVarLenBase64(rangeStartDiff, fromBase64, 222);
    var start = new Int32Array(diff.length);
    var inductionVariable_0 = 0;
    var last_0 = diff.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (i_0 === 0)
          start[i_0] = diff[i_0];
        else
          start[i_0] = start[i_0 - 1 | 0] + diff[i_0] | 0;
      }
       while (inductionVariable_0 <= last_0);
    this.decodedRangeStart_1 = start;
    var rangeLength = 'aaMBXHYH5BRpBPPPPPPRMP5BPPlCPPzBDOOPPcPXPzBvBjB3BOhDmBBpB7DoDYxB+EiBP1DoExBkBQhBekBPmBgBhBctBiBMWOOXhCsBpBkBUV3Ba4BkB0DlCgBXgBtD4FSdBfPhBPpKP0BvBXjEQ2CGsT8DhBtCqDpFvD1D3E0IrD2EkBJrBDOBsB+BPiBlB1EIjDPPPPPPPPPPPGPPMNLsBNPNPKCvBvBPPCkDPBmBPhDXXgD4B6FzEgDguG9vUtkB9JcuBSckEP/BPPPPPPBPf4FrBjEhBpC3B5BKaWPrBOwCk/KsCuLqDHPbPxPsFtEaaqDL';
    this.decodedRangeLength_1 = decodeVarLenBase64(rangeLength, fromBase64, 222);
    var rangeCategory = 'GFjgggUHGGFFZZZmzpz5qB6s6020B60ptltB6smt2sB60mz22B1+vv+8BZZ5s2850BW5q1ymtB506smzBF3q1q1qB1q1q1+Bgii4wDTm74g3KiggxqM60q1q1Bq1o1q1BF1qlrqrBZ2q5wprBGFZWWZGHFsjiooLowgmOowjkwCkgoiIk7ligGogiioBkwkiYkzj2oNoi+sbkwj04DghhkQ8wgiYkgoioDsgnkwC4gikQ//v+85BkwvoIsgoyI4yguI0whiwEowri4CoghsJowgqYowgm4DkwgsY/nwnzPowhmYkg6wI8yggZswikwHgxgmIoxgqYkwgk4DkxgmIkgoioBsgssoBgzgyI8g9gL8g9kI0wgwJoxgkoC0wgioFkw/wI0w53iF4gioYowjmgBHGq1qkgwBF1q1q8qBHwghuIwghyKk0goQkwgoQk3goQHGFHkyg0pBgxj6IoinkxDswno7Ikwhz9Bo0gioB8z48Rwli0xN0mpjoX8w78pDwltoqKHFGGwwgsIHFH3q1q16BFHWFZ1q10q1B2qlwq1B1q10q1B2q1yq1B6q1gq1Biq1qhxBir1qp1Bqt1q1qB1g1q1+B//3q16B///q1qBH/qlqq9Bholqq9B1i00a1q10qD1op1HkwmigEigiy6Cptogq1Bixo1kDq7/j00B2qgoBWGFm1lz50B6s5q1+BGWhggzhwBFFhgk4//Bo2jigE8wguI8wguI8wgugUog1qoB4qjmIwwi2KgkYHHH4lBgiFWkgIWoghssMmz5smrBZ3q1y50B5sm7gzBtz1smzB5smz50BqzqtmzB5sgzqzBF2/9//5BowgoIwmnkzPkwgk4C8ys65BkgoqI0wgy6FghquZo2giY0ghiIsgh24B4ghsQ8QF/v1q1OFs0O8iCHHF1qggz/B8wg6Iznv+//B08QgohsjK0QGFk7hsQ4gB';
    this.decodedRangeCategory_1 = decodeVarLenBase64(rangeCategory, fromBase64, 222);
  }
  Letter.$metadata$ = {
    simpleName: 'Letter',
    kind: 'object',
    interfaces: []
  };
  var Letter_instance;
  function Letter_getInstance() {
    if (Letter_instance == null)
      new Letter();
    return Letter_instance;
  }
  function isOtherLowercase(_this__1828080292) {
    var index = binarySearchRange(OtherLowercase_getInstance().otherLowerStart_1, _this__1828080292);
    return index >= 0 ? _this__1828080292 < (OtherLowercase_getInstance().otherLowerStart_1[index] + OtherLowercase_getInstance().otherLowerLength_1[index] | 0) : false;
  }
  function OtherLowercase() {
    OtherLowercase_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Int32Array([170, 186, 688, 704, 736, 837, 890, 7468, 7544, 7579, 8305, 8319, 8336, 8560, 9424, 11388, 42652, 42864, 43000, 43868]);
      break $l$block;
    }
    tmp.otherLowerStart_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = new Int32Array([1, 1, 9, 2, 5, 1, 1, 63, 1, 37, 1, 1, 13, 16, 26, 2, 2, 1, 2, 4]);
      break $l$block_0;
    }
    tmp_0.otherLowerLength_1 = tmp$ret$1;
  }
  OtherLowercase.$metadata$ = {
    simpleName: 'OtherLowercase',
    kind: 'object',
    interfaces: []
  };
  var OtherLowercase_instance;
  function OtherLowercase_getInstance() {
    if (OtherLowercase_instance == null)
      new OtherLowercase();
    return OtherLowercase_instance;
  }
  function titlecaseCharImpl(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(_this__1828080292);
      break $l$block;
    }
    var code = tmp$ret$0;
    if ((452 <= code ? code <= 460 : false) ? true : 497 <= code ? code <= 499 : false) {
      return numberToChar(imul(3, (code + 1 | 0) / 3 | 0));
    }
    if ((4304 <= code ? code <= 4346 : false) ? true : 4349 <= code ? code <= 4351 : false) {
      return _this__1828080292;
    }
    return uppercaseChar(_this__1828080292);
  }
  function isWhitespaceImpl(_this__1828080292) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = Char__toInt_impl_2402388783(_this__1828080292);
      break $l$block;
    }
    var ch = tmp$ret$0;
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
  }
  function releaseIntercepted($this) {
    var intercepted = $this.intercepted__1;
    if (!(intercepted == null) ? !(intercepted === $this) : false) {
      ensureNotNull($this._get_context__1558698818_ps0bpe_k$().get_1pi7hg_k$(Key_getInstance())).releaseInterceptedContinuation_4i98ok_k$(intercepted);
    }
    $this.intercepted__1 = CompletedContinuation_getInstance();
  }
  function CoroutineImpl(resultContinuation) {
    this.resultContinuation_1 = resultContinuation;
    this.state_1 = 0;
    this.exceptionState_1 = 0;
    this.result_1 = null;
    this.exception_1 = null;
    this.finallyPath_1 = null;
    var tmp = this;
    var tmp0_safe_receiver = this.resultContinuation_1;
    tmp._context_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__1558698818_ps0bpe_k$();
    this.intercepted__1 = null;
  }
  CoroutineImpl.prototype._set_state__1256591060_i39zdo_k$ = function (_set____804775014) {
    this.state_1 = _set____804775014;
  };
  CoroutineImpl.prototype._get_state__3614753120_b8zcm8_k$ = function () {
    return this.state_1;
  };
  CoroutineImpl.prototype._set_exceptionState__118868437_8fc1n_k$ = function (_set____804775014) {
    this.exceptionState_1 = _set____804775014;
  };
  CoroutineImpl.prototype._get_exceptionState__1662596297_rhv7ih_k$ = function () {
    return this.exceptionState_1;
  };
  CoroutineImpl.prototype._set_result__3294305178_cat9z_k$ = function (_set____804775014) {
    this.result_1 = _set____804775014;
  };
  CoroutineImpl.prototype._get_result__3382885006_f31376_k$ = function () {
    return this.result_1;
  };
  CoroutineImpl.prototype._set_exception__4196179798_3fu58l_k$ = function (_set____804775014) {
    this.exception_1 = _set____804775014;
  };
  CoroutineImpl.prototype._get_exception__1672948706_ro13he_k$ = function () {
    return this.exception_1;
  };
  CoroutineImpl.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    return ensureNotNull(this._context_1);
  };
  CoroutineImpl.prototype.resumeWith_7onugl_k$ = function (result) {
    var current = this;
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_Result___get_isFailure__impl__3103244073(result)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl__3597185688(result);
        tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    var currentResult = tmp$ret$0;
    var currentException = Result__exceptionOrNull_impl_1523290257(result);
    while (true) {
      var tmp$ret$6;
      $l$block_5: {
        var tmp0_with_0 = current;
        {
        }
        if (currentException == null) {
          tmp0_with_0.result_1 = currentResult;
        } else {
          tmp0_with_0.state_1 = tmp0_with_0.exceptionState_1;
          tmp0_with_0.exception_1 = currentException;
        }
        try {
          var outcome_2 = tmp0_with_0.doResume_5yljmg_k$();
          if (outcome_2 === _get_COROUTINE_SUSPENDED__2870145053())
            return Unit_getInstance();
          currentResult = outcome_2;
          currentException = null;
        } catch ($p) {
          currentResult = null;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = $p;
            break $l$block_0;
          }
          currentException = tmp$ret$1;
        }
        releaseIntercepted(tmp0_with_0);
        var completion_4 = ensureNotNull(tmp0_with_0.resultContinuation_1);
        var tmp_1;
        if (completion_4 instanceof CoroutineImpl) {
          current = completion_4;
          tmp_1 = Unit_getInstance();
        } else {
          {
            if (!(currentException == null)) {
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
                var tmp$ret$2;
                $l$block_1: {
                  var tmp0_failure_0_1_6 = Companion_getInstance_2();
                  tmp$ret$2 = _Result___init__impl__2241242780(createFailure(tmp0_resumeWithException_0_5));
                  break $l$block_1;
                }
                tmp$ret$3 = completion_4.resumeWith_s3a3yh_k$(tmp$ret$2);
                break $l$block_2;
              }
            } else {
              var tmp$ret$5;
              $l$block_4: {
                var tmp1_resume_0_7 = currentResult;
                var tmp$ret$4;
                $l$block_3: {
                  var tmp0_success_0_1_8 = Companion_getInstance_2();
                  tmp$ret$4 = _Result___init__impl__2241242780(tmp1_resume_0_7);
                  break $l$block_3;
                }
                tmp$ret$5 = completion_4.resumeWith_s3a3yh_k$(tmp$ret$4);
                break $l$block_4;
              }
            }
            return Unit_getInstance();
          }
        }
        tmp$ret$6 = tmp_1;
        break $l$block_5;
      }
    }
  };
  CoroutineImpl.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_7onugl_k$(result);
  };
  CoroutineImpl.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__1558698818_ps0bpe_k$ = function () {
    throw IllegalStateException_init_$Create$('This continuation is already complete');
  };
  CompletedContinuation.prototype.resumeWith_7onugl_k$ = function (result) {
    {
      throw IllegalStateException_init_$Create$('This continuation is already complete');
    }
  };
  CompletedContinuation.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_7onugl_k$(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function invokeSuspendSuperTypeWithReceiverAndParam(_this__1828080292, receiver, param, completion) {
    throw new NotImplementedError('It is intrinsic method');
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$(message, $this) {
    extendThrowable($this, message, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$() {
    var tmp = IllegalArgumentException_init_$Init$(Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function NumberFormatException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    NumberFormatException.call($this);
    return $this;
  }
  function NumberFormatException_init_$Create$(message) {
    var tmp = NumberFormatException_init_$Init$(message, Object.create(NumberFormatException.prototype));
    captureStack(tmp, NumberFormatException_init_$Create$);
    return tmp;
  }
  function NumberFormatException() {
    captureStack(this, NumberFormatException);
  }
  NumberFormatException.$metadata$ = {
    simpleName: 'NumberFormatException',
    kind: 'class',
    interfaces: []
  };
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack);
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function findAssociatedObject(_this__1828080292, annotationClass) {
    var tmp;
    var tmp_0;
    if (_this__1828080292 instanceof KClassImpl) {
      tmp_0 = annotationClass instanceof KClassImpl;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_asDynamic_0 = annotationClass._get_jClass__3892345245_6npl5v_k$();
        tmp$ret$0 = tmp0_asDynamic_0;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.associatedObjectKey;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = tmp1_safe_receiver;
          break $l$block_0;
        }
        tmp_1 = tmp$ret$1;
      }
      var tmp2_elvis_lhs = tmp_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var key = tmp_2;
      var tmp$ret$2;
      $l$block_1: {
        var tmp1_asDynamic_0 = _this__1828080292._get_jClass__3892345245_6npl5v_k$();
        tmp$ret$2 = tmp1_asDynamic_0;
        break $l$block_1;
      }
      var tmp3_safe_receiver = tmp$ret$2.$metadata$;
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.associatedObjects;
      var tmp_3;
      if (tmp4_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp4_elvis_lhs;
      }
      var map = tmp_3;
      var tmp5_elvis_lhs = map[key];
      var tmp_4;
      if (tmp5_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp5_elvis_lhs;
      }
      var factory = tmp_4;
      return factory();
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Function1() {
  }
  Function1.$metadata$ = {
    simpleName: 'Function1',
    kind: 'interface',
    interfaces: []
  };
  function SuspendFunction2() {
  }
  SuspendFunction2.$metadata$ = {
    simpleName: 'SuspendFunction2',
    kind: 'interface',
    interfaces: []
  };
  //region block: post-declaration
  InternalHashCodeMap.prototype.createJsMap_8hfwp5_k$ = createJsMap;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.createKType = createKType;
  _.$crossModule$.findAssociatedObject = findAssociatedObject;
  _.$crossModule$.getKClassFromExpression = getKClassFromExpression;
  _.$crossModule$.getKClass = getKClass;
  _.$crossModule$.LazyThreadSafetyMode_PUBLICATION_getInstance = LazyThreadSafetyMode_PUBLICATION_getInstance;
  _.$crossModule$.joinToString$default = joinToString$default_0;
  _.$crossModule$.contains$default = contains$default;
  _.$crossModule$.indexOf$default = indexOf$default;
  _.$crossModule$.indexOf$default_1 = indexOf$default_1;
  _.$crossModule$.lastIndexOf$default = lastIndexOf$default;
  _.$crossModule$.ArrayList_init_$Create$ = ArrayList_init_$Create$_0;
  _.$crossModule$.ArrayList_init_$Create$_1 = ArrayList_init_$Create$;
  _.$crossModule$.ArrayList_init_$Create$_2 = ArrayList_init_$Create$_1;
  _.$crossModule$.HashMap_init_$Create$ = HashMap_init_$Create$_1;
  _.$crossModule$.HashMap_init_$Create$_1 = HashMap_init_$Create$;
  _.$crossModule$.HashMap_init_$Create$_2 = HashMap_init_$Create$_2;
  _.$crossModule$.HashSet_init_$Create$ = HashSet_init_$Create$_1;
  _.$crossModule$.HashSet_init_$Create$_1 = HashSet_init_$Create$;
  _.$crossModule$.HashSet_init_$Create$_2 = HashSet_init_$Create$_0;
  _.$crossModule$.LinkedHashMap_init_$Create$ = LinkedHashMap_init_$Create$_1;
  _.$crossModule$.LinkedHashMap_init_$Create$_1 = LinkedHashMap_init_$Create$;
  _.$crossModule$.LinkedHashMap_init_$Create$_2 = LinkedHashMap_init_$Create$_2;
  _.$crossModule$.LinkedHashSet_init_$Create$ = LinkedHashSet_init_$Create$;
  _.$crossModule$.LinkedHashSet_init_$Create$_1 = LinkedHashSet_init_$Create$_0;
  _.$crossModule$.Regex_init_$Create$ = Regex_init_$Create$;
  _.$crossModule$.StringBuilder_init_$Create$ = StringBuilder_init_$Create$_0;
  _.$crossModule$.IllegalArgumentException_init_$Create$ = IllegalArgumentException_init_$Create$;
  _.$crossModule$.IllegalArgumentException_init_$Init$ = IllegalArgumentException_init_$Init$_0;
  _.$crossModule$.IllegalArgumentException_init_$Create$_1 = IllegalArgumentException_init_$Create$_0;
  _.$crossModule$.IllegalArgumentException_init_$Init$_1 = IllegalArgumentException_init_$Init$_1;
  _.$crossModule$.IllegalStateException_init_$Create$ = IllegalStateException_init_$Create$;
  _.$crossModule$.IndexOutOfBoundsException_init_$Create$ = IndexOutOfBoundsException_init_$Create$;
  _.$crossModule$._Char___init__impl__380027157 = _Char___init__impl__380027157;
  _.$crossModule$.Char__minus_impl_3686210483 = Char__minus_impl_3686210483;
  _.$crossModule$.Char__toInt_impl_2402388783 = Char__toInt_impl_2402388783;
  _.$crossModule$.toString = toString_0;
  _.$crossModule$.BooleanCompanionObject_getInstance = BooleanCompanionObject_getInstance;
  _.$crossModule$.ByteCompanionObject_getInstance = ByteCompanionObject_getInstance;
  _.$crossModule$.DoubleCompanionObject_getInstance = DoubleCompanionObject_getInstance;
  _.$crossModule$.FloatCompanionObject_getInstance = FloatCompanionObject_getInstance;
  _.$crossModule$.IntCompanionObject_getInstance = IntCompanionObject_getInstance;
  _.$crossModule$.ShortCompanionObject_getInstance = ShortCompanionObject_getInstance;
  _.$crossModule$.StringCompanionObject_getInstance = StringCompanionObject_getInstance;
  _.$crossModule$.PrimitiveClasses_getInstance = PrimitiveClasses_getInstance;
  _.$crossModule$.Companion_getInstance = Companion_getInstance_6;
  _.$crossModule$.Companion_getInstance_1 = Companion_getInstance_8;
  _.$crossModule$.Unit_getInstance = Unit_getInstance;
  _.$crossModule$.ArrayList = ArrayList;
  _.$crossModule$.Collection = Collection;
  _.$crossModule$.HashMap = HashMap;
  _.$crossModule$.HashSet = HashSet;
  _.$crossModule$.Iterable = Iterable;
  _.$crossModule$.Iterator = Iterator;
  _.$crossModule$.LinkedHashMap = LinkedHashMap;
  _.$crossModule$.LinkedHashSet = LinkedHashSet;
  _.$crossModule$.List = List;
  _.$crossModule$.Entry = Entry;
  _.$crossModule$.Map = Map;
  _.$crossModule$.MutableList = MutableList;
  _.$crossModule$.MutableMap = MutableMap;
  _.$crossModule$.MutableSet = MutableSet;
  _.$crossModule$.Set = Set;
  _.$crossModule$.asList = asList;
  _.$crossModule$.collectionSizeOrDefault = collectionSizeOrDefault;
  _.$crossModule$.contentEquals = contentEquals;
  _.$crossModule$.contentHashCode = contentHashCode;
  _.$crossModule$.copyOf = copyOf_4;
  _.$crossModule$.copyOf_1 = copyOf_2;
  _.$crossModule$.copyOf_2 = copyOf_6;
  _.$crossModule$.copyOf_3 = copyOf;
  _.$crossModule$.copyOf_4 = copyOf_5;
  _.$crossModule$.copyOf_5 = copyOf_0;
  _.$crossModule$.copyOf_6 = copyOf_1;
  _.$crossModule$.copyOf_7 = copyOf_7;
  _.$crossModule$.copyOf_8 = copyOf_3;
  _.$crossModule$.copyToArray = copyToArray;
  _.$crossModule$.emptyList = emptyList;
  _.$crossModule$.emptyMap = emptyMap;
  _.$crossModule$.emptySet = emptySet;
  _.$crossModule$.getValue = getValue;
  _.$crossModule$._get_indices__2241594442 = _get_indices__2241594442_0;
  _.$crossModule$._get_indices__2241594442_1 = _get_indices__2241594442;
  _.$crossModule$._get_lastIndex__339712501 = _get_lastIndex__339712501_1;
  _.$crossModule$._get_lastIndex__339712501_1 = _get_lastIndex__339712501_2;
  _.$crossModule$.lastOrNull = lastOrNull;
  _.$crossModule$.last = last;
  _.$crossModule$.mapCapacity = mapCapacity;
  _.$crossModule$.mapOf = mapOf;
  _.$crossModule$.plus = plus_0;
  _.$crossModule$.plus_1 = plus;
  _.$crossModule$.removeLast = removeLast;
  _.$crossModule$.setOf = setOf;
  _.$crossModule$.singleOrNull = singleOrNull;
  _.$crossModule$.toBooleanArray = toBooleanArray;
  _.$crossModule$.toHashSet = toHashSet;
  _.$crossModule$.toList = toList_0;
  _.$crossModule$.toList_1 = toList;
  _.$crossModule$.toMap = toMap;
  _.$crossModule$.toSet = toSet;
  _.$crossModule$.withIndex = withIndex;
  _.$crossModule$._get_COROUTINE_SUSPENDED__2870145053 = _get_COROUTINE_SUSPENDED__2870145053;
  _.$crossModule$.CoroutineImpl = CoroutineImpl;
  _.$crossModule$.SuspendFunction2 = SuspendFunction2;
  _.$crossModule$.getProgressionLastElement = getProgressionLastElement;
  _.$crossModule$.println = println;
  _.$crossModule$.arrayIterator = arrayIterator;
  _.$crossModule$.booleanArray = booleanArray;
  _.$crossModule$.captureStack = captureStack;
  _.$crossModule$.charArray = charArray;
  _.$crossModule$.charSequenceGet = charSequenceGet;
  _.$crossModule$.charSequenceLength = charSequenceLength;
  _.$crossModule$.charSequenceSubSequence = charSequenceSubSequence;
  _.$crossModule$.equals = equals_1;
  _.$crossModule$.fillArrayVal = fillArrayVal;
  _.$crossModule$.getPropertyCallableRef = getPropertyCallableRef;
  _.$crossModule$.getStringHashCode = getStringHashCode;
  _.$crossModule$.hashCode = hashCode;
  _.$crossModule$.isArray = isArray;
  _.$crossModule$.isBooleanArray = isBooleanArray;
  _.$crossModule$.isByteArray = isByteArray;
  _.$crossModule$.isCharArray = isCharArray;
  _.$crossModule$.isDoubleArray = isDoubleArray;
  _.$crossModule$.isFloatArray = isFloatArray;
  _.$crossModule$.isIntArray = isIntArray;
  _.$crossModule$.isInterface = isInterface;
  _.$crossModule$.isLongArray = isLongArray;
  _.$crossModule$.isObject = isObject;
  _.$crossModule$.isShortArray = isShortArray;
  _.$crossModule$._get_js__1413122402 = _get_js__1413122402;
  _.$crossModule$.longArray = longArray;
  _.$crossModule$.numberToChar = numberToChar;
  _.$crossModule$.toByte = toByte;
  _.$crossModule$.toLong = toLong_0;
  _.$crossModule$.toShort = toShort;
  _.$crossModule$.toString_1 = toString_2;
  _.$crossModule$.coerceAtLeast = coerceAtLeast;
  _.$crossModule$.coerceAtMost = coerceAtMost;
  _.$crossModule$.step = step;
  _.$crossModule$.until = until;
  _.$crossModule$.KClass = KClass;
  _.$crossModule$.KProperty1 = KProperty1;
  _.$crossModule$.KTypeParameter = KTypeParameter;
  _.$crossModule$.equals_1 = equals_0;
  _.$crossModule$.isBlank = isBlank;
  _.$crossModule$.isLowerCase = isLowerCase;
  _.$crossModule$.single = single_2;
  _.$crossModule$.titlecase = titlecase;
  _.$crossModule$.toDouble = toDouble;
  _.$crossModule$.toIntOrNull = toIntOrNull;
  _.$crossModule$.toInt = toInt;
  _.$crossModule$.toLong_1 = toLong;
  _.$crossModule$.trimIndent = trimIndent;
  _.$crossModule$.Annotation = Annotation;
  _.$crossModule$.Char = Char;
  _.$crossModule$.DeepRecursiveFunction = DeepRecursiveFunction;
  _.$crossModule$.DeepRecursiveScope = DeepRecursiveScope;
  _.$crossModule$.Enum = Enum;
  _.$crossModule$.IllegalArgumentException = IllegalArgumentException;
  _.$crossModule$.Long = Long;
  _.$crossModule$.Pair = Pair;
  _.$crossModule$.THROW_CCE = THROW_CCE;
  _.$crossModule$.Triple = Triple;
  _.$crossModule$.Unit = Unit;
  _.$crossModule$.arrayOf = arrayOf;
  _.$crossModule$.countTrailingZeroBits = countTrailingZeroBits;
  _.$crossModule$.ensureNotNull = ensureNotNull;
  _.$crossModule$.invoke = invoke;
  _.$crossModule$.isFinite = isFinite_0;
  _.$crossModule$.isFinite_1 = isFinite;
  _.$crossModule$.lazy = lazy;
  _.$crossModule$.lazy_1 = lazy_0;
  _.$crossModule$.plus_2 = plus_1;
  _.$crossModule$.to = to;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_kotlin.js.map