import {
  require_crypto
} from "./chunk-3W4F72EW.js";
import {
  __export,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __privateWrapper,
  __publicField,
  __toESM
} from "./chunk-CLC6CPQL.js";

// node_modules/ethers/lib.esm/ethers.js
var ethers_exports = {};
__export(ethers_exports, {
  AbiCoder: () => AbiCoder,
  AbstractProvider: () => AbstractProvider,
  AbstractSigner: () => AbstractSigner,
  AlchemyProvider: () => AlchemyProvider,
  AnkrProvider: () => AnkrProvider,
  BaseContract: () => BaseContract,
  BaseWallet: () => BaseWallet,
  Block: () => Block,
  BrowserProvider: () => BrowserProvider,
  CloudflareProvider: () => CloudflareProvider,
  ConstructorFragment: () => ConstructorFragment,
  Contract: () => Contract,
  ContractEventPayload: () => ContractEventPayload,
  ContractFactory: () => ContractFactory,
  ContractTransactionReceipt: () => ContractTransactionReceipt,
  ContractTransactionResponse: () => ContractTransactionResponse,
  ContractUnknownEventPayload: () => ContractUnknownEventPayload,
  EnsPlugin: () => EnsPlugin,
  EnsResolver: () => EnsResolver,
  ErrorDescription: () => ErrorDescription,
  ErrorFragment: () => ErrorFragment,
  EtherSymbol: () => EtherSymbol,
  EtherscanPlugin: () => EtherscanPlugin,
  EtherscanProvider: () => EtherscanProvider,
  EventFragment: () => EventFragment,
  EventLog: () => EventLog,
  EventPayload: () => EventPayload,
  FallbackFragment: () => FallbackFragment,
  FallbackProvider: () => FallbackProvider,
  FeeData: () => FeeData,
  FeeDataNetworkPlugin: () => FeeDataNetworkPlugin,
  FetchCancelSignal: () => FetchCancelSignal,
  FetchRequest: () => FetchRequest,
  FetchResponse: () => FetchResponse,
  FixedNumber: () => FixedNumber,
  Fragment: () => Fragment,
  FunctionFragment: () => FunctionFragment,
  GasCostPlugin: () => GasCostPlugin,
  HDNodeVoidWallet: () => HDNodeVoidWallet,
  HDNodeWallet: () => HDNodeWallet,
  Indexed: () => Indexed,
  InfuraProvider: () => InfuraProvider,
  InfuraWebSocketProvider: () => InfuraWebSocketProvider,
  Interface: () => Interface,
  IpcSocketProvider: () => IpcSocketProvider,
  JsonRpcApiProvider: () => JsonRpcApiProvider,
  JsonRpcProvider: () => JsonRpcProvider,
  JsonRpcSigner: () => JsonRpcSigner,
  LangEn: () => LangEn,
  Log: () => Log,
  LogDescription: () => LogDescription,
  MaxInt256: () => MaxInt256,
  MaxUint256: () => MaxUint256,
  MessagePrefix: () => MessagePrefix,
  MinInt256: () => MinInt256,
  Mnemonic: () => Mnemonic,
  MulticoinProviderPlugin: () => MulticoinProviderPlugin,
  N: () => N,
  NamedFragment: () => NamedFragment,
  Network: () => Network,
  NetworkPlugin: () => NetworkPlugin,
  NonceManager: () => NonceManager,
  ParamType: () => ParamType,
  PocketProvider: () => PocketProvider,
  QuickNodeProvider: () => QuickNodeProvider,
  Result: () => Result,
  Signature: () => Signature2,
  SigningKey: () => SigningKey,
  SocketBlockSubscriber: () => SocketBlockSubscriber,
  SocketEventSubscriber: () => SocketEventSubscriber,
  SocketPendingSubscriber: () => SocketPendingSubscriber,
  SocketProvider: () => SocketProvider,
  SocketSubscriber: () => SocketSubscriber,
  StructFragment: () => StructFragment,
  Transaction: () => Transaction,
  TransactionDescription: () => TransactionDescription,
  TransactionReceipt: () => TransactionReceipt,
  TransactionResponse: () => TransactionResponse,
  Typed: () => Typed,
  TypedDataEncoder: () => TypedDataEncoder,
  UnmanagedSubscriber: () => UnmanagedSubscriber,
  Utf8ErrorFuncs: () => Utf8ErrorFuncs,
  VoidSigner: () => VoidSigner,
  Wallet: () => Wallet,
  WebSocketProvider: () => WebSocketProvider,
  WeiPerEther: () => WeiPerEther,
  Wordlist: () => Wordlist,
  WordlistOwl: () => WordlistOwl,
  WordlistOwlA: () => WordlistOwlA,
  ZeroAddress: () => ZeroAddress,
  ZeroHash: () => ZeroHash,
  accessListify: () => accessListify,
  assert: () => assert,
  assertArgument: () => assertArgument,
  assertArgumentCount: () => assertArgumentCount,
  assertNormalize: () => assertNormalize,
  assertPrivate: () => assertPrivate,
  checkResultErrors: () => checkResultErrors,
  computeAddress: () => computeAddress,
  computeHmac: () => computeHmac,
  concat: () => concat,
  copyRequest: () => copyRequest,
  dataLength: () => dataLength,
  dataSlice: () => dataSlice,
  decodeBase58: () => decodeBase58,
  decodeBase64: () => decodeBase64,
  decodeBytes32String: () => decodeBytes32String,
  decodeRlp: () => decodeRlp,
  decryptCrowdsaleJson: () => decryptCrowdsaleJson,
  decryptKeystoreJson: () => decryptKeystoreJson,
  decryptKeystoreJsonSync: () => decryptKeystoreJsonSync,
  defaultPath: () => defaultPath2,
  defineProperties: () => defineProperties,
  dnsEncode: () => dnsEncode,
  encodeBase58: () => encodeBase58,
  encodeBase64: () => encodeBase64,
  encodeBytes32String: () => encodeBytes32String,
  encodeRlp: () => encodeRlp,
  encryptKeystoreJson: () => encryptKeystoreJson,
  encryptKeystoreJsonSync: () => encryptKeystoreJsonSync,
  ensNormalize: () => ensNormalize,
  formatEther: () => formatEther,
  formatUnits: () => formatUnits,
  fromTwos: () => fromTwos,
  getAccountPath: () => getAccountPath,
  getAddress: () => getAddress,
  getBigInt: () => getBigInt,
  getBytes: () => getBytes,
  getBytesCopy: () => getBytesCopy,
  getCreate2Address: () => getCreate2Address,
  getCreateAddress: () => getCreateAddress,
  getDefaultProvider: () => getDefaultProvider,
  getIcapAddress: () => getIcapAddress,
  getIndexedAccountPath: () => getIndexedAccountPath,
  getNumber: () => getNumber,
  getUint: () => getUint,
  hashMessage: () => hashMessage,
  hexlify: () => hexlify,
  id: () => id,
  isAddress: () => isAddress,
  isAddressable: () => isAddressable,
  isBytesLike: () => isBytesLike,
  isCallException: () => isCallException,
  isCrowdsaleJson: () => isCrowdsaleJson,
  isError: () => isError,
  isHexString: () => isHexString,
  isKeystoreJson: () => isKeystoreJson,
  isValidName: () => isValidName,
  keccak256: () => keccak256,
  lock: () => lock,
  makeError: () => makeError,
  mask: () => mask,
  namehash: () => namehash,
  parseEther: () => parseEther,
  parseUnits: () => parseUnits,
  pbkdf2: () => pbkdf22,
  randomBytes: () => randomBytes2,
  recoverAddress: () => recoverAddress,
  resolveAddress: () => resolveAddress,
  resolveProperties: () => resolveProperties,
  ripemd160: () => ripemd1602,
  scrypt: () => scrypt2,
  scryptSync: () => scryptSync,
  sha256: () => sha2562,
  sha512: () => sha5122,
  showThrottleMessage: () => showThrottleMessage,
  solidityPacked: () => solidityPacked,
  solidityPackedKeccak256: () => solidityPackedKeccak256,
  solidityPackedSha256: () => solidityPackedSha256,
  stripZerosLeft: () => stripZerosLeft,
  toBeArray: () => toBeArray,
  toBeHex: () => toBeHex,
  toBigInt: () => toBigInt,
  toNumber: () => toNumber,
  toQuantity: () => toQuantity,
  toTwos: () => toTwos,
  toUtf8Bytes: () => toUtf8Bytes,
  toUtf8CodePoints: () => toUtf8CodePoints,
  toUtf8String: () => toUtf8String,
  uuidV4: () => uuidV4,
  verifyMessage: () => verifyMessage,
  verifyTypedData: () => verifyTypedData,
  version: () => version,
  wordlists: () => wordlists,
  zeroPadBytes: () => zeroPadBytes,
  zeroPadValue: () => zeroPadValue
});

// node_modules/ethers/lib.esm/_version.js
var version = "6.6.2";

// node_modules/ethers/lib.esm/utils/properties.js
function checkType(value, type, name) {
  const types = type.split("|").map((t) => t.trim());
  for (let i = 0; i < types.length; i++) {
    switch (type) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof value === type) {
          return;
        }
    }
  }
  const error = new Error(`invalid value for type ${type}`);
  error.code = "INVALID_ARGUMENT";
  error.argument = `value.${name}`;
  error.value = value;
  throw error;
}
async function resolveProperties(value) {
  const keys = Object.keys(value);
  const results = await Promise.all(keys.map((k) => Promise.resolve(value[k])));
  return results.reduce((accum, v, index) => {
    accum[keys[index]] = v;
    return accum;
  }, {});
}
function defineProperties(target, values, types) {
  for (let key in values) {
    let value = values[key];
    const type = types ? types[key] : null;
    if (type) {
      checkType(value, type, key);
    }
    Object.defineProperty(target, key, { enumerable: true, value, writable: false });
  }
}

// node_modules/ethers/lib.esm/utils/errors.js
function stringify(value) {
  if (value == null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "[ " + value.map(stringify).join(", ") + " ]";
  }
  if (value instanceof Uint8Array) {
    const HEX = "0123456789abcdef";
    let result = "0x";
    for (let i = 0; i < value.length; i++) {
      result += HEX[value[i] >> 4];
      result += HEX[value[i] & 15];
    }
    return result;
  }
  if (typeof value === "object" && typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  switch (typeof value) {
    case "boolean":
    case "symbol":
      return value.toString();
    case "bigint":
      return BigInt(value).toString();
    case "number":
      return value.toString();
    case "string":
      return JSON.stringify(value);
    case "object": {
      const keys = Object.keys(value);
      keys.sort();
      return "{ " + keys.map((k) => `${stringify(k)}: ${stringify(value[k])}`).join(", ") + " }";
    }
  }
  return `[ COULD NOT SERIALIZE ]`;
}
function isError(error, code) {
  return error && error.code === code;
}
function isCallException(error) {
  return isError(error, "CALL_EXCEPTION");
}
function makeError(message, code, info) {
  {
    const details = [];
    if (info) {
      if ("message" in info || "code" in info || "name" in info) {
        throw new Error(`value will overwrite populated values: ${stringify(info)}`);
      }
      for (const key in info) {
        const value = info[key];
        details.push(key + "=" + stringify(value));
      }
    }
    details.push(`code=${code}`);
    details.push(`version=${version}`);
    if (details.length) {
      message += " (" + details.join(", ") + ")";
    }
  }
  let error;
  switch (code) {
    case "INVALID_ARGUMENT":
      error = new TypeError(message);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      error = new RangeError(message);
      break;
    default:
      error = new Error(message);
  }
  defineProperties(error, { code });
  if (info) {
    Object.assign(error, info);
  }
  return error;
}
function assert(check, message, code, info) {
  if (!check) {
    throw makeError(message, code, info);
  }
}
function assertArgument(check, message, name, value) {
  assert(check, message, "INVALID_ARGUMENT", { argument: name, value });
}
function assertArgumentCount(count, expectedCount, message) {
  if (message == null) {
    message = "";
  }
  if (message) {
    message = ": " + message;
  }
  assert(count >= expectedCount, "missing arguemnt" + message, "MISSING_ARGUMENT", {
    count,
    expectedCount
  });
  assert(count <= expectedCount, "too many arguemnts" + message, "UNEXPECTED_ARGUMENT", {
    count,
    expectedCount
  });
}
var _normalizeForms = ["NFD", "NFC", "NFKD", "NFKC"].reduce((accum, form) => {
  try {
    if ("test".normalize(form) !== "test") {
      throw new Error("bad");
    }
    ;
    if (form === "NFD") {
      const check = String.fromCharCode(233).normalize("NFD");
      const expected = String.fromCharCode(101, 769);
      if (check !== expected) {
        throw new Error("broken");
      }
    }
    accum.push(form);
  } catch (error) {
  }
  return accum;
}, []);
function assertNormalize(form) {
  assert(_normalizeForms.indexOf(form) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
    operation: "String.prototype.normalize",
    info: { form }
  });
}
function assertPrivate(givenGuard, guard, className) {
  if (className == null) {
    className = "";
  }
  if (givenGuard !== guard) {
    let method = className, operation = "new";
    if (className) {
      method += ".";
      operation += " " + className;
    }
    assert(false, `private constructor; use ${method}from* methods`, "UNSUPPORTED_OPERATION", {
      operation
    });
  }
}

// node_modules/ethers/lib.esm/utils/data.js
function _getBytes(value, name, copy4) {
  if (value instanceof Uint8Array) {
    if (copy4) {
      return new Uint8Array(value);
    }
    return value;
  }
  if (typeof value === "string" && value.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const result = new Uint8Array((value.length - 2) / 2);
    let offset = 2;
    for (let i = 0; i < result.length; i++) {
      result[i] = parseInt(value.substring(offset, offset + 2), 16);
      offset += 2;
    }
    return result;
  }
  assertArgument(false, "invalid BytesLike value", name || "value", value);
}
function getBytes(value, name) {
  return _getBytes(value, name, false);
}
function getBytesCopy(value, name) {
  return _getBytes(value, name, true);
}
function isHexString(value, length) {
  if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (typeof length === "number" && value.length !== 2 + 2 * length) {
    return false;
  }
  if (length === true && value.length % 2 !== 0) {
    return false;
  }
  return true;
}
function isBytesLike(value) {
  return isHexString(value, true) || value instanceof Uint8Array;
}
var HexCharacters = "0123456789abcdef";
function hexlify(data) {
  const bytes2 = getBytes(data);
  let result = "0x";
  for (let i = 0; i < bytes2.length; i++) {
    const v = bytes2[i];
    result += HexCharacters[(v & 240) >> 4] + HexCharacters[v & 15];
  }
  return result;
}
function concat(datas) {
  return "0x" + datas.map((d) => hexlify(d).substring(2)).join("");
}
function dataLength(data) {
  if (isHexString(data, true)) {
    return (data.length - 2) / 2;
  }
  return getBytes(data).length;
}
function dataSlice(data, start, end) {
  const bytes2 = getBytes(data);
  if (end != null && end > bytes2.length) {
    assert(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
      buffer: bytes2,
      length: bytes2.length,
      offset: end
    });
  }
  return hexlify(bytes2.slice(start == null ? 0 : start, end == null ? bytes2.length : end));
}
function stripZerosLeft(data) {
  let bytes2 = hexlify(data).substring(2);
  while (bytes2.startsWith("00")) {
    bytes2 = bytes2.substring(2);
  }
  return "0x" + bytes2;
}
function zeroPad(data, length, left) {
  const bytes2 = getBytes(data);
  assert(length >= bytes2.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(bytes2),
    length,
    offset: length + 1
  });
  const result = new Uint8Array(length);
  result.fill(0);
  if (left) {
    result.set(bytes2, length - bytes2.length);
  } else {
    result.set(bytes2, 0);
  }
  return hexlify(result);
}
function zeroPadValue(data, length) {
  return zeroPad(data, length, true);
}
function zeroPadBytes(data, length) {
  return zeroPad(data, length, false);
}

// node_modules/ethers/lib.esm/utils/maths.js
var BN_0 = BigInt(0);
var BN_1 = BigInt(1);
var maxValue = 9007199254740991;
function fromTwos(_value2, _width) {
  const value = getUint(_value2, "value");
  const width = BigInt(getNumber(_width, "width"));
  assert(value >> width === BN_0, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: _value2
  });
  if (value >> width - BN_1) {
    const mask2 = (BN_1 << width) - BN_1;
    return -((~value & mask2) + BN_1);
  }
  return value;
}
function toTwos(_value2, _width) {
  let value = getBigInt(_value2, "value");
  const width = BigInt(getNumber(_width, "width"));
  const limit = BN_1 << width - BN_1;
  if (value < BN_0) {
    value = -value;
    assert(value <= limit, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: _value2
    });
    const mask2 = (BN_1 << width) - BN_1;
    return (~value & mask2) + BN_1;
  } else {
    assert(value < limit, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: _value2
    });
  }
  return value;
}
function mask(_value2, _bits) {
  const value = getUint(_value2, "value");
  const bits = BigInt(getNumber(_bits, "bits"));
  return value & (BN_1 << bits) - BN_1;
}
function getBigInt(value, name) {
  switch (typeof value) {
    case "bigint":
      return value;
    case "number":
      assertArgument(Number.isInteger(value), "underflow", name || "value", value);
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return BigInt(value);
    case "string":
      try {
        if (value === "") {
          throw new Error("empty string");
        }
        if (value[0] === "-" && value[1] !== "-") {
          return -BigInt(value.substring(1));
        }
        return BigInt(value);
      } catch (e) {
        assertArgument(false, `invalid BigNumberish string: ${e.message}`, name || "value", value);
      }
  }
  assertArgument(false, "invalid BigNumberish value", name || "value", value);
}
function getUint(value, name) {
  const result = getBigInt(value, name);
  assert(result >= BN_0, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value
  });
  return result;
}
var Nibbles = "0123456789abcdef";
function toBigInt(value) {
  if (value instanceof Uint8Array) {
    let result = "0x0";
    for (const v of value) {
      result += Nibbles[v >> 4];
      result += Nibbles[v & 15];
    }
    return BigInt(result);
  }
  return getBigInt(value);
}
function getNumber(value, name) {
  switch (typeof value) {
    case "bigint":
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return Number(value);
    case "number":
      assertArgument(Number.isInteger(value), "underflow", name || "value", value);
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return value;
    case "string":
      try {
        if (value === "") {
          throw new Error("empty string");
        }
        return getNumber(BigInt(value), name);
      } catch (e) {
        assertArgument(false, `invalid numeric string: ${e.message}`, name || "value", value);
      }
  }
  assertArgument(false, "invalid numeric value", name || "value", value);
}
function toNumber(value) {
  return getNumber(toBigInt(value));
}
function toBeHex(_value2, _width) {
  const value = getUint(_value2, "value");
  let result = value.toString(16);
  if (_width == null) {
    if (result.length % 2) {
      result = "0" + result;
    }
  } else {
    const width = getNumber(_width, "width");
    assert(width * 2 >= result.length, `value exceeds width (${width} bits)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: _value2
    });
    while (result.length < width * 2) {
      result = "0" + result;
    }
  }
  return "0x" + result;
}
function toBeArray(_value2) {
  const value = getUint(_value2, "value");
  if (value === BN_0) {
    return new Uint8Array([]);
  }
  let hex = value.toString(16);
  if (hex.length % 2) {
    hex = "0" + hex;
  }
  const result = new Uint8Array(hex.length / 2);
  for (let i = 0; i < result.length; i++) {
    const offset = i * 2;
    result[i] = parseInt(hex.substring(offset, offset + 2), 16);
  }
  return result;
}
function toQuantity(value) {
  let result = hexlify(isBytesLike(value) ? value : toBeArray(value)).substring(2);
  while (result.startsWith("0")) {
    result = result.substring(1);
  }
  if (result === "") {
    result = "0";
  }
  return "0x" + result;
}

// node_modules/ethers/lib.esm/utils/base58.js
var Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Lookup = null;
function getAlpha(letter) {
  if (Lookup == null) {
    Lookup = {};
    for (let i = 0; i < Alphabet.length; i++) {
      Lookup[Alphabet[i]] = BigInt(i);
    }
  }
  const result = Lookup[letter];
  assertArgument(result != null, `invalid base58 value`, "letter", letter);
  return result;
}
var BN_02 = BigInt(0);
var BN_58 = BigInt(58);
function encodeBase58(_value2) {
  let value = toBigInt(getBytes(_value2));
  let result = "";
  while (value) {
    result = Alphabet[Number(value % BN_58)] + result;
    value /= BN_58;
  }
  return result;
}
function decodeBase58(value) {
  let result = BN_02;
  for (let i = 0; i < value.length; i++) {
    result *= BN_58;
    result += getAlpha(value[i]);
  }
  return result;
}

// node_modules/ethers/lib.esm/utils/base64-browser.js
function decodeBase64(textData) {
  textData = atob(textData);
  const data = new Uint8Array(textData.length);
  for (let i = 0; i < textData.length; i++) {
    data[i] = textData.charCodeAt(i);
  }
  return getBytes(data);
}
function encodeBase64(_data5) {
  const data = getBytes(_data5);
  let textData = "";
  for (let i = 0; i < data.length; i++) {
    textData += String.fromCharCode(data[i]);
  }
  return btoa(textData);
}

// node_modules/ethers/lib.esm/utils/events.js
var _listener;
var EventPayload = class {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(emitter, listener, filter) {
    /**
     *  The event filter.
     */
    __publicField(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    __publicField(this, "emitter");
    __privateAdd(this, _listener, void 0);
    __privateSet(this, _listener, listener);
    defineProperties(this, { emitter, filter });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    if (__privateGet(this, _listener) == null) {
      return;
    }
    await this.emitter.off(this.filter, __privateGet(this, _listener));
  }
};
_listener = new WeakMap();

// node_modules/ethers/lib.esm/utils/utf8.js
function errorFunc(reason, offset, bytes2, output2, badCodepoint) {
  assertArgument(false, `invalid codepoint at offset ${offset}; ${reason}`, "bytes", bytes2);
}
function ignoreFunc(reason, offset, bytes2, output2, badCodepoint) {
  if (reason === "BAD_PREFIX" || reason === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let o = offset + 1; o < bytes2.length; o++) {
      if (bytes2[o] >> 6 !== 2) {
        break;
      }
      i++;
    }
    return i;
  }
  if (reason === "OVERRUN") {
    return bytes2.length - offset - 1;
  }
  return 0;
}
function replaceFunc(reason, offset, bytes2, output2, badCodepoint) {
  if (reason === "OVERLONG") {
    assertArgument(typeof badCodepoint === "number", "invalid bad code point for replacement", "badCodepoint", badCodepoint);
    output2.push(badCodepoint);
    return 0;
  }
  output2.push(65533);
  return ignoreFunc(reason, offset, bytes2, output2, badCodepoint);
}
var Utf8ErrorFuncs = Object.freeze({
  error: errorFunc,
  ignore: ignoreFunc,
  replace: replaceFunc
});
function getUtf8CodePoints(_bytes, onError) {
  if (onError == null) {
    onError = Utf8ErrorFuncs.error;
  }
  const bytes2 = getBytes(_bytes, "bytes");
  const result = [];
  let i = 0;
  while (i < bytes2.length) {
    const c = bytes2[i++];
    if (c >> 7 === 0) {
      result.push(c);
      continue;
    }
    let extraLength = null;
    let overlongMask = null;
    if ((c & 224) === 192) {
      extraLength = 1;
      overlongMask = 127;
    } else if ((c & 240) === 224) {
      extraLength = 2;
      overlongMask = 2047;
    } else if ((c & 248) === 240) {
      extraLength = 3;
      overlongMask = 65535;
    } else {
      if ((c & 192) === 128) {
        i += onError("UNEXPECTED_CONTINUE", i - 1, bytes2, result);
      } else {
        i += onError("BAD_PREFIX", i - 1, bytes2, result);
      }
      continue;
    }
    if (i - 1 + extraLength >= bytes2.length) {
      i += onError("OVERRUN", i - 1, bytes2, result);
      continue;
    }
    let res = c & (1 << 8 - extraLength - 1) - 1;
    for (let j = 0; j < extraLength; j++) {
      let nextChar = bytes2[i];
      if ((nextChar & 192) != 128) {
        i += onError("MISSING_CONTINUE", i, bytes2, result);
        res = null;
        break;
      }
      ;
      res = res << 6 | nextChar & 63;
      i++;
    }
    if (res === null) {
      continue;
    }
    if (res > 1114111) {
      i += onError("OUT_OF_RANGE", i - 1 - extraLength, bytes2, result, res);
      continue;
    }
    if (res >= 55296 && res <= 57343) {
      i += onError("UTF16_SURROGATE", i - 1 - extraLength, bytes2, result, res);
      continue;
    }
    if (res <= overlongMask) {
      i += onError("OVERLONG", i - 1 - extraLength, bytes2, result, res);
      continue;
    }
    result.push(res);
  }
  return result;
}
function toUtf8Bytes(str, form) {
  if (form != null) {
    assertNormalize(form);
    str = str.normalize(form);
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c < 128) {
      result.push(c);
    } else if (c < 2048) {
      result.push(c >> 6 | 192);
      result.push(c & 63 | 128);
    } else if ((c & 64512) == 55296) {
      i++;
      const c2 = str.charCodeAt(i);
      assertArgument(i < str.length && (c2 & 64512) === 56320, "invalid surrogate pair", "str", str);
      const pair = 65536 + ((c & 1023) << 10) + (c2 & 1023);
      result.push(pair >> 18 | 240);
      result.push(pair >> 12 & 63 | 128);
      result.push(pair >> 6 & 63 | 128);
      result.push(pair & 63 | 128);
    } else {
      result.push(c >> 12 | 224);
      result.push(c >> 6 & 63 | 128);
      result.push(c & 63 | 128);
    }
  }
  return new Uint8Array(result);
}
function _toUtf8String(codePoints) {
  return codePoints.map((codePoint) => {
    if (codePoint <= 65535) {
      return String.fromCharCode(codePoint);
    }
    codePoint -= 65536;
    return String.fromCharCode((codePoint >> 10 & 1023) + 55296, (codePoint & 1023) + 56320);
  }).join("");
}
function toUtf8String(bytes2, onError) {
  return _toUtf8String(getUtf8CodePoints(bytes2, onError));
}
function toUtf8CodePoints(str, form) {
  return getUtf8CodePoints(toUtf8Bytes(str, form));
}

// node_modules/ethers/lib.esm/utils/geturl-browser.js
async function getUrl(req, _signal2) {
  const protocol = req.url.split(":")[0].toLowerCase();
  assert(protocol === "http" || protocol === "https", `unsupported protocol ${protocol}`, "UNSUPPORTED_OPERATION", {
    info: { protocol },
    operation: "request"
  });
  assert(protocol === "https" || !req.credentials || req.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
    operation: "request"
  });
  let signal = void 0;
  if (_signal2) {
    const controller = new AbortController();
    signal = controller.signal;
    _signal2.addListener(() => {
      controller.abort();
    });
  }
  const init = {
    method: req.method,
    headers: new Headers(Array.from(req)),
    body: req.body || void 0,
    signal
  };
  const resp = await fetch(req.url, init);
  const headers = {};
  resp.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });
  const respBody = await resp.arrayBuffer();
  const body = respBody == null ? null : new Uint8Array(respBody);
  return {
    statusCode: resp.status,
    statusMessage: resp.statusText,
    headers,
    body
  };
}

// node_modules/ethers/lib.esm/utils/fetch.js
var MAX_ATTEMPTS = 12;
var SLOT_INTERVAL = 250;
var getUrlFunc = getUrl;
var reData = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i");
var reIpfs = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
var locked = false;
async function dataGatewayFunc(url, signal) {
  try {
    const match = url.match(reData);
    if (!match) {
      throw new Error("invalid data");
    }
    return new FetchResponse(200, "OK", {
      "content-type": match[1] || "text/plain"
    }, match[2] ? decodeBase64(match[3]) : unpercent(match[3]));
  } catch (error) {
    return new FetchResponse(599, "BAD REQUEST (invalid data: URI)", {}, null, new FetchRequest(url));
  }
}
function getIpfsGatewayFunc(baseUrl) {
  async function gatewayIpfs(url, signal) {
    try {
      const match = url.match(reIpfs);
      if (!match) {
        throw new Error("invalid link");
      }
      return new FetchRequest(`${baseUrl}${match[2]}`);
    } catch (error) {
      return new FetchResponse(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new FetchRequest(url));
    }
  }
  return gatewayIpfs;
}
var Gateways = {
  "data": dataGatewayFunc,
  "ipfs": getIpfsGatewayFunc("https://gateway.ipfs.io/ipfs/")
};
var fetchSignals = /* @__PURE__ */ new WeakMap();
var _listeners, _cancelled;
var FetchCancelSignal = class {
  constructor(request) {
    __privateAdd(this, _listeners, void 0);
    __privateAdd(this, _cancelled, void 0);
    __privateSet(this, _listeners, []);
    __privateSet(this, _cancelled, false);
    fetchSignals.set(request, () => {
      if (__privateGet(this, _cancelled)) {
        return;
      }
      __privateSet(this, _cancelled, true);
      for (const listener of __privateGet(this, _listeners)) {
        setTimeout(() => {
          listener();
        }, 0);
      }
      __privateSet(this, _listeners, []);
    });
  }
  addListener(listener) {
    assert(!__privateGet(this, _cancelled), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    });
    __privateGet(this, _listeners).push(listener);
  }
  get cancelled() {
    return __privateGet(this, _cancelled);
  }
  checkSignal() {
    assert(!this.cancelled, "cancelled", "CANCELLED", {});
  }
};
_listeners = new WeakMap();
_cancelled = new WeakMap();
function checkSignal(signal) {
  if (signal == null) {
    throw new Error("missing signal; should not happen");
  }
  signal.checkSignal();
  return signal;
}
var _allowInsecure, _gzip, _headers, _method, _timeout, _url, _body, _bodyType, _creds, _preflight, _process, _retry, _signal, _throttle, _send, send_fn;
var _FetchRequest = class {
  /**
   *  Create a new FetchRequest instance with default values.
   *
   *  Once created, each property may be set before issuing a
   *  ``.send()`` to make the request.
   */
  constructor(url) {
    __privateAdd(this, _send);
    __privateAdd(this, _allowInsecure, void 0);
    __privateAdd(this, _gzip, void 0);
    __privateAdd(this, _headers, void 0);
    __privateAdd(this, _method, void 0);
    __privateAdd(this, _timeout, void 0);
    __privateAdd(this, _url, void 0);
    __privateAdd(this, _body, void 0);
    __privateAdd(this, _bodyType, void 0);
    __privateAdd(this, _creds, void 0);
    // Hooks
    __privateAdd(this, _preflight, void 0);
    __privateAdd(this, _process, void 0);
    __privateAdd(this, _retry, void 0);
    __privateAdd(this, _signal, void 0);
    __privateAdd(this, _throttle, void 0);
    __privateSet(this, _url, String(url));
    __privateSet(this, _allowInsecure, false);
    __privateSet(this, _gzip, true);
    __privateSet(this, _headers, {});
    __privateSet(this, _method, "");
    __privateSet(this, _timeout, 3e5);
    __privateSet(this, _throttle, {
      slotInterval: SLOT_INTERVAL,
      maxAttempts: MAX_ATTEMPTS
    });
  }
  /**
   *  The fetch URI to requrest.
   */
  get url() {
    return __privateGet(this, _url);
  }
  set url(url) {
    __privateSet(this, _url, String(url));
  }
  /**
   *  The fetch body, if any, to send as the request body. //(default: null)//
   *
   *  When setting a body, the intrinsic ``Content-Type`` is automatically
   *  set and will be used if **not overridden** by setting a custom
   *  header.
   *
   *  If %%body%% is null, the body is cleared (along with the
   *  intrinsic ``Content-Type``) and the .
   *
   *  If %%body%% is a string, the intrincis ``Content-Type`` is set to
   *  ``text/plain``.
   *
   *  If %%body%% is a Uint8Array, the intrincis ``Content-Type`` is set to
   *  ``application/octet-stream``.
   *
   *  If %%body%% is any other object, the intrincis ``Content-Type`` is
   *  set to ``application/json``.
   */
  get body() {
    if (__privateGet(this, _body) == null) {
      return null;
    }
    return new Uint8Array(__privateGet(this, _body));
  }
  set body(body) {
    if (body == null) {
      __privateSet(this, _body, void 0);
      __privateSet(this, _bodyType, void 0);
    } else if (typeof body === "string") {
      __privateSet(this, _body, toUtf8Bytes(body));
      __privateSet(this, _bodyType, "text/plain");
    } else if (body instanceof Uint8Array) {
      __privateSet(this, _body, body);
      __privateSet(this, _bodyType, "application/octet-stream");
    } else if (typeof body === "object") {
      __privateSet(this, _body, toUtf8Bytes(JSON.stringify(body)));
      __privateSet(this, _bodyType, "application/json");
    } else {
      throw new Error("invalid body");
    }
  }
  /**
   *  Returns true if the request has a body.
   */
  hasBody() {
    return __privateGet(this, _body) != null;
  }
  /**
   *  The HTTP method to use when requesting the URI. If no method
   *  has been explicitly set, then ``GET`` is used if the body is
   *  null and ``POST`` otherwise.
   */
  get method() {
    if (__privateGet(this, _method)) {
      return __privateGet(this, _method);
    }
    if (this.hasBody()) {
      return "POST";
    }
    return "GET";
  }
  set method(method) {
    if (method == null) {
      method = "";
    }
    __privateSet(this, _method, String(method).toUpperCase());
  }
  /**
   *  The headers that will be used when requesting the URI. All
   *  keys are lower-case.
   *
   *  This object is a copy, so any chnages will **NOT** be reflected
   *  in the ``FetchRequest``.
   *
   *  To set a header entry, use the ``setHeader`` method.
   */
  get headers() {
    const headers = Object.assign({}, __privateGet(this, _headers));
    if (__privateGet(this, _creds)) {
      headers["authorization"] = `Basic ${encodeBase64(toUtf8Bytes(__privateGet(this, _creds)))}`;
    }
    ;
    if (this.allowGzip) {
      headers["accept-encoding"] = "gzip";
    }
    if (headers["content-type"] == null && __privateGet(this, _bodyType)) {
      headers["content-type"] = __privateGet(this, _bodyType);
    }
    if (this.body) {
      headers["content-length"] = String(this.body.length);
    }
    return headers;
  }
  /**
   *  Get the header for %%key%%, ignoring case.
   */
  getHeader(key) {
    return this.headers[key.toLowerCase()];
  }
  /**
   *  Set the header for %%key%% to %%value%%. All values are coerced
   *  to a string.
   */
  setHeader(key, value) {
    __privateGet(this, _headers)[String(key).toLowerCase()] = String(value);
  }
  /**
   *  Clear all headers, resetting all intrinsic headers.
   */
  clearHeaders() {
    __privateSet(this, _headers, {});
  }
  [Symbol.iterator]() {
    const headers = this.headers;
    const keys = Object.keys(headers);
    let index = 0;
    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index++];
          return {
            value: [key, headers[key]],
            done: false
          };
        }
        return { value: void 0, done: true };
      }
    };
  }
  /**
   *  The value that will be sent for the ``Authorization`` header.
   *
   *  To set the credentials, use the ``setCredentials`` method.
   */
  get credentials() {
    return __privateGet(this, _creds) || null;
  }
  /**
   *  Sets an ``Authorization`` for %%username%% with %%password%%.
   */
  setCredentials(username, password) {
    assertArgument(!username.match(/:/), "invalid basic authentication username", "username", "[REDACTED]");
    __privateSet(this, _creds, `${username}:${password}`);
  }
  /**
   *  Enable and request gzip-encoded responses. The response will
   *  automatically be decompressed. //(default: true)//
   */
  get allowGzip() {
    return __privateGet(this, _gzip);
  }
  set allowGzip(value) {
    __privateSet(this, _gzip, !!value);
  }
  /**
   *  Allow ``Authentication`` credentials to be sent over insecure
   *  channels. //(default: false)//
   */
  get allowInsecureAuthentication() {
    return !!__privateGet(this, _allowInsecure);
  }
  set allowInsecureAuthentication(value) {
    __privateSet(this, _allowInsecure, !!value);
  }
  /**
   *  The timeout (in milliseconds) to wait for a complere response.
   *  //(default: 5 minutes)//
   */
  get timeout() {
    return __privateGet(this, _timeout);
  }
  set timeout(timeout) {
    assertArgument(timeout >= 0, "timeout must be non-zero", "timeout", timeout);
    __privateSet(this, _timeout, timeout);
  }
  /**
   *  This function is called prior to each request, for example
   *  during a redirection or retry in case of server throttling.
   *
   *  This offers an opportunity to populate headers or update
   *  content before sending a request.
   */
  get preflightFunc() {
    return __privateGet(this, _preflight) || null;
  }
  set preflightFunc(preflight) {
    __privateSet(this, _preflight, preflight);
  }
  /**
   *  This function is called after each response, offering an
   *  opportunity to provide client-level throttling or updating
   *  response data.
   *
   *  Any error thrown in this causes the ``send()`` to throw.
   *
   *  To schedule a retry attempt (assuming the maximum retry limit
   *  has not been reached), use [[response.throwThrottleError]].
   */
  get processFunc() {
    return __privateGet(this, _process) || null;
  }
  set processFunc(process2) {
    __privateSet(this, _process, process2);
  }
  /**
   *  This function is called on each retry attempt.
   */
  get retryFunc() {
    return __privateGet(this, _retry) || null;
  }
  set retryFunc(retry) {
    __privateSet(this, _retry, retry);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${__privateGet(this, _body) ? hexlify(__privateGet(this, _body)) : "null"}>`;
  }
  /**
   *  Update the throttle parameters used to determine maximum
   *  attempts and exponential-backoff properties.
   */
  setThrottleParams(params) {
    if (params.slotInterval != null) {
      __privateGet(this, _throttle).slotInterval = params.slotInterval;
    }
    if (params.maxAttempts != null) {
      __privateGet(this, _throttle).maxAttempts = params.maxAttempts;
    }
  }
  /**
   *  Resolves to the response by sending the request.
   */
  send() {
    assert(__privateGet(this, _signal) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" });
    __privateSet(this, _signal, new FetchCancelSignal(this));
    return __privateMethod(this, _send, send_fn).call(this, 0, getTime() + this.timeout, 0, this, new FetchResponse(0, "", {}, null, this));
  }
  /**
   *  Cancels the inflight response, causing a ``CANCELLED``
   *  error to be rejected from the [[send]].
   */
  cancel() {
    assert(__privateGet(this, _signal) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
    const signal = fetchSignals.get(this);
    if (!signal) {
      throw new Error("missing signal; should not happen");
    }
    signal();
  }
  /**
   *  Returns a new [[FetchRequest]] that represents the redirection
   *  to %%location%%.
   */
  redirect(location) {
    const current = this.url.split(":")[0].toLowerCase();
    const target = location.split(":")[0].toLowerCase();
    assert(this.method === "GET" && (current !== "https" || target !== "http") && location.match(/^https?:/), `unsupported redirect`, "UNSUPPORTED_OPERATION", {
      operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(location)})`
    });
    const req = new _FetchRequest(location);
    req.method = "GET";
    req.allowGzip = this.allowGzip;
    req.timeout = this.timeout;
    __privateSet(req, _headers, Object.assign({}, __privateGet(this, _headers)));
    if (__privateGet(this, _body)) {
      __privateSet(req, _body, new Uint8Array(__privateGet(this, _body)));
    }
    __privateSet(req, _bodyType, __privateGet(this, _bodyType));
    return req;
  }
  /**
   *  Create a new copy of this request.
   */
  clone() {
    const clone = new _FetchRequest(this.url);
    __privateSet(clone, _method, __privateGet(this, _method));
    if (__privateGet(this, _body)) {
      __privateSet(clone, _body, __privateGet(this, _body));
    }
    __privateSet(clone, _bodyType, __privateGet(this, _bodyType));
    __privateSet(clone, _headers, Object.assign({}, __privateGet(this, _headers)));
    __privateSet(clone, _creds, __privateGet(this, _creds));
    if (this.allowGzip) {
      clone.allowGzip = true;
    }
    clone.timeout = this.timeout;
    if (this.allowInsecureAuthentication) {
      clone.allowInsecureAuthentication = true;
    }
    __privateSet(clone, _preflight, __privateGet(this, _preflight));
    __privateSet(clone, _process, __privateGet(this, _process));
    __privateSet(clone, _retry, __privateGet(this, _retry));
    return clone;
  }
  /**
   *  Locks all static configuration for gateways and FetchGetUrlFunc
   *  registration.
   */
  static lockConfig() {
    locked = true;
  }
  /**
   *  Get the current Gateway function for %%scheme%%.
   */
  static getGateway(scheme) {
    return Gateways[scheme.toLowerCase()] || null;
  }
  /**
   *  Use the %%func%% when fetching URIs using %%scheme%%.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGateway(scheme, func) {
    scheme = scheme.toLowerCase();
    if (scheme === "http" || scheme === "https") {
      throw new Error(`cannot intercept ${scheme}; use registerGetUrl`);
    }
    if (locked) {
      throw new Error("gateways locked");
    }
    Gateways[scheme] = func;
  }
  /**
   *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGetUrl(getUrl2) {
    if (locked) {
      throw new Error("gateways locked");
    }
    getUrlFunc = getUrl2;
  }
  /**
   *  Creates a function that can "fetch" data URIs.
   *
   *  Note that this is automatically done internally to support
   *  data URIs, so it is not necessary to register it.
   *
   *  This is not generally something that is needed, but may
   *  be useful in a wrapper to perfom custom data URI functionality.
   */
  static createDataGateway() {
    return dataGatewayFunc;
  }
  /**
   *  Creates a function that will fetch IPFS (unvalidated) from
   *  a custom gateway baseUrl.
   *
   *  The default IPFS gateway used internally is
   *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
   */
  static createIpfsGatewayFunc(baseUrl) {
    return getIpfsGatewayFunc(baseUrl);
  }
};
var FetchRequest = _FetchRequest;
_allowInsecure = new WeakMap();
_gzip = new WeakMap();
_headers = new WeakMap();
_method = new WeakMap();
_timeout = new WeakMap();
_url = new WeakMap();
_body = new WeakMap();
_bodyType = new WeakMap();
_creds = new WeakMap();
_preflight = new WeakMap();
_process = new WeakMap();
_retry = new WeakMap();
_signal = new WeakMap();
_throttle = new WeakMap();
_send = new WeakSet();
send_fn = async function(attempt, expires, delay, _request3, _response) {
  var _a2, _b, _c;
  if (attempt >= __privateGet(this, _throttle).maxAttempts) {
    return _response.makeServerError("exceeded maximum retry limit");
  }
  assert(getTime() <= expires, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: _request3
  });
  if (delay > 0) {
    await wait(delay);
  }
  let req = this.clone();
  const scheme = (req.url.split(":")[0] || "").toLowerCase();
  if (scheme in Gateways) {
    const result = await Gateways[scheme](req.url, checkSignal(__privateGet(_request3, _signal)));
    if (result instanceof FetchResponse) {
      let response2 = result;
      if (this.processFunc) {
        checkSignal(__privateGet(_request3, _signal));
        try {
          response2 = await this.processFunc(req, response2);
        } catch (error) {
          if (error.throttle == null || typeof error.stall !== "number") {
            response2.makeServerError("error in post-processing function", error).assertOk();
          }
        }
      }
      return response2;
    }
    req = result;
  }
  if (this.preflightFunc) {
    req = await this.preflightFunc(req);
  }
  const resp = await getUrlFunc(req, checkSignal(__privateGet(_request3, _signal)));
  let response = new FetchResponse(resp.statusCode, resp.statusMessage, resp.headers, resp.body, _request3);
  if (response.statusCode === 301 || response.statusCode === 302) {
    try {
      const location = response.headers.location || "";
      return __privateMethod(_a2 = req.redirect(location), _send, send_fn).call(_a2, attempt + 1, expires, 0, _request3, response);
    } catch (error) {
    }
    return response;
  } else if (response.statusCode === 429) {
    if (this.retryFunc == null || await this.retryFunc(req, response, attempt)) {
      const retryAfter = response.headers["retry-after"];
      let delay2 = __privateGet(this, _throttle).slotInterval * Math.trunc(Math.random() * Math.pow(2, attempt));
      if (typeof retryAfter === "string" && retryAfter.match(/^[1-9][0-9]*$/)) {
        delay2 = parseInt(retryAfter);
      }
      return __privateMethod(_b = req.clone(), _send, send_fn).call(_b, attempt + 1, expires, delay2, _request3, response);
    }
  }
  if (this.processFunc) {
    checkSignal(__privateGet(_request3, _signal));
    try {
      response = await this.processFunc(req, response);
    } catch (error) {
      if (error.throttle == null || typeof error.stall !== "number") {
        response.makeServerError("error in post-processing function", error).assertOk();
      }
      let delay2 = __privateGet(this, _throttle).slotInterval * Math.trunc(Math.random() * Math.pow(2, attempt));
      ;
      if (error.stall >= 0) {
        delay2 = error.stall;
      }
      return __privateMethod(_c = req.clone(), _send, send_fn).call(_c, attempt + 1, expires, delay2, _request3, response);
    }
  }
  return response;
};
var _statusCode, _statusMessage, _headers2, _body2, _request, _error;
var _FetchResponse = class {
  constructor(statusCode, statusMessage, headers, body, request) {
    __privateAdd(this, _statusCode, void 0);
    __privateAdd(this, _statusMessage, void 0);
    __privateAdd(this, _headers2, void 0);
    __privateAdd(this, _body2, void 0);
    __privateAdd(this, _request, void 0);
    __privateAdd(this, _error, void 0);
    __privateSet(this, _statusCode, statusCode);
    __privateSet(this, _statusMessage, statusMessage);
    __privateSet(this, _headers2, Object.keys(headers).reduce((accum, k) => {
      accum[k.toLowerCase()] = String(headers[k]);
      return accum;
    }, {}));
    __privateSet(this, _body2, body == null ? null : new Uint8Array(body));
    __privateSet(this, _request, request || null);
    __privateSet(this, _error, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${__privateGet(this, _body2) ? hexlify(__privateGet(this, _body2)) : "null"}>`;
  }
  /**
   *  The response status code.
   */
  get statusCode() {
    return __privateGet(this, _statusCode);
  }
  /**
   *  The response status message.
   */
  get statusMessage() {
    return __privateGet(this, _statusMessage);
  }
  /**
   *  The response headers. All keys are lower-case.
   */
  get headers() {
    return Object.assign({}, __privateGet(this, _headers2));
  }
  /**
   *  The response body, or ``null`` if there was no body.
   */
  get body() {
    return __privateGet(this, _body2) == null ? null : new Uint8Array(__privateGet(this, _body2));
  }
  /**
   *  The response body as a UTF-8 encoded string, or the empty
   *  string (i.e. ``""``) if there was no body.
   *
   *  An error is thrown if the body is invalid UTF-8 data.
   */
  get bodyText() {
    try {
      return __privateGet(this, _body2) == null ? "" : toUtf8String(__privateGet(this, _body2));
    } catch (error) {
      assert(false, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
        operation: "bodyText",
        info: { response: this }
      });
    }
  }
  /**
   *  The response body, decoded as JSON.
   *
   *  An error is thrown if the body is invalid JSON-encoded data
   *  or if there was no body.
   */
  get bodyJson() {
    try {
      return JSON.parse(this.bodyText);
    } catch (error) {
      assert(false, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this }
      });
    }
  }
  [Symbol.iterator]() {
    const headers = this.headers;
    const keys = Object.keys(headers);
    let index = 0;
    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index++];
          return {
            value: [key, headers[key]],
            done: false
          };
        }
        return { value: void 0, done: true };
      }
    };
  }
  /**
   *  Return a Response with matching headers and body, but with
   *  an error status code (i.e. 599) and %%message%% with an
   *  optional %%error%%.
   */
  makeServerError(message, error) {
    let statusMessage;
    if (!message) {
      message = `${this.statusCode} ${this.statusMessage}`;
      statusMessage = `CLIENT ESCALATED SERVER ERROR (${message})`;
    } else {
      statusMessage = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${message})`;
    }
    const response = new _FetchResponse(599, statusMessage, this.headers, this.body, __privateGet(this, _request) || void 0);
    __privateSet(response, _error, { message, error });
    return response;
  }
  /**
   *  If called within a [request.processFunc](FetchRequest-processFunc)
   *  call, causes the request to retry as if throttled for %%stall%%
   *  milliseconds.
   */
  throwThrottleError(message, stall5) {
    if (stall5 == null) {
      stall5 = -1;
    } else {
      assertArgument(Number.isInteger(stall5) && stall5 >= 0, "invalid stall timeout", "stall", stall5);
    }
    const error = new Error(message || "throttling requests");
    defineProperties(error, { stall: stall5, throttle: true });
    throw error;
  }
  /**
   *  Get the header value for %%key%%, ignoring case.
   */
  getHeader(key) {
    return this.headers[key.toLowerCase()];
  }
  /**
   *  Returns true of the response has a body.
   */
  hasBody() {
    return __privateGet(this, _body2) != null;
  }
  /**
   *  The request made for this response.
   */
  get request() {
    return __privateGet(this, _request);
  }
  /**
   *  Returns true if this response was a success statusCode.
   */
  ok() {
    return __privateGet(this, _error).message === "" && this.statusCode >= 200 && this.statusCode < 300;
  }
  /**
   *  Throws a ``SERVER_ERROR`` if this response is not ok.
   */
  assertOk() {
    if (this.ok()) {
      return;
    }
    let { message, error } = __privateGet(this, _error);
    if (message === "") {
      message = `server response ${this.statusCode} ${this.statusMessage}`;
    }
    assert(false, message, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error
    });
  }
};
var FetchResponse = _FetchResponse;
_statusCode = new WeakMap();
_statusMessage = new WeakMap();
_headers2 = new WeakMap();
_body2 = new WeakMap();
_request = new WeakMap();
_error = new WeakMap();
function getTime() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function unpercent(value) {
  return toUtf8Bytes(value.replace(/%([0-9a-f][0-9a-f])/gi, (all, code) => {
    return String.fromCharCode(parseInt(code, 16));
  }));
}
function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

// node_modules/ethers/lib.esm/utils/fixednumber.js
var BN_N1 = BigInt(-1);
var BN_03 = BigInt(0);
var BN_12 = BigInt(1);
var BN_5 = BigInt(5);
var _guard = {};
var Zeros = "0000";
while (Zeros.length < 80) {
  Zeros += Zeros;
}
function getTens(decimals) {
  let result = Zeros;
  while (result.length < decimals) {
    result += result;
  }
  return BigInt("1" + result.substring(0, decimals));
}
function checkValue(val, format, safeOp) {
  const width = BigInt(format.width);
  if (format.signed) {
    const limit = BN_12 << width - BN_12;
    assert(safeOp == null || val >= -limit && val < limit, "overflow", "NUMERIC_FAULT", {
      operation: safeOp,
      fault: "overflow",
      value: val
    });
    if (val > BN_03) {
      val = fromTwos(mask(val, width), width);
    } else {
      val = -fromTwos(mask(-val, width), width);
    }
  } else {
    const limit = BN_12 << width;
    assert(safeOp == null || val >= 0 && val < limit, "overflow", "NUMERIC_FAULT", {
      operation: safeOp,
      fault: "overflow",
      value: val
    });
    val = (val % limit + limit) % limit & limit - BN_12;
  }
  return val;
}
function getFormat(value) {
  if (typeof value === "number") {
    value = `fixed128x${value}`;
  }
  let signed2 = true;
  let width = 128;
  let decimals = 18;
  if (typeof value === "string") {
    if (value === "fixed") {
    } else if (value === "ufixed") {
      signed2 = false;
    } else {
      const match = value.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
      assertArgument(match, "invalid fixed format", "format", value);
      signed2 = match[1] !== "u";
      width = parseInt(match[2]);
      decimals = parseInt(match[3]);
    }
  } else if (value) {
    const v = value;
    const check = (key, type, defaultValue) => {
      if (v[key] == null) {
        return defaultValue;
      }
      assertArgument(typeof v[key] === type, "invalid fixed format (" + key + " not " + type + ")", "format." + key, v[key]);
      return v[key];
    };
    signed2 = check("signed", "boolean", signed2);
    width = check("width", "number", width);
    decimals = check("decimals", "number", decimals);
  }
  assertArgument(width % 8 === 0, "invalid FixedNumber width (not byte aligned)", "format.width", width);
  assertArgument(decimals <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", decimals);
  const name = (signed2 ? "" : "u") + "fixed" + String(width) + "x" + String(decimals);
  return { signed: signed2, width, decimals, name };
}
function toString(val, decimals) {
  let negative = "";
  if (val < BN_03) {
    negative = "-";
    val *= BN_N1;
  }
  let str = val.toString();
  if (decimals === 0) {
    return negative + str;
  }
  while (str.length <= decimals) {
    str = Zeros + str;
  }
  const index = str.length - decimals;
  str = str.substring(0, index) + "." + str.substring(index);
  while (str[0] === "0" && str[1] !== ".") {
    str = str.substring(1);
  }
  while (str[str.length - 1] === "0" && str[str.length - 2] !== ".") {
    str = str.substring(0, str.length - 1);
  }
  return negative + str;
}
var _format, _val, _tens, _checkFormat, checkFormat_fn, _checkValue, checkValue_fn, _add, add_fn, _sub, sub_fn, _mul, mul_fn, _div, div_fn;
var _FixedNumber = class {
  // Use this when changing this file to get some typing info,
  // but then switch to any to mask the internal type
  //constructor(guard: any, value: bigint, format: _FixedFormat) {
  /**
   *  @private
   */
  constructor(guard, value, format) {
    __privateAdd(this, _checkFormat);
    __privateAdd(this, _checkValue);
    __privateAdd(this, _add);
    __privateAdd(this, _sub);
    __privateAdd(this, _mul);
    __privateAdd(this, _div);
    /**
     *  The specific fixed-point arithmetic field for this value.
     */
    __publicField(this, "format");
    __privateAdd(this, _format, void 0);
    // The actual value (accounting for decimals)
    __privateAdd(this, _val, void 0);
    // A base-10 value to multiple values by to maintain the magnitude
    __privateAdd(this, _tens, void 0);
    /**
     *  This is a property so console.log shows a human-meaningful value.
     *
     *  @private
     */
    __publicField(this, "_value");
    assertPrivate(guard, _guard, "FixedNumber");
    __privateSet(this, _val, value);
    __privateSet(this, _format, format);
    const _value2 = toString(value, format.decimals);
    defineProperties(this, { format: format.name, _value: _value2 });
    __privateSet(this, _tens, getTens(format.decimals));
  }
  /**
   *  If true, negative values are permitted, otherwise only
   *  positive values and zero are allowed.
   */
  get signed() {
    return __privateGet(this, _format).signed;
  }
  /**
   *  The number of bits available to store the value.
   */
  get width() {
    return __privateGet(this, _format).width;
  }
  /**
   *  The number of decimal places in the fixed-point arithment field.
   */
  get decimals() {
    return __privateGet(this, _format).decimals;
  }
  /**
   *  The value as an integer, based on the smallest unit the
   *  [[decimals]] allow.
   */
  get value() {
    return __privateGet(this, _val);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% added
   *  to %%other%%, ignoring overflow.
   */
  addUnsafe(other) {
    return __privateMethod(this, _add, add_fn).call(this, other);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% added
   *  to %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  add(other) {
    return __privateMethod(this, _add, add_fn).call(this, other, "add");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
   *  from %%this%%, ignoring overflow.
   */
  subUnsafe(other) {
    return __privateMethod(this, _sub, sub_fn).call(this, other);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
   *  from %%this%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  sub(other) {
    return __privateMethod(this, _sub, sub_fn).call(this, other, "sub");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%, ignoring overflow and underflow (precision loss).
   */
  mulUnsafe(other) {
    return __privateMethod(this, _mul, mul_fn).call(this, other);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs.
   */
  mul(other) {
    return __privateMethod(this, _mul, mul_fn).call(this, other, "mul");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
   *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
   *  occurs or if underflow (precision loss) occurs.
   */
  mulSignal(other) {
    __privateMethod(this, _checkFormat, checkFormat_fn).call(this, other);
    const value = __privateGet(this, _val) * __privateGet(other, _val);
    assert(value % __privateGet(this, _tens) === BN_03, "precision lost during signalling mul", "NUMERIC_FAULT", {
      operation: "mulSignal",
      fault: "underflow",
      value: this
    });
    return __privateMethod(this, _checkValue, checkValue_fn).call(this, value / __privateGet(this, _tens), "mulSignal");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%, ignoring underflow (precision loss). A
   *  [[NumericFaultError]] is thrown if overflow occurs.
   */
  divUnsafe(other) {
    return __privateMethod(this, _div, div_fn).call(this, other);
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%, ignoring underflow (precision loss). A
   *  [[NumericFaultError]] is thrown if overflow occurs.
   */
  div(other) {
    return __privateMethod(this, _div, div_fn).call(this, other, "div");
  }
  /**
   *  Returns a new [[FixedNumber]] with the result of %%this%% divided
   *  by %%other%%. A [[NumericFaultError]] is thrown if underflow
   *  (precision loss) occurs.
   */
  divSignal(other) {
    assert(__privateGet(other, _val) !== BN_03, "division by zero", "NUMERIC_FAULT", {
      operation: "div",
      fault: "divide-by-zero",
      value: this
    });
    __privateMethod(this, _checkFormat, checkFormat_fn).call(this, other);
    const value = __privateGet(this, _val) * __privateGet(this, _tens);
    assert(value % __privateGet(other, _val) === BN_03, "precision lost during signalling div", "NUMERIC_FAULT", {
      operation: "divSignal",
      fault: "underflow",
      value: this
    });
    return __privateMethod(this, _checkValue, checkValue_fn).call(this, value / __privateGet(other, _val), "divSignal");
  }
  /**
   *  Returns a comparison result between %%this%% and %%other%%.
   *
   *  This is suitable for use in sorting, where ``-1`` implies %%this%%
   *  is smaller, ``1`` implies %%this%% is larger and ``0`` implies
   *  both are equal.
   */
  cmp(other) {
    let a = this.value, b2 = other.value;
    const delta = this.decimals - other.decimals;
    if (delta > 0) {
      b2 *= getTens(delta);
    } else if (delta < 0) {
      a *= getTens(-delta);
    }
    if (a < b2) {
      return -1;
    }
    if (a > b2) {
      return 1;
    }
    return 0;
  }
  /**
   *  Returns true if %%other%% is equal to %%this%%.
   */
  eq(other) {
    return this.cmp(other) === 0;
  }
  /**
   *  Returns true if %%other%% is less than to %%this%%.
   */
  lt(other) {
    return this.cmp(other) < 0;
  }
  /**
   *  Returns true if %%other%% is less than or equal to %%this%%.
   */
  lte(other) {
    return this.cmp(other) <= 0;
  }
  /**
   *  Returns true if %%other%% is greater than to %%this%%.
   */
  gt(other) {
    return this.cmp(other) > 0;
  }
  /**
   *  Returns true if %%other%% is greater than or equal to %%this%%.
   */
  gte(other) {
    return this.cmp(other) >= 0;
  }
  /**
   *  Returns a new [[FixedNumber]] which is the largest **integer**
   *  that is less than or equal to %%this%%.
   *
   *  The decimal component of the result will always be ``0``.
   */
  floor() {
    let val = __privateGet(this, _val);
    if (__privateGet(this, _val) < BN_03) {
      val -= __privateGet(this, _tens) - BN_12;
    }
    val = __privateGet(this, _val) / __privateGet(this, _tens) * __privateGet(this, _tens);
    return __privateMethod(this, _checkValue, checkValue_fn).call(this, val, "floor");
  }
  /**
   *  Returns a new [[FixedNumber]] which is the smallest **integer**
   *  that is greater than or equal to %%this%%.
   *
   *  The decimal component of the result will always be ``0``.
   */
  ceiling() {
    let val = __privateGet(this, _val);
    if (__privateGet(this, _val) > BN_03) {
      val += __privateGet(this, _tens) - BN_12;
    }
    val = __privateGet(this, _val) / __privateGet(this, _tens) * __privateGet(this, _tens);
    return __privateMethod(this, _checkValue, checkValue_fn).call(this, val, "ceiling");
  }
  /**
   *  Returns a new [[FixedNumber]] with the decimal component
   *  rounded up on ties at %%decimals%% places.
   */
  round(decimals) {
    if (decimals == null) {
      decimals = 0;
    }
    if (decimals >= this.decimals) {
      return this;
    }
    const delta = this.decimals - decimals;
    const bump = BN_5 * getTens(delta - 1);
    let value = this.value + bump;
    const tens = getTens(delta);
    value = value / tens * tens;
    checkValue(value, __privateGet(this, _format), "round");
    return new _FixedNumber(_guard, value, __privateGet(this, _format));
  }
  /**
   *  Returns true if %%this%% is equal to ``0``.
   */
  isZero() {
    return __privateGet(this, _val) === BN_03;
  }
  /**
   *  Returns true if %%this%% is less than ``0``.
   */
  isNegative() {
    return __privateGet(this, _val) < BN_03;
  }
  /**
   *  Returns the string representation of %%this%%.
   */
  toString() {
    return this._value;
  }
  /**
   *  Returns a float approximation.
   *
   *  Due to IEEE 754 precission (or lack thereof), this function
   *  can only return an approximation and most values will contain
   *  rounding errors.
   */
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  /**
   *  Return a new [[FixedNumber]] with the same value but has had
   *  its field set to %%format%%.
   *
   *  This will throw if the value cannot fit into %%format%%.
   */
  toFormat(format) {
    return _FixedNumber.fromString(this.toString(), format);
  }
  /**
   *  Creates a new [[FixedNumber]] for %%value%% divided by
   *  %%decimal%% places with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% (once adjusted
   *  for %%decimals%%) cannot fit in %%format%%, either due to overflow
   *  or underflow (precision loss).
   */
  static fromValue(_value2, _decimals, _format2) {
    const decimals = _decimals == null ? 0 : getNumber(_decimals);
    const format = getFormat(_format2);
    let value = getBigInt(_value2, "value");
    const delta = decimals - format.decimals;
    if (delta > 0) {
      const tens = getTens(delta);
      assert(value % tens === BN_03, "value loses precision for format", "NUMERIC_FAULT", {
        operation: "fromValue",
        fault: "underflow",
        value: _value2
      });
      value /= tens;
    } else if (delta < 0) {
      value *= getTens(-delta);
    }
    checkValue(value, format, "fromValue");
    return new _FixedNumber(_guard, value, format);
  }
  /**
   *  Creates a new [[FixedNumber]] for %%value%% with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
   *  in %%format%%, either due to overflow or underflow (precision loss).
   */
  static fromString(_value2, _format2) {
    const match = _value2.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
    assertArgument(match && match[2].length + match[3].length > 0, "invalid FixedNumber string value", "value", _value2);
    const format = getFormat(_format2);
    let whole = match[2] || "0", decimal = match[3] || "";
    while (decimal.length < format.decimals) {
      decimal += Zeros;
    }
    assert(decimal.substring(format.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
      operation: "fromString",
      fault: "underflow",
      value: _value2
    });
    decimal = decimal.substring(0, format.decimals);
    const value = BigInt(match[1] + whole + decimal);
    checkValue(value, format, "fromString");
    return new _FixedNumber(_guard, value, format);
  }
  /**
   *  Creates a new [[FixedNumber]] with the big-endian representation
   *  %%value%% with %%format%%.
   *
   *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
   *  in %%format%% due to overflow.
   */
  static fromBytes(_value2, _format2) {
    let value = toBigInt(getBytes(_value2, "value"));
    const format = getFormat(_format2);
    if (format.signed) {
      value = fromTwos(value, format.width);
    }
    checkValue(value, format, "fromBytes");
    return new _FixedNumber(_guard, value, format);
  }
};
var FixedNumber = _FixedNumber;
_format = new WeakMap();
_val = new WeakMap();
_tens = new WeakMap();
_checkFormat = new WeakSet();
checkFormat_fn = function(other) {
  assertArgument(this.format === other.format, "incompatible format; use fixedNumber.toFormat", "other", other);
};
_checkValue = new WeakSet();
checkValue_fn = function(val, safeOp) {
  val = checkValue(val, __privateGet(this, _format), safeOp);
  return new _FixedNumber(_guard, val, __privateGet(this, _format));
};
_add = new WeakSet();
add_fn = function(o, safeOp) {
  __privateMethod(this, _checkFormat, checkFormat_fn).call(this, o);
  return __privateMethod(this, _checkValue, checkValue_fn).call(this, __privateGet(this, _val) + __privateGet(o, _val), safeOp);
};
_sub = new WeakSet();
sub_fn = function(o, safeOp) {
  __privateMethod(this, _checkFormat, checkFormat_fn).call(this, o);
  return __privateMethod(this, _checkValue, checkValue_fn).call(this, __privateGet(this, _val) - __privateGet(o, _val), safeOp);
};
_mul = new WeakSet();
mul_fn = function(o, safeOp) {
  __privateMethod(this, _checkFormat, checkFormat_fn).call(this, o);
  return __privateMethod(this, _checkValue, checkValue_fn).call(this, __privateGet(this, _val) * __privateGet(o, _val) / __privateGet(this, _tens), safeOp);
};
_div = new WeakSet();
div_fn = function(o, safeOp) {
  assert(__privateGet(o, _val) !== BN_03, "division by zero", "NUMERIC_FAULT", {
    operation: "div",
    fault: "divide-by-zero",
    value: this
  });
  __privateMethod(this, _checkFormat, checkFormat_fn).call(this, o);
  return __privateMethod(this, _checkValue, checkValue_fn).call(this, __privateGet(this, _val) * __privateGet(this, _tens) / __privateGet(o, _val), safeOp);
};

// node_modules/ethers/lib.esm/utils/rlp-decode.js
function hexlifyByte(value) {
  let result = value.toString(16);
  while (result.length < 2) {
    result = "0" + result;
  }
  return "0x" + result;
}
function unarrayifyInteger(data, offset, length) {
  let result = 0;
  for (let i = 0; i < length; i++) {
    result = result * 256 + data[offset + i];
  }
  return result;
}
function _decodeChildren(data, offset, childOffset, length) {
  const result = [];
  while (childOffset < offset + 1 + length) {
    const decoded = _decode(data, childOffset);
    result.push(decoded.result);
    childOffset += decoded.consumed;
    assert(childOffset <= offset + 1 + length, "child data too short", "BUFFER_OVERRUN", {
      buffer: data,
      length,
      offset
    });
  }
  return { consumed: 1 + length, result };
}
function _decode(data, offset) {
  assert(data.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: data,
    length: 0,
    offset: 1
  });
  const checkOffset = (offset2) => {
    assert(offset2 <= data.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: data,
      length: data.length,
      offset: offset2
    });
  };
  if (data[offset] >= 248) {
    const lengthLength = data[offset] - 247;
    checkOffset(offset + 1 + lengthLength);
    const length = unarrayifyInteger(data, offset + 1, lengthLength);
    checkOffset(offset + 1 + lengthLength + length);
    return _decodeChildren(data, offset, offset + 1 + lengthLength, lengthLength + length);
  } else if (data[offset] >= 192) {
    const length = data[offset] - 192;
    checkOffset(offset + 1 + length);
    return _decodeChildren(data, offset, offset + 1, length);
  } else if (data[offset] >= 184) {
    const lengthLength = data[offset] - 183;
    checkOffset(offset + 1 + lengthLength);
    const length = unarrayifyInteger(data, offset + 1, lengthLength);
    checkOffset(offset + 1 + lengthLength + length);
    const result = hexlify(data.slice(offset + 1 + lengthLength, offset + 1 + lengthLength + length));
    return { consumed: 1 + lengthLength + length, result };
  } else if (data[offset] >= 128) {
    const length = data[offset] - 128;
    checkOffset(offset + 1 + length);
    const result = hexlify(data.slice(offset + 1, offset + 1 + length));
    return { consumed: 1 + length, result };
  }
  return { consumed: 1, result: hexlifyByte(data[offset]) };
}
function decodeRlp(_data5) {
  const data = getBytes(_data5, "data");
  const decoded = _decode(data, 0);
  assertArgument(decoded.consumed === data.length, "unexpected junk after rlp payload", "data", _data5);
  return decoded.result;
}

// node_modules/ethers/lib.esm/utils/rlp-encode.js
function arrayifyInteger(value) {
  const result = [];
  while (value) {
    result.unshift(value & 255);
    value >>= 8;
  }
  return result;
}
function _encode(object2) {
  if (Array.isArray(object2)) {
    let payload = [];
    object2.forEach(function(child) {
      payload = payload.concat(_encode(child));
    });
    if (payload.length <= 55) {
      payload.unshift(192 + payload.length);
      return payload;
    }
    const length2 = arrayifyInteger(payload.length);
    length2.unshift(247 + length2.length);
    return length2.concat(payload);
  }
  const data = Array.prototype.slice.call(getBytes(object2, "object"));
  if (data.length === 1 && data[0] <= 127) {
    return data;
  } else if (data.length <= 55) {
    data.unshift(128 + data.length);
    return data;
  }
  const length = arrayifyInteger(data.length);
  length.unshift(183 + length.length);
  return length.concat(data);
}
var nibbles = "0123456789abcdef";
function encodeRlp(object2) {
  let result = "0x";
  for (const v of _encode(object2)) {
    result += nibbles[v >> 4];
    result += nibbles[v & 15];
  }
  return result;
}

// node_modules/ethers/lib.esm/utils/units.js
var names = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function formatUnits(value, unit) {
  let decimals = 18;
  if (typeof unit === "string") {
    const index = names.indexOf(unit);
    assertArgument(index >= 0, "invalid unit", "unit", unit);
    decimals = 3 * index;
  } else if (unit != null) {
    decimals = getNumber(unit, "unit");
  }
  return FixedNumber.fromValue(value, decimals, { decimals, width: 512 }).toString();
}
function parseUnits(value, unit) {
  assertArgument(typeof value === "string", "value must be a string", "value", value);
  let decimals = 18;
  if (typeof unit === "string") {
    const index = names.indexOf(unit);
    assertArgument(index >= 0, "invalid unit", "unit", unit);
    decimals = 3 * index;
  } else if (unit != null) {
    decimals = getNumber(unit, "unit");
  }
  return FixedNumber.fromString(value, { decimals, width: 512 }).value;
}
function formatEther(wei) {
  return formatUnits(wei, 18);
}
function parseEther(ether) {
  return parseUnits(ether, 18);
}

// node_modules/ethers/lib.esm/utils/uuid.js
function uuidV4(randomBytes3) {
  const bytes2 = getBytes(randomBytes3, "randomBytes");
  bytes2[6] = bytes2[6] & 15 | 64;
  bytes2[8] = bytes2[8] & 63 | 128;
  const value = hexlify(bytes2);
  return [
    value.substring(2, 10),
    value.substring(10, 14),
    value.substring(14, 18),
    value.substring(18, 22),
    value.substring(22, 34)
  ].join("-");
}

// node_modules/ethers/lib.esm/abi/coders/abstract-coder.js
var WordSize = 32;
var Padding = new Uint8Array(WordSize);
var passProperties = ["then"];
var _guard2 = {};
function throwError(name, error) {
  const wrapped = new Error(`deferred error during ABI decoding triggered accessing ${name}`);
  wrapped.error = error;
  throw wrapped;
}
var _names;
var _Result = class extends Array {
  /**
   *  @private
   */
  constructor(...args) {
    const guard = args[0];
    let items = args[1];
    let names2 = (args[2] || []).slice();
    let wrap = true;
    if (guard !== _guard2) {
      items = args;
      names2 = [];
      wrap = false;
    }
    super(items.length);
    __privateAdd(this, _names, void 0);
    items.forEach((item, index) => {
      this[index] = item;
    });
    const nameCounts = names2.reduce((accum, name) => {
      if (typeof name === "string") {
        accum.set(name, (accum.get(name) || 0) + 1);
      }
      return accum;
    }, /* @__PURE__ */ new Map());
    __privateSet(this, _names, Object.freeze(items.map((item, index) => {
      const name = names2[index];
      if (name != null && nameCounts.get(name) === 1) {
        return name;
      }
      return null;
    })));
    if (!wrap) {
      return;
    }
    Object.freeze(this);
    return new Proxy(this, {
      get: (target, prop, receiver) => {
        if (typeof prop === "string") {
          if (prop.match(/^[0-9]+$/)) {
            const index = getNumber(prop, "%index");
            if (index < 0 || index >= this.length) {
              throw new RangeError("out of result range");
            }
            const item = target[index];
            if (item instanceof Error) {
              throwError(`index ${index}`, item);
            }
            return item;
          }
          if (passProperties.indexOf(prop) >= 0) {
            return Reflect.get(target, prop, receiver);
          }
          const value = target[prop];
          if (value instanceof Function) {
            return function(...args2) {
              return value.apply(this === receiver ? target : this, args2);
            };
          } else if (!(prop in target)) {
            return target.getValue.apply(this === receiver ? target : this, [prop]);
          }
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  /**
   *  Returns the Result as a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray() {
    const result = [];
    this.forEach((item, index) => {
      if (item instanceof Error) {
        throwError(`index ${index}`, item);
      }
      result.push(item);
    });
    return result;
  }
  /**
   *  Returns the Result as an Object with each name-value pair.
   *
   *  This will throw if any value is unnamed, or if there are
   *  any outstanding deferred errors.
   */
  toObject() {
    return __privateGet(this, _names).reduce((accum, name, index) => {
      assert(name != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      });
      if (!(name in accum)) {
        accum[name] = this.getValue(name);
      }
      return accum;
    }, {});
  }
  /**
   *  @_ignore
   */
  slice(start, end) {
    if (start == null) {
      start = 0;
    }
    if (start < 0) {
      start += this.length;
      if (start < 0) {
        start = 0;
      }
    }
    if (end == null) {
      end = this.length;
    }
    if (end < 0) {
      end += this.length;
      if (end < 0) {
        end = 0;
      }
    }
    if (end > this.length) {
      end = this.length;
    }
    const result = [], names2 = [];
    for (let i = start; i < end; i++) {
      result.push(this[i]);
      names2.push(__privateGet(this, _names)[i]);
    }
    return new _Result(_guard2, result, names2);
  }
  /**
   *  @_ignore
   */
  filter(callback, thisArg) {
    const result = [], names2 = [];
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      if (item instanceof Error) {
        throwError(`index ${i}`, item);
      }
      if (callback.call(thisArg, item, i, this)) {
        result.push(item);
        names2.push(__privateGet(this, _names)[i]);
      }
    }
    return new _Result(_guard2, result, names2);
  }
  /**
   *  @_ignore
   */
  map(callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      if (item instanceof Error) {
        throwError(`index ${i}`, item);
      }
      result.push(callback.call(thisArg, item, i, this));
    }
    return result;
  }
  /**
   *  Returns the value for %%name%%.
   *
   *  Since it is possible to have a key whose name conflicts with
   *  a method on a [[Result]] or its superclass Array, or any
   *  JavaScript keyword, this ensures all named values are still
   *  accessible by name.
   */
  getValue(name) {
    const index = __privateGet(this, _names).indexOf(name);
    if (index === -1) {
      return void 0;
    }
    const value = this[index];
    if (value instanceof Error) {
      throwError(`property ${JSON.stringify(name)}`, value.error);
    }
    return value;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(items, keys) {
    return new _Result(_guard2, items, keys);
  }
};
var Result = _Result;
_names = new WeakMap();
function checkResultErrors(result) {
  const errors = [];
  const checkErrors = function(path, object2) {
    if (!Array.isArray(object2)) {
      return;
    }
    for (let key in object2) {
      const childPath = path.slice();
      childPath.push(key);
      try {
        checkErrors(childPath, object2[key]);
      } catch (error) {
        errors.push({ path: childPath, error });
      }
    }
  };
  checkErrors([], result);
  return errors;
}
function getValue(value) {
  let bytes2 = toBeArray(value);
  assert(bytes2.length <= WordSize, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: bytes2, length: WordSize, offset: bytes2.length });
  if (bytes2.length !== WordSize) {
    bytes2 = getBytesCopy(concat([Padding.slice(bytes2.length % WordSize), bytes2]));
  }
  return bytes2;
}
var Coder = class {
  constructor(name, type, localName, dynamic) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    __publicField(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    __publicField(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    __publicField(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    __publicField(this, "dynamic");
    defineProperties(this, { name, type, localName, dynamic }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(message, value) {
    assertArgument(false, message, this.localName, value);
  }
};
var _data, _dataLength, _writeData, writeData_fn;
var Writer = class {
  constructor() {
    __privateAdd(this, _writeData);
    // An array of WordSize lengthed objects to concatenation
    __privateAdd(this, _data, void 0);
    __privateAdd(this, _dataLength, void 0);
    __privateSet(this, _data, []);
    __privateSet(this, _dataLength, 0);
  }
  get data() {
    return concat(__privateGet(this, _data));
  }
  get length() {
    return __privateGet(this, _dataLength);
  }
  appendWriter(writer) {
    return __privateMethod(this, _writeData, writeData_fn).call(this, getBytesCopy(writer.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(value) {
    let bytes2 = getBytesCopy(value);
    const paddingOffset = bytes2.length % WordSize;
    if (paddingOffset) {
      bytes2 = getBytesCopy(concat([bytes2, Padding.slice(paddingOffset)]));
    }
    return __privateMethod(this, _writeData, writeData_fn).call(this, bytes2);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(value) {
    return __privateMethod(this, _writeData, writeData_fn).call(this, getValue(value));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const offset = __privateGet(this, _data).length;
    __privateGet(this, _data).push(Padding);
    __privateSet(this, _dataLength, __privateGet(this, _dataLength) + WordSize);
    return (value) => {
      __privateGet(this, _data)[offset] = getValue(value);
    };
  }
};
_data = new WeakMap();
_dataLength = new WeakMap();
_writeData = new WeakSet();
writeData_fn = function(data) {
  __privateGet(this, _data).push(data);
  __privateSet(this, _dataLength, __privateGet(this, _dataLength) + data.length);
  return data.length;
};
var _data2, _offset, _peekBytes, peekBytes_fn;
var _Reader = class {
  constructor(data, allowLoose) {
    __privateAdd(this, _peekBytes);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    __publicField(this, "allowLoose");
    __privateAdd(this, _data2, void 0);
    __privateAdd(this, _offset, void 0);
    defineProperties(this, { allowLoose: !!allowLoose });
    __privateSet(this, _data2, getBytesCopy(data));
    __privateSet(this, _offset, 0);
  }
  get data() {
    return hexlify(__privateGet(this, _data2));
  }
  get dataLength() {
    return __privateGet(this, _data2).length;
  }
  get consumed() {
    return __privateGet(this, _offset);
  }
  get bytes() {
    return new Uint8Array(__privateGet(this, _data2));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(offset) {
    return new _Reader(__privateGet(this, _data2).slice(__privateGet(this, _offset) + offset), this.allowLoose);
  }
  // Read bytes
  readBytes(length, loose) {
    let bytes2 = __privateMethod(this, _peekBytes, peekBytes_fn).call(this, 0, length, !!loose);
    __privateSet(this, _offset, __privateGet(this, _offset) + bytes2.length);
    return bytes2.slice(0, length);
  }
  // Read a numeric values
  readValue() {
    return toBigInt(this.readBytes(WordSize));
  }
  readIndex() {
    return toNumber(this.readBytes(WordSize));
  }
};
var Reader = _Reader;
_data2 = new WeakMap();
_offset = new WeakMap();
_peekBytes = new WeakSet();
peekBytes_fn = function(offset, length, loose) {
  let alignedLength = Math.ceil(length / WordSize) * WordSize;
  if (__privateGet(this, _offset) + alignedLength > __privateGet(this, _data2).length) {
    if (this.allowLoose && loose && __privateGet(this, _offset) + length <= __privateGet(this, _data2).length) {
      alignedLength = length;
    } else {
      assert(false, "data out-of-bounds", "BUFFER_OVERRUN", {
        buffer: getBytesCopy(__privateGet(this, _data2)),
        length: __privateGet(this, _data2).length,
        offset: __privateGet(this, _offset) + alignedLength
      });
    }
  }
  return __privateGet(this, _data2).slice(__privateGet(this, _offset), __privateGet(this, _offset) + alignedLength);
};

// node_modules/ethers/node_modules/@noble/hashes/esm/_assert.js
function number(n2) {
  if (!Number.isSafeInteger(n2) || n2 < 0)
    throw new Error(`Wrong positive integer: ${n2}`);
}
function bool(b2) {
  if (typeof b2 !== "boolean")
    throw new Error(`Expected boolean, not ${b2}`);
}
function bytes(b2, ...lengths) {
  if (!(b2 instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b2.length}`);
}
function hash(hash2) {
  if (typeof hash2 !== "function" || typeof hash2.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(hash2.outputLen);
  number(hash2.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
var assert2 = {
  number,
  bool,
  bytes,
  hash,
  exists,
  output
};
var assert_default = assert2;

// node_modules/ethers/node_modules/@noble/hashes/esm/cryptoBrowser.js
var crypto = {
  node: void 0,
  web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
};

// node_modules/ethers/node_modules/@noble/hashes/esm/utils.js
var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
var rotr = (word, shift) => word << 32 - shift | word >>> shift;
var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
var hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
var nextTick = async () => {
};
async function asyncLoop(iters, tick, cb) {
  let ts = Date.now();
  for (let i = 0; i < iters; i++) {
    cb(i);
    const diff = Date.now() - ts;
    if (diff >= 0 && diff < tick)
      continue;
    await nextTick();
    ts += diff;
  }
}
function utf8ToBytes(str) {
  if (typeof str !== "string") {
    throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
  }
  return new TextEncoder().encode(str);
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!(data instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
  return data;
}
var Hash = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
var isPlainObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
function checkOpts(defaults, opts) {
  if (opts !== void 0 && (typeof opts !== "object" || !isPlainObject(opts)))
    throw new TypeError("Options should be object or undefined");
  const merged = Object.assign(defaults, opts);
  return merged;
}
function wrapConstructor(hashConstructor) {
  const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
  const tmp = hashConstructor();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashConstructor();
  return hashC;
}
function wrapConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}

// node_modules/ethers/node_modules/@noble/hashes/esm/hmac.js
var HMAC = class extends Hash {
  constructor(hash2, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    assert_default.hash(hash2);
    const key = toBytes(_key);
    this.iHash = hash2.create();
    if (!(this.iHash instanceof Hash))
      throw new TypeError("Expected instance of class which extends utils.Hash");
    const blockLen = this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const pad = new Uint8Array(blockLen);
    pad.set(key.length > this.iHash.blockLen ? hash2.create().update(key).digest() : key);
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash2.create();
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54 ^ 92;
    this.oHash.update(pad);
    pad.fill(0);
  }
  update(buf) {
    assert_default.exists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    assert_default.exists(this);
    assert_default.bytes(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to) {
    to || (to = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to = to;
    to.finished = finished;
    to.destroyed = destroyed;
    to.blockLen = blockLen;
    to.outputLen = outputLen;
    to.oHash = oHash._cloneInto(to.oHash);
    to.iHash = iHash._cloneInto(to.iHash);
    return to;
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
};
var hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
hmac.create = (hash2, key) => new HMAC(hash2, key);

// node_modules/ethers/node_modules/@noble/hashes/esm/pbkdf2.js
function pbkdf2Init(hash2, _password, _salt, _opts) {
  assert_default.hash(hash2);
  const opts = checkOpts({ dkLen: 32, asyncTick: 10 }, _opts);
  const { c, dkLen, asyncTick } = opts;
  assert_default.number(c);
  assert_default.number(dkLen);
  assert_default.number(asyncTick);
  if (c < 1)
    throw new Error("PBKDF2: iterations (c) should be >= 1");
  const password = toBytes(_password);
  const salt = toBytes(_salt);
  const DK = new Uint8Array(dkLen);
  const PRF = hmac.create(hash2, password);
  const PRFSalt = PRF._cloneInto().update(salt);
  return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
  PRF.destroy();
  PRFSalt.destroy();
  if (prfW)
    prfW.destroy();
  u.fill(0);
  return DK;
}
function pbkdf2(hash2, password, salt, opts) {
  const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash2, password, salt, opts);
  let prfW;
  const arr = new Uint8Array(4);
  const view = createView(arr);
  const u = new Uint8Array(PRF.outputLen);
  for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
    const Ti = DK.subarray(pos, pos + PRF.outputLen);
    view.setInt32(0, ti, false);
    (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
    Ti.set(u.subarray(0, Ti.length));
    for (let ui = 1; ui < c; ui++) {
      PRF._cloneInto(prfW).update(u).digestInto(u);
      for (let i = 0; i < Ti.length; i++)
        Ti[i] ^= u[i];
    }
  }
  return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}

// node_modules/ethers/node_modules/@noble/hashes/esm/_sha2.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
var SHA2 = class extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    assert_default.exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    assert_default.exists(this);
    assert_default.output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    this.get().forEach((v, i) => oview.setUint32(4 * i, v, isLE2));
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
};

// node_modules/ethers/node_modules/@noble/hashes/esm/sha256.js
var Chi = (a, b2, c) => a & b2 ^ ~a & c;
var Maj = (a, b2, c) => a & b2 ^ a & c ^ b2 & c;
var SHA256_K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var IV = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W = new Uint32Array(64);
var SHA256 = class extends SHA2 {
  constructor() {
    super(64, 32, 8, false);
    this.A = IV[0] | 0;
    this.B = IV[1] | 0;
    this.C = IV[2] | 0;
    this.D = IV[3] | 0;
    this.E = IV[4] | 0;
    this.F = IV[5] | 0;
    this.G = IV[6] | 0;
    this.H = IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T13 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T22 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T13 | 0;
      D = C;
      C = B;
      B = A;
      A = T13 + T22 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var sha256 = wrapConstructor(() => new SHA256());

// node_modules/ethers/node_modules/@noble/hashes/esm/_u64.js
var U32_MASK64 = BigInt(2 ** 32 - 1);
var _32n = BigInt(32);
function fromBig(n2, le = false) {
  if (le)
    return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
  return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
var shrSH = (h, l, s) => h >>> s;
var shrSL = (h, l, s) => h << 32 - s | l >>> s;
var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
var rotr32H = (h, l) => l;
var rotr32L = (h, l) => h;
var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
function add(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
var u64 = {
  fromBig,
  split,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
var u64_default = u64;

// node_modules/ethers/node_modules/@noble/hashes/esm/sha512.js
var [SHA512_Kh, SHA512_Kl] = u64_default.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n2) => BigInt(n2)));
var SHA512_W_H = new Uint32Array(80);
var SHA512_W_L = new Uint32Array(80);
var SHA512 = class extends SHA2 {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
      const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
      const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
      const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
      const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
      const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64_default.add3L(T1l, sigma0l, MAJl);
      Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var SHA512_256 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 573645204 | 0;
    this.Al = 4230739756 | 0;
    this.Bh = 2673172387 | 0;
    this.Bl = 3360449730 | 0;
    this.Ch = 596883563 | 0;
    this.Cl = 1867755857 | 0;
    this.Dh = 2520282905 | 0;
    this.Dl = 1497426621 | 0;
    this.Eh = 2519219938 | 0;
    this.El = 2827943907 | 0;
    this.Fh = 3193839141 | 0;
    this.Fl = 1401305490 | 0;
    this.Gh = 721525244 | 0;
    this.Gl = 746961066 | 0;
    this.Hh = 246885852 | 0;
    this.Hl = 2177182882 | 0;
    this.outputLen = 32;
  }
};
var SHA384 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 3418070365 | 0;
    this.Al = 3238371032 | 0;
    this.Bh = 1654270250 | 0;
    this.Bl = 914150663 | 0;
    this.Ch = 2438529370 | 0;
    this.Cl = 812702999 | 0;
    this.Dh = 355462360 | 0;
    this.Dl = 4144912697 | 0;
    this.Eh = 1731405415 | 0;
    this.El = 4290775857 | 0;
    this.Fh = 2394180231 | 0;
    this.Fl = 1750603025 | 0;
    this.Gh = 3675008525 | 0;
    this.Gl = 1694076839 | 0;
    this.Hh = 1203062813 | 0;
    this.Hl = 3204075428 | 0;
    this.outputLen = 48;
  }
};
var sha512 = wrapConstructor(() => new SHA512());
var sha512_256 = wrapConstructor(() => new SHA512_256());
var sha384 = wrapConstructor(() => new SHA384());

// node_modules/ethers/lib.esm/crypto/crypto-browser.js
function getGlobal() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}
var anyGlobal = getGlobal();
var crypto2 = anyGlobal.crypto || anyGlobal.msCrypto;
function createHash(algo) {
  switch (algo) {
    case "sha256":
      return sha256.create();
    case "sha512":
      return sha512.create();
  }
  assertArgument(false, "invalid hashing algorithm name", "algorithm", algo);
}
function createHmac(_algo, key) {
  const algo = { sha256, sha512 }[_algo];
  assertArgument(algo != null, "invalid hmac algorithm", "algorithm", _algo);
  return hmac.create(algo, key);
}
function pbkdf2Sync(password, salt, iterations, keylen, _algo) {
  const algo = { sha256, sha512 }[_algo];
  assertArgument(algo != null, "invalid pbkdf2 algorithm", "algorithm", _algo);
  return pbkdf2(algo, password, salt, { c: iterations, dkLen: keylen });
}
function randomBytes(length) {
  assert(crypto2 != null, "platform does not support secure random numbers", "UNSUPPORTED_OPERATION", {
    operation: "randomBytes"
  });
  assertArgument(Number.isInteger(length) && length > 0 && length <= 1024, "invalid length", "length", length);
  const result = new Uint8Array(length);
  crypto2.getRandomValues(result);
  return result;
}

// node_modules/ethers/lib.esm/crypto/hmac.js
var locked2 = false;
var _computeHmac = function(algorithm, key, data) {
  return createHmac(algorithm, key).update(data).digest();
};
var __computeHmac = _computeHmac;
function computeHmac(algorithm, _key, _data5) {
  const key = getBytes(_key, "key");
  const data = getBytes(_data5, "data");
  return hexlify(__computeHmac(algorithm, key, data));
}
computeHmac._ = _computeHmac;
computeHmac.lock = function() {
  locked2 = true;
};
computeHmac.register = function(func) {
  if (locked2) {
    throw new Error("computeHmac is locked");
  }
  __computeHmac = func;
};
Object.freeze(computeHmac);

// node_modules/ethers/node_modules/@noble/hashes/esm/sha3.js
var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
var _7n = BigInt(7);
var _256n = BigInt(256);
var _0x71n = BigInt(113);
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
  [x, y] = [y, (2 * x + 3 * y) % 5];
  SHA3_PI.push(2 * (5 * y + x));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t = _0n;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n)
      t ^= _1n << (_1n << BigInt(j)) - _1n;
  }
  _SHA3_IOTA.push(t);
}
var [SHA3_IOTA_H, SHA3_IOTA_L] = u64_default.split(_SHA3_IOTA, true);
var rotlH = (h, l, s) => s > 32 ? u64_default.rotlBH(h, l, s) : u64_default.rotlSH(h, l, s);
var rotlL = (h, l, s) => s > 32 ? u64_default.rotlBL(h, l, s) : u64_default.rotlSL(h, l, s);
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var Keccak = class extends Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    assert_default.number(outputLen);
    if (0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  keccak() {
    keccakP(this.state32, this.rounds);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    assert_default.exists(this);
    const { blockLen, state } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    assert_default.exists(this, false);
    assert_default.bytes(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes2) {
    assert_default.number(bytes2);
    return this.xofInto(new Uint8Array(bytes2));
  }
  digestInto(out) {
    assert_default.output(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
};
var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
var sha3_224 = gen(6, 144, 224 / 8);
var sha3_256 = gen(6, 136, 256 / 8);
var sha3_384 = gen(6, 104, 384 / 8);
var sha3_512 = gen(6, 72, 512 / 8);
var keccak_224 = gen(1, 144, 224 / 8);
var keccak_256 = gen(1, 136, 256 / 8);
var keccak_384 = gen(1, 104, 384 / 8);
var keccak_512 = gen(1, 72, 512 / 8);
var genShake = (suffix, blockLen, outputLen) => wrapConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
var shake128 = genShake(31, 168, 128 / 8);
var shake256 = genShake(31, 136, 256 / 8);

// node_modules/ethers/lib.esm/crypto/keccak.js
var locked3 = false;
var _keccak256 = function(data) {
  return keccak_256(data);
};
var __keccak256 = _keccak256;
function keccak256(_data5) {
  const data = getBytes(_data5, "data");
  return hexlify(__keccak256(data));
}
keccak256._ = _keccak256;
keccak256.lock = function() {
  locked3 = true;
};
keccak256.register = function(func) {
  if (locked3) {
    throw new TypeError("keccak256 is locked");
  }
  __keccak256 = func;
};
Object.freeze(keccak256);

// node_modules/ethers/node_modules/@noble/hashes/esm/ripemd160.js
var Rho = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var Id = Uint8Array.from({ length: 16 }, (_, i) => i);
var Pi = Id.map((i) => (9 * i + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i = 0; i < 4; i++)
  for (let j of [idxL, idxR])
    j.push(j[i].map((k) => Rho[k]));
var shifts = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
var shiftsL = idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
var shiftsR = idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
var Kl = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]);
var Kr = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]);
var rotl = (word, shift) => word << shift | word >>> 32 - shift;
function f(group, x, y, z) {
  if (group === 0)
    return x ^ y ^ z;
  else if (group === 1)
    return x & y | ~x & z;
  else if (group === 2)
    return (x | ~y) ^ z;
  else if (group === 3)
    return x & z | y & ~z;
  else
    return x ^ (y | ~z);
}
var BUF = new Uint32Array(16);
var RIPEMD160 = class extends SHA2 {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2, h3, h4 } = this;
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      BUF[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL[group], sr = shiftsR[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
  }
  roundClean() {
    BUF.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = wrapConstructor(() => new RIPEMD160());

// node_modules/ethers/lib.esm/crypto/ripemd160.js
var locked4 = false;
var _ripemd160 = function(data) {
  return ripemd160(data);
};
var __ripemd160 = _ripemd160;
function ripemd1602(_data5) {
  const data = getBytes(_data5, "data");
  return hexlify(__ripemd160(data));
}
ripemd1602._ = _ripemd160;
ripemd1602.lock = function() {
  locked4 = true;
};
ripemd1602.register = function(func) {
  if (locked4) {
    throw new TypeError("ripemd160 is locked");
  }
  __ripemd160 = func;
};
Object.freeze(ripemd1602);

// node_modules/ethers/lib.esm/crypto/pbkdf2.js
var locked5 = false;
var _pbkdf2 = function(password, salt, iterations, keylen, algo) {
  return pbkdf2Sync(password, salt, iterations, keylen, algo);
};
var __pbkdf2 = _pbkdf2;
function pbkdf22(_password, _salt, iterations, keylen, algo) {
  const password = getBytes(_password, "password");
  const salt = getBytes(_salt, "salt");
  return hexlify(__pbkdf2(password, salt, iterations, keylen, algo));
}
pbkdf22._ = _pbkdf2;
pbkdf22.lock = function() {
  locked5 = true;
};
pbkdf22.register = function(func) {
  if (locked5) {
    throw new Error("pbkdf2 is locked");
  }
  __pbkdf2 = func;
};
Object.freeze(pbkdf22);

// node_modules/ethers/lib.esm/crypto/random.js
var locked6 = false;
var _randomBytes = function(length) {
  return new Uint8Array(randomBytes(length));
};
var __randomBytes = _randomBytes;
function randomBytes2(length) {
  return __randomBytes(length);
}
randomBytes2._ = _randomBytes;
randomBytes2.lock = function() {
  locked6 = true;
};
randomBytes2.register = function(func) {
  if (locked6) {
    throw new Error("randomBytes is locked");
  }
  __randomBytes = func;
};
Object.freeze(randomBytes2);

// node_modules/ethers/node_modules/@noble/hashes/esm/scrypt.js
var rotl2 = (a, b2) => a << b2 | a >>> 32 - b2;
function XorAndSalsa(prev, pi, input, ii, out, oi) {
  let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
  let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
  let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
  let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
  let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
  let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
  let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
  let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
  let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
  for (let i = 0; i < 8; i += 2) {
    x04 ^= rotl2(x00 + x12 | 0, 7);
    x08 ^= rotl2(x04 + x00 | 0, 9);
    x12 ^= rotl2(x08 + x04 | 0, 13);
    x00 ^= rotl2(x12 + x08 | 0, 18);
    x09 ^= rotl2(x05 + x01 | 0, 7);
    x13 ^= rotl2(x09 + x05 | 0, 9);
    x01 ^= rotl2(x13 + x09 | 0, 13);
    x05 ^= rotl2(x01 + x13 | 0, 18);
    x14 ^= rotl2(x10 + x06 | 0, 7);
    x02 ^= rotl2(x14 + x10 | 0, 9);
    x06 ^= rotl2(x02 + x14 | 0, 13);
    x10 ^= rotl2(x06 + x02 | 0, 18);
    x03 ^= rotl2(x15 + x11 | 0, 7);
    x07 ^= rotl2(x03 + x15 | 0, 9);
    x11 ^= rotl2(x07 + x03 | 0, 13);
    x15 ^= rotl2(x11 + x07 | 0, 18);
    x01 ^= rotl2(x00 + x03 | 0, 7);
    x02 ^= rotl2(x01 + x00 | 0, 9);
    x03 ^= rotl2(x02 + x01 | 0, 13);
    x00 ^= rotl2(x03 + x02 | 0, 18);
    x06 ^= rotl2(x05 + x04 | 0, 7);
    x07 ^= rotl2(x06 + x05 | 0, 9);
    x04 ^= rotl2(x07 + x06 | 0, 13);
    x05 ^= rotl2(x04 + x07 | 0, 18);
    x11 ^= rotl2(x10 + x09 | 0, 7);
    x08 ^= rotl2(x11 + x10 | 0, 9);
    x09 ^= rotl2(x08 + x11 | 0, 13);
    x10 ^= rotl2(x09 + x08 | 0, 18);
    x12 ^= rotl2(x15 + x14 | 0, 7);
    x13 ^= rotl2(x12 + x15 | 0, 9);
    x14 ^= rotl2(x13 + x12 | 0, 13);
    x15 ^= rotl2(x14 + x13 | 0, 18);
  }
  out[oi++] = y00 + x00 | 0;
  out[oi++] = y01 + x01 | 0;
  out[oi++] = y02 + x02 | 0;
  out[oi++] = y03 + x03 | 0;
  out[oi++] = y04 + x04 | 0;
  out[oi++] = y05 + x05 | 0;
  out[oi++] = y06 + x06 | 0;
  out[oi++] = y07 + x07 | 0;
  out[oi++] = y08 + x08 | 0;
  out[oi++] = y09 + x09 | 0;
  out[oi++] = y10 + x10 | 0;
  out[oi++] = y11 + x11 | 0;
  out[oi++] = y12 + x12 | 0;
  out[oi++] = y13 + x13 | 0;
  out[oi++] = y14 + x14 | 0;
  out[oi++] = y15 + x15 | 0;
}
function BlockMix(input, ii, out, oi, r2) {
  let head = oi + 0;
  let tail = oi + 16 * r2;
  for (let i = 0; i < 16; i++)
    out[tail + i] = input[ii + (2 * r2 - 1) * 16 + i];
  for (let i = 0; i < r2; i++, head += 16, ii += 16) {
    XorAndSalsa(out, tail, input, ii, out, head);
    if (i > 0)
      tail += 16;
    XorAndSalsa(out, head, input, ii += 16, out, tail);
  }
}
function scryptInit(password, salt, _opts) {
  const opts = checkOpts({
    dkLen: 32,
    asyncTick: 10,
    maxmem: 1024 ** 3 + 1024
  }, _opts);
  const { N: N3, r: r2, p, dkLen, asyncTick, maxmem, onProgress } = opts;
  assert_default.number(N3);
  assert_default.number(r2);
  assert_default.number(p);
  assert_default.number(dkLen);
  assert_default.number(asyncTick);
  assert_default.number(maxmem);
  if (onProgress !== void 0 && typeof onProgress !== "function")
    throw new Error("progressCb should be function");
  const blockSize = 128 * r2;
  const blockSize32 = blockSize / 4;
  if (N3 <= 1 || (N3 & N3 - 1) !== 0 || N3 >= 2 ** (blockSize / 8) || N3 > 2 ** 32) {
    throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
  }
  if (p < 0 || p > (2 ** 32 - 1) * 32 / blockSize) {
    throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  }
  if (dkLen < 0 || dkLen > (2 ** 32 - 1) * 32) {
    throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  }
  const memUsed = blockSize * (N3 + p);
  if (memUsed > maxmem) {
    throw new Error(`Scrypt: parameters too large, ${memUsed} (128 * r * (N + p)) > ${maxmem} (maxmem)`);
  }
  const B = pbkdf2(sha256, password, salt, { c: 1, dkLen: blockSize * p });
  const B32 = u32(B);
  const V = u32(new Uint8Array(blockSize * N3));
  const tmp = u32(new Uint8Array(blockSize));
  let blockMixCb = () => {
  };
  if (onProgress) {
    const totalBlockMix = 2 * N3 * p;
    const callbackPer = Math.max(Math.floor(totalBlockMix / 1e4), 1);
    let blockMixCnt = 0;
    blockMixCb = () => {
      blockMixCnt++;
      if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix))
        onProgress(blockMixCnt / totalBlockMix);
    };
  }
  return { N: N3, r: r2, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick };
}
function scryptOutput(password, dkLen, B, V, tmp) {
  const res = pbkdf2(sha256, password, B, { c: 1, dkLen });
  B.fill(0);
  V.fill(0);
  tmp.fill(0);
  return res;
}
function scrypt(password, salt, opts) {
  const { N: N3, r: r2, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
  for (let pi = 0; pi < p; pi++) {
    const Pi2 = blockSize32 * pi;
    for (let i = 0; i < blockSize32; i++)
      V[i] = B32[Pi2 + i];
    for (let i = 0, pos = 0; i < N3 - 1; i++) {
      BlockMix(V, pos, V, pos += blockSize32, r2);
      blockMixCb();
    }
    BlockMix(V, (N3 - 1) * blockSize32, B32, Pi2, r2);
    blockMixCb();
    for (let i = 0; i < N3; i++) {
      const j = B32[Pi2 + blockSize32 - 16] % N3;
      for (let k = 0; k < blockSize32; k++)
        tmp[k] = B32[Pi2 + k] ^ V[j * blockSize32 + k];
      BlockMix(tmp, 0, B32, Pi2, r2);
      blockMixCb();
    }
  }
  return scryptOutput(password, dkLen, B, V, tmp);
}
async function scryptAsync(password, salt, opts) {
  const { N: N3, r: r2, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
  for (let pi = 0; pi < p; pi++) {
    const Pi2 = blockSize32 * pi;
    for (let i = 0; i < blockSize32; i++)
      V[i] = B32[Pi2 + i];
    let pos = 0;
    await asyncLoop(N3 - 1, asyncTick, (i) => {
      BlockMix(V, pos, V, pos += blockSize32, r2);
      blockMixCb();
    });
    BlockMix(V, (N3 - 1) * blockSize32, B32, Pi2, r2);
    blockMixCb();
    await asyncLoop(N3, asyncTick, (i) => {
      const j = B32[Pi2 + blockSize32 - 16] % N3;
      for (let k = 0; k < blockSize32; k++)
        tmp[k] = B32[Pi2 + k] ^ V[j * blockSize32 + k];
      BlockMix(tmp, 0, B32, Pi2, r2);
      blockMixCb();
    });
  }
  return scryptOutput(password, dkLen, B, V, tmp);
}

// node_modules/ethers/lib.esm/crypto/scrypt.js
var lockedSync = false;
var lockedAsync = false;
var _scryptAsync = async function(passwd, salt, N3, r2, p, dkLen, onProgress) {
  return await scryptAsync(passwd, salt, { N: N3, r: r2, p, dkLen, onProgress });
};
var _scryptSync = function(passwd, salt, N3, r2, p, dkLen) {
  return scrypt(passwd, salt, { N: N3, r: r2, p, dkLen });
};
var __scryptAsync = _scryptAsync;
var __scryptSync = _scryptSync;
async function scrypt2(_passwd, _salt, N3, r2, p, dkLen, progress) {
  const passwd = getBytes(_passwd, "passwd");
  const salt = getBytes(_salt, "salt");
  return hexlify(await __scryptAsync(passwd, salt, N3, r2, p, dkLen, progress));
}
scrypt2._ = _scryptAsync;
scrypt2.lock = function() {
  lockedAsync = true;
};
scrypt2.register = function(func) {
  if (lockedAsync) {
    throw new Error("scrypt is locked");
  }
  __scryptAsync = func;
};
Object.freeze(scrypt2);
function scryptSync(_passwd, _salt, N3, r2, p, dkLen) {
  const passwd = getBytes(_passwd, "passwd");
  const salt = getBytes(_salt, "salt");
  return hexlify(__scryptSync(passwd, salt, N3, r2, p, dkLen));
}
scryptSync._ = _scryptSync;
scryptSync.lock = function() {
  lockedSync = true;
};
scryptSync.register = function(func) {
  if (lockedSync) {
    throw new Error("scryptSync is locked");
  }
  __scryptSync = func;
};
Object.freeze(scryptSync);

// node_modules/ethers/lib.esm/crypto/sha2.js
var _sha256 = function(data) {
  return createHash("sha256").update(data).digest();
};
var _sha512 = function(data) {
  return createHash("sha512").update(data).digest();
};
var __sha256 = _sha256;
var __sha512 = _sha512;
var locked256 = false;
var locked512 = false;
function sha2562(_data5) {
  const data = getBytes(_data5, "data");
  return hexlify(__sha256(data));
}
sha2562._ = _sha256;
sha2562.lock = function() {
  locked256 = true;
};
sha2562.register = function(func) {
  if (locked256) {
    throw new Error("sha256 is locked");
  }
  __sha256 = func;
};
Object.freeze(sha2562);
function sha5122(_data5) {
  const data = getBytes(_data5, "data");
  return hexlify(__sha512(data));
}
sha5122._ = _sha512;
sha5122.lock = function() {
  locked512 = true;
};
sha5122.register = function(func) {
  if (locked512) {
    throw new Error("sha512 is locked");
  }
  __sha512 = func;
};
Object.freeze(sha2562);

// node_modules/@noble/secp256k1/lib/esm/index.js
var nodeCrypto = __toESM(require_crypto());
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n2 = BigInt(2);
var _3n = BigInt(3);
var _8n = BigInt(8);
var CURVE = Object.freeze({
  a: _0n2,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: _1n2,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
var divNearest = (a, b2) => (a + b2 / _2n2) / b2;
var endo = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  splitScalar(k) {
    const { n: n2 } = CURVE;
    const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
    const b1 = -_1n2 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
    const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
    const b2 = a1;
    const POW_2_128 = BigInt("0x100000000000000000000000000000000");
    const c1 = divNearest(b2 * k, n2);
    const c2 = divNearest(-b1 * k, n2);
    let k1 = mod(k - c1 * a1 - c2 * a2, n2);
    let k2 = mod(-c1 * b1 - c2 * b2, n2);
    const k1neg = k1 > POW_2_128;
    const k2neg = k2 > POW_2_128;
    if (k1neg)
      k1 = n2 - k1;
    if (k2neg)
      k2 = n2 - k2;
    if (k1 > POW_2_128 || k2 > POW_2_128) {
      throw new Error("splitScalarEndo: Endomorphism failed, k=" + k);
    }
    return { k1neg, k1, k2neg, k2 };
  }
};
var fieldLen = 32;
var groupLen = 32;
var hashLen = 32;
var compressedLen = fieldLen + 1;
var uncompressedLen = 2 * fieldLen + 1;
function weierstrass(x) {
  const { a, b: b2 } = CURVE;
  const x2 = mod(x * x);
  const x3 = mod(x2 * x);
  return mod(x3 + a * x + b2);
}
var USE_ENDOMORPHISM = CURVE.a === _0n2;
var ShaError = class extends Error {
  constructor(message) {
    super(message);
  }
};
function assertJacPoint(other) {
  if (!(other instanceof JacobianPoint))
    throw new TypeError("JacobianPoint expected");
}
var JacobianPoint = class {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static fromAffine(p) {
    if (!(p instanceof Point)) {
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    }
    if (p.equals(Point.ZERO))
      return JacobianPoint.ZERO;
    return new JacobianPoint(p.x, p.y, _1n2);
  }
  static toAffineBatch(points) {
    const toInv = invertBatch(points.map((p) => p.z));
    return points.map((p, i) => p.toAffine(toInv[i]));
  }
  static normalizeZ(points) {
    return JacobianPoint.toAffineBatch(points).map(JacobianPoint.fromAffine);
  }
  equals(other) {
    assertJacPoint(other);
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    const Z1Z1 = mod(Z1 * Z1);
    const Z2Z2 = mod(Z2 * Z2);
    const U12 = mod(X1 * Z2Z2);
    const U22 = mod(X2 * Z1Z1);
    const S12 = mod(mod(Y1 * Z2) * Z2Z2);
    const S2 = mod(mod(Y2 * Z1) * Z1Z1);
    return U12 === U22 && S12 === S2;
  }
  negate() {
    return new JacobianPoint(this.x, mod(-this.y), this.z);
  }
  double() {
    const { x: X1, y: Y1, z: Z1 } = this;
    const A = mod(X1 * X1);
    const B = mod(Y1 * Y1);
    const C = mod(B * B);
    const x1b = X1 + B;
    const D = mod(_2n2 * (mod(x1b * x1b) - A - C));
    const E = mod(_3n * A);
    const F = mod(E * E);
    const X3 = mod(F - _2n2 * D);
    const Y3 = mod(E * (D - X3) - _8n * C);
    const Z3 = mod(_2n2 * Y1 * Z1);
    return new JacobianPoint(X3, Y3, Z3);
  }
  add(other) {
    assertJacPoint(other);
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    if (X2 === _0n2 || Y2 === _0n2)
      return this;
    if (X1 === _0n2 || Y1 === _0n2)
      return other;
    const Z1Z1 = mod(Z1 * Z1);
    const Z2Z2 = mod(Z2 * Z2);
    const U12 = mod(X1 * Z2Z2);
    const U22 = mod(X2 * Z1Z1);
    const S12 = mod(mod(Y1 * Z2) * Z2Z2);
    const S2 = mod(mod(Y2 * Z1) * Z1Z1);
    const H = mod(U22 - U12);
    const r2 = mod(S2 - S12);
    if (H === _0n2) {
      if (r2 === _0n2) {
        return this.double();
      } else {
        return JacobianPoint.ZERO;
      }
    }
    const HH = mod(H * H);
    const HHH = mod(H * HH);
    const V = mod(U12 * HH);
    const X3 = mod(r2 * r2 - HHH - _2n2 * V);
    const Y3 = mod(r2 * (V - X3) - S12 * HHH);
    const Z3 = mod(Z1 * Z2 * H);
    return new JacobianPoint(X3, Y3, Z3);
  }
  subtract(other) {
    return this.add(other.negate());
  }
  multiplyUnsafe(scalar) {
    const P0 = JacobianPoint.ZERO;
    if (typeof scalar === "bigint" && scalar === _0n2)
      return P0;
    let n2 = normalizeScalar(scalar);
    if (n2 === _1n2)
      return this;
    if (!USE_ENDOMORPHISM) {
      let p = P0;
      let d2 = this;
      while (n2 > _0n2) {
        if (n2 & _1n2)
          p = p.add(d2);
        d2 = d2.double();
        n2 >>= _1n2;
      }
      return p;
    }
    let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
    let k1p = P0;
    let k2p = P0;
    let d = this;
    while (k1 > _0n2 || k2 > _0n2) {
      if (k1 & _1n2)
        k1p = k1p.add(d);
      if (k2 & _1n2)
        k2p = k2p.add(d);
      d = d.double();
      k1 >>= _1n2;
      k2 >>= _1n2;
    }
    if (k1neg)
      k1p = k1p.negate();
    if (k2neg)
      k2p = k2p.negate();
    k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
    return k1p.add(k2p);
  }
  precomputeWindow(W) {
    const windows = USE_ENDOMORPHISM ? 128 / W + 1 : 256 / W + 1;
    const points = [];
    let p = this;
    let base = p;
    for (let window2 = 0; window2 < windows; window2++) {
      base = p;
      points.push(base);
      for (let i = 1; i < 2 ** (W - 1); i++) {
        base = base.add(p);
        points.push(base);
      }
      p = base.double();
    }
    return points;
  }
  wNAF(n2, affinePoint) {
    if (!affinePoint && this.equals(JacobianPoint.BASE))
      affinePoint = Point.BASE;
    const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
    if (256 % W) {
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    }
    let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
    if (!precomputes) {
      precomputes = this.precomputeWindow(W);
      if (affinePoint && W !== 1) {
        precomputes = JacobianPoint.normalizeZ(precomputes);
        pointPrecomputes.set(affinePoint, precomputes);
      }
    }
    let p = JacobianPoint.ZERO;
    let f2 = JacobianPoint.BASE;
    const windows = 1 + (USE_ENDOMORPHISM ? 128 / W : 256 / W);
    const windowSize = 2 ** (W - 1);
    const mask2 = BigInt(2 ** W - 1);
    const maxNumber = 2 ** W;
    const shiftBy = BigInt(W);
    for (let window2 = 0; window2 < windows; window2++) {
      const offset = window2 * windowSize;
      let wbits = Number(n2 & mask2);
      n2 >>= shiftBy;
      if (wbits > windowSize) {
        wbits -= maxNumber;
        n2 += _1n2;
      }
      const offset1 = offset;
      const offset2 = offset + Math.abs(wbits) - 1;
      const cond1 = window2 % 2 !== 0;
      const cond2 = wbits < 0;
      if (wbits === 0) {
        f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
      } else {
        p = p.add(constTimeNegate(cond2, precomputes[offset2]));
      }
    }
    return { p, f: f2 };
  }
  multiply(scalar, affinePoint) {
    let n2 = normalizeScalar(scalar);
    let point;
    let fake;
    if (USE_ENDOMORPHISM) {
      const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
      let { p: k1p, f: f1p } = this.wNAF(k1, affinePoint);
      let { p: k2p, f: f2p } = this.wNAF(k2, affinePoint);
      k1p = constTimeNegate(k1neg, k1p);
      k2p = constTimeNegate(k2neg, k2p);
      k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
      point = k1p.add(k2p);
      fake = f1p.add(f2p);
    } else {
      const { p, f: f2 } = this.wNAF(n2, affinePoint);
      point = p;
      fake = f2;
    }
    return JacobianPoint.normalizeZ([point, fake])[0];
  }
  toAffine(invZ) {
    const { x, y, z } = this;
    const is0 = this.equals(JacobianPoint.ZERO);
    if (invZ == null)
      invZ = is0 ? _8n : invert(z);
    const iz1 = invZ;
    const iz2 = mod(iz1 * iz1);
    const iz3 = mod(iz2 * iz1);
    const ax = mod(x * iz2);
    const ay = mod(y * iz3);
    const zz = mod(z * iz1);
    if (is0)
      return Point.ZERO;
    if (zz !== _1n2)
      throw new Error("invZ was invalid");
    return new Point(ax, ay);
  }
};
JacobianPoint.BASE = new JacobianPoint(CURVE.Gx, CURVE.Gy, _1n2);
JacobianPoint.ZERO = new JacobianPoint(_0n2, _1n2, _0n2);
function constTimeNegate(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
var pointPrecomputes = /* @__PURE__ */ new WeakMap();
var Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  _setWindowSize(windowSize) {
    this._WINDOW_SIZE = windowSize;
    pointPrecomputes.delete(this);
  }
  hasEvenY() {
    return this.y % _2n2 === _0n2;
  }
  static fromCompressedHex(bytes2) {
    const isShort = bytes2.length === 32;
    const x = bytesToNumber(isShort ? bytes2 : bytes2.subarray(1));
    if (!isValidFieldElement(x))
      throw new Error("Point is not on curve");
    const y2 = weierstrass(x);
    let y = sqrtMod(y2);
    const isYOdd = (y & _1n2) === _1n2;
    if (isShort) {
      if (isYOdd)
        y = mod(-y);
    } else {
      const isFirstByteOdd = (bytes2[0] & 1) === 1;
      if (isFirstByteOdd !== isYOdd)
        y = mod(-y);
    }
    const point = new Point(x, y);
    point.assertValidity();
    return point;
  }
  static fromUncompressedHex(bytes2) {
    const x = bytesToNumber(bytes2.subarray(1, fieldLen + 1));
    const y = bytesToNumber(bytes2.subarray(fieldLen + 1, fieldLen * 2 + 1));
    const point = new Point(x, y);
    point.assertValidity();
    return point;
  }
  static fromHex(hex) {
    const bytes2 = ensureBytes(hex);
    const len = bytes2.length;
    const header = bytes2[0];
    if (len === fieldLen)
      return this.fromCompressedHex(bytes2);
    if (len === compressedLen && (header === 2 || header === 3)) {
      return this.fromCompressedHex(bytes2);
    }
    if (len === uncompressedLen && header === 4)
      return this.fromUncompressedHex(bytes2);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes, not ${len}`);
  }
  static fromPrivateKey(privateKey) {
    return Point.BASE.multiply(normalizePrivateKey(privateKey));
  }
  static fromSignature(msgHash, signature, recovery) {
    const { r: r2, s } = normalizeSignature(signature);
    if (![0, 1, 2, 3].includes(recovery))
      throw new Error("Cannot recover: invalid recovery bit");
    const h = truncateHash(ensureBytes(msgHash));
    const { n: n2 } = CURVE;
    const radj = recovery === 2 || recovery === 3 ? r2 + n2 : r2;
    const rinv = invert(radj, n2);
    const u1 = mod(-h * rinv, n2);
    const u2 = mod(s * rinv, n2);
    const prefix = recovery & 1 ? "03" : "02";
    const R = Point.fromHex(prefix + numTo32bStr(radj));
    const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
    if (!Q)
      throw new Error("Cannot recover signature: point at infinify");
    Q.assertValidity();
    return Q;
  }
  toRawBytes(isCompressed = false) {
    return hexToBytes(this.toHex(isCompressed));
  }
  toHex(isCompressed = false) {
    const x = numTo32bStr(this.x);
    if (isCompressed) {
      const prefix = this.hasEvenY() ? "02" : "03";
      return `${prefix}${x}`;
    } else {
      return `04${x}${numTo32bStr(this.y)}`;
    }
  }
  toHexX() {
    return this.toHex(true).slice(2);
  }
  toRawX() {
    return this.toRawBytes(true).slice(1);
  }
  assertValidity() {
    const msg = "Point is not on elliptic curve";
    const { x, y } = this;
    if (!isValidFieldElement(x) || !isValidFieldElement(y))
      throw new Error(msg);
    const left = mod(y * y);
    const right = weierstrass(x);
    if (mod(left - right) !== _0n2)
      throw new Error(msg);
  }
  equals(other) {
    return this.x === other.x && this.y === other.y;
  }
  negate() {
    return new Point(this.x, mod(-this.y));
  }
  double() {
    return JacobianPoint.fromAffine(this).double().toAffine();
  }
  add(other) {
    return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(other)).toAffine();
  }
  subtract(other) {
    return this.add(other.negate());
  }
  multiply(scalar) {
    return JacobianPoint.fromAffine(this).multiply(scalar, this).toAffine();
  }
  multiplyAndAddUnsafe(Q, a, b2) {
    const P = JacobianPoint.fromAffine(this);
    const aP = a === _0n2 || a === _1n2 || this !== Point.BASE ? P.multiplyUnsafe(a) : P.multiply(a);
    const bQ = JacobianPoint.fromAffine(Q).multiplyUnsafe(b2);
    const sum = aP.add(bQ);
    return sum.equals(JacobianPoint.ZERO) ? void 0 : sum.toAffine();
  }
};
Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
Point.ZERO = new Point(_0n2, _0n2);
function sliceDER(s) {
  return Number.parseInt(s[0], 16) >= 8 ? "00" + s : s;
}
function parseDERInt(data) {
  if (data.length < 2 || data[0] !== 2) {
    throw new Error(`Invalid signature integer tag: ${bytesToHex(data)}`);
  }
  const len = data[1];
  const res = data.subarray(2, len + 2);
  if (!len || res.length !== len) {
    throw new Error(`Invalid signature integer: wrong length`);
  }
  if (res[0] === 0 && res[1] <= 127) {
    throw new Error("Invalid signature integer: trailing length");
  }
  return { data: bytesToNumber(res), left: data.subarray(len + 2) };
}
function parseDERSignature(data) {
  if (data.length < 2 || data[0] != 48) {
    throw new Error(`Invalid signature tag: ${bytesToHex(data)}`);
  }
  if (data[1] !== data.length - 2) {
    throw new Error("Invalid signature: incorrect length");
  }
  const { data: r2, left: sBytes } = parseDERInt(data.subarray(2));
  const { data: s, left: rBytesLeft } = parseDERInt(sBytes);
  if (rBytesLeft.length) {
    throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex(rBytesLeft)}`);
  }
  return { r: r2, s };
}
var Signature = class {
  constructor(r2, s) {
    this.r = r2;
    this.s = s;
    this.assertValidity();
  }
  static fromCompact(hex) {
    const arr = hex instanceof Uint8Array;
    const name = "Signature.fromCompact";
    if (typeof hex !== "string" && !arr)
      throw new TypeError(`${name}: Expected string or Uint8Array`);
    const str = arr ? bytesToHex(hex) : hex;
    if (str.length !== 128)
      throw new Error(`${name}: Expected 64-byte hex`);
    return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
  }
  static fromDER(hex) {
    const arr = hex instanceof Uint8Array;
    if (typeof hex !== "string" && !arr)
      throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
    const { r: r2, s } = parseDERSignature(arr ? hex : hexToBytes(hex));
    return new Signature(r2, s);
  }
  static fromHex(hex) {
    return this.fromDER(hex);
  }
  assertValidity() {
    const { r: r2, s } = this;
    if (!isWithinCurveOrder(r2))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!isWithinCurveOrder(s))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const HALF = CURVE.n >> _1n2;
    return this.s > HALF;
  }
  normalizeS() {
    return this.hasHighS() ? new Signature(this.r, mod(-this.s, CURVE.n)) : this;
  }
  toDERRawBytes() {
    return hexToBytes(this.toDERHex());
  }
  toDERHex() {
    const sHex = sliceDER(numberToHexUnpadded(this.s));
    const rHex = sliceDER(numberToHexUnpadded(this.r));
    const sHexL = sHex.length / 2;
    const rHexL = rHex.length / 2;
    const sLen = numberToHexUnpadded(sHexL);
    const rLen = numberToHexUnpadded(rHexL);
    const length = numberToHexUnpadded(rHexL + sHexL + 4);
    return `30${length}02${rLen}${rHex}02${sLen}${sHex}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return hexToBytes(this.toCompactHex());
  }
  toCompactHex() {
    return numTo32bStr(this.r) + numTo32bStr(this.s);
  }
};
function concatBytes(...arrays) {
  if (!arrays.every((b2) => b2 instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (arrays.length === 1)
    return arrays[0];
  const length = arrays.reduce((a, arr) => a + arr.length, 0);
  const result = new Uint8Array(length);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    result.set(arr, pad);
    pad += arr.length;
  }
  return result;
}
var hexes2 = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
  if (!(uint8a instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let hex = "";
  for (let i = 0; i < uint8a.length; i++) {
    hex += hexes2[uint8a[i]];
  }
  return hex;
}
var POW_2_256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function numTo32bStr(num) {
  if (typeof num !== "bigint")
    throw new Error("Expected bigint");
  if (!(_0n2 <= num && num < POW_2_256))
    throw new Error("Expected number 0 <= n < 2^256");
  return num.toString(16).padStart(64, "0");
}
function numTo32b(num) {
  const b2 = hexToBytes(numTo32bStr(num));
  if (b2.length !== 32)
    throw new Error("Error: expected 32 bytes");
  return b2;
}
function numberToHexUnpadded(num) {
  const hex = num.toString(16);
  return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("hexToNumber: expected string, got " + typeof hex);
  }
  return BigInt(`0x${hex}`);
}
function hexToBytes(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("hexToBytes: expected string, got " + typeof hex);
  }
  if (hex.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex" + hex.length);
  const array = new Uint8Array(hex.length / 2);
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    const hexByte = hex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i] = byte;
  }
  return array;
}
function bytesToNumber(bytes2) {
  return hexToNumber(bytesToHex(bytes2));
}
function ensureBytes(hex) {
  return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
}
function normalizeScalar(num) {
  if (typeof num === "number" && Number.isSafeInteger(num) && num > 0)
    return BigInt(num);
  if (typeof num === "bigint" && isWithinCurveOrder(num))
    return num;
  throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function mod(a, b2 = CURVE.P) {
  const result = a % b2;
  return result >= _0n2 ? result : b2 + result;
}
function pow2(x, power) {
  const { P } = CURVE;
  let res = x;
  while (power-- > _0n2) {
    res *= res;
    res %= P;
  }
  return res;
}
function sqrtMod(x) {
  const { P } = CURVE;
  const _6n = BigInt(6);
  const _11n = BigInt(11);
  const _22n = BigInt(22);
  const _23n = BigInt(23);
  const _44n = BigInt(44);
  const _88n = BigInt(88);
  const b2 = x * x * x % P;
  const b3 = b2 * b2 * x % P;
  const b6 = pow2(b3, _3n) * b3 % P;
  const b9 = pow2(b6, _3n) * b3 % P;
  const b11 = pow2(b9, _2n2) * b2 % P;
  const b22 = pow2(b11, _11n) * b11 % P;
  const b44 = pow2(b22, _22n) * b22 % P;
  const b88 = pow2(b44, _44n) * b44 % P;
  const b176 = pow2(b88, _88n) * b88 % P;
  const b220 = pow2(b176, _44n) * b44 % P;
  const b223 = pow2(b220, _3n) * b3 % P;
  const t1 = pow2(b223, _23n) * b22 % P;
  const t2 = pow2(t1, _6n) * b2 % P;
  const rt = pow2(t2, _2n2);
  const xc = rt * rt % P;
  if (xc !== x)
    throw new Error("Cannot find square root");
  return rt;
}
function invert(number2, modulo = CURVE.P) {
  if (number2 === _0n2 || modulo <= _0n2) {
    throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
  }
  let a = mod(number2, modulo);
  let b2 = modulo;
  let x = _0n2, y = _1n2, u = _1n2, v = _0n2;
  while (a !== _0n2) {
    const q = b2 / a;
    const r2 = b2 % a;
    const m = x - u * q;
    const n2 = y - v * q;
    b2 = a, a = r2, x = u, y = v, u = m, v = n2;
  }
  const gcd = b2;
  if (gcd !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function invertBatch(nums, p = CURVE.P) {
  const scratch = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (num === _0n2)
      return acc;
    scratch[i] = acc;
    return mod(acc * num, p);
  }, _1n2);
  const inverted = invert(lastMultiplied, p);
  nums.reduceRight((acc, num, i) => {
    if (num === _0n2)
      return acc;
    scratch[i] = mod(acc * scratch[i], p);
    return mod(acc * num, p);
  }, inverted);
  return scratch;
}
function bits2int_2(bytes2) {
  const delta = bytes2.length * 8 - groupLen * 8;
  const num = bytesToNumber(bytes2);
  return delta > 0 ? num >> BigInt(delta) : num;
}
function truncateHash(hash2, truncateOnly = false) {
  const h = bits2int_2(hash2);
  if (truncateOnly)
    return h;
  const { n: n2 } = CURVE;
  return h >= n2 ? h - n2 : h;
}
var _sha256Sync;
var _hmacSha256Sync;
var HmacDrbg = class {
  constructor(hashLen2, qByteLen) {
    this.hashLen = hashLen2;
    this.qByteLen = qByteLen;
    if (typeof hashLen2 !== "number" || hashLen2 < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    this.v = new Uint8Array(hashLen2).fill(1);
    this.k = new Uint8Array(hashLen2).fill(0);
    this.counter = 0;
  }
  hmac(...values) {
    return utils.hmacSha256(this.k, ...values);
  }
  hmacSync(...values) {
    return _hmacSha256Sync(this.k, ...values);
  }
  checkSync() {
    if (typeof _hmacSha256Sync !== "function")
      throw new ShaError("hmacSha256Sync needs to be set");
  }
  incr() {
    if (this.counter >= 1e3)
      throw new Error("Tried 1,000 k values for sign(), all were invalid");
    this.counter += 1;
  }
  async reseed(seed = new Uint8Array()) {
    this.k = await this.hmac(this.v, Uint8Array.from([0]), seed);
    this.v = await this.hmac(this.v);
    if (seed.length === 0)
      return;
    this.k = await this.hmac(this.v, Uint8Array.from([1]), seed);
    this.v = await this.hmac(this.v);
  }
  reseedSync(seed = new Uint8Array()) {
    this.checkSync();
    this.k = this.hmacSync(this.v, Uint8Array.from([0]), seed);
    this.v = this.hmacSync(this.v);
    if (seed.length === 0)
      return;
    this.k = this.hmacSync(this.v, Uint8Array.from([1]), seed);
    this.v = this.hmacSync(this.v);
  }
  async generate() {
    this.incr();
    let len = 0;
    const out = [];
    while (len < this.qByteLen) {
      this.v = await this.hmac(this.v);
      const sl = this.v.slice();
      out.push(sl);
      len += this.v.length;
    }
    return concatBytes(...out);
  }
  generateSync() {
    this.checkSync();
    this.incr();
    let len = 0;
    const out = [];
    while (len < this.qByteLen) {
      this.v = this.hmacSync(this.v);
      const sl = this.v.slice();
      out.push(sl);
      len += this.v.length;
    }
    return concatBytes(...out);
  }
};
function isWithinCurveOrder(num) {
  return _0n2 < num && num < CURVE.n;
}
function isValidFieldElement(num) {
  return _0n2 < num && num < CURVE.P;
}
function kmdToSig(kBytes, m, d, lowS = true) {
  const { n: n2 } = CURVE;
  const k = truncateHash(kBytes, true);
  if (!isWithinCurveOrder(k))
    return;
  const kinv = invert(k, n2);
  const q = Point.BASE.multiply(k);
  const r2 = mod(q.x, n2);
  if (r2 === _0n2)
    return;
  const s = mod(kinv * mod(m + d * r2, n2), n2);
  if (s === _0n2)
    return;
  let sig = new Signature(r2, s);
  let recovery = (q.x === sig.r ? 0 : 2) | Number(q.y & _1n2);
  if (lowS && sig.hasHighS()) {
    sig = sig.normalizeS();
    recovery ^= 1;
  }
  return { sig, recovery };
}
function normalizePrivateKey(key) {
  let num;
  if (typeof key === "bigint") {
    num = key;
  } else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) {
    num = BigInt(key);
  } else if (typeof key === "string") {
    if (key.length !== 2 * groupLen)
      throw new Error("Expected 32 bytes of private key");
    num = hexToNumber(key);
  } else if (key instanceof Uint8Array) {
    if (key.length !== groupLen)
      throw new Error("Expected 32 bytes of private key");
    num = bytesToNumber(key);
  } else {
    throw new TypeError("Expected valid private key");
  }
  if (!isWithinCurveOrder(num))
    throw new Error("Expected private key: 0 < key < n");
  return num;
}
function normalizePublicKey(publicKey) {
  if (publicKey instanceof Point) {
    publicKey.assertValidity();
    return publicKey;
  } else {
    return Point.fromHex(publicKey);
  }
}
function normalizeSignature(signature) {
  if (signature instanceof Signature) {
    signature.assertValidity();
    return signature;
  }
  try {
    return Signature.fromDER(signature);
  } catch (error) {
    return Signature.fromCompact(signature);
  }
}
function getPublicKey(privateKey, isCompressed = false) {
  return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
}
function recoverPublicKey(msgHash, signature, recovery, isCompressed = false) {
  return Point.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed);
}
function isProbPub(item) {
  const arr = item instanceof Uint8Array;
  const str = typeof item === "string";
  const len = (arr || str) && item.length;
  if (arr)
    return len === compressedLen || len === uncompressedLen;
  if (str)
    return len === compressedLen * 2 || len === uncompressedLen * 2;
  if (item instanceof Point)
    return true;
  return false;
}
function getSharedSecret(privateA, publicB, isCompressed = false) {
  if (isProbPub(privateA))
    throw new TypeError("getSharedSecret: first arg must be private key");
  if (!isProbPub(publicB))
    throw new TypeError("getSharedSecret: second arg must be public key");
  const b2 = normalizePublicKey(publicB);
  b2.assertValidity();
  return b2.multiply(normalizePrivateKey(privateA)).toRawBytes(isCompressed);
}
function bits2int(bytes2) {
  const slice = bytes2.length > fieldLen ? bytes2.slice(0, fieldLen) : bytes2;
  return bytesToNumber(slice);
}
function bits2octets(bytes2) {
  const z1 = bits2int(bytes2);
  const z2 = mod(z1, CURVE.n);
  return int2octets(z2 < _0n2 ? z1 : z2);
}
function int2octets(num) {
  return numTo32b(num);
}
function initSigArgs(msgHash, privateKey, extraEntropy) {
  if (msgHash == null)
    throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
  const h1 = ensureBytes(msgHash);
  const d = normalizePrivateKey(privateKey);
  const seedArgs = [int2octets(d), bits2octets(h1)];
  if (extraEntropy != null) {
    if (extraEntropy === true)
      extraEntropy = utils.randomBytes(fieldLen);
    const e = ensureBytes(extraEntropy);
    if (e.length !== fieldLen)
      throw new Error(`sign: Expected ${fieldLen} bytes of extra data`);
    seedArgs.push(e);
  }
  const seed = concatBytes(...seedArgs);
  const m = bits2int(h1);
  return { seed, m, d };
}
function finalizeSig(recSig, opts) {
  const { sig, recovery } = recSig;
  const { der, recovered } = Object.assign({ canonical: true, der: true }, opts);
  const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
  return recovered ? [hashed, recovery] : hashed;
}
function signSync(msgHash, privKey, opts = {}) {
  const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
  const drbg = new HmacDrbg(hashLen, groupLen);
  drbg.reseedSync(seed);
  let sig;
  while (!(sig = kmdToSig(drbg.generateSync(), m, d, opts.canonical)))
    drbg.reseedSync();
  return finalizeSig(sig, opts);
}
Point.BASE._setWindowSize(8);
var crypto3 = {
  node: nodeCrypto,
  web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
};
var TAGGED_HASH_PREFIXES = {};
var utils = {
  bytesToHex,
  hexToBytes,
  concatBytes,
  mod,
  invert,
  isValidPrivateKey(privateKey) {
    try {
      normalizePrivateKey(privateKey);
      return true;
    } catch (error) {
      return false;
    }
  },
  _bigintTo32Bytes: numTo32b,
  _normalizePrivateKey: normalizePrivateKey,
  hashToPrivateKey: (hash2) => {
    hash2 = ensureBytes(hash2);
    const minLen = groupLen + 8;
    if (hash2.length < minLen || hash2.length > 1024) {
      throw new Error(`Expected valid bytes of private key as per FIPS 186`);
    }
    const num = mod(bytesToNumber(hash2), CURVE.n - _1n2) + _1n2;
    return numTo32b(num);
  },
  randomBytes: (bytesLength = 32) => {
    if (crypto3.web) {
      return crypto3.web.getRandomValues(new Uint8Array(bytesLength));
    } else if (crypto3.node) {
      const { randomBytes: randomBytes3 } = crypto3.node;
      return Uint8Array.from(randomBytes3(bytesLength));
    } else {
      throw new Error("The environment doesn't have randomBytes function");
    }
  },
  randomPrivateKey: () => utils.hashToPrivateKey(utils.randomBytes(groupLen + 8)),
  precompute(windowSize = 8, point = Point.BASE) {
    const cached = point === Point.BASE ? point : new Point(point.x, point.y);
    cached._setWindowSize(windowSize);
    cached.multiply(_3n);
    return cached;
  },
  sha256: async (...messages) => {
    if (crypto3.web) {
      const buffer = await crypto3.web.subtle.digest("SHA-256", concatBytes(...messages));
      return new Uint8Array(buffer);
    } else if (crypto3.node) {
      const { createHash: createHash2 } = crypto3.node;
      const hash2 = createHash2("sha256");
      messages.forEach((m) => hash2.update(m));
      return Uint8Array.from(hash2.digest());
    } else {
      throw new Error("The environment doesn't have sha256 function");
    }
  },
  hmacSha256: async (key, ...messages) => {
    if (crypto3.web) {
      const ckey = await crypto3.web.subtle.importKey("raw", key, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
      const message = concatBytes(...messages);
      const buffer = await crypto3.web.subtle.sign("HMAC", ckey, message);
      return new Uint8Array(buffer);
    } else if (crypto3.node) {
      const { createHmac: createHmac2 } = crypto3.node;
      const hash2 = createHmac2("sha256", key);
      messages.forEach((m) => hash2.update(m));
      return Uint8Array.from(hash2.digest());
    } else {
      throw new Error("The environment doesn't have hmac-sha256 function");
    }
  },
  sha256Sync: void 0,
  hmacSha256Sync: void 0,
  taggedHash: async (tag, ...messages) => {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === void 0) {
      const tagH = await utils.sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
      tagP = concatBytes(tagH, tagH);
      TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return utils.sha256(tagP, ...messages);
  },
  taggedHashSync: (tag, ...messages) => {
    if (typeof _sha256Sync !== "function")
      throw new ShaError("sha256Sync is undefined, you need to set it");
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === void 0) {
      const tagH = _sha256Sync(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
      tagP = concatBytes(tagH, tagH);
      TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return _sha256Sync(tagP, ...messages);
  },
  _JacobianPoint: JacobianPoint
};
Object.defineProperties(utils, {
  sha256Sync: {
    configurable: false,
    get() {
      return _sha256Sync;
    },
    set(val) {
      if (!_sha256Sync)
        _sha256Sync = val;
    }
  },
  hmacSha256Sync: {
    configurable: false,
    get() {
      return _hmacSha256Sync;
    },
    set(val) {
      if (!_hmacSha256Sync)
        _hmacSha256Sync = val;
    }
  }
});

// node_modules/ethers/lib.esm/constants/addresses.js
var ZeroAddress = "0x0000000000000000000000000000000000000000";

// node_modules/ethers/lib.esm/constants/hashes.js
var ZeroHash = "0x0000000000000000000000000000000000000000000000000000000000000000";

// node_modules/ethers/lib.esm/constants/numbers.js
var N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var WeiPerEther = BigInt("1000000000000000000");
var MaxUint256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var MinInt256 = BigInt("0x8000000000000000000000000000000000000000000000000000000000000000") * BigInt(-1);
var MaxInt256 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

// node_modules/ethers/lib.esm/constants/strings.js
var EtherSymbol = "Ξ";
var MessagePrefix = "Ethereum Signed Message:\n";

// node_modules/ethers/lib.esm/crypto/signature.js
var BN_04 = BigInt(0);
var BN_13 = BigInt(1);
var BN_2 = BigInt(2);
var BN_27 = BigInt(27);
var BN_28 = BigInt(28);
var BN_35 = BigInt(35);
var _guard3 = {};
function toUint256(value) {
  return zeroPadValue(toBeArray(value), 32);
}
var _r, _s, _v, _networkV;
var _Signature = class {
  /**
   *  @private
   */
  constructor(guard, r2, s, v) {
    __privateAdd(this, _r, void 0);
    __privateAdd(this, _s, void 0);
    __privateAdd(this, _v, void 0);
    __privateAdd(this, _networkV, void 0);
    assertPrivate(guard, _guard3, "Signature");
    __privateSet(this, _r, r2);
    __privateSet(this, _s, s);
    __privateSet(this, _v, v);
    __privateSet(this, _networkV, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return __privateGet(this, _r);
  }
  set r(value) {
    assertArgument(dataLength(value) === 32, "invalid r", "value", value);
    __privateSet(this, _r, hexlify(value));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return __privateGet(this, _s);
  }
  set s(_value2) {
    assertArgument(dataLength(_value2) === 32, "invalid s", "value", _value2);
    const value = hexlify(_value2);
    assertArgument(parseInt(value.substring(0, 3)) < 8, "non-canonical s", "value", value);
    __privateSet(this, _s, value);
  }
  /**
   *  The ``v`` value for a signature.
   *
   *  Since a given ``x`` value for ``r`` has two possible values for
   *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
   *  values to use.
   *
   *  It is normalized to the values ``27`` or ``28`` for legacy
   *  purposes.
   */
  get v() {
    return __privateGet(this, _v);
  }
  set v(value) {
    const v = getNumber(value, "value");
    assertArgument(v === 27 || v === 28, "invalid v", "v", value);
    __privateSet(this, _v, v);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return __privateGet(this, _networkV);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const v = this.networkV;
    if (v == null) {
      return null;
    }
    return _Signature.getChainId(v);
  }
  /**
   *  The ``yParity`` for the signature.
   *
   *  See ``v`` for more details on how this value is used.
   */
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  /**
   *  The [[link-eip-2098]] compact representation of the ``yParity``
   *  and ``s`` compacted into a single ``bytes32``.
   */
  get yParityAndS() {
    const yParityAndS = getBytes(this.s);
    if (this.yParity) {
      yParityAndS[0] |= 128;
    }
    return hexlify(yParityAndS);
  }
  /**
   *  The [[link-eip-2098]] compact representation.
   */
  get compactSerialized() {
    return concat([this.r, this.yParityAndS]);
  }
  /**
   *  The serialized representation.
   */
  get serialized() {
    return concat([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  /**
   *  Returns a new identical [[Signature]].
   */
  clone() {
    const clone = new _Signature(_guard3, this.r, this.s, this.v);
    if (this.networkV) {
      __privateSet(clone, _networkV, this.networkV);
    }
    return clone;
  }
  /**
   *  Returns a representation that is compatible with ``JSON.stringify``.
   */
  toJSON() {
    const networkV = this.networkV;
    return {
      _type: "signature",
      networkV: networkV != null ? networkV.toString() : null,
      r: this.r,
      s: this.s,
      v: this.v
    };
  }
  /**
   *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
   *
   *  @example:
   *    Signature.getChainId(45)
   *    //_result:
   *
   *    Signature.getChainId(46)
   *    //_result:
   */
  static getChainId(v) {
    const bv = getBigInt(v, "v");
    if (bv == BN_27 || bv == BN_28) {
      return BN_04;
    }
    assertArgument(bv >= BN_35, "invalid EIP-155 v", "v", v);
    return (bv - BN_35) / BN_2;
  }
  /**
   *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
   *
   *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
   *  property to include the chain ID.
   *
   *  @example:
   *    Signature.getChainIdV(5, 27)
   *    //_result:
   *
   *    Signature.getChainIdV(5, 28)
   *    //_result:
   *
   */
  static getChainIdV(chainId, v) {
    return getBigInt(chainId) * BN_2 + BigInt(35 + v - 27);
  }
  /**
   *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
   *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
   *
   *  @example:
   *    // The values 0 and 1 imply v is actually yParity
   *    Signature.getNormalizedV(0)
   *    //_result:
   *
   *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
   *    Signature.getNormalizedV(27)
   *    //_result:
   *
   *    // Legacy EIP-155 transaction (i.e. >= 35)
   *    Signature.getNormalizedV(46)
   *    //_result:
   *
   *    // Invalid values throw
   *    Signature.getNormalizedV(5)
   *    //_error:
   */
  static getNormalizedV(v) {
    const bv = getBigInt(v);
    if (bv === BN_04 || bv === BN_27) {
      return 27;
    }
    if (bv === BN_13 || bv === BN_28) {
      return 28;
    }
    assertArgument(bv >= BN_35, "invalid v", "v", v);
    return bv & BN_13 ? 27 : 28;
  }
  /**
   *  Creates a new [[Signature]].
   *
   *  If no %%sig%% is provided, a new [[Signature]] is created
   *  with default values.
   *
   *  If %%sig%% is a string, it is parsed.
   */
  static from(sig) {
    function assertError(check, message) {
      assertArgument(check, message, "signature", sig);
    }
    ;
    if (sig == null) {
      return new _Signature(_guard3, ZeroHash, ZeroHash, 27);
    }
    if (typeof sig === "string") {
      const bytes2 = getBytes(sig, "signature");
      if (bytes2.length === 64) {
        const r3 = hexlify(bytes2.slice(0, 32));
        const s2 = bytes2.slice(32, 64);
        const v2 = s2[0] & 128 ? 28 : 27;
        s2[0] &= 127;
        return new _Signature(_guard3, r3, hexlify(s2), v2);
      }
      if (bytes2.length === 65) {
        const r3 = hexlify(bytes2.slice(0, 32));
        const s2 = bytes2.slice(32, 64);
        assertError((s2[0] & 128) === 0, "non-canonical s");
        const v2 = _Signature.getNormalizedV(bytes2[64]);
        return new _Signature(_guard3, r3, hexlify(s2), v2);
      }
      assertError(false, "invalid raw signature length");
    }
    if (sig instanceof _Signature) {
      return sig.clone();
    }
    const _r2 = sig.r;
    assertError(_r2 != null, "missing r");
    const r2 = toUint256(_r2);
    const s = function(s2, yParityAndS) {
      if (s2 != null) {
        return toUint256(s2);
      }
      if (yParityAndS != null) {
        assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
        const bytes2 = getBytes(yParityAndS);
        bytes2[0] &= 127;
        return hexlify(bytes2);
      }
      assertError(false, "missing s");
    }(sig.s, sig.yParityAndS);
    assertError((getBytes(s)[0] & 128) == 0, "non-canonical s");
    const { networkV, v } = function(_v2, yParityAndS, yParity) {
      if (_v2 != null) {
        const v2 = getBigInt(_v2);
        return {
          networkV: v2 >= BN_35 ? v2 : void 0,
          v: _Signature.getNormalizedV(v2)
        };
      }
      if (yParityAndS != null) {
        assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
        return { v: getBytes(yParityAndS)[0] & 128 ? 28 : 27 };
      }
      if (yParity != null) {
        switch (yParity) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        assertError(false, "invalid yParity");
      }
      assertError(false, "missing v");
    }(sig.v, sig.yParityAndS, sig.yParity);
    const result = new _Signature(_guard3, r2, s, v);
    if (networkV) {
      __privateSet(result, _networkV, networkV);
    }
    assertError(!("yParity" in sig && sig.yParity !== result.yParity), "yParity mismatch");
    assertError(!("yParityAndS" in sig && sig.yParityAndS !== result.yParityAndS), "yParityAndS mismatch");
    return result;
  }
};
var Signature2 = _Signature;
_r = new WeakMap();
_s = new WeakMap();
_v = new WeakMap();
_networkV = new WeakMap();

// node_modules/ethers/lib.esm/crypto/signing-key.js
utils.hmacSha256Sync = function(key, ...messages) {
  return getBytes(computeHmac("sha256", key, concat(messages)));
};
var _privateKey;
var _SigningKey = class {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(privateKey) {
    __privateAdd(this, _privateKey, void 0);
    assertArgument(dataLength(privateKey) === 32, "invalid private key", "privateKey", "[REDACTED]");
    __privateSet(this, _privateKey, hexlify(privateKey));
  }
  /**
   *  The private key.
   */
  get privateKey() {
    return __privateGet(this, _privateKey);
  }
  /**
   *  The uncompressed public key.
   *
   * This will always begin with the prefix ``0x04`` and be 132
   * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
   */
  get publicKey() {
    return _SigningKey.computePublicKey(__privateGet(this, _privateKey));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return _SigningKey.computePublicKey(__privateGet(this, _privateKey), true);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(digest) {
    assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
    const [sigDer, recid] = signSync(getBytesCopy(digest), getBytesCopy(__privateGet(this, _privateKey)), {
      recovered: true,
      canonical: true
    });
    const sig = Signature.fromHex(sigDer);
    return Signature2.from({
      r: toBeHex("0x" + sig.r.toString(16), 32),
      s: toBeHex("0x" + sig.s.toString(16), 32),
      v: recid ? 28 : 27
    });
  }
  /**
   *  Returns the [[link-wiki-ecdh]] shared secret between this
   *  private key and the %%other%% key.
   *
   *  The %%other%% key may be any type of key, a raw public key,
   *  a compressed/uncompressed pubic key or aprivate key.
   *
   *  Best practice is usually to use a cryptographic hash on the
   *  returned value before using it as a symetric secret.
   *
   *  @example:
   *    sign1 = new SigningKey(id("some-secret-1"))
   *    sign2 = new SigningKey(id("some-secret-2"))
   *
   *    // Notice that privA.computeSharedSecret(pubB)...
   *    sign1.computeSharedSecret(sign2.publicKey)
   *    //_result:
   *
   *    // ...is equal to privB.computeSharedSecret(pubA).
   *    sign2.computeSharedSecret(sign1.publicKey)
   *    //_result:
   */
  computeSharedSecret(other) {
    const pubKey = _SigningKey.computePublicKey(other);
    return hexlify(getSharedSecret(getBytesCopy(__privateGet(this, _privateKey)), getBytes(pubKey)));
  }
  /**
   *  Compute the public key for %%key%%, optionally %%compressed%%.
   *
   *  The %%key%% may be any type of key, a raw public key, a
   *  compressed/uncompressed public key or private key.
   *
   *  @example:
   *    sign = new SigningKey(id("some-secret"));
   *
   *    // Compute the uncompressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey)
   *    //_result:
   *
   *    // Compute the compressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey, true)
   *    //_result:
   *
   *    // Compute the uncompressed public key
   *    SigningKey.computePublicKey(sign.publicKey, false);
   *    //_result:
   *
   *    // Compute the Compressed a public key
   *    SigningKey.computePublicKey(sign.publicKey, true);
   *    //_result:
   */
  static computePublicKey(key, compressed) {
    let bytes2 = getBytes(key, "key");
    if (bytes2.length === 32) {
      const pubKey = getPublicKey(bytes2, !!compressed);
      return hexlify(pubKey);
    }
    if (bytes2.length === 64) {
      const pub = new Uint8Array(65);
      pub[0] = 4;
      pub.set(bytes2, 1);
      bytes2 = pub;
    }
    const point = Point.fromHex(bytes2);
    return hexlify(point.toRawBytes(compressed));
  }
  /**
   *  Returns the public key for the private key which produced the
   *  %%signature%% for the given %%digest%%.
   *
   *  @example:
   *    key = new SigningKey(id("some-secret"))
   *    digest = id("hello world")
   *    sig = key.sign(digest)
   *
   *    // Notice the signer public key...
   *    key.publicKey
   *    //_result:
   *
   *    // ...is equal to the recovered public key
   *    SigningKey.recoverPublicKey(digest, sig)
   *    //_result:
   *
   */
  static recoverPublicKey(digest, signature) {
    assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
    const sig = Signature2.from(signature);
    const der = Signature.fromCompact(getBytesCopy(concat([sig.r, sig.s]))).toDERRawBytes();
    const pubKey = recoverPublicKey(getBytesCopy(digest), der, sig.yParity);
    assertArgument(pubKey != null, "invalid signautre for digest", "signature", signature);
    return hexlify(pubKey);
  }
  /**
   *  Returns the point resulting from adding the ellipic curve points
   *  %%p0%% and %%p1%%.
   *
   *  This is not a common function most developers should require, but
   *  can be useful for certain privacy-specific techniques.
   *
   *  For example, it is used by [[HDNodeWallet]] to compute child
   *  addresses from parent public keys and chain codes.
   */
  static addPoints(p0, p1, compressed) {
    const pub0 = Point.fromHex(_SigningKey.computePublicKey(p0).substring(2));
    const pub1 = Point.fromHex(_SigningKey.computePublicKey(p1).substring(2));
    return "0x" + pub0.add(pub1).toHex(!!compressed);
  }
};
var SigningKey = _SigningKey;
_privateKey = new WeakMap();

// node_modules/ethers/lib.esm/crypto/index.js
function lock() {
  computeHmac.lock();
  keccak256.lock();
  pbkdf22.lock();
  randomBytes2.lock();
  ripemd1602.lock();
  scrypt2.lock();
  scryptSync.lock();
  sha2562.lock();
  sha5122.lock();
  randomBytes2.lock();
}

// node_modules/ethers/lib.esm/address/address.js
var BN_05 = BigInt(0);
var BN_36 = BigInt(36);
function getChecksumAddress(address) {
  address = address.toLowerCase();
  const chars = address.substring(2).split("");
  const expanded = new Uint8Array(40);
  for (let i = 0; i < 40; i++) {
    expanded[i] = chars[i].charCodeAt(0);
  }
  const hashed = getBytes(keccak256(expanded));
  for (let i = 0; i < 40; i += 2) {
    if (hashed[i >> 1] >> 4 >= 8) {
      chars[i] = chars[i].toUpperCase();
    }
    if ((hashed[i >> 1] & 15) >= 8) {
      chars[i + 1] = chars[i + 1].toUpperCase();
    }
  }
  return "0x" + chars.join("");
}
var ibanLookup = {};
for (let i = 0; i < 10; i++) {
  ibanLookup[String(i)] = String(i);
}
for (let i = 0; i < 26; i++) {
  ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);
}
var safeDigits = 15;
function ibanChecksum(address) {
  address = address.toUpperCase();
  address = address.substring(4) + address.substring(0, 2) + "00";
  let expanded = address.split("").map((c) => {
    return ibanLookup[c];
  }).join("");
  while (expanded.length >= safeDigits) {
    let block = expanded.substring(0, safeDigits);
    expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
  }
  let checksum2 = String(98 - parseInt(expanded, 10) % 97);
  while (checksum2.length < 2) {
    checksum2 = "0" + checksum2;
  }
  return checksum2;
}
var Base36 = function() {
  ;
  const result = {};
  for (let i = 0; i < 36; i++) {
    const key = "0123456789abcdefghijklmnopqrstuvwxyz"[i];
    result[key] = BigInt(i);
  }
  return result;
}();
function fromBase36(value) {
  value = value.toLowerCase();
  let result = BN_05;
  for (let i = 0; i < value.length; i++) {
    result = result * BN_36 + Base36[value[i]];
  }
  return result;
}
function getAddress(address) {
  assertArgument(typeof address === "string", "invalid address", "address", address);
  if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    if (!address.startsWith("0x")) {
      address = "0x" + address;
    }
    const result = getChecksumAddress(address);
    assertArgument(!address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || result === address, "bad address checksum", "address", address);
    return result;
  }
  if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    assertArgument(address.substring(2, 4) === ibanChecksum(address), "bad icap checksum", "address", address);
    let result = fromBase36(address.substring(4)).toString(16);
    while (result.length < 40) {
      result = "0" + result;
    }
    return getChecksumAddress("0x" + result);
  }
  assertArgument(false, "invalid address", "address", address);
}
function getIcapAddress(address) {
  let base36 = BigInt(getAddress(address)).toString(36).toUpperCase();
  while (base36.length < 30) {
    base36 = "0" + base36;
  }
  return "XE" + ibanChecksum("XE00" + base36) + base36;
}

// node_modules/ethers/lib.esm/address/contract-address.js
function getCreateAddress(tx) {
  const from = getAddress(tx.from);
  const nonce = getBigInt(tx.nonce, "tx.nonce");
  let nonceHex = nonce.toString(16);
  if (nonceHex === "0") {
    nonceHex = "0x";
  } else if (nonceHex.length % 2) {
    nonceHex = "0x0" + nonceHex;
  } else {
    nonceHex = "0x" + nonceHex;
  }
  return getAddress(dataSlice(keccak256(encodeRlp([from, nonceHex])), 12));
}
function getCreate2Address(_from, _salt, _initCodeHash) {
  const from = getAddress(_from);
  const salt = getBytes(_salt, "salt");
  const initCodeHash = getBytes(_initCodeHash, "initCodeHash");
  assertArgument(salt.length === 32, "salt must be 32 bytes", "salt", _salt);
  assertArgument(initCodeHash.length === 32, "initCodeHash must be 32 bytes", "initCodeHash", _initCodeHash);
  return getAddress(dataSlice(keccak256(concat(["0xff", from, salt, initCodeHash])), 12));
}

// node_modules/ethers/lib.esm/address/checks.js
function isAddressable(value) {
  return value && typeof value.getAddress === "function";
}
function isAddress(value) {
  try {
    getAddress(value);
    return true;
  } catch (error) {
  }
  return false;
}
async function checkAddress(target, promise) {
  const result = await promise;
  if (result == null || result === "0x0000000000000000000000000000000000000000") {
    assert(typeof target !== "string", "unconfigured name", "UNCONFIGURED_NAME", { value: target });
    assertArgument(false, "invalid AddressLike value; did not resolve to a value address", "target", target);
  }
  return getAddress(result);
}
function resolveAddress(target, resolver) {
  if (typeof target === "string") {
    if (target.match(/^0x[0-9a-f]{40}$/i)) {
      return getAddress(target);
    }
    assert(resolver != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" });
    return checkAddress(target, resolver.resolveName(target));
  } else if (isAddressable(target)) {
    return checkAddress(target, target.getAddress());
  } else if (target && typeof target.then === "function") {
    return checkAddress(target, target);
  }
  assertArgument(false, "unsupported addressable value", "target", target);
}

// node_modules/ethers/lib.esm/abi/typed.js
var _gaurd = {};
function n(value, width) {
  let signed2 = false;
  if (width < 0) {
    signed2 = true;
    width *= -1;
  }
  return new Typed(_gaurd, `${signed2 ? "" : "u"}int${width}`, value, { signed: signed2, width });
}
function b(value, size) {
  return new Typed(_gaurd, `bytes${size ? size : ""}`, value, { size });
}
var _typedSymbol = Symbol.for("_ethers_typed");
var _options;
var _Typed = class {
  /**
   *  @_ignore:
   */
  constructor(gaurd, type, value, options) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    __publicField(this, "type");
    /**
     *  The actual value.
     */
    __publicField(this, "value");
    __privateAdd(this, _options, void 0);
    /**
     *  @_ignore:
     */
    __publicField(this, "_typedSymbol");
    if (options == null) {
      options = null;
    }
    assertPrivate(_gaurd, gaurd, "Typed");
    defineProperties(this, { _typedSymbol, type, value });
    __privateSet(this, _options, options);
    this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array") {
      throw new Error("");
    } else if (this.type === "dynamicArray") {
      throw new Error("");
    } else if (this.type === "tuple") {
      return `tuple(${this.value.map((v) => v.format()).join(",")})`;
    }
    return this.type;
  }
  /**
   *  The default value returned by this type.
   */
  defaultValue() {
    return 0;
  }
  /**
   *  The minimum value for numeric types.
   */
  minValue() {
    return 0;
  }
  /**
   *  The maximum value for numeric types.
   */
  maxValue() {
    return 0;
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
   */
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
   */
  isData() {
    return this.type.startsWith("bytes");
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
   */
  isString() {
    return this.type === "string";
  }
  /**
   *  Returns the tuple name, if this is a tuple. Throws otherwise.
   */
  get tupleName() {
    if (this.type !== "tuple") {
      throw TypeError("not a tuple");
    }
    return __privateGet(this, _options);
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  /**
   *  Returns the length of the array type or ``-1`` if it is dynamic.
   *
   *  Throws if the type is not an array.
   */
  get arrayLength() {
    if (this.type !== "array") {
      throw TypeError("not an array");
    }
    if (__privateGet(this, _options) === true) {
      return -1;
    }
    if (__privateGet(this, _options) === false) {
      return this.value.length;
    }
    return null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(type, value) {
    return new _Typed(_gaurd, type, value);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(v) {
    return n(v, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(v) {
    return n(v, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(v) {
    return n(v, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(v) {
    return n(v, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(v) {
    return n(v, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(v) {
    return n(v, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(v) {
    return n(v, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(v) {
    return n(v, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(v) {
    return n(v, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(v) {
    return n(v, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(v) {
    return n(v, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(v) {
    return n(v, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(v) {
    return n(v, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(v) {
    return n(v, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(v) {
    return n(v, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(v) {
    return n(v, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(v) {
    return n(v, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(v) {
    return n(v, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(v) {
    return n(v, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(v) {
    return n(v, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(v) {
    return n(v, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(v) {
    return n(v, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(v) {
    return n(v, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(v) {
    return n(v, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(v) {
    return n(v, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(v) {
    return n(v, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(v) {
    return n(v, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(v) {
    return n(v, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(v) {
    return n(v, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(v) {
    return n(v, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(v) {
    return n(v, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(v) {
    return n(v, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(v) {
    return n(v, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(v) {
    return n(v, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(v) {
    return n(v, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(v) {
    return n(v, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(v) {
    return n(v, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(v) {
    return n(v, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(v) {
    return n(v, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(v) {
    return n(v, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(v) {
    return n(v, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(v) {
    return n(v, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(v) {
    return n(v, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(v) {
    return n(v, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(v) {
    return n(v, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(v) {
    return n(v, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(v) {
    return n(v, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(v) {
    return n(v, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(v) {
    return n(v, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(v) {
    return n(v, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(v) {
    return n(v, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(v) {
    return n(v, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(v) {
    return n(v, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(v) {
    return n(v, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(v) {
    return n(v, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(v) {
    return n(v, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(v) {
    return n(v, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(v) {
    return n(v, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(v) {
    return n(v, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(v) {
    return n(v, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(v) {
    return n(v, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(v) {
    return n(v, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(v) {
    return n(v, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(v) {
    return n(v, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(v) {
    return n(v, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(v) {
    return n(v, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(v) {
    return b(v, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(v) {
    return b(v, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(v) {
    return b(v, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(v) {
    return b(v, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(v) {
    return b(v, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(v) {
    return b(v, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(v) {
    return b(v, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(v) {
    return b(v, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(v) {
    return b(v, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(v) {
    return b(v, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(v) {
    return b(v, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(v) {
    return b(v, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(v) {
    return b(v, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(v) {
    return b(v, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(v) {
    return b(v, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(v) {
    return b(v, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(v) {
    return b(v, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(v) {
    return b(v, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(v) {
    return b(v, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(v) {
    return b(v, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(v) {
    return b(v, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(v) {
    return b(v, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(v) {
    return b(v, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(v) {
    return b(v, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(v) {
    return b(v, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(v) {
    return b(v, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(v) {
    return b(v, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(v) {
    return b(v, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(v) {
    return b(v, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(v) {
    return b(v, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(v) {
    return b(v, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(v) {
    return b(v, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(v) {
    return new _Typed(_gaurd, "address", v);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(v) {
    return new _Typed(_gaurd, "bool", !!v);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(v) {
    return new _Typed(_gaurd, "bytes", v);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(v) {
    return new _Typed(_gaurd, "string", v);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(v, dynamic) {
    throw new Error("not implemented yet");
    return new _Typed(_gaurd, "array", v, dynamic);
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(v, name) {
    throw new Error("not implemented yet");
    return new _Typed(_gaurd, "tuple", v, name);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(v) {
    return new _Typed(_gaurd, "overrides", Object.assign({}, v));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(value) {
    return value && typeof value === "object" && "_typedSymbol" in value && value._typedSymbol === _typedSymbol;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(value, type) {
    if (_Typed.isTyped(value)) {
      if (value.type !== type) {
        throw new Error(`invalid type: expecetd ${type}, got ${value.type}`);
      }
      return value.value;
    }
    return value;
  }
};
var Typed = _Typed;
_options = new WeakMap();

// node_modules/ethers/lib.esm/abi/coders/address.js
var AddressCoder = class extends Coder {
  constructor(localName) {
    super("address", "address", localName, false);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(writer, _value2) {
    let value = Typed.dereference(_value2, "string");
    try {
      value = getAddress(value);
    } catch (error) {
      return this._throwError(error.message, _value2);
    }
    return writer.writeValue(value);
  }
  decode(reader) {
    return getAddress(toBeHex(reader.readValue(), 20));
  }
};

// node_modules/ethers/lib.esm/abi/coders/anonymous.js
var AnonymousCoder = class extends Coder {
  constructor(coder) {
    super(coder.name, coder.type, "_", coder.dynamic);
    __publicField(this, "coder");
    this.coder = coder;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(writer, value) {
    return this.coder.encode(writer, value);
  }
  decode(reader) {
    return this.coder.decode(reader);
  }
};

// node_modules/ethers/lib.esm/abi/coders/array.js
function pack(writer, coders, values) {
  let arrayValues = [];
  if (Array.isArray(values)) {
    arrayValues = values;
  } else if (values && typeof values === "object") {
    let unique = {};
    arrayValues = coders.map((coder) => {
      const name = coder.localName;
      assert(name, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
      assert(!unique[name], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
      unique[name] = true;
      return values[name];
    });
  } else {
    assertArgument(false, "invalid tuple value", "tuple", values);
  }
  assertArgument(coders.length === arrayValues.length, "types/value length mismatch", "tuple", values);
  let staticWriter = new Writer();
  let dynamicWriter = new Writer();
  let updateFuncs = [];
  coders.forEach((coder, index) => {
    let value = arrayValues[index];
    if (coder.dynamic) {
      let dynamicOffset = dynamicWriter.length;
      coder.encode(dynamicWriter, value);
      let updateFunc = staticWriter.writeUpdatableValue();
      updateFuncs.push((baseOffset) => {
        updateFunc(baseOffset + dynamicOffset);
      });
    } else {
      coder.encode(staticWriter, value);
    }
  });
  updateFuncs.forEach((func) => {
    func(staticWriter.length);
  });
  let length = writer.appendWriter(staticWriter);
  length += writer.appendWriter(dynamicWriter);
  return length;
}
function unpack(reader, coders) {
  let values = [];
  let keys = [];
  let baseReader = reader.subReader(0);
  coders.forEach((coder) => {
    let value = null;
    if (coder.dynamic) {
      let offset = reader.readIndex();
      let offsetReader = baseReader.subReader(offset);
      try {
        value = coder.decode(offsetReader);
      } catch (error) {
        if (isError(error, "BUFFER_OVERRUN")) {
          throw error;
        }
        value = error;
        value.baseType = coder.name;
        value.name = coder.localName;
        value.type = coder.type;
      }
    } else {
      try {
        value = coder.decode(reader);
      } catch (error) {
        if (isError(error, "BUFFER_OVERRUN")) {
          throw error;
        }
        value = error;
        value.baseType = coder.name;
        value.name = coder.localName;
        value.type = coder.type;
      }
    }
    if (value == void 0) {
      throw new Error("investigate");
    }
    values.push(value);
    keys.push(coder.localName || null);
  });
  return Result.fromItems(values, keys);
}
var ArrayCoder = class extends Coder {
  constructor(coder, length, localName) {
    const type = coder.type + "[" + (length >= 0 ? length : "") + "]";
    const dynamic = length === -1 || coder.dynamic;
    super("array", type, localName, dynamic);
    __publicField(this, "coder");
    __publicField(this, "length");
    defineProperties(this, { coder, length });
  }
  defaultValue() {
    const defaultChild = this.coder.defaultValue();
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(defaultChild);
    }
    return result;
  }
  encode(writer, _value2) {
    const value = Typed.dereference(_value2, "array");
    if (!Array.isArray(value)) {
      this._throwError("expected array value", value);
    }
    let count = this.length;
    if (count === -1) {
      count = value.length;
      writer.writeValue(value.length);
    }
    assertArgumentCount(value.length, count, "coder array" + (this.localName ? " " + this.localName : ""));
    let coders = [];
    for (let i = 0; i < value.length; i++) {
      coders.push(this.coder);
    }
    return pack(writer, coders, value);
  }
  decode(reader) {
    let count = this.length;
    if (count === -1) {
      count = reader.readIndex();
      assert(count * WordSize <= reader.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: reader.bytes, offset: count * WordSize, length: reader.dataLength });
    }
    let coders = [];
    for (let i = 0; i < count; i++) {
      coders.push(new AnonymousCoder(this.coder));
    }
    return unpack(reader, coders);
  }
};

// node_modules/ethers/lib.esm/abi/coders/boolean.js
var BooleanCoder = class extends Coder {
  constructor(localName) {
    super("bool", "bool", localName, false);
  }
  defaultValue() {
    return false;
  }
  encode(writer, _value2) {
    const value = Typed.dereference(_value2, "bool");
    return writer.writeValue(value ? 1 : 0);
  }
  decode(reader) {
    return !!reader.readValue();
  }
};

// node_modules/ethers/lib.esm/abi/coders/bytes.js
var DynamicBytesCoder = class extends Coder {
  constructor(type, localName) {
    super(type, type, localName, true);
  }
  defaultValue() {
    return "0x";
  }
  encode(writer, value) {
    value = getBytesCopy(value);
    let length = writer.writeValue(value.length);
    length += writer.writeBytes(value);
    return length;
  }
  decode(reader) {
    return reader.readBytes(reader.readIndex(), true);
  }
};
var BytesCoder = class extends DynamicBytesCoder {
  constructor(localName) {
    super("bytes", localName);
  }
  decode(reader) {
    return hexlify(super.decode(reader));
  }
};

// node_modules/ethers/lib.esm/abi/coders/fixed-bytes.js
var FixedBytesCoder = class extends Coder {
  constructor(size, localName) {
    let name = "bytes" + String(size);
    super(name, name, localName, false);
    __publicField(this, "size");
    defineProperties(this, { size }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(writer, _value2) {
    let data = getBytesCopy(Typed.dereference(_value2, this.type));
    if (data.length !== this.size) {
      this._throwError("incorrect data length", _value2);
    }
    return writer.writeBytes(data);
  }
  decode(reader) {
    return hexlify(reader.readBytes(this.size));
  }
};

// node_modules/ethers/lib.esm/abi/coders/null.js
var Empty = new Uint8Array([]);
var NullCoder = class extends Coder {
  constructor(localName) {
    super("null", "", localName, false);
  }
  defaultValue() {
    return null;
  }
  encode(writer, value) {
    if (value != null) {
      this._throwError("not null", value);
    }
    return writer.writeBytes(Empty);
  }
  decode(reader) {
    reader.readBytes(0);
    return null;
  }
};

// node_modules/ethers/lib.esm/abi/coders/number.js
var BN_06 = BigInt(0);
var BN_14 = BigInt(1);
var BN_MAX_UINT256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var NumberCoder = class extends Coder {
  constructor(size, signed2, localName) {
    const name = (signed2 ? "int" : "uint") + size * 8;
    super(name, name, localName, false);
    __publicField(this, "size");
    __publicField(this, "signed");
    defineProperties(this, { size, signed: signed2 }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(writer, _value2) {
    let value = getBigInt(Typed.dereference(_value2, this.type));
    let maxUintValue = mask(BN_MAX_UINT256, WordSize * 8);
    if (this.signed) {
      let bounds = mask(maxUintValue, this.size * 8 - 1);
      if (value > bounds || value < -(bounds + BN_14)) {
        this._throwError("value out-of-bounds", _value2);
      }
      value = toTwos(value, 8 * WordSize);
    } else if (value < BN_06 || value > mask(maxUintValue, this.size * 8)) {
      this._throwError("value out-of-bounds", _value2);
    }
    return writer.writeValue(value);
  }
  decode(reader) {
    let value = mask(reader.readValue(), this.size * 8);
    if (this.signed) {
      value = fromTwos(value, this.size * 8);
    }
    return value;
  }
};

// node_modules/ethers/lib.esm/abi/coders/string.js
var StringCoder = class extends DynamicBytesCoder {
  constructor(localName) {
    super("string", localName);
  }
  defaultValue() {
    return "";
  }
  encode(writer, _value2) {
    return super.encode(writer, toUtf8Bytes(Typed.dereference(_value2, "string")));
  }
  decode(reader) {
    return toUtf8String(super.decode(reader));
  }
};

// node_modules/ethers/lib.esm/abi/coders/tuple.js
var TupleCoder = class extends Coder {
  constructor(coders, localName) {
    let dynamic = false;
    const types = [];
    coders.forEach((coder) => {
      if (coder.dynamic) {
        dynamic = true;
      }
      types.push(coder.type);
    });
    const type = "tuple(" + types.join(",") + ")";
    super("tuple", type, localName, dynamic);
    __publicField(this, "coders");
    defineProperties(this, { coders: Object.freeze(coders.slice()) });
  }
  defaultValue() {
    const values = [];
    this.coders.forEach((coder) => {
      values.push(coder.defaultValue());
    });
    const uniqueNames = this.coders.reduce((accum, coder) => {
      const name = coder.localName;
      if (name) {
        if (!accum[name]) {
          accum[name] = 0;
        }
        accum[name]++;
      }
      return accum;
    }, {});
    this.coders.forEach((coder, index) => {
      let name = coder.localName;
      if (!name || uniqueNames[name] !== 1) {
        return;
      }
      if (name === "length") {
        name = "_length";
      }
      if (values[name] != null) {
        return;
      }
      values[name] = values[index];
    });
    return Object.freeze(values);
  }
  encode(writer, _value2) {
    const value = Typed.dereference(_value2, "tuple");
    return pack(writer, this.coders, value);
  }
  decode(reader) {
    return unpack(reader, this.coders);
  }
};

// node_modules/ethers/lib.esm/hash/id.js
function id(value) {
  return keccak256(toUtf8Bytes(value));
}

// node_modules/@adraffy/ens-normalize/dist/index.mjs
function decode_arithmetic(bytes2) {
  let pos = 0;
  function u16() {
    return bytes2[pos++] << 8 | bytes2[pos++];
  }
  let symbol_count = u16();
  let total = 1;
  let acc = [0, 1];
  for (let i = 1; i < symbol_count; i++) {
    acc.push(total += u16());
  }
  let skip = u16();
  let pos_payload = pos;
  pos += skip;
  let read_width = 0;
  let read_buffer = 0;
  function read_bit() {
    if (read_width == 0) {
      read_buffer = read_buffer << 8 | bytes2[pos++];
      read_width = 8;
    }
    return read_buffer >> --read_width & 1;
  }
  const N3 = 31;
  const FULL = 2 ** N3;
  const HALF = FULL >>> 1;
  const QRTR = HALF >> 1;
  const MASK = FULL - 1;
  let register = 0;
  for (let i = 0; i < N3; i++)
    register = register << 1 | read_bit();
  let symbols = [];
  let low = 0;
  let range = FULL;
  while (true) {
    let value = Math.floor(((register - low + 1) * total - 1) / range);
    let start = 0;
    let end = symbol_count;
    while (end - start > 1) {
      let mid = start + end >>> 1;
      if (value < acc[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    }
    if (start == 0)
      break;
    symbols.push(start);
    let a = low + Math.floor(range * acc[start] / total);
    let b2 = low + Math.floor(range * acc[start + 1] / total) - 1;
    while (((a ^ b2) & HALF) == 0) {
      register = register << 1 & MASK | read_bit();
      a = a << 1 & MASK;
      b2 = b2 << 1 & MASK | 1;
    }
    while (a & ~b2 & QRTR) {
      register = register & HALF | register << 1 & MASK >>> 1 | read_bit();
      a = a << 1 ^ HALF;
      b2 = (b2 ^ HALF) << 1 | HALF | 1;
    }
    low = a;
    range = 1 + b2 - a;
  }
  let offset = symbol_count - 4;
  return symbols.map((x) => {
    switch (x - offset) {
      case 3:
        return offset + 65792 + (bytes2[pos_payload++] << 16 | bytes2[pos_payload++] << 8 | bytes2[pos_payload++]);
      case 2:
        return offset + 256 + (bytes2[pos_payload++] << 8 | bytes2[pos_payload++]);
      case 1:
        return offset + bytes2[pos_payload++];
      default:
        return x - 1;
    }
  });
}
function read_payload(v) {
  let pos = 0;
  return () => v[pos++];
}
function read_compressed_payload(s) {
  return read_payload(decode_arithmetic(unsafe_atob(s)));
}
function unsafe_atob(s) {
  let lookup = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((c, i) => lookup[c.charCodeAt(0)] = i);
  let n2 = s.length;
  let ret = new Uint8Array(6 * n2 >> 3);
  for (let i = 0, pos = 0, width = 0, carry = 0; i < n2; i++) {
    carry = carry << 6 | lookup[s.charCodeAt(i)];
    width += 6;
    if (width >= 8) {
      ret[pos++] = carry >> (width -= 8);
    }
  }
  return ret;
}
function signed(i) {
  return i & 1 ? ~i >> 1 : i >> 1;
}
function read_deltas(n2, next) {
  let v = Array(n2);
  for (let i = 0, x = 0; i < n2; i++)
    v[i] = x += signed(next());
  return v;
}
function read_sorted(next, prev = 0) {
  let ret = [];
  while (true) {
    let x = next();
    let n2 = next();
    if (!n2)
      break;
    prev += x;
    for (let i = 0; i < n2; i++) {
      ret.push(prev + i);
    }
    prev += n2 + 1;
  }
  return ret;
}
function read_sorted_arrays(next) {
  return read_array_while(() => {
    let v = read_sorted(next);
    if (v.length)
      return v;
  });
}
function read_mapped(next) {
  let ret = [];
  while (true) {
    let w = next();
    if (w == 0)
      break;
    ret.push(read_linear_table(w, next));
  }
  while (true) {
    let w = next() - 1;
    if (w < 0)
      break;
    ret.push(read_replacement_table(w, next));
  }
  return ret.flat();
}
function read_array_while(next) {
  let v = [];
  while (true) {
    let x = next(v.length);
    if (!x)
      break;
    v.push(x);
  }
  return v;
}
function read_transposed(n2, w, next) {
  let m = Array(n2).fill().map(() => []);
  for (let i = 0; i < w; i++) {
    read_deltas(n2, next).forEach((x, j) => m[j].push(x));
  }
  return m;
}
function read_linear_table(w, next) {
  let dx = 1 + next();
  let dy = next();
  let vN = read_array_while(next);
  let m = read_transposed(vN.length, 1 + w, next);
  return m.flatMap((v, i) => {
    let [x, ...ys] = v;
    return Array(vN[i]).fill().map((_, j) => {
      let j_dy = j * dy;
      return [x + j * dx, ys.map((y) => y + j_dy)];
    });
  });
}
function read_replacement_table(w, next) {
  let n2 = 1 + next();
  let m = read_transposed(n2, 1 + w, next);
  return m.map((v) => [v[0], v.slice(1)]);
}
var r$1 = read_compressed_payload("AEgSbwjEDVYByQKaAQsBOQDpATQAngDUAHsAoABoANQAagCNAEQAhABMAHIAOwA9ACsANgAmAGIAHgAvACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGAAeABMAFwAXAA0ADgAWAA8AFAAVBFsF1QEXE0o3xAXUALIArkABaACmAgPGAK6AMDAwMAE/qAYK7P4HQAblMgVYBVkAPSw5Afa3EgfJwgAPA8meNALGCjACjqIChtk/j2+KAsXMAoPzASDgCgDyrgFCAi6OCkCQAOQA4woWABjVuskNDD6eBBx4AP4COhi+D+wKBirqBgSCaA0cBy4ArABqku+mnIAAXAaUJAbqABwAPAyUFvyp/Mo8INAIvCoDshQ8APcubKQAon4ZABgEJtgXAR4AuhnOBPsKIE04CZgJiR8cVlpM5INDABQADQAWAA9sVQAiAA8ASO8W2T30OVnKluYvChEeX05ZPe0AFAANABYAD2wgXUCYAMPsABwAOgzGFryp/AHauQVcBeMC0KACxLEKTR2kZhR0Gm5M9gC8DmgC4gAMLjSKF8qSAoF8ARMcAL4OaALiAAwuAUlQJpJMCwMt/AUpCthqGK4B2EQAciwSeAIyFiIDKCi6OGwAOuIB9iYAyA7MtgEcZIIAsgYABgCK1EoFHNZsGACoKNIBogAAAAAAKy4DnABoAQoaPu43dQQZGACrAcgCIgDgLBJ0OvRQsTOiKDVJBfsoBVoFWbC5BWo7XkITO1hCmHuUZmCh+QwUA8YIJvJ4JASkTAJUVAJ2HKwoAZCkpjZcA0YYBIRiCgDSBqxAMCQHKgI6XgBsAWIgcgCEHhoAlgFKuAAoahgBsMYDOC4iRFQBcFoGZgJmAPJKGAMqAgYASkIArABeAHQALLYGCPTwGo6AAAAKIgAqALQcSAHSAdwIDDKXeYHpAAsAEgA1AD4AOTR3etTBEGAQXQJNCkxtOxUMAq0PpwvmERYM0irM09kANKoH7ANUB+wDVANUB+wH7ANUB+wDVANUA1QDVBwL8BvUwRBgD0kEbgWPBYwE1wiEJkoRggcpCNNUDnQfHEgDRgD9IyZJHTuUMwwlQ0wNTQQH/TZDbKh9OQNIMaxU9pCjA8wyUDltAh5yEqEAKw90HTW2Tn96SHGhCkxPr7WASWNOaAK/Oqk/+QoiCZRvvHdPBj4QGCeiEPQMMAGyATgN6kvVBO4GOATGH3oZFg/KlZkIoi3aDOom4C6egFcj8iqABepL8TzaC0pRZQ9WC2IJ4DpggUsDHgEKIogK2g02CGoQ8ArGaA3iEUIHNgPSSZcAogb+Cw4dMhWyJg1iqQsGOXQG+BrzC4wmrBMmevkF0BoeBkoBJhr8AMwu5IWtWi5cGU9cBgALIiPEFKVQHQ0iQLR4RRoYBxIlpgKOQ21KhFEzHpAh8zw6DWMuEFF5B/I8AhlMC348m0aoRQsRzz6KPUUiRkwpBDJ8LCwniAnMD4IMtnxvAVYJHgmuDG4TLhEUN8IINgcWKpchJxIIHkaSYJcE9JwD8BPOAwgFPAk+BxADshwqEysVJgUKgSHUAvA20i6wAoxWfQEUBcgPIh/cEE1H3Q7mCJgCYgOAJegAKhUeABQimAhAYABcj9VTAi7ICMRqaSNxA2QU5F4RcAeODlQHpBwwFbwc3nDFXgiGBSigrAlYAXIJlgFcBOAIBjVYjJ0gPmdQi1UYmCBeQTxd+QIuDGIVnES6h3UCiA9oEhgBMgFwBzYM/gJ0EeoRaBCSCOiGATWyM/U6IgRMIYAgDgokA0xsywskJvYM9WYBoBJfAwk0OnfrZ6hgsyEX+gcWMsJBXSHuC49PygyZGr4YP1QrGeEHvAPwGvAn50FUBfwDoAAQOkoz6wS6C2YIiAk8AEYOoBQH1BhnCm6MzQEuiAG0lgNUjoACbIwGNAcIAGQIhAV24gAaAqQIoAACAMwDVAA2AqoHmgAWAII+AToDJCwBHuICjAOQCC7IAZIsAfAmBBjADBIA9DRuRwLDrgKAZ2afBdpVAosCRjIBSiIEAktETgOsbt4A2ABIBhDcRAESqEfIF+BAAdxsKADEAPgAAjIHAj4BygHwagC0AVwLLgmfsLIBSuYmAIAAEmgB1AKGANoAMgB87gFQAEoFVvYF0AJMRgEOLhUoVF4BuAMcATABCgB2BsiKosYEHARqB9ACEBgV3gLvKweyAyLcE8pCwgK921IAMhMKNQqkCqNgWF0wAy5vPU0ACx+lPsQ/SwVOO1A7VTtQO1U7UDtVO1A7VTtQO1UDlLzfvN8KaV9CYegMow3RRMU6RhPYYE5gLxPFLbQUvhXLJVMZOhq5JwIl4VUGDwEt0GYtCCk0che5ADwpZYM+Y4MeLQpIHORTjlT1LRgArkufM6wNqRsSRD0FRHXqYicWCwofAmR+AmI/WEqsWDcdAqH0AmiVAmYGAp+BOBgIAmY4AmYjBGsEfAN/EAN+jzkDOXQUOX86ICACbBoCMjM4BwJtxAJtq+yHMGRCKAFkANsA3gBHAgeVDIoA+wi/AAqyAncsAnafPAJ5SEACeLcaWdhFq0bwAnw8AnrFAn0GAnztR/1IemAhACgSSVVKWBIUSskC0P4C0MlLJAOITAOH40TCkS8C8p5dAAMDq0vLTCoiAMxNSU2sAos8AorVvhgEGkBkArQCjjQCjlk9lH4CjtYCjll1UbFTMgdS0VSCApP4ApMJAOYAGVUbVaxVzQMsGCmSgzLeeGNFODYCl5wC769YHqUAViIClowClnmZAKZZqVoGfkoAOAKWsgKWS1xBXM4CmcgCmWFcx10EFgKcmDm/OpoCnBMCn5gCnrWHABoMLicMAp3uAp6PALI6YTFh7AKe0AKgawGmAp6cHAKeS6JjxWQkIigCJ6wCJnsCoPgCoEnUAqYsAqXLAqf8AHoCp+9oeWiuAABGahlqzgKs4AKsqwKtZAKs/wJXGgJV2QKx3tQDH0tslAKyugoCsuUUbN1tYG1FXAMlygK2WTg8bo0DKUICuFsCuUQSArkndHAzcN4CvRYDLa8DMg4CvoVx/wMzbgK+F3Mfc0wCw8gCwwFzf3RIMkJ03QM8pAM8lwM9vALFeQLGRALGDYYCyGZOAshBAslMAskrAmSaAt3PeHZeeKt5IkvNAxigZv8CYfEZ8JUhewhej164DgLPaALPaSxIUM/wEJwAw6oCz3ABJucDTg9+SAIC3CQC24cC0kwDUlkDU1wA/gNViYCGPMgT6l1CcoLLg4oC2sQC2duEDYRGpzkDhqIALANkC4ZuVvYAUgLfYgLetXB0AuIs7REB8y0kAfSYAfLPhALr8ALpbXYC6vYC6uEA9kQBtgLuhgLrmZanlwAC7jwDhd2YdnDdcZ4C8wAAZgOOE5mQAvcQA5FrA5KEAveVAvnWAvhjmhmaqLg0mxsDnYAC/vcBGAA2nxmfsAMFigOmZwOm1gDOwgMGZ6GFogIGAwxGAQwBHAdqBl62ZAIAuARovA6IHrAKABRyNgAgAzASSgOGfAFgJB4AjOwAHgDmoAScjgi0BhygwgCoBRK86h4+PxZ5BWk4P0EsQiJCtV9yEl+9AJbGBTMAkE0am7o7J2AzErrQDjAYxxiKyfcFWAVZBVgFWQVkBVkFWAVZBVgFWQVYBVkFWAVZRxYI2IZoAwMDCmVe6iwEygOyBjC8vAC8BKi8AOhBKhazBUc+aj5xQkBCt192OF/pAFgSM6wAjP/MbMv9puhGez4nJAUsFyg3Nn5u32vB8hnDLGoBbNdvMRgFYAVrycLJuQjQSlwBAQEKfV5+jL8AND+CAAQW0gbmriQGAIzEDAMCDgDlZh4+JSBLQrJCvUI5JF8oYDcoOSQJwj4KRT9EPnk+gj5xPnICikK9SkM8X8xPUGtOCy1sVTBrDG8gX+E0OxwJaJwKYyQsPR4nQqxCvSzMAsv9X8oPIC8KCQoAACN+nt9rOy5LGMmsya0JZsLMzQphQWAP5hCkEgCTjh5GQiYbqm06zjkKND9EPnFCQBwICx5NSG1cLS5a4rwTCn7uHixCQBxeCUsKDzRVREM4BTtEnC0KghwuQkAb9glUIyQZMTIBBo9i8F8KcmTKYAxgLiRvAERgGjoDHB9gtAcDbBFmT2BOEgIAZOhgFmCWYH5gtGBMYJJpFhgGtg/cVqq8WwtDF6wBvCzOwgMgFgEdBB8BegJtMDGWU4EBiwq5SBsA5SR0jwvLDqdN6wGcAoidUAVBYAD4AD4LATUXWHsMpg0lILuwSABQDTUAFhO4NVUC0wxLZhEcANlPBnYECx9bADIAtwKbKAsWcKwzOaAaAVwBhwn9A9ruEAarBksGugAey1aqWwq7YhOKCy1ADrwBvAEjA0hbKSkpIR8gIi0TJwciDY4AVQJvWJFKlgJvIA9ySAHUdRDPUiEaqrFN6wcSBU1gAPgAPgsBewAHJW0LiAymOTEuyLBXDgwAYL0MAGRKaFAiIhzAADIAtwKbKC08D88CkRh8ULxYyXRzjtilnA72mhU+G+0S2hIHDxwByAk7EJQGESwNNwwAPAC0zwEDAKUA4gCbizAAFQBcG8cvbXcrDsIRAzwlRNTiHR8MG34CfATCC6vxbQA4Oi4Opzkuz6IdB7wKABA7Ls8SGgB9rNsdD7wbSBzOoncfAT4qYB0C7KAJBE3z5R9mDL0M+wg9Cj8ABcELPgJMDbwIvQ09CT0KvS7PoisOvAaYAhwPjBriBBwLvBY8AKELPBC8BRihe90AO2wMPQACpwm9BRzR9QYFB2/LBnwAB7wSXBISvQECAOsCAAB1FVwHFswV/HAXvBg8AC68AuyovAAevAJWISuAAAG8AALkFT0VvCvso7zJqDwEAp8nTAACXADn3hm8CaVcD7/FAPUafAiiBQv/cQDfvKe8GNwavKOMeXMG/KmchAASvAcbDAADlABtvAcAC7ynPAIaPLsIopzLDvwHwak8AOF8L7dtvwNJAAPsABW8AAb8AAm8AGmMABq8AA68Axi8jmoV/AABXAAObAAuTB8ABrwAF7wIIgANSwC6vCcAA7wADpwq7ACyWwAcHAAbvAAB7AqiAAXHCxYV3AAHnABCvAEDAGm8AAt8AB28AAi8CaIABcsAbqAZ1gCSCCIABcsAATwAB9wAHZwIIgAGmwAJfAAbLABtHADmvIEACFwACDwAFLwAaPwJIgAGywDjjAAJPAuiDsX7YAAHPABunUBJAEgACrwFAAM8AAmuAzgABxwAGXwAAgym/AAKHAAKPAAJ/KfsBrwACRwAAwwAEDwBABQ8ABFsAA+MAA3sAA28ABkMBxYcABU8AG6cFrQBvAC7ABM8BABpLAsA4UwAAjwABFMAF3wFHAAG0QAYvB8BfClTADpGALAJBw4McwApK3EBpQYIXwJtJA0ACghwTG1gK4oggRVjLjcDogq1AALZABcC/ARvAXdzSFMVIgNQAhY/AS0GBHRHvnxTe0EAKgAyAvwAVAvcAHyRLQEsAHfmDhIzRwJLAFgGAAJRAQiLzQB5PAQhpgBbANcWAJZpOCCMAM5ssgDQ1RcJw3Z0HBlXHgrSAYmRrCNUVE5JEz3DivoAgB04QSos4RKYUABzASosMSlDGhADMVYE+MbvAExm3QBrAnICQBF7Osh4LzXWBhETIAUVCK6v/xPNACYAAQIbAIYAiQCONgDjALQA1QCdPQC7AKsApgChAOcAnwDTAJwA4AEBAPwAwAB6AFsAywDNAPwA1wDrAIkAogEqAOMA2ADVBAIIKzTT09PTtb/bzM/NQjEWAUsBVS5GAVMBYgFhAVQBRUpCRGcMAUwUBgkEMzcMBwAgDSQmKCs3OTk8PDw9Pg0/HVBQUFBSUlFSKFNUVlVVHFxgYF9hYCNlZ29ucXFxcXFxc3Nzc3Nzc3Nzc3N1dXZ1dFsAPesAQgCTAHEAKwBf8QCHAFAAUAAwAm/oAIT+8fEAXQCM6wCYAEgAWwBd+PipAH4AfgBiAE8AqgAdAK8AfAI5AjwA9QDgAPcA9wDhAPgA4gDiAOEA3wAoAnQBSgE5ATcBTQE3ATcBNwEyATEBMQExARUBURAAKgkBAEwYCxcEFhcPAIcAjwCfAEoAYxkCKgBvAGgAkAMOAyArAxpCP0gqAIoCSADAAlACnQC5Ao8CjwKPAo8CjwKPAoQCjwKPAo8CjwKPAo8CjgKOApECmQKQAo8CjwKNAo0CjQKNAosCjgJuAc0CkAKYAo8CjwKOF3oMAPcGA5gCWgIzGAFNETYC2xILLBQBRzgUTpIBdKU9AWJaAP4DOkgA/wCSKh4ZkGsAKmEAagAvAIoDlcyM8K+FWwa7LA/DEgKe1nUrCwQkWwGzAN5/gYB/gX+Cg4N/hIeFf4aJh4GIg4mDin+Lf4x/jYuOf49/kIORf5J/k3+Uf5WElomXg5h/AIMloQCEBDwEOQQ7BD4EPARCBD8EOgRABEIEQQQ9BD8EQgCkA4gAylIA0AINAPdbAPcBGgD3APUA9QD2APXVhSRmvwD3APUA9QD2APUdAIpbAPcAigEaAPcAigLtAPcAitWFJGa/HQD4WwEaAPcA9wD1APUA9gD1APgA9QD1APYA9dWFJGa/HQCKWwEaAPcAigD3AIoC7QD3AIrVhSRmvx0CRAE3AksBOgJMwgOfAu0Dn9WFJGa/HQCKWwEaA58AigOfAIoC7QOfAIrVhSRmvx0EMQCKBDIAigeOMm4hLQCKAT9vBCQA/gDHWwMAVVv/FDMDAIoDPtkASgMAigMAl2dBtv/TrfLzakaPh3aztmIuZQrR3ER2n5Yo+qNR2jK/aP/V04UK1njIJXLgkab9PjOxyJDVbIN3R/FZLoZVl2kYFQIZ7V6LpRqGDt9OdDohnJKp5yX/HLj0voPpLrneDaN11t5W3sSM4ALscgSw8fyWLVkKa/cNcQmjYOgTLZUgOLi2F05g4TR0RfgZ4PBdntxdV3qvdxQt8DeaMMgjJMgwUxYN3tUNpUNx21AvwADDAIa0+raTWaoBXmShAl5AThpMi282o+WzOKMlxjHj7a+DI6AM6VI9w+xyh3Eyg/1XvPmbqjeg2MGXugHt8wW03DQMRTd5iqqOhjLvyOCcKtViGwAHVLyl86KqvxVX7MxSW8HLq6KCrLpB8SspAOHO9IuOwCh9poLoMEha9CHCxlRAXJNDobducWjqhFHqCkzjTM2V9CHslwq4iU19IxqhIFZMve15lDTiMVZIPdADXGxTqzSTv0dDWyk1ht430yvaYCy9qY0MQ3cC5c1uw4mHcTGkMHTAGC99TkNXFAiLQgw9ZWhwKJjGCe+J5FIaMpYhhyUnEgfrF3zEtzn40DdgCIJUJfZ0mo3eXsDwneJ8AYCr7Vx2eHFnt2H6ZEyAHs9JoQ4Lzh5zBoGOGwAz37NOPuqSNmZf51hBEovtpm2T1wI79OBWDyvCFYkONqAKGVYgIL0F+uxTcMLSPtFbiNDbBPFgip8MGDmLLHbSyGXdCMO6f7teiW9EEmorZ+75KzanZwvUySgjoUQBTfHlOIerJs6Y9wLlgDw18AB1ne0tZRNgGjcrqHbtubSUooEpy4hWpDzTSrmvqw0H9AoXQLolMt9eOM+l9RitBB1OBnrdC1XL4yLFyXqZSgZhv7FnnDEXLUeffb4nVDqYTLY6X7gHVaK4ZZlepja2Oe6OhLDI/Ve5SQTCmJdH3HJeb14cw99XsBQAlDy5s5kil2sGezZA3tFok2IsNja7QuFgM30Hff3NGSsSVFYZLOcTBOvlPx8vLhjJrSI7xrNMA/BOzpBIJrdR1+v+zw4RZ7ry6aq4/tFfvPQxQCPDsXlcRvIZYl+E5g3kJ+zLMZon0yElBvEOQTh6SaAdIO6BwdqJqfvgU+e8Y65FQhdiHkZMVt9/39N2jGd26J6cNjq8cQIyp6RonRPgVn2fl89uRDcQ27GacaN0MPrcNyRlbUWelKfDfyrNVVGBG5sjd3jXzTx06ywyzuWn5jbvEfPPCTbpClkgEu9oPLKICxU5HuDe3jA1XnvU85IYYhaEtOU1YVWYhEFsa4/TQj3rHdsU2da2eVbF8YjSI0m619/8bLMZu3xildwqM7zf1cjn4Whx0PSYXcY5bR7wEQfGC7CTOXwZdmsdTO8q3uGm7Rh/RfCWwpzBHCAaVfjxgibL5vUeL0pH6bzDmI9yCXKC/okkmbc28OJvI87L/bjFzpq0DHepw4kT1Od+fL7cyuFaRgfaUWB2++TCFvz11J0leEtrGkpccfX9z2LY39sph4PBHCjNOOkd0ybUm+ZzS8GkFbqMpq8uiX2yHpa0jllTLfGTDBMYR6FT5FWLLDPMkYxt1Q0eyMvxJWztDjy0m6VvZPvamrFXjHmPpU6WxrZqH6WW//I37RwvqPQhPz8I3RPuXAk1C94ZprQWm9iGM/KgiGDO6SV9sjp+Jmk4TBajMNJ5zzWZ1k1jrteQQBp9C2dOvmbIeeEME8y573Q8TgGe+ZCzutM45gYLBzYm2LNvgq2kebAbMpHRDSyh6dQ27GbsAAdCqQVVXWC1C+zpwBM2Lr4eqtobmmu1vJEDlIQR1iN8CUWpztq50z7FFQBn3SKViX6wSqzVQCoYvAjByjeSa+h1PRnYWvBinTDB9cHt4eqDsPS4jcD3FwXJKT0RQsl8EvslI2SFaz2OtmYLFV8FwgvWroZ3fKmh7btewX9tfL2upXsrsqpLJzpzNGyNlnuZyetg7DIOxQTMBR7dqlrTlZ6FWi1g4j1NSjA2j1Yd7fzTH6k9LxCyUCneAKYCU581bnvKih6KJTeTeCX4Zhme/QIz7w2o+AdSgtLAkdrLS9nfweYEqrMLsrGGSWXtgWamAWp6+x6GM/Z8jNw3BqPNQ39hrzYLECn3tPvh/LqKbRSCiDGauDKBBj/kGbpnM1Bb/my8hv4NWStclkwjfl57y4oNDgw1JAG9VOti3QVVoSziMEsSdfEjaCPIDb7SgpLXykQsM+nbqbt97I0mIlzWv0uqFobLMAq8Rd9pszUBKxFhBPwOjf//gVOz2r7URJ2OnpviCXv9iz3a4X/YLBYbXoYwxBv/Kq0a5s4utQHzoTerJ7PmFW/no/ZAsid/hRIV82tD+Qabh5F1ssIM8Ri3chu0PuPD3sSJRMjDoxLAbwUbroiPAz/V52e8s3DIixxlO7OrvhMj3qfzA0kKxzwicr5wJmZwJxTXgrwYsqhRvpgC2Nfdyd+TYYxJSZgk+gk2g9KyHSlwQVAyPtWWgvVGyVBqsU2LpDlLNosSAtolC1uBKt5pQZLhAxTjeGCWIC/HVpagc5rRwkgpCHKEsjA8d+scp8aiMewwQBhp5dYTV5t/Nvl+HbDMu8F3S0psPyZb1bSnqlHPFUnMQeQqSqwDBT23fJO9gO3aVaa1icrXU0PKwlMM5K+iL3ATcVq2fFWKk0irCTF4LDVDG4gUpkyplq6efcZS+WDR1woApjD18x+2JQR9oOXzuA7uy4b+/91WsJd/tSd1QcAH8PVPXApieA37B7YXPhDPH1azP3PKR+HfHmOoDYLeuKsIi/ssSsdYs62qJo14Hw1P2N/6zpr8F3FTWmJ4ysAVcl84Iv/tl///Z8FaAWbBQbyMNDZjrZ2JwdRjtd1jOeNumSodFtr4/Zf45iRJf/8HSW+KIB/+GlKu8Rv1BPLr/4duoL+kFPRqrstEr41gfJupoJRf4hcYDWX93FOcfEBiIivxtjtV8g7mvOReiamYWKE7vfPbv3v2L9Kwq3cIDFGLyhyfOGuf/9vA5muH6Pjg7B4SUj2ydDXra9fSBI+DrsNHA6l51wfHssJb+11TfNk7B8OleUe3Y+ZmHboMFHdv7FFP2cfISFyeAQR0sk/Xv62HBTdW4HmnGSLFk/cqyWVVFJkdIIa+4hos3JRHcqLoRKM5h2Qtk1RZtzISMtlXTfTqIc77YsCCgQD0r61jtxskCctwJOtjE/pL8wC4LBD4AZFjh2wzzFCrT/PNqW0/DeBbkfMfzVm9yy06WiF+1mTdNNEAytVtohBKg3brWd2VQa+aF+cQ0mW5CvbwOlWCT07liX226PjiVLwFCRs/Ax2/u+ZNPjrNFIWIPf5GjHyUKp60OeXe9F01f7IaPf/SDTvyDAf7LSWWejtiZcsqtWZjrdn6A2MqBwnSeKhrZOlUMmgMionmiCIvXqKZfmhGZ1MwD3uMF4n9KJcfWLA3cL5pq48tm5NDYNh3SS/TKUtmFSlQR89MR4+kxcqJgpGbhm9gXneDELkyqAN5nitmIzTscKeJRXqd64RiaOALR2d295NWwbjHRNG2AU5oR9OS2oJg/5CY6BFPc1JvD2Mxdhp2/MZdI8dLePxiP4KRIp8VXmqfg+jqd/RNG7GNuq1U2SiI4735Bdc0MVFx6mH5UOWEa5HuhYykd6t4M1gYLVS8m1B+9bUqi5DziQq7qT8d94cxB6AB4WqMCOF/zPPtRSZUUaMSsvHOWxGASufywTX8ogy6HgUf9p+Z30wUEosl8qgmwm6o2AV6nO9HKQjRHpN6SUegI5pvR61RLnUJ1lqCtmfcsRQutEizVpAaPXN7xMp5UQ5OSZK6tniCK9CpyMd7LjR6+MxfoMEDPpWdf2p2m5N3KO4QMxf+V7vGdYjemQczQ+m2MGIkFNYDMf0Yop2eSx81sP36WHUczqEhKysp2iJSYAvfgJjinKwToPvRKb+HBi+7cJ96S5ngfLOXaHAFRLkulo4TnXTFO51gX0TCCo4ZUHdbpdgkMEwUZAPjh6M+hA8DzycbtxAgH3uD6i0nN1aTiIuQ4BYCE9dEHHwAmINU+4YEWx4EC3OZwFGfYZMPLScVlb+BAAJeARUh+gdWA3/gRqCrf1jecgqeFf1MdzrrP4SVlGm5mMihSP+zYYksAB7O+SBPwNQqSNMiLnkviY/klwgcRmvqtCqeWeA0gjuir4CMZqmw/ntP6M+l0pdN8/P9xI53aP7x/zavJbbKOz8VzO/nXxIr1tjparMnqd6iWdByHKw4lF4p/u57Yv07WeZPDnRl7wgmDVZZ44fQsjdYO/gmXQ+940PRGst8UMQApFC4OOV22e4N+lVOPyFLAOj4t8R3PFw/FjbSWy0ELuAFReNkee8ORcBOT2NPDcs7OfpUmzvn/F9Czk9o9naMyVYy/j8I5qVFmQDFcptBp65J/+sJA3w/j6y/eqUkKxTsf0CZjtNdRSBEmJ2tmfgmJbqpcsSagk+Ul9qdyV+NnqFBIJZFCB1XwPvWGDBOjVUmpWGHsWA5uDuMgLUNKZ4vlq5qfzY1LnRhCc/mh5/EX+hzuGdDy5aYYx4BAdwTTeZHcZpl3X0YyuxZFWNE6wFNppYs3LcFJePOyfKZ8KYb7dmRyvDOcORLPH0sytC6mH1US3JVj6paYM1GEr+CUmyHRnabHPqLlh6Kl0/BWd3ebziDfvpRQpPoR7N+LkUeYWtQ6Rn5v5+NtNeBPs2+DKDlzEVR5aYbTVPrZekJsZ9UC9qtVcP99thVIt1GREnN8zXP8mBfzS+wKYym8fcW6KqrE702Zco+hFQAEIR7qimo7dd7wO8B7R+QZPTuCWm1UAwblDTyURSbd85P4Pz+wBpQyGPeEpsEvxxIZkKsyfSOUcfE3UqzMFwZKYijb7sOkzpou+tC4bPXey5GI1GUAg9c3vLwIwAhcdPHRsYvpAfzkZHWY20vWxxJO0lvKfj6sG2g/pJ1vd/X2EBZkyEjLN4nUZOpOO7MewyHCrxQK8d5aF7rCeQlFX+XksK6l6z971BPuJqwdjj68ULOj9ZTDdOLopMdOLL0PFSS792SXE/EC9EDnIXZGYhr52aQb+9b2zEdBSnpkxAdBUkwJDqGCpZk/HkRidjdp0zKv/Cm52EenmfeKX6HkLUJgMbTTxxIZkIeL/6xuAaAAHbA7mONVduTHNX/UJj1nJEaI7f3HlUyiqKn7VfBE+bdb4HWln1HPJx001Ulq1tOxFf8WZEARvq5Da1+pE7fPVxLntGACz3nkoLsKcPdUqdCwwiyWkmXTd5+bv3j7HaReRt3ESn783Ew3SWsvkEjKtbocNksbrLmV+GVZn1+Uneo35MT1/4r8fngQX5/ptORfgmWfF6KSB/ssJmUSijXxQqUpzkANEkSkYgYj560OOjJr6uqckFuO15TRNgABEwNDjus1V3q2huLPYERMCLXUNmJJpbMrUQsSO7Qnxta55TvPWL6gWmMOvFknqETzqzFVO8SVkovEdYatypLGmDy9VWfgAc0KyIChiOhbd7UlbAeVLPZyEDp4POXKBwN/KP5pT6Cyqs6yaI00vXMn1ubk9OWT9Q/O2t/C25qlnO/zO0xcBzpMBCAB8vsdsh3U8fnPX1XlPEWfaYJxKVaTUgfCESWl4CCkIyjE6iQ5JFcwU6S4/IH0/Agacp8d5Gzq2+GzPnJ7+sqk40mfFQpKrDbAKwLlr3ONEati2k/ycLMSUu7V/7BBkDlNyXoN9tvqXCbbMc4SSQXgC/DBUY9QjtrCtQ+susEomCq8xcNJNNMWCH31GtlTw2BdCXkJBjT+/QNWlBWwQ5SWCh1LdQ99QVii/DyTxjSR6rmdap3l3L3aiplQpPYlrzNm9er88fXd2+ao+YdUNjtqmxiVxmyYPzJxl67OokDcTezEGqldkGgPbRdXA+fGcuZVkembZByo7J1dMnkGNjwwCny+FNcVcWvWYL9mg8oF7jACVWI3bA64EXpdM8bSIEVIAs5JJH+LHXgnCsgcMGPZyAAVBncvbLiexzg9YozcytjPXVlAbQAC7Tc4S0C8QN4LlAGjj4pQAVWrwkaDoUYGxxvkCWKRRHkdzJB5zpREleBDL1oDKEvAqmkDibVC4kTqF89YO6laUjgtJPebBfzr16tg4t10GmN1sJ5vezk2sUOq8blCn5mPZyT3ltaDcddKupQjqusNM9wtFVD0ABzv17fZDn7GPT1nkCtdcgYejcK1qOcTGtPxnCX1rErEjVWCnEJv5HaOAUjgpiKQjUKkQi64D5g2COgwas8FcgIl0Pw95H9dWxE3QG0VbMNffh6BPlAojLDf4es2/5Xfq7hw5NGcON2g8Qsy2UQm94KddKyy3kdJxWgpNaEc15xcylbLC3vnT26u8qS90qc2MU8LdOJc5VPF5KnSpXIhnj1eJJ/jszjZ01oR6JDFJRoeTPO/wh4IPFbdG9KljuSzeuI92p8JF/bpgDE8wG86/W2EBKgPrmzdLijxssQn8mM44ky/KLGOJcrSwXIpZa/Z3v7W6HCRk7ewds99LTsUW1LbeJytw8Q/BFZVZyfO9BUHOCe2suuEkO8DU4fLX0IQSQ2TdOkKXDtPf3sNV9tYhYFueuPRhfQlEEy+aYM/MCz7diDNmFSswYYlZZPmKr2Q5AxLsSVEqqBtn6hVl1BCFOFExnqnIsmyY/NA8jXnDaNzr7Zv3hu+I1Mf/PJjk0gALN2G8ABzdf9FNvWHvZHhv6xIoDCXf964MxG92vGZtx/LYU5PeZqgly8tT5tGeQGeJzMMsJc5p+a5Rn2PtEhiRzo/5Owjy1n0Lzx3ev8GHQmeWb8vagG6O5Qk5nrZuQTiKODI4UqL0LLAusS2Ve7j1Ivdxquu1BR9Rc4QkOiUPwQXJv6du2E8i5pDhVoQpUhyMWGUT2O2YODIhjAfI71gxep5r5zAY7GBUZpy51hAw0pcCCrhOmU8Wp6ujQTdZQsCjtq6SHX8QAMNiPCIIkoxhHEZPgsBcOlP4aErJZPhF7qvx6gHrn8hEwPwYbx8YmT/n7lbcmTip1v8kgsrIjFTAlvLY4Nuil0KDmgz3svYs0ZJ3O3Is/vSx4xpxF1e2VAtZE8dJxGYEIhCSuPvCjP54l/NSNDnwlKvAW8mG+AQkgp7a87Igh26uKMFGD0PoPHTSvoWxiHuk+su8XkQiHIjeYKl/RdcOHpxhQH3zHCNE3aARm83Bl6zGxU/vMltlVPQhubcqhW4RYkl6uXk5JdP/QpzaKFpw2M8zvysv2qj7xaQECuu2akM0Cssj/uB9+wDR7uA6XOnLNaoczalHoMj33eiiu+DRaFsUmlmUZuh9bjDY4INMNSSAivSh03uJvny4Gj+D+neudoa7iJi7c4VFlZ/J5gUR82308zSNAt/ZroBXDWw0fV3eVPAn3aX0mtJabF6RsUZmL+Ehn+wn51/4QipMjD+6y64t7bjL6bjENan2prQ4h7++hBJ9NXvX8CUocJqMC937IasLzm5K0qwXeFMAimMHkEIQIQI2LrQ9sLBfXuyp66zWvlsh74GPv7Xpabj993pRNNDuFud5oIcn/92isbADXdpRPbjmbCNOrwRbxGZx2XmYNGMiV5kjF4IKyxCBvKier9U4uVoheCdmk83rp5G0PihAm2fAtczI4b9BWqX+nrZTrJX5kSwQddi93NQrXG+Cl3eBGNkM77VBsMpEolhXex1MVvMkZN9fG59GGbciH11FEXaY1MxrArovaSjE/lUUqBg2cZBNmiWbvzCHCPJ4RVGFK2dTbObM1m+gJyEX53fa7u3+TZpm74mNEzWbkVL4vjNwfL9uzRCu1cgbrNx5Yv5dDruNrIOgwIk+UZWwJfdbu/WHul6PMmRflVCIzd7B37Pgm/Up/NuCiQW7RXyafevN3AL6ycciCc4ZPlTRzEu+aURGlUBOJbUEsheX7PPyrrhdUt5JAG12EEEZpY/N3Vhbl5uLAfT0CbC2XmpnryFkxZmBTs5prvEeuf0bn73i3O82WTiQtJWEPLsBXnQmdnKhB06NbbhLtlTZYJMxDMJpFeajSNRDB2v61BMUHqXggUwRJ19m6p5zl51v11q34T74lTXdJURuV6+bg2D6qpfGnLy7KGLuLZngobM4pIouz4+n0/UzFKxDgLM4h+fUwKZozQ9UGrHjcif51Ruonz7oIVZ56xWtZS8z7u5zay6J2LD4gCYh2RXoBRLDKsUlZ80R8kmoxlJiL8aZCy2wCAonnucFxCLT1HKoMhbPKt34D97EXPPh0joO93iJVF1Uruew61Qoy3ZUVNX9uIJDt9AQWKLLo+mSzmTibyLHq0D6hhzpvgUgI6ekyVEL3FD+Fi5R3A8MRHPXspN1VyKkfRlC+OGiNgPC4NREZpFETgVmdXrQ2TxChuS3aY+Ndc7CiYv5+CmzfiqeZrWIQJW/C4RvjbGUoJFf1K6ZdR2xL/bG4kVq1+I4jQWX+26YUijpp+lpN7o5c6ZodXJCF56UkFGsqz44sIg8jrdWvbjRCxi2Bk0iyM3a7ecAV93zB6h1Ei38c0s6+8nrbkopArccGP8vntQe1bFeEh2nJIFOHX/k3/UHb5PtKGpnzbkmnRETMX+9X/QduLZWw/feklW/kH/JnzToJe9Kgu9Hct1UGbH5BPCLo4OOtQnZonW0xnyCcdtKyPQ/sbLiSTYJdSx4sJqWLMnfn6fIqPB3WAgk00J+fCOkomPHqtS67pf0mFmKoItYZUlJu6BihSZ8qve8+/X+LX1MhQXF95AshfUleCtmdn6l6QFXzLg2sgLn1oyVFuZecv7fzsIHzoRlAGp0gwYDOn1S4qabWvB5xUaE+Svw4KmjWtxdnuQbI32dw87D4N95u8qQRJTSQg0wLxOLkxSrPMLEn1UIhNKjAa9VLs3WLaXGrtCIt8bKY2AQP/ZdyRU6zT/E8qP2ltyBE2CCZPgWgEYDoJJO4n92y61ylNaSFXKohJhLjkfvYWm592539sIpmBNLlDo1bExFBfmHJJ0lFEiC/fj8v42OoMC9Mo3whIoWvyHfq6Uacqq55mzFf/EGC+NP/gHjhd6urc6R0hES27VXux7UY8CGKPohplWIZtTrFSaPWslCWy78E22Pw8fvReSUZx/txqLtHrFqg1DY/Eus6Iq1heZdrdcqE0/c971Bz1HW/XNXHsXpUIbI4kHdOfCc6T5zHZzvzQJB0ggMFL6IGPAilU9bj/ASdPk6fNvNtZqPuwEDhMBtBnhCexo6D6VAGIOPvJPPV523Y8R8a9vCqZbswSZKzOT1291BsUbmUWehtbb1fdRX9hiJKXvwr1QX6GjnZMgyMvnwOo2Dr24amr7FqEAbVeJAjRNOceM2EQ1Mna9fInqPJ5mh5X8CzT1aDOv08An0blz0fF5Gq4mS2cwq5glwIOlY5nznE8X4j/UdZ3FJsVIXte1JH0A7iibuPfazStM5O/Vo3KXIpXBeGORV0M9XDXFvsYZUHGvFCUubWzTw248EHE0cpQM2zNg6rjavreq3NHCAWsoZ7wvVy7l5gvtKRmIj1MnvfWEm0yFnGcuOq192350a5WefpfKCcX3Sn+AgHU+qnpstNtddbdVebagJU390lq9ko4aI9rqdaWXYG8tv5O/ZQHSqDRYHC6zfH10l5z++opso7aOSaIczlQ13iAzXvLdEu0V7kwNUZ1c8Y8aq7SeIEe5p902FlNkW8DnwHyueHchbK8vVFJfmr9mz7P8nUSccl1ULaoWMRSI1ls32kvlK0h46h3J25Yd9AzfcJbp9qYF/SEt3H5j69mMdcsNxZcAzT/A89ov3tglTX54y/EwjMfuoDoxPwLJDm5I7q6F9Kp469yNy1zSxz0N4HbRRBj9xFFuogvBspv7DXUNIsGxTINEQfmctb42XImWAODgARNo7dfcTqFKq6aTfivmvunLmzP9f8yLsJvXD3JbcPcDGNriMAcjzeDTNr65t8YB5tsnFDFLa0Uwmd2OvUdkLMX9TsAUYUfooSv47sw5J88j7CpahRjjO3/UhOXjTS39W5YZAel2KTbQd1h7INOw9P23GW7GDAe4agIUFHP48MZr7ubq0efFmmtwYMyk7D0r1oeG/CGOODgb9Ur+JMHxkwzPbtCX2ZnENQuI0RN5SyTIZuoY4XS9Rd/tPe3vNAZGSHM/YYwqs9xkkENx0O+eC2YVW1cwOJ3ckE890nbQeHLKlW15L0P0W2VliyYrfNr0nrIYddoRyGaCtj4OYd2MT7ebApqZOAQIaSHJM4mphhfjNjtnjg6YRyx9qM2FT3xOiYIMqXPFWdzhSgFF8ItocqVV09CmIoO8k6U/oJB7++wSX/YksxfPXHyjSgAGZOj1aKEq9fSvXBqtp2wu8/FxEf5AxapAD06pPGuLVUYLdgEzHR8wqRGYEwiUO9MyYbgswstuLYhwYFpSVKOdzAihZ9LuHtD598EGhINU9xc9xhL+QgTLAstmPIvvm2xyRw/WTUPXkP3ZHu6GyPmj5xFH9/QGpkglKXRVUBgVmLOJx8uZO2AstxQYocZH2JhORlxawj66BAXUEs7K/gPxINIRAFyK3WLuyq9oBTF9wEbnmCot82WjIg7CPNwYK3KrZMrKAz5yFszg4wCVLJVnIL8+OYA0xRDH8cHQjQUiQ2i1mr/be32k/3Xej9sdf3iuGvZHyLFSJvPSqz/wltnxumTJYKZsrWXtx/Rmu39jjV9lFaJttfFn57/No2h/unsJmMHbrnZ8csxkp5HQ4xR1s0HH+t3Iz82a3iQWTUDGq/+l2W3TUYLE8zNdL8Y+5oXaIH/Y2UUcX67cXeN4WvENZjz4+8q7vjhowOI3rSjFhGZ6KzwmU7+5nFV+kGWAZ5z2UWvzq0TK0pk1hPwAN4jbw//1CApRvIaIjhSGhioY6TUmsToek9cF9XjJdHvLPcyyCV3lbR5Jiz/ts46ay2F820VjTXvllElwrGzKcNSyvQlWDXdwrUINXmHorAM3fE19ngLZmgeUaCJLsSITf2VcfAOuWwX7mTPdP8Zb/04KqRniufCpwnDUk7sP0RX6cud/sanFMagnzKInSRVey0YzlVSOtA/AjrofmSH6RYbJQ8b4NDeTkIGc6247+Mnbez/qhJ9GAv9fGNFercPnnrf285Qgs+UqThLRgflcAKFuqWhLzZaR4QqvSwa3xe0LPkqj9xJWub195r7NrrR0e78FR+0mRBNMPsraqZctAUVAJfYKehTDV1MGGQSeDsOK9J3sbUuKRIS/WilX/64CBms9jCZocBlsBSZaIAjWm/SUZ8daWL2a/cJFyUOFqE3Epc2RWbtjNyPwOGpWtzu32kUooUqsJud7IV4E8rstUBXM7tGEtBx99x60g1duhyvxeKJSl8s5E34HTMmADT0836aEdg5Dv9rVyCz8i2REOmiz6wtIVFN0HsjAoN37SrY0bV1Ms8CRUILhvZvvRaDzoVCaSI0u8EPuTe4b7OPowgRGODl22UBBmHSTUY8e4DyL+Bc7bngo+2T8HtNvzyATSL5iJZgFPKpmUyZv54vVL90+/RQGATUmNKnrIvcJMYON9fl83naW5sf6hRkbbTC9RUEE6XADwjgA46wWfUQ+QWZl0J4PVTWAln/YfAz/SV3q3J9+yCYDleruoN5uoc/wT2f4YONGTb6zTGq3V+3JqzmCOjwebKln+fExVLN7sqtqfMnsKVXWbb2Ai5m3D/fCTgX7oKYzTZvj+m28XnDqPbXuP4MyWdmPezcesdrh7rCzA7BWdObiuyDEKjjzBbQ0qnuwjliz+b+j7aPMKlkXyIznV3tGzAfYwIbzGGt098oh4eq3ruDjdgHtjxfFCjHrjjRbHajoz/YOY4raojPFQ910GIlBV7hq47UDgpyajBxQUmD8NctiLV1rTSLAEsQDLTeRKcmPBMVMFF0SPBBhZ5oXoxtD3lMhuAQXmA+57OcciczVW9e9zwSIAHS+FJmvfXMJGF1dMBsIUMaPjvgaVqUc3p32qVCMQYFEiRLzlVSOGMCmv/HJIxAHe3mL/XnoZ1IkWLeRZfgyByjnDbbeRK5KL7bYHSVJZ9UFq+yCiNKeRUaYjgbC3hVUvfJAhy/QNl/JqLKVvGMk9ZcfyGidNeo/VTxK9vUpodzfQI9Z2eAre4nmrkzgxKSnT5IJ1D69oHuUS5hp7pK9IAWuNrAOtOH0mAuwCrY8mXAtVXUeaNK3OXr6PRvmWg4VQqFSy+a1GZfFYgdsJELG8N0kvqmzvwZ02Plf5fH9QTy6br0oY/IDsEA+GBf9pEVWCIuBCjsup3LDSDqI+5+0IKSUFr7A96A2f0FbcU9fqljdqvsd8sG55KcKloHIFZem2Wb6pCLXybnVSB0sjCXzdS8IKvE");
var FENCED = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]);
var NSM_MAX = 4;
function hex_cp(cp) {
  return cp.toString(16).toUpperCase().padStart(2, "0");
}
function quote_cp(cp) {
  return `{${hex_cp(cp)}}`;
}
function explode_cp(s) {
  let cps = [];
  for (let pos = 0, len = s.length; pos < len; ) {
    let cp = s.codePointAt(pos);
    pos += cp < 65536 ? 1 : 2;
    cps.push(cp);
  }
  return cps;
}
function str_from_cps(cps) {
  const chunk = 4096;
  let len = cps.length;
  if (len < chunk)
    return String.fromCodePoint(...cps);
  let buf = [];
  for (let i = 0; i < len; ) {
    buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
  }
  return buf.join("");
}
var r = read_compressed_payload("AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g");
function unpack_cc(packed) {
  return packed >> 24 & 255;
}
function unpack_cp(packed) {
  return packed & 16777215;
}
var SHIFTED_RANK = new Map(read_sorted_arrays(r).flatMap((v, i) => v.map((x) => [x, i + 1 << 24])));
var EXCLUSIONS = new Set(read_sorted(r));
var DECOMP = /* @__PURE__ */ new Map();
var RECOMP = /* @__PURE__ */ new Map();
for (let [cp, cps] of read_mapped(r)) {
  if (!EXCLUSIONS.has(cp) && cps.length == 2) {
    let [a, b2] = cps;
    let bucket = RECOMP.get(a);
    if (!bucket) {
      bucket = /* @__PURE__ */ new Map();
      RECOMP.set(a, bucket);
    }
    bucket.set(b2, cp);
  }
  DECOMP.set(cp, cps.reverse());
}
var S0 = 44032;
var L0 = 4352;
var V0 = 4449;
var T0 = 4519;
var L_COUNT = 19;
var V_COUNT = 21;
var T_COUNT = 28;
var N_COUNT = V_COUNT * T_COUNT;
var S_COUNT = L_COUNT * N_COUNT;
var S1 = S0 + S_COUNT;
var L1 = L0 + L_COUNT;
var V1 = V0 + V_COUNT;
var T1 = T0 + T_COUNT;
function is_hangul(cp) {
  return cp >= S0 && cp < S1;
}
function compose_pair(a, b2) {
  if (a >= L0 && a < L1 && b2 >= V0 && b2 < V1) {
    return S0 + (a - L0) * N_COUNT + (b2 - V0) * T_COUNT;
  } else if (is_hangul(a) && b2 > T0 && b2 < T1 && (a - S0) % T_COUNT == 0) {
    return a + (b2 - T0);
  } else {
    let recomp = RECOMP.get(a);
    if (recomp) {
      recomp = recomp.get(b2);
      if (recomp) {
        return recomp;
      }
    }
    return -1;
  }
}
function decomposed(cps) {
  let ret = [];
  let buf = [];
  let check_order = false;
  function add2(cp) {
    let cc = SHIFTED_RANK.get(cp);
    if (cc) {
      check_order = true;
      cp |= cc;
    }
    ret.push(cp);
  }
  for (let cp of cps) {
    while (true) {
      if (cp < 128) {
        ret.push(cp);
      } else if (is_hangul(cp)) {
        let s_index = cp - S0;
        let l_index = s_index / N_COUNT | 0;
        let v_index = s_index % N_COUNT / T_COUNT | 0;
        let t_index = s_index % T_COUNT;
        add2(L0 + l_index);
        add2(V0 + v_index);
        if (t_index > 0)
          add2(T0 + t_index);
      } else {
        let mapped = DECOMP.get(cp);
        if (mapped) {
          buf.push(...mapped);
        } else {
          add2(cp);
        }
      }
      if (!buf.length)
        break;
      cp = buf.pop();
    }
  }
  if (check_order && ret.length > 1) {
    let prev_cc = unpack_cc(ret[0]);
    for (let i = 1; i < ret.length; i++) {
      let cc = unpack_cc(ret[i]);
      if (cc == 0 || prev_cc <= cc) {
        prev_cc = cc;
        continue;
      }
      let j = i - 1;
      while (true) {
        let tmp = ret[j + 1];
        ret[j + 1] = ret[j];
        ret[j] = tmp;
        if (!j)
          break;
        prev_cc = unpack_cc(ret[--j]);
        if (prev_cc <= cc)
          break;
      }
      prev_cc = unpack_cc(ret[i]);
    }
  }
  return ret;
}
function composed_from_decomposed(v) {
  let ret = [];
  let stack = [];
  let prev_cp = -1;
  let prev_cc = 0;
  for (let packed of v) {
    let cc = unpack_cc(packed);
    let cp = unpack_cp(packed);
    if (prev_cp == -1) {
      if (cc == 0) {
        prev_cp = cp;
      } else {
        ret.push(cp);
      }
    } else if (prev_cc > 0 && prev_cc >= cc) {
      if (cc == 0) {
        ret.push(prev_cp, ...stack);
        stack.length = 0;
        prev_cp = cp;
      } else {
        stack.push(cp);
      }
      prev_cc = cc;
    } else {
      let composed = compose_pair(prev_cp, cp);
      if (composed >= 0) {
        prev_cp = composed;
      } else if (prev_cc == 0 && cc == 0) {
        ret.push(prev_cp);
        prev_cp = cp;
      } else {
        stack.push(cp);
        prev_cc = cc;
      }
    }
  }
  if (prev_cp >= 0) {
    ret.push(prev_cp, ...stack);
  }
  return ret;
}
function nfd(cps) {
  return decomposed(cps).map(unpack_cp);
}
function nfc(cps) {
  return composed_from_decomposed(decomposed(cps));
}
var FE0F = 65039;
var STOP_CH = ".";
var UNIQUE_PH = 1;
var HYPHEN = 45;
function read_set() {
  return new Set(read_sorted(r$1));
}
var MAPPED = new Map(read_mapped(r$1));
var IGNORED = read_set();
var CM = read_set();
var NSM = new Set(read_sorted(r$1).map(function(i) {
  return this[i];
}, [...CM]));
var ESCAPE = read_set();
var NFC_CHECK = read_set();
var CHUNKS = read_sorted_arrays(r$1);
function read_chunked() {
  return new Set([read_sorted(r$1).map((i) => CHUNKS[i]), read_sorted(r$1)].flat(2));
}
var UNRESTRICTED = r$1();
var GROUPS = read_array_while((i) => {
  let N3 = read_array_while(r$1).map((x) => x + 96);
  if (N3.length) {
    let R = i >= UNRESTRICTED;
    N3[0] -= 32;
    N3 = str_from_cps(N3);
    if (R)
      N3 = `Restricted[${N3}]`;
    let P = read_chunked();
    let Q = read_chunked();
    let V = [...P, ...Q].sort((a, b2) => a - b2);
    let M = !r$1();
    return { N: N3, P, M, R, V: new Set(V) };
  }
});
var WHOLE_VALID = read_set();
var WHOLE_MAP = /* @__PURE__ */ new Map();
[...WHOLE_VALID, ...read_set()].sort((a, b2) => a - b2).map((cp, i, v) => {
  let d = r$1();
  let w = v[i] = d ? v[i - d] : { V: [], M: /* @__PURE__ */ new Map() };
  w.V.push(cp);
  if (!WHOLE_VALID.has(cp)) {
    WHOLE_MAP.set(cp, w);
  }
});
for (let { V, M } of new Set(WHOLE_MAP.values())) {
  let recs = [];
  for (let cp of V) {
    let gs = GROUPS.filter((g) => g.V.has(cp));
    let rec = recs.find(({ G }) => gs.some((g) => G.has(g)));
    if (!rec) {
      rec = { G: /* @__PURE__ */ new Set(), V: [] };
      recs.push(rec);
    }
    rec.V.push(cp);
    gs.forEach((g) => rec.G.add(g));
  }
  let union2 = recs.flatMap(({ G }) => [...G]);
  for (let { G, V: V2 } of recs) {
    let complement = new Set(union2.filter((g) => !G.has(g)));
    for (let cp of V2) {
      M.set(cp, complement);
    }
  }
}
var union = /* @__PURE__ */ new Set();
var multi = /* @__PURE__ */ new Set();
for (let g of GROUPS) {
  for (let cp of g.V) {
    (union.has(cp) ? multi : union).add(cp);
  }
}
for (let cp of union) {
  if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
    WHOLE_MAP.set(cp, UNIQUE_PH);
  }
}
var VALID = /* @__PURE__ */ new Set([...union, ...nfd(union)]);
var EMOJI_SORTED = read_sorted(r$1);
var EMOJI_ROOT = read_emoji_trie([]);
function read_emoji_trie(cps) {
  let B = read_array_while(() => {
    let keys = read_sorted(r$1).map((i) => EMOJI_SORTED[i]);
    if (keys.length)
      return read_emoji_trie(keys);
  }).sort((a, b2) => b2.Q.size - a.Q.size);
  let temp = r$1();
  let V = temp % 3;
  temp = temp / 3 | 0;
  let F = temp & 1;
  temp >>= 1;
  let S2 = temp & 1;
  let C = temp & 2;
  return { B, V, F, S: S2, C, Q: new Set(cps) };
}
var Emoji = class extends Array {
  get is_emoji() {
    return true;
  }
};
function safe_str_from_cps(cps, quoter = quote_cp) {
  let buf = [];
  if (is_combining_mark(cps[0]))
    buf.push("◌");
  let prev = 0;
  let n2 = cps.length;
  for (let i = 0; i < n2; i++) {
    let cp = cps[i];
    if (should_escape(cp)) {
      buf.push(str_from_cps(cps.slice(prev, i)));
      buf.push(quoter(cp));
      prev = i + 1;
    }
  }
  buf.push(str_from_cps(cps.slice(prev, n2)));
  return buf.join("");
}
function quoted_cp(cp) {
  return (should_escape(cp) ? "" : `${bidi_qq(safe_str_from_cps([cp]))} `) + quote_cp(cp);
}
function bidi_qq(s) {
  return `"${s}"‎`;
}
function check_label_extension(cps) {
  if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
    throw new Error("invalid label extension");
  }
}
function check_leading_underscore(cps) {
  const UNDERSCORE = 95;
  for (let i = cps.lastIndexOf(UNDERSCORE); i > 0; ) {
    if (cps[--i] !== UNDERSCORE) {
      throw new Error("underscore allowed only at start");
    }
  }
}
function check_fenced(cps) {
  let cp = cps[0];
  let prev = FENCED.get(cp);
  if (prev)
    throw error_placement(`leading ${prev}`);
  let n2 = cps.length;
  let last = -1;
  for (let i = 1; i < n2; i++) {
    cp = cps[i];
    let match = FENCED.get(cp);
    if (match) {
      if (last == i)
        throw error_placement(`${prev} + ${match}`);
      last = i + 1;
      prev = match;
    }
  }
  if (last == n2)
    throw error_placement(`trailing ${prev}`);
}
function is_combining_mark(cp) {
  return CM.has(cp);
}
function should_escape(cp) {
  return ESCAPE.has(cp);
}
function ens_normalize(name) {
  return flatten(ens_split(name));
}
function ens_split(name, preserve_emoji) {
  let offset = 0;
  return name.split(STOP_CH).map((label) => {
    let input = explode_cp(label);
    let info = {
      input,
      offset
      // codepoint, not substring!
    };
    offset += input.length + 1;
    let norm;
    try {
      let tokens = info.tokens = process(input, nfc);
      let token_count = tokens.length;
      let type;
      if (!token_count) {
        throw new Error(`empty label`);
      } else {
        let chars = tokens[0];
        let emoji = token_count > 1 || chars.is_emoji;
        if (!emoji && chars.every((cp) => cp < 128)) {
          norm = chars;
          check_leading_underscore(norm);
          check_label_extension(norm);
          type = "ASCII";
        } else {
          if (emoji) {
            info.emoji = true;
            chars = tokens.flatMap((x) => x.is_emoji ? [] : x);
          }
          norm = tokens.flatMap((x) => !preserve_emoji && x.is_emoji ? filter_fe0f(x) : x);
          check_leading_underscore(norm);
          if (!chars.length) {
            type = "Emoji";
          } else {
            if (CM.has(norm[0]))
              throw error_placement("leading combining mark");
            for (let i = 1; i < token_count; i++) {
              let cps = tokens[i];
              if (!cps.is_emoji && CM.has(cps[0])) {
                throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i - 1])} + ${safe_str_from_cps([cps[0]])}"`);
              }
            }
            check_fenced(norm);
            let unique = [...new Set(chars)];
            let [g] = determine_group(unique);
            check_group(g, chars);
            check_whole(g, unique);
            type = g.N;
          }
        }
      }
      info.type = type;
    } catch (err) {
      info.error = err;
    }
    info.output = norm;
    return info;
  });
}
function check_whole(group, unique) {
  let maker;
  let shared = [];
  for (let cp of unique) {
    let whole = WHOLE_MAP.get(cp);
    if (whole === UNIQUE_PH)
      return;
    if (whole) {
      let set = whole.M.get(cp);
      maker = maker ? maker.filter((g) => set.has(g)) : [...set];
      if (!maker.length)
        return;
    } else {
      shared.push(cp);
    }
  }
  if (maker) {
    for (let g of maker) {
      if (shared.every((cp) => g.V.has(cp))) {
        throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
      }
    }
  }
}
function determine_group(unique) {
  let groups = GROUPS;
  for (let cp of unique) {
    let gs = groups.filter((g) => g.V.has(cp));
    if (!gs.length) {
      if (groups === GROUPS) {
        throw error_disallowed(cp);
      } else {
        throw error_group_member(groups[0], cp);
      }
    }
    groups = gs;
    if (gs.length == 1)
      break;
  }
  return groups;
}
function flatten(split2) {
  return split2.map(({ input, error, output: output2 }) => {
    if (error) {
      let msg = error.message;
      throw new Error(split2.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input))}: ${msg}`);
    }
    return str_from_cps(output2);
  }).join(STOP_CH);
}
function error_disallowed(cp) {
  return new Error(`disallowed character: ${quoted_cp(cp)}`);
}
function error_group_member(g, cp) {
  let quoted = quoted_cp(cp);
  let gg = GROUPS.find((g2) => g2.P.has(cp));
  if (gg) {
    quoted = `${gg.N} ${quoted}`;
  }
  return new Error(`illegal mixture: ${g.N} + ${quoted}`);
}
function error_placement(where) {
  return new Error(`illegal placement: ${where}`);
}
function check_group(g, cps) {
  let { V, M } = g;
  for (let cp of cps) {
    if (!V.has(cp)) {
      throw error_group_member(g, cp);
    }
  }
  if (M) {
    let decomposed2 = nfd(cps);
    for (let i = 1, e = decomposed2.length; i < e; i++) {
      if (NSM.has(decomposed2[i])) {
        let j = i + 1;
        for (let cp; j < e && NSM.has(cp = decomposed2[j]); j++) {
          for (let k = i; k < j; k++) {
            if (decomposed2[k] == cp) {
              throw new Error(`non-spacing marks: repeated ${quoted_cp(cp)}`);
            }
          }
        }
        if (j - i > NSM_MAX) {
          throw new Error(`non-spacing marks: too many ${bidi_qq(safe_str_from_cps(decomposed2.slice(i - 1, j)))} (${j - i}/${NSM_MAX})`);
        }
        i = j;
      }
    }
  }
}
function process(input, nf) {
  let ret = [];
  let chars = [];
  input = input.slice().reverse();
  while (input.length) {
    let emoji = consume_emoji_reversed(input);
    if (emoji) {
      if (chars.length) {
        ret.push(nf(chars));
        chars = [];
      }
      ret.push(emoji);
    } else {
      let cp = input.pop();
      if (VALID.has(cp)) {
        chars.push(cp);
      } else {
        let cps = MAPPED.get(cp);
        if (cps) {
          chars.push(...cps);
        } else if (!IGNORED.has(cp)) {
          throw error_disallowed(cp);
        }
      }
    }
  }
  if (chars.length) {
    ret.push(nf(chars));
  }
  return ret;
}
function filter_fe0f(cps) {
  return cps.filter((cp) => cp != FE0F);
}
function consume_emoji_reversed(cps, eaten) {
  let node = EMOJI_ROOT;
  let emoji;
  let saved;
  let stack = [];
  let pos = cps.length;
  if (eaten)
    eaten.length = 0;
  while (pos) {
    let cp = cps[--pos];
    node = node.B.find((x) => x.Q.has(cp));
    if (!node)
      break;
    if (node.S) {
      saved = cp;
    } else if (node.C) {
      if (cp === saved)
        break;
    }
    stack.push(cp);
    if (node.F) {
      stack.push(FE0F);
      if (pos > 0 && cps[pos - 1] == FE0F)
        pos--;
    }
    if (node.V) {
      emoji = conform_emoji_copy(stack, node);
      if (eaten)
        eaten.push(...cps.slice(pos).reverse());
      cps.length = pos;
    }
  }
  return emoji;
}
function conform_emoji_copy(cps, node) {
  let copy4 = Emoji.from(cps);
  if (node.V == 2)
    copy4.splice(1, 1);
  return copy4;
}

// node_modules/ethers/lib.esm/hash/namehash.js
var Zeros2 = new Uint8Array(32);
Zeros2.fill(0);
function checkComponent(comp) {
  assertArgument(comp.length !== 0, "invalid ENS name; empty component", "comp", comp);
  return comp;
}
function ensNameSplit(name) {
  const bytes2 = toUtf8Bytes(ensNormalize(name));
  const comps = [];
  if (name.length === 0) {
    return comps;
  }
  let last = 0;
  for (let i = 0; i < bytes2.length; i++) {
    const d = bytes2[i];
    if (d === 46) {
      comps.push(checkComponent(bytes2.slice(last, i)));
      last = i + 1;
    }
  }
  assertArgument(last < bytes2.length, "invalid ENS name; empty component", "name", name);
  comps.push(checkComponent(bytes2.slice(last)));
  return comps;
}
function ensNormalize(name) {
  try {
    return ens_normalize(name);
  } catch (error) {
    assertArgument(false, `invalid ENS name (${error.message})`, "name", name);
  }
}
function isValidName(name) {
  try {
    return ensNameSplit(name).length !== 0;
  } catch (error) {
  }
  return false;
}
function namehash(name) {
  assertArgument(typeof name === "string", "invalid ENS name; not a string", "name", name);
  let result = Zeros2;
  const comps = ensNameSplit(name);
  while (comps.length) {
    result = keccak256(concat([result, keccak256(comps.pop())]));
  }
  return hexlify(result);
}
function dnsEncode(name) {
  return hexlify(concat(ensNameSplit(name).map((comp) => {
    if (comp.length > 63) {
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    }
    const bytes2 = new Uint8Array(comp.length + 1);
    bytes2.set(comp, 1);
    bytes2[0] = bytes2.length - 1;
    return bytes2;
  }))) + "00";
}

// node_modules/ethers/lib.esm/transaction/accesslist.js
function accessSetify(addr, storageKeys) {
  return {
    address: getAddress(addr),
    storageKeys: storageKeys.map((storageKey, index) => {
      assertArgument(isHexString(storageKey, 32), "invalid slot", `storageKeys[${index}]`, storageKey);
      return storageKey.toLowerCase();
    })
  };
}
function accessListify(value) {
  if (Array.isArray(value)) {
    return value.map((set, index) => {
      if (Array.isArray(set)) {
        assertArgument(set.length === 2, "invalid slot set", `value[${index}]`, set);
        return accessSetify(set[0], set[1]);
      }
      assertArgument(set != null && typeof set === "object", "invalid address-slot set", "value", value);
      return accessSetify(set.address, set.storageKeys);
    });
  }
  assertArgument(value != null && typeof value === "object", "invalid access list", "value", value);
  const result = Object.keys(value).map((addr) => {
    const storageKeys = value[addr].reduce((accum, storageKey) => {
      accum[storageKey] = true;
      return accum;
    }, {});
    return accessSetify(addr, Object.keys(storageKeys).sort());
  });
  result.sort((a, b2) => a.address.localeCompare(b2.address));
  return result;
}

// node_modules/ethers/lib.esm/transaction/address.js
function computeAddress(key) {
  let pubkey;
  if (typeof key === "string") {
    pubkey = SigningKey.computePublicKey(key, false);
  } else {
    pubkey = key.publicKey;
  }
  return getAddress(keccak256("0x" + pubkey.substring(4)).substring(26));
}
function recoverAddress(digest, signature) {
  return computeAddress(SigningKey.recoverPublicKey(digest, signature));
}

// node_modules/ethers/lib.esm/transaction/transaction.js
var BN_07 = BigInt(0);
var BN_22 = BigInt(2);
var BN_272 = BigInt(27);
var BN_282 = BigInt(28);
var BN_352 = BigInt(35);
var BN_MAX_UINT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function handleAddress(value) {
  if (value === "0x") {
    return null;
  }
  return getAddress(value);
}
function handleAccessList(value, param) {
  try {
    return accessListify(value);
  } catch (error) {
    assertArgument(false, error.message, param, value);
  }
}
function handleNumber(_value2, param) {
  if (_value2 === "0x") {
    return 0;
  }
  return getNumber(_value2, param);
}
function handleUint(_value2, param) {
  if (_value2 === "0x") {
    return BN_07;
  }
  const value = getBigInt(_value2, param);
  assertArgument(value <= BN_MAX_UINT, "value exceeds uint size", param, value);
  return value;
}
function formatNumber(_value2, name) {
  const value = getBigInt(_value2, "value");
  const result = toBeArray(value);
  assertArgument(result.length <= 32, `value too large`, `tx.${name}`, value);
  return result;
}
function formatAccessList(value) {
  return accessListify(value).map((set) => [set.address, set.storageKeys]);
}
function _parseLegacy(data) {
  const fields = decodeRlp(data);
  assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 6), "invalid field count for legacy transaction", "data", data);
  const tx = {
    type: 0,
    nonce: handleNumber(fields[0], "nonce"),
    gasPrice: handleUint(fields[1], "gasPrice"),
    gasLimit: handleUint(fields[2], "gasLimit"),
    to: handleAddress(fields[3]),
    value: handleUint(fields[4], "value"),
    data: hexlify(fields[5]),
    chainId: BN_07
  };
  if (fields.length === 6) {
    return tx;
  }
  const v = handleUint(fields[6], "v");
  const r2 = handleUint(fields[7], "r");
  const s = handleUint(fields[8], "s");
  if (r2 === BN_07 && s === BN_07) {
    tx.chainId = v;
  } else {
    let chainId = (v - BN_352) / BN_22;
    if (chainId < BN_07) {
      chainId = BN_07;
    }
    tx.chainId = chainId;
    assertArgument(chainId !== BN_07 || (v === BN_272 || v === BN_282), "non-canonical legacy v", "v", fields[6]);
    tx.signature = Signature2.from({
      r: zeroPadValue(fields[7], 32),
      s: zeroPadValue(fields[8], 32),
      v
    });
    tx.hash = keccak256(data);
  }
  return tx;
}
function _serializeLegacy(tx, sig) {
  const fields = [
    formatNumber(tx.nonce || 0, "nonce"),
    formatNumber(tx.gasPrice || 0, "gasPrice"),
    formatNumber(tx.gasLimit || 0, "gasLimit"),
    tx.to != null ? getAddress(tx.to) : "0x",
    formatNumber(tx.value || 0, "value"),
    tx.data || "0x"
  ];
  let chainId = BN_07;
  if (tx.chainId != BN_07) {
    chainId = getBigInt(tx.chainId, "tx.chainId");
    assertArgument(!sig || sig.networkV == null || sig.legacyChainId === chainId, "tx.chainId/sig.v mismatch", "sig", sig);
  } else if (tx.signature) {
    const legacy = tx.signature.legacyChainId;
    if (legacy != null) {
      chainId = legacy;
    }
  }
  if (!sig) {
    if (chainId !== BN_07) {
      fields.push(toBeArray(chainId));
      fields.push("0x");
      fields.push("0x");
    }
    return encodeRlp(fields);
  }
  let v = BigInt(27 + sig.yParity);
  if (chainId !== BN_07) {
    v = Signature2.getChainIdV(chainId, sig.v);
  } else if (BigInt(sig.v) !== v) {
    assertArgument(false, "tx.chainId/sig.v mismatch", "sig", sig);
  }
  fields.push(toBeArray(v));
  fields.push(toBeArray(sig.r));
  fields.push(toBeArray(sig.s));
  return encodeRlp(fields);
}
function _parseEipSignature(tx, fields) {
  let yParity;
  try {
    yParity = handleNumber(fields[0], "yParity");
    if (yParity !== 0 && yParity !== 1) {
      throw new Error("bad yParity");
    }
  } catch (error) {
    assertArgument(false, "invalid yParity", "yParity", fields[0]);
  }
  const r2 = zeroPadValue(fields[1], 32);
  const s = zeroPadValue(fields[2], 32);
  const signature = Signature2.from({ r: r2, s, yParity });
  tx.signature = signature;
}
function _parseEip1559(data) {
  const fields = decodeRlp(getBytes(data).slice(1));
  assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 12), "invalid field count for transaction type: 2", "data", hexlify(data));
  const maxPriorityFeePerGas = handleUint(fields[2], "maxPriorityFeePerGas");
  const maxFeePerGas = handleUint(fields[3], "maxFeePerGas");
  const tx = {
    type: 2,
    chainId: handleUint(fields[0], "chainId"),
    nonce: handleNumber(fields[1], "nonce"),
    maxPriorityFeePerGas,
    maxFeePerGas,
    gasPrice: null,
    gasLimit: handleUint(fields[4], "gasLimit"),
    to: handleAddress(fields[5]),
    value: handleUint(fields[6], "value"),
    data: hexlify(fields[7]),
    accessList: handleAccessList(fields[8], "accessList")
  };
  if (fields.length === 9) {
    return tx;
  }
  tx.hash = keccak256(data);
  _parseEipSignature(tx, fields.slice(9));
  return tx;
}
function _serializeEip1559(tx, sig) {
  const fields = [
    formatNumber(tx.chainId || 0, "chainId"),
    formatNumber(tx.nonce || 0, "nonce"),
    formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
    formatNumber(tx.gasLimit || 0, "gasLimit"),
    tx.to != null ? getAddress(tx.to) : "0x",
    formatNumber(tx.value || 0, "value"),
    tx.data || "0x",
    formatAccessList(tx.accessList || [])
  ];
  if (sig) {
    fields.push(formatNumber(sig.yParity, "yParity"));
    fields.push(toBeArray(sig.r));
    fields.push(toBeArray(sig.s));
  }
  return concat(["0x02", encodeRlp(fields)]);
}
function _parseEip2930(data) {
  const fields = decodeRlp(getBytes(data).slice(1));
  assertArgument(Array.isArray(fields) && (fields.length === 8 || fields.length === 11), "invalid field count for transaction type: 1", "data", hexlify(data));
  const tx = {
    type: 1,
    chainId: handleUint(fields[0], "chainId"),
    nonce: handleNumber(fields[1], "nonce"),
    gasPrice: handleUint(fields[2], "gasPrice"),
    gasLimit: handleUint(fields[3], "gasLimit"),
    to: handleAddress(fields[4]),
    value: handleUint(fields[5], "value"),
    data: hexlify(fields[6]),
    accessList: handleAccessList(fields[7], "accessList")
  };
  if (fields.length === 8) {
    return tx;
  }
  tx.hash = keccak256(data);
  _parseEipSignature(tx, fields.slice(8));
  return tx;
}
function _serializeEip2930(tx, sig) {
  const fields = [
    formatNumber(tx.chainId || 0, "chainId"),
    formatNumber(tx.nonce || 0, "nonce"),
    formatNumber(tx.gasPrice || 0, "gasPrice"),
    formatNumber(tx.gasLimit || 0, "gasLimit"),
    tx.to != null ? getAddress(tx.to) : "0x",
    formatNumber(tx.value || 0, "value"),
    tx.data || "0x",
    formatAccessList(tx.accessList || [])
  ];
  if (sig) {
    fields.push(formatNumber(sig.yParity, "recoveryParam"));
    fields.push(toBeArray(sig.r));
    fields.push(toBeArray(sig.s));
  }
  return concat(["0x01", encodeRlp(fields)]);
}
var _type, _to, _data3, _nonce, _gasLimit, _gasPrice, _maxPriorityFeePerGas, _maxFeePerGas, _value, _chainId, _sig, _accessList;
var _Transaction = class {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    __privateAdd(this, _type, void 0);
    __privateAdd(this, _to, void 0);
    __privateAdd(this, _data3, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateAdd(this, _gasLimit, void 0);
    __privateAdd(this, _gasPrice, void 0);
    __privateAdd(this, _maxPriorityFeePerGas, void 0);
    __privateAdd(this, _maxFeePerGas, void 0);
    __privateAdd(this, _value, void 0);
    __privateAdd(this, _chainId, void 0);
    __privateAdd(this, _sig, void 0);
    __privateAdd(this, _accessList, void 0);
    __privateSet(this, _type, null);
    __privateSet(this, _to, null);
    __privateSet(this, _nonce, 0);
    __privateSet(this, _gasLimit, BigInt(0));
    __privateSet(this, _gasPrice, null);
    __privateSet(this, _maxPriorityFeePerGas, null);
    __privateSet(this, _maxFeePerGas, null);
    __privateSet(this, _data3, "0x");
    __privateSet(this, _value, BigInt(0));
    __privateSet(this, _chainId, BigInt(0));
    __privateSet(this, _sig, null);
    __privateSet(this, _accessList, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return __privateGet(this, _type);
  }
  set type(value) {
    switch (value) {
      case null:
        __privateSet(this, _type, null);
        break;
      case 0:
      case "legacy":
        __privateSet(this, _type, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        __privateSet(this, _type, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        __privateSet(this, _type, 2);
        break;
      default:
        assertArgument(false, "unsupported transaction type", "type", value);
    }
  }
  /**
   *  The name of the transaction type.
   */
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
    }
    return null;
  }
  /**
   *  The ``to`` address for the transaction or ``null`` if the
   *  transaction is an ``init`` transaction.
   */
  get to() {
    return __privateGet(this, _to);
  }
  set to(value) {
    __privateSet(this, _to, value == null ? null : getAddress(value));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return __privateGet(this, _nonce);
  }
  set nonce(value) {
    __privateSet(this, _nonce, getNumber(value, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return __privateGet(this, _gasLimit);
  }
  set gasLimit(value) {
    __privateSet(this, _gasLimit, getBigInt(value));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const value = __privateGet(this, _gasPrice);
    if (value == null && (this.type === 0 || this.type === 1)) {
      return BN_07;
    }
    return value;
  }
  set gasPrice(value) {
    __privateSet(this, _gasPrice, value == null ? null : getBigInt(value, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const value = __privateGet(this, _maxPriorityFeePerGas);
    if (value == null) {
      if (this.type === 2) {
        return BN_07;
      }
      return null;
    }
    return value;
  }
  set maxPriorityFeePerGas(value) {
    __privateSet(this, _maxPriorityFeePerGas, value == null ? null : getBigInt(value, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const value = __privateGet(this, _maxFeePerGas);
    if (value == null) {
      if (this.type === 2) {
        return BN_07;
      }
      return null;
    }
    return value;
  }
  set maxFeePerGas(value) {
    __privateSet(this, _maxFeePerGas, value == null ? null : getBigInt(value, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return __privateGet(this, _data3);
  }
  set data(value) {
    __privateSet(this, _data3, hexlify(value));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return __privateGet(this, _value);
  }
  set value(value) {
    __privateSet(this, _value, getBigInt(value, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return __privateGet(this, _chainId);
  }
  set chainId(value) {
    __privateSet(this, _chainId, getBigInt(value));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return __privateGet(this, _sig) || null;
  }
  set signature(value) {
    __privateSet(this, _sig, value == null ? null : Signature2.from(value));
  }
  /**
   *  The access list.
   *
   *  An access list permits discounted (but pre-paid) access to
   *  bytecode and state variable access within contract execution.
   */
  get accessList() {
    const value = __privateGet(this, _accessList) || null;
    if (value == null) {
      if (this.type === 1 || this.type === 2) {
        return [];
      }
      return null;
    }
    return value;
  }
  set accessList(value) {
    __privateSet(this, _accessList, value == null ? null : accessListify(value));
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    if (this.signature == null) {
      return null;
    }
    return keccak256(this.serialized);
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return keccak256(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    if (this.signature == null) {
      return null;
    }
    return recoverAddress(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    if (this.signature == null) {
      return null;
    }
    return SigningKey.recoverPublicKey(this.unsignedHash, this.signature);
  }
  /**
   *  Returns true if signed.
   *
   *  This provides a Type Guard that properties requiring a signed
   *  transaction are non-null.
   */
  isSigned() {
    return this.signature != null;
  }
  /**
   *  The serialized transaction.
   *
   *  This throws if the transaction is unsigned. For the pre-image,
   *  use [[unsignedSerialized]].
   */
  get serialized() {
    assert(this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
    switch (this.inferType()) {
      case 0:
        return _serializeLegacy(this, this.signature);
      case 1:
        return _serializeEip2930(this, this.signature);
      case 2:
        return _serializeEip1559(this, this.signature);
    }
    assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  }
  /**
   *  The transaction pre-image.
   *
   *  The hash of this is the digest which needs to be signed to
   *  authorize this transaction.
   */
  get unsignedSerialized() {
    switch (this.inferType()) {
      case 0:
        return _serializeLegacy(this);
      case 1:
        return _serializeEip2930(this);
      case 2:
        return _serializeEip1559(this);
    }
    assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".unsignedSerialized" });
  }
  /**
   *  Return the most "likely" type; currently the highest
   *  supported transaction type.
   */
  inferType() {
    return this.inferTypes().pop();
  }
  /**
   *  Validates the explicit properties and returns a list of compatible
   *  transaction types.
   */
  inferTypes() {
    const hasGasPrice = this.gasPrice != null;
    const hasFee = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null;
    const hasAccessList = this.accessList != null;
    if (this.maxFeePerGas != null && this.maxPriorityFeePerGas != null) {
      assert(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this });
    }
    assert(!hasFee || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this });
    assert(this.type !== 0 || !hasAccessList, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const types = [];
    if (this.type != null) {
      types.push(this.type);
    } else {
      if (hasFee) {
        types.push(2);
      } else if (hasGasPrice) {
        types.push(1);
        if (!hasAccessList) {
          types.push(0);
        }
      } else if (hasAccessList) {
        types.push(1);
        types.push(2);
      } else {
        types.push(0);
        types.push(1);
        types.push(2);
      }
    }
    types.sort();
    return types;
  }
  /**
   *  Returns true if this transaction is a legacy transaction (i.e.
   *  ``type === 0``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if this transaction is berlin hardform transaction (i.e.
   *  ``type === 1``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if this transaction is london hardform transaction (i.e.
   *  ``type === 2``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Create a copy of this transaciton.
   */
  clone() {
    return _Transaction.from(this);
  }
  /**
   *  Return a JSON-friendly object.
   */
  toJSON() {
    const s = (v) => {
      if (v == null) {
        return null;
      }
      return v.toString();
    };
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: s(this.gasLimit),
      gasPrice: s(this.gasPrice),
      maxPriorityFeePerGas: s(this.maxPriorityFeePerGas),
      maxFeePerGas: s(this.maxFeePerGas),
      value: s(this.value),
      chainId: s(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  /**
   *  Create a **Transaction** from a serialized transaction or a
   *  Transaction-like object.
   */
  static from(tx) {
    if (tx == null) {
      return new _Transaction();
    }
    if (typeof tx === "string") {
      const payload = getBytes(tx);
      if (payload[0] >= 127) {
        return _Transaction.from(_parseLegacy(payload));
      }
      switch (payload[0]) {
        case 1:
          return _Transaction.from(_parseEip2930(payload));
        case 2:
          return _Transaction.from(_parseEip1559(payload));
      }
      assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const result = new _Transaction();
    if (tx.type != null) {
      result.type = tx.type;
    }
    if (tx.to != null) {
      result.to = tx.to;
    }
    if (tx.nonce != null) {
      result.nonce = tx.nonce;
    }
    if (tx.gasLimit != null) {
      result.gasLimit = tx.gasLimit;
    }
    if (tx.gasPrice != null) {
      result.gasPrice = tx.gasPrice;
    }
    if (tx.maxPriorityFeePerGas != null) {
      result.maxPriorityFeePerGas = tx.maxPriorityFeePerGas;
    }
    if (tx.maxFeePerGas != null) {
      result.maxFeePerGas = tx.maxFeePerGas;
    }
    if (tx.data != null) {
      result.data = tx.data;
    }
    if (tx.value != null) {
      result.value = tx.value;
    }
    if (tx.chainId != null) {
      result.chainId = tx.chainId;
    }
    if (tx.signature != null) {
      result.signature = Signature2.from(tx.signature);
    }
    if (tx.accessList != null) {
      result.accessList = tx.accessList;
    }
    if (tx.hash != null) {
      assertArgument(result.isSigned(), "unsigned transaction cannot define hash", "tx", tx);
      assertArgument(result.hash === tx.hash, "hash mismatch", "tx", tx);
    }
    if (tx.from != null) {
      assertArgument(result.isSigned(), "unsigned transaction cannot define from", "tx", tx);
      assertArgument(result.from.toLowerCase() === (tx.from || "").toLowerCase(), "from mismatch", "tx", tx);
    }
    return result;
  }
};
var Transaction = _Transaction;
_type = new WeakMap();
_to = new WeakMap();
_data3 = new WeakMap();
_nonce = new WeakMap();
_gasLimit = new WeakMap();
_gasPrice = new WeakMap();
_maxPriorityFeePerGas = new WeakMap();
_maxFeePerGas = new WeakMap();
_value = new WeakMap();
_chainId = new WeakMap();
_sig = new WeakMap();
_accessList = new WeakMap();

// node_modules/ethers/lib.esm/hash/message.js
function hashMessage(message) {
  if (typeof message === "string") {
    message = toUtf8Bytes(message);
  }
  return keccak256(concat([
    toUtf8Bytes(MessagePrefix),
    toUtf8Bytes(String(message.length)),
    message
  ]));
}
function verifyMessage(message, sig) {
  const digest = hashMessage(message);
  return recoverAddress(digest, sig);
}

// node_modules/ethers/lib.esm/hash/solidity.js
var regexBytes = new RegExp("^bytes([0-9]+)$");
var regexNumber = new RegExp("^(u?int)([0-9]*)$");
var regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");
function _pack(type, value, isArray) {
  switch (type) {
    case "address":
      if (isArray) {
        return getBytes(zeroPadValue(value, 32));
      }
      return getBytes(getAddress(value));
    case "string":
      return toUtf8Bytes(value);
    case "bytes":
      return getBytes(value);
    case "bool":
      value = !!value ? "0x01" : "0x00";
      if (isArray) {
        return getBytes(zeroPadValue(value, 32));
      }
      return getBytes(value);
  }
  let match = type.match(regexNumber);
  if (match) {
    let signed2 = match[1] === "int";
    let size = parseInt(match[2] || "256");
    assertArgument((!match[2] || match[2] === String(size)) && size % 8 === 0 && size !== 0 && size <= 256, "invalid number type", "type", type);
    if (isArray) {
      size = 256;
    }
    if (signed2) {
      value = toTwos(value, size);
    }
    return getBytes(zeroPadValue(toBeArray(value), size / 8));
  }
  match = type.match(regexBytes);
  if (match) {
    const size = parseInt(match[1]);
    assertArgument(String(size) === match[1] && size !== 0 && size <= 32, "invalid bytes type", "type", type);
    assertArgument(dataLength(value) === size, `invalid value for ${type}`, "value", value);
    if (isArray) {
      return getBytes(zeroPadBytes(value, 32));
    }
    return value;
  }
  match = type.match(regexArray);
  if (match && Array.isArray(value)) {
    const baseType = match[1];
    const count = parseInt(match[2] || String(value.length));
    assertArgument(count === value.length, `invalid array length for ${type}`, "value", value);
    const result = [];
    value.forEach(function(value2) {
      result.push(_pack(baseType, value2, true));
    });
    return getBytes(concat(result));
  }
  assertArgument(false, "invalid type", "type", type);
}
function solidityPacked(types, values) {
  assertArgument(types.length === values.length, "wrong number of values; expected ${ types.length }", "values", values);
  const tight = [];
  types.forEach(function(type, index) {
    tight.push(_pack(type, values[index]));
  });
  return hexlify(concat(tight));
}
function solidityPackedKeccak256(types, values) {
  return keccak256(solidityPacked(types, values));
}
function solidityPackedSha256(types, values) {
  return sha2562(solidityPacked(types, values));
}

// node_modules/ethers/lib.esm/hash/typed-data.js
var padding = new Uint8Array(32);
padding.fill(0);
var BN__1 = BigInt(-1);
var BN_08 = BigInt(0);
var BN_15 = BigInt(1);
var BN_MAX_UINT2562 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function hexPadRight(value) {
  const bytes2 = getBytes(value);
  const padOffset = bytes2.length % 32;
  if (padOffset) {
    return concat([bytes2, padding.slice(padOffset)]);
  }
  return hexlify(bytes2);
}
var hexTrue = toBeHex(BN_15, 32);
var hexFalse = toBeHex(BN_08, 32);
var domainFieldTypes = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
};
var domainFieldNames = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function checkString(key) {
  return function(value) {
    assertArgument(typeof value === "string", `invalid domain value for ${JSON.stringify(key)}`, `domain.${key}`, value);
    return value;
  };
}
var domainChecks = {
  name: checkString("name"),
  version: checkString("version"),
  chainId: function(_value2) {
    const value = getBigInt(_value2, "domain.chainId");
    assertArgument(value >= 0, "invalid chain ID", "domain.chainId", _value2);
    if (Number.isSafeInteger(value)) {
      return Number(value);
    }
    return toQuantity(value);
  },
  verifyingContract: function(value) {
    try {
      return getAddress(value).toLowerCase();
    } catch (error) {
    }
    assertArgument(false, `invalid domain value "verifyingContract"`, "domain.verifyingContract", value);
  },
  salt: function(value) {
    const bytes2 = getBytes(value, "domain.salt");
    assertArgument(bytes2.length === 32, `invalid domain value "salt"`, "domain.salt", value);
    return hexlify(bytes2);
  }
};
function getBaseEncoder(type) {
  {
    const match = type.match(/^(u?)int(\d*)$/);
    if (match) {
      const signed2 = match[1] === "";
      const width = parseInt(match[2] || "256");
      assertArgument(width % 8 === 0 && width !== 0 && width <= 256 && (match[2] == null || match[2] === String(width)), "invalid numeric width", "type", type);
      const boundsUpper = mask(BN_MAX_UINT2562, signed2 ? width - 1 : width);
      const boundsLower = signed2 ? (boundsUpper + BN_15) * BN__1 : BN_08;
      return function(_value2) {
        const value = getBigInt(_value2, "value");
        assertArgument(value >= boundsLower && value <= boundsUpper, `value out-of-bounds for ${type}`, "value", value);
        return toBeHex(signed2 ? toTwos(value, 256) : value, 32);
      };
    }
  }
  {
    const match = type.match(/^bytes(\d+)$/);
    if (match) {
      const width = parseInt(match[1]);
      assertArgument(width !== 0 && width <= 32 && match[1] === String(width), "invalid bytes width", "type", type);
      return function(value) {
        const bytes2 = getBytes(value);
        assertArgument(bytes2.length === width, `invalid length for ${type}`, "value", value);
        return hexPadRight(value);
      };
    }
  }
  switch (type) {
    case "address":
      return function(value) {
        return zeroPadValue(getAddress(value), 32);
      };
    case "bool":
      return function(value) {
        return !value ? hexFalse : hexTrue;
      };
    case "bytes":
      return function(value) {
        return keccak256(value);
      };
    case "string":
      return function(value) {
        return id(value);
      };
  }
  return null;
}
function encodeType(name, fields) {
  return `${name}(${fields.map(({ name: name2, type }) => type + " " + name2).join(",")})`;
}
var _types, _fullTypes, _encoderCache, _getEncoder, getEncoder_fn;
var _TypedDataEncoder = class {
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   *
   *  This performs all necessary checking that types are valid and
   *  do not violate the [[link-eip-712]] structural constraints as
   *  well as computes the [[primaryType]].
   */
  constructor(types) {
    __privateAdd(this, _getEncoder);
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    __publicField(this, "primaryType");
    __privateAdd(this, _types, void 0);
    __privateAdd(this, _fullTypes, void 0);
    __privateAdd(this, _encoderCache, void 0);
    __privateSet(this, _types, JSON.stringify(types));
    __privateSet(this, _fullTypes, /* @__PURE__ */ new Map());
    __privateSet(this, _encoderCache, /* @__PURE__ */ new Map());
    const links = /* @__PURE__ */ new Map();
    const parents = /* @__PURE__ */ new Map();
    const subtypes = /* @__PURE__ */ new Map();
    Object.keys(types).forEach((type) => {
      links.set(type, /* @__PURE__ */ new Set());
      parents.set(type, []);
      subtypes.set(type, /* @__PURE__ */ new Set());
    });
    for (const name in types) {
      const uniqueNames = /* @__PURE__ */ new Set();
      for (const field of types[name]) {
        assertArgument(!uniqueNames.has(field.name), `duplicate variable name ${JSON.stringify(field.name)} in ${JSON.stringify(name)}`, "types", types);
        uniqueNames.add(field.name);
        const baseType = field.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
        assertArgument(baseType !== name, `circular type reference to ${JSON.stringify(baseType)}`, "types", types);
        const encoder = getBaseEncoder(baseType);
        if (encoder) {
          continue;
        }
        assertArgument(parents.has(baseType), `unknown type ${JSON.stringify(baseType)}`, "types", types);
        parents.get(baseType).push(name);
        links.get(name).add(baseType);
      }
    }
    const primaryTypes = Array.from(parents.keys()).filter((n2) => parents.get(n2).length === 0);
    assertArgument(primaryTypes.length !== 0, "missing primary type", "types", types);
    assertArgument(primaryTypes.length === 1, `ambiguous primary types or unused types: ${primaryTypes.map((t) => JSON.stringify(t)).join(", ")}`, "types", types);
    defineProperties(this, { primaryType: primaryTypes[0] });
    function checkCircular(type, found) {
      assertArgument(!found.has(type), `circular type reference to ${JSON.stringify(type)}`, "types", types);
      found.add(type);
      for (const child of links.get(type)) {
        if (!parents.has(child)) {
          continue;
        }
        checkCircular(child, found);
        for (const subtype of found) {
          subtypes.get(subtype).add(child);
        }
      }
      found.delete(type);
    }
    checkCircular(this.primaryType, /* @__PURE__ */ new Set());
    for (const [name, set] of subtypes) {
      const st = Array.from(set);
      st.sort();
      __privateGet(this, _fullTypes).set(name, encodeType(name, types[name]) + st.map((t) => encodeType(t, types[t])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(__privateGet(this, _types));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(type) {
    let encoder = __privateGet(this, _encoderCache).get(type);
    if (!encoder) {
      encoder = __privateMethod(this, _getEncoder, getEncoder_fn).call(this, type);
      __privateGet(this, _encoderCache).set(type, encoder);
    }
    return encoder;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(name) {
    const result = __privateGet(this, _fullTypes).get(name);
    assertArgument(result, `unknown type: ${JSON.stringify(name)}`, "name", name);
    return result;
  }
  /**
   *  Return the encoded %%value%% for the %%type%%.
   */
  encodeData(type, value) {
    return this.getEncoder(type)(value);
  }
  /**
   *  Returns the hash of %%value%% for the type of %%name%%.
   */
  hashStruct(name, value) {
    return keccak256(this.encodeData(name, value));
  }
  /**
   *  Return the fulled encoded %%value%% for the [[types]].
   */
  encode(value) {
    return this.encodeData(this.primaryType, value);
  }
  /**
   *  Return the hash of the fully encoded %%value%% for the [[types]].
   */
  hash(value) {
    return this.hashStruct(this.primaryType, value);
  }
  /**
   *  @_ignore:
   */
  _visit(type, value, callback) {
    {
      const encoder = getBaseEncoder(type);
      if (encoder) {
        return callback(type, value);
      }
    }
    const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (match) {
      assertArgument(!match[3] || parseInt(match[3]) === value.length, `array length mismatch; expected length ${parseInt(match[3])}`, "value", value);
      return value.map((v) => this._visit(match[1], v, callback));
    }
    const fields = this.types[type];
    if (fields) {
      return fields.reduce((accum, { name, type: type2 }) => {
        accum[name] = this._visit(type2, value[name], callback);
        return accum;
      }, {});
    }
    assertArgument(false, `unknown type: ${type}`, "type", type);
  }
  /**
   *  Call %%calback%% for each value in %%value%%, passing the type and
   *  component within %%value%%.
   *
   *  This is useful for replacing addresses or other transformation that
   *  may be desired on each component, based on its type.
   */
  visit(value, callback) {
    return this._visit(this.primaryType, value, callback);
  }
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   */
  static from(types) {
    return new _TypedDataEncoder(types);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(types) {
    return _TypedDataEncoder.from(types).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(name, types, value) {
    return _TypedDataEncoder.from(types).hashStruct(name, value);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(domain) {
    const domainFields = [];
    for (const name in domain) {
      if (domain[name] == null) {
        continue;
      }
      const type = domainFieldTypes[name];
      assertArgument(type, `invalid typed-data domain key: ${JSON.stringify(name)}`, "domain", domain);
      domainFields.push({ name, type });
    }
    domainFields.sort((a, b2) => {
      return domainFieldNames.indexOf(a.name) - domainFieldNames.indexOf(b2.name);
    });
    return _TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: domainFields }, domain);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(domain, types, value) {
    return concat([
      "0x1901",
      _TypedDataEncoder.hashDomain(domain),
      _TypedDataEncoder.from(types).hash(value)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(domain, types, value) {
    return keccak256(_TypedDataEncoder.encode(domain, types, value));
  }
  // Replaces all address types with ENS names with their looked up address
  /**
   * Resolves to the value from resolving all addresses in %%value%% for
   * %%types%% and the %%domain%%.
   */
  static async resolveNames(domain, types, value, resolveName) {
    domain = Object.assign({}, domain);
    for (const key in domain) {
      if (domain[key] == null) {
        delete domain[key];
      }
    }
    const ensCache = {};
    if (domain.verifyingContract && !isHexString(domain.verifyingContract, 20)) {
      ensCache[domain.verifyingContract] = "0x";
    }
    const encoder = _TypedDataEncoder.from(types);
    encoder.visit(value, (type, value2) => {
      if (type === "address" && !isHexString(value2, 20)) {
        ensCache[value2] = "0x";
      }
      return value2;
    });
    for (const name in ensCache) {
      ensCache[name] = await resolveName(name);
    }
    if (domain.verifyingContract && ensCache[domain.verifyingContract]) {
      domain.verifyingContract = ensCache[domain.verifyingContract];
    }
    value = encoder.visit(value, (type, value2) => {
      if (type === "address" && ensCache[value2]) {
        return ensCache[value2];
      }
      return value2;
    });
    return { domain, value };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(domain, types, value) {
    _TypedDataEncoder.hashDomain(domain);
    const domainValues = {};
    const domainTypes = [];
    domainFieldNames.forEach((name) => {
      const value2 = domain[name];
      if (value2 == null) {
        return;
      }
      domainValues[name] = domainChecks[name](value2);
      domainTypes.push({ name, type: domainFieldTypes[name] });
    });
    const encoder = _TypedDataEncoder.from(types);
    const typesWithDomain = Object.assign({}, types);
    assertArgument(typesWithDomain.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", types);
    typesWithDomain.EIP712Domain = domainTypes;
    encoder.encode(value);
    return {
      types: typesWithDomain,
      domain: domainValues,
      primaryType: encoder.primaryType,
      message: encoder.visit(value, (type, value2) => {
        if (type.match(/^bytes(\d*)/)) {
          return hexlify(getBytes(value2));
        }
        if (type.match(/^u?int/)) {
          return getBigInt(value2).toString();
        }
        switch (type) {
          case "address":
            return value2.toLowerCase();
          case "bool":
            return !!value2;
          case "string":
            assertArgument(typeof value2 === "string", "invalid string", "value", value2);
            return value2;
        }
        assertArgument(false, "unsupported type", "type", type);
      })
    };
  }
};
var TypedDataEncoder = _TypedDataEncoder;
_types = new WeakMap();
_fullTypes = new WeakMap();
_encoderCache = new WeakMap();
_getEncoder = new WeakSet();
getEncoder_fn = function(type) {
  {
    const encoder = getBaseEncoder(type);
    if (encoder) {
      return encoder;
    }
  }
  const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
  if (match) {
    const subtype = match[1];
    const subEncoder = this.getEncoder(subtype);
    return (value) => {
      assertArgument(!match[3] || parseInt(match[3]) === value.length, `array length mismatch; expected length ${parseInt(match[3])}`, "value", value);
      let result = value.map(subEncoder);
      if (__privateGet(this, _fullTypes).has(subtype)) {
        result = result.map(keccak256);
      }
      return keccak256(concat(result));
    };
  }
  const fields = this.types[type];
  if (fields) {
    const encodedType = id(__privateGet(this, _fullTypes).get(type));
    return (value) => {
      const values = fields.map(({ name, type: type2 }) => {
        const result = this.getEncoder(type2)(value[name]);
        if (__privateGet(this, _fullTypes).has(type2)) {
          return keccak256(result);
        }
        return result;
      });
      values.unshift(encodedType);
      return concat(values);
    };
  }
  assertArgument(false, `unknown type: ${type}`, "type", type);
};
function verifyTypedData(domain, types, value, signature) {
  return recoverAddress(TypedDataEncoder.hash(domain, types, value), signature);
}

// node_modules/ethers/lib.esm/abi/fragments.js
function setify(items) {
  const result = /* @__PURE__ */ new Set();
  items.forEach((k) => result.add(k));
  return Object.freeze(result);
}
var _kwVisib = "constant external internal payable private public pure view";
var KwVisib = setify(_kwVisib.split(" "));
var _kwTypes = "constructor error event fallback function receive struct";
var KwTypes = setify(_kwTypes.split(" "));
var _kwModifiers = "calldata memory storage payable indexed";
var KwModifiers = setify(_kwModifiers.split(" "));
var _kwOther = "tuple returns";
var _keywords = [_kwTypes, _kwModifiers, _kwOther, _kwVisib].join(" ");
var Keywords = setify(_keywords.split(" "));
var SimpleTokens = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
};
var regexWhitespacePrefix = new RegExp("^(\\s*)");
var regexNumberPrefix = new RegExp("^([0-9]+)");
var regexIdPrefix = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)");
var regexId = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$");
var regexType = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var _offset2, _tokens, _subTokenString, subTokenString_fn;
var _TokenString = class {
  constructor(tokens) {
    __privateAdd(this, _subTokenString);
    __privateAdd(this, _offset2, void 0);
    __privateAdd(this, _tokens, void 0);
    __privateSet(this, _offset2, 0);
    __privateSet(this, _tokens, tokens.slice());
  }
  get offset() {
    return __privateGet(this, _offset2);
  }
  get length() {
    return __privateGet(this, _tokens).length - __privateGet(this, _offset2);
  }
  clone() {
    return new _TokenString(__privateGet(this, _tokens));
  }
  reset() {
    __privateSet(this, _offset2, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(allowed) {
    const top = this.peek();
    if (top.type !== "KEYWORD" || !allowed.has(top.text)) {
      throw new Error(`expected keyword ${top.text}`);
    }
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(type) {
    if (this.peek().type !== type) {
      throw new Error(`expected ${type}; got ${JSON.stringify(this.peek())}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const top = this.peek();
    if (top.type !== "OPEN_PAREN") {
      throw new Error("bad start");
    }
    const result = __privateMethod(this, _subTokenString, subTokenString_fn).call(this, __privateGet(this, _offset2) + 1, top.match + 1);
    __privateSet(this, _offset2, top.match + 1);
    return result;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const top = this.peek();
    if (top.type !== "OPEN_PAREN") {
      throw new Error("bad start");
    }
    const result = [];
    while (__privateGet(this, _offset2) < top.match - 1) {
      const link = this.peek().linkNext;
      result.push(__privateMethod(this, _subTokenString, subTokenString_fn).call(this, __privateGet(this, _offset2) + 1, link));
      __privateSet(this, _offset2, link);
    }
    __privateSet(this, _offset2, top.match + 1);
    return result;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (__privateGet(this, _offset2) >= __privateGet(this, _tokens).length) {
      throw new Error("out-of-bounds");
    }
    return __privateGet(this, _tokens)[__privateGet(this, _offset2)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(allowed) {
    const top = this.peekType("KEYWORD");
    return top != null && allowed.has(top) ? top : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(type) {
    if (this.length === 0) {
      return null;
    }
    const top = this.peek();
    return top.type === type ? top.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const result = this.peek();
    __privateWrapper(this, _offset2)._++;
    return result;
  }
  toString() {
    const tokens = [];
    for (let i = __privateGet(this, _offset2); i < __privateGet(this, _tokens).length; i++) {
      const token = __privateGet(this, _tokens)[i];
      tokens.push(`${token.type}:${token.text}`);
    }
    return `<TokenString ${tokens.join(" ")}>`;
  }
};
var TokenString = _TokenString;
_offset2 = new WeakMap();
_tokens = new WeakMap();
_subTokenString = new WeakSet();
subTokenString_fn = function(from = 0, to = 0) {
  return new _TokenString(__privateGet(this, _tokens).slice(from, to).map((t) => {
    return Object.freeze(Object.assign({}, t, {
      match: t.match - from,
      linkBack: t.linkBack - from,
      linkNext: t.linkNext - from
    }));
  }));
};
function lex(text) {
  const tokens = [];
  const throwError2 = (message) => {
    const token = offset < text.length ? JSON.stringify(text[offset]) : "$EOI";
    throw new Error(`invalid token ${token} at ${offset}: ${message}`);
  };
  let brackets = [];
  let commas = [];
  let offset = 0;
  while (offset < text.length) {
    let cur = text.substring(offset);
    let match = cur.match(regexWhitespacePrefix);
    if (match) {
      offset += match[1].length;
      cur = text.substring(offset);
    }
    const token = { depth: brackets.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset, value: -1 };
    tokens.push(token);
    let type = SimpleTokens[cur[0]] || "";
    if (type) {
      token.type = type;
      token.text = cur[0];
      offset++;
      if (type === "OPEN_PAREN") {
        brackets.push(tokens.length - 1);
        commas.push(tokens.length - 1);
      } else if (type == "CLOSE_PAREN") {
        if (brackets.length === 0) {
          throwError2("no matching open bracket");
        }
        token.match = brackets.pop();
        tokens[token.match].match = tokens.length - 1;
        token.depth--;
        token.linkBack = commas.pop();
        tokens[token.linkBack].linkNext = tokens.length - 1;
      } else if (type === "COMMA") {
        token.linkBack = commas.pop();
        tokens[token.linkBack].linkNext = tokens.length - 1;
        commas.push(tokens.length - 1);
      } else if (type === "OPEN_BRACKET") {
        token.type = "BRACKET";
      } else if (type === "CLOSE_BRACKET") {
        let suffix = tokens.pop().text;
        if (tokens.length > 0 && tokens[tokens.length - 1].type === "NUMBER") {
          const value = tokens.pop().text;
          suffix = value + suffix;
          tokens[tokens.length - 1].value = getNumber(value);
        }
        if (tokens.length === 0 || tokens[tokens.length - 1].type !== "BRACKET") {
          throw new Error("missing opening bracket");
        }
        tokens[tokens.length - 1].text += suffix;
      }
      continue;
    }
    match = cur.match(regexIdPrefix);
    if (match) {
      token.text = match[1];
      offset += token.text.length;
      if (Keywords.has(token.text)) {
        token.type = "KEYWORD";
        continue;
      }
      if (token.text.match(regexType)) {
        token.type = "TYPE";
        continue;
      }
      token.type = "ID";
      continue;
    }
    match = cur.match(regexNumberPrefix);
    if (match) {
      token.text = match[1];
      token.type = "NUMBER";
      offset += token.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(cur[0])} at position ${offset}`);
  }
  return new TokenString(tokens.map((t) => Object.freeze(t)));
}
function allowSingle(set, allowed) {
  let included = [];
  for (const key in allowed.keys()) {
    if (set.has(key)) {
      included.push(key);
    }
  }
  if (included.length > 1) {
    throw new Error(`conflicting types: ${included.join(", ")}`);
  }
}
function consumeName(type, tokens) {
  if (tokens.peekKeyword(KwTypes)) {
    const keyword = tokens.pop().text;
    if (keyword !== type) {
      throw new Error(`expected ${type}, got ${keyword}`);
    }
  }
  return tokens.popType("ID");
}
function consumeKeywords(tokens, allowed) {
  const keywords = /* @__PURE__ */ new Set();
  while (true) {
    const keyword = tokens.peekType("KEYWORD");
    if (keyword == null || allowed && !allowed.has(keyword)) {
      break;
    }
    tokens.pop();
    if (keywords.has(keyword)) {
      throw new Error(`duplicate keywords: ${JSON.stringify(keyword)}`);
    }
    keywords.add(keyword);
  }
  return Object.freeze(keywords);
}
function consumeMutability(tokens) {
  let modifiers = consumeKeywords(tokens, KwVisib);
  allowSingle(modifiers, setify("constant payable nonpayable".split(" ")));
  allowSingle(modifiers, setify("pure view payable nonpayable".split(" ")));
  if (modifiers.has("view")) {
    return "view";
  }
  if (modifiers.has("pure")) {
    return "pure";
  }
  if (modifiers.has("payable")) {
    return "payable";
  }
  if (modifiers.has("nonpayable")) {
    return "nonpayable";
  }
  if (modifiers.has("constant")) {
    return "view";
  }
  return "nonpayable";
}
function consumeParams(tokens, allowIndexed) {
  return tokens.popParams().map((t) => ParamType.from(t, allowIndexed));
}
function consumeGas(tokens) {
  if (tokens.peekType("AT")) {
    tokens.pop();
    if (tokens.peekType("NUMBER")) {
      return getBigInt(tokens.pop().text);
    }
    throw new Error("invalid gas");
  }
  return null;
}
function consumeEoi(tokens) {
  if (tokens.length) {
    throw new Error(`unexpected tokens: ${tokens.toString()}`);
  }
}
var regexArrayType = new RegExp(/^(.*)\[([0-9]*)\]$/);
function verifyBasicType(type) {
  const match = type.match(regexType);
  assertArgument(match, "invalid type", "type", type);
  if (type === "uint") {
    return "uint256";
  }
  if (type === "int") {
    return "int256";
  }
  if (match[2]) {
    const length = parseInt(match[2]);
    assertArgument(length !== 0 && length <= 32, "invalid bytes length", "type", type);
  } else if (match[3]) {
    const size = parseInt(match[3]);
    assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid numeric width", "type", type);
  }
  return type;
}
var _guard4 = {};
var internal = Symbol.for("_ethers_internal");
var ParamTypeInternal = "_ParamTypeInternal";
var ErrorFragmentInternal = "_ErrorInternal";
var EventFragmentInternal = "_EventInternal";
var ConstructorFragmentInternal = "_ConstructorInternal";
var FallbackFragmentInternal = "_FallbackInternal";
var FunctionFragmentInternal = "_FunctionInternal";
var StructFragmentInternal = "_StructInternal";
var _walkAsync, walkAsync_fn;
var _ParamType = class {
  /**
   *  @private
   */
  constructor(guard, name, type, baseType, indexed, components, arrayLength, arrayChildren) {
    __privateAdd(this, _walkAsync);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    __publicField(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    __publicField(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    __publicField(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    __publicField(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    __publicField(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    __publicField(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    __publicField(this, "arrayChildren");
    assertPrivate(guard, _guard4, "ParamType");
    Object.defineProperty(this, internal, { value: ParamTypeInternal });
    if (components) {
      components = Object.freeze(components.slice());
    }
    if (baseType === "array") {
      if (arrayLength == null || arrayChildren == null) {
        throw new Error("");
      }
    } else if (arrayLength != null || arrayChildren != null) {
      throw new Error("");
    }
    if (baseType === "tuple") {
      if (components == null) {
        throw new Error("");
      }
    } else if (components != null) {
      throw new Error("");
    }
    defineProperties(this, {
      name,
      type,
      baseType,
      indexed,
      components,
      arrayLength,
      arrayChildren
    });
  }
  /**
   *  Return a string representation of this type.
   *
   *  For example,
   *
   *  ``sighash" => "(uint256,address)"``
   *
   *  ``"minimal" => "tuple(uint256,address) indexed"``
   *
   *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
   */
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      let result2 = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: this.name || void 0
      };
      if (typeof this.indexed === "boolean") {
        result2.indexed = this.indexed;
      }
      if (this.isTuple()) {
        result2.components = this.components.map((c) => JSON.parse(c.format(format)));
      }
      return JSON.stringify(result2);
    }
    let result = "";
    if (this.isArray()) {
      result += this.arrayChildren.format(format);
      result += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
    } else {
      if (this.isTuple()) {
        if (format !== "sighash") {
          result += this.type;
        }
        result += "(" + this.components.map((comp) => comp.format(format)).join(format === "full" ? ", " : ",") + ")";
      } else {
        result += this.type;
      }
    }
    if (format !== "sighash") {
      if (this.indexed === true) {
        result += " indexed";
      }
      if (format === "full" && this.name) {
        result += " " + this.name;
      }
    }
    return result;
  }
  /**
   *  Returns true if %%this%% is an Array type.
   *
   *  This provides a type gaurd ensuring that [[arrayChildren]]
   *  and [[arrayLength]] are non-null.
   */
  isArray() {
    return this.baseType === "array";
  }
  /**
   *  Returns true if %%this%% is a Tuple type.
   *
   *  This provides a type gaurd ensuring that [[components]]
   *  is non-null.
   */
  isTuple() {
    return this.baseType === "tuple";
  }
  /**
   *  Returns true if %%this%% is an Indexable type.
   *
   *  This provides a type gaurd ensuring that [[indexed]]
   *  is non-null.
   */
  isIndexable() {
    return this.indexed != null;
  }
  /**
   *  Walks the **ParamType** with %%value%%, calling %%process%%
   *  on each type, destructing the %%value%% recursively.
   */
  walk(value, process2) {
    if (this.isArray()) {
      if (!Array.isArray(value)) {
        throw new Error("invalid array value");
      }
      if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
        throw new Error("array is wrong length");
      }
      const _this = this;
      return value.map((v) => _this.arrayChildren.walk(v, process2));
    }
    if (this.isTuple()) {
      if (!Array.isArray(value)) {
        throw new Error("invalid tuple value");
      }
      if (value.length !== this.components.length) {
        throw new Error("array is wrong length");
      }
      const _this = this;
      return value.map((v, i) => _this.components[i].walk(v, process2));
    }
    return process2(this.type, value);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS naes by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(value, process2) {
    const promises = [];
    const result = [value];
    __privateMethod(this, _walkAsync, walkAsync_fn).call(this, promises, value, process2, (value2) => {
      result[0] = value2;
    });
    if (promises.length) {
      await Promise.all(promises);
    }
    return result[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(obj, allowIndexed) {
    if (_ParamType.isParamType(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return _ParamType.from(lex(obj), allowIndexed);
    } else if (obj instanceof TokenString) {
      let type2 = "", baseType = "";
      let comps = null;
      if (consumeKeywords(obj, setify(["tuple"])).has("tuple") || obj.peekType("OPEN_PAREN")) {
        baseType = "tuple";
        comps = obj.popParams().map((t) => _ParamType.from(t));
        type2 = `tuple(${comps.map((c) => c.format()).join(",")})`;
      } else {
        type2 = verifyBasicType(obj.popType("TYPE"));
        baseType = type2;
      }
      let arrayChildren = null;
      let arrayLength = null;
      while (obj.length && obj.peekType("BRACKET")) {
        const bracket = obj.pop();
        arrayChildren = new _ParamType(_guard4, "", type2, baseType, null, comps, arrayLength, arrayChildren);
        arrayLength = bracket.value;
        type2 += bracket.text;
        baseType = "array";
        comps = null;
      }
      let indexed2 = null;
      const keywords = consumeKeywords(obj, KwModifiers);
      if (keywords.has("indexed")) {
        if (!allowIndexed) {
          throw new Error("");
        }
        indexed2 = true;
      }
      const name2 = obj.peekType("ID") ? obj.pop().text : "";
      if (obj.length) {
        throw new Error("leftover tokens");
      }
      return new _ParamType(_guard4, name2, type2, baseType, indexed2, comps, arrayLength, arrayChildren);
    }
    const name = obj.name;
    assertArgument(!name || typeof name === "string" && name.match(regexId), "invalid name", "obj.name", name);
    let indexed = obj.indexed;
    if (indexed != null) {
      assertArgument(allowIndexed, "parameter cannot be indexed", "obj.indexed", obj.indexed);
      indexed = !!indexed;
    }
    let type = obj.type;
    let arrayMatch = type.match(regexArrayType);
    if (arrayMatch) {
      const arrayLength = parseInt(arrayMatch[2] || "-1");
      const arrayChildren = _ParamType.from({
        type: arrayMatch[1],
        components: obj.components
      });
      return new _ParamType(_guard4, name || "", type, "array", indexed, null, arrayLength, arrayChildren);
    }
    if (type === "tuple" || type.startsWith(
      "tuple("
      /* fix: ) */
    ) || type.startsWith(
      "("
      /* fix: ) */
    )) {
      const comps = obj.components != null ? obj.components.map((c) => _ParamType.from(c)) : null;
      const tuple = new _ParamType(_guard4, name || "", type, "tuple", indexed, comps, null, null);
      return tuple;
    }
    type = verifyBasicType(obj.type);
    return new _ParamType(_guard4, name || "", type, type, indexed, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(value) {
    return value && value[internal] === ParamTypeInternal;
  }
};
var ParamType = _ParamType;
_walkAsync = new WeakSet();
walkAsync_fn = function(promises, value, process2, setValue) {
  if (this.isArray()) {
    if (!Array.isArray(value)) {
      throw new Error("invalid array value");
    }
    if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
      throw new Error("array is wrong length");
    }
    const childType = this.arrayChildren;
    const result2 = value.slice();
    result2.forEach((value2, index) => {
      var _a2;
      __privateMethod(_a2 = childType, _walkAsync, walkAsync_fn).call(_a2, promises, value2, process2, (value3) => {
        result2[index] = value3;
      });
    });
    setValue(result2);
    return;
  }
  if (this.isTuple()) {
    const components = this.components;
    let result2;
    if (Array.isArray(value)) {
      result2 = value.slice();
    } else {
      if (value == null || typeof value !== "object") {
        throw new Error("invalid tuple value");
      }
      result2 = components.map((param) => {
        if (!param.name) {
          throw new Error("cannot use object value with unnamed components");
        }
        if (!(param.name in value)) {
          throw new Error(`missing value for component ${param.name}`);
        }
        return value[param.name];
      });
    }
    if (result2.length !== this.components.length) {
      throw new Error("array is wrong length");
    }
    result2.forEach((value2, index) => {
      var _a2;
      __privateMethod(_a2 = components[index], _walkAsync, walkAsync_fn).call(_a2, promises, value2, process2, (value3) => {
        result2[index] = value3;
      });
    });
    setValue(result2);
    return;
  }
  const result = process2(this.type, value);
  if (result.then) {
    promises.push(async function() {
      setValue(await result);
    }());
  } else {
    setValue(result);
  }
};
var Fragment = class {
  /**
   *  @private
   */
  constructor(guard, type, inputs) {
    /**
     *  The type of the fragment.
     */
    __publicField(this, "type");
    /**
     *  The inputs for the fragment.
     */
    __publicField(this, "inputs");
    assertPrivate(guard, _guard4, "Fragment");
    inputs = Object.freeze(inputs.slice());
    defineProperties(this, { type, inputs });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(obj) {
    if (typeof obj === "string") {
      try {
        Fragment.from(JSON.parse(obj));
      } catch (e) {
      }
      return Fragment.from(lex(obj));
    }
    if (obj instanceof TokenString) {
      const type = obj.peekKeyword(KwTypes);
      switch (type) {
        case "constructor":
          return ConstructorFragment.from(obj);
        case "error":
          return ErrorFragment.from(obj);
        case "event":
          return EventFragment.from(obj);
        case "fallback":
        case "receive":
          return FallbackFragment.from(obj);
        case "function":
          return FunctionFragment.from(obj);
        case "struct":
          return StructFragment.from(obj);
      }
    } else if (typeof obj === "object") {
      switch (obj.type) {
        case "constructor":
          return ConstructorFragment.from(obj);
        case "error":
          return ErrorFragment.from(obj);
        case "event":
          return EventFragment.from(obj);
        case "fallback":
        case "receive":
          return FallbackFragment.from(obj);
        case "function":
          return FunctionFragment.from(obj);
        case "struct":
          return StructFragment.from(obj);
      }
      assert(false, `unsupported type: ${obj.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    assertArgument(false, "unsupported frgament object", "obj", obj);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(value) {
    return ConstructorFragment.isFragment(value);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(value) {
    return ErrorFragment.isFragment(value);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(value) {
    return EventFragment.isFragment(value);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(value) {
    return FunctionFragment.isFragment(value);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(value) {
    return StructFragment.isFragment(value);
  }
};
var NamedFragment = class extends Fragment {
  /**
   *  @private
   */
  constructor(guard, type, name, inputs) {
    super(guard, type, inputs);
    /**
     *  The name of the fragment.
     */
    __publicField(this, "name");
    assertArgument(typeof name === "string" && name.match(regexId), "invalid identifier", "name", name);
    inputs = Object.freeze(inputs.slice());
    defineProperties(this, { name });
  }
};
function joinParams(format, params) {
  return "(" + params.map((p) => p.format(format)).join(format === "full" ? ", " : ",") + ")";
}
var ErrorFragment = class extends NamedFragment {
  /**
   *  @private
   */
  constructor(guard, name, inputs) {
    super(guard, "error", name, inputs);
    Object.defineProperty(this, internal, { value: ErrorFragmentInternal });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return id(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("error");
    }
    result.push(this.name + joinParams(format, this.inputs));
    return result.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(obj) {
    if (ErrorFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return ErrorFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("error", obj);
      const inputs = consumeParams(obj);
      consumeEoi(obj);
      return new ErrorFragment(_guard4, name, inputs);
    }
    return new ErrorFragment(_guard4, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === ErrorFragmentInternal;
  }
};
var EventFragment = class extends NamedFragment {
  /**
   *  @private
   */
  constructor(guard, name, inputs, anonymous) {
    super(guard, "event", name, inputs);
    /**
     *  Whether this event is anonymous.
     */
    __publicField(this, "anonymous");
    Object.defineProperty(this, internal, { value: EventFragmentInternal });
    defineProperties(this, { anonymous });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return id(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((i) => JSON.parse(i.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("event");
    }
    result.push(this.name + joinParams(format, this.inputs));
    if (format !== "sighash" && this.anonymous) {
      result.push("anonymous");
    }
    return result.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(name, params) {
    params = (params || []).map((p) => ParamType.from(p));
    const fragment = new EventFragment(_guard4, name, params, false);
    return fragment.topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(obj) {
    if (EventFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return EventFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("event", obj);
      const inputs = consumeParams(obj, true);
      const anonymous = !!consumeKeywords(obj, setify(["anonymous"])).has("anonymous");
      consumeEoi(obj);
      return new EventFragment(_guard4, name, inputs, anonymous);
    }
    return new EventFragment(_guard4, obj.name, obj.inputs ? obj.inputs.map((p) => ParamType.from(p, true)) : [], !!obj.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === EventFragmentInternal;
  }
};
var ConstructorFragment = class extends Fragment {
  /**
   *  @private
   */
  constructor(guard, type, inputs, payable, gas) {
    super(guard, type, inputs);
    /**
     *  Whether the constructor can receive an endowment.
     */
    __publicField(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    __publicField(this, "gas");
    Object.defineProperty(this, internal, { value: ConstructorFragmentInternal });
    defineProperties(this, { payable, gas });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(format) {
    assert(format != null && format !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" });
    if (format === "json") {
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((i) => JSON.parse(i.format(format)))
      });
    }
    const result = [`constructor${joinParams(format, this.inputs)}`];
    result.push(this.payable ? "payable" : "nonpayable");
    if (this.gas != null) {
      result.push(`@${this.gas.toString()}`);
    }
    return result.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(obj) {
    if (ConstructorFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return ConstructorFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      consumeKeywords(obj, setify(["constructor"]));
      const inputs = consumeParams(obj);
      const payable = !!consumeKeywords(obj, setify(["payable"])).has("payable");
      const gas = consumeGas(obj);
      consumeEoi(obj);
      return new ConstructorFragment(_guard4, "constructor", inputs, payable, gas);
    }
    return new ConstructorFragment(_guard4, "constructor", obj.inputs ? obj.inputs.map(ParamType.from) : [], !!obj.payable, obj.gas != null ? obj.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === ConstructorFragmentInternal;
  }
};
var FallbackFragment = class extends Fragment {
  constructor(guard, inputs, payable) {
    super(guard, "fallback", inputs);
    /**
     *  If the function can be sent value during invocation.
     */
    __publicField(this, "payable");
    Object.defineProperty(this, internal, { value: FallbackFragmentInternal });
    defineProperties(this, { payable });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(format) {
    const type = this.inputs.length === 0 ? "receive" : "fallback";
    if (format === "json") {
      const stateMutability = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type, stateMutability });
    }
    return `${type}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(obj) {
    if (FallbackFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return FallbackFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const errorObj = obj.toString();
      const topIsValid = obj.peekKeyword(setify(["fallback", "receive"]));
      assertArgument(topIsValid, "type must be fallback or receive", "obj", errorObj);
      const type = obj.popKeyword(setify(["fallback", "receive"]));
      if (type === "receive") {
        const inputs2 = consumeParams(obj);
        assertArgument(inputs2.length === 0, `receive cannot have arguments`, "obj.inputs", inputs2);
        consumeKeywords(obj, setify(["payable"]));
        consumeEoi(obj);
        return new FallbackFragment(_guard4, [], true);
      }
      let inputs = consumeParams(obj);
      if (inputs.length) {
        assertArgument(inputs.length === 1 && inputs[0].type === "bytes", "invalid fallback inputs", "obj.inputs", inputs.map((i) => i.format("minimal")).join(", "));
      } else {
        inputs = [ParamType.from("bytes")];
      }
      const mutability = consumeMutability(obj);
      assertArgument(mutability === "nonpayable" || mutability === "payable", "fallback cannot be constants", "obj.stateMutability", mutability);
      if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
        const outputs = consumeParams(obj);
        assertArgument(outputs.length === 1 && outputs[0].type === "bytes", "invalid fallback outputs", "obj.outputs", outputs.map((i) => i.format("minimal")).join(", "));
      }
      consumeEoi(obj);
      return new FallbackFragment(_guard4, inputs, mutability === "payable");
    }
    if (obj.type === "receive") {
      return new FallbackFragment(_guard4, [], true);
    }
    if (obj.type === "fallback") {
      const inputs = [ParamType.from("bytes")];
      const payable = obj.stateMutability === "payable";
      return new FallbackFragment(_guard4, inputs, payable);
    }
    assertArgument(false, "invalid fallback description", "obj", obj);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === FallbackFragmentInternal;
  }
};
var FunctionFragment = class extends NamedFragment {
  /**
   *  @private
   */
  constructor(guard, name, stateMutability, inputs, outputs, gas) {
    super(guard, "function", name, inputs);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    __publicField(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    __publicField(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    __publicField(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    __publicField(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    __publicField(this, "gas");
    Object.defineProperty(this, internal, { value: FunctionFragmentInternal });
    outputs = Object.freeze(outputs.slice());
    const constant = stateMutability === "view" || stateMutability === "pure";
    const payable = stateMutability === "payable";
    defineProperties(this, { constant, gas, outputs, payable, stateMutability });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return id(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((i) => JSON.parse(i.format(format))),
        outputs: this.outputs.map((o) => JSON.parse(o.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("function");
    }
    result.push(this.name + joinParams(format, this.inputs));
    if (format !== "sighash") {
      if (this.stateMutability !== "nonpayable") {
        result.push(this.stateMutability);
      }
      if (this.outputs && this.outputs.length) {
        result.push("returns");
        result.push(joinParams(format, this.outputs));
      }
      if (this.gas != null) {
        result.push(`@${this.gas.toString()}`);
      }
    }
    return result.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(name, params) {
    params = (params || []).map((p) => ParamType.from(p));
    const fragment = new FunctionFragment(_guard4, name, "view", params, [], null);
    return fragment.selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(obj) {
    if (FunctionFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return FunctionFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("function", obj);
      const inputs = consumeParams(obj);
      const mutability = consumeMutability(obj);
      let outputs = [];
      if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
        outputs = consumeParams(obj);
      }
      const gas = consumeGas(obj);
      consumeEoi(obj);
      return new FunctionFragment(_guard4, name, mutability, inputs, outputs, gas);
    }
    let stateMutability = obj.stateMutability;
    if (stateMutability == null) {
      stateMutability = "payable";
      if (typeof obj.constant === "boolean") {
        stateMutability = "view";
        if (!obj.constant) {
          stateMutability = "payable";
          if (typeof obj.payable === "boolean" && !obj.payable) {
            stateMutability = "nonpayable";
          }
        }
      } else if (typeof obj.payable === "boolean" && !obj.payable) {
        stateMutability = "nonpayable";
      }
    }
    return new FunctionFragment(_guard4, obj.name, stateMutability, obj.inputs ? obj.inputs.map(ParamType.from) : [], obj.outputs ? obj.outputs.map(ParamType.from) : [], obj.gas != null ? obj.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === FunctionFragmentInternal;
  }
};
var StructFragment = class extends NamedFragment {
  /**
   *  @private
   */
  constructor(guard, name, inputs) {
    super(guard, "struct", name, inputs);
    Object.defineProperty(this, internal, { value: StructFragmentInternal });
  }
  /**
   *  Returns a string representation of this struct as %%format%%.
   */
  format() {
    throw new Error("@TODO");
  }
  /**
   *  Returns a new **StructFragment** for %%obj%%.
   */
  static from(obj) {
    if (typeof obj === "string") {
      return StructFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("struct", obj);
      const inputs = consumeParams(obj);
      consumeEoi(obj);
      return new StructFragment(_guard4, name, inputs);
    }
    return new StructFragment(_guard4, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === StructFragmentInternal;
  }
};

// node_modules/ethers/lib.esm/abi/abi-coder.js
var PanicReasons = /* @__PURE__ */ new Map();
PanicReasons.set(0, "GENERIC_PANIC");
PanicReasons.set(1, "ASSERT_FALSE");
PanicReasons.set(17, "OVERFLOW");
PanicReasons.set(18, "DIVIDE_BY_ZERO");
PanicReasons.set(33, "ENUM_RANGE_ERROR");
PanicReasons.set(34, "BAD_STORAGE_DATA");
PanicReasons.set(49, "STACK_UNDERFLOW");
PanicReasons.set(50, "ARRAY_RANGE_ERROR");
PanicReasons.set(65, "OUT_OF_MEMORY");
PanicReasons.set(81, "UNINITIALIZED_FUNCTION_CALL");
var paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
var paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
var defaultCoder = null;
function getBuiltinCallException(action, tx, data, abiCoder) {
  let message = "missing revert data";
  let reason = null;
  const invocation = null;
  let revert = null;
  if (data) {
    message = "execution reverted";
    const bytes2 = getBytes(data);
    data = hexlify(data);
    if (bytes2.length === 0) {
      message += " (no data present; likely require(false) occurred";
      reason = "require(false)";
    } else if (bytes2.length % 32 !== 4) {
      message += " (could not decode reason; invalid data length)";
    } else if (hexlify(bytes2.slice(0, 4)) === "0x08c379a0") {
      try {
        reason = abiCoder.decode(["string"], bytes2.slice(4))[0];
        revert = {
          signature: "Error(string)",
          name: "Error",
          args: [reason]
        };
        message += `: ${JSON.stringify(reason)}`;
      } catch (error) {
        message += " (could not decode reason; invalid string data)";
      }
    } else if (hexlify(bytes2.slice(0, 4)) === "0x4e487b71") {
      try {
        const code = Number(abiCoder.decode(["uint256"], bytes2.slice(4))[0]);
        revert = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [code]
        };
        reason = `Panic due to ${PanicReasons.get(code) || "UNKNOWN"}(${code})`;
        message += `: ${reason}`;
      } catch (error) {
        message += " (could not decode panic code)";
      }
    } else {
      message += " (unknown custom error)";
    }
  }
  const transaction = {
    to: tx.to ? getAddress(tx.to) : null,
    data: tx.data || "0x"
  };
  if (tx.from) {
    transaction.from = getAddress(tx.from);
  }
  return makeError(message, "CALL_EXCEPTION", {
    action,
    data,
    reason,
    transaction,
    invocation,
    revert
  });
}
var _getCoder, getCoder_fn;
var _AbiCoder = class {
  constructor() {
    __privateAdd(this, _getCoder);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(types) {
    const coders = types.map((type) => __privateMethod(this, _getCoder, getCoder_fn).call(this, ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    return coder.defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(types, values) {
    assertArgumentCount(values.length, types.length, "types/values length mismatch");
    const coders = types.map((type) => __privateMethod(this, _getCoder, getCoder_fn).call(this, ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    const writer = new Writer();
    coder.encode(writer, values);
    return writer.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(types, data, loose) {
    const coders = types.map((type) => __privateMethod(this, _getCoder, getCoder_fn).call(this, ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    return coder.decode(new Reader(data, loose));
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    if (defaultCoder == null) {
      defaultCoder = new _AbiCoder();
    }
    return defaultCoder;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(action, tx, data) {
    return getBuiltinCallException(action, tx, data, _AbiCoder.defaultAbiCoder());
  }
};
var AbiCoder = _AbiCoder;
_getCoder = new WeakSet();
getCoder_fn = function(param) {
  if (param.isArray()) {
    return new ArrayCoder(__privateMethod(this, _getCoder, getCoder_fn).call(this, param.arrayChildren), param.arrayLength, param.name);
  }
  if (param.isTuple()) {
    return new TupleCoder(param.components.map((c) => __privateMethod(this, _getCoder, getCoder_fn).call(this, c)), param.name);
  }
  switch (param.baseType) {
    case "address":
      return new AddressCoder(param.name);
    case "bool":
      return new BooleanCoder(param.name);
    case "string":
      return new StringCoder(param.name);
    case "bytes":
      return new BytesCoder(param.name);
    case "":
      return new NullCoder(param.name);
  }
  let match = param.type.match(paramTypeNumber);
  if (match) {
    let size = parseInt(match[2] || "256");
    assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid " + match[1] + " bit length", "param", param);
    return new NumberCoder(size / 8, match[1] === "int", param.name);
  }
  match = param.type.match(paramTypeBytes);
  if (match) {
    let size = parseInt(match[1]);
    assertArgument(size !== 0 && size <= 32, "invalid bytes length", "param", param);
    return new FixedBytesCoder(size, param.name);
  }
  assertArgument(false, "invalid type", "type", param.type);
};

// node_modules/ethers/lib.esm/abi/bytes32.js
function encodeBytes32String(text) {
  const bytes2 = toUtf8Bytes(text);
  if (bytes2.length > 31) {
    throw new Error("bytes32 string must be less than 32 bytes");
  }
  return zeroPadBytes(bytes2, 32);
}
function decodeBytes32String(_bytes) {
  const data = getBytes(_bytes, "bytes");
  if (data.length !== 32) {
    throw new Error("invalid bytes32 - not 32 bytes long");
  }
  if (data[31] !== 0) {
    throw new Error("invalid bytes32 string - no null terminator");
  }
  let length = 31;
  while (data[length - 1] === 0) {
    length--;
  }
  return toUtf8String(data.slice(0, length));
}

// node_modules/ethers/lib.esm/abi/interface.js
var LogDescription = class {
  /**
   *  @_ignore:
   */
  constructor(fragment, topic, args) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    __publicField(this, "fragment");
    /**
     *  The name of the Event.
     */
    __publicField(this, "name");
    /**
     *  The full Event signature.
     */
    __publicField(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    __publicField(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    __publicField(this, "args");
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      signature,
      topic,
      args
    });
  }
};
var TransactionDescription = class {
  /**
   *  @_ignore:
   */
  constructor(fragment, selector, args, value) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    __publicField(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    __publicField(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    __publicField(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    __publicField(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    __publicField(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    __publicField(this, "value");
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      args,
      signature,
      selector,
      value
    });
  }
};
var ErrorDescription = class {
  /**
   *  @_ignore:
   */
  constructor(fragment, selector, args) {
    /**
     *  The matching fragment.
     */
    __publicField(this, "fragment");
    /**
     *  The name of the Error.
     */
    __publicField(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    __publicField(this, "args");
    /**
     *  The full Error signature.
     */
    __publicField(this, "signature");
    /**
     *  The selector for the Error.
     */
    __publicField(this, "selector");
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      args,
      signature,
      selector
    });
  }
};
var Indexed = class {
  /**
   *  @_ignore:
   */
  constructor(hash2) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    __publicField(this, "hash");
    /**
     *  @_ignore:
     */
    __publicField(this, "_isIndexed");
    defineProperties(this, { hash: hash2, _isIndexed: true });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(value) {
    return !!(value && value._isIndexed);
  }
};
var PanicReasons2 = {
  "0": "generic panic",
  "1": "assert(false)",
  "17": "arithmetic overflow",
  "18": "division or modulo by zero",
  "33": "enum overflow",
  "34": "invalid encoded storage byte array accessed",
  "49": "out-of-bounds array access; popping on an empty array",
  "50": "out-of-bounds access of an array or bytesN",
  "65": "out of memory",
  "81": "uninitialized function"
};
var BuiltinErrors = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (message) => {
      return `reverted with reason string ${JSON.stringify(message)}`;
    }
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (code) => {
      let reason = "unknown panic code";
      if (code >= 0 && code <= 255 && PanicReasons2[code.toString()]) {
        reason = PanicReasons2[code.toString()];
      }
      return `reverted with panic code 0x${code.toString(16)} (${reason})`;
    }
  }
};
var _errors, _events, _functions, _abiCoder, _getFunction, getFunction_fn, _getEvent, getEvent_fn;
var _Interface = class {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(fragments) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    __privateAdd(this, _getFunction);
    // Find an event definition by any means necessary (unless it is ambiguous)
    __privateAdd(this, _getEvent);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    __publicField(this, "fragments");
    /**
     *  The Contract constructor.
     */
    __publicField(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    __publicField(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    __publicField(this, "receive");
    __privateAdd(this, _errors, void 0);
    __privateAdd(this, _events, void 0);
    __privateAdd(this, _functions, void 0);
    //    #structs: Map<string, StructFragment>;
    __privateAdd(this, _abiCoder, void 0);
    let abi = [];
    if (typeof fragments === "string") {
      abi = JSON.parse(fragments);
    } else {
      abi = fragments;
    }
    __privateSet(this, _functions, /* @__PURE__ */ new Map());
    __privateSet(this, _errors, /* @__PURE__ */ new Map());
    __privateSet(this, _events, /* @__PURE__ */ new Map());
    const frags = [];
    for (const a of abi) {
      try {
        frags.push(Fragment.from(a));
      } catch (error) {
        console.log("EE", error);
      }
    }
    defineProperties(this, {
      fragments: Object.freeze(frags)
    });
    let fallback = null;
    let receive = false;
    __privateSet(this, _abiCoder, this.getAbiCoder());
    this.fragments.forEach((fragment, index) => {
      let bucket;
      switch (fragment.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          defineProperties(this, { deploy: fragment });
          return;
        case "fallback":
          if (fragment.inputs.length === 0) {
            receive = true;
          } else {
            assertArgument(!fallback || fragment.payable !== fallback.payable, "conflicting fallback fragments", `fragments[${index}]`, fragment);
            fallback = fragment;
            receive = fallback.payable;
          }
          return;
        case "function":
          bucket = __privateGet(this, _functions);
          break;
        case "event":
          bucket = __privateGet(this, _events);
          break;
        case "error":
          bucket = __privateGet(this, _errors);
          break;
        default:
          return;
      }
      const signature = fragment.format();
      if (bucket.has(signature)) {
        return;
      }
      bucket.set(signature, fragment);
    });
    if (!this.deploy) {
      defineProperties(this, {
        deploy: ConstructorFragment.from("constructor()")
      });
    }
    defineProperties(this, { fallback, receive });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(minimal) {
    const format = minimal ? "minimal" : "full";
    const abi = this.fragments.map((f2) => f2.format(format));
    return abi;
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const abi = this.fragments.map((f2) => f2.format("json"));
    return JSON.stringify(abi.map((j) => JSON.parse(j)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return AbiCoder.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(key) {
    const fragment = __privateMethod(this, _getFunction, getFunction_fn).call(this, key, null, false);
    assertArgument(fragment, "no matching function", "key", key);
    return fragment.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(key) {
    return !!__privateMethod(this, _getFunction, getFunction_fn).call(this, key, null, false);
  }
  /**
   *  Get the [[FunctionFragment]] for %%key%%, which may be a function
   *  selector, function name or function signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple functions match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single function in
   *  the ABI, this will throw.
   */
  getFunction(key, values) {
    return __privateMethod(this, _getFunction, getFunction_fn).call(this, key, values || null, true);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(callback) {
    const names2 = Array.from(__privateGet(this, _functions).keys());
    names2.sort((a, b2) => a.localeCompare(b2));
    for (let i = 0; i < names2.length; i++) {
      const name = names2[i];
      callback(__privateGet(this, _functions).get(name), i);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(key) {
    const fragment = __privateMethod(this, _getEvent, getEvent_fn).call(this, key, null, false);
    assertArgument(fragment, "no matching event", "key", key);
    return fragment.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(key) {
    return !!__privateMethod(this, _getEvent, getEvent_fn).call(this, key, null, false);
  }
  /**
   *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple events match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single event in
   *  the ABI, this will throw.
   */
  getEvent(key, values) {
    return __privateMethod(this, _getEvent, getEvent_fn).call(this, key, values || null, true);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(callback) {
    const names2 = Array.from(__privateGet(this, _events).keys());
    names2.sort((a, b2) => a.localeCompare(b2));
    for (let i = 0; i < names2.length; i++) {
      const name = names2[i];
      callback(__privateGet(this, _events).get(name), i);
    }
  }
  /**
   *  Get the [[ErrorFragment]] for %%key%%, which may be an error
   *  selector, error name or error signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple errors match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single error in
   *  the ABI, this will throw.
   */
  getError(key, values) {
    if (isHexString(key)) {
      const selector = key.toLowerCase();
      if (BuiltinErrors[selector]) {
        return ErrorFragment.from(BuiltinErrors[selector].signature);
      }
      for (const fragment of __privateGet(this, _errors).values()) {
        if (selector === fragment.selector) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of __privateGet(this, _errors)) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (matching.length === 0) {
        if (key === "Error") {
          return ErrorFragment.from("error Error(string)");
        }
        if (key === "Panic") {
          return ErrorFragment.from("error Panic(uint256)");
        }
        return null;
      } else if (matching.length > 1) {
        const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
        assertArgument(false, `ambiguous error description (i.e. ${matchStr})`, "name", key);
      }
      return matching[0];
    }
    key = ErrorFragment.from(key).format();
    if (key === "Error(string)") {
      return ErrorFragment.from("error Error(string)");
    }
    if (key === "Panic(uint256)") {
      return ErrorFragment.from("error Panic(uint256)");
    }
    const result = __privateGet(this, _errors).get(key);
    if (result) {
      return result;
    }
    return null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(callback) {
    const names2 = Array.from(__privateGet(this, _errors).keys());
    names2.sort((a, b2) => a.localeCompare(b2));
    for (let i = 0; i < names2.length; i++) {
      const name = names2[i];
      callback(__privateGet(this, _errors).get(name), i);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(params, data) {
    return __privateGet(this, _abiCoder).decode(params, data);
  }
  _encodeParams(params, values) {
    return __privateGet(this, _abiCoder).encode(params, values);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(values) {
    return this._encodeParams(this.deploy.inputs, values || []);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified error (see [[getError]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeErrorResult(fragment, data) {
    if (typeof fragment === "string") {
      const f2 = this.getError(fragment);
      assertArgument(f2, "unknown error", "fragment", fragment);
      fragment = f2;
    }
    assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match error ${fragment.name}.`, "data", data);
    return this._decodeParams(fragment.inputs, dataSlice(data, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getError(fragment);
      assertArgument(f2, "unknown error", "fragment", fragment);
      fragment = f2;
    }
    return concat([
      fragment.selector,
      this._encodeParams(fragment.inputs, values || [])
    ]);
  }
  /**
   *  Decodes the %%data%% from a transaction ``tx.data`` for
   *  the function specified (see [[getFunction]] for valid values
   *  for %%fragment%%).
   *
   *  Most developers should prefer the [[parseTransaction]] method
   *  instead, which will automatically detect the fragment.
   */
  decodeFunctionData(fragment, data) {
    if (typeof fragment === "string") {
      const f2 = this.getFunction(fragment);
      assertArgument(f2, "unknown function", "fragment", fragment);
      fragment = f2;
    }
    assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match function ${fragment.name}.`, "data", data);
    return this._decodeParams(fragment.inputs, dataSlice(data, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getFunction(fragment);
      assertArgument(f2, "unknown function", "fragment", fragment);
      fragment = f2;
    }
    return concat([
      fragment.selector,
      this._encodeParams(fragment.inputs, values || [])
    ]);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeFunctionResult(fragment, data) {
    if (typeof fragment === "string") {
      const f2 = this.getFunction(fragment);
      assertArgument(f2, "unknown function", "fragment", fragment);
      fragment = f2;
    }
    let message = "invalid length for result data";
    const bytes2 = getBytesCopy(data);
    if (bytes2.length % 32 === 0) {
      try {
        return __privateGet(this, _abiCoder).decode(fragment.outputs, bytes2);
      } catch (error) {
        message = "could not decode result data";
      }
    }
    assert(false, message, "BAD_DATA", {
      value: hexlify(bytes2),
      info: { method: fragment.name, signature: fragment.format() }
    });
  }
  makeError(_data5, tx) {
    const data = getBytes(_data5, "data");
    const error = AbiCoder.getBuiltinCallException("call", tx, data);
    const customPrefix = "execution reverted (unknown custom error)";
    if (error.message.startsWith(customPrefix)) {
      const selector = hexlify(data.slice(0, 4));
      const ef = this.getError(selector);
      if (ef) {
        try {
          const args = __privateGet(this, _abiCoder).decode(ef.inputs, data.slice(4));
          error.revert = {
            name: ef.name,
            signature: ef.format(),
            args
          };
          error.reason = error.revert.signature;
          error.message = `execution reverted: ${error.reason}`;
        } catch (e) {
          error.message = `execution reverted (coult not decode custom error)`;
        }
      }
    }
    const parsed = this.parseTransaction(tx);
    if (parsed) {
      error.invocation = {
        method: parsed.name,
        signature: parsed.signature,
        args: parsed.args
      };
    }
    return error;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getFunction(fragment);
      assertArgument(f2, "unknown function", "fragment", fragment);
      fragment = f2;
    }
    return hexlify(__privateGet(this, _abiCoder).encode(fragment.outputs, values || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getEvent(fragment);
      assertArgument(f2, "unknown event", "eventFragment", fragment);
      fragment = f2;
    }
    assert(values.length <= fragment.inputs.length, `too many arguments for ${fragment.format()}`, "UNEXPECTED_ARGUMENT", { count: values.length, expectedCount: fragment.inputs.length });
    const topics = [];
    if (!fragment.anonymous) {
      topics.push(fragment.topicHash);
    }
    const encodeTopic = (param, value) => {
      if (param.type === "string") {
        return id(value);
      } else if (param.type === "bytes") {
        return keccak256(hexlify(value));
      }
      if (param.type === "bool" && typeof value === "boolean") {
        value = value ? "0x01" : "0x00";
      }
      if (param.type.match(/^u?int/)) {
        value = toBeHex(value);
      }
      if (param.type === "address") {
        __privateGet(this, _abiCoder).encode(["address"], [value]);
      }
      return zeroPadValue(hexlify(value), 32);
    };
    values.forEach((value, index) => {
      const param = fragment.inputs[index];
      if (!param.indexed) {
        assertArgument(value == null, "cannot filter non-indexed parameters; must be null", "contract." + param.name, value);
        return;
      }
      if (value == null) {
        topics.push(null);
      } else if (param.baseType === "array" || param.baseType === "tuple") {
        assertArgument(false, "filtering with tuples or arrays not supported", "contract." + param.name, value);
      } else if (Array.isArray(value)) {
        topics.push(value.map((value2) => encodeTopic(param, value2)));
      } else {
        topics.push(encodeTopic(param, value));
      }
    });
    while (topics.length && topics[topics.length - 1] === null) {
      topics.pop();
    }
    return topics;
  }
  encodeEventLog(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getEvent(fragment);
      assertArgument(f2, "unknown event", "eventFragment", fragment);
      fragment = f2;
    }
    const topics = [];
    const dataTypes = [];
    const dataValues = [];
    if (!fragment.anonymous) {
      topics.push(fragment.topicHash);
    }
    assertArgument(values.length === fragment.inputs.length, "event arguments/values mismatch", "values", values);
    fragment.inputs.forEach((param, index) => {
      const value = values[index];
      if (param.indexed) {
        if (param.type === "string") {
          topics.push(id(value));
        } else if (param.type === "bytes") {
          topics.push(keccak256(value));
        } else if (param.baseType === "tuple" || param.baseType === "array") {
          throw new Error("not implemented");
        } else {
          topics.push(__privateGet(this, _abiCoder).encode([param.type], [value]));
        }
      } else {
        dataTypes.push(param);
        dataValues.push(value);
      }
    });
    return {
      data: __privateGet(this, _abiCoder).encode(dataTypes, dataValues),
      topics
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(fragment, data, topics) {
    if (typeof fragment === "string") {
      const f2 = this.getEvent(fragment);
      assertArgument(f2, "unknown event", "eventFragment", fragment);
      fragment = f2;
    }
    if (topics != null && !fragment.anonymous) {
      const eventTopic = fragment.topicHash;
      assertArgument(isHexString(topics[0], 32) && topics[0].toLowerCase() === eventTopic, "fragment/topic mismatch", "topics[0]", topics[0]);
      topics = topics.slice(1);
    }
    const indexed = [];
    const nonIndexed = [];
    const dynamic = [];
    fragment.inputs.forEach((param, index) => {
      if (param.indexed) {
        if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
          indexed.push(ParamType.from({ type: "bytes32", name: param.name }));
          dynamic.push(true);
        } else {
          indexed.push(param);
          dynamic.push(false);
        }
      } else {
        nonIndexed.push(param);
        dynamic.push(false);
      }
    });
    const resultIndexed = topics != null ? __privateGet(this, _abiCoder).decode(indexed, concat(topics)) : null;
    const resultNonIndexed = __privateGet(this, _abiCoder).decode(nonIndexed, data, true);
    const values = [];
    const keys = [];
    let nonIndexedIndex = 0, indexedIndex = 0;
    fragment.inputs.forEach((param, index) => {
      let value = null;
      if (param.indexed) {
        if (resultIndexed == null) {
          value = new Indexed(null);
        } else if (dynamic[index]) {
          value = new Indexed(resultIndexed[indexedIndex++]);
        } else {
          try {
            value = resultIndexed[indexedIndex++];
          } catch (error) {
            value = error;
          }
        }
      } else {
        try {
          value = resultNonIndexed[nonIndexedIndex++];
        } catch (error) {
          value = error;
        }
      }
      values.push(value);
      keys.push(param.name || null);
    });
    return Result.fromItems(values, keys);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(tx) {
    const data = getBytes(tx.data, "tx.data");
    const value = getBigInt(tx.value != null ? tx.value : 0, "tx.value");
    const fragment = this.getFunction(hexlify(data.slice(0, 4)));
    if (!fragment) {
      return null;
    }
    const args = __privateGet(this, _abiCoder).decode(fragment.inputs, data.slice(4));
    return new TransactionDescription(fragment, fragment.selector, args, value);
  }
  parseCallResult(data) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(log) {
    const fragment = this.getEvent(log.topics[0]);
    if (!fragment || fragment.anonymous) {
      return null;
    }
    return new LogDescription(fragment, fragment.topicHash, this.decodeEventLog(fragment, log.data, log.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseError(data) {
    const hexData = hexlify(data);
    const fragment = this.getError(dataSlice(hexData, 0, 4));
    if (!fragment) {
      return null;
    }
    const args = __privateGet(this, _abiCoder).decode(fragment.inputs, dataSlice(hexData, 4));
    return new ErrorDescription(fragment, fragment.selector, args);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(value) {
    if (value instanceof _Interface) {
      return value;
    }
    if (typeof value === "string") {
      return new _Interface(JSON.parse(value));
    }
    if (typeof value.format === "function") {
      return new _Interface(value.format("json"));
    }
    return new _Interface(value);
  }
};
var Interface = _Interface;
_errors = new WeakMap();
_events = new WeakMap();
_functions = new WeakMap();
_abiCoder = new WeakMap();
_getFunction = new WeakSet();
getFunction_fn = function(key, values, forceUnique) {
  if (isHexString(key)) {
    const selector = key.toLowerCase();
    for (const fragment of __privateGet(this, _functions).values()) {
      if (selector === fragment.selector) {
        return fragment;
      }
    }
    return null;
  }
  if (key.indexOf("(") === -1) {
    const matching = [];
    for (const [name, fragment] of __privateGet(this, _functions)) {
      if (name.split(
        "("
        /* fix:) */
      )[0] === key) {
        matching.push(fragment);
      }
    }
    if (values) {
      const lastValue = values.length > 0 ? values[values.length - 1] : null;
      let valueLength = values.length;
      let allowOptions = true;
      if (Typed.isTyped(lastValue) && lastValue.type === "overrides") {
        allowOptions = false;
        valueLength--;
      }
      for (let i = matching.length - 1; i >= 0; i--) {
        const inputs = matching[i].inputs.length;
        if (inputs !== valueLength && (!allowOptions || inputs !== valueLength - 1)) {
          matching.splice(i, 1);
        }
      }
      for (let i = matching.length - 1; i >= 0; i--) {
        const inputs = matching[i].inputs;
        for (let j = 0; j < values.length; j++) {
          if (!Typed.isTyped(values[j])) {
            continue;
          }
          if (j >= inputs.length) {
            if (values[j].type === "overrides") {
              continue;
            }
            matching.splice(i, 1);
            break;
          }
          if (values[j].type !== inputs[j].baseType) {
            matching.splice(i, 1);
            break;
          }
        }
      }
    }
    if (matching.length === 1 && values && values.length !== matching[0].inputs.length) {
      const lastArg = values[values.length - 1];
      if (lastArg == null || Array.isArray(lastArg) || typeof lastArg !== "object") {
        matching.splice(0, 1);
      }
    }
    if (matching.length === 0) {
      return null;
    }
    if (matching.length > 1 && forceUnique) {
      const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
      assertArgument(false, `ambiguous function description (i.e. matches ${matchStr})`, "key", key);
    }
    return matching[0];
  }
  const result = __privateGet(this, _functions).get(FunctionFragment.from(key).format());
  if (result) {
    return result;
  }
  return null;
};
_getEvent = new WeakSet();
getEvent_fn = function(key, values, forceUnique) {
  if (isHexString(key)) {
    const eventTopic = key.toLowerCase();
    for (const fragment of __privateGet(this, _events).values()) {
      if (eventTopic === fragment.topicHash) {
        return fragment;
      }
    }
    return null;
  }
  if (key.indexOf("(") === -1) {
    const matching = [];
    for (const [name, fragment] of __privateGet(this, _events)) {
      if (name.split(
        "("
        /* fix:) */
      )[0] === key) {
        matching.push(fragment);
      }
    }
    if (values) {
      for (let i = matching.length - 1; i >= 0; i--) {
        if (matching[i].inputs.length < values.length) {
          matching.splice(i, 1);
        }
      }
      for (let i = matching.length - 1; i >= 0; i--) {
        const inputs = matching[i].inputs;
        for (let j = 0; j < values.length; j++) {
          if (!Typed.isTyped(values[j])) {
            continue;
          }
          if (values[j].type !== inputs[j].baseType) {
            matching.splice(i, 1);
            break;
          }
        }
      }
    }
    if (matching.length === 0) {
      return null;
    }
    if (matching.length > 1 && forceUnique) {
      const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
      assertArgument(false, `ambiguous event description (i.e. matches ${matchStr})`, "key", key);
    }
    return matching[0];
  }
  const result = __privateGet(this, _events).get(EventFragment.from(key).format());
  if (result) {
    return result;
  }
  return null;
};

// node_modules/ethers/lib.esm/providers/provider.js
var BN_09 = BigInt(0);
function getValue2(value) {
  if (value == null) {
    return null;
  }
  return value;
}
function toJson(value) {
  if (value == null) {
    return null;
  }
  return value.toString();
}
var FeeData = class {
  /**
   *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
   *  %%maxPriorityFeePerGas%%.
   */
  constructor(gasPrice, maxFeePerGas, maxPriorityFeePerGas) {
    /**
     *  The gas price for legacy networks.
     */
    __publicField(this, "gasPrice");
    /**
     *  The maximum fee to pay per gas.
     *
     *  The base fee per gas is defined by the network and based on
     *  congestion, increasing the cost during times of heavy load
     *  and lowering when less busy.
     *
     *  The actual fee per gas will be the base fee for the block
     *  and the priority fee, up to the max fee per gas.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    __publicField(this, "maxFeePerGas");
    /**
     *  The additional amout to pay per gas to encourage a validator
     *  to include the transaction.
     *
     *  The purpose of this is to compensate the validator for the
     *  adjusted risk for including a given transaction.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    __publicField(this, "maxPriorityFeePerGas");
    defineProperties(this, {
      gasPrice: getValue2(gasPrice),
      maxFeePerGas: getValue2(maxFeePerGas),
      maxPriorityFeePerGas: getValue2(maxPriorityFeePerGas)
    });
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { gasPrice, maxFeePerGas, maxPriorityFeePerGas } = this;
    return {
      _type: "FeeData",
      gasPrice: toJson(gasPrice),
      maxFeePerGas: toJson(maxFeePerGas),
      maxPriorityFeePerGas: toJson(maxPriorityFeePerGas)
    };
  }
};
function copyRequest(req) {
  const result = {};
  if (req.to) {
    result.to = req.to;
  }
  if (req.from) {
    result.from = req.from;
  }
  if (req.data) {
    result.data = hexlify(req.data);
  }
  const bigIntKeys = "chainId,gasLimit,gasPrice,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const key of bigIntKeys) {
    if (!(key in req) || req[key] == null) {
      continue;
    }
    result[key] = getBigInt(req[key], `request.${key}`);
  }
  const numberKeys = "type,nonce".split(/,/);
  for (const key of numberKeys) {
    if (!(key in req) || req[key] == null) {
      continue;
    }
    result[key] = getNumber(req[key], `request.${key}`);
  }
  if (req.accessList) {
    result.accessList = accessListify(req.accessList);
  }
  if ("blockTag" in req) {
    result.blockTag = req.blockTag;
  }
  if ("enableCcipRead" in req) {
    result.enableCcipRead = !!req.enableCcipRead;
  }
  if ("customData" in req) {
    result.customData = req.customData;
  }
  return result;
}
var _transactions;
var Block = class {
  /**
   *  Create a new **Block** object.
   *
   *  This should generally not be necessary as the unless implementing a
   *  low-level library.
   */
  constructor(block, provider) {
    /**
     *  The provider connected to the block used to fetch additional details
     *  if necessary.
     */
    __publicField(this, "provider");
    /**
     *  The block number, sometimes called the block height. This is a
     *  sequential number that is one higher than the parent block.
     */
    __publicField(this, "number");
    /**
     *  The block hash.
     *
     *  This hash includes all properties, so can be safely used to identify
     *  an exact set of block properties.
     */
    __publicField(this, "hash");
    /**
     *  The timestamp for this block, which is the number of seconds since
     *  epoch that this block was included.
     */
    __publicField(this, "timestamp");
    /**
     *  The block hash of the parent block.
     */
    __publicField(this, "parentHash");
    /**
     *  The nonce.
     *
     *  On legacy networks, this is the random number inserted which
     *  permitted the difficulty target to be reached.
     */
    __publicField(this, "nonce");
    /**
     *  The difficulty target.
     *
     *  On legacy networks, this is the proof-of-work target required
     *  for a block to meet the protocol rules to be included.
     *
     *  On modern networks, this is a random number arrived at using
     *  randao.  @TODO: Find links?
     */
    __publicField(this, "difficulty");
    /**
     *  The total gas limit for this block.
     */
    __publicField(this, "gasLimit");
    /**
     *  The total gas used in this block.
     */
    __publicField(this, "gasUsed");
    /**
     *  The miner coinbase address, wihch receives any subsidies for
     *  including this block.
     */
    __publicField(this, "miner");
    /**
     *  Any extra data the validator wished to include.
     */
    __publicField(this, "extraData");
    /**
     *  The base fee per gas that all transactions in this block were
     *  charged.
     *
     *  This adjusts after each block, depending on how congested the network
     *  is.
     */
    __publicField(this, "baseFeePerGas");
    __privateAdd(this, _transactions, void 0);
    __privateSet(this, _transactions, block.transactions.map((tx) => {
      if (typeof tx !== "string") {
        return new TransactionResponse(tx, provider);
      }
      return tx;
    }));
    defineProperties(this, {
      provider,
      hash: getValue2(block.hash),
      number: block.number,
      timestamp: block.timestamp,
      parentHash: block.parentHash,
      nonce: block.nonce,
      difficulty: block.difficulty,
      gasLimit: block.gasLimit,
      gasUsed: block.gasUsed,
      miner: block.miner,
      extraData: block.extraData,
      baseFeePerGas: getValue2(block.baseFeePerGas)
    });
  }
  /**
   *  Returns the list of transaction hashes.
   */
  get transactions() {
    return __privateGet(this, _transactions).map((tx) => {
      if (typeof tx === "string") {
        return tx;
      }
      return tx.hash;
    });
  }
  /**
   *  Returns the complete transactions for blocks which
   *  prefetched them, by passing ``true`` to %%prefetchTxs%%
   *  into [[Provider-getBlock]].
   */
  get prefetchedTransactions() {
    const txs = __privateGet(this, _transactions).slice();
    if (txs.length === 0) {
      return [];
    }
    assert(typeof txs[0] === "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
      operation: "transactionResponses()"
    });
    return txs;
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { baseFeePerGas, difficulty, extraData, gasLimit, gasUsed, hash: hash2, miner, nonce, number: number2, parentHash, timestamp, transactions } = this;
    return {
      _type: "Block",
      baseFeePerGas: toJson(baseFeePerGas),
      difficulty: toJson(difficulty),
      extraData,
      gasLimit: toJson(gasLimit),
      gasUsed: toJson(gasUsed),
      hash: hash2,
      miner,
      nonce,
      number: number2,
      parentHash,
      timestamp,
      transactions
    };
  }
  [Symbol.iterator]() {
    let index = 0;
    const txs = this.transactions;
    return {
      next: () => {
        if (index < this.length) {
          return {
            value: txs[index++],
            done: false
          };
        }
        return { value: void 0, done: true };
      }
    };
  }
  /**
   *  The number of transactions in this block.
   */
  get length() {
    return __privateGet(this, _transactions).length;
  }
  /**
   *  The [[link-js-date]] this block was included at.
   */
  get date() {
    if (this.timestamp == null) {
      return null;
    }
    return new Date(this.timestamp * 1e3);
  }
  /**
   *  Get the transaction at %%indexe%% within this block.
   */
  async getTransaction(indexOrHash) {
    let tx = void 0;
    if (typeof indexOrHash === "number") {
      tx = __privateGet(this, _transactions)[indexOrHash];
    } else {
      const hash2 = indexOrHash.toLowerCase();
      for (const v of __privateGet(this, _transactions)) {
        if (typeof v === "string") {
          if (v !== hash2) {
            continue;
          }
          tx = v;
          break;
        } else {
          if (v.hash === hash2) {
            continue;
          }
          tx = v;
          break;
        }
      }
    }
    if (tx == null) {
      throw new Error("no such tx");
    }
    if (typeof tx === "string") {
      return await this.provider.getTransaction(tx);
    } else {
      return tx;
    }
  }
  /**
   *  If a **Block** was fetched with a request to include the transactions
   *  this will allow synchronous access to those transactions.
   *
   *  If the transactions were not prefetched, this will throw.
   */
  getPrefetchedTransaction(indexOrHash) {
    const txs = this.prefetchedTransactions;
    if (typeof indexOrHash === "number") {
      return txs[indexOrHash];
    }
    indexOrHash = indexOrHash.toLowerCase();
    for (const tx of txs) {
      if (tx.hash === indexOrHash) {
        return tx;
      }
    }
    assertArgument(false, "no matching transaction", "indexOrHash", indexOrHash);
  }
  /**
   *  Returns true if this block been mined. This provides a type guard
   *  for all properties on a [[MinedBlock]].
   */
  isMined() {
    return !!this.hash;
  }
  /**
   *  Returns true if this block is an [[link-eip-2930]] block.
   */
  isLondon() {
    return !!this.baseFeePerGas;
  }
  /**
   *  @_ignore:
   */
  orphanedEvent() {
    if (!this.isMined()) {
      throw new Error("");
    }
    return createOrphanedBlockFilter(this);
  }
};
_transactions = new WeakMap();
var Log = class {
  /**
   *  @_ignore:
   */
  constructor(log, provider) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    __publicField(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    __publicField(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    __publicField(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    __publicField(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    __publicField(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    __publicField(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    __publicField(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    __publicField(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    __publicField(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    __publicField(this, "transactionIndex");
    this.provider = provider;
    const topics = Object.freeze(log.topics.slice());
    defineProperties(this, {
      transactionHash: log.transactionHash,
      blockHash: log.blockHash,
      blockNumber: log.blockNumber,
      removed: log.removed,
      address: log.address,
      data: log.data,
      topics,
      index: log.index,
      transactionIndex: log.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address, blockHash, blockNumber, data, index, removed, topics, transactionHash, transactionIndex } = this;
    return {
      _type: "log",
      address,
      blockHash,
      blockNumber,
      data,
      index,
      removed,
      topics,
      transactionHash,
      transactionIndex
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const block = await this.provider.getBlock(this.blockHash);
    assert(!!block, "failed to find transaction", "UNKNOWN_ERROR", {});
    return block;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const tx = await this.provider.getTransaction(this.transactionHash);
    assert(!!tx, "failed to find transaction", "UNKNOWN_ERROR", {});
    return tx;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const receipt = await this.provider.getTransactionReceipt(this.transactionHash);
    assert(!!receipt, "failed to find transaction receipt", "UNKNOWN_ERROR", {});
    return receipt;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return createRemovedLogFilter(this);
  }
};
var _logs;
var TransactionReceipt = class {
  /**
   *  @_ignore:
   */
  constructor(tx, provider) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    __publicField(this, "provider");
    /**
     *  The address the transaction was send to.
     */
    __publicField(this, "to");
    /**
     *  The sender of the transaction.
     */
    __publicField(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    __publicField(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    __publicField(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    __publicField(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    __publicField(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    __publicField(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    __publicField(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    __publicField(this, "gasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    __publicField(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    __publicField(this, "gasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    __publicField(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    __publicField(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    __publicField(this, "root");
    __privateAdd(this, _logs, void 0);
    __privateSet(this, _logs, Object.freeze(tx.logs.map((log) => {
      return new Log(log, provider);
    })));
    let gasPrice = BN_09;
    if (tx.effectiveGasPrice != null) {
      gasPrice = tx.effectiveGasPrice;
    } else if (tx.gasPrice != null) {
      gasPrice = tx.gasPrice;
    }
    defineProperties(this, {
      provider,
      to: tx.to,
      from: tx.from,
      contractAddress: tx.contractAddress,
      hash: tx.hash,
      index: tx.index,
      blockHash: tx.blockHash,
      blockNumber: tx.blockNumber,
      logsBloom: tx.logsBloom,
      gasUsed: tx.gasUsed,
      cumulativeGasUsed: tx.cumulativeGasUsed,
      gasPrice,
      type: tx.type,
      //byzantium: tx.byzantium,
      status: tx.status,
      root: tx.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return __privateGet(this, _logs);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to,
      from,
      contractAddress,
      hash: hash2,
      index,
      blockHash,
      blockNumber,
      logsBloom,
      logs,
      //byzantium, 
      status,
      root
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash,
      blockNumber,
      //byzantium, 
      contractAddress,
      cumulativeGasUsed: toJson(this.cumulativeGasUsed),
      from,
      gasPrice: toJson(this.gasPrice),
      gasUsed: toJson(this.gasUsed),
      hash: hash2,
      index,
      logs,
      logsBloom,
      root,
      status,
      to
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.length) {
          return { value: this.logs[index++], done: false };
        }
        return { value: void 0, done: true };
      }
    };
  }
  /**
   *  The total fee for this transaction, in wei.
   */
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  /**
   *  Resolves to the block this transaction occurred in.
   */
  async getBlock() {
    const block = await this.provider.getBlock(this.blockHash);
    if (block == null) {
      throw new Error("TODO");
    }
    return block;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const tx = await this.provider.getTransaction(this.hash);
    if (tx == null) {
      throw new Error("TODO");
    }
    return tx;
  }
  /**
   *  Resolves to the return value of the execution of this transaction.
   *
   *  Support for this feature is limited, as it requires an archive node
   *  with the ``debug_`` or ``trace_`` API enabled.
   */
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  /**
   *  Resolves to the number of confirmations this transaction has.
   */
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return createRemovedTransactionFilter(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(other) {
    assert(!other || other.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" });
    return createReorderedTransactionFilter(this, other);
  }
};
_logs = new WeakMap();
var _startBlock;
var _TransactionResponse = class {
  /**
   *  @_ignore:
   */
  constructor(tx, provider) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    __publicField(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    __publicField(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    __publicField(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    __publicField(this, "index");
    /**
     *  The transaction hash.
     */
    __publicField(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    __publicField(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    __publicField(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    __publicField(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    __publicField(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    __publicField(this, "gasLimit");
    /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */
    __publicField(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    __publicField(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    __publicField(this, "maxFeePerGas");
    /**
     *  The data.
     */
    __publicField(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    __publicField(this, "value");
    /**
     *  The chain ID.
     */
    __publicField(this, "chainId");
    /**
     *  The signature.
     */
    __publicField(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    __publicField(this, "accessList");
    __privateAdd(this, _startBlock, void 0);
    this.provider = provider;
    this.blockNumber = tx.blockNumber != null ? tx.blockNumber : null;
    this.blockHash = tx.blockHash != null ? tx.blockHash : null;
    this.hash = tx.hash;
    this.index = tx.index;
    this.type = tx.type;
    this.from = tx.from;
    this.to = tx.to || null;
    this.gasLimit = tx.gasLimit;
    this.nonce = tx.nonce;
    this.data = tx.data;
    this.value = tx.value;
    this.gasPrice = tx.gasPrice;
    this.maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? tx.maxPriorityFeePerGas : null;
    this.maxFeePerGas = tx.maxFeePerGas != null ? tx.maxFeePerGas : null;
    this.chainId = tx.chainId;
    this.signature = tx.signature;
    this.accessList = tx.accessList != null ? tx.accessList : null;
    __privateSet(this, _startBlock, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber, blockHash, index, hash: hash2, type, to, from, nonce, data, signature, accessList } = this;
    return {
      _type: "TransactionReceipt",
      accessList,
      blockNumber,
      blockHash,
      chainId: toJson(this.chainId),
      data,
      from,
      gasLimit: toJson(this.gasLimit),
      gasPrice: toJson(this.gasPrice),
      hash: hash2,
      maxFeePerGas: toJson(this.maxFeePerGas),
      maxPriorityFeePerGas: toJson(this.maxPriorityFeePerGas),
      nonce,
      signature,
      to,
      index,
      type,
      value: toJson(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let blockNumber = this.blockNumber;
    if (blockNumber == null) {
      const tx = await this.getTransaction();
      if (tx) {
        blockNumber = tx.blockNumber;
      }
    }
    if (blockNumber == null) {
      return null;
    }
    const block = this.provider.getBlock(blockNumber);
    if (block == null) {
      throw new Error("TODO");
    }
    return block;
  }
  /**
   *  Resolves to this transaction being re-requested from the
   *  provider. This can be used if you have an unmined transaction
   *  and wish to get an up-to-date populated instance.
   */
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  /**
   *  Resolve to the number of confirmations this transaction has.
   */
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx, blockNumber: blockNumber2 } = await resolveProperties({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      if (tx == null || tx.blockNumber == null) {
        return 0;
      }
      return blockNumber2 - tx.blockNumber + 1;
    }
    const blockNumber = await this.provider.getBlockNumber();
    return blockNumber - this.blockNumber + 1;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(_confirms, _timeout2) {
    const confirms = _confirms == null ? 1 : _confirms;
    const timeout = _timeout2 == null ? 0 : _timeout2;
    let startBlock = __privateGet(this, _startBlock);
    let nextScan = -1;
    let stopScanning = startBlock === -1 ? true : false;
    const checkReplacement = async () => {
      if (stopScanning) {
        return null;
      }
      const { blockNumber, nonce } = await resolveProperties({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (nonce < this.nonce) {
        startBlock = blockNumber;
        return;
      }
      if (stopScanning) {
        return null;
      }
      const mined = await this.getTransaction();
      if (mined && mined.blockNumber != null) {
        return;
      }
      if (nextScan === -1) {
        nextScan = startBlock - 3;
        if (nextScan < __privateGet(this, _startBlock)) {
          nextScan = __privateGet(this, _startBlock);
        }
      }
      while (nextScan <= blockNumber) {
        if (stopScanning) {
          return null;
        }
        const block = await this.provider.getBlock(nextScan, true);
        if (block == null) {
          return;
        }
        for (const hash2 of block) {
          if (hash2 === this.hash) {
            return;
          }
        }
        for (let i = 0; i < block.length; i++) {
          const tx = await block.getTransaction(i);
          if (tx.from === this.from && tx.nonce === this.nonce) {
            if (stopScanning) {
              return null;
            }
            const receipt2 = await this.provider.getTransactionReceipt(tx.hash);
            if (receipt2 == null) {
              return;
            }
            if (blockNumber - receipt2.blockNumber + 1 < confirms) {
              return;
            }
            let reason = "replaced";
            if (tx.data === this.data && tx.to === this.to && tx.value === this.value) {
              reason = "repriced";
            } else if (tx.data === "0x" && tx.from === tx.to && tx.value === BN_09) {
              reason = "cancelled";
            }
            assert(false, "transaction was replaced", "TRANSACTION_REPLACED", {
              cancelled: reason === "replaced" || reason === "cancelled",
              reason,
              replacement: tx.replaceableTransaction(startBlock),
              hash: tx.hash,
              receipt: receipt2
            });
          }
        }
        nextScan++;
      }
      return;
    };
    const receipt = await this.provider.getTransactionReceipt(this.hash);
    if (receipt) {
      if (await receipt.confirmations() >= confirms) {
        return receipt;
      }
    } else {
      await checkReplacement();
      if (confirms === 0) {
        return null;
      }
    }
    const waiter = new Promise((resolve, reject) => {
      const cancellers = [];
      const cancel = () => {
        cancellers.forEach((c) => c());
      };
      cancellers.push(() => {
        stopScanning = true;
      });
      if (timeout > 0) {
        const timer = setTimeout(() => {
          cancel();
          reject(makeError("wait for transaction timeout", "TIMEOUT"));
        }, timeout);
        cancellers.push(() => {
          clearTimeout(timer);
        });
      }
      const txListener = async (receipt2) => {
        if (await receipt2.confirmations() >= confirms) {
          cancel();
          resolve(receipt2);
        }
      };
      cancellers.push(() => {
        this.provider.off(this.hash, txListener);
      });
      this.provider.on(this.hash, txListener);
      if (startBlock >= 0) {
        const replaceListener = async () => {
          try {
            await checkReplacement();
          } catch (error) {
            if (isError(error, "TRANSACTION_REPLACED")) {
              cancel();
              reject(error);
              return;
            }
          }
          if (!stopScanning) {
            this.provider.once("block", replaceListener);
          }
        };
        cancellers.push(() => {
          this.provider.off("block", replaceListener);
        });
        this.provider.once("block", replaceListener);
      }
    });
    return await waiter;
  }
  /**
   *  Returns ``true`` if this transaction has been included.
   *
   *  This is effective only as of the time the TransactionResponse
   *  was instantiated. To get up-to-date information, use
   *  [[getTransaction]].
   *
   *  This provides a Type Guard that this transaction will have
   *  non-null property values for properties that are null for
   *  unmined transactions.
   */
  isMined() {
    return this.blockHash != null;
  }
  /**
   *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
   *  transaction.
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
   *  transaction. See [[link-eip-2070]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if the transaction is a London (i.e. ``type == 2``)
   *  transaction. See [[link-eip-1559]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that evict this transaction.
   */
  removedEvent() {
    assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    return createRemovedTransactionFilter(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(other) {
    assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    assert(!other || other.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    return createReorderedTransactionFilter(this, other);
  }
  /**
   *  Returns a new TransactionResponse instance which has the ability to
   *  detect (and throw an error) if the transaction is replaced, which
   *  will begin scanning at %%startBlock%%.
   *
   *  This should generally not be used by developers and is intended
   *  primarily for internal use. Setting an incorrect %%startBlock%% can
   *  have devastating performance consequences if used incorrectly.
   */
  replaceableTransaction(startBlock) {
    assertArgument(Number.isInteger(startBlock) && startBlock >= 0, "invalid startBlock", "startBlock", startBlock);
    const tx = new _TransactionResponse(this, this.provider);
    __privateSet(tx, _startBlock, startBlock);
    return tx;
  }
};
var TransactionResponse = _TransactionResponse;
_startBlock = new WeakMap();
function createOrphanedBlockFilter(block) {
  return { orphan: "drop-block", hash: block.hash, number: block.number };
}
function createReorderedTransactionFilter(tx, other) {
  return { orphan: "reorder-transaction", tx, other };
}
function createRemovedTransactionFilter(tx) {
  return { orphan: "drop-transaction", tx };
}
function createRemovedLogFilter(log) {
  return { orphan: "drop-log", log: {
    transactionHash: log.transactionHash,
    blockHash: log.blockHash,
    blockNumber: log.blockNumber,
    address: log.address,
    data: log.data,
    topics: Object.freeze(log.topics.slice()),
    index: log.index
  } };
}

// node_modules/ethers/lib.esm/contract/wrappers.js
var EventLog = class extends Log {
  /**
   * @_ignore:
   */
  constructor(log, iface, fragment) {
    super(log, log.provider);
    /**
     *  The Contract Interface.
     */
    __publicField(this, "interface");
    /**
     *  The matching event.
     */
    __publicField(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    __publicField(this, "args");
    const args = iface.decodeEventLog(fragment, log.data, log.topics);
    defineProperties(this, { args, fragment, interface: iface });
  }
  /**
   *  The name of the event.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The signature of the event.
   */
  get eventSignature() {
    return this.fragment.format();
  }
};
var _iface;
var ContractTransactionReceipt = class extends TransactionReceipt {
  /**
   *  @_ignore:
   */
  constructor(iface, provider, tx) {
    super(tx, provider);
    __privateAdd(this, _iface, void 0);
    __privateSet(this, _iface, iface);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((log) => {
      const fragment = log.topics.length ? __privateGet(this, _iface).getEvent(log.topics[0]) : null;
      if (fragment) {
        return new EventLog(log, __privateGet(this, _iface), fragment);
      } else {
        return log;
      }
    });
  }
};
_iface = new WeakMap();
var _iface2;
var ContractTransactionResponse = class extends TransactionResponse {
  /**
   *  @_ignore:
   */
  constructor(iface, provider, tx) {
    super(tx, provider);
    __privateAdd(this, _iface2, void 0);
    __privateSet(this, _iface2, iface);
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(confirms) {
    const receipt = await super.wait();
    if (receipt == null) {
      return null;
    }
    return new ContractTransactionReceipt(__privateGet(this, _iface2), this.provider, receipt);
  }
};
_iface2 = new WeakMap();
var ContractUnknownEventPayload = class extends EventPayload {
  /**
   *  @_event:
   */
  constructor(contract, listener, filter, log) {
    super(contract, listener, filter);
    /**
     *  The log with no matching events.
     */
    __publicField(this, "log");
    defineProperties(this, { log });
  }
  /**
   *  Resolves to the block the event occured in.
   */
  async getBlock() {
    return await this.log.getBlock();
  }
  /**
   *  Resolves to the transaction the event occured in.
   */
  async getTransaction() {
    return await this.log.getTransaction();
  }
  /**
   *  Resolves to the transaction receipt the event occured in.
   */
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
};
var ContractEventPayload = class extends ContractUnknownEventPayload {
  /**
   *  @_ignore:
   */
  constructor(contract, listener, filter, fragment, _log) {
    super(contract, listener, filter, new EventLog(_log, contract.interface, fragment));
    const args = contract.interface.decodeEventLog(fragment, this.log.data, this.log.topics);
    defineProperties(this, { args, fragment });
  }
  /**
   *  The event name.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The event signature.
   */
  get eventSignature() {
    return this.fragment.format();
  }
};

// node_modules/ethers/lib.esm/contract/contract.js
var BN_010 = BigInt(0);
function canCall(value) {
  return value && typeof value.call === "function";
}
function canEstimate(value) {
  return value && typeof value.estimateGas === "function";
}
function canResolve(value) {
  return value && typeof value.resolveName === "function";
}
function canSend(value) {
  return value && typeof value.sendTransaction === "function";
}
var _filter;
var PreparedTopicFilter = class {
  constructor(contract, fragment, args) {
    __privateAdd(this, _filter, void 0);
    __publicField(this, "fragment");
    defineProperties(this, { fragment });
    if (fragment.inputs.length < args.length) {
      throw new Error("too many arguments");
    }
    const runner = getRunner(contract.runner, "resolveName");
    const resolver = canResolve(runner) ? runner : null;
    __privateSet(this, _filter, async function() {
      const resolvedArgs = await Promise.all(fragment.inputs.map((param, index) => {
        const arg = args[index];
        if (arg == null) {
          return null;
        }
        return param.walkAsync(args[index], (type, value) => {
          if (type === "address") {
            return resolveAddress(value, resolver);
          }
          return value;
        });
      }));
      return contract.interface.encodeFilterTopics(fragment, resolvedArgs);
    }());
  }
  getTopicFilter() {
    return __privateGet(this, _filter);
  }
};
_filter = new WeakMap();
function getRunner(value, feature) {
  if (value == null) {
    return null;
  }
  if (typeof value[feature] === "function") {
    return value;
  }
  if (value.provider && typeof value.provider[feature] === "function") {
    return value.provider;
  }
  return null;
}
function getProvider(value) {
  if (value == null) {
    return null;
  }
  return value.provider || null;
}
async function copyOverrides(arg, allowed) {
  const overrides = copyRequest(Typed.dereference(arg, "overrides"));
  assertArgument(overrides.to == null || (allowed || []).indexOf("to") >= 0, "cannot override to", "overrides.to", overrides.to);
  assertArgument(overrides.data == null || (allowed || []).indexOf("data") >= 0, "cannot override data", "overrides.data", overrides.data);
  if (overrides.from) {
    overrides.from = await resolveAddress(overrides.from);
  }
  return overrides;
}
async function resolveArgs(_runner, inputs, args) {
  const runner = getRunner(_runner, "resolveName");
  const resolver = canResolve(runner) ? runner : null;
  return await Promise.all(inputs.map((param, index) => {
    return param.walkAsync(args[index], (type, value) => {
      value = Typed.dereference(value, type);
      if (type === "address") {
        return resolveAddress(value, resolver);
      }
      return value;
    });
  }));
}
function buildWrappedFallback(contract) {
  const populateTransaction = async function(overrides) {
    const tx = await copyOverrides(overrides, ["data"]);
    tx.to = await contract.getAddress();
    const iface = contract.interface;
    const noValue = getBigInt(tx.value || BN_010, "overrides.value") === BN_010;
    const noData = (tx.data || "0x") === "0x";
    if (iface.fallback && !iface.fallback.payable && iface.receive && !noData && !noValue) {
      assertArgument(false, "cannot send data to receive or send value to non-payable fallback", "overrides", overrides);
    }
    assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
    const payable = iface.receive || iface.fallback && iface.fallback.payable;
    assertArgument(payable || noValue, "cannot send value to non-payable fallback", "overrides.value", tx.value);
    assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
    return tx;
  };
  const staticCall = async function(overrides) {
    const runner = getRunner(contract.runner, "call");
    assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const tx = await populateTransaction(overrides);
    try {
      return await runner.call(tx);
    } catch (error) {
      if (isCallException(error) && error.data) {
        throw contract.interface.makeError(error.data, tx);
      }
      throw error;
    }
  };
  const send = async function(overrides) {
    const runner = contract.runner;
    assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const tx = await runner.sendTransaction(await populateTransaction(overrides));
    const provider = getProvider(contract.runner);
    return new ContractTransactionResponse(contract.interface, provider, tx);
  };
  const estimateGas = async function(overrides) {
    const runner = getRunner(contract.runner, "estimateGas");
    assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
    return await runner.estimateGas(await populateTransaction(overrides));
  };
  const method = async (overrides) => {
    return await send(overrides);
  };
  defineProperties(method, {
    _contract: contract,
    estimateGas,
    populateTransaction,
    send,
    staticCall
  });
  return method;
}
function buildWrappedMethod(contract, key) {
  const getFragment = function(...args) {
    const fragment = contract.interface.getFunction(key, args);
    assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment"
    });
    return fragment;
  };
  const populateTransaction = async function(...args) {
    const fragment = getFragment(...args);
    let overrides = {};
    if (fragment.inputs.length + 1 === args.length) {
      overrides = await copyOverrides(args.pop());
    }
    if (fragment.inputs.length !== args.length) {
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    }
    const resolvedArgs = await resolveArgs(contract.runner, fragment.inputs, args);
    return Object.assign({}, overrides, await resolveProperties({
      to: contract.getAddress(),
      data: contract.interface.encodeFunctionData(fragment, resolvedArgs)
    }));
  };
  const staticCall = async function(...args) {
    const result = await staticCallResult(...args);
    if (result.length === 1) {
      return result[0];
    }
    return result;
  };
  const send = async function(...args) {
    const runner = contract.runner;
    assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const tx = await runner.sendTransaction(await populateTransaction(...args));
    const provider = getProvider(contract.runner);
    return new ContractTransactionResponse(contract.interface, provider, tx);
  };
  const estimateGas = async function(...args) {
    const runner = getRunner(contract.runner, "estimateGas");
    assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
    return await runner.estimateGas(await populateTransaction(...args));
  };
  const staticCallResult = async function(...args) {
    const runner = getRunner(contract.runner, "call");
    assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const tx = await populateTransaction(...args);
    let result = "0x";
    try {
      result = await runner.call(tx);
    } catch (error) {
      if (isCallException(error) && error.data) {
        throw contract.interface.makeError(error.data, tx);
      }
      throw error;
    }
    const fragment = getFragment(...args);
    return contract.interface.decodeFunctionResult(fragment, result);
  };
  const method = async (...args) => {
    const fragment = getFragment(...args);
    if (fragment.constant) {
      return await staticCall(...args);
    }
    return await send(...args);
  };
  defineProperties(method, {
    name: contract.interface.getFunctionName(key),
    _contract: contract,
    _key: key,
    getFragment,
    estimateGas,
    populateTransaction,
    send,
    staticCall,
    staticCallResult
  });
  Object.defineProperty(method, "fragment", {
    configurable: false,
    enumerable: true,
    get: () => {
      const fragment = contract.interface.getFunction(key);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment"
      });
      return fragment;
    }
  });
  return method;
}
function buildWrappedEvent(contract, key) {
  const getFragment = function(...args) {
    const fragment = contract.interface.getEvent(key, args);
    assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment"
    });
    return fragment;
  };
  const method = function(...args) {
    return new PreparedTopicFilter(contract, getFragment(...args), args);
  };
  defineProperties(method, {
    name: contract.interface.getEventName(key),
    _contract: contract,
    _key: key,
    getFragment
  });
  Object.defineProperty(method, "fragment", {
    configurable: false,
    enumerable: true,
    get: () => {
      const fragment = contract.interface.getEvent(key);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment"
      });
      return fragment;
    }
  });
  return method;
}
var internal2 = Symbol.for("_ethersInternal_contract");
var internalValues = /* @__PURE__ */ new WeakMap();
function setInternal(contract, values) {
  internalValues.set(contract[internal2], values);
}
function getInternal(contract) {
  return internalValues.get(contract[internal2]);
}
function isDeferred(value) {
  return value && typeof value === "object" && "getTopicFilter" in value && typeof value.getTopicFilter === "function" && value.fragment;
}
async function getSubInfo(contract, event) {
  let topics;
  let fragment = null;
  if (Array.isArray(event)) {
    const topicHashify = function(name) {
      if (isHexString(name, 32)) {
        return name;
      }
      const fragment2 = contract.interface.getEvent(name);
      assertArgument(fragment2, "unknown fragment", "name", name);
      return fragment2.topicHash;
    };
    topics = event.map((e) => {
      if (e == null) {
        return null;
      }
      if (Array.isArray(e)) {
        return e.map(topicHashify);
      }
      return topicHashify(e);
    });
  } else if (event === "*") {
    topics = [null];
  } else if (typeof event === "string") {
    if (isHexString(event, 32)) {
      topics = [event];
    } else {
      fragment = contract.interface.getEvent(event);
      assertArgument(fragment, "unknown fragment", "event", event);
      topics = [fragment.topicHash];
    }
  } else if (isDeferred(event)) {
    topics = await event.getTopicFilter();
  } else if ("fragment" in event) {
    fragment = event.fragment;
    topics = [fragment.topicHash];
  } else {
    assertArgument(false, "unknown event name", "event", event);
  }
  topics = topics.map((t) => {
    if (t == null) {
      return null;
    }
    if (Array.isArray(t)) {
      const items = Array.from(new Set(t.map((t2) => t2.toLowerCase())).values());
      if (items.length === 1) {
        return items[0];
      }
      items.sort();
      return items;
    }
    return t.toLowerCase();
  });
  const tag = topics.map((t) => {
    if (t == null) {
      return "null";
    }
    if (Array.isArray(t)) {
      return t.join("|");
    }
    return t;
  }).join("&");
  return { fragment, tag, topics };
}
async function hasSub(contract, event) {
  const { subs } = getInternal(contract);
  return subs.get((await getSubInfo(contract, event)).tag) || null;
}
async function getSub(contract, operation, event) {
  const provider = getProvider(contract.runner);
  assert(provider, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation });
  const { fragment, tag, topics } = await getSubInfo(contract, event);
  const { addr, subs } = getInternal(contract);
  let sub = subs.get(tag);
  if (!sub) {
    const address = addr ? addr : contract;
    const filter = { address, topics };
    const listener = (log) => {
      let foundFragment = fragment;
      if (foundFragment == null) {
        try {
          foundFragment = contract.interface.getEvent(log.topics[0]);
        } catch (error) {
        }
      }
      if (foundFragment) {
        const _foundFragment = foundFragment;
        const args = fragment ? contract.interface.decodeEventLog(fragment, log.data, log.topics) : [];
        emit(contract, event, args, (listener2) => {
          return new ContractEventPayload(contract, listener2, event, _foundFragment, log);
        });
      } else {
        emit(contract, event, [], (listener2) => {
          return new ContractUnknownEventPayload(contract, listener2, event, log);
        });
      }
    };
    let starting = [];
    const start = () => {
      if (starting.length) {
        return;
      }
      starting.push(provider.on(filter, listener));
    };
    const stop = async () => {
      if (starting.length == 0) {
        return;
      }
      let started = starting;
      starting = [];
      await Promise.all(started);
      provider.off(filter, listener);
    };
    sub = { tag, listeners: [], start, stop };
    subs.set(tag, sub);
  }
  return sub;
}
var lastEmit = Promise.resolve();
async function _emit(contract, event, args, payloadFunc) {
  await lastEmit;
  const sub = await hasSub(contract, event);
  if (!sub) {
    return false;
  }
  const count = sub.listeners.length;
  sub.listeners = sub.listeners.filter(({ listener, once }) => {
    const passArgs = Array.from(args);
    if (payloadFunc) {
      passArgs.push(payloadFunc(once ? null : listener));
    }
    try {
      listener.call(contract, ...passArgs);
    } catch (error) {
    }
    return !once;
  });
  return count > 0;
}
async function emit(contract, event, args, payloadFunc) {
  try {
    await lastEmit;
  } catch (error) {
  }
  const resultPromise = _emit(contract, event, args, payloadFunc);
  lastEmit = resultPromise;
  return await resultPromise;
}
var passProperties2 = ["then"];
var _a;
var _BaseContract = class {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(target, abi, runner, _deployTx) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    __publicField(this, "target");
    /**
     *  The contract Interface.
     */
    __publicField(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    __publicField(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    __publicField(this, "filters");
    /**
     *  @_ignore:
     */
    __publicField(this, _a);
    /**
     *  The fallback or receive function if any.
     */
    __publicField(this, "fallback");
    assertArgument(typeof target === "string" || isAddressable(target), "invalid value for Contract target", "target", target);
    if (runner == null) {
      runner = null;
    }
    const iface = Interface.from(abi);
    defineProperties(this, { target, runner, interface: iface });
    Object.defineProperty(this, internal2, { value: {} });
    let addrPromise;
    let addr = null;
    let deployTx = null;
    if (_deployTx) {
      const provider = getProvider(runner);
      deployTx = new ContractTransactionResponse(this.interface, provider, _deployTx);
    }
    let subs = /* @__PURE__ */ new Map();
    if (typeof target === "string") {
      if (isHexString(target)) {
        addr = target;
        addrPromise = Promise.resolve(target);
      } else {
        const resolver = getRunner(runner, "resolveName");
        if (!canResolve(resolver)) {
          throw makeError("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        }
        addrPromise = resolver.resolveName(target).then((addr2) => {
          if (addr2 == null) {
            throw new Error("TODO");
          }
          getInternal(this).addr = addr2;
          return addr2;
        });
      }
    } else {
      addrPromise = target.getAddress().then((addr2) => {
        if (addr2 == null) {
          throw new Error("TODO");
        }
        getInternal(this).addr = addr2;
        return addr2;
      });
    }
    setInternal(this, { addrPromise, addr, deployTx, subs });
    const filters = new Proxy({}, {
      get: (target2, _prop, receiver) => {
        if (passProperties2.indexOf(_prop) >= 0) {
          return Reflect.get(target2, _prop, receiver);
        }
        const prop = String(_prop);
        const result = this.getEvent(prop);
        if (result) {
          return result;
        }
        throw new Error(`unknown contract event: ${prop}`);
      },
      has: (target2, prop) => {
        if (passProperties2.indexOf(prop) >= 0) {
          return Reflect.has(target2, prop);
        }
        return Reflect.has(target2, prop) || this.interface.hasEvent(String(prop));
      }
    });
    defineProperties(this, { filters });
    defineProperties(this, {
      fallback: iface.receive || iface.fallback ? buildWrappedFallback(this) : null
    });
    return new Proxy(this, {
      get: (target2, _prop, receiver) => {
        if (_prop in target2 || passProperties2.indexOf(_prop) >= 0) {
          return Reflect.get(target2, _prop, receiver);
        }
        const prop = String(_prop);
        const result = target2.getFunction(prop);
        if (result) {
          return result;
        }
        throw new Error(`unknown contract method: ${prop}`);
      },
      has: (target2, prop) => {
        if (prop in target2 || passProperties2.indexOf(prop) >= 0) {
          return Reflect.has(target2, prop);
        }
        return target2.interface.hasFunction(String(prop));
      }
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(runner) {
    return new _BaseContract(this.target, this.interface, runner);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(target) {
    return new _BaseContract(target, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await getInternal(this).addrPromise;
  }
  /**
   *  Return the dedployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const provider = getProvider(this.runner);
    assert(provider, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const code = await provider.getCode(await this.getAddress());
    if (code === "0x") {
      return null;
    }
    return code;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const deployTx = this.deploymentTransaction();
    if (deployTx) {
      await deployTx.wait();
      return this;
    }
    const code = await this.getDeployedCode();
    if (code != null) {
      return this;
    }
    const provider = getProvider(this.runner);
    assert(provider != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" });
    return new Promise((resolve, reject) => {
      const checkCode = async () => {
        try {
          const code2 = await this.getDeployedCode();
          if (code2 != null) {
            return resolve(this);
          }
          provider.once("block", checkCode);
        } catch (error) {
          reject(error);
        }
      };
      checkCode();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return getInternal(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(key) {
    if (typeof key !== "string") {
      key = key.format();
    }
    const func = buildWrappedMethod(this, key);
    return func;
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(key) {
    if (typeof key !== "string") {
      key = key.format();
    }
    return buildWrappedEvent(this, key);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(hash2) {
    throw new Error("@TODO");
  }
  /**
   *  Provide historic access to event data for %%event%% in the range
   *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
   *  inclusive.
   */
  async queryFilter(event, fromBlock, toBlock) {
    if (fromBlock == null) {
      fromBlock = 0;
    }
    if (toBlock == null) {
      toBlock = "latest";
    }
    const { addr, addrPromise } = getInternal(this);
    const address = addr ? addr : await addrPromise;
    const { fragment, topics } = await getSubInfo(this, event);
    const filter = { address, topics, fromBlock, toBlock };
    const provider = getProvider(this.runner);
    assert(provider, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" });
    return (await provider.getLogs(filter)).map((log) => {
      let foundFragment = fragment;
      if (foundFragment == null) {
        try {
          foundFragment = this.interface.getEvent(log.topics[0]);
        } catch (error) {
        }
      }
      if (foundFragment) {
        return new EventLog(log, this.interface, foundFragment);
      } else {
        return new Log(log, provider);
      }
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(event, listener) {
    const sub = await getSub(this, "on", event);
    sub.listeners.push({ listener, once: false });
    sub.start();
    return this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(event, listener) {
    const sub = await getSub(this, "once", event);
    sub.listeners.push({ listener, once: true });
    sub.start();
    return this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(event, ...args) {
    return await emit(this, event, args, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return 0;
      }
      return sub.listeners.length;
    }
    const { subs } = getInternal(this);
    let total = 0;
    for (const { listeners } of subs.values()) {
      total += listeners.length;
    }
    return total;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return [];
      }
      return sub.listeners.map(({ listener }) => listener);
    }
    const { subs } = getInternal(this);
    let result = [];
    for (const { listeners } of subs.values()) {
      result = result.concat(listeners.map(({ listener }) => listener));
    }
    return result;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(event, listener) {
    const sub = await hasSub(this, event);
    if (!sub) {
      return this;
    }
    if (listener) {
      const index = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
      if (index >= 0) {
        sub.listeners.splice(index, 1);
      }
    }
    if (listener == null || sub.listeners.length === 0) {
      sub.stop();
      getInternal(this).subs.delete(sub.tag);
    }
    return this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return this;
      }
      sub.stop();
      getInternal(this).subs.delete(sub.tag);
    } else {
      const { subs } = getInternal(this);
      for (const { tag, stop } of subs.values()) {
        stop();
        subs.delete(tag);
      }
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(event, listener) {
    return await this.on(event, listener);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(event, listener) {
    return await this.off(event, listener);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(abi) {
    class CustomContract extends _BaseContract {
      constructor(address, runner = null) {
        super(address, abi, runner);
      }
    }
    return CustomContract;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(target, abi, runner) {
    if (runner == null) {
      runner = null;
    }
    const contract = new this(target, abi, runner);
    return contract;
  }
};
var BaseContract = _BaseContract;
_a = internal2;
function _ContractBase() {
  return BaseContract;
}
var Contract = class extends _ContractBase() {
};

// node_modules/ethers/lib.esm/contract/factory.js
var ContractFactory = class {
  /**
   *  Create a new **ContractFactory** with %%abi%% and %%bytecode%%,
   *  optionally connected to %%runner%%.
   *
   *  The %%bytecode%% may be the ``bytecode`` property within the
   *  standard Solidity JSON output.
   */
  constructor(abi, bytecode, runner) {
    /**
     *  The Contract Interface.
     */
    __publicField(this, "interface");
    /**
     *  The Contract deployment bytecode. Often called the initcode.
     */
    __publicField(this, "bytecode");
    /**
     *  The ContractRunner to deploy the Contract as.
     */
    __publicField(this, "runner");
    const iface = Interface.from(abi);
    if (bytecode instanceof Uint8Array) {
      bytecode = hexlify(getBytes(bytecode));
    } else {
      if (typeof bytecode === "object") {
        bytecode = bytecode.object;
      }
      if (!bytecode.startsWith("0x")) {
        bytecode = "0x" + bytecode;
      }
      bytecode = hexlify(getBytes(bytecode));
    }
    defineProperties(this, {
      bytecode,
      interface: iface,
      runner: runner || null
    });
  }
  attach(target) {
    return new BaseContract(target, this.interface, this.runner);
  }
  /**
   *  Resolves to the transaction to deploy the contract, passing %%args%%
   *  into the constructor.
   */
  async getDeployTransaction(...args) {
    let overrides = {};
    const fragment = this.interface.deploy;
    if (fragment.inputs.length + 1 === args.length) {
      overrides = await copyOverrides(args.pop());
    }
    if (fragment.inputs.length !== args.length) {
      throw new Error("incorrect number of arguments to constructor");
    }
    const resolvedArgs = await resolveArgs(this.runner, fragment.inputs, args);
    const data = concat([this.bytecode, this.interface.encodeDeploy(resolvedArgs)]);
    return Object.assign({}, overrides, { data });
  }
  /**
   *  Resolves to the Contract deployed by passing %%args%% into the
   *  constructor.
   *
   *  This will resovle to the Contract before it has been deployed to the
   *  network, so the [[BaseContract-waitForDeployment]] should be used before
   *  sending any transactions to it.
   */
  async deploy(...args) {
    const tx = await this.getDeployTransaction(...args);
    assert(this.runner && typeof this.runner.sendTransaction === "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
      operation: "sendTransaction"
    });
    const sentTx = await this.runner.sendTransaction(tx);
    const address = getCreateAddress(sentTx);
    return new BaseContract(address, this.interface, this.runner, sentTx);
  }
  /**
   *  Return a new **ContractFactory** with the same ABI and bytecode,
   *  but connected to %%runner%%.
   */
  connect(runner) {
    return new ContractFactory(this.interface, this.bytecode, runner);
  }
  /**
   *  Create a new **ContractFactory** from the standard Solidity JSON output.
   */
  static fromSolidity(output2, runner) {
    assertArgument(output2 != null, "bad compiler output", "output", output2);
    if (typeof output2 === "string") {
      output2 = JSON.parse(output2);
    }
    const abi = output2.abi;
    let bytecode = "";
    if (output2.bytecode) {
      bytecode = output2.bytecode;
    } else if (output2.evm && output2.evm.bytecode) {
      bytecode = output2.evm.bytecode;
    }
    return new this(abi, bytecode, runner);
  }
};

// node_modules/ethers/lib.esm/providers/ens-resolver.js
function getIpfsLink(link) {
  if (link.match(/^ipfs:\/\/ipfs\//i)) {
    link = link.substring(12);
  } else if (link.match(/^ipfs:\/\//i)) {
    link = link.substring(7);
  } else {
    assertArgument(false, "unsupported IPFS format", "link", link);
  }
  return `https://gateway.ipfs.io/ipfs/${link}`;
}
var MulticoinProviderPlugin = class {
  /**
   *  Creates a new **MulticoinProviderPluing** for %%name%%.
   */
  constructor(name) {
    /**
     *  The name.
     */
    __publicField(this, "name");
    defineProperties(this, { name });
  }
  connect(proivder) {
    return this;
  }
  /**
   *  Returns ``true`` if %%coinType%% is supported by this plugin.
   */
  supportsCoinType(coinType) {
    return false;
  }
  /**
   *  Resovles to the encoded %%address%% for %%coinType%%.
   */
  async encodeAddress(coinType, address) {
    throw new Error("unsupported coin");
  }
  /**
   *  Resovles to the decoded %%data%% for %%coinType%%.
   */
  async decodeAddress(coinType, data) {
    throw new Error("unsupported coin");
  }
};
var matcherIpfs = new RegExp("^(ipfs)://(.*)$", "i");
var matchers = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  matcherIpfs,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var _supports2544, _resolver, _fetch, fetch_fn, _getResolver, getResolver_fn;
var _EnsResolver = class {
  constructor(provider, address, name) {
    __privateAdd(this, _fetch);
    /**
     *  The connected provider.
     */
    __publicField(this, "provider");
    /**
     *  The address of the resolver.
     */
    __publicField(this, "address");
    /**
     *  The name this resolver was resolved against.
     */
    __publicField(this, "name");
    // For EIP-2544 names, the ancestor that provided the resolver
    __privateAdd(this, _supports2544, void 0);
    __privateAdd(this, _resolver, void 0);
    defineProperties(this, { provider, address, name });
    __privateSet(this, _supports2544, null);
    __privateSet(this, _resolver, new Contract(address, [
      "function supportsInterface(bytes4) view returns (bool)",
      "function resolve(bytes, bytes) view returns (bytes)",
      "function addr(bytes32) view returns (address)",
      "function addr(bytes32, uint) view returns (bytes)",
      "function text(bytes32, string) view returns (string)",
      "function contenthash(bytes32) view returns (bytes)"
    ], provider));
  }
  /**
   *  Resolves to true if the resolver supports wildcard resolution.
   */
  async supportsWildcard() {
    if (__privateGet(this, _supports2544) == null) {
      __privateSet(this, _supports2544, (async () => {
        try {
          return await __privateGet(this, _resolver).supportsInterface("0x9061b923");
        } catch (error) {
          if (isError(error, "CALL_EXCEPTION")) {
            return false;
          }
          __privateSet(this, _supports2544, null);
          throw error;
        }
      })());
    }
    return await __privateGet(this, _supports2544);
  }
  /**
   *  Resolves to the address for %%coinType%% or null if the
   *  provided %%coinType%% has not been configured.
   */
  async getAddress(coinType) {
    if (coinType == null) {
      coinType = 60;
    }
    if (coinType === 60) {
      try {
        const result = await __privateMethod(this, _fetch, fetch_fn).call(this, "addr(bytes32)");
        if (result == null || result === ZeroAddress) {
          return null;
        }
        return result;
      } catch (error) {
        if (isError(error, "CALL_EXCEPTION")) {
          return null;
        }
        throw error;
      }
    }
    if (coinType >= 0 && coinType < 2147483648) {
      let ethCoinType = coinType + 2147483648;
      const data2 = await __privateMethod(this, _fetch, fetch_fn).call(this, "addr(bytes32,uint)", [ethCoinType]);
      if (isHexString(data2, 20)) {
        return getAddress(data2);
      }
    }
    let coinPlugin = null;
    for (const plugin of this.provider.plugins) {
      if (!(plugin instanceof MulticoinProviderPlugin)) {
        continue;
      }
      if (plugin.supportsCoinType(coinType)) {
        coinPlugin = plugin;
        break;
      }
    }
    if (coinPlugin == null) {
      return null;
    }
    const data = await __privateMethod(this, _fetch, fetch_fn).call(this, "addr(bytes32,uint)", [coinType]);
    if (data == null || data === "0x") {
      return null;
    }
    const address = await coinPlugin.decodeAddress(coinType, data);
    if (address != null) {
      return address;
    }
    assert(false, `invalid coin data`, "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${coinType})`,
      info: { coinType, data }
    });
  }
  /**
   *  Resolves to the EIP-634 text record for %%key%%, or ``null``
   *  if unconfigured.
   */
  async getText(key) {
    const data = await __privateMethod(this, _fetch, fetch_fn).call(this, "text(bytes32,string)", [key]);
    if (data == null || data === "0x") {
      return null;
    }
    return data;
  }
  /**
   *  Rsolves to the content-hash or ``null`` if unconfigured.
   */
  async getContentHash() {
    const data = await __privateMethod(this, _fetch, fetch_fn).call(this, "contenthash(bytes32)");
    if (data == null || data === "0x") {
      return null;
    }
    const ipfs = data.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (ipfs) {
      const scheme = ipfs[1] === "e3010170" ? "ipfs" : "ipns";
      const length = parseInt(ipfs[4], 16);
      if (ipfs[5].length === length * 2) {
        return `${scheme}://${encodeBase58("0x" + ipfs[2])}`;
      }
    }
    const swarm = data.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (swarm && swarm[1].length === 64) {
      return `bzz://${swarm[1]}`;
    }
    assert(false, `invalid or unsupported content hash data`, "UNSUPPORTED_OPERATION", {
      operation: "getContentHash()",
      info: { data }
    });
  }
  /**
   *  Resolves to the avatar url or ``null`` if the avatar is either
   *  unconfigured or incorrectly configured (e.g. references an NFT
   *  not owned by the address).
   *
   *  If diagnosing issues with configurations, the [[_getAvatar]]
   *  method may be useful.
   */
  async getAvatar() {
    const avatar = await this._getAvatar();
    return avatar.url;
  }
  /**
   *  When resolving an avatar, there are many steps involved, such
   *  fetching metadata and possibly validating ownership of an
   *  NFT.
   *
   *  This method can be used to examine each step and the value it
   *  was working from.
   */
  async _getAvatar() {
    const linkage = [{ type: "name", value: this.name }];
    try {
      const avatar = await this.getText("avatar");
      if (avatar == null) {
        linkage.push({ type: "!avatar", value: "" });
        return { url: null, linkage };
      }
      linkage.push({ type: "avatar", value: avatar });
      for (let i = 0; i < matchers.length; i++) {
        const match = avatar.match(matchers[i]);
        if (match == null) {
          continue;
        }
        const scheme = match[1].toLowerCase();
        switch (scheme) {
          case "https":
          case "data":
            linkage.push({ type: "url", value: avatar });
            return { linkage, url: avatar };
          case "ipfs": {
            const url = getIpfsLink(avatar);
            linkage.push({ type: "ipfs", value: avatar });
            linkage.push({ type: "url", value: url });
            return { linkage, url };
          }
          case "erc721":
          case "erc1155": {
            const selector = scheme === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            linkage.push({ type: scheme, value: avatar });
            const owner = await this.getAddress();
            if (owner == null) {
              linkage.push({ type: "!owner", value: "" });
              return { url: null, linkage };
            }
            const comps = (match[2] || "").split("/");
            if (comps.length !== 2) {
              linkage.push({ type: `!${scheme}caip`, value: match[2] || "" });
              return { url: null, linkage };
            }
            const tokenId = comps[1];
            const contract = new Contract(comps[0], [
              // ERC-721
              "function tokenURI(uint) view returns (string)",
              "function ownerOf(uint) view returns (address)",
              // ERC-1155
              "function uri(uint) view returns (string)",
              "function balanceOf(address, uint256) view returns (uint)"
            ], this.provider);
            if (scheme === "erc721") {
              const tokenOwner = await contract.ownerOf(tokenId);
              if (owner !== tokenOwner) {
                linkage.push({ type: "!owner", value: tokenOwner });
                return { url: null, linkage };
              }
              linkage.push({ type: "owner", value: tokenOwner });
            } else if (scheme === "erc1155") {
              const balance = await contract.balanceOf(owner, tokenId);
              if (!balance) {
                linkage.push({ type: "!balance", value: "0" });
                return { url: null, linkage };
              }
              linkage.push({ type: "balance", value: balance.toString() });
            }
            let metadataUrl = await contract[selector](tokenId);
            if (metadataUrl == null || metadataUrl === "0x") {
              linkage.push({ type: "!metadata-url", value: "" });
              return { url: null, linkage };
            }
            linkage.push({ type: "metadata-url-base", value: metadataUrl });
            if (scheme === "erc1155") {
              metadataUrl = metadataUrl.replace("{id}", toBeHex(tokenId, 32).substring(2));
              linkage.push({ type: "metadata-url-expanded", value: metadataUrl });
            }
            if (metadataUrl.match(/^ipfs:/i)) {
              metadataUrl = getIpfsLink(metadataUrl);
            }
            linkage.push({ type: "metadata-url", value: metadataUrl });
            let metadata = {};
            const response = await new FetchRequest(metadataUrl).send();
            response.assertOk();
            try {
              metadata = response.bodyJson;
            } catch (error) {
              try {
                linkage.push({ type: "!metadata", value: response.bodyText });
              } catch (error2) {
                const bytes2 = response.body;
                if (bytes2) {
                  linkage.push({ type: "!metadata", value: hexlify(bytes2) });
                }
                return { url: null, linkage };
              }
              return { url: null, linkage };
            }
            if (!metadata) {
              linkage.push({ type: "!metadata", value: "" });
              return { url: null, linkage };
            }
            linkage.push({ type: "metadata", value: JSON.stringify(metadata) });
            let imageUrl = metadata.image;
            if (typeof imageUrl !== "string") {
              linkage.push({ type: "!imageUrl", value: "" });
              return { url: null, linkage };
            }
            if (imageUrl.match(/^(https:\/\/|data:)/i)) {
            } else {
              const ipfs = imageUrl.match(matcherIpfs);
              if (ipfs == null) {
                linkage.push({ type: "!imageUrl-ipfs", value: imageUrl });
                return { url: null, linkage };
              }
              linkage.push({ type: "imageUrl-ipfs", value: imageUrl });
              imageUrl = getIpfsLink(imageUrl);
            }
            linkage.push({ type: "url", value: imageUrl });
            return { linkage, url: imageUrl };
          }
        }
      }
    } catch (error) {
    }
    return { linkage, url: null };
  }
  static async getEnsAddress(provider) {
    const network = await provider.getNetwork();
    const ensPlugin = network.getPlugin("org.ethers.plugins.network.Ens");
    assert(ensPlugin, "network does not support ENS", "UNSUPPORTED_OPERATION", {
      operation: "getEnsAddress",
      info: { network }
    });
    return ensPlugin.address;
  }
  /**
   *  Resolve to the ENS resolver for %%name%% using %%provider%% or
   *  ``null`` if unconfigured.
   */
  static async fromName(provider, name) {
    var _a2;
    let currentName = name;
    while (true) {
      if (currentName === "" || currentName === ".") {
        return null;
      }
      if (name !== "eth" && currentName === "eth") {
        return null;
      }
      const addr = await __privateMethod(_a2 = _EnsResolver, _getResolver, getResolver_fn).call(_a2, provider, currentName);
      if (addr != null) {
        const resolver = new _EnsResolver(provider, addr, name);
        if (currentName !== name && !await resolver.supportsWildcard()) {
          return null;
        }
        return resolver;
      }
      currentName = currentName.split(".").slice(1).join(".");
    }
  }
};
var EnsResolver = _EnsResolver;
_supports2544 = new WeakMap();
_resolver = new WeakMap();
_fetch = new WeakSet();
fetch_fn = async function(funcName, params) {
  params = (params || []).slice();
  const iface = __privateGet(this, _resolver).interface;
  params.unshift(namehash(this.name));
  let fragment = null;
  if (await this.supportsWildcard()) {
    fragment = iface.getFunction(funcName);
    assert(fragment, "missing fragment", "UNKNOWN_ERROR", {
      info: { funcName }
    });
    params = [
      dnsEncode(this.name),
      iface.encodeFunctionData(fragment, params)
    ];
    funcName = "resolve(bytes,bytes)";
  }
  params.push({
    ccipReadEnable: true
  });
  try {
    const result = await __privateGet(this, _resolver)[funcName](...params);
    if (fragment) {
      return iface.decodeFunctionResult(fragment, result)[0];
    }
    return result;
  } catch (error) {
    if (!isError(error, "CALL_EXCEPTION")) {
      throw error;
    }
  }
  return null;
};
_getResolver = new WeakSet();
getResolver_fn = async function(provider, name) {
  const ensAddr = await _EnsResolver.getEnsAddress(provider);
  try {
    const contract = new Contract(ensAddr, [
      "function resolver(bytes32) view returns (address)"
    ], provider);
    const addr = await contract.resolver(namehash(name), {
      enableCcipRead: true
    });
    if (addr === ZeroAddress) {
      return null;
    }
    return addr;
  } catch (error) {
    throw error;
  }
  return null;
};
__privateAdd(EnsResolver, _getResolver);

// node_modules/ethers/lib.esm/providers/format.js
var BN_011 = BigInt(0);
function allowNull(format, nullValue) {
  return function(value) {
    if (value == null) {
      return nullValue;
    }
    return format(value);
  };
}
function arrayOf(format) {
  return (array) => {
    if (!Array.isArray(array)) {
      throw new Error("not an array");
    }
    return array.map((i) => format(i));
  };
}
function object(format, altNames) {
  return (value) => {
    const result = {};
    for (const key in format) {
      let srcKey = key;
      if (altNames && key in altNames && !(srcKey in value)) {
        for (const altKey of altNames[key]) {
          if (altKey in value) {
            srcKey = altKey;
            break;
          }
        }
      }
      try {
        const nv = format[key](value[srcKey]);
        if (nv !== void 0) {
          result[key] = nv;
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "not-an-error";
        assert(false, `invalid value for value.${key} (${message})`, "BAD_DATA", { value });
      }
    }
    return result;
  };
}
function formatBoolean(value) {
  switch (value) {
    case true:
    case "true":
      return true;
    case false:
    case "false":
      return false;
  }
  assertArgument(false, `invalid boolean; ${JSON.stringify(value)}`, "value", value);
}
function formatData(value) {
  assertArgument(isHexString(value, true), "invalid data", "value", value);
  return value;
}
function formatHash(value) {
  assertArgument(isHexString(value, 32), "invalid hash", "value", value);
  return value;
}
var _formatLog = object({
  address: getAddress,
  blockHash: formatHash,
  blockNumber: getNumber,
  data: formatData,
  index: getNumber,
  removed: allowNull(formatBoolean, false),
  topics: arrayOf(formatHash),
  transactionHash: formatHash,
  transactionIndex: getNumber
}, {
  index: ["logIndex"]
});
function formatLog(value) {
  return _formatLog(value);
}
var _formatBlock = object({
  hash: allowNull(formatHash),
  parentHash: formatHash,
  number: getNumber,
  timestamp: getNumber,
  nonce: allowNull(formatData),
  difficulty: getBigInt,
  gasLimit: getBigInt,
  gasUsed: getBigInt,
  miner: allowNull(getAddress),
  extraData: formatData,
  baseFeePerGas: allowNull(getBigInt)
});
function formatBlock(value) {
  const result = _formatBlock(value);
  result.transactions = value.transactions.map((tx) => {
    if (typeof tx === "string") {
      return tx;
    }
    return formatTransactionResponse(tx);
  });
  return result;
}
var _formatReceiptLog = object({
  transactionIndex: getNumber,
  blockNumber: getNumber,
  transactionHash: formatHash,
  address: getAddress,
  topics: arrayOf(formatHash),
  data: formatData,
  index: getNumber,
  blockHash: formatHash
}, {
  index: ["logIndex"]
});
function formatReceiptLog(value) {
  return _formatReceiptLog(value);
}
var _formatTransactionReceipt = object({
  to: allowNull(getAddress, null),
  from: allowNull(getAddress, null),
  contractAddress: allowNull(getAddress, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: getNumber,
  root: allowNull(hexlify),
  gasUsed: getBigInt,
  logsBloom: allowNull(formatData),
  blockHash: formatHash,
  hash: formatHash,
  logs: arrayOf(formatReceiptLog),
  blockNumber: getNumber,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: getBigInt,
  effectiveGasPrice: allowNull(getBigInt),
  status: allowNull(getNumber),
  type: allowNull(getNumber, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function formatTransactionReceipt(value) {
  return _formatTransactionReceipt(value);
}
function formatTransactionResponse(value) {
  if (value.to && getBigInt(value.to) === BN_011) {
    value.to = "0x0000000000000000000000000000000000000000";
  }
  const result = object({
    hash: formatHash,
    type: (value2) => {
      if (value2 === "0x" || value2 == null) {
        return 0;
      }
      return getNumber(value2);
    },
    accessList: allowNull(accessListify, null),
    blockHash: allowNull(formatHash, null),
    blockNumber: allowNull(getNumber, null),
    transactionIndex: allowNull(getNumber, null),
    //confirmations: allowNull(getNumber, null),
    from: getAddress,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: allowNull(getBigInt),
    maxPriorityFeePerGas: allowNull(getBigInt),
    maxFeePerGas: allowNull(getBigInt),
    gasLimit: getBigInt,
    to: allowNull(getAddress, null),
    value: getBigInt,
    nonce: getNumber,
    data: formatData,
    creates: allowNull(getAddress, null),
    chainId: allowNull(getBigInt, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"]
  })(value);
  if (result.to == null && result.creates == null) {
    result.creates = getCreateAddress(result);
  }
  if ((value.type === 1 || value.type === 2) && value.accessList == null) {
    result.accessList = [];
  }
  if (value.signature) {
    result.signature = Signature2.from(value.signature);
  } else {
    result.signature = Signature2.from(value);
  }
  if (result.chainId == null) {
    const chainId = result.signature.legacyChainId;
    if (chainId != null) {
      result.chainId = chainId;
    }
  }
  if (result.blockHash && getBigInt(result.blockHash) === BN_011) {
    result.blockHash = null;
  }
  return result;
}

// node_modules/ethers/lib.esm/providers/plugins-network.js
var EnsAddress = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
var NetworkPlugin = class {
  /**
   *  Creates a new **NetworkPlugin**.
   */
  constructor(name) {
    /**
     *  The name of the plugin.
     *
     *  It is recommended to use reverse-domain-notation, which permits
     *  unique names with a known authority as well as hierarchal entries.
     */
    __publicField(this, "name");
    defineProperties(this, { name });
  }
  /**
   *  Creates a copy of this plugin.
   */
  clone() {
    return new NetworkPlugin(this.name);
  }
};
var GasCostPlugin = class extends NetworkPlugin {
  /**
   *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
   *  latest block or another GasCostPlugin supercedes that block number,
   *  with the associated %%costs%%.
   */
  constructor(effectiveBlock, costs) {
    if (effectiveBlock == null) {
      effectiveBlock = 0;
    }
    super(`org.ethers.network.plugins.GasCost#${effectiveBlock || 0}`);
    /**
     *  The block number to treat these values as valid from.
     *
     *  This allows a hardfork to have updated values included as well as
     *  mulutiple hardforks to be supported.
     */
    __publicField(this, "effectiveBlock");
    /**
     *  The transactions base fee.
     */
    __publicField(this, "txBase");
    /**
     *  The fee for creating a new account.
     */
    __publicField(this, "txCreate");
    /**
     *  The fee per zero-byte in the data.
     */
    __publicField(this, "txDataZero");
    /**
     *  The fee per non-zero-byte in the data.
     */
    __publicField(this, "txDataNonzero");
    /**
     *  The fee per storage key in the [[link-eip-2930]] access list.
     */
    __publicField(this, "txAccessListStorageKey");
    /**
     *  The fee per address in the [[link-eip-2930]] access list.
     */
    __publicField(this, "txAccessListAddress");
    const props = { effectiveBlock };
    function set(name, nullish) {
      let value = (costs || {})[name];
      if (value == null) {
        value = nullish;
      }
      assertArgument(typeof value === "number", `invalud value for ${name}`, "costs", costs);
      props[name] = value;
    }
    set("txBase", 21e3);
    set("txCreate", 32e3);
    set("txDataZero", 4);
    set("txDataNonzero", 16);
    set("txAccessListStorageKey", 1900);
    set("txAccessListAddress", 2400);
    defineProperties(this, props);
  }
  clone() {
    return new GasCostPlugin(this.effectiveBlock, this);
  }
};
var EnsPlugin = class extends NetworkPlugin {
  /**
   *  Creates a new **EnsPlugin** connected to %%address%% on the
   *  %%targetNetwork%%. The default ENS address and mainnet is used
   *  if unspecified.
   */
  constructor(address, targetNetwork) {
    super("org.ethers.plugins.network.Ens");
    /**
     *  The ENS Registrty Contract address.
     */
    __publicField(this, "address");
    /**
     *  The chain ID that the ENS contract lives on.
     */
    __publicField(this, "targetNetwork");
    defineProperties(this, {
      address: address || EnsAddress,
      targetNetwork: targetNetwork == null ? 1 : targetNetwork
    });
  }
  clone() {
    return new EnsPlugin(this.address, this.targetNetwork);
  }
};
var _feeDataFunc;
var _FeeDataNetworkPlugin = class extends NetworkPlugin {
  /**
   *  Creates a new **FeeDataNetworkPlugin**.
   */
  constructor(feeDataFunc) {
    super("org.ethers.plugins.network.FeeData");
    __privateAdd(this, _feeDataFunc, void 0);
    __privateSet(this, _feeDataFunc, feeDataFunc);
  }
  /**
   *  The fee data function provided to the constructor.
   */
  get feeDataFunc() {
    return __privateGet(this, _feeDataFunc);
  }
  /**
   *  Resolves to the fee data.
   */
  async getFeeData(provider) {
    return await __privateGet(this, _feeDataFunc).call(this, provider);
  }
  clone() {
    return new _FeeDataNetworkPlugin(__privateGet(this, _feeDataFunc));
  }
};
var FeeDataNetworkPlugin = _FeeDataNetworkPlugin;
_feeDataFunc = new WeakMap();

// node_modules/ethers/lib.esm/providers/network.js
var Networks = /* @__PURE__ */ new Map();
var _name, _chainId2, _plugins;
var _Network = class {
  /**
   *  Creates a new **Network** for %%name%% and %%chainId%%.
   */
  constructor(name, chainId) {
    __privateAdd(this, _name, void 0);
    __privateAdd(this, _chainId2, void 0);
    __privateAdd(this, _plugins, void 0);
    __privateSet(this, _name, name);
    __privateSet(this, _chainId2, getBigInt(chainId));
    __privateSet(this, _plugins, /* @__PURE__ */ new Map());
  }
  /**
   *  Returns a JSON-compatible representation of a Network.
   */
  toJSON() {
    return { name: this.name, chainId: String(this.chainId) };
  }
  /**
   *  The network common name.
   *
   *  This is the canonical name, as networks migh have multiple
   *  names.
   */
  get name() {
    return __privateGet(this, _name);
  }
  set name(value) {
    __privateSet(this, _name, value);
  }
  /**
   *  The network chain ID.
   */
  get chainId() {
    return __privateGet(this, _chainId2);
  }
  set chainId(value) {
    __privateSet(this, _chainId2, getBigInt(value, "chainId"));
  }
  /**
   *  Returns true if %%other%% matches this network. Any chain ID
   *  must match, and if no chain ID is present, the name must match.
   *
   *  This method does not currently check for additional properties,
   *  such as ENS address or plug-in compatibility.
   */
  matches(other) {
    if (other == null) {
      return false;
    }
    if (typeof other === "string") {
      try {
        return this.chainId === getBigInt(other);
      } catch (error) {
      }
      return this.name === other;
    }
    if (typeof other === "number" || typeof other === "bigint") {
      try {
        return this.chainId === getBigInt(other);
      } catch (error) {
      }
      return false;
    }
    if (typeof other === "object") {
      if (other.chainId != null) {
        try {
          return this.chainId === getBigInt(other.chainId);
        } catch (error) {
        }
        return false;
      }
      if (other.name != null) {
        return this.name === other.name;
      }
      return false;
    }
    return false;
  }
  /**
   *  Returns the list of plugins currently attached to this Network.
   */
  get plugins() {
    return Array.from(__privateGet(this, _plugins).values());
  }
  /**
   *  Attach a new %%plugin%% to this Network. The network name
   *  must be unique, excluding any fragment.
   */
  attachPlugin(plugin) {
    if (__privateGet(this, _plugins).get(plugin.name)) {
      throw new Error(`cannot replace existing plugin: ${plugin.name} `);
    }
    __privateGet(this, _plugins).set(plugin.name, plugin.clone());
    return this;
  }
  /**
   *  Return the plugin, if any, matching %%name%% exactly. Plugins
   *  with fragments will not be returned unless %%name%% includes
   *  a fragment.
   */
  getPlugin(name) {
    return __privateGet(this, _plugins).get(name) || null;
  }
  /**
   *  Gets a list of all plugins that match %%name%%, with otr without
   *  a fragment.
   */
  getPlugins(basename) {
    return this.plugins.filter((p) => p.name.split("#")[0] === basename);
  }
  /**
   *  Create a copy of this Network.
   */
  clone() {
    const clone = new _Network(this.name, this.chainId);
    this.plugins.forEach((plugin) => {
      clone.attachPlugin(plugin.clone());
    });
    return clone;
  }
  /**
   *  Compute the intrinsic gas required for a transaction.
   *
   *  A GasCostPlugin can be attached to override the default
   *  values.
   */
  computeIntrinsicGas(tx) {
    const costs = this.getPlugin("org.ethers.plugins.network.GasCost") || new GasCostPlugin();
    let gas = costs.txBase;
    if (tx.to == null) {
      gas += costs.txCreate;
    }
    if (tx.data) {
      for (let i = 2; i < tx.data.length; i += 2) {
        if (tx.data.substring(i, i + 2) === "00") {
          gas += costs.txDataZero;
        } else {
          gas += costs.txDataNonzero;
        }
      }
    }
    if (tx.accessList) {
      const accessList = accessListify(tx.accessList);
      for (const addr in accessList) {
        gas += costs.txAccessListAddress + costs.txAccessListStorageKey * accessList[addr].storageKeys.length;
      }
    }
    return gas;
  }
  /**
   *  Returns a new Network for the %%network%% name or chainId.
   */
  static from(network) {
    injectCommonNetworks();
    if (network == null) {
      return _Network.from("mainnet");
    }
    if (typeof network === "number") {
      network = BigInt(network);
    }
    if (typeof network === "string" || typeof network === "bigint") {
      const networkFunc = Networks.get(network);
      if (networkFunc) {
        return networkFunc();
      }
      if (typeof network === "bigint") {
        return new _Network("unknown", network);
      }
      assertArgument(false, "unknown network", "network", network);
    }
    if (typeof network.clone === "function") {
      const clone = network.clone();
      return clone;
    }
    if (typeof network === "object") {
      assertArgument(typeof network.name === "string" && typeof network.chainId === "number", "invalid network object name or chainId", "network", network);
      const custom = new _Network(network.name, network.chainId);
      if (network.ensAddress || network.ensNetwork != null) {
        custom.attachPlugin(new EnsPlugin(network.ensAddress, network.ensNetwork));
      }
      return custom;
    }
    assertArgument(false, "invalid network", "network", network);
  }
  /**
   *  Register %%nameOrChainId%% with a function which returns
   *  an instance of a Network representing that chain.
   */
  static register(nameOrChainId, networkFunc) {
    if (typeof nameOrChainId === "number") {
      nameOrChainId = BigInt(nameOrChainId);
    }
    const existing = Networks.get(nameOrChainId);
    if (existing) {
      assertArgument(false, `conflicting network for ${JSON.stringify(existing.name)}`, "nameOrChainId", nameOrChainId);
    }
    Networks.set(nameOrChainId, networkFunc);
  }
};
var Network = _Network;
_name = new WeakMap();
_chainId2 = new WeakMap();
_plugins = new WeakMap();
var injected = false;
function injectCommonNetworks() {
  if (injected) {
    return;
  }
  injected = true;
  function registerEth(name, chainId, options) {
    const func = function() {
      const network = new Network(name, chainId);
      if (options.ensNetwork != null) {
        network.attachPlugin(new EnsPlugin(null, options.ensNetwork));
      }
      if (options.priorityFee) {
      }
      network.attachPlugin(new GasCostPlugin());
      return network;
    };
    Network.register(name, func);
    Network.register(chainId, func);
    if (options.altNames) {
      options.altNames.forEach((name2) => {
        Network.register(name2, func);
      });
    }
  }
  registerEth("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] });
  registerEth("ropsten", 3, { ensNetwork: 3 });
  registerEth("rinkeby", 4, { ensNetwork: 4 });
  registerEth("goerli", 5, { ensNetwork: 5 });
  registerEth("kovan", 42, { ensNetwork: 42 });
  registerEth("sepolia", 11155111, {});
  registerEth("classic", 61, {});
  registerEth("classicKotti", 6, {});
  registerEth("xdai", 100, { ensNetwork: 1 });
  registerEth("optimism", 10, {
    ensNetwork: 1,
    etherscan: { url: "https://api-optimistic.etherscan.io/" }
  });
  registerEth("optimism-goerli", 420, {
    etherscan: { url: "https://api-goerli-optimistic.etherscan.io/" }
  });
  registerEth("arbitrum", 42161, {
    ensNetwork: 1,
    etherscan: { url: "https://api.arbiscan.io/" }
  });
  registerEth("arbitrum-goerli", 421613, {
    etherscan: { url: "https://api-goerli.arbiscan.io/" }
  });
  registerEth("matic", 137, {
    ensNetwork: 1,
    //        priorityFee: 35000000000,
    etherscan: {
      //            apiKey: "W6T8DJW654GNTQ34EFEYYP3EZD9DD27CT7",
      url: "https://api.polygonscan.com/"
    }
  });
  registerEth("matic-mumbai", 80001, {
    altNames: ["maticMumbai", "maticmum"],
    //        priorityFee: 35000000000,
    etherscan: {
      //            apiKey: "W6T8DJW654GNTQ34EFEYYP3EZD9DD27CT7",
      url: "https://api-testnet.polygonscan.com/"
    }
  });
  registerEth("bnb", 56, {
    ensNetwork: 1,
    etherscan: {
      //            apiKey: "EVTS3CU31AATZV72YQ55TPGXGMVIFUQ9M9",
      url: "http://api.bscscan.com"
    }
  });
  registerEth("bnbt", 97, {
    etherscan: {
      //            apiKey: "EVTS3CU31AATZV72YQ55TPGXGMVIFUQ9M9",
      url: "http://api-testnet.bscscan.com"
    }
  });
}

// node_modules/ethers/lib.esm/providers/subscriber-polling.js
function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
var _provider, _poller, _interval, _blockNumber, _poll, poll_fn;
var PollingBlockSubscriber = class {
  /**
   *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
   */
  constructor(provider) {
    __privateAdd(this, _poll);
    __privateAdd(this, _provider, void 0);
    __privateAdd(this, _poller, void 0);
    __privateAdd(this, _interval, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    __privateAdd(this, _blockNumber, void 0);
    __privateSet(this, _provider, provider);
    __privateSet(this, _poller, null);
    __privateSet(this, _interval, 4e3);
    __privateSet(this, _blockNumber, -2);
  }
  /**
   *  The polling interval.
   */
  get pollingInterval() {
    return __privateGet(this, _interval);
  }
  set pollingInterval(value) {
    __privateSet(this, _interval, value);
  }
  start() {
    if (__privateGet(this, _poller)) {
      return;
    }
    __privateSet(this, _poller, __privateGet(this, _provider)._setTimeout(__privateMethod(this, _poll, poll_fn).bind(this), __privateGet(this, _interval)));
    __privateMethod(this, _poll, poll_fn).call(this);
  }
  stop() {
    if (!__privateGet(this, _poller)) {
      return;
    }
    __privateGet(this, _provider)._clearTimeout(__privateGet(this, _poller));
    __privateSet(this, _poller, null);
  }
  pause(dropWhilePaused) {
    this.stop();
    if (dropWhilePaused) {
      __privateSet(this, _blockNumber, -2);
    }
  }
  resume() {
    this.start();
  }
};
_provider = new WeakMap();
_poller = new WeakMap();
_interval = new WeakMap();
_blockNumber = new WeakMap();
_poll = new WeakSet();
poll_fn = async function() {
  try {
    const blockNumber = await __privateGet(this, _provider).getBlockNumber();
    if (__privateGet(this, _blockNumber) === -2) {
      __privateSet(this, _blockNumber, blockNumber);
      return;
    }
    if (blockNumber !== __privateGet(this, _blockNumber)) {
      for (let b2 = __privateGet(this, _blockNumber) + 1; b2 <= blockNumber; b2++) {
        if (__privateGet(this, _poller) == null) {
          return;
        }
        await __privateGet(this, _provider).emit("block", b2);
      }
      __privateSet(this, _blockNumber, blockNumber);
    }
  } catch (error) {
  }
  if (__privateGet(this, _poller) == null) {
    return;
  }
  __privateSet(this, _poller, __privateGet(this, _provider)._setTimeout(__privateMethod(this, _poll, poll_fn).bind(this), __privateGet(this, _interval)));
};
var _provider2, _poll2, _running;
var OnBlockSubscriber = class {
  /**
   *  Create a new **OnBlockSubscriber** attached to %%provider%%.
   */
  constructor(provider) {
    __privateAdd(this, _provider2, void 0);
    __privateAdd(this, _poll2, void 0);
    __privateAdd(this, _running, void 0);
    __privateSet(this, _provider2, provider);
    __privateSet(this, _running, false);
    __privateSet(this, _poll2, (blockNumber) => {
      this._poll(blockNumber, __privateGet(this, _provider2));
    });
  }
  /**
   *  Called on every new block.
   */
  async _poll(blockNumber, provider) {
    throw new Error("sub-classes must override this");
  }
  start() {
    if (__privateGet(this, _running)) {
      return;
    }
    __privateSet(this, _running, true);
    __privateGet(this, _poll2).call(this, -2);
    __privateGet(this, _provider2).on("block", __privateGet(this, _poll2));
  }
  stop() {
    if (!__privateGet(this, _running)) {
      return;
    }
    __privateSet(this, _running, false);
    __privateGet(this, _provider2).off("block", __privateGet(this, _poll2));
  }
  pause(dropWhilePaused) {
    this.stop();
  }
  resume() {
    this.start();
  }
};
_provider2 = new WeakMap();
_poll2 = new WeakMap();
_running = new WeakMap();
var _filter2;
var PollingOrphanSubscriber = class extends OnBlockSubscriber {
  constructor(provider, filter) {
    super(provider);
    __privateAdd(this, _filter2, void 0);
    __privateSet(this, _filter2, copy(filter));
  }
  async _poll(blockNumber, provider) {
    throw new Error("@TODO");
    console.log(__privateGet(this, _filter2));
  }
};
_filter2 = new WeakMap();
var _hash;
var PollingTransactionSubscriber = class extends OnBlockSubscriber {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%hash%%.
   */
  constructor(provider, hash2) {
    super(provider);
    __privateAdd(this, _hash, void 0);
    __privateSet(this, _hash, hash2);
  }
  async _poll(blockNumber, provider) {
    const tx = await provider.getTransactionReceipt(__privateGet(this, _hash));
    if (tx) {
      provider.emit(__privateGet(this, _hash), tx);
    }
  }
};
_hash = new WeakMap();
var _provider3, _filter3, _poller2, _running2, _blockNumber2, _poll3, poll_fn2;
var PollingEventSubscriber = class {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%filter%%.
   */
  constructor(provider, filter) {
    __privateAdd(this, _poll3);
    __privateAdd(this, _provider3, void 0);
    __privateAdd(this, _filter3, void 0);
    __privateAdd(this, _poller2, void 0);
    __privateAdd(this, _running2, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    __privateAdd(this, _blockNumber2, void 0);
    __privateSet(this, _provider3, provider);
    __privateSet(this, _filter3, copy(filter));
    __privateSet(this, _poller2, __privateMethod(this, _poll3, poll_fn2).bind(this));
    __privateSet(this, _running2, false);
    __privateSet(this, _blockNumber2, -2);
  }
  start() {
    if (__privateGet(this, _running2)) {
      return;
    }
    __privateSet(this, _running2, true);
    if (__privateGet(this, _blockNumber2) === -2) {
      __privateGet(this, _provider3).getBlockNumber().then((blockNumber) => {
        __privateSet(this, _blockNumber2, blockNumber);
      });
    }
    __privateGet(this, _provider3).on("block", __privateGet(this, _poller2));
  }
  stop() {
    if (!__privateGet(this, _running2)) {
      return;
    }
    __privateSet(this, _running2, false);
    __privateGet(this, _provider3).off("block", __privateGet(this, _poller2));
  }
  pause(dropWhilePaused) {
    this.stop();
    if (dropWhilePaused) {
      __privateSet(this, _blockNumber2, -2);
    }
  }
  resume() {
    this.start();
  }
};
_provider3 = new WeakMap();
_filter3 = new WeakMap();
_poller2 = new WeakMap();
_running2 = new WeakMap();
_blockNumber2 = new WeakMap();
_poll3 = new WeakSet();
poll_fn2 = async function(blockNumber) {
  if (__privateGet(this, _blockNumber2) === -2) {
    return;
  }
  const filter = copy(__privateGet(this, _filter3));
  filter.fromBlock = __privateGet(this, _blockNumber2) + 1;
  filter.toBlock = blockNumber;
  const logs = await __privateGet(this, _provider3).getLogs(filter);
  if (logs.length === 0) {
    if (__privateGet(this, _blockNumber2) < blockNumber - 60) {
      __privateSet(this, _blockNumber2, blockNumber - 60);
    }
    return;
  }
  for (const log of logs) {
    __privateGet(this, _provider3).emit(__privateGet(this, _filter3), log);
    __privateSet(this, _blockNumber2, log.blockNumber);
  }
};

// node_modules/ethers/lib.esm/providers/abstract-provider.js
var BN_23 = BigInt(2);
var MAX_CCIP_REDIRECTS = 10;
function isPromise(value) {
  return value && typeof value.then === "function";
}
function getTag(prefix, value) {
  return prefix + ":" + JSON.stringify(value, (k, v) => {
    if (v == null) {
      return "null";
    }
    if (typeof v === "bigint") {
      return `bigint:${v.toString()}`;
    }
    if (typeof v === "string") {
      return v.toLowerCase();
    }
    if (typeof v === "object" && !Array.isArray(v)) {
      const keys = Object.keys(v);
      keys.sort();
      return keys.reduce((accum, key) => {
        accum[key] = v[key];
        return accum;
      }, {});
    }
    return v;
  });
}
var UnmanagedSubscriber = class {
  /**
   *  Create a new UnmanagedSubscriber with %%name%%.
   */
  constructor(name) {
    /**
     *  The name fof the event.
     */
    __publicField(this, "name");
    defineProperties(this, { name });
  }
  start() {
  }
  stop() {
  }
  pause(dropWhilePaused) {
  }
  resume() {
  }
};
function copy2(value) {
  return JSON.parse(JSON.stringify(value));
}
function concisify(items) {
  items = Array.from(new Set(items).values());
  items.sort();
  return items;
}
async function getSubscription(_event2, provider) {
  if (_event2 == null) {
    throw new Error("invalid event");
  }
  if (Array.isArray(_event2)) {
    _event2 = { topics: _event2 };
  }
  if (typeof _event2 === "string") {
    switch (_event2) {
      case "block":
      case "pending":
      case "debug":
      case "error":
      case "network": {
        return { type: _event2, tag: _event2 };
      }
    }
  }
  if (isHexString(_event2, 32)) {
    const hash2 = _event2.toLowerCase();
    return { type: "transaction", tag: getTag("tx", { hash: hash2 }), hash: hash2 };
  }
  if (_event2.orphan) {
    const event = _event2;
    return { type: "orphan", tag: getTag("orphan", event), filter: copy2(event) };
  }
  if (_event2.address || _event2.topics) {
    const event = _event2;
    const filter = {
      topics: (event.topics || []).map((t) => {
        if (t == null) {
          return null;
        }
        if (Array.isArray(t)) {
          return concisify(t.map((t2) => t2.toLowerCase()));
        }
        return t.toLowerCase();
      })
    };
    if (event.address) {
      const addresses = [];
      const promises = [];
      const addAddress = (addr) => {
        if (isHexString(addr)) {
          addresses.push(addr);
        } else {
          promises.push((async () => {
            addresses.push(await resolveAddress(addr, provider));
          })());
        }
      };
      if (Array.isArray(event.address)) {
        event.address.forEach(addAddress);
      } else {
        addAddress(event.address);
      }
      if (promises.length) {
        await Promise.all(promises);
      }
      filter.address = concisify(addresses.map((a) => a.toLowerCase()));
    }
    return { filter, tag: getTag("event", filter), type: "event" };
  }
  assertArgument(false, "unknown ProviderEvent", "event", _event2);
}
function getTime2() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var defaultOptions = {
  cacheTimeout: 250
};
var _subs, _plugins2, _pausedState, _destroyed, _networkPromise, _anyNetwork, _performCache, _lastBlockNumber, _nextTimer, _timers, _disableCcipRead, _options2, _perform, perform_fn, _call, call_fn, _checkNetwork, checkNetwork_fn, _getAccountValue, getAccountValue_fn, _getBlock, getBlock_fn, _hasSub, hasSub_fn, _getSub, getSub_fn;
var AbstractProvider = class {
  /**
   *  Create a new **AbstractProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(_network3, options) {
    // Shares multiple identical requests made during the same 250ms
    __privateAdd(this, _perform);
    __privateAdd(this, _call);
    __privateAdd(this, _checkNetwork);
    // Account
    __privateAdd(this, _getAccountValue);
    __privateAdd(this, _getBlock);
    __privateAdd(this, _hasSub);
    __privateAdd(this, _getSub);
    __privateAdd(this, _subs, void 0);
    __privateAdd(this, _plugins2, void 0);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    __privateAdd(this, _pausedState, void 0);
    __privateAdd(this, _destroyed, void 0);
    __privateAdd(this, _networkPromise, void 0);
    __privateAdd(this, _anyNetwork, void 0);
    __privateAdd(this, _performCache, void 0);
    // The most recent block number if running an event or -1 if no "block" event
    __privateAdd(this, _lastBlockNumber, void 0);
    __privateAdd(this, _nextTimer, void 0);
    __privateAdd(this, _timers, void 0);
    __privateAdd(this, _disableCcipRead, void 0);
    __privateAdd(this, _options2, void 0);
    __privateSet(this, _options2, Object.assign({}, defaultOptions, options || {}));
    if (_network3 === "any") {
      __privateSet(this, _anyNetwork, true);
      __privateSet(this, _networkPromise, null);
    } else if (_network3) {
      const network = Network.from(_network3);
      __privateSet(this, _anyNetwork, false);
      __privateSet(this, _networkPromise, Promise.resolve(network));
      setTimeout(() => {
        this.emit("network", network, null);
      }, 0);
    } else {
      __privateSet(this, _anyNetwork, false);
      __privateSet(this, _networkPromise, null);
    }
    __privateSet(this, _lastBlockNumber, -1);
    __privateSet(this, _performCache, /* @__PURE__ */ new Map());
    __privateSet(this, _subs, /* @__PURE__ */ new Map());
    __privateSet(this, _plugins2, /* @__PURE__ */ new Map());
    __privateSet(this, _pausedState, null);
    __privateSet(this, _destroyed, false);
    __privateSet(this, _nextTimer, 1);
    __privateSet(this, _timers, /* @__PURE__ */ new Map());
    __privateSet(this, _disableCcipRead, false);
  }
  /**
   *  Returns ``this``, to allow an **AbstractProvider** to implement
   *  the [[ContractRunner]] interface.
   */
  get provider() {
    return this;
  }
  /**
   *  Returns all the registered plug-ins.
   */
  get plugins() {
    return Array.from(__privateGet(this, _plugins2).values());
  }
  /**
   *  Attach a new plug-in.
   */
  attachPlugin(plugin) {
    if (__privateGet(this, _plugins2).get(plugin.name)) {
      throw new Error(`cannot replace existing plugin: ${plugin.name} `);
    }
    __privateGet(this, _plugins2).set(plugin.name, plugin.connect(this));
    return this;
  }
  /**
   *  Get a plugin by name.
   */
  getPlugin(name) {
    return __privateGet(this, _plugins2).get(name) || null;
  }
  /**
   *  Prevent any CCIP-read operation, regardless of whether requested
   *  in a [[call]] using ``enableCcipRead``.
   */
  get disableCcipRead() {
    return __privateGet(this, _disableCcipRead);
  }
  set disableCcipRead(value) {
    __privateSet(this, _disableCcipRead, !!value);
  }
  /**
   *  Resolves to the data for executing the CCIP-read operations.
   */
  async ccipReadFetch(tx, calldata, urls) {
    if (this.disableCcipRead || urls.length === 0 || tx.to == null) {
      return null;
    }
    const sender = tx.to.toLowerCase();
    const data = calldata.toLowerCase();
    const errorMessages = [];
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const href = url.replace("{sender}", sender).replace("{data}", data);
      const request = new FetchRequest(href);
      if (url.indexOf("{data}") === -1) {
        request.body = { data, sender };
      }
      this.emit("debug", { action: "sendCcipReadFetchRequest", request, index: i, urls });
      let errorMessage = "unknown error";
      const resp = await request.send();
      try {
        const result = resp.bodyJson;
        if (result.data) {
          this.emit("debug", { action: "receiveCcipReadFetchResult", request, result });
          return result.data;
        }
        if (result.message) {
          errorMessage = result.message;
        }
        this.emit("debug", { action: "receiveCcipReadFetchError", request, result });
      } catch (error) {
      }
      assert(resp.statusCode < 400 || resp.statusCode >= 500, `response not found during CCIP fetch: ${errorMessage}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: tx, info: { url, errorMessage } });
      errorMessages.push(errorMessage);
    }
    assert(false, `error encountered during CCIP fetch: ${errorMessages.map((m) => JSON.stringify(m)).join(", ")}`, "OFFCHAIN_FAULT", {
      reason: "500_SERVER_ERROR",
      transaction: tx,
      info: { urls, errorMessages }
    });
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a block before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Block]].
   */
  _wrapBlock(value, network) {
    return new Block(formatBlock(value), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a log before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Log]].
   */
  _wrapLog(value, network) {
    return new Log(formatLog(value), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  receipt before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionReceipt]].
   */
  _wrapTransactionReceipt(value, network) {
    return new TransactionReceipt(formatTransactionReceipt(value), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  response before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionResponse]].
   */
  _wrapTransactionResponse(tx, network) {
    return new TransactionResponse(formatTransactionResponse(tx), this);
  }
  /**
   *  Resolves to the Network, forcing a network detection using whatever
   *  technique the sub-class requires.
   *
   *  Sub-classes **must** override this.
   */
  _detectNetwork() {
    assert(false, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork"
    });
  }
  /**
   *  Sub-classes should use this to perform all built-in operations. All
   *  methods sanitizes and normalizes the values passed into this.
   *
   *  Sub-classes **must** override this.
   */
  async _perform(req) {
    assert(false, `unsupported method: ${req.method}`, "UNSUPPORTED_OPERATION", {
      operation: req.method,
      info: req
    });
  }
  // State
  async getBlockNumber() {
    const blockNumber = getNumber(await __privateMethod(this, _perform, perform_fn).call(this, { method: "getBlockNumber" }), "%response");
    if (__privateGet(this, _lastBlockNumber) >= 0) {
      __privateSet(this, _lastBlockNumber, blockNumber);
    }
    return blockNumber;
  }
  /**
   *  Returns or resolves to the address for %%address%%, resolving ENS
   *  names and [[Addressable]] objects and returning if already an
   *  address.
   */
  _getAddress(address) {
    return resolveAddress(address, this);
  }
  /**
   *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
   *  negative values and returning if already a valid block tag.
   */
  _getBlockTag(blockTag) {
    if (blockTag == null) {
      return "latest";
    }
    switch (blockTag) {
      case "earliest":
        return "0x0";
      case "latest":
      case "pending":
      case "safe":
      case "finalized":
        return blockTag;
    }
    if (isHexString(blockTag)) {
      if (isHexString(blockTag, 32)) {
        return blockTag;
      }
      return toQuantity(blockTag);
    }
    if (typeof blockTag === "bigint") {
      blockTag = getNumber(blockTag, "blockTag");
    }
    if (typeof blockTag === "number") {
      if (blockTag >= 0) {
        return toQuantity(blockTag);
      }
      if (__privateGet(this, _lastBlockNumber) >= 0) {
        return toQuantity(__privateGet(this, _lastBlockNumber) + blockTag);
      }
      return this.getBlockNumber().then((b2) => toQuantity(b2 + blockTag));
    }
    assertArgument(false, "invalid blockTag", "blockTag", blockTag);
  }
  /**
   *  Returns or resolves to a filter for %%filter%%, resolving any ENS
   *  names or [[Addressable]] object and returning if already a valid
   *  filter.
   */
  _getFilter(filter) {
    const topics = (filter.topics || []).map((t) => {
      if (t == null) {
        return null;
      }
      if (Array.isArray(t)) {
        return concisify(t.map((t2) => t2.toLowerCase()));
      }
      return t.toLowerCase();
    });
    const blockHash = "blockHash" in filter ? filter.blockHash : void 0;
    const resolve = (_address, fromBlock2, toBlock2) => {
      let address2 = void 0;
      switch (_address.length) {
        case 0:
          break;
        case 1:
          address2 = _address[0];
          break;
        default:
          _address.sort();
          address2 = _address;
      }
      if (blockHash) {
        if (fromBlock2 != null || toBlock2 != null) {
          throw new Error("invalid filter");
        }
      }
      const filter2 = {};
      if (address2) {
        filter2.address = address2;
      }
      if (topics.length) {
        filter2.topics = topics;
      }
      if (fromBlock2) {
        filter2.fromBlock = fromBlock2;
      }
      if (toBlock2) {
        filter2.toBlock = toBlock2;
      }
      if (blockHash) {
        filter2.blockHash = blockHash;
      }
      return filter2;
    };
    let address = [];
    if (filter.address) {
      if (Array.isArray(filter.address)) {
        for (const addr of filter.address) {
          address.push(this._getAddress(addr));
        }
      } else {
        address.push(this._getAddress(filter.address));
      }
    }
    let fromBlock = void 0;
    if ("fromBlock" in filter) {
      fromBlock = this._getBlockTag(filter.fromBlock);
    }
    let toBlock = void 0;
    if ("toBlock" in filter) {
      toBlock = this._getBlockTag(filter.toBlock);
    }
    if (address.filter((a) => typeof a !== "string").length || fromBlock != null && typeof fromBlock !== "string" || toBlock != null && typeof toBlock !== "string") {
      return Promise.all([Promise.all(address), fromBlock, toBlock]).then((result) => {
        return resolve(result[0], result[1], result[2]);
      });
    }
    return resolve(address, fromBlock, toBlock);
  }
  /**
   *  Returns or resovles to a transaction for %%request%%, resolving
   *  any ENS names or [[Addressable]] and returning if already a valid
   *  transaction.
   */
  _getTransactionRequest(_request3) {
    const request = copyRequest(_request3);
    const promises = [];
    ["to", "from"].forEach((key) => {
      if (request[key] == null) {
        return;
      }
      const addr = resolveAddress(request[key]);
      if (isPromise(addr)) {
        promises.push(async function() {
          request[key] = await addr;
        }());
      } else {
        request[key] = addr;
      }
    });
    if (request.blockTag != null) {
      const blockTag = this._getBlockTag(request.blockTag);
      if (isPromise(blockTag)) {
        promises.push(async function() {
          request.blockTag = await blockTag;
        }());
      } else {
        request.blockTag = blockTag;
      }
    }
    if (promises.length) {
      return async function() {
        await Promise.all(promises);
        return request;
      }();
    }
    return request;
  }
  async getNetwork() {
    if (__privateGet(this, _networkPromise) == null) {
      const detectNetwork = this._detectNetwork().then((network) => {
        this.emit("network", network, null);
        return network;
      }, (error) => {
        if (__privateGet(this, _networkPromise) === detectNetwork) {
          __privateSet(this, _networkPromise, null);
        }
        throw error;
      });
      __privateSet(this, _networkPromise, detectNetwork);
      return (await detectNetwork).clone();
    }
    const networkPromise = __privateGet(this, _networkPromise);
    const [expected, actual] = await Promise.all([
      networkPromise,
      this._detectNetwork()
      // The actual connected network
    ]);
    if (expected.chainId !== actual.chainId) {
      if (__privateGet(this, _anyNetwork)) {
        this.emit("network", actual, expected);
        if (__privateGet(this, _networkPromise) === networkPromise) {
          __privateSet(this, _networkPromise, Promise.resolve(actual));
        }
      } else {
        assert(false, `network changed: ${expected.chainId} => ${actual.chainId} `, "NETWORK_ERROR", {
          event: "changed"
        });
      }
    }
    return expected.clone();
  }
  async getFeeData() {
    const { block, gasPrice } = await resolveProperties({
      block: this.getBlock("latest"),
      gasPrice: (async () => {
        try {
          const gasPrice2 = await __privateMethod(this, _perform, perform_fn).call(this, { method: "getGasPrice" });
          return getBigInt(gasPrice2, "%response");
        } catch (error) {
        }
        return null;
      })()
    });
    let maxFeePerGas = null, maxPriorityFeePerGas = null;
    if (block && block.baseFeePerGas) {
      maxPriorityFeePerGas = BigInt("1000000000");
      maxFeePerGas = block.baseFeePerGas * BN_23 + maxPriorityFeePerGas;
    }
    return new FeeData(gasPrice, maxFeePerGas, maxPriorityFeePerGas);
  }
  async estimateGas(_tx) {
    let tx = this._getTransactionRequest(_tx);
    if (isPromise(tx)) {
      tx = await tx;
    }
    return getBigInt(await __privateMethod(this, _perform, perform_fn).call(this, {
      method: "estimateGas",
      transaction: tx
    }), "%response");
  }
  async call(_tx) {
    const { tx, blockTag } = await resolveProperties({
      tx: this._getTransactionRequest(_tx),
      blockTag: this._getBlockTag(_tx.blockTag)
    });
    return await __privateMethod(this, _checkNetwork, checkNetwork_fn).call(this, __privateMethod(this, _call, call_fn).call(this, tx, blockTag, _tx.enableCcipRead ? 0 : -1));
  }
  async getBalance(address, blockTag) {
    return getBigInt(await __privateMethod(this, _getAccountValue, getAccountValue_fn).call(this, { method: "getBalance" }, address, blockTag), "%response");
  }
  async getTransactionCount(address, blockTag) {
    return getNumber(await __privateMethod(this, _getAccountValue, getAccountValue_fn).call(this, { method: "getTransactionCount" }, address, blockTag), "%response");
  }
  async getCode(address, blockTag) {
    return hexlify(await __privateMethod(this, _getAccountValue, getAccountValue_fn).call(this, { method: "getCode" }, address, blockTag));
  }
  async getStorage(address, _position, blockTag) {
    const position = getBigInt(_position, "position");
    return hexlify(await __privateMethod(this, _getAccountValue, getAccountValue_fn).call(this, { method: "getStorage", position }, address, blockTag));
  }
  // Write
  async broadcastTransaction(signedTx) {
    const { blockNumber, hash: hash2, network } = await resolveProperties({
      blockNumber: this.getBlockNumber(),
      hash: this._perform({
        method: "broadcastTransaction",
        signedTransaction: signedTx
      }),
      network: this.getNetwork()
    });
    const tx = Transaction.from(signedTx);
    if (tx.hash !== hash2) {
      throw new Error("@TODO: the returned hash did not match");
    }
    return this._wrapTransactionResponse(tx, network).replaceableTransaction(blockNumber);
  }
  // Queries
  async getBlock(block, prefetchTxs) {
    const { network, params } = await resolveProperties({
      network: this.getNetwork(),
      params: __privateMethod(this, _getBlock, getBlock_fn).call(this, block, !!prefetchTxs)
    });
    if (params == null) {
      return null;
    }
    return this._wrapBlock(params, network);
  }
  async getTransaction(hash2) {
    const { network, params } = await resolveProperties({
      network: this.getNetwork(),
      params: __privateMethod(this, _perform, perform_fn).call(this, { method: "getTransaction", hash: hash2 })
    });
    if (params == null) {
      return null;
    }
    return this._wrapTransactionResponse(params, network);
  }
  async getTransactionReceipt(hash2) {
    const { network, params } = await resolveProperties({
      network: this.getNetwork(),
      params: __privateMethod(this, _perform, perform_fn).call(this, { method: "getTransactionReceipt", hash: hash2 })
    });
    if (params == null) {
      return null;
    }
    if (params.gasPrice == null && params.effectiveGasPrice == null) {
      const tx = await __privateMethod(this, _perform, perform_fn).call(this, { method: "getTransaction", hash: hash2 });
      if (tx == null) {
        throw new Error("report this; could not find tx or effectiveGasPrice");
      }
      params.effectiveGasPrice = tx.gasPrice;
    }
    return this._wrapTransactionReceipt(params, network);
  }
  async getTransactionResult(hash2) {
    const { result } = await resolveProperties({
      network: this.getNetwork(),
      result: __privateMethod(this, _perform, perform_fn).call(this, { method: "getTransactionResult", hash: hash2 })
    });
    if (result == null) {
      return null;
    }
    return hexlify(result);
  }
  // Bloom-filter Queries
  async getLogs(_filter5) {
    let filter = this._getFilter(_filter5);
    if (isPromise(filter)) {
      filter = await filter;
    }
    const { network, params } = await resolveProperties({
      network: this.getNetwork(),
      params: __privateMethod(this, _perform, perform_fn).call(this, { method: "getLogs", filter })
    });
    return params.map((p) => this._wrapLog(p, network));
  }
  // ENS
  _getProvider(chainId) {
    assert(false, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
      operation: "_getProvider()"
    });
  }
  async getResolver(name) {
    return await EnsResolver.fromName(this, name);
  }
  async getAvatar(name) {
    const resolver = await this.getResolver(name);
    if (resolver) {
      return await resolver.getAvatar();
    }
    return null;
  }
  async resolveName(name) {
    const resolver = await this.getResolver(name);
    if (resolver) {
      return await resolver.getAddress();
    }
    return null;
  }
  async lookupAddress(address) {
    address = getAddress(address);
    const node = namehash(address.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const ensAddr = await EnsResolver.getEnsAddress(this);
      const ensContract = new Contract(ensAddr, [
        "function resolver(bytes32) view returns (address)"
      ], this);
      const resolver = await ensContract.resolver(node);
      if (resolver == null || resolver === ZeroAddress) {
        return null;
      }
      const resolverContract = new Contract(resolver, [
        "function name(bytes32) view returns (string)"
      ], this);
      const name = await resolverContract.name(node);
      const check = await this.resolveName(name);
      if (check !== address) {
        return null;
      }
      return name;
    } catch (error) {
      if (isError(error, "BAD_DATA") && error.value === "0x") {
        return null;
      }
      if (isError(error, "CALL_EXCEPTION")) {
        return null;
      }
      throw error;
    }
    return null;
  }
  async waitForTransaction(hash2, _confirms, timeout) {
    const confirms = _confirms != null ? _confirms : 1;
    if (confirms === 0) {
      return this.getTransactionReceipt(hash2);
    }
    return new Promise(async (resolve, reject) => {
      let timer = null;
      const listener = async (blockNumber) => {
        try {
          const receipt = await this.getTransactionReceipt(hash2);
          if (receipt != null) {
            if (blockNumber - receipt.blockNumber + 1 >= confirms) {
              resolve(receipt);
              if (timer) {
                clearTimeout(timer);
                timer = null;
              }
              return;
            }
          }
        } catch (error) {
          console.log("EEE", error);
        }
        this.once("block", listener);
      };
      if (timeout != null) {
        timer = setTimeout(() => {
          if (timer == null) {
            return;
          }
          timer = null;
          this.off("block", listener);
          reject(makeError("timeout", "TIMEOUT", { reason: "timeout" }));
        }, timeout);
      }
      listener(await this.getBlockNumber());
    });
  }
  async waitForBlock(blockTag) {
    assert(false, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock"
    });
  }
  /**
   *  Clear a timer created using the [[_setTimeout]] method.
   */
  _clearTimeout(timerId) {
    const timer = __privateGet(this, _timers).get(timerId);
    if (!timer) {
      return;
    }
    if (timer.timer) {
      clearTimeout(timer.timer);
    }
    __privateGet(this, _timers).delete(timerId);
  }
  /**
   *  Create a timer that will execute %%func%% after at least %%timeout%%
   *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
   *  in the next event loop.
   *
   *  [Pausing](AbstractProvider-paused) the provider will pause any
   *  associated timers.
   */
  _setTimeout(_func, timeout) {
    if (timeout == null) {
      timeout = 0;
    }
    const timerId = __privateWrapper(this, _nextTimer)._++;
    const func = () => {
      __privateGet(this, _timers).delete(timerId);
      _func();
    };
    if (this.paused) {
      __privateGet(this, _timers).set(timerId, { timer: null, func, time: timeout });
    } else {
      const timer = setTimeout(func, timeout);
      __privateGet(this, _timers).set(timerId, { timer, func, time: getTime2() });
    }
    return timerId;
  }
  /**
   *  Perform %%func%% on each subscriber.
   */
  _forEachSubscriber(func) {
    for (const sub of __privateGet(this, _subs).values()) {
      func(sub.subscriber);
    }
  }
  /**
   *  Sub-classes may override this to customize subscription
   *  implementations.
   */
  _getSubscriber(sub) {
    switch (sub.type) {
      case "debug":
      case "error":
      case "network":
        return new UnmanagedSubscriber(sub.type);
      case "block":
        return new PollingBlockSubscriber(this);
      case "event":
        return new PollingEventSubscriber(this, sub.filter);
      case "transaction":
        return new PollingTransactionSubscriber(this, sub.hash);
      case "orphan":
        return new PollingOrphanSubscriber(this, sub.filter);
    }
    throw new Error(`unsupported event: ${sub.type}`);
  }
  /**
   *  If a [[Subscriber]] fails and needs to replace itself, this
   *  method may be used.
   *
   *  For example, this is used for providers when using the
   *  ``eth_getFilterChanges`` method, which can return null if state
   *  filters are not supported by the backend, allowing the Subscriber
   *  to swap in a [[PollingEventSubscriber]].
   */
  _recoverSubscriber(oldSub, newSub) {
    for (const sub of __privateGet(this, _subs).values()) {
      if (sub.subscriber === oldSub) {
        if (sub.started) {
          sub.subscriber.stop();
        }
        sub.subscriber = newSub;
        if (sub.started) {
          newSub.start();
        }
        if (__privateGet(this, _pausedState) != null) {
          newSub.pause(__privateGet(this, _pausedState));
        }
        break;
      }
    }
  }
  async on(event, listener) {
    const sub = await __privateMethod(this, _getSub, getSub_fn).call(this, event);
    sub.listeners.push({ listener, once: false });
    if (!sub.started) {
      sub.subscriber.start();
      sub.started = true;
      if (__privateGet(this, _pausedState) != null) {
        sub.subscriber.pause(__privateGet(this, _pausedState));
      }
    }
    return this;
  }
  async once(event, listener) {
    const sub = await __privateMethod(this, _getSub, getSub_fn).call(this, event);
    sub.listeners.push({ listener, once: true });
    if (!sub.started) {
      sub.subscriber.start();
      sub.started = true;
      if (__privateGet(this, _pausedState) != null) {
        sub.subscriber.pause(__privateGet(this, _pausedState));
      }
    }
    return this;
  }
  async emit(event, ...args) {
    const sub = await __privateMethod(this, _hasSub, hasSub_fn).call(this, event, args);
    if (!sub || sub.listeners.length === 0) {
      return false;
    }
    ;
    const count = sub.listeners.length;
    sub.listeners = sub.listeners.filter(({ listener, once }) => {
      const payload = new EventPayload(this, once ? null : listener, event);
      try {
        listener.call(this, ...args, payload);
      } catch (error) {
      }
      return !once;
    });
    if (sub.listeners.length === 0) {
      if (sub.started) {
        sub.subscriber.stop();
      }
      __privateGet(this, _subs).delete(sub.tag);
    }
    return count > 0;
  }
  async listenerCount(event) {
    if (event) {
      const sub = await __privateMethod(this, _hasSub, hasSub_fn).call(this, event);
      if (!sub) {
        return 0;
      }
      return sub.listeners.length;
    }
    let total = 0;
    for (const { listeners } of __privateGet(this, _subs).values()) {
      total += listeners.length;
    }
    return total;
  }
  async listeners(event) {
    if (event) {
      const sub = await __privateMethod(this, _hasSub, hasSub_fn).call(this, event);
      if (!sub) {
        return [];
      }
      return sub.listeners.map(({ listener }) => listener);
    }
    let result = [];
    for (const { listeners } of __privateGet(this, _subs).values()) {
      result = result.concat(listeners.map(({ listener }) => listener));
    }
    return result;
  }
  async off(event, listener) {
    const sub = await __privateMethod(this, _hasSub, hasSub_fn).call(this, event);
    if (!sub) {
      return this;
    }
    if (listener) {
      const index = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
      if (index >= 0) {
        sub.listeners.splice(index, 1);
      }
    }
    if (!listener || sub.listeners.length === 0) {
      if (sub.started) {
        sub.subscriber.stop();
      }
      __privateGet(this, _subs).delete(sub.tag);
    }
    return this;
  }
  async removeAllListeners(event) {
    if (event) {
      const { tag, started, subscriber } = await __privateMethod(this, _getSub, getSub_fn).call(this, event);
      if (started) {
        subscriber.stop();
      }
      __privateGet(this, _subs).delete(tag);
    } else {
      for (const [tag, { started, subscriber }] of __privateGet(this, _subs)) {
        if (started) {
          subscriber.stop();
        }
        __privateGet(this, _subs).delete(tag);
      }
    }
    return this;
  }
  // Alias for "on"
  async addListener(event, listener) {
    return await this.on(event, listener);
  }
  // Alias for "off"
  async removeListener(event, listener) {
    return this.off(event, listener);
  }
  /**
   *  If this provider has been destroyed using the [[destroy]] method.
   *
   *  Once destroyed, all resources are reclaimed, internal event loops
   *  and timers are cleaned up and no further requests may be sent to
   *  the provider.
   */
  get destroyed() {
    return __privateGet(this, _destroyed);
  }
  /**
   *  Sub-classes may use this to shutdown any sockets or release their
   *  resources and reject any pending requests.
   *
   *  Sub-classes **must** call ``super.destroy()``.
   */
  destroy() {
    this.removeAllListeners();
    for (const timerId of __privateGet(this, _timers).keys()) {
      this._clearTimeout(timerId);
    }
    __privateSet(this, _destroyed, true);
  }
  /**
   *  Whether the provider is currently paused.
   *
   *  A paused provider will not emit any events, and generally should
   *  not make any requests to the network, but that is up to sub-classes
   *  to manage.
   *
   *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
   *  which will buffer any events that occur while paused until the
   *  provider is unpaused.
   */
  get paused() {
    return __privateGet(this, _pausedState) != null;
  }
  set paused(pause) {
    if (!!pause === this.paused) {
      return;
    }
    if (this.paused) {
      this.resume();
    } else {
      this.pause(false);
    }
  }
  /**
   *  Pause the provider. If %%dropWhilePaused%%, any events that occur
   *  while paused are dropped, otherwise all events will be emitted once
   *  the provider is unpaused.
   */
  pause(dropWhilePaused) {
    __privateSet(this, _lastBlockNumber, -1);
    if (__privateGet(this, _pausedState) != null) {
      if (__privateGet(this, _pausedState) == !!dropWhilePaused) {
        return;
      }
      assert(false, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((s) => s.pause(dropWhilePaused));
    __privateSet(this, _pausedState, !!dropWhilePaused);
    for (const timer of __privateGet(this, _timers).values()) {
      if (timer.timer) {
        clearTimeout(timer.timer);
      }
      timer.time = getTime2() - timer.time;
    }
  }
  /**
   *  Resume the provider.
   */
  resume() {
    if (__privateGet(this, _pausedState) == null) {
      return;
    }
    this._forEachSubscriber((s) => s.resume());
    __privateSet(this, _pausedState, null);
    for (const timer of __privateGet(this, _timers).values()) {
      let timeout = timer.time;
      if (timeout < 0) {
        timeout = 0;
      }
      timer.time = getTime2();
      setTimeout(timer.func, timeout);
    }
  }
};
_subs = new WeakMap();
_plugins2 = new WeakMap();
_pausedState = new WeakMap();
_destroyed = new WeakMap();
_networkPromise = new WeakMap();
_anyNetwork = new WeakMap();
_performCache = new WeakMap();
_lastBlockNumber = new WeakMap();
_nextTimer = new WeakMap();
_timers = new WeakMap();
_disableCcipRead = new WeakMap();
_options2 = new WeakMap();
_perform = new WeakSet();
perform_fn = async function(req) {
  const timeout = __privateGet(this, _options2).cacheTimeout;
  if (timeout < 0) {
    return await this._perform(req);
  }
  const tag = getTag(req.method, req);
  let perform = __privateGet(this, _performCache).get(tag);
  if (!perform) {
    perform = this._perform(req);
    __privateGet(this, _performCache).set(tag, perform);
    setTimeout(() => {
      if (__privateGet(this, _performCache).get(tag) === perform) {
        __privateGet(this, _performCache).delete(tag);
      }
    }, timeout);
  }
  return await perform;
};
_call = new WeakSet();
call_fn = async function(tx, blockTag, attempt) {
  assert(attempt < MAX_CCIP_REDIRECTS, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, tx, { blockTag, enableCcipRead: true })
  });
  const transaction = copyRequest(tx);
  try {
    return hexlify(await this._perform({ method: "call", transaction, blockTag }));
  } catch (error) {
    if (!this.disableCcipRead && isCallException(error) && error.data && attempt >= 0 && blockTag === "latest" && transaction.to != null && dataSlice(error.data, 0, 4) === "0x556f1830") {
      const data = error.data;
      const txSender = await resolveAddress(transaction.to, this);
      let ccipArgs;
      try {
        ccipArgs = parseOffchainLookup(dataSlice(error.data, 4));
      } catch (error2) {
        assert(false, error2.message, "OFFCHAIN_FAULT", {
          reason: "BAD_DATA",
          transaction,
          info: { data }
        });
      }
      assert(ccipArgs.sender.toLowerCase() === txSender.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
        action: "call",
        data,
        reason: "OffchainLookup",
        transaction,
        invocation: null,
        revert: {
          signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
          name: "OffchainLookup",
          args: ccipArgs.errorArgs
        }
      });
      const ccipResult = await this.ccipReadFetch(transaction, ccipArgs.calldata, ccipArgs.urls);
      assert(ccipResult != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
        reason: "FETCH_FAILED",
        transaction,
        info: { data: error.data, errorArgs: ccipArgs.errorArgs }
      });
      const tx2 = {
        to: txSender,
        data: concat([ccipArgs.selector, encodeBytes([ccipResult, ccipArgs.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: tx2 });
      try {
        const result = await __privateMethod(this, _call, call_fn).call(this, tx2, blockTag, attempt + 1);
        this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, tx2), result });
        return result;
      } catch (error2) {
        this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, tx2), error: error2 });
        throw error2;
      }
    }
    throw error;
  }
};
_checkNetwork = new WeakSet();
checkNetwork_fn = async function(promise) {
  const { value } = await resolveProperties({
    network: this.getNetwork(),
    value: promise
  });
  return value;
};
_getAccountValue = new WeakSet();
getAccountValue_fn = async function(request, _address, _blockTag) {
  let address = this._getAddress(_address);
  let blockTag = this._getBlockTag(_blockTag);
  if (typeof address !== "string" || typeof blockTag !== "string") {
    [address, blockTag] = await Promise.all([address, blockTag]);
  }
  return await __privateMethod(this, _checkNetwork, checkNetwork_fn).call(this, __privateMethod(this, _perform, perform_fn).call(this, Object.assign(request, { address, blockTag })));
};
_getBlock = new WeakSet();
getBlock_fn = async function(block, includeTransactions) {
  if (isHexString(block, 32)) {
    return await __privateMethod(this, _perform, perform_fn).call(this, {
      method: "getBlock",
      blockHash: block,
      includeTransactions
    });
  }
  let blockTag = this._getBlockTag(block);
  if (typeof blockTag !== "string") {
    blockTag = await blockTag;
  }
  return await __privateMethod(this, _perform, perform_fn).call(this, {
    method: "getBlock",
    blockTag,
    includeTransactions
  });
};
_hasSub = new WeakSet();
hasSub_fn = async function(event, emitArgs) {
  let sub = await getSubscription(event, this);
  if (sub.type === "event" && emitArgs && emitArgs.length > 0 && emitArgs[0].removed === true) {
    sub = await getSubscription({ orphan: "drop-log", log: emitArgs[0] }, this);
  }
  return __privateGet(this, _subs).get(sub.tag) || null;
};
_getSub = new WeakSet();
getSub_fn = async function(event) {
  const subscription = await getSubscription(event, this);
  const tag = subscription.tag;
  let sub = __privateGet(this, _subs).get(tag);
  if (!sub) {
    const subscriber = this._getSubscriber(subscription);
    const addressableMap = /* @__PURE__ */ new WeakMap();
    const nameMap = /* @__PURE__ */ new Map();
    sub = { subscriber, tag, addressableMap, nameMap, started: false, listeners: [] };
    __privateGet(this, _subs).set(tag, sub);
  }
  return sub;
};
function _parseString(result, start) {
  try {
    const bytes2 = _parseBytes(result, start);
    if (bytes2) {
      return toUtf8String(bytes2);
    }
  } catch (error) {
  }
  return null;
}
function _parseBytes(result, start) {
  if (result === "0x") {
    return null;
  }
  try {
    const offset = getNumber(dataSlice(result, start, start + 32));
    const length = getNumber(dataSlice(result, offset, offset + 32));
    return dataSlice(result, offset + 32, offset + 32 + length);
  } catch (error) {
  }
  return null;
}
function numPad(value) {
  const result = toBeArray(value);
  if (result.length > 32) {
    throw new Error("internal; should not happen");
  }
  const padded = new Uint8Array(32);
  padded.set(result, 32 - result.length);
  return padded;
}
function bytesPad(value) {
  if (value.length % 32 === 0) {
    return value;
  }
  const result = new Uint8Array(Math.ceil(value.length / 32) * 32);
  result.set(value);
  return result;
}
var empty = new Uint8Array([]);
function encodeBytes(datas) {
  const result = [];
  let byteCount = 0;
  for (let i = 0; i < datas.length; i++) {
    result.push(empty);
    byteCount += 32;
  }
  for (let i = 0; i < datas.length; i++) {
    const data = getBytes(datas[i]);
    result[i] = numPad(byteCount);
    result.push(numPad(data.length));
    result.push(bytesPad(data));
    byteCount += 32 + Math.ceil(data.length / 32) * 32;
  }
  return concat(result);
}
var zeros = "0x0000000000000000000000000000000000000000000000000000000000000000";
function parseOffchainLookup(data) {
  const result = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: []
  };
  assert(dataLength(data) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data"
  });
  const sender = dataSlice(data, 0, 32);
  assert(dataSlice(sender, 0, 12) === dataSlice(zeros, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  });
  result.sender = dataSlice(sender, 12);
  try {
    const urls = [];
    const urlsOffset = getNumber(dataSlice(data, 32, 64));
    const urlsLength = getNumber(dataSlice(data, urlsOffset, urlsOffset + 32));
    const urlsData = dataSlice(data, urlsOffset + 32);
    for (let u = 0; u < urlsLength; u++) {
      const url = _parseString(urlsData, u * 32);
      if (url == null) {
        throw new Error("abort");
      }
      urls.push(url);
    }
    result.urls = urls;
  } catch (error) {
    assert(false, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls"
    });
  }
  try {
    const calldata = _parseBytes(data, 64);
    if (calldata == null) {
      throw new Error("abort");
    }
    result.calldata = calldata;
  } catch (error) {
    assert(false, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  assert(dataSlice(data, 100, 128) === dataSlice(zeros, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  });
  result.selector = dataSlice(data, 96, 100);
  try {
    const extraData = _parseBytes(data, 128);
    if (extraData == null) {
      throw new Error("abort");
    }
    result.extraData = extraData;
  } catch (error) {
    assert(false, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData"
    });
  }
  result.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((k) => result[k]);
  return result;
}

// node_modules/ethers/lib.esm/providers/abstract-signer.js
function checkProvider(signer, operation) {
  if (signer.provider) {
    return signer.provider;
  }
  assert(false, "missing provider", "UNSUPPORTED_OPERATION", { operation });
}
async function populate(signer, tx) {
  let pop = copyRequest(tx);
  if (pop.to != null) {
    pop.to = resolveAddress(pop.to, signer);
  }
  if (pop.from != null) {
    const from = pop.from;
    pop.from = Promise.all([
      signer.getAddress(),
      resolveAddress(from, signer)
    ]).then(([address, from2]) => {
      assertArgument(address.toLowerCase() === from2.toLowerCase(), "transaction from mismatch", "tx.from", from2);
      return address;
    });
  } else {
    pop.from = signer.getAddress();
  }
  return await resolveProperties(pop);
}
var AbstractSigner = class {
  /**
   *  Creates a new Signer connected to %%provider%%.
   */
  constructor(provider) {
    /**
     *  The provider this signer is connected to.
     */
    __publicField(this, "provider");
    defineProperties(this, { provider: provider || null });
  }
  async getNonce(blockTag) {
    return checkProvider(this, "getTransactionCount").getTransactionCount(await this.getAddress(), blockTag);
  }
  async populateCall(tx) {
    const pop = await populate(this, tx);
    return pop;
  }
  async populateTransaction(tx) {
    const provider = checkProvider(this, "populateTransaction");
    const pop = await populate(this, tx);
    if (pop.nonce == null) {
      pop.nonce = await this.getNonce("pending");
    }
    if (pop.gasLimit == null) {
      pop.gasLimit = await this.estimateGas(pop);
    }
    const network = await this.provider.getNetwork();
    if (pop.chainId != null) {
      const chainId = getBigInt(pop.chainId);
      assertArgument(chainId === network.chainId, "transaction chainId mismatch", "tx.chainId", tx.chainId);
    } else {
      pop.chainId = network.chainId;
    }
    const hasEip1559 = pop.maxFeePerGas != null || pop.maxPriorityFeePerGas != null;
    if (pop.gasPrice != null && (pop.type === 2 || hasEip1559)) {
      assertArgument(false, "eip-1559 transaction do not support gasPrice", "tx", tx);
    } else if ((pop.type === 0 || pop.type === 1) && hasEip1559) {
      assertArgument(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", tx);
    }
    if ((pop.type === 2 || pop.type == null) && (pop.maxFeePerGas != null && pop.maxPriorityFeePerGas != null)) {
      pop.type = 2;
    } else if (pop.type === 0 || pop.type === 1) {
      const feeData = await provider.getFeeData();
      assert(feeData.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
        operation: "getGasPrice"
      });
      if (pop.gasPrice == null) {
        pop.gasPrice = feeData.gasPrice;
      }
    } else {
      const feeData = await provider.getFeeData();
      if (pop.type == null) {
        if (feeData.maxFeePerGas != null && feeData.maxPriorityFeePerGas != null) {
          pop.type = 2;
          if (pop.gasPrice != null) {
            const gasPrice = pop.gasPrice;
            delete pop.gasPrice;
            pop.maxFeePerGas = gasPrice;
            pop.maxPriorityFeePerGas = gasPrice;
          } else {
            if (pop.maxFeePerGas == null) {
              pop.maxFeePerGas = feeData.maxFeePerGas;
            }
            if (pop.maxPriorityFeePerGas == null) {
              pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
            }
          }
        } else if (feeData.gasPrice != null) {
          assert(!hasEip1559, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
            operation: "populateTransaction"
          });
          if (pop.gasPrice == null) {
            pop.gasPrice = feeData.gasPrice;
          }
          pop.type = 0;
        } else {
          assert(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
            operation: "signer.getFeeData"
          });
        }
      } else if (pop.type === 2) {
        if (pop.maxFeePerGas == null) {
          pop.maxFeePerGas = feeData.maxFeePerGas;
        }
        if (pop.maxPriorityFeePerGas == null) {
          pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
        }
      }
    }
    return await resolveProperties(pop);
  }
  async estimateGas(tx) {
    return checkProvider(this, "estimateGas").estimateGas(await this.populateCall(tx));
  }
  async call(tx) {
    return checkProvider(this, "call").call(await this.populateCall(tx));
  }
  async resolveName(name) {
    const provider = checkProvider(this, "resolveName");
    return await provider.resolveName(name);
  }
  async sendTransaction(tx) {
    const provider = checkProvider(this, "sendTransaction");
    const pop = await this.populateTransaction(tx);
    delete pop.from;
    const txObj = Transaction.from(pop);
    return await provider.broadcastTransaction(await this.signTransaction(txObj));
  }
};
var _throwUnsupported, throwUnsupported_fn;
var _VoidSigner = class extends AbstractSigner {
  /**
   *  Creates a new **VoidSigner** with %%address%% attached to
   *  %%provider%%.
   */
  constructor(address, provider) {
    super(provider);
    __privateAdd(this, _throwUnsupported);
    /**
     *  The signer address.
     */
    __publicField(this, "address");
    defineProperties(this, { address });
  }
  async getAddress() {
    return this.address;
  }
  connect(provider) {
    return new _VoidSigner(this.address, provider);
  }
  async signTransaction(tx) {
    __privateMethod(this, _throwUnsupported, throwUnsupported_fn).call(this, "transactions", "signTransaction");
  }
  async signMessage(message) {
    __privateMethod(this, _throwUnsupported, throwUnsupported_fn).call(this, "messages", "signMessage");
  }
  async signTypedData(domain, types, value) {
    __privateMethod(this, _throwUnsupported, throwUnsupported_fn).call(this, "typed-data", "signTypedData");
  }
};
var VoidSigner = _VoidSigner;
_throwUnsupported = new WeakSet();
throwUnsupported_fn = function(suffix, operation) {
  assert(false, `VoidSigner cannot sign ${suffix}`, "UNSUPPORTED_OPERATION", { operation });
};

// node_modules/ethers/lib.esm/providers/community.js
var shown = /* @__PURE__ */ new Set();
function showThrottleMessage(service) {
  if (shown.has(service)) {
    return;
  }
  shown.add(service);
  console.log("========= NOTICE =========");
  console.log(`Request-Rate Exceeded for ${service} (this message will not be repeated)`);
  console.log("");
  console.log("The default API keys for each service are provided as a highly-throttled,");
  console.log("community resource for low-traffic projects and early prototyping.");
  console.log("");
  console.log("While your application will continue to function, we highly recommended");
  console.log("signing up for your own API keys to improve performance, increase your");
  console.log("request rate/limit and enable other perks, such as metrics and advanced APIs.");
  console.log("");
  console.log("For more details: https://docs.ethers.org/api-keys/");
  console.log("==========================");
}

// node_modules/ethers/lib.esm/providers/subscriber-filterid.js
function copy3(obj) {
  return JSON.parse(JSON.stringify(obj));
}
var _provider4, _filterIdPromise, _poller3, _running3, _network, _hault, _poll4, poll_fn3, _teardown, teardown_fn;
var FilterIdSubscriber = class {
  /**
   *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
   *  and [[_emitResults]] to setup the subscription and provide the event
   *  to the %%provider%%.
   */
  constructor(provider) {
    __privateAdd(this, _poll4);
    __privateAdd(this, _teardown);
    __privateAdd(this, _provider4, void 0);
    __privateAdd(this, _filterIdPromise, void 0);
    __privateAdd(this, _poller3, void 0);
    __privateAdd(this, _running3, void 0);
    __privateAdd(this, _network, void 0);
    __privateAdd(this, _hault, void 0);
    __privateSet(this, _provider4, provider);
    __privateSet(this, _filterIdPromise, null);
    __privateSet(this, _poller3, __privateMethod(this, _poll4, poll_fn3).bind(this));
    __privateSet(this, _running3, false);
    __privateSet(this, _network, null);
    __privateSet(this, _hault, false);
  }
  /**
   *  Sub-classes **must** override this to begin the subscription.
   */
  _subscribe(provider) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle the events.
   */
  _emitResults(provider, result) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle recovery on errors.
   */
  _recover(provider) {
    throw new Error("subclasses must override this");
  }
  start() {
    if (__privateGet(this, _running3)) {
      return;
    }
    __privateSet(this, _running3, true);
    __privateMethod(this, _poll4, poll_fn3).call(this, -2);
  }
  stop() {
    if (!__privateGet(this, _running3)) {
      return;
    }
    __privateSet(this, _running3, false);
    __privateSet(this, _hault, true);
    __privateMethod(this, _teardown, teardown_fn).call(this);
    __privateGet(this, _provider4).off("block", __privateGet(this, _poller3));
  }
  pause(dropWhilePaused) {
    if (dropWhilePaused) {
      __privateMethod(this, _teardown, teardown_fn).call(this);
    }
    __privateGet(this, _provider4).off("block", __privateGet(this, _poller3));
  }
  resume() {
    this.start();
  }
};
_provider4 = new WeakMap();
_filterIdPromise = new WeakMap();
_poller3 = new WeakMap();
_running3 = new WeakMap();
_network = new WeakMap();
_hault = new WeakMap();
_poll4 = new WeakSet();
poll_fn3 = async function(blockNumber) {
  try {
    if (__privateGet(this, _filterIdPromise) == null) {
      __privateSet(this, _filterIdPromise, this._subscribe(__privateGet(this, _provider4)));
    }
    let filterId = null;
    try {
      filterId = await __privateGet(this, _filterIdPromise);
    } catch (error) {
      if (!isError(error, "UNSUPPORTED_OPERATION") || error.operation !== "eth_newFilter") {
        throw error;
      }
    }
    if (filterId == null) {
      __privateSet(this, _filterIdPromise, null);
      __privateGet(this, _provider4)._recoverSubscriber(this, this._recover(__privateGet(this, _provider4)));
      return;
    }
    const network = await __privateGet(this, _provider4).getNetwork();
    if (!__privateGet(this, _network)) {
      __privateSet(this, _network, network);
    }
    if (__privateGet(this, _network).chainId !== network.chainId) {
      throw new Error("chaid changed");
    }
    if (__privateGet(this, _hault)) {
      return;
    }
    const result = await __privateGet(this, _provider4).send("eth_getFilterChanges", [filterId]);
    await this._emitResults(__privateGet(this, _provider4), result);
  } catch (error) {
    console.log("@TODO", error);
  }
  __privateGet(this, _provider4).once("block", __privateGet(this, _poller3));
};
_teardown = new WeakSet();
teardown_fn = function() {
  const filterIdPromise = __privateGet(this, _filterIdPromise);
  if (filterIdPromise) {
    __privateSet(this, _filterIdPromise, null);
    filterIdPromise.then((filterId) => {
      __privateGet(this, _provider4).send("eth_uninstallFilter", [filterId]);
    });
  }
};
var _event;
var FilterIdEventSubscriber = class extends FilterIdSubscriber {
  /**
   *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
   *  listening for %%filter%%.
   */
  constructor(provider, filter) {
    super(provider);
    __privateAdd(this, _event, void 0);
    __privateSet(this, _event, copy3(filter));
  }
  _recover(provider) {
    return new PollingEventSubscriber(provider, __privateGet(this, _event));
  }
  async _subscribe(provider) {
    const filterId = await provider.send("eth_newFilter", [__privateGet(this, _event)]);
    return filterId;
  }
  async _emitResults(provider, results) {
    for (const result of results) {
      provider.emit(__privateGet(this, _event), provider._wrapLog(result, provider._network));
    }
  }
};
_event = new WeakMap();
var FilterIdPendingSubscriber = class extends FilterIdSubscriber {
  async _subscribe(provider) {
    return await provider.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(provider, results) {
    for (const result of results) {
      provider.emit("pending", result);
    }
  }
};

// node_modules/ethers/lib.esm/providers/provider-jsonrpc.js
var Primitive = "bigint,boolean,function,number,string,symbol".split(/,/g);
function deepCopy(value) {
  if (value == null || Primitive.indexOf(typeof value) >= 0) {
    return value;
  }
  if (typeof value.getAddress === "function") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(deepCopy);
  }
  if (typeof value === "object") {
    return Object.keys(value).reduce((accum, key) => {
      accum[key] = value[key];
      return accum;
    }, {});
  }
  throw new Error(`should not happen: ${value} (${typeof value})`);
}
function stall(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
function getLowerCase(value) {
  if (value) {
    return value.toLowerCase();
  }
  return value;
}
function isPollable(value) {
  return value && typeof value.pollingInterval === "number";
}
var defaultOptions2 = {
  polling: false,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250
};
var JsonRpcSigner = class extends AbstractSigner {
  constructor(provider, address) {
    super(provider);
    __publicField(this, "address");
    address = getAddress(address);
    defineProperties(this, { address });
  }
  connect(provider) {
    assert(false, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect"
    });
  }
  async getAddress() {
    return this.address;
  }
  // JSON-RPC will automatially fill in nonce, etc. so we just check from
  async populateTransaction(tx) {
    return await this.populateCall(tx);
  }
  // Returns just the hash of the transaction after sent, which is what
  // the bare JSON-RPC API does;
  async sendUncheckedTransaction(_tx) {
    const tx = deepCopy(_tx);
    const promises = [];
    if (tx.from) {
      const _from = tx.from;
      promises.push((async () => {
        const from = await resolveAddress(_from, this.provider);
        assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
        tx.from = from;
      })());
    } else {
      tx.from = this.address;
    }
    if (tx.gasLimit == null) {
      promises.push((async () => {
        tx.gasLimit = await this.provider.estimateGas({ ...tx, from: this.address });
      })());
    }
    if (tx.to != null) {
      const _to2 = tx.to;
      promises.push((async () => {
        tx.to = await resolveAddress(_to2, this.provider);
      })());
    }
    if (promises.length) {
      await Promise.all(promises);
    }
    const hexTx = this.provider.getRpcTransaction(tx);
    return this.provider.send("eth_sendTransaction", [hexTx]);
  }
  async sendTransaction(tx) {
    const blockNumber = await this.provider.getBlockNumber();
    const hash2 = await this.sendUncheckedTransaction(tx);
    return await new Promise((resolve, reject) => {
      const timeouts = [1e3, 100];
      const checkTx = async () => {
        const tx2 = await this.provider.getTransaction(hash2);
        if (tx2 != null) {
          resolve(tx2.replaceableTransaction(blockNumber));
          return;
        }
        this.provider._setTimeout(() => {
          checkTx();
        }, timeouts.pop() || 4e3);
      };
      checkTx();
    });
  }
  async signTransaction(_tx) {
    const tx = deepCopy(_tx);
    if (tx.from) {
      const from = await resolveAddress(tx.from, this.provider);
      assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
      tx.from = from;
    } else {
      tx.from = this.address;
    }
    const hexTx = this.provider.getRpcTransaction(tx);
    return await this.provider.send("eth_signTransaction", [hexTx]);
  }
  async signMessage(_message) {
    const message = typeof _message === "string" ? toUtf8Bytes(_message) : _message;
    return await this.provider.send("personal_sign", [
      hexlify(message),
      this.address.toLowerCase()
    ]);
  }
  async signTypedData(domain, types, _value2) {
    const value = deepCopy(_value2);
    const populated = await TypedDataEncoder.resolveNames(domain, types, value, async (value2) => {
      const address = await resolveAddress(value2);
      assertArgument(address != null, "TypedData does not support null address", "value", value2);
      return address;
    });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify(TypedDataEncoder.getPayload(populated.domain, types, populated.value))
    ]);
  }
  async unlock(password) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      password,
      null
    ]);
  }
  // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
  async _legacySignMessage(_message) {
    const message = typeof _message === "string" ? toUtf8Bytes(_message) : _message;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      hexlify(message)
    ]);
  }
};
var _options3, _nextId, _payloads, _drainTimer, _notReady, _network2, _scheduleDrain, scheduleDrain_fn;
var JsonRpcApiProvider = class extends AbstractProvider {
  constructor(network, options) {
    const superOptions = {};
    if (options && options.cacheTimeout != null) {
      superOptions.cacheTimeout = options.cacheTimeout;
    }
    super(network, superOptions);
    __privateAdd(this, _scheduleDrain);
    __privateAdd(this, _options3, void 0);
    // The next ID to use for the JSON-RPC ID field
    __privateAdd(this, _nextId, void 0);
    // Payloads are queued and triggered in batches using the drainTimer
    __privateAdd(this, _payloads, void 0);
    __privateAdd(this, _drainTimer, void 0);
    __privateAdd(this, _notReady, void 0);
    __privateAdd(this, _network2, void 0);
    __privateSet(this, _nextId, 1);
    __privateSet(this, _options3, Object.assign({}, defaultOptions2, options || {}));
    __privateSet(this, _payloads, []);
    __privateSet(this, _drainTimer, null);
    __privateSet(this, _network2, null);
    {
      let resolve = null;
      const promise = new Promise((_resolve) => {
        resolve = _resolve;
      });
      __privateSet(this, _notReady, { promise, resolve });
    }
    const staticNetwork = this._getOption("staticNetwork");
    if (staticNetwork) {
      assertArgument(network == null || staticNetwork.matches(network), "staticNetwork MUST match network object", "options", options);
      __privateSet(this, _network2, staticNetwork);
    }
  }
  /**
   *  Returns the value associated with the option %%key%%.
   *
   *  Sub-classes can use this to inquire about configuration options.
   */
  _getOption(key) {
    return __privateGet(this, _options3)[key];
  }
  /**
   *  Gets the [[Network]] this provider has committed to. On each call, the network
   *  is detected, and if it has changed, the call will reject.
   */
  get _network() {
    assert(__privateGet(this, _network2), "network is not available yet", "NETWORK_ERROR");
    return __privateGet(this, _network2);
  }
  /**
   *  Resolves to the non-normalized value by performing %%req%%.
   *
   *  Sub-classes may override this to modify behavior of actions,
   *  and should generally call ``super._perform`` as a fallback.
   */
  async _perform(req) {
    if (req.method === "call" || req.method === "estimateGas") {
      let tx = req.transaction;
      if (tx && tx.type != null && getBigInt(tx.type)) {
        if (tx.maxFeePerGas == null && tx.maxPriorityFeePerGas == null) {
          const feeData = await this.getFeeData();
          if (feeData.maxFeePerGas == null && feeData.maxPriorityFeePerGas == null) {
            req = Object.assign({}, req, {
              transaction: Object.assign({}, tx, { type: void 0 })
            });
          }
        }
      }
    }
    const request = this.getRpcRequest(req);
    if (request != null) {
      return await this.send(request.method, request.args);
    }
    return super._perform(req);
  }
  /**
   *  Sub-classes may override this; it detects the *actual* network that
   *  we are **currently** connected to.
   *
   *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
   *  _send primitive must be used instead.
   */
  async _detectNetwork() {
    const network = this._getOption("staticNetwork");
    if (network) {
      return network;
    }
    if (this.ready) {
      return Network.from(getBigInt(await this.send("eth_chainId", [])));
    }
    const payload = {
      id: __privateWrapper(this, _nextId)._++,
      method: "eth_chainId",
      params: [],
      jsonrpc: "2.0"
    };
    this.emit("debug", { action: "sendRpcPayload", payload });
    let result;
    try {
      result = (await this._send(payload))[0];
    } catch (error) {
      this.emit("debug", { action: "receiveRpcError", error });
      throw error;
    }
    this.emit("debug", { action: "receiveRpcResult", result });
    if ("result" in result) {
      return Network.from(getBigInt(result.result));
    }
    throw this.getRpcError(payload, result);
  }
  /**
   *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
   *  will be passed to [[_send]] from [[send]]. If it is overridden, then
   *  ``super._start()`` **MUST** be called.
   *
   *  Calling it multiple times is safe and has no effect.
   */
  _start() {
    if (__privateGet(this, _notReady) == null || __privateGet(this, _notReady).resolve == null) {
      return;
    }
    __privateGet(this, _notReady).resolve();
    __privateSet(this, _notReady, null);
    (async () => {
      while (__privateGet(this, _network2) == null && !this.destroyed) {
        try {
          __privateSet(this, _network2, await this._detectNetwork());
        } catch (error) {
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)");
          this.emit("error", makeError("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error } }));
          await stall(1e3);
        }
      }
      __privateMethod(this, _scheduleDrain, scheduleDrain_fn).call(this);
    })();
  }
  /**
   *  Resolves once the [[_start]] has been called. This can be used in
   *  sub-classes to defer sending data until the connection has been
   *  established.
   */
  async _waitUntilReady() {
    if (__privateGet(this, _notReady) == null) {
      return;
    }
    return await __privateGet(this, _notReady).promise;
  }
  /**
   *  Return a Subscriber that will manage the %%sub%%.
   *
   *  Sub-classes may override this to modify the behavior of
   *  subscription management.
   */
  _getSubscriber(sub) {
    if (sub.type === "pending") {
      return new FilterIdPendingSubscriber(this);
    }
    if (sub.type === "event") {
      if (this._getOption("polling")) {
        return new PollingEventSubscriber(this, sub.filter);
      }
      return new FilterIdEventSubscriber(this, sub.filter);
    }
    if (sub.type === "orphan" && sub.filter.orphan === "drop-log") {
      return new UnmanagedSubscriber("orphan");
    }
    return super._getSubscriber(sub);
  }
  /**
   *  Returns true only if the [[_start]] has been called.
   */
  get ready() {
    return __privateGet(this, _notReady) == null;
  }
  /**
   *  Returns %%tx%% as a normalized JSON-RPC transaction request,
   *  which has all values hexlified and any numeric values converted
   *  to Quantity values.
   */
  getRpcTransaction(tx) {
    const result = {};
    ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((key) => {
      if (tx[key] == null) {
        return;
      }
      let dstKey = key;
      if (key === "gasLimit") {
        dstKey = "gas";
      }
      result[dstKey] = toQuantity(getBigInt(tx[key], `tx.${key}`));
    });
    ["from", "to", "data"].forEach((key) => {
      if (tx[key] == null) {
        return;
      }
      result[key] = hexlify(tx[key]);
    });
    if (tx.accessList) {
      result["accessList"] = accessListify(tx.accessList);
    }
    return result;
  }
  /**
   *  Returns the request method and arguments required to perform
   *  %%req%%.
   */
  getRpcRequest(req) {
    switch (req.method) {
      case "chainId":
        return { method: "eth_chainId", args: [] };
      case "getBlockNumber":
        return { method: "eth_blockNumber", args: [] };
      case "getGasPrice":
        return { method: "eth_gasPrice", args: [] };
      case "getBalance":
        return {
          method: "eth_getBalance",
          args: [getLowerCase(req.address), req.blockTag]
        };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [getLowerCase(req.address), req.blockTag]
        };
      case "getCode":
        return {
          method: "eth_getCode",
          args: [getLowerCase(req.address), req.blockTag]
        };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [
            getLowerCase(req.address),
            "0x" + req.position.toString(16),
            req.blockTag
          ]
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [req.signedTransaction]
        };
      case "getBlock":
        if ("blockTag" in req) {
          return {
            method: "eth_getBlockByNumber",
            args: [req.blockTag, !!req.includeTransactions]
          };
        } else if ("blockHash" in req) {
          return {
            method: "eth_getBlockByHash",
            args: [req.blockHash, !!req.includeTransactions]
          };
        }
        break;
      case "getTransaction":
        return {
          method: "eth_getTransactionByHash",
          args: [req.hash]
        };
      case "getTransactionReceipt":
        return {
          method: "eth_getTransactionReceipt",
          args: [req.hash]
        };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(req.transaction), req.blockTag]
        };
      case "estimateGas": {
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(req.transaction)]
        };
      }
      case "getLogs":
        if (req.filter && req.filter.address != null) {
          if (Array.isArray(req.filter.address)) {
            req.filter.address = req.filter.address.map(getLowerCase);
          } else {
            req.filter.address = getLowerCase(req.filter.address);
          }
        }
        return { method: "eth_getLogs", args: [req.filter] };
    }
    return null;
  }
  /**
   *  Returns an ethers-style Error for the given JSON-RPC error
   *  %%payload%%, coalescing the various strings and error shapes
   *  that different nodes return, coercing them into a machine-readable
   *  standardized error.
   */
  getRpcError(payload, _error2) {
    const { method } = payload;
    const { error } = _error2;
    if (method === "eth_estimateGas" && error.message) {
      const msg = error.message;
      if (!msg.match(/revert/i) && msg.match(/insufficient funds/i)) {
        return makeError("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: payload.params[0],
          info: { payload, error }
        });
      }
    }
    if (method === "eth_call" || method === "eth_estimateGas") {
      const result = spelunkData(error);
      const e = AbiCoder.getBuiltinCallException(method === "eth_call" ? "call" : "estimateGas", payload.params[0], result ? result.data : null);
      e.info = { error, payload };
      return e;
    }
    const message = JSON.stringify(spelunkMessage(error));
    if (typeof error.message === "string" && error.message.match(/user denied|ethers-user-denied/i)) {
      const actionMap = {
        eth_sign: "signMessage",
        personal_sign: "signMessage",
        eth_signTypedData_v4: "signTypedData",
        eth_signTransaction: "signTransaction",
        eth_sendTransaction: "sendTransaction",
        eth_requestAccounts: "requestAccess",
        wallet_requestAccounts: "requestAccess"
      };
      return makeError(`user rejected action`, "ACTION_REJECTED", {
        action: actionMap[method] || "unknown",
        reason: "rejected",
        info: { payload, error }
      });
    }
    if (method === "eth_sendRawTransaction" || method === "eth_sendTransaction") {
      const transaction = payload.params[0];
      if (message.match(/insufficient funds|base fee exceeds gas limit/i)) {
        return makeError("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction,
          info: { error }
        });
      }
      if (message.match(/nonce/i) && message.match(/too low/i)) {
        return makeError("nonce has already been used", "NONCE_EXPIRED", { transaction, info: { error } });
      }
      if (message.match(/replacement transaction/i) && message.match(/underpriced/i)) {
        return makeError("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction, info: { error } });
      }
      if (message.match(/only replay-protected/i)) {
        return makeError("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: method,
          info: { transaction, info: { error } }
        });
      }
    }
    let unsupported = !!message.match(/the method .* does not exist/i);
    if (!unsupported) {
      if (error && error.details && error.details.startsWith("Unauthorized method:")) {
        unsupported = true;
      }
    }
    if (unsupported) {
      return makeError("unsupported operation", "UNSUPPORTED_OPERATION", {
        operation: payload.method,
        info: { error, payload }
      });
    }
    return makeError("could not coalesce error", "UNKNOWN_ERROR", { error, payload });
  }
  /**
   *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
   *  over the underlying channel. This can be used to call methods
   *  on the backend that do not have a high-level API within the Provider
   *  API.
   *
   *  This method queues requests according to the batch constraints
   *  in the options, assigns the request a unique ID.
   *
   *  **Do NOT override** this method in sub-classes; instead
   *  override [[_send]] or force the options values in the
   *  call to the constructor to modify this method's behavior.
   */
  send(method, params) {
    if (this.destroyed) {
      return Promise.reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: method }));
    }
    const id2 = __privateWrapper(this, _nextId)._++;
    const promise = new Promise((resolve, reject) => {
      __privateGet(this, _payloads).push({
        resolve,
        reject,
        payload: { method, params, id: id2, jsonrpc: "2.0" }
      });
    });
    __privateMethod(this, _scheduleDrain, scheduleDrain_fn).call(this);
    return promise;
  }
  /**
   *  Resolves to the [[Signer]] account for  %%address%% managed by
   *  the client.
   *
   *  If the %%address%% is a number, it is used as an index in the
   *  the accounts from [[listAccounts]].
   *
   *  This can only be used on clients which manage accounts (such as
   *  Geth with imported account or MetaMask).
   *
   *  Throws if the account doesn't exist.
   */
  async getSigner(address) {
    if (address == null) {
      address = 0;
    }
    const accountsPromise = this.send("eth_accounts", []);
    if (typeof address === "number") {
      const accounts2 = await accountsPromise;
      if (address >= accounts2.length) {
        throw new Error("no such account");
      }
      return new JsonRpcSigner(this, accounts2[address]);
    }
    const { accounts } = await resolveProperties({
      network: this.getNetwork(),
      accounts: accountsPromise
    });
    address = getAddress(address);
    for (const account of accounts) {
      if (getAddress(account) === address) {
        return new JsonRpcSigner(this, address);
      }
    }
    throw new Error("invalid account");
  }
  async listAccounts() {
    const accounts = await this.send("eth_accounts", []);
    return accounts.map((a) => new JsonRpcSigner(this, a));
  }
  destroy() {
    if (__privateGet(this, _drainTimer)) {
      clearTimeout(__privateGet(this, _drainTimer));
      __privateSet(this, _drainTimer, null);
    }
    for (const { payload, reject } of __privateGet(this, _payloads)) {
      reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: payload.method }));
    }
    __privateSet(this, _payloads, []);
    super.destroy();
  }
};
_options3 = new WeakMap();
_nextId = new WeakMap();
_payloads = new WeakMap();
_drainTimer = new WeakMap();
_notReady = new WeakMap();
_network2 = new WeakMap();
_scheduleDrain = new WeakSet();
scheduleDrain_fn = function() {
  if (__privateGet(this, _drainTimer)) {
    return;
  }
  const stallTime = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  __privateSet(this, _drainTimer, setTimeout(() => {
    __privateSet(this, _drainTimer, null);
    const payloads = __privateGet(this, _payloads);
    __privateSet(this, _payloads, []);
    while (payloads.length) {
      const batch = [payloads.shift()];
      while (payloads.length) {
        if (batch.length === __privateGet(this, _options3).batchMaxCount) {
          break;
        }
        batch.push(payloads.shift());
        const bytes2 = JSON.stringify(batch.map((p) => p.payload));
        if (bytes2.length > __privateGet(this, _options3).batchMaxSize) {
          payloads.unshift(batch.pop());
          break;
        }
      }
      (async () => {
        const payload = batch.length === 1 ? batch[0].payload : batch.map((p) => p.payload);
        this.emit("debug", { action: "sendRpcPayload", payload });
        try {
          const result = await this._send(payload);
          this.emit("debug", { action: "receiveRpcResult", result });
          for (const { resolve, reject, payload: payload2 } of batch) {
            if (this.destroyed) {
              reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: payload2.method }));
              continue;
            }
            const resp = result.filter((r2) => r2.id === payload2.id)[0];
            if (resp == null) {
              const error = makeError("missing response for request", "BAD_DATA", {
                value: result,
                info: { payload: payload2 }
              });
              this.emit("error", error);
              reject(error);
              continue;
            }
            if ("error" in resp) {
              reject(this.getRpcError(payload2, resp));
              continue;
            }
            resolve(resp.result);
          }
        } catch (error) {
          this.emit("debug", { action: "receiveRpcError", error });
          for (const { reject } of batch) {
            reject(error);
          }
        }
      })();
    }
  }, stallTime));
};
var _pollingInterval;
var JsonRpcApiPollingProvider = class extends JsonRpcApiProvider {
  constructor(network, options) {
    super(network, options);
    __privateAdd(this, _pollingInterval, void 0);
    __privateSet(this, _pollingInterval, 4e3);
  }
  _getSubscriber(sub) {
    const subscriber = super._getSubscriber(sub);
    if (isPollable(subscriber)) {
      subscriber.pollingInterval = __privateGet(this, _pollingInterval);
    }
    return subscriber;
  }
  /**
   *  The polling interval (default: 4000 ms)
   */
  get pollingInterval() {
    return __privateGet(this, _pollingInterval);
  }
  set pollingInterval(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("invalid interval");
    }
    __privateSet(this, _pollingInterval, value);
    this._forEachSubscriber((sub) => {
      if (isPollable(sub)) {
        sub.pollingInterval = __privateGet(this, _pollingInterval);
      }
    });
  }
};
_pollingInterval = new WeakMap();
var _connect;
var JsonRpcProvider = class extends JsonRpcApiPollingProvider {
  constructor(url, network, options) {
    if (url == null) {
      url = "http://localhost:8545";
    }
    super(network, options);
    __privateAdd(this, _connect, void 0);
    if (typeof url === "string") {
      __privateSet(this, _connect, new FetchRequest(url));
    } else {
      __privateSet(this, _connect, url.clone());
    }
  }
  _getConnection() {
    return __privateGet(this, _connect).clone();
  }
  async send(method, params) {
    await this._start();
    return await super.send(method, params);
  }
  async _send(payload) {
    const request = this._getConnection();
    request.body = JSON.stringify(payload);
    request.setHeader("content-type", "application/json");
    const response = await request.send();
    response.assertOk();
    let resp = response.bodyJson;
    if (!Array.isArray(resp)) {
      resp = [resp];
    }
    return resp;
  }
};
_connect = new WeakMap();
function spelunkData(value) {
  if (value == null) {
    return null;
  }
  if (typeof value.message === "string" && value.message.match(/revert/i) && isHexString(value.data)) {
    return { message: value.message, data: value.data };
  }
  if (typeof value === "object") {
    for (const key in value) {
      const result = spelunkData(value[key]);
      if (result) {
        return result;
      }
    }
    return null;
  }
  if (typeof value === "string") {
    try {
      return spelunkData(JSON.parse(value));
    } catch (error) {
    }
  }
  return null;
}
function _spelunkMessage(value, result) {
  if (value == null) {
    return;
  }
  if (typeof value.message === "string") {
    result.push(value.message);
  }
  if (typeof value === "object") {
    for (const key in value) {
      _spelunkMessage(value[key], result);
    }
  }
  if (typeof value === "string") {
    try {
      return _spelunkMessage(JSON.parse(value), result);
    } catch (error) {
    }
  }
}
function spelunkMessage(value) {
  const result = [];
  _spelunkMessage(value, result);
  return result;
}

// node_modules/ethers/lib.esm/providers/provider-ankr.js
var defaultApiKey = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
function getHost(name) {
  switch (name) {
    case "mainnet":
      return "rpc.ankr.com/eth";
    case "goerli":
      return "rpc.ankr.com/eth_goerli";
    case "matic":
      return "rpc.ankr.com/polygon";
    case "arbitrum":
      return "rpc.ankr.com/arbitrum";
  }
  assertArgument(false, "unsupported network", "network", name);
}
var AnkrProvider = class extends JsonRpcProvider {
  /**
   *  Create a new **AnkrProvider**.
   *
   *  By default connecting to ``mainnet`` with a highly throttled
   *  API key.
   */
  constructor(_network3, apiKey) {
    if (_network3 == null) {
      _network3 = "mainnet";
    }
    const network = Network.from(_network3);
    if (apiKey == null) {
      apiKey = defaultApiKey;
    }
    const options = { polling: true, staticNetwork: network };
    const request = AnkrProvider.getRequest(network, apiKey);
    super(request, network, options);
    /**
     *  The API key for the Ankr connection.
     */
    __publicField(this, "apiKey");
    defineProperties(this, { apiKey });
  }
  _getProvider(chainId) {
    try {
      return new AnkrProvider(chainId, this.apiKey);
    } catch (error) {
    }
    return super._getProvider(chainId);
  }
  /**
   *  Returns a prepared request for connecting to %%network%% with
   *  %%apiKey%%.
   */
  static getRequest(network, apiKey) {
    if (apiKey == null) {
      apiKey = defaultApiKey;
    }
    const request = new FetchRequest(`https://${getHost(network.name)}/${apiKey}`);
    request.allowGzip = true;
    if (apiKey === defaultApiKey) {
      request.retryFunc = async (request2, response, attempt) => {
        showThrottleMessage("AnkrProvider");
        return true;
      };
    }
    return request;
  }
  getRpcError(payload, error) {
    if (payload.method === "eth_sendRawTransaction") {
      if (error && error.error && error.error.message === "INTERNAL_ERROR: could not replace existing tx") {
        error.error.message = "replacement transaction underpriced";
      }
    }
    return super.getRpcError(payload, error);
  }
  isCommunityResource() {
    return this.apiKey === defaultApiKey;
  }
};

// node_modules/ethers/lib.esm/providers/provider-alchemy.js
var defaultApiKey2 = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
function getHost2(name) {
  switch (name) {
    case "mainnet":
      return "eth-mainnet.alchemyapi.io";
    case "goerli":
      return "eth-goerli.g.alchemy.com";
    case "sepolia":
      return "eth-sepolia.g.alchemy.com";
    case "arbitrum":
      return "arb-mainnet.g.alchemy.com";
    case "arbitrum-goerli":
      return "arb-goerli.g.alchemy.com";
    case "matic":
      return "polygon-mainnet.g.alchemy.com";
    case "matic-mumbai":
      return "polygon-mumbai.g.alchemy.com";
    case "optimism":
      return "opt-mainnet.g.alchemy.com";
    case "optimism-goerli":
      return "opt-goerli.g.alchemy.com";
  }
  assertArgument(false, "unsupported network", "network", name);
}
var AlchemyProvider = class extends JsonRpcProvider {
  constructor(_network3, apiKey) {
    if (_network3 == null) {
      _network3 = "mainnet";
    }
    const network = Network.from(_network3);
    if (apiKey == null) {
      apiKey = defaultApiKey2;
    }
    const request = AlchemyProvider.getRequest(network, apiKey);
    super(request, network, { staticNetwork: network });
    __publicField(this, "apiKey");
    defineProperties(this, { apiKey });
  }
  _getProvider(chainId) {
    try {
      return new AlchemyProvider(chainId, this.apiKey);
    } catch (error) {
    }
    return super._getProvider(chainId);
  }
  async _perform(req) {
    if (req.method === "getTransactionResult") {
      const { trace, tx } = await resolveProperties({
        trace: this.send("trace_transaction", [req.hash]),
        tx: this.getTransaction(req.hash)
      });
      if (trace == null || tx == null) {
        return null;
      }
      let data;
      let error = false;
      try {
        data = trace[0].result.output;
        error = trace[0].error === "Reverted";
      } catch (error2) {
      }
      if (data) {
        assert(!error, "an error occurred during transaction executions", "CALL_EXCEPTION", {
          action: "getTransactionResult",
          data,
          reason: null,
          transaction: tx,
          invocation: null,
          revert: null
          // @TODO
        });
        return data;
      }
      assert(false, "could not parse trace result", "BAD_DATA", { value: trace });
    }
    return await super._perform(req);
  }
  isCommunityResource() {
    return this.apiKey === defaultApiKey2;
  }
  static getRequest(network, apiKey) {
    if (apiKey == null) {
      apiKey = defaultApiKey2;
    }
    const request = new FetchRequest(`https://${getHost2(network.name)}/v2/${apiKey}`);
    request.allowGzip = true;
    if (apiKey === defaultApiKey2) {
      request.retryFunc = async (request2, response, attempt) => {
        showThrottleMessage("alchemy");
        return true;
      };
    }
    return request;
  }
};

// node_modules/ethers/lib.esm/providers/provider-cloudflare.js
var CloudflareProvider = class extends JsonRpcProvider {
  constructor(_network3) {
    if (_network3 == null) {
      _network3 = "mainnet";
    }
    const network = Network.from(_network3);
    assertArgument(network.name === "mainnet", "unsupported network", "network", _network3);
    super("https://cloudflare-eth.com/", network, { staticNetwork: network });
  }
};

// node_modules/ethers/lib.esm/providers/provider-etherscan.js
var THROTTLE = 2e3;
function isPromise2(value) {
  return value && typeof value.then === "function";
}
var EtherscanPluginId = "org.ethers.plugins.provider.Etherscan";
var EtherscanPlugin = class extends NetworkPlugin {
  /**
   *  Creates a new **EtherscanProvider** which will use
   *  %%baseUrl%%.
   */
  constructor(baseUrl) {
    super(EtherscanPluginId);
    /**
     *  The Etherscan API base URL.
     */
    __publicField(this, "baseUrl");
    defineProperties(this, { baseUrl });
  }
  clone() {
    return new EtherscanPlugin(this.baseUrl);
  }
};
var skipKeys = ["enableCcipRead"];
var nextId = 1;
var _plugin;
var EtherscanProvider = class extends AbstractProvider {
  /**
   *  Creates a new **EtherscanBaseProvider**.
   */
  constructor(_network3, _apiKey) {
    const apiKey = _apiKey != null ? _apiKey : null;
    super();
    /**
     *  The connected network.
     */
    __publicField(this, "network");
    /**
     *  The API key or null if using the community provided bandwidth.
     */
    __publicField(this, "apiKey");
    __privateAdd(this, _plugin, void 0);
    const network = Network.from(_network3);
    __privateSet(this, _plugin, network.getPlugin(EtherscanPluginId));
    defineProperties(this, { apiKey, network });
    this.getBaseUrl();
  }
  /**
   *  Returns the base URL.
   *
   *  If an [[EtherscanPlugin]] is configured on the
   *  [[EtherscanBaseProvider_network]], returns the plugin's
   *  baseUrl.
   */
  getBaseUrl() {
    if (__privateGet(this, _plugin)) {
      return __privateGet(this, _plugin).baseUrl;
    }
    switch (this.network.name) {
      case "mainnet":
        return "https://api.etherscan.io";
      case "goerli":
        return "https://api-goerli.etherscan.io";
      case "sepolia":
        return "https://api-sepolia.etherscan.io";
      case "arbitrum":
        return "https://api.arbiscan.io";
      case "arbitrum-goerli":
        return "https://api-goerli.arbiscan.io";
      case "matic":
        return "https://api.polygonscan.com";
      case "matic-mumbai":
        return "https://api-testnet.polygonscan.com";
      case "optimism":
        return "https://api-optimistic.etherscan.io";
      case "optimism-goerli":
        return "https://api-goerli-optimistic.etherscan.io";
      default:
    }
    assertArgument(false, "unsupported network", "network", this.network);
  }
  /**
   *  Returns the URL for the %%module%% and %%params%%.
   */
  getUrl(module, params) {
    const query = Object.keys(params).reduce((accum, key) => {
      const value = params[key];
      if (value != null) {
        accum += `&${key}=${value}`;
      }
      return accum;
    }, "");
    const apiKey = this.apiKey ? `&apikey=${this.apiKey}` : "";
    return `${this.getBaseUrl()}/api?module=${module}${query}${apiKey}`;
  }
  /**
   *  Returns the URL for using POST requests.
   */
  getPostUrl() {
    return `${this.getBaseUrl()}/api`;
  }
  /**
   *  Returns the parameters for using POST requests.
   */
  getPostData(module, params) {
    params.module = module;
    params.apikey = this.apiKey;
    return params;
  }
  async detectNetwork() {
    return this.network;
  }
  /**
   *  Resolves to the result of calling %%module%% with %%params%%.
   *
   *  If %%post%%, the request is made as a POST request.
   */
  async fetch(module, params, post) {
    const id2 = nextId++;
    const url = post ? this.getPostUrl() : this.getUrl(module, params);
    const payload = post ? this.getPostData(module, params) : null;
    this.emit("debug", { action: "sendRequest", id: id2, url, payload });
    const request = new FetchRequest(url);
    request.setThrottleParams({ slotInterval: 1e3 });
    request.retryFunc = (req, resp, attempt) => {
      if (this.isCommunityResource()) {
        showThrottleMessage("Etherscan");
      }
      return Promise.resolve(true);
    };
    request.processFunc = async (request2, response2) => {
      const result2 = response2.hasBody() ? JSON.parse(toUtf8String(response2.body)) : {};
      const throttle = (typeof result2.result === "string" ? result2.result : "").toLowerCase().indexOf("rate limit") >= 0;
      if (module === "proxy") {
        if (result2 && result2.status == 0 && result2.message == "NOTOK" && throttle) {
          this.emit("debug", { action: "receiveError", id: id2, reason: "proxy-NOTOK", error: result2 });
          response2.throwThrottleError(result2.result, THROTTLE);
        }
      } else {
        if (throttle) {
          this.emit("debug", { action: "receiveError", id: id2, reason: "null result", error: result2.result });
          response2.throwThrottleError(result2.result, THROTTLE);
        }
      }
      return response2;
    };
    if (payload) {
      request.setHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
      request.body = Object.keys(payload).map((k) => `${k}=${payload[k]}`).join("&");
    }
    const response = await request.send();
    try {
      response.assertOk();
    } catch (error) {
      this.emit("debug", { action: "receiveError", id: id2, error, reason: "assertOk" });
      assert(false, "response error", "SERVER_ERROR", { request, response });
    }
    if (!response.hasBody()) {
      this.emit("debug", { action: "receiveError", id: id2, error: "missing body", reason: "null body" });
      assert(false, "missing response", "SERVER_ERROR", { request, response });
    }
    const result = JSON.parse(toUtf8String(response.body));
    if (module === "proxy") {
      if (result.jsonrpc != "2.0") {
        this.emit("debug", { action: "receiveError", id: id2, result, reason: "invalid JSON-RPC" });
        assert(false, "invalid JSON-RPC response (missing jsonrpc='2.0')", "SERVER_ERROR", { request, response, info: { result } });
      }
      if (result.error) {
        this.emit("debug", { action: "receiveError", id: id2, result, reason: "JSON-RPC error" });
        assert(false, "error response", "SERVER_ERROR", { request, response, info: { result } });
      }
      this.emit("debug", { action: "receiveRequest", id: id2, result });
      return result.result;
    } else {
      if (result.status == 0 && (result.message === "No records found" || result.message === "No transactions found")) {
        this.emit("debug", { action: "receiveRequest", id: id2, result });
        return result.result;
      }
      if (result.status != 1 || typeof result.message === "string" && !result.message.match(/^OK/)) {
        this.emit("debug", { action: "receiveError", id: id2, result });
        assert(false, "error response", "SERVER_ERROR", { request, response, info: { result } });
      }
      this.emit("debug", { action: "receiveRequest", id: id2, result });
      return result.result;
    }
  }
  /**
   *  Returns %%transaction%% normalized for the Etherscan API.
   */
  _getTransactionPostData(transaction) {
    const result = {};
    for (let key in transaction) {
      if (skipKeys.indexOf(key) >= 0) {
        continue;
      }
      if (transaction[key] == null) {
        continue;
      }
      let value = transaction[key];
      if (key === "type" && value === 0) {
        continue;
      }
      if ({ type: true, gasLimit: true, gasPrice: true, maxFeePerGs: true, maxPriorityFeePerGas: true, nonce: true, value: true }[key]) {
        value = toQuantity(value);
      } else if (key === "accessList") {
        value = "[" + accessListify(value).map((set) => {
          return `{address:"${set.address}",storageKeys:["${set.storageKeys.join('","')}"]}`;
        }).join(",") + "]";
      } else {
        value = hexlify(value);
      }
      result[key] = value;
    }
    return result;
  }
  /**
   *  Throws the normalized Etherscan error.
   */
  _checkError(req, error, transaction) {
    let message = "";
    if (isError(error, "SERVER_ERROR")) {
      try {
        message = error.info.result.error.message;
      } catch (e) {
      }
      if (!message) {
        try {
          message = error.info.message;
        } catch (e) {
        }
      }
    }
    if (req.method === "estimateGas") {
      if (!message.match(/revert/i) && message.match(/insufficient funds/i)) {
        assert(false, "insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: req.transaction
        });
      }
    }
    if (req.method === "call" || req.method === "estimateGas") {
      if (message.match(/execution reverted/i)) {
        let data = "";
        try {
          data = error.info.result.error.data;
        } catch (error2) {
        }
        const e = AbiCoder.getBuiltinCallException(req.method, req.transaction, data);
        e.info = { request: req, error };
        throw e;
      }
    }
    if (message) {
      if (req.method === "broadcastTransaction") {
        const transaction2 = Transaction.from(req.signedTransaction);
        if (message.match(/replacement/i) && message.match(/underpriced/i)) {
          assert(false, "replacement fee too low", "REPLACEMENT_UNDERPRICED", {
            transaction: transaction2
          });
        }
        if (message.match(/insufficient funds/)) {
          assert(false, "insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
            transaction: transaction2
          });
        }
        if (message.match(/same hash was already imported|transaction nonce is too low|nonce too low/)) {
          assert(false, "nonce has already been used", "NONCE_EXPIRED", {
            transaction: transaction2
          });
        }
      }
    }
    throw error;
  }
  async _detectNetwork() {
    return this.network;
  }
  async _perform(req) {
    switch (req.method) {
      case "chainId":
        return this.network.chainId;
      case "getBlockNumber":
        return this.fetch("proxy", { action: "eth_blockNumber" });
      case "getGasPrice":
        return this.fetch("proxy", { action: "eth_gasPrice" });
      case "getBalance":
        return this.fetch("account", {
          action: "balance",
          address: req.address,
          tag: req.blockTag
        });
      case "getTransactionCount":
        return this.fetch("proxy", {
          action: "eth_getTransactionCount",
          address: req.address,
          tag: req.blockTag
        });
      case "getCode":
        return this.fetch("proxy", {
          action: "eth_getCode",
          address: req.address,
          tag: req.blockTag
        });
      case "getStorage":
        return this.fetch("proxy", {
          action: "eth_getStorageAt",
          address: req.address,
          position: req.position,
          tag: req.blockTag
        });
      case "broadcastTransaction":
        return this.fetch("proxy", {
          action: "eth_sendRawTransaction",
          hex: req.signedTransaction
        }, true).catch((error) => {
          return this._checkError(req, error, req.signedTransaction);
        });
      case "getBlock":
        if ("blockTag" in req) {
          return this.fetch("proxy", {
            action: "eth_getBlockByNumber",
            tag: req.blockTag,
            boolean: req.includeTransactions ? "true" : "false"
          });
        }
        assert(false, "getBlock by blockHash not supported by Etherscan", "UNSUPPORTED_OPERATION", {
          operation: "getBlock(blockHash)"
        });
      case "getTransaction":
        return this.fetch("proxy", {
          action: "eth_getTransactionByHash",
          txhash: req.hash
        });
      case "getTransactionReceipt":
        return this.fetch("proxy", {
          action: "eth_getTransactionReceipt",
          txhash: req.hash
        });
      case "call": {
        if (req.blockTag !== "latest") {
          throw new Error("EtherscanProvider does not support blockTag for call");
        }
        const postData = this._getTransactionPostData(req.transaction);
        postData.module = "proxy";
        postData.action = "eth_call";
        try {
          return await this.fetch("proxy", postData, true);
        } catch (error) {
          return this._checkError(req, error, req.transaction);
        }
      }
      case "estimateGas": {
        const postData = this._getTransactionPostData(req.transaction);
        postData.module = "proxy";
        postData.action = "eth_estimateGas";
        try {
          return await this.fetch("proxy", postData, true);
        } catch (error) {
          return this._checkError(req, error, req.transaction);
        }
      }
      default:
        break;
    }
    return super._perform(req);
  }
  async getNetwork() {
    return this.network;
  }
  /**
   *  Resolves to the current price of ether.
   *
   *  This returns ``0`` on any network other than ``mainnet``.
   */
  async getEtherPrice() {
    if (this.network.name !== "mainnet") {
      return 0;
    }
    return parseFloat((await this.fetch("stats", { action: "ethprice" })).ethusd);
  }
  /**
   *  Resolves to a [Contract]] for %%address%%, using the
   *  Etherscan API to retreive the Contract ABI.
   */
  async getContract(_address) {
    let address = this._getAddress(_address);
    if (isPromise2(address)) {
      address = await address;
    }
    try {
      const resp = await this.fetch("contract", {
        action: "getabi",
        address
      });
      const abi = JSON.parse(resp);
      return new Contract(address, abi, this);
    } catch (error) {
      return null;
    }
  }
  isCommunityResource() {
    return this.apiKey == null;
  }
};
_plugin = new WeakMap();

// node_modules/ethers/lib.esm/providers/ws-browser.js
function getGlobal2() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}
var _WebSocket = getGlobal2().WebSocket;

// node_modules/ethers/lib.esm/providers/provider-socket.js
var _provider5, _filter4, _filterId, _paused, _emitPromise;
var SocketSubscriber = class {
  /**
   *  Creates a new **SocketSubscriber** attached to %%provider%% listening
   *  to %%filter%%.
   */
  constructor(provider, filter) {
    __privateAdd(this, _provider5, void 0);
    __privateAdd(this, _filter4, void 0);
    __privateAdd(this, _filterId, void 0);
    __privateAdd(this, _paused, void 0);
    __privateAdd(this, _emitPromise, void 0);
    __privateSet(this, _provider5, provider);
    __privateSet(this, _filter4, JSON.stringify(filter));
    __privateSet(this, _filterId, null);
    __privateSet(this, _paused, null);
    __privateSet(this, _emitPromise, null);
  }
  /**
   *  The filter.
   */
  get filter() {
    return JSON.parse(__privateGet(this, _filter4));
  }
  start() {
    __privateSet(this, _filterId, __privateGet(this, _provider5).send("eth_subscribe", this.filter).then((filterId) => {
      ;
      __privateGet(this, _provider5)._register(filterId, this);
      return filterId;
    }));
  }
  stop() {
    __privateGet(this, _filterId).then((filterId) => {
      __privateGet(this, _provider5).send("eth_unsubscribe", [filterId]);
    });
    __privateSet(this, _filterId, null);
  }
  // @TODO: pause should trap the current blockNumber, unsub, and on resume use getLogs
  //        and resume
  pause(dropWhilePaused) {
    assert(dropWhilePaused, "preserve logs while paused not supported by SocketSubscriber yet", "UNSUPPORTED_OPERATION", { operation: "pause(false)" });
    __privateSet(this, _paused, !!dropWhilePaused);
  }
  resume() {
    __privateSet(this, _paused, null);
  }
  /**
   *  @_ignore:
   */
  _handleMessage(message) {
    if (__privateGet(this, _filterId) == null) {
      return;
    }
    if (__privateGet(this, _paused) === null) {
      let emitPromise = __privateGet(this, _emitPromise);
      if (emitPromise == null) {
        emitPromise = this._emit(__privateGet(this, _provider5), message);
      } else {
        emitPromise = emitPromise.then(async () => {
          await this._emit(__privateGet(this, _provider5), message);
        });
      }
      __privateSet(this, _emitPromise, emitPromise.then(() => {
        if (__privateGet(this, _emitPromise) === emitPromise) {
          __privateSet(this, _emitPromise, null);
        }
      }));
    }
  }
  /**
   *  Sub-classes **must** override this to emit the events on the
   *  provider.
   */
  async _emit(provider, message) {
    throw new Error("sub-classes must implemente this; _emit");
  }
};
_provider5 = new WeakMap();
_filter4 = new WeakMap();
_filterId = new WeakMap();
_paused = new WeakMap();
_emitPromise = new WeakMap();
var SocketBlockSubscriber = class extends SocketSubscriber {
  /**
   *  @_ignore:
   */
  constructor(provider) {
    super(provider, ["newHeads"]);
  }
  async _emit(provider, message) {
    provider.emit("block", parseInt(message.number));
  }
};
var SocketPendingSubscriber = class extends SocketSubscriber {
  /**
   *  @_ignore:
   */
  constructor(provider) {
    super(provider, ["newPendingTransactions"]);
  }
  async _emit(provider, message) {
    provider.emit("pending", message);
  }
};
var _logFilter;
var SocketEventSubscriber = class extends SocketSubscriber {
  /**
   *  @_ignore:
   */
  constructor(provider, filter) {
    super(provider, ["logs", filter]);
    __privateAdd(this, _logFilter, void 0);
    __privateSet(this, _logFilter, JSON.stringify(filter));
  }
  /**
   *  The filter.
   */
  get logFilter() {
    return JSON.parse(__privateGet(this, _logFilter));
  }
  async _emit(provider, message) {
    provider.emit(this.logFilter, provider._wrapLog(message, provider._network));
  }
};
_logFilter = new WeakMap();
var _callbacks, _subs2, _pending;
var SocketProvider = class extends JsonRpcApiProvider {
  /**
   *  Creates a new **SocketProvider** connected to %%network%%.
   *
   *  If unspecified, the network will be discovered.
   */
  constructor(network) {
    super(network, { batchMaxCount: 1 });
    __privateAdd(this, _callbacks, void 0);
    // Maps each filterId to its subscriber
    __privateAdd(this, _subs2, void 0);
    // If any events come in before a subscriber has finished
    // registering, queue them
    __privateAdd(this, _pending, void 0);
    __privateSet(this, _callbacks, /* @__PURE__ */ new Map());
    __privateSet(this, _subs2, /* @__PURE__ */ new Map());
    __privateSet(this, _pending, /* @__PURE__ */ new Map());
  }
  // This value is only valid after _start has been called
  /*
  get _network(): Network {
      if (this.#network == null) {
          throw new Error("this shouldn't happen");
      }
      return this.#network.clone();
  }
  */
  _getSubscriber(sub) {
    switch (sub.type) {
      case "close":
        return new UnmanagedSubscriber("close");
      case "block":
        return new SocketBlockSubscriber(this);
      case "pending":
        return new SocketPendingSubscriber(this);
      case "event":
        return new SocketEventSubscriber(this, sub.filter);
      case "orphan":
        if (sub.filter.orphan === "drop-log") {
          return new UnmanagedSubscriber("drop-log");
        }
    }
    return super._getSubscriber(sub);
  }
  /**
   *  Register a new subscriber. This is used internalled by Subscribers
   *  and generally is unecessary unless extending capabilities.
   */
  _register(filterId, subscriber) {
    __privateGet(this, _subs2).set(filterId, subscriber);
    const pending = __privateGet(this, _pending).get(filterId);
    if (pending) {
      for (const message of pending) {
        subscriber._handleMessage(message);
      }
      __privateGet(this, _pending).delete(filterId);
    }
  }
  async _send(payload) {
    assertArgument(!Array.isArray(payload), "WebSocket does not support batch send", "payload", payload);
    const promise = new Promise((resolve, reject) => {
      __privateGet(this, _callbacks).set(payload.id, { payload, resolve, reject });
    });
    await this._waitUntilReady();
    await this._write(JSON.stringify(payload));
    return [await promise];
  }
  // Sub-classes must call this once they are connected
  /*
      async _start(): Promise<void> {
          if (this.#ready) { return; }
  
          for (const { payload } of this.#callbacks.values()) {
              await this._write(JSON.stringify(payload));
          }
  
          this.#ready = (async function() {
              await super._start();
          })();
      }
      */
  /**
   *  Sub-classes **must** call this with messages received over their
   *  transport to be processed and dispatched.
   */
  async _processMessage(message) {
    const result = JSON.parse(message);
    if (result && typeof result === "object" && "id" in result) {
      const callback = __privateGet(this, _callbacks).get(result.id);
      if (callback == null) {
        this.emit("error", makeError("received result for unknown id", "UNKNOWN_ERROR", {
          reasonCode: "UNKNOWN_ID",
          result
        }));
        return;
      }
      __privateGet(this, _callbacks).delete(result.id);
      callback.resolve(result);
    } else if (result && result.method === "eth_subscription") {
      const filterId = result.params.subscription;
      const subscriber = __privateGet(this, _subs2).get(filterId);
      if (subscriber) {
        subscriber._handleMessage(result.params.result);
      } else {
        let pending = __privateGet(this, _pending).get(filterId);
        if (pending == null) {
          pending = [];
          __privateGet(this, _pending).set(filterId, pending);
        }
        pending.push(result.params.result);
      }
    } else {
      this.emit("error", makeError("received unexpected message", "UNKNOWN_ERROR", {
        reasonCode: "UNEXPECTED_MESSAGE",
        result
      }));
      return;
    }
  }
  /**
   *  Sub-classes **must** override this to send %%message%% over their
   *  transport.
   */
  async _write(message) {
    throw new Error("sub-classes must override this");
  }
};
_callbacks = new WeakMap();
_subs2 = new WeakMap();
_pending = new WeakMap();

// node_modules/ethers/lib.esm/providers/provider-websocket.js
var _connect2, _websocket;
var WebSocketProvider = class extends SocketProvider {
  constructor(url, network) {
    super(network);
    __privateAdd(this, _connect2, void 0);
    __privateAdd(this, _websocket, void 0);
    if (typeof url === "string") {
      __privateSet(this, _connect2, () => {
        return new _WebSocket(url);
      });
      __privateSet(this, _websocket, __privateGet(this, _connect2).call(this));
    } else if (typeof url === "function") {
      __privateSet(this, _connect2, url);
      __privateSet(this, _websocket, url());
    } else {
      __privateSet(this, _connect2, null);
      __privateSet(this, _websocket, url);
    }
    this.websocket.onopen = async () => {
      try {
        await this._start();
        this.resume();
      } catch (error) {
        console.log("failed to start WebsocketProvider", error);
      }
    };
    this.websocket.onmessage = (message) => {
      this._processMessage(message.data);
    };
  }
  get websocket() {
    if (__privateGet(this, _websocket) == null) {
      throw new Error("websocket closed");
    }
    return __privateGet(this, _websocket);
  }
  async _write(message) {
    this.websocket.send(message);
  }
  async destroy() {
    if (__privateGet(this, _websocket) != null) {
      __privateGet(this, _websocket).close();
      __privateSet(this, _websocket, null);
    }
    super.destroy();
  }
};
_connect2 = new WeakMap();
_websocket = new WeakMap();

// node_modules/ethers/lib.esm/providers/provider-infura.js
var defaultProjectId = "84842078b09946638c03157f83405213";
function getHost3(name) {
  switch (name) {
    case "mainnet":
      return "mainnet.infura.io";
    case "goerli":
      return "goerli.infura.io";
    case "sepolia":
      return "sepolia.infura.io";
    case "arbitrum":
      return "arbitrum-mainnet.infura.io";
    case "arbitrum-goerli":
      return "arbitrum-goerli.infura.io";
    case "matic":
      return "polygon-mainnet.infura.io";
    case "matic-mumbai":
      return "polygon-mumbai.infura.io";
    case "optimism":
      return "optimism-mainnet.infura.io";
    case "optimism-goerli":
      return "optimism-goerli.infura.io";
  }
  assertArgument(false, "unsupported network", "network", name);
}
var InfuraWebSocketProvider = class extends WebSocketProvider {
  /**
   *  Creates a new **InfuraWebSocketProvider**.
   */
  constructor(network, projectId) {
    const provider = new InfuraProvider(network, projectId);
    const req = provider._getConnection();
    assert(!req.credentials, "INFURA WebSocket project secrets unsupported", "UNSUPPORTED_OPERATION", { operation: "InfuraProvider.getWebSocketProvider()" });
    const url = req.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
    super(url, network);
    /**
     *  The Project ID for the INFURA connection.
     */
    __publicField(this, "projectId");
    /**
     *  The Project Secret.
     *
     *  If null, no authenticated requests are made. This should not
     *  be used outside of private contexts.
     */
    __publicField(this, "projectSecret");
    defineProperties(this, {
      projectId: provider.projectId,
      projectSecret: provider.projectSecret
    });
  }
  isCommunityResource() {
    return this.projectId === defaultProjectId;
  }
};
var InfuraProvider = class extends JsonRpcProvider {
  /**
   *  Creates a new **InfuraProvider**.
   */
  constructor(_network3, projectId, projectSecret) {
    if (_network3 == null) {
      _network3 = "mainnet";
    }
    const network = Network.from(_network3);
    if (projectId == null) {
      projectId = defaultProjectId;
    }
    if (projectSecret == null) {
      projectSecret = null;
    }
    const request = InfuraProvider.getRequest(network, projectId, projectSecret);
    super(request, network, { staticNetwork: network });
    /**
     *  The Project ID for the INFURA connection.
     */
    __publicField(this, "projectId");
    /**
     *  The Project Secret.
     *
     *  If null, no authenticated requests are made. This should not
     *  be used outside of private contexts.
     */
    __publicField(this, "projectSecret");
    defineProperties(this, { projectId, projectSecret });
  }
  _getProvider(chainId) {
    try {
      return new InfuraProvider(chainId, this.projectId, this.projectSecret);
    } catch (error) {
    }
    return super._getProvider(chainId);
  }
  isCommunityResource() {
    return this.projectId === defaultProjectId;
  }
  /**
   *  Creates a new **InfuraWebSocketProvider**.
   */
  static getWebSocketProvider(network, projectId) {
    return new InfuraWebSocketProvider(network, projectId);
  }
  /**
   *  Returns a prepared request for connecting to %%network%%
   *  with %%projectId%% and %%projectSecret%%.
   */
  static getRequest(network, projectId, projectSecret) {
    if (projectId == null) {
      projectId = defaultProjectId;
    }
    if (projectSecret == null) {
      projectSecret = null;
    }
    const request = new FetchRequest(`https://${getHost3(network.name)}/v3/${projectId}`);
    request.allowGzip = true;
    if (projectSecret) {
      request.setCredentials("", projectSecret);
    }
    if (projectId === defaultProjectId) {
      request.retryFunc = async (request2, response, attempt) => {
        showThrottleMessage("InfuraProvider");
        return true;
      };
    }
    return request;
  }
};

// node_modules/ethers/lib.esm/providers/provider-quicknode.js
var defaultToken = "919b412a057b5e9c9b6dce193c5a60242d6efadb";
function getHost4(name) {
  switch (name) {
    case "mainnet":
      return "ethers.quiknode.pro";
    case "goerli":
      return "ethers.ethereum-goerli.quiknode.pro";
    case "arbitrum":
      return "ethers.arbitrum-mainnet.quiknode.pro";
    case "arbitrum-goerli":
      return "ethers.arbitrum-goerli.quiknode.pro";
    case "matic":
      return "ethers.matic.quiknode.pro";
    case "matic-mumbai":
      return "ethers.matic-testnet.quiknode.pro";
    case "optimism":
      return "ethers.optimism.quiknode.pro";
    case "optimism-goerli":
      return "ethers.optimism-goerli.quiknode.pro";
  }
  assertArgument(false, "unsupported network", "network", name);
}
var QuickNodeProvider = class extends JsonRpcProvider {
  /**
   *  Creates a new **QuickNodeProvider**.
   */
  constructor(_network3, token) {
    if (_network3 == null) {
      _network3 = "mainnet";
    }
    const network = Network.from(_network3);
    if (token == null) {
      token = defaultToken;
    }
    const request = QuickNodeProvider.getRequest(network, token);
    super(request, network, { staticNetwork: network });
    /**
     *  The API token.
     */
    __publicField(this, "token");
    defineProperties(this, { token });
  }
  _getProvider(chainId) {
    try {
      return new QuickNodeProvider(chainId, this.token);
    } catch (error) {
    }
    return super._getProvider(chainId);
  }
  isCommunityResource() {
    return this.token === defaultToken;
  }
  /**
   *  Returns a new request prepared for %%network%% and the
   *  %%token%%.
   */
  static getRequest(network, token) {
    if (token == null) {
      token = defaultToken;
    }
    const request = new FetchRequest(`https://${getHost4(network.name)}/${token}`);
    request.allowGzip = true;
    if (token === defaultToken) {
      request.retryFunc = async (request2, response, attempt) => {
        showThrottleMessage("QuickNodeProvider");
        return true;
      };
    }
    return request;
  }
};

// node_modules/ethers/lib.esm/providers/provider-fallback.js
var BN_16 = BigInt("1");
var BN_24 = BigInt("2");
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
}
function stall2(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
function getTime3() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function stringify2(value) {
  return JSON.stringify(value, (key, value2) => {
    if (typeof value2 === "bigint") {
      return { type: "bigint", value: value2.toString() };
    }
    return value2;
  });
}
var defaultConfig = { stallTimeout: 400, priority: 1, weight: 1 };
var defaultState = {
  blockNumber: -2,
  requests: 0,
  lateResponses: 0,
  errorResponses: 0,
  outOfSync: -1,
  unsupportedEvents: 0,
  rollingDuration: 0,
  score: 0,
  _network: null,
  _updateNumber: null,
  _totalTime: 0,
  _lastFatalError: null,
  _lastFatalErrorTimestamp: 0
};
async function waitForSync(config, blockNumber) {
  while (config.blockNumber < 0 || config.blockNumber < blockNumber) {
    if (!config._updateNumber) {
      config._updateNumber = (async () => {
        try {
          const blockNumber2 = await config.provider.getBlockNumber();
          if (blockNumber2 > config.blockNumber) {
            config.blockNumber = blockNumber2;
          }
        } catch (error) {
          config.blockNumber = -2;
          config._lastFatalError = error;
          config._lastFatalErrorTimestamp = getTime3();
        }
        config._updateNumber = null;
      })();
    }
    await config._updateNumber;
    config.outOfSync++;
    if (config._lastFatalError) {
      break;
    }
  }
}
function _normalize(value) {
  if (value == null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "[" + value.map(_normalize).join(",") + "]";
  }
  if (typeof value === "object" && typeof value.toJSON === "function") {
    return _normalize(value.toJSON());
  }
  switch (typeof value) {
    case "boolean":
    case "symbol":
      return value.toString();
    case "bigint":
    case "number":
      return BigInt(value).toString();
    case "string":
      return JSON.stringify(value);
    case "object": {
      const keys = Object.keys(value);
      keys.sort();
      return "{" + keys.map((k) => `${JSON.stringify(k)}:${_normalize(value[k])}`).join(",") + "}";
    }
  }
  console.log("Could not serialize", value);
  throw new Error("Hmm...");
}
function normalizeResult(value) {
  if ("error" in value) {
    const error = value.error;
    return { tag: _normalize(error), value: error };
  }
  const result = value.result;
  return { tag: _normalize(result), value: result };
}
function checkQuorum(quorum, results) {
  const tally = /* @__PURE__ */ new Map();
  for (const { value, tag, weight } of results) {
    const t = tally.get(tag) || { value, weight: 0 };
    t.weight += weight;
    tally.set(tag, t);
  }
  let best = null;
  for (const r2 of tally.values()) {
    if (r2.weight >= quorum && (!best || r2.weight > best.weight)) {
      best = r2;
    }
  }
  if (best) {
    return best.value;
  }
  return void 0;
}
function getMedian(quorum, results) {
  let resultWeight = 0;
  const errorMap = /* @__PURE__ */ new Map();
  let bestError = null;
  const values = [];
  for (const { value, tag, weight } of results) {
    if (value instanceof Error) {
      const e = errorMap.get(tag) || { value, weight: 0 };
      e.weight += weight;
      errorMap.set(tag, e);
      if (bestError == null || e.weight > bestError.weight) {
        bestError = e;
      }
    } else {
      values.push(BigInt(value));
      resultWeight += weight;
    }
  }
  if (resultWeight < quorum) {
    if (bestError && bestError.weight >= quorum) {
      return bestError.value;
    }
    return void 0;
  }
  values.sort((a, b2) => a < b2 ? -1 : b2 > a ? 1 : 0);
  const mid = Math.floor(values.length / 2);
  if (values.length % 2) {
    return values[mid];
  }
  return (values[mid - 1] + values[mid] + BN_16) / BN_24;
}
function getAnyResult(quorum, results) {
  const result = checkQuorum(quorum, results);
  if (result !== void 0) {
    return result;
  }
  for (const r2 of results) {
    if (r2.value) {
      return r2.value;
    }
  }
  return void 0;
}
function getFuzzyMode(quorum, results) {
  if (quorum === 1) {
    return getNumber(getMedian(quorum, results), "%internal");
  }
  const tally = /* @__PURE__ */ new Map();
  const add2 = (result, weight) => {
    const t = tally.get(result) || { result, weight: 0 };
    t.weight += weight;
    tally.set(result, t);
  };
  for (const { weight, value } of results) {
    const r2 = getNumber(value);
    add2(r2 - 1, weight);
    add2(r2, weight);
    add2(r2 + 1, weight);
  }
  let bestWeight = 0;
  let bestResult = void 0;
  for (const { weight, result } of tally.values()) {
    if (weight >= quorum && (weight > bestWeight || bestResult != null && weight === bestWeight && result > bestResult)) {
      bestWeight = weight;
      bestResult = result;
    }
  }
  return bestResult;
}
var _configs, _height, _initialSyncPromise, _getNextConfig, getNextConfig_fn, _addRunner, addRunner_fn, _initialSync, initialSync_fn, _checkQuorum, checkQuorum_fn, _waitForQuorum, waitForQuorum_fn;
var FallbackProvider = class extends AbstractProvider {
  /**
   *  Creates a new **FallbackProvider** with %%providers%% connected to
   *  %%network%%.
   *
   *  If a [[Provider]] is included in %%providers%%, defaults are used
   *  for the configuration.
   */
  constructor(providers, network) {
    super(network);
    // Grab the next (random) config that is not already part of
    // the running set
    __privateAdd(this, _getNextConfig);
    // Adds a new runner (if available) to running.
    __privateAdd(this, _addRunner);
    // Initializes the blockNumber and network for each runner and
    // blocks until initialized
    __privateAdd(this, _initialSync);
    __privateAdd(this, _checkQuorum);
    __privateAdd(this, _waitForQuorum);
    /**
     *  The number of backends that must agree on a value before it is
     *  accpeted.
     */
    __publicField(this, "quorum");
    /**
     *  @_ignore:
     */
    __publicField(this, "eventQuorum");
    /**
     *  @_ignore:
     */
    __publicField(this, "eventWorkers");
    __privateAdd(this, _configs, void 0);
    __privateAdd(this, _height, void 0);
    __privateAdd(this, _initialSyncPromise, void 0);
    __privateSet(this, _configs, providers.map((p) => {
      if (p instanceof AbstractProvider) {
        return Object.assign({ provider: p }, defaultConfig, defaultState);
      } else {
        return Object.assign({}, defaultConfig, p, defaultState);
      }
    }));
    __privateSet(this, _height, -2);
    __privateSet(this, _initialSyncPromise, null);
    this.quorum = 2;
    this.eventQuorum = 1;
    this.eventWorkers = 1;
    assertArgument(this.quorum <= __privateGet(this, _configs).reduce((a, c) => a + c.weight, 0), "quorum exceed provider wieght", "quorum", this.quorum);
  }
  get providerConfigs() {
    return __privateGet(this, _configs).map((c) => {
      const result = Object.assign({}, c);
      for (const key in result) {
        if (key[0] === "_") {
          delete result[key];
        }
      }
      return result;
    });
  }
  async _detectNetwork() {
    return Network.from(getBigInt(await this._perform({ method: "chainId" })));
  }
  // @TODO: Add support to select providers to be the event subscriber
  //_getSubscriber(sub: Subscription): Subscriber {
  //    throw new Error("@TODO");
  //}
  /**
   *  Transforms a %%req%% into the correct method call on %%provider%%.
   */
  async _translatePerform(provider, req) {
    switch (req.method) {
      case "broadcastTransaction":
        return await provider.broadcastTransaction(req.signedTransaction);
      case "call":
        return await provider.call(Object.assign({}, req.transaction, { blockTag: req.blockTag }));
      case "chainId":
        return (await provider.getNetwork()).chainId;
      case "estimateGas":
        return await provider.estimateGas(req.transaction);
      case "getBalance":
        return await provider.getBalance(req.address, req.blockTag);
      case "getBlock": {
        const block = "blockHash" in req ? req.blockHash : req.blockTag;
        return await provider.getBlock(block, req.includeTransactions);
      }
      case "getBlockNumber":
        return await provider.getBlockNumber();
      case "getCode":
        return await provider.getCode(req.address, req.blockTag);
      case "getGasPrice":
        return (await provider.getFeeData()).gasPrice;
      case "getLogs":
        return await provider.getLogs(req.filter);
      case "getStorage":
        return await provider.getStorage(req.address, req.position, req.blockTag);
      case "getTransaction":
        return await provider.getTransaction(req.hash);
      case "getTransactionCount":
        return await provider.getTransactionCount(req.address, req.blockTag);
      case "getTransactionReceipt":
        return await provider.getTransactionReceipt(req.hash);
      case "getTransactionResult":
        return await provider.getTransactionResult(req.hash);
    }
  }
  async _perform(req) {
    if (req.method === "broadcastTransaction") {
      const results = await Promise.all(__privateGet(this, _configs).map(async ({ provider, weight }) => {
        try {
          const result3 = await provider._perform(req);
          return Object.assign(normalizeResult({ result: result3 }), { weight });
        } catch (error) {
          return Object.assign(normalizeResult({ error }), { weight });
        }
      }));
      const result2 = getAnyResult(this.quorum, results);
      assert(result2 !== void 0, "problem multi-broadcasting", "SERVER_ERROR", {
        request: "%sub-requests",
        info: { request: req, results: results.map(stringify2) }
      });
      if (result2 instanceof Error) {
        throw result2;
      }
      return result2;
    }
    await __privateMethod(this, _initialSync, initialSync_fn).call(this);
    const running = /* @__PURE__ */ new Set();
    for (let i = 0; i < this.quorum; i++) {
      __privateMethod(this, _addRunner, addRunner_fn).call(this, running, req);
    }
    const result = await __privateMethod(this, _waitForQuorum, waitForQuorum_fn).call(this, running, req);
    for (const runner of running) {
      if (runner.perform && runner.result == null) {
        runner.config.lateResponses++;
      }
    }
    return result;
  }
  async destroy() {
    for (const { provider } of __privateGet(this, _configs)) {
      provider.destroy();
    }
    super.destroy();
  }
};
_configs = new WeakMap();
_height = new WeakMap();
_initialSyncPromise = new WeakMap();
_getNextConfig = new WeakSet();
getNextConfig_fn = function(running) {
  const configs = Array.from(running).map((r2) => r2.config);
  const allConfigs = __privateGet(this, _configs).slice();
  shuffle(allConfigs);
  allConfigs.sort((a, b2) => b2.priority - a.priority);
  for (const config of allConfigs) {
    if (config._lastFatalError) {
      continue;
    }
    if (configs.indexOf(config) === -1) {
      return config;
    }
  }
  return null;
};
_addRunner = new WeakSet();
addRunner_fn = function(running, req) {
  const config = __privateMethod(this, _getNextConfig, getNextConfig_fn).call(this, running);
  if (config == null) {
    return null;
  }
  const runner = {
    config,
    result: null,
    didBump: false,
    perform: null,
    staller: null
  };
  const now = getTime3();
  runner.perform = (async () => {
    try {
      config.requests++;
      const result = await this._translatePerform(config.provider, req);
      runner.result = { result };
    } catch (error) {
      config.errorResponses++;
      runner.result = { error };
    }
    const dt = getTime3() - now;
    config._totalTime += dt;
    config.rollingDuration = 0.95 * config.rollingDuration + 0.05 * dt;
    runner.perform = null;
  })();
  runner.staller = (async () => {
    await stall2(config.stallTimeout);
    runner.staller = null;
  })();
  running.add(runner);
  return runner;
};
_initialSync = new WeakSet();
initialSync_fn = async function() {
  let initialSync = __privateGet(this, _initialSyncPromise);
  if (!initialSync) {
    const promises = [];
    __privateGet(this, _configs).forEach((config) => {
      promises.push((async () => {
        await waitForSync(config, 0);
        if (!config._lastFatalError) {
          config._network = await config.provider.getNetwork();
        }
      })());
    });
    __privateSet(this, _initialSyncPromise, initialSync = (async () => {
      await Promise.all(promises);
      let chainId = null;
      for (const config of __privateGet(this, _configs)) {
        if (config._lastFatalError) {
          continue;
        }
        const network = config._network;
        if (chainId == null) {
          chainId = network.chainId;
        } else if (network.chainId !== chainId) {
          assert(false, "cannot mix providers on different networks", "UNSUPPORTED_OPERATION", {
            operation: "new FallbackProvider"
          });
        }
      }
    })());
  }
  await initialSync;
};
_checkQuorum = new WeakSet();
checkQuorum_fn = async function(running, req) {
  const results = [];
  for (const runner of running) {
    if (runner.result != null) {
      const { tag, value } = normalizeResult(runner.result);
      results.push({ tag, value, weight: runner.config.weight });
    }
  }
  if (results.reduce((a, r2) => a + r2.weight, 0) < this.quorum) {
    return void 0;
  }
  switch (req.method) {
    case "getBlockNumber": {
      if (__privateGet(this, _height) === -2) {
        __privateSet(this, _height, Math.ceil(getNumber(getMedian(this.quorum, __privateGet(this, _configs).filter((c) => !c._lastFatalError).map((c) => ({
          value: c.blockNumber,
          tag: getNumber(c.blockNumber).toString(),
          weight: c.weight
        }))))));
      }
      const mode = getFuzzyMode(this.quorum, results);
      if (mode === void 0) {
        return void 0;
      }
      if (mode > __privateGet(this, _height)) {
        __privateSet(this, _height, mode);
      }
      return __privateGet(this, _height);
    }
    case "getGasPrice":
    case "estimateGas":
      return getMedian(this.quorum, results);
    case "getBlock":
      if ("blockTag" in req && req.blockTag === "pending") {
        return getAnyResult(this.quorum, results);
      }
      return checkQuorum(this.quorum, results);
    case "call":
    case "chainId":
    case "getBalance":
    case "getTransactionCount":
    case "getCode":
    case "getStorage":
    case "getTransaction":
    case "getTransactionReceipt":
    case "getLogs":
      return checkQuorum(this.quorum, results);
    case "broadcastTransaction":
      return getAnyResult(this.quorum, results);
  }
  assert(false, "unsupported method", "UNSUPPORTED_OPERATION", {
    operation: `_perform(${stringify2(req.method)})`
  });
};
_waitForQuorum = new WeakSet();
waitForQuorum_fn = async function(running, req) {
  if (running.size === 0) {
    throw new Error("no runners?!");
  }
  const interesting = [];
  let newRunners = 0;
  for (const runner of running) {
    if (runner.perform) {
      interesting.push(runner.perform);
    }
    if (runner.staller) {
      interesting.push(runner.staller);
      continue;
    }
    if (runner.didBump) {
      continue;
    }
    runner.didBump = true;
    newRunners++;
  }
  const value = await __privateMethod(this, _checkQuorum, checkQuorum_fn).call(this, running, req);
  if (value !== void 0) {
    if (value instanceof Error) {
      throw value;
    }
    return value;
  }
  for (let i = 0; i < newRunners; i++) {
    __privateMethod(this, _addRunner, addRunner_fn).call(this, running, req);
  }
  assert(interesting.length > 0, "quorum not met", "SERVER_ERROR", {
    request: "%sub-requests",
    info: { request: req, results: Array.from(running).map((r2) => stringify2(r2.result)) }
  });
  await Promise.race(interesting);
  return await __privateMethod(this, _waitForQuorum, waitForQuorum_fn).call(this, running, req);
};

// node_modules/ethers/lib.esm/providers/default-provider.js
function isWebSocketLike(value) {
  return value && typeof value.send === "function" && typeof value.close === "function";
}
function getDefaultProvider(network, options) {
  if (options == null) {
    options = {};
  }
  if (typeof network === "string" && network.match(/^https?:/)) {
    return new JsonRpcProvider(network);
  }
  if (typeof network === "string" && network.match(/^wss?:/) || isWebSocketLike(network)) {
    return new WebSocketProvider(network);
  }
  const providers = [];
  if (options.alchemy !== "-") {
    try {
      providers.push(new AlchemyProvider(network, options.alchemy));
    } catch (error) {
    }
  }
  if (options.ankr !== "-" && options.ankr != null) {
    try {
      providers.push(new AnkrProvider(network, options.ankr));
    } catch (error) {
    }
  }
  if (options.cloudflare !== "-") {
    try {
      providers.push(new CloudflareProvider(network));
    } catch (error) {
    }
  }
  if (options.etherscan !== "-") {
    try {
      providers.push(new EtherscanProvider(network, options.etherscan));
    } catch (error) {
    }
  }
  if (options.infura !== "-") {
    try {
      let projectId = options.infura;
      let projectSecret = void 0;
      if (typeof projectId === "object") {
        projectSecret = projectId.projectSecret;
        projectId = projectId.projectId;
      }
      providers.push(new InfuraProvider(network, projectId, projectSecret));
    } catch (error) {
    }
  }
  if (options.quicknode !== "-") {
    try {
      let token = options.quicknode;
      providers.push(new QuickNodeProvider(network, token));
    } catch (error) {
    }
  }
  assert(providers.length, "unsupported default network", "UNSUPPORTED_OPERATION", {
    operation: "getDefaultProvider"
  });
  if (providers.length === 1) {
    return providers[0];
  }
  return new FallbackProvider(providers);
}

// node_modules/ethers/lib.esm/providers/signer-noncemanager.js
var _noncePromise, _delta;
var _NonceManager = class extends AbstractSigner {
  /**
   *  Creates a new **NonceManager** to manage %%signer%%.
   */
  constructor(signer) {
    super(signer.provider);
    /**
     *  The Signer being managed.
     */
    __publicField(this, "signer");
    __privateAdd(this, _noncePromise, void 0);
    __privateAdd(this, _delta, void 0);
    defineProperties(this, { signer });
    __privateSet(this, _noncePromise, null);
    __privateSet(this, _delta, 0);
  }
  async getAddress() {
    return this.signer.getAddress();
  }
  connect(provider) {
    return new _NonceManager(this.signer.connect(provider));
  }
  async getNonce(blockTag) {
    if (blockTag === "pending") {
      if (__privateGet(this, _noncePromise) == null) {
        __privateSet(this, _noncePromise, super.getNonce("pending"));
      }
      const delta = __privateGet(this, _delta);
      return await __privateGet(this, _noncePromise) + delta;
    }
    return super.getNonce(blockTag);
  }
  /**
   *  Manually increment the nonce. This may be useful when managng
   *  offline transactions.
   */
  increment() {
    __privateWrapper(this, _delta)._++;
  }
  /**
   *  Resets the nonce, causing the **NonceManager** to reload the current
   *  nonce from the blockchain on the next transaction.
   */
  reset() {
    __privateSet(this, _delta, 0);
    __privateSet(this, _noncePromise, null);
  }
  async sendTransaction(tx) {
    const noncePromise = this.getNonce("pending");
    this.increment();
    tx = await this.signer.populateTransaction(tx);
    tx.nonce = await noncePromise;
    return await this.signer.sendTransaction(tx);
  }
  signTransaction(tx) {
    return this.signer.signTransaction(tx);
  }
  signMessage(message) {
    return this.signer.signMessage(message);
  }
  signTypedData(domain, types, value) {
    return this.signer.signTypedData(domain, types, value);
  }
};
var NonceManager = _NonceManager;
_noncePromise = new WeakMap();
_delta = new WeakMap();

// node_modules/ethers/lib.esm/providers/provider-browser.js
var _request2;
var BrowserProvider = class extends JsonRpcApiPollingProvider {
  /**
   *  Connnect to the %%ethereum%% provider, optionally forcing the
   *  %%network%%.
   */
  constructor(ethereum, network) {
    super(network, { batchMaxCount: 1 });
    __privateAdd(this, _request2, void 0);
    __privateSet(this, _request2, async (method, params) => {
      const payload = { method, params };
      this.emit("debug", { action: "sendEip1193Request", payload });
      try {
        const result = await ethereum.request(payload);
        this.emit("debug", { action: "receiveEip1193Result", result });
        return result;
      } catch (e) {
        const error = new Error(e.message);
        error.code = e.code;
        error.data = e.data;
        error.payload = payload;
        this.emit("debug", { action: "receiveEip1193Error", error });
        throw error;
      }
    });
  }
  async send(method, params) {
    await this._start();
    return await super.send(method, params);
  }
  async _send(payload) {
    assertArgument(!Array.isArray(payload), "EIP-1193 does not support batch request", "payload", payload);
    try {
      const result = await __privateGet(this, _request2).call(this, payload.method, payload.params || []);
      return [{ id: payload.id, result }];
    } catch (e) {
      return [{
        id: payload.id,
        error: { code: e.code, data: e.data, message: e.message }
      }];
    }
  }
  getRpcError(payload, error) {
    error = JSON.parse(JSON.stringify(error));
    switch (error.error.code || -1) {
      case 4001:
        error.error.message = `ethers-user-denied: ${error.error.message}`;
        break;
      case 4200:
        error.error.message = `ethers-unsupported: ${error.error.message}`;
        break;
    }
    return super.getRpcError(payload, error);
  }
  /**
   *  Resolves to ``true`` if the provider manages the %%address%%.
   */
  async hasSigner(address) {
    if (address == null) {
      address = 0;
    }
    const accounts = await this.send("eth_accounts", []);
    if (typeof address === "number") {
      return accounts.length > address;
    }
    address = address.toLowerCase();
    return accounts.filter((a) => a.toLowerCase() === address).length !== 0;
  }
  async getSigner(address) {
    if (address == null) {
      address = 0;
    }
    if (!await this.hasSigner(address)) {
      try {
        await __privateGet(this, _request2).call(this, "eth_requestAccounts", []);
      } catch (error) {
        const payload = error.payload;
        throw this.getRpcError(payload, { id: payload.id, error });
      }
    }
    return await super.getSigner(address);
  }
};
_request2 = new WeakMap();

// node_modules/ethers/lib.esm/providers/provider-pocket.js
var defaultApplicationId = "62e1ad51b37b8e00394bda3b";
function getHost5(name) {
  switch (name) {
    case "mainnet":
      return "eth-mainnet.gateway.pokt.network";
    case "goerli":
      return "eth-goerli.gateway.pokt.network";
    case "matic":
      return "poly-mainnet.gateway.pokt.network";
    case "matic-mumbai":
      return "polygon-mumbai-rpc.gateway.pokt.network";
  }
  assertArgument(false, "unsupported network", "network", name);
}
var PocketProvider = class extends JsonRpcProvider {
  /**
   *  Create a new **PocketProvider**.
   *
   *  By default connecting to ``mainnet`` with a highly throttled
   *  API key.
   */
  constructor(_network3, applicationId, applicationSecret) {
    if (_network3 == null) {
      _network3 = "mainnet";
    }
    const network = Network.from(_network3);
    if (applicationId == null) {
      applicationId = defaultApplicationId;
    }
    if (applicationSecret == null) {
      applicationSecret = null;
    }
    const options = { staticNetwork: network };
    const request = PocketProvider.getRequest(network, applicationId, applicationSecret);
    super(request, network, options);
    /**
     *  The Application ID for the Pocket connection.
     */
    __publicField(this, "applicationId");
    /**
     *  The Application Secret for making authenticated requests
     *  to the Pocket connection.
     */
    __publicField(this, "applicationSecret");
    defineProperties(this, { applicationId, applicationSecret });
  }
  _getProvider(chainId) {
    try {
      return new PocketProvider(chainId, this.applicationId, this.applicationSecret);
    } catch (error) {
    }
    return super._getProvider(chainId);
  }
  /**
   *  Returns a prepared request for connecting to %%network%% with
   *  %%applicationId%%.
   */
  static getRequest(network, applicationId, applicationSecret) {
    if (applicationId == null) {
      applicationId = defaultApplicationId;
    }
    const request = new FetchRequest(`https://${getHost5(network.name)}/v1/lb/${applicationId}`);
    request.allowGzip = true;
    if (applicationSecret) {
      request.setCredentials("", applicationSecret);
    }
    if (applicationId === defaultApplicationId) {
      request.retryFunc = async (request2, response, attempt) => {
        showThrottleMessage("PocketProvider");
        return true;
      };
    }
    return request;
  }
  isCommunityResource() {
    return this.applicationId === defaultApplicationId;
  }
};

// node_modules/ethers/lib.esm/providers/provider-ipcsocket-browser.js
var IpcSocketProvider = void 0;

// node_modules/ethers/lib.esm/wallet/base-wallet.js
var _signingKey;
var _BaseWallet = class extends AbstractSigner {
  /**
   *  Creates a new BaseWallet for %%privateKey%%, optionally
   *  connected to %%provider%%.
   *
   *  If %%provider%% is not specified, only offline methods can
   *  be used.
   */
  constructor(privateKey, provider) {
    super(provider);
    /**
     *  The wallet address.
     */
    __publicField(this, "address");
    __privateAdd(this, _signingKey, void 0);
    assertArgument(privateKey && typeof privateKey.sign === "function", "invalid private key", "privateKey", "[ REDACTED ]");
    __privateSet(this, _signingKey, privateKey);
    const address = computeAddress(this.signingKey.publicKey);
    defineProperties(this, { address });
  }
  // Store private values behind getters to reduce visibility
  // in console.log
  /**
   *  The [[SigningKey]] used for signing payloads.
   */
  get signingKey() {
    return __privateGet(this, _signingKey);
  }
  /**
   *  The private key for this wallet.
   */
  get privateKey() {
    return this.signingKey.privateKey;
  }
  async getAddress() {
    return this.address;
  }
  connect(provider) {
    return new _BaseWallet(__privateGet(this, _signingKey), provider);
  }
  async signTransaction(tx) {
    const { to, from } = await resolveProperties({
      to: tx.to ? resolveAddress(tx.to, this.provider) : void 0,
      from: tx.from ? resolveAddress(tx.from, this.provider) : void 0
    });
    if (to != null) {
      tx.to = to;
    }
    if (from != null) {
      tx.from = from;
    }
    if (tx.from != null) {
      assertArgument(getAddress(tx.from) === this.address, "transaction from address mismatch", "tx.from", tx.from);
      delete tx.from;
    }
    const btx = Transaction.from(tx);
    btx.signature = this.signingKey.sign(btx.unsignedHash);
    return btx.serialized;
  }
  async signMessage(message) {
    return this.signMessageSync(message);
  }
  // @TODO: Add a secialized signTx and signTyped sync that enforces
  // all parameters are known?
  /**
   *  Returns the signature for %%message%% signed with this wallet.
   */
  signMessageSync(message) {
    return this.signingKey.sign(hashMessage(message)).serialized;
  }
  async signTypedData(domain, types, value) {
    const populated = await TypedDataEncoder.resolveNames(domain, types, value, async (name) => {
      assert(this.provider != null, "cannot resolve ENS names without a provider", "UNSUPPORTED_OPERATION", {
        operation: "resolveName",
        info: { name }
      });
      const address = await this.provider.resolveName(name);
      assert(address != null, "unconfigured ENS name", "UNCONFIGURED_NAME", {
        value: name
      });
      return address;
    });
    return this.signingKey.sign(TypedDataEncoder.hash(populated.domain, types, populated.value)).serialized;
  }
};
var BaseWallet = _BaseWallet;
_signingKey = new WeakMap();

// node_modules/ethers/lib.esm/wordlists/decode-owl.js
var subsChrs = " !#$%&'()*+,-./<=>?@[]^_`{|}~";
var Word = /^[a-z]*$/i;
function unfold(words2, sep) {
  let initial = 97;
  return words2.reduce((accum, word) => {
    if (word === sep) {
      initial++;
    } else if (word.match(Word)) {
      accum.push(String.fromCharCode(initial) + word);
    } else {
      initial = 97;
      accum.push(word);
    }
    return accum;
  }, []);
}
function decode(data, subs) {
  for (let i = subsChrs.length - 1; i >= 0; i--) {
    data = data.split(subsChrs[i]).join(subs.substring(2 * i, 2 * i + 2));
  }
  const clumps = [];
  const leftover = data.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (all, item, semi, word) => {
    if (semi) {
      for (let i = parseInt(semi); i >= 0; i--) {
        clumps.push(";");
      }
    } else {
      clumps.push(item.toLowerCase());
    }
    return "";
  });
  if (leftover) {
    throw new Error(`leftovers: ${JSON.stringify(leftover)}`);
  }
  return unfold(unfold(clumps, ";"), ":");
}
function decodeOwl(data) {
  assertArgument(data[0] === "0", "unsupported auwl data", "data", data);
  return decode(data.substring(1 + 2 * subsChrs.length), data.substring(1, 1 + 2 * subsChrs.length));
}

// node_modules/ethers/lib.esm/wordlists/wordlist.js
var Wordlist = class {
  /**
   *  Creates a new Wordlist instance.
   *
   *  Sub-classes MUST call this if they provide their own constructor,
   *  passing in the locale string of the language.
   *
   *  Generally there is no need to create instances of a Wordlist,
   *  since each language-specific Wordlist creates an instance and
   *  there is no state kept internally, so they are safe to share.
   */
  constructor(locale) {
    __publicField(this, "locale");
    defineProperties(this, { locale });
  }
  /**
   *  Sub-classes may override this to provide a language-specific
   *  method for spliting %%phrase%% into individual words.
   *
   *  By default, %%phrase%% is split using any sequences of
   *  white-space as defined by regular expressions (i.e. ``/\s+/``).
   */
  split(phrase) {
    return phrase.toLowerCase().split(/\s+/g);
  }
  /**
   *  Sub-classes may override this to provider a language-specific
   *  method for joining %%words%% into a phrase.
   *
   *  By default, %%words%% are joined by a single space.
   */
  join(words2) {
    return words2.join(" ");
  }
};

// node_modules/ethers/lib.esm/wordlists/wordlist-owl.js
var _data4, _checksum, _words, _loadWords, loadWords_fn;
var WordlistOwl = class extends Wordlist {
  /**
   *  Creates a new Wordlist for %%locale%% using the OWL %%data%%
   *  and validated against the %%checksum%%.
   */
  constructor(locale, data, checksum2) {
    super(locale);
    __privateAdd(this, _loadWords);
    __privateAdd(this, _data4, void 0);
    __privateAdd(this, _checksum, void 0);
    __privateAdd(this, _words, void 0);
    __privateSet(this, _data4, data);
    __privateSet(this, _checksum, checksum2);
    __privateSet(this, _words, null);
  }
  /**
   *  The OWL-encoded data.
   */
  get _data() {
    return __privateGet(this, _data4);
  }
  /**
   *  Decode all the words for the wordlist.
   */
  _decodeWords() {
    return decodeOwl(__privateGet(this, _data4));
  }
  getWord(index) {
    const words2 = __privateMethod(this, _loadWords, loadWords_fn).call(this);
    assertArgument(index >= 0 && index < words2.length, `invalid word index: ${index}`, "index", index);
    return words2[index];
  }
  getWordIndex(word) {
    return __privateMethod(this, _loadWords, loadWords_fn).call(this).indexOf(word);
  }
};
_data4 = new WeakMap();
_checksum = new WeakMap();
_words = new WeakMap();
_loadWords = new WeakSet();
loadWords_fn = function() {
  if (__privateGet(this, _words) == null) {
    const words2 = this._decodeWords();
    const checksum2 = id(words2.join("\n") + "\n");
    if (checksum2 !== __privateGet(this, _checksum)) {
      throw new Error(`BIP39 Wordlist for ${this.locale} FAILED`);
    }
    __privateSet(this, _words, words2);
  }
  return __privateGet(this, _words);
};

// node_modules/ethers/lib.esm/wordlists/lang-en.js
var words = "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO";
var checksum = "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60";
var wordlist = null;
var LangEn = class extends WordlistOwl {
  /**
   *  Creates a new instance of the English language Wordlist.
   *
   *  This should be unnecessary most of the time as the exported
   *  [[langEn]] should suffice.
   *
   *  @_ignore:
   */
  constructor() {
    super("en", words, checksum);
  }
  /**
   *  Returns a singleton instance of a ``LangEn``, creating it
   *  if this is the first time being called.
   */
  static wordlist() {
    if (wordlist == null) {
      wordlist = new LangEn();
    }
    return wordlist;
  }
};

// node_modules/ethers/lib.esm/wallet/mnemonic.js
function getUpperMask(bits) {
  return (1 << bits) - 1 << 8 - bits & 255;
}
function getLowerMask(bits) {
  return (1 << bits) - 1 & 255;
}
function mnemonicToEntropy(mnemonic, wordlist2) {
  assertNormalize("NFKD");
  if (wordlist2 == null) {
    wordlist2 = LangEn.wordlist();
  }
  const words2 = wordlist2.split(mnemonic);
  assertArgument(words2.length % 3 === 0 && words2.length >= 12 && words2.length <= 24, "invalid mnemonic length", "mnemonic", "[ REDACTED ]");
  const entropy = new Uint8Array(Math.ceil(11 * words2.length / 8));
  let offset = 0;
  for (let i = 0; i < words2.length; i++) {
    let index = wordlist2.getWordIndex(words2[i].normalize("NFKD"));
    assertArgument(index >= 0, `invalid mnemonic word at index ${i}`, "mnemonic", "[ REDACTED ]");
    for (let bit = 0; bit < 11; bit++) {
      if (index & 1 << 10 - bit) {
        entropy[offset >> 3] |= 1 << 7 - offset % 8;
      }
      offset++;
    }
  }
  const entropyBits = 32 * words2.length / 3;
  const checksumBits = words2.length / 3;
  const checksumMask = getUpperMask(checksumBits);
  const checksum2 = getBytes(sha2562(entropy.slice(0, entropyBits / 8)))[0] & checksumMask;
  assertArgument(checksum2 === (entropy[entropy.length - 1] & checksumMask), "invalid mnemonic checksum", "mnemonic", "[ REDACTED ]");
  return hexlify(entropy.slice(0, entropyBits / 8));
}
function entropyToMnemonic(entropy, wordlist2) {
  assertArgument(entropy.length % 4 === 0 && entropy.length >= 16 && entropy.length <= 32, "invalid entropy size", "entropy", "[ REDACTED ]");
  if (wordlist2 == null) {
    wordlist2 = LangEn.wordlist();
  }
  const indices = [0];
  let remainingBits = 11;
  for (let i = 0; i < entropy.length; i++) {
    if (remainingBits > 8) {
      indices[indices.length - 1] <<= 8;
      indices[indices.length - 1] |= entropy[i];
      remainingBits -= 8;
    } else {
      indices[indices.length - 1] <<= remainingBits;
      indices[indices.length - 1] |= entropy[i] >> 8 - remainingBits;
      indices.push(entropy[i] & getLowerMask(8 - remainingBits));
      remainingBits += 3;
    }
  }
  const checksumBits = entropy.length / 4;
  const checksum2 = parseInt(sha2562(entropy).substring(2, 4), 16) & getUpperMask(checksumBits);
  indices[indices.length - 1] <<= checksumBits;
  indices[indices.length - 1] |= checksum2 >> 8 - checksumBits;
  return wordlist2.join(indices.map((index) => wordlist2.getWord(index)));
}
var _guard5 = {};
var Mnemonic = class {
  /**
   *  @private
   */
  constructor(guard, entropy, phrase, password, wordlist2) {
    /**
     *  The mnemonic phrase of 12, 15, 18, 21 or 24 words.
     *
     *  Use the [[wordlist]] ``split`` method to get the individual words.
     */
    __publicField(this, "phrase");
    /**
     *  The password used for this mnemonic. If no password is used this
     *  is the empty string (i.e. ``""``) as per the specification.
     */
    __publicField(this, "password");
    /**
     *  The wordlist for this mnemonic.
     */
    __publicField(this, "wordlist");
    /**
     *  The underlying entropy which the mnemonic encodes.
     */
    __publicField(this, "entropy");
    if (password == null) {
      password = "";
    }
    if (wordlist2 == null) {
      wordlist2 = LangEn.wordlist();
    }
    assertPrivate(guard, _guard5, "Mnemonic");
    defineProperties(this, { phrase, password, wordlist: wordlist2, entropy });
  }
  /**
   *  Returns the seed for the mnemonic.
   */
  computeSeed() {
    const salt = toUtf8Bytes("mnemonic" + this.password, "NFKD");
    return pbkdf22(toUtf8Bytes(this.phrase, "NFKD"), salt, 2048, 64, "sha512");
  }
  /**
   *  Creates a new Mnemonic for the %%phrase%%.
   *
   *  The default %%password%% is the empty string and the default
   *  wordlist is the [English wordlists](LangEn).
   */
  static fromPhrase(phrase, password, wordlist2) {
    const entropy = mnemonicToEntropy(phrase, wordlist2);
    phrase = entropyToMnemonic(getBytes(entropy), wordlist2);
    return new Mnemonic(_guard5, entropy, phrase, password, wordlist2);
  }
  /**
   *  Create a new **Mnemonic** from the %%entropy%%.
   *
   *  The default %%password%% is the empty string and the default
   *  wordlist is the [English wordlists](LangEn).
   */
  static fromEntropy(_entropy, password, wordlist2) {
    const entropy = getBytes(_entropy, "entropy");
    const phrase = entropyToMnemonic(entropy, wordlist2);
    return new Mnemonic(_guard5, hexlify(entropy), phrase, password, wordlist2);
  }
  /**
   *  Returns the phrase for %%mnemonic%%.
   */
  static entropyToPhrase(_entropy, wordlist2) {
    const entropy = getBytes(_entropy, "entropy");
    return entropyToMnemonic(entropy, wordlist2);
  }
  /**
   *  Returns the entropy for %%phrase%%.
   */
  static phraseToEntropy(phrase, wordlist2) {
    return mnemonicToEntropy(phrase, wordlist2);
  }
  /**
   *  Returns true if %%phrase%% is a valid [[link-bip-39]] phrase.
   *
   *  This checks all the provided words belong to the %%wordlist%%,
   *  that the length is valid and the checksum is correct.
   */
  static isValidMnemonic(phrase, wordlist2) {
    try {
      mnemonicToEntropy(phrase, wordlist2);
      return true;
    } catch (error) {
    }
    return false;
  }
};

// node_modules/aes-js/lib.esm/aes.js
var __classPrivateFieldGet = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var _AES_key;
var _AES_Kd;
var _AES_Ke;
var numberOfRounds = { 16: 10, 24: 12, 32: 14 };
var rcon = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145];
var S = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22];
var Si = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125];
var T12 = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986];
var T2 = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766];
var T3 = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126];
var T4 = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436];
var T5 = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890];
var T6 = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935];
var T7 = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600];
var T8 = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480];
var U1 = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795];
var U2 = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855];
var U3 = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150];
var U4 = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function convertToInt32(bytes2) {
  const result = [];
  for (let i = 0; i < bytes2.length; i += 4) {
    result.push(bytes2[i] << 24 | bytes2[i + 1] << 16 | bytes2[i + 2] << 8 | bytes2[i + 3]);
  }
  return result;
}
var AES = class {
  get key() {
    return __classPrivateFieldGet(this, _AES_key, "f").slice();
  }
  constructor(key) {
    _AES_key.set(this, void 0);
    _AES_Kd.set(this, void 0);
    _AES_Ke.set(this, void 0);
    if (!(this instanceof AES)) {
      throw Error("AES must be instanitated with `new`");
    }
    __classPrivateFieldSet(this, _AES_key, new Uint8Array(key), "f");
    const rounds = numberOfRounds[this.key.length];
    if (rounds == null) {
      throw new TypeError("invalid key size (must be 16, 24 or 32 bytes)");
    }
    __classPrivateFieldSet(this, _AES_Ke, [], "f");
    __classPrivateFieldSet(this, _AES_Kd, [], "f");
    for (let i = 0; i <= rounds; i++) {
      __classPrivateFieldGet(this, _AES_Ke, "f").push([0, 0, 0, 0]);
      __classPrivateFieldGet(this, _AES_Kd, "f").push([0, 0, 0, 0]);
    }
    const roundKeyCount = (rounds + 1) * 4;
    const KC = this.key.length / 4;
    const tk = convertToInt32(this.key);
    let index;
    for (let i = 0; i < KC; i++) {
      index = i >> 2;
      __classPrivateFieldGet(this, _AES_Ke, "f")[index][i % 4] = tk[i];
      __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - index][i % 4] = tk[i];
    }
    let rconpointer = 0;
    let t = KC, tt;
    while (t < roundKeyCount) {
      tt = tk[KC - 1];
      tk[0] ^= S[tt >> 16 & 255] << 24 ^ S[tt >> 8 & 255] << 16 ^ S[tt & 255] << 8 ^ S[tt >> 24 & 255] ^ rcon[rconpointer] << 24;
      rconpointer += 1;
      if (KC != 8) {
        for (let i2 = 1; i2 < KC; i2++) {
          tk[i2] ^= tk[i2 - 1];
        }
      } else {
        for (let i2 = 1; i2 < KC / 2; i2++) {
          tk[i2] ^= tk[i2 - 1];
        }
        tt = tk[KC / 2 - 1];
        tk[KC / 2] ^= S[tt & 255] ^ S[tt >> 8 & 255] << 8 ^ S[tt >> 16 & 255] << 16 ^ S[tt >> 24 & 255] << 24;
        for (let i2 = KC / 2 + 1; i2 < KC; i2++) {
          tk[i2] ^= tk[i2 - 1];
        }
      }
      let i = 0, r2, c;
      while (i < KC && t < roundKeyCount) {
        r2 = t >> 2;
        c = t % 4;
        __classPrivateFieldGet(this, _AES_Ke, "f")[r2][c] = tk[i];
        __classPrivateFieldGet(this, _AES_Kd, "f")[rounds - r2][c] = tk[i++];
        t++;
      }
    }
    for (let r2 = 1; r2 < rounds; r2++) {
      for (let c = 0; c < 4; c++) {
        tt = __classPrivateFieldGet(this, _AES_Kd, "f")[r2][c];
        __classPrivateFieldGet(this, _AES_Kd, "f")[r2][c] = U1[tt >> 24 & 255] ^ U2[tt >> 16 & 255] ^ U3[tt >> 8 & 255] ^ U4[tt & 255];
      }
    }
  }
  encrypt(plaintext) {
    if (plaintext.length != 16) {
      throw new TypeError("invalid plaintext size (must be 16 bytes)");
    }
    const rounds = __classPrivateFieldGet(this, _AES_Ke, "f").length - 1;
    const a = [0, 0, 0, 0];
    let t = convertToInt32(plaintext);
    for (let i = 0; i < 4; i++) {
      t[i] ^= __classPrivateFieldGet(this, _AES_Ke, "f")[0][i];
    }
    for (let r2 = 1; r2 < rounds; r2++) {
      for (let i = 0; i < 4; i++) {
        a[i] = T12[t[i] >> 24 & 255] ^ T2[t[(i + 1) % 4] >> 16 & 255] ^ T3[t[(i + 2) % 4] >> 8 & 255] ^ T4[t[(i + 3) % 4] & 255] ^ __classPrivateFieldGet(this, _AES_Ke, "f")[r2][i];
      }
      t = a.slice();
    }
    const result = new Uint8Array(16);
    let tt = 0;
    for (let i = 0; i < 4; i++) {
      tt = __classPrivateFieldGet(this, _AES_Ke, "f")[rounds][i];
      result[4 * i] = (S[t[i] >> 24 & 255] ^ tt >> 24) & 255;
      result[4 * i + 1] = (S[t[(i + 1) % 4] >> 16 & 255] ^ tt >> 16) & 255;
      result[4 * i + 2] = (S[t[(i + 2) % 4] >> 8 & 255] ^ tt >> 8) & 255;
      result[4 * i + 3] = (S[t[(i + 3) % 4] & 255] ^ tt) & 255;
    }
    return result;
  }
  decrypt(ciphertext) {
    if (ciphertext.length != 16) {
      throw new TypeError("invalid ciphertext size (must be 16 bytes)");
    }
    const rounds = __classPrivateFieldGet(this, _AES_Kd, "f").length - 1;
    const a = [0, 0, 0, 0];
    let t = convertToInt32(ciphertext);
    for (let i = 0; i < 4; i++) {
      t[i] ^= __classPrivateFieldGet(this, _AES_Kd, "f")[0][i];
    }
    for (let r2 = 1; r2 < rounds; r2++) {
      for (let i = 0; i < 4; i++) {
        a[i] = T5[t[i] >> 24 & 255] ^ T6[t[(i + 3) % 4] >> 16 & 255] ^ T7[t[(i + 2) % 4] >> 8 & 255] ^ T8[t[(i + 1) % 4] & 255] ^ __classPrivateFieldGet(this, _AES_Kd, "f")[r2][i];
      }
      t = a.slice();
    }
    const result = new Uint8Array(16);
    let tt = 0;
    for (let i = 0; i < 4; i++) {
      tt = __classPrivateFieldGet(this, _AES_Kd, "f")[rounds][i];
      result[4 * i] = (Si[t[i] >> 24 & 255] ^ tt >> 24) & 255;
      result[4 * i + 1] = (Si[t[(i + 3) % 4] >> 16 & 255] ^ tt >> 16) & 255;
      result[4 * i + 2] = (Si[t[(i + 2) % 4] >> 8 & 255] ^ tt >> 8) & 255;
      result[4 * i + 3] = (Si[t[(i + 1) % 4] & 255] ^ tt) & 255;
    }
    return result;
  }
};
_AES_key = /* @__PURE__ */ new WeakMap(), _AES_Kd = /* @__PURE__ */ new WeakMap(), _AES_Ke = /* @__PURE__ */ new WeakMap();

// node_modules/aes-js/lib.esm/mode.js
var ModeOfOperation = class {
  constructor(name, key, cls) {
    if (cls && !(this instanceof cls)) {
      throw new Error(`${name} must be instantiated with "new"`);
    }
    Object.defineProperties(this, {
      aes: { enumerable: true, value: new AES(key) },
      name: { enumerable: true, value: name }
    });
  }
};

// node_modules/aes-js/lib.esm/mode-cbc.js
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var _CBC_iv;
var _CBC_lastBlock;
var CBC = class extends ModeOfOperation {
  constructor(key, iv) {
    super("ECC", key, CBC);
    _CBC_iv.set(this, void 0);
    _CBC_lastBlock.set(this, void 0);
    if (iv) {
      if (iv.length % 16) {
        throw new TypeError("invalid iv size (must be 16 bytes)");
      }
      __classPrivateFieldSet2(this, _CBC_iv, new Uint8Array(iv), "f");
    } else {
      __classPrivateFieldSet2(this, _CBC_iv, new Uint8Array(16), "f");
    }
    __classPrivateFieldSet2(this, _CBC_lastBlock, this.iv, "f");
  }
  get iv() {
    return new Uint8Array(__classPrivateFieldGet2(this, _CBC_iv, "f"));
  }
  encrypt(plaintext) {
    if (plaintext.length % 16) {
      throw new TypeError("invalid plaintext size (must be multiple of 16 bytes)");
    }
    const ciphertext = new Uint8Array(plaintext.length);
    for (let i = 0; i < plaintext.length; i += 16) {
      for (let j = 0; j < 16; j++) {
        __classPrivateFieldGet2(this, _CBC_lastBlock, "f")[j] ^= plaintext[i + j];
      }
      __classPrivateFieldSet2(this, _CBC_lastBlock, this.aes.encrypt(__classPrivateFieldGet2(this, _CBC_lastBlock, "f")), "f");
      ciphertext.set(__classPrivateFieldGet2(this, _CBC_lastBlock, "f"), i);
    }
    return ciphertext;
  }
  decrypt(ciphertext) {
    if (ciphertext.length % 16) {
      throw new TypeError("invalid ciphertext size (must be multiple of 16 bytes)");
    }
    const plaintext = new Uint8Array(ciphertext.length);
    for (let i = 0; i < ciphertext.length; i += 16) {
      const block = this.aes.decrypt(ciphertext.subarray(i, i + 16));
      for (let j = 0; j < 16; j++) {
        plaintext[i + j] = block[j] ^ __classPrivateFieldGet2(this, _CBC_lastBlock, "f")[j];
        __classPrivateFieldGet2(this, _CBC_lastBlock, "f")[j] = ciphertext[i + j];
      }
    }
    return plaintext;
  }
};
_CBC_iv = /* @__PURE__ */ new WeakMap(), _CBC_lastBlock = /* @__PURE__ */ new WeakMap();

// node_modules/aes-js/lib.esm/mode-cfb.js
var __classPrivateFieldGet3 = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var _CFB_instances;
var _CFB_iv;
var _CFB_shiftRegister;
var _CFB_shift;
_CFB_iv = /* @__PURE__ */ new WeakMap(), _CFB_shiftRegister = /* @__PURE__ */ new WeakMap(), _CFB_instances = /* @__PURE__ */ new WeakSet(), _CFB_shift = function _CFB_shift2(data) {
  const segmentSize = this.segmentSize / 8;
  __classPrivateFieldGet3(this, _CFB_shiftRegister, "f").set(__classPrivateFieldGet3(this, _CFB_shiftRegister, "f").subarray(segmentSize));
  __classPrivateFieldGet3(this, _CFB_shiftRegister, "f").set(data.subarray(0, segmentSize), 16 - segmentSize);
};

// node_modules/aes-js/lib.esm/mode-ctr.js
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet4 = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var _CTR_remaining;
var _CTR_remainingIndex;
var _CTR_counter;
var CTR = class extends ModeOfOperation {
  constructor(key, initialValue) {
    super("CTR", key, CTR);
    _CTR_remaining.set(this, void 0);
    _CTR_remainingIndex.set(this, void 0);
    _CTR_counter.set(this, void 0);
    __classPrivateFieldSet3(this, _CTR_counter, new Uint8Array(16), "f");
    __classPrivateFieldGet4(this, _CTR_counter, "f").fill(0);
    __classPrivateFieldSet3(this, _CTR_remaining, __classPrivateFieldGet4(this, _CTR_counter, "f"), "f");
    __classPrivateFieldSet3(this, _CTR_remainingIndex, 16, "f");
    if (initialValue == null) {
      initialValue = 1;
    }
    if (typeof initialValue === "number") {
      this.setCounterValue(initialValue);
    } else {
      this.setCounterBytes(initialValue);
    }
  }
  get counter() {
    return new Uint8Array(__classPrivateFieldGet4(this, _CTR_counter, "f"));
  }
  setCounterValue(value) {
    if (!Number.isInteger(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) {
      throw new TypeError("invalid counter initial integer value");
    }
    for (let index = 15; index >= 0; --index) {
      __classPrivateFieldGet4(this, _CTR_counter, "f")[index] = value % 256;
      value = Math.floor(value / 256);
    }
  }
  setCounterBytes(value) {
    if (value.length !== 16) {
      throw new TypeError("invalid counter initial Uint8Array value length");
    }
    __classPrivateFieldGet4(this, _CTR_counter, "f").set(value);
  }
  increment() {
    for (let i = 15; i >= 0; i--) {
      if (__classPrivateFieldGet4(this, _CTR_counter, "f")[i] === 255) {
        __classPrivateFieldGet4(this, _CTR_counter, "f")[i] = 0;
      } else {
        __classPrivateFieldGet4(this, _CTR_counter, "f")[i]++;
        break;
      }
    }
  }
  encrypt(plaintext) {
    var _a2, _b;
    const crypttext = new Uint8Array(plaintext);
    for (let i = 0; i < crypttext.length; i++) {
      if (__classPrivateFieldGet4(this, _CTR_remainingIndex, "f") === 16) {
        __classPrivateFieldSet3(this, _CTR_remaining, this.aes.encrypt(__classPrivateFieldGet4(this, _CTR_counter, "f")), "f");
        __classPrivateFieldSet3(this, _CTR_remainingIndex, 0, "f");
        this.increment();
      }
      crypttext[i] ^= __classPrivateFieldGet4(this, _CTR_remaining, "f")[__classPrivateFieldSet3(this, _CTR_remainingIndex, (_b = __classPrivateFieldGet4(this, _CTR_remainingIndex, "f"), _a2 = _b++, _b), "f"), _a2];
    }
    return crypttext;
  }
  decrypt(ciphertext) {
    return this.encrypt(ciphertext);
  }
};
_CTR_remaining = /* @__PURE__ */ new WeakMap(), _CTR_remainingIndex = /* @__PURE__ */ new WeakMap(), _CTR_counter = /* @__PURE__ */ new WeakMap();

// node_modules/aes-js/lib.esm/mode-ofb.js
var _OFB_iv;
var _OFB_lastPrecipher;
var _OFB_lastPrecipherIndex;
_OFB_iv = /* @__PURE__ */ new WeakMap(), _OFB_lastPrecipher = /* @__PURE__ */ new WeakMap(), _OFB_lastPrecipherIndex = /* @__PURE__ */ new WeakMap();

// node_modules/aes-js/lib.esm/padding.js
function pkcs7Strip(data) {
  if (data.length < 16) {
    throw new TypeError("PKCS#7 invalid length");
  }
  const padder = data[data.length - 1];
  if (padder > 16) {
    throw new TypeError("PKCS#7 padding byte out of range");
  }
  const length = data.length - padder;
  for (let i = 0; i < padder; i++) {
    if (data[length + i] !== padder) {
      throw new TypeError("PKCS#7 invalid padding byte");
    }
  }
  return new Uint8Array(data.subarray(0, length));
}

// node_modules/ethers/lib.esm/wallet/utils.js
function looseArrayify(hexString) {
  if (typeof hexString === "string" && !hexString.startsWith("0x")) {
    hexString = "0x" + hexString;
  }
  return getBytesCopy(hexString);
}
function zpad(value, length) {
  value = String(value);
  while (value.length < length) {
    value = "0" + value;
  }
  return value;
}
function getPassword(password) {
  if (typeof password === "string") {
    return toUtf8Bytes(password, "NFKC");
  }
  return getBytesCopy(password);
}
function spelunk(object2, _path) {
  const match = _path.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
  assertArgument(match != null, "invalid path", "path", _path);
  const path = match[1];
  const type = match[3];
  const reqd = match[4] === "!";
  let cur = object2;
  for (const comp of path.toLowerCase().split(".")) {
    if (Array.isArray(cur)) {
      if (!comp.match(/^[0-9]+$/)) {
        break;
      }
      cur = cur[parseInt(comp)];
    } else if (typeof cur === "object") {
      let found = null;
      for (const key in cur) {
        if (key.toLowerCase() === comp) {
          found = cur[key];
          break;
        }
      }
      cur = found;
    } else {
      cur = null;
    }
    if (cur == null) {
      break;
    }
  }
  assertArgument(!reqd || cur != null, "missing required value", "path", path);
  if (type && cur != null) {
    if (type === "int") {
      if (typeof cur === "string" && cur.match(/^-?[0-9]+$/)) {
        return parseInt(cur);
      } else if (Number.isSafeInteger(cur)) {
        return cur;
      }
    }
    if (type === "number") {
      if (typeof cur === "string" && cur.match(/^-?[0-9.]*$/)) {
        return parseFloat(cur);
      }
    }
    if (type === "data") {
      if (typeof cur === "string") {
        return looseArrayify(cur);
      }
    }
    if (type === "array" && Array.isArray(cur)) {
      return cur;
    }
    if (type === typeof cur) {
      return cur;
    }
    assertArgument(false, `wrong type found for ${type} `, "path", path);
  }
  return cur;
}

// node_modules/ethers/lib.esm/wallet/json-keystore.js
var defaultPath = "m/44'/60'/0'/0/0";
function isKeystoreJson(json) {
  try {
    const data = JSON.parse(json);
    const version2 = data.version != null ? parseInt(data.version) : 0;
    if (version2 === 3) {
      return true;
    }
  } catch (error) {
  }
  return false;
}
function decrypt(data, key, ciphertext) {
  const cipher = spelunk(data, "crypto.cipher:string");
  if (cipher === "aes-128-ctr") {
    const iv = spelunk(data, "crypto.cipherparams.iv:data!");
    const aesCtr = new CTR(key, iv);
    return hexlify(aesCtr.decrypt(ciphertext));
  }
  assert(false, "unsupported cipher", "UNSUPPORTED_OPERATION", {
    operation: "decrypt"
  });
}
function getAccount(data, _key) {
  const key = getBytes(_key);
  const ciphertext = spelunk(data, "crypto.ciphertext:data!");
  const computedMAC = hexlify(keccak256(concat([key.slice(16, 32), ciphertext]))).substring(2);
  assertArgument(computedMAC === spelunk(data, "crypto.mac:string!").toLowerCase(), "incorrect password", "password", "[ REDACTED ]");
  const privateKey = decrypt(data, key.slice(0, 16), ciphertext);
  const address = computeAddress(privateKey);
  if (data.address) {
    let check = data.address.toLowerCase();
    if (!check.startsWith("0x")) {
      check = "0x" + check;
    }
    assertArgument(getAddress(check) === address, "keystore address/privateKey mismatch", "address", data.address);
  }
  const account = { address, privateKey };
  const version2 = spelunk(data, "x-ethers.version:string");
  if (version2 === "0.1") {
    const mnemonicKey = key.slice(32, 64);
    const mnemonicCiphertext = spelunk(data, "x-ethers.mnemonicCiphertext:data!");
    const mnemonicIv = spelunk(data, "x-ethers.mnemonicCounter:data!");
    const mnemonicAesCtr = new CTR(mnemonicKey, mnemonicIv);
    account.mnemonic = {
      path: spelunk(data, "x-ethers.path:string") || defaultPath,
      locale: spelunk(data, "x-ethers.locale:string") || "en",
      entropy: hexlify(getBytes(mnemonicAesCtr.decrypt(mnemonicCiphertext)))
    };
  }
  return account;
}
function getDecryptKdfParams(data) {
  const kdf = spelunk(data, "crypto.kdf:string");
  if (kdf && typeof kdf === "string") {
    if (kdf.toLowerCase() === "scrypt") {
      const salt = spelunk(data, "crypto.kdfparams.salt:data!");
      const N3 = spelunk(data, "crypto.kdfparams.n:int!");
      const r2 = spelunk(data, "crypto.kdfparams.r:int!");
      const p = spelunk(data, "crypto.kdfparams.p:int!");
      assertArgument(N3 > 0 && (N3 & N3 - 1) === 0, "invalid kdf.N", "kdf.N", N3);
      assertArgument(r2 > 0 && p > 0, "invalid kdf", "kdf", kdf);
      const dkLen = spelunk(data, "crypto.kdfparams.dklen:int!");
      assertArgument(dkLen === 32, "invalid kdf.dklen", "kdf.dflen", dkLen);
      return { name: "scrypt", salt, N: N3, r: r2, p, dkLen: 64 };
    } else if (kdf.toLowerCase() === "pbkdf2") {
      const salt = spelunk(data, "crypto.kdfparams.salt:data!");
      const prf = spelunk(data, "crypto.kdfparams.prf:string!");
      const algorithm = prf.split("-").pop();
      assertArgument(algorithm === "sha256" || algorithm === "sha512", "invalid kdf.pdf", "kdf.pdf", prf);
      const count = spelunk(data, "crypto.kdfparams.c:int!");
      const dkLen = spelunk(data, "crypto.kdfparams.dklen:int!");
      assertArgument(dkLen === 32, "invalid kdf.dklen", "kdf.dklen", dkLen);
      return { name: "pbkdf2", salt, count, dkLen, algorithm };
    }
  }
  assertArgument(false, "unsupported key-derivation function", "kdf", kdf);
}
function decryptKeystoreJsonSync(json, _password) {
  const data = JSON.parse(json);
  const password = getPassword(_password);
  const params = getDecryptKdfParams(data);
  if (params.name === "pbkdf2") {
    const { salt: salt2, count, dkLen: dkLen2, algorithm } = params;
    const key2 = pbkdf22(password, salt2, count, dkLen2, algorithm);
    return getAccount(data, key2);
  }
  assert(params.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", { params });
  const { salt, N: N3, r: r2, p, dkLen } = params;
  const key = scryptSync(password, salt, N3, r2, p, dkLen);
  return getAccount(data, key);
}
function stall3(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
async function decryptKeystoreJson(json, _password, progress) {
  const data = JSON.parse(json);
  const password = getPassword(_password);
  const params = getDecryptKdfParams(data);
  if (params.name === "pbkdf2") {
    if (progress) {
      progress(0);
      await stall3(0);
    }
    const { salt: salt2, count, dkLen: dkLen2, algorithm } = params;
    const key2 = pbkdf22(password, salt2, count, dkLen2, algorithm);
    if (progress) {
      progress(1);
      await stall3(0);
    }
    return getAccount(data, key2);
  }
  assert(params.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", { params });
  const { salt, N: N3, r: r2, p, dkLen } = params;
  const key = await scrypt2(password, salt, N3, r2, p, dkLen, progress);
  return getAccount(data, key);
}
function getEncryptKdfParams(options) {
  const salt = options.salt != null ? getBytes(options.salt, "options.salt") : randomBytes2(32);
  let N3 = 1 << 17, r2 = 8, p = 1;
  if (options.scrypt) {
    if (options.scrypt.N) {
      N3 = options.scrypt.N;
    }
    if (options.scrypt.r) {
      r2 = options.scrypt.r;
    }
    if (options.scrypt.p) {
      p = options.scrypt.p;
    }
  }
  assertArgument(typeof N3 === "number" && N3 > 0 && Number.isSafeInteger(N3) && (BigInt(N3) & BigInt(N3 - 1)) === BigInt(0), "invalid scrypt N parameter", "options.N", N3);
  assertArgument(typeof r2 === "number" && r2 > 0 && Number.isSafeInteger(r2), "invalid scrypt r parameter", "options.r", r2);
  assertArgument(typeof p === "number" && p > 0 && Number.isSafeInteger(p), "invalid scrypt p parameter", "options.p", p);
  return { name: "scrypt", dkLen: 32, salt, N: N3, r: r2, p };
}
function _encryptKeystore(key, kdf, account, options) {
  const privateKey = getBytes(account.privateKey, "privateKey");
  const iv = options.iv != null ? getBytes(options.iv, "options.iv") : randomBytes2(16);
  assertArgument(iv.length === 16, "invalid options.iv length", "options.iv", options.iv);
  const uuidRandom = options.uuid != null ? getBytes(options.uuid, "options.uuid") : randomBytes2(16);
  assertArgument(uuidRandom.length === 16, "invalid options.uuid length", "options.uuid", options.iv);
  const derivedKey = key.slice(0, 16);
  const macPrefix = key.slice(16, 32);
  const aesCtr = new CTR(derivedKey, iv);
  const ciphertext = getBytes(aesCtr.encrypt(privateKey));
  const mac = keccak256(concat([macPrefix, ciphertext]));
  const data = {
    address: account.address.substring(2).toLowerCase(),
    id: uuidV4(uuidRandom),
    version: 3,
    Crypto: {
      cipher: "aes-128-ctr",
      cipherparams: {
        iv: hexlify(iv).substring(2)
      },
      ciphertext: hexlify(ciphertext).substring(2),
      kdf: "scrypt",
      kdfparams: {
        salt: hexlify(kdf.salt).substring(2),
        n: kdf.N,
        dklen: 32,
        p: kdf.p,
        r: kdf.r
      },
      mac: mac.substring(2)
    }
  };
  if (account.mnemonic) {
    const client = options.client != null ? options.client : `ethers/${version}`;
    const path = account.mnemonic.path || defaultPath;
    const locale = account.mnemonic.locale || "en";
    const mnemonicKey = key.slice(32, 64);
    const entropy = getBytes(account.mnemonic.entropy, "account.mnemonic.entropy");
    const mnemonicIv = randomBytes2(16);
    const mnemonicAesCtr = new CTR(mnemonicKey, mnemonicIv);
    const mnemonicCiphertext = getBytes(mnemonicAesCtr.encrypt(entropy));
    const now = /* @__PURE__ */ new Date();
    const timestamp = now.getUTCFullYear() + "-" + zpad(now.getUTCMonth() + 1, 2) + "-" + zpad(now.getUTCDate(), 2) + "T" + zpad(now.getUTCHours(), 2) + "-" + zpad(now.getUTCMinutes(), 2) + "-" + zpad(now.getUTCSeconds(), 2) + ".0Z";
    const gethFilename = "UTC--" + timestamp + "--" + data.address;
    data["x-ethers"] = {
      client,
      gethFilename,
      path,
      locale,
      mnemonicCounter: hexlify(mnemonicIv).substring(2),
      mnemonicCiphertext: hexlify(mnemonicCiphertext).substring(2),
      version: "0.1"
    };
  }
  return JSON.stringify(data);
}
function encryptKeystoreJsonSync(account, password, options) {
  if (options == null) {
    options = {};
  }
  const passwordBytes = getPassword(password);
  const kdf = getEncryptKdfParams(options);
  const key = scryptSync(passwordBytes, kdf.salt, kdf.N, kdf.r, kdf.p, 64);
  return _encryptKeystore(getBytes(key), kdf, account, options);
}
async function encryptKeystoreJson(account, password, options) {
  if (options == null) {
    options = {};
  }
  const passwordBytes = getPassword(password);
  const kdf = getEncryptKdfParams(options);
  const key = await scrypt2(passwordBytes, kdf.salt, kdf.N, kdf.r, kdf.p, 64, options.progressCallback);
  return _encryptKeystore(getBytes(key), kdf, account, options);
}

// node_modules/ethers/lib.esm/wallet/hdwallet.js
var defaultPath2 = "m/44'/60'/0'/0/0";
var MasterSecret = new Uint8Array([66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100]);
var HardenedBit = 2147483648;
var N2 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var Nibbles2 = "0123456789abcdef";
function zpad2(value, length) {
  let result = "";
  while (value) {
    result = Nibbles2[value % 16] + result;
    value = Math.trunc(value / 16);
  }
  while (result.length < length * 2) {
    result = "0" + result;
  }
  return "0x" + result;
}
function encodeBase58Check(_value2) {
  const value = getBytes(_value2);
  const check = dataSlice(sha2562(sha2562(value)), 0, 4);
  const bytes2 = concat([value, check]);
  return encodeBase58(bytes2);
}
var _guard6 = {};
function ser_I(index, chainCode, publicKey, privateKey) {
  const data = new Uint8Array(37);
  if (index & HardenedBit) {
    assert(privateKey != null, "cannot derive child of neutered node", "UNSUPPORTED_OPERATION", {
      operation: "deriveChild"
    });
    data.set(getBytes(privateKey), 1);
  } else {
    data.set(getBytes(publicKey));
  }
  for (let i = 24; i >= 0; i -= 8) {
    data[33 + (i >> 3)] = index >> 24 - i & 255;
  }
  const I = getBytes(computeHmac("sha512", chainCode, data));
  return { IL: I.slice(0, 32), IR: I.slice(32) };
}
function derivePath(node, path) {
  const components = path.split("/");
  assertArgument(components.length > 0 && (components[0] === "m" || node.depth > 0), "invalid path", "path", path);
  if (components[0] === "m") {
    components.shift();
  }
  let result = node;
  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    if (component.match(/^[0-9]+'$/)) {
      const index = parseInt(component.substring(0, component.length - 1));
      assertArgument(index < HardenedBit, "invalid path index", `path[${i}]`, component);
      result = result.deriveChild(HardenedBit + index);
    } else if (component.match(/^[0-9]+$/)) {
      const index = parseInt(component);
      assertArgument(index < HardenedBit, "invalid path index", `path[${i}]`, component);
      result = result.deriveChild(index);
    } else {
      assertArgument(false, "invalid path component", `path[${i}]`, component);
    }
  }
  return result;
}
var _account, account_fn, _fromSeed, fromSeed_fn;
var _HDNodeWallet = class extends BaseWallet {
  /**
   *  @private
   */
  constructor(guard, signingKey, parentFingerprint, chainCode, path, index, depth, mnemonic, provider) {
    super(signingKey, provider);
    __privateAdd(this, _account);
    /**
     *  The compressed public key.
     */
    __publicField(this, "publicKey");
    /**
     *  The fingerprint.
     *
     *  A fingerprint allows quick qay to detect parent and child nodes,
     *  but developers should be prepared to deal with collisions as it
     *  is only 4 bytes.
     */
    __publicField(this, "fingerprint");
    /**
     *  The parent fingerprint.
     */
    __publicField(this, "parentFingerprint");
    /**
     *  The mnemonic used to create this HD Node, if available.
     *
     *  Sources such as extended keys do not encode the mnemonic, in
     *  which case this will be ``null``.
     */
    __publicField(this, "mnemonic");
    /**
     *  The chaincode, which is effectively a public key used
     *  to derive children.
     */
    __publicField(this, "chainCode");
    /**
     *  The derivation path of this wallet.
     *
     *  Since extended keys do not provider full path details, this
     *  may be ``null``, if instantiated from a source that does not
     *  enocde it.
     */
    __publicField(this, "path");
    /**
     *  The child index of this wallet. Values over ``2 *\* 31`` indicate
     *  the node is hardened.
     */
    __publicField(this, "index");
    /**
     *  The depth of this wallet, which is the number of components
     *  in its path.
     */
    __publicField(this, "depth");
    assertPrivate(guard, _guard6, "HDNodeWallet");
    defineProperties(this, { publicKey: signingKey.compressedPublicKey });
    const fingerprint = dataSlice(ripemd1602(sha2562(this.publicKey)), 0, 4);
    defineProperties(this, {
      parentFingerprint,
      fingerprint,
      chainCode,
      path,
      index,
      depth
    });
    defineProperties(this, { mnemonic });
  }
  connect(provider) {
    return new _HDNodeWallet(_guard6, this.signingKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.mnemonic, provider);
  }
  /**
   *  Resolves to a [JSON Keystore Wallet](json-wallets) encrypted with
   *  %%password%%.
   *
   *  If %%progressCallback%% is specified, it will receive periodic
   *  updates as the encryption process progreses.
   */
  async encrypt(password, progressCallback) {
    return await encryptKeystoreJson(__privateMethod(this, _account, account_fn).call(this), password, { progressCallback });
  }
  /**
   *  Returns a [JSON Keystore Wallet](json-wallets) encryped with
   *  %%password%%.
   *
   *  It is preferred to use the [async version](encrypt) instead,
   *  which allows a [[ProgressCallback]] to keep the user informed.
   *
   *  This method will block the event loop (freezing all UI) until
   *  it is complete, which may be a non-trivial duration.
   */
  encryptSync(password) {
    return encryptKeystoreJsonSync(__privateMethod(this, _account, account_fn).call(this), password);
  }
  /**
   *  The extended key.
   *
   *  This key will begin with the prefix ``xpriv`` and can be used to
   *  reconstruct this HD Node to derive its children.
   */
  get extendedKey() {
    assert(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", { operation: "extendedKey" });
    return encodeBase58Check(concat([
      "0x0488ADE4",
      zpad2(this.depth, 1),
      this.parentFingerprint,
      zpad2(this.index, 4),
      this.chainCode,
      concat(["0x00", this.privateKey])
    ]));
  }
  /**
   *  Returns true if this wallet has a path, providing a Type Guard
   *  that the path is non-null.
   */
  hasPath() {
    return this.path != null;
  }
  /**
   *  Returns a neutered HD Node, which removes the private details
   *  of an HD Node.
   *
   *  A neutered node has no private key, but can be used to derive
   *  child addresses and other public data about the HD Node.
   */
  neuter() {
    return new HDNodeVoidWallet(_guard6, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, this.provider);
  }
  /**
   *  Return the child for %%index%%.
   */
  deriveChild(_index) {
    const index = getNumber(_index, "index");
    assertArgument(index <= 4294967295, "invalid index", "index", index);
    let path = this.path;
    if (path) {
      path += "/" + (index & ~HardenedBit);
      if (index & HardenedBit) {
        path += "'";
      }
    }
    const { IR, IL } = ser_I(index, this.chainCode, this.publicKey, this.privateKey);
    const ki = new SigningKey(toBeHex((toBigInt(IL) + BigInt(this.privateKey)) % N2, 32));
    return new _HDNodeWallet(_guard6, ki, this.fingerprint, hexlify(IR), path, index, this.depth + 1, this.mnemonic, this.provider);
  }
  /**
   *  Return the HDNode for %%path%% from this node.
   */
  derivePath(path) {
    return derivePath(this, path);
  }
  /**
   *  Creates a new HD Node from %%extendedKey%%.
   *
   *  If the %%extendedKey%% will either have a prefix or ``xpub`` or
   *  ``xpriv``, returning a neutered HD Node ([[HDNodeVoidWallet]])
   *  or full HD Node ([[HDNodeWallet) respectively.
   */
  static fromExtendedKey(extendedKey) {
    const bytes2 = toBeArray(decodeBase58(extendedKey));
    assertArgument(bytes2.length === 82 || encodeBase58Check(bytes2.slice(0, 78)) === extendedKey, "invalid extended key", "extendedKey", "[ REDACTED ]");
    const depth = bytes2[4];
    const parentFingerprint = hexlify(bytes2.slice(5, 9));
    const index = parseInt(hexlify(bytes2.slice(9, 13)).substring(2), 16);
    const chainCode = hexlify(bytes2.slice(13, 45));
    const key = bytes2.slice(45, 78);
    switch (hexlify(bytes2.slice(0, 4))) {
      case "0x0488b21e":
      case "0x043587cf": {
        const publicKey = hexlify(key);
        return new HDNodeVoidWallet(_guard6, computeAddress(publicKey), publicKey, parentFingerprint, chainCode, null, index, depth, null);
      }
      case "0x0488ade4":
      case "0x04358394 ":
        if (key[0] !== 0) {
          break;
        }
        return new _HDNodeWallet(_guard6, new SigningKey(key.slice(1)), parentFingerprint, chainCode, null, index, depth, null, null);
    }
    assertArgument(false, "invalid extended key prefix", "extendedKey", "[ REDACTED ]");
  }
  /**
   *  Creates a new random HDNode.
   */
  static createRandom(password, path, wordlist2) {
    var _a2;
    if (password == null) {
      password = "";
    }
    if (path == null) {
      path = defaultPath2;
    }
    if (wordlist2 == null) {
      wordlist2 = LangEn.wordlist();
    }
    const mnemonic = Mnemonic.fromEntropy(randomBytes2(16), password, wordlist2);
    return __privateMethod(_a2 = _HDNodeWallet, _fromSeed, fromSeed_fn).call(_a2, mnemonic.computeSeed(), mnemonic).derivePath(path);
  }
  /**
   *  Create an HD Node from %%mnemonic%%.
   */
  static fromMnemonic(mnemonic, path) {
    var _a2;
    if (!path) {
      path = defaultPath2;
    }
    return __privateMethod(_a2 = _HDNodeWallet, _fromSeed, fromSeed_fn).call(_a2, mnemonic.computeSeed(), mnemonic).derivePath(path);
  }
  /**
   *  Creates an HD Node from a mnemonic %%phrase%%.
   */
  static fromPhrase(phrase, password, path, wordlist2) {
    var _a2;
    if (password == null) {
      password = "";
    }
    if (path == null) {
      path = defaultPath2;
    }
    if (wordlist2 == null) {
      wordlist2 = LangEn.wordlist();
    }
    const mnemonic = Mnemonic.fromPhrase(phrase, password, wordlist2);
    return __privateMethod(_a2 = _HDNodeWallet, _fromSeed, fromSeed_fn).call(_a2, mnemonic.computeSeed(), mnemonic).derivePath(path);
  }
  /**
   *  Creates an HD Node from a %%seed%%.
   */
  static fromSeed(seed) {
    var _a2;
    return __privateMethod(_a2 = _HDNodeWallet, _fromSeed, fromSeed_fn).call(_a2, seed, null);
  }
};
var HDNodeWallet = _HDNodeWallet;
_account = new WeakSet();
account_fn = function() {
  const account = { address: this.address, privateKey: this.privateKey };
  const m = this.mnemonic;
  if (this.path && m && m.wordlist.locale === "en" && m.password === "") {
    account.mnemonic = {
      path: this.path,
      locale: "en",
      entropy: m.entropy
    };
  }
  return account;
};
_fromSeed = new WeakSet();
fromSeed_fn = function(_seed, mnemonic) {
  assertArgument(isBytesLike(_seed), "invalid seed", "seed", "[REDACTED]");
  const seed = getBytes(_seed, "seed");
  assertArgument(seed.length >= 16 && seed.length <= 64, "invalid seed", "seed", "[REDACTED]");
  const I = getBytes(computeHmac("sha512", MasterSecret, seed));
  const signingKey = new SigningKey(hexlify(I.slice(0, 32)));
  return new _HDNodeWallet(_guard6, signingKey, "0x00000000", hexlify(I.slice(32)), "m", 0, 0, mnemonic, null);
};
__privateAdd(HDNodeWallet, _fromSeed);
var HDNodeVoidWallet = class extends VoidSigner {
  /**
   *  @private
   */
  constructor(guard, address, publicKey, parentFingerprint, chainCode, path, index, depth, provider) {
    super(address, provider);
    /**
     *  The compressed public key.
     */
    __publicField(this, "publicKey");
    /**
     *  The fingerprint.
     *
     *  A fingerprint allows quick qay to detect parent and child nodes,
     *  but developers should be prepared to deal with collisions as it
     *  is only 4 bytes.
     */
    __publicField(this, "fingerprint");
    /**
     *  The parent node fingerprint.
     */
    __publicField(this, "parentFingerprint");
    /**
     *  The chaincode, which is effectively a public key used
     *  to derive children.
     */
    __publicField(this, "chainCode");
    /**
     *  The derivation path of this wallet.
     *
     *  Since extended keys do not provider full path details, this
     *  may be ``null``, if instantiated from a source that does not
     *  enocde it.
     */
    __publicField(this, "path");
    /**
     *  The child index of this wallet. Values over ``2 *\* 31`` indicate
     *  the node is hardened.
     */
    __publicField(this, "index");
    /**
     *  The depth of this wallet, which is the number of components
     *  in its path.
     */
    __publicField(this, "depth");
    assertPrivate(guard, _guard6, "HDNodeVoidWallet");
    defineProperties(this, { publicKey });
    const fingerprint = dataSlice(ripemd1602(sha2562(publicKey)), 0, 4);
    defineProperties(this, {
      publicKey,
      fingerprint,
      parentFingerprint,
      chainCode,
      path,
      index,
      depth
    });
  }
  connect(provider) {
    return new HDNodeVoidWallet(_guard6, this.address, this.publicKey, this.parentFingerprint, this.chainCode, this.path, this.index, this.depth, provider);
  }
  /**
   *  The extended key.
   *
   *  This key will begin with the prefix ``xpub`` and can be used to
   *  reconstruct this neutered key to derive its children addresses.
   */
  get extendedKey() {
    assert(this.depth < 256, "Depth too deep", "UNSUPPORTED_OPERATION", { operation: "extendedKey" });
    return encodeBase58Check(concat([
      "0x0488B21E",
      zpad2(this.depth, 1),
      this.parentFingerprint,
      zpad2(this.index, 4),
      this.chainCode,
      this.publicKey
    ]));
  }
  /**
   *  Returns true if this wallet has a path, providing a Type Guard
   *  that the path is non-null.
   */
  hasPath() {
    return this.path != null;
  }
  /**
   *  Return the child for %%index%%.
   */
  deriveChild(_index) {
    const index = getNumber(_index, "index");
    assertArgument(index <= 4294967295, "invalid index", "index", index);
    let path = this.path;
    if (path) {
      path += "/" + (index & ~HardenedBit);
      if (index & HardenedBit) {
        path += "'";
      }
    }
    const { IR, IL } = ser_I(index, this.chainCode, this.publicKey, null);
    const Ki = SigningKey.addPoints(IL, this.publicKey, true);
    const address = computeAddress(Ki);
    return new HDNodeVoidWallet(_guard6, address, Ki, this.fingerprint, hexlify(IR), path, index, this.depth + 1, this.provider);
  }
  /**
   *  Return the signer for %%path%% from this node.
   */
  derivePath(path) {
    return derivePath(this, path);
  }
};
function getAccountPath(_index) {
  const index = getNumber(_index, "index");
  assertArgument(index >= 0 && index < HardenedBit, "invalid account index", "index", index);
  return `m/44'/60'/${index}'/0/0`;
}
function getIndexedAccountPath(_index) {
  const index = getNumber(_index, "index");
  assertArgument(index >= 0 && index < HardenedBit, "invalid account index", "index", index);
  return `m/44'/60'/0'/0/${index}`;
}

// node_modules/ethers/lib.esm/wallet/json-crowdsale.js
function isCrowdsaleJson(json) {
  try {
    const data = JSON.parse(json);
    if (data.encseed) {
      return true;
    }
  } catch (error) {
  }
  return false;
}
function decryptCrowdsaleJson(json, _password) {
  const data = JSON.parse(json);
  const password = getPassword(_password);
  const address = getAddress(spelunk(data, "ethaddr:string!"));
  const encseed = looseArrayify(spelunk(data, "encseed:string!"));
  assertArgument(encseed && encseed.length % 16 === 0, "invalid encseed", "json", json);
  const key = getBytes(pbkdf22(password, password, 2e3, 32, "sha256")).slice(0, 16);
  const iv = encseed.slice(0, 16);
  const encryptedSeed = encseed.slice(16);
  const aesCbc = new CBC(key, iv);
  const seed = pkcs7Strip(getBytes(aesCbc.decrypt(encryptedSeed)));
  let seedHex = "";
  for (let i = 0; i < seed.length; i++) {
    seedHex += String.fromCharCode(seed[i]);
  }
  return { address, privateKey: id(seedHex) };
}

// node_modules/ethers/lib.esm/wallet/wallet.js
function stall4(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
var _fromAccount, fromAccount_fn;
var _Wallet = class extends BaseWallet {
  /**
   *  Create a new wallet for the %%privateKey%%, optionally connected
   *  to %%provider%%.
   */
  constructor(key, provider) {
    if (typeof key === "string" && !key.startsWith("0x")) {
      key = "0x" + key;
    }
    let signingKey = typeof key === "string" ? new SigningKey(key) : key;
    super(signingKey, provider);
  }
  connect(provider) {
    return new _Wallet(this.signingKey, provider);
  }
  /**
   *  Resolves to a [JSON Keystore Wallet](json-wallets) encrypted with
   *  %%password%%.
   *
   *  If %%progressCallback%% is specified, it will receive periodic
   *  updates as the encryption process progreses.
   */
  async encrypt(password, progressCallback) {
    const account = { address: this.address, privateKey: this.privateKey };
    return await encryptKeystoreJson(account, password, { progressCallback });
  }
  /**
   *  Returns a [JSON Keystore Wallet](json-wallets) encryped with
   *  %%password%%.
   *
   *  It is preferred to use the [async version](encrypt) instead,
   *  which allows a [[ProgressCallback]] to keep the user informed.
   *
   *  This method will block the event loop (freezing all UI) until
   *  it is complete, which may be a non-trivial duration.
   */
  encryptSync(password) {
    const account = { address: this.address, privateKey: this.privateKey };
    return encryptKeystoreJsonSync(account, password);
  }
  /**
   *  Creates (asynchronously) a **Wallet** by decrypting the %%json%%
   *  with %%password%%.
   *
   *  If %%progress%% is provided, it is called periodically during
   *  decryption so that any UI can be updated.
   */
  static async fromEncryptedJson(json, password, progress) {
    var _a2;
    let account = null;
    if (isKeystoreJson(json)) {
      account = await decryptKeystoreJson(json, password, progress);
    } else if (isCrowdsaleJson(json)) {
      if (progress) {
        progress(0);
        await stall4(0);
      }
      account = decryptCrowdsaleJson(json, password);
      if (progress) {
        progress(1);
        await stall4(0);
      }
    }
    return __privateMethod(_a2 = _Wallet, _fromAccount, fromAccount_fn).call(_a2, account);
  }
  /**
   *  Creates a **Wallet** by decrypting the %%json%% with %%password%%.
   *
   *  The [[fromEncryptedJson]] method is preferred, as this method
   *  will lock up and freeze the UI during decryption, which may take
   *  some time.
   */
  static fromEncryptedJsonSync(json, password) {
    var _a2;
    let account = null;
    if (isKeystoreJson(json)) {
      account = decryptKeystoreJsonSync(json, password);
    } else if (isCrowdsaleJson(json)) {
      account = decryptCrowdsaleJson(json, password);
    } else {
      assertArgument(false, "invalid JSON wallet", "json", "[ REDACTED ]");
    }
    return __privateMethod(_a2 = _Wallet, _fromAccount, fromAccount_fn).call(_a2, account);
  }
  /**
   *  Creates a new random [[HDNodeWallet]] using the avavilable
   *  [cryptographic random source](randomBytes).
   *
   *  If there is no crytographic random source, this will throw.
   */
  static createRandom(provider) {
    const wallet = HDNodeWallet.createRandom();
    if (provider) {
      return wallet.connect(provider);
    }
    return wallet;
  }
  /**
   *  Creates a [[HDNodeWallet]] for %%phrase%%.
   */
  static fromPhrase(phrase, provider) {
    const wallet = HDNodeWallet.fromPhrase(phrase);
    if (provider) {
      return wallet.connect(provider);
    }
    return wallet;
  }
};
var Wallet = _Wallet;
_fromAccount = new WeakSet();
fromAccount_fn = function(account) {
  assertArgument(account, "invalid JSON wallet", "json", "[ REDACTED ]");
  if ("mnemonic" in account && account.mnemonic && account.mnemonic.locale === "en") {
    const mnemonic = Mnemonic.fromEntropy(account.mnemonic.entropy);
    const wallet2 = HDNodeWallet.fromMnemonic(mnemonic, account.mnemonic.path);
    if (wallet2.address === account.address && wallet2.privateKey === account.privateKey) {
      return wallet2;
    }
    console.log("WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key");
  }
  const wallet = new _Wallet(account.privateKey);
  assertArgument(wallet.address === account.address, "address/privateKey mismatch", "json", "[ REDACTED ]");
  return wallet;
};
__privateAdd(Wallet, _fromAccount);

// node_modules/ethers/lib.esm/wordlists/bit-reader.js
var Base64 = ")!@#$%^&*(ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
function decodeBits(width, data) {
  const maxValue2 = (1 << width) - 1;
  const result = [];
  let accum = 0, bits = 0, flood = 0;
  for (let i = 0; i < data.length; i++) {
    accum = accum << 6 | Base64.indexOf(data[i]);
    bits += 6;
    while (bits >= width) {
      const value = accum >> bits - width;
      accum &= (1 << bits - width) - 1;
      bits -= width;
      if (value === 0) {
        flood += maxValue2;
      } else {
        result.push(value + flood);
        flood = 0;
      }
    }
  }
  return result;
}

// node_modules/ethers/lib.esm/wordlists/decode-owla.js
function decodeOwlA(data, accents) {
  let words2 = decodeOwl(data).join(",");
  accents.split(/,/g).forEach((accent) => {
    const match = accent.match(/^([a-z]*)([0-9]+)([0-9])(.*)$/);
    assertArgument(match !== null, "internal error parsing accents", "accents", accents);
    let posOffset = 0;
    const positions = decodeBits(parseInt(match[3]), match[4]);
    const charCode = parseInt(match[2]);
    const regex = new RegExp(`([${match[1]}])`, "g");
    words2 = words2.replace(regex, (all, letter) => {
      const rem = --positions[posOffset];
      if (rem === 0) {
        letter = String.fromCharCode(letter.charCodeAt(0), charCode);
        posOffset++;
      }
      return letter;
    });
  });
  return words2.split(",");
}

// node_modules/ethers/lib.esm/wordlists/wordlist-owla.js
var _accent;
var WordlistOwlA = class extends WordlistOwl {
  /**
   *  Creates a new Wordlist for %%locale%% using the OWLA %%data%%
   *  and %%accent%% data and validated against the %%checksum%%.
   */
  constructor(locale, data, accent, checksum2) {
    super(locale, data, checksum2);
    __privateAdd(this, _accent, void 0);
    __privateSet(this, _accent, accent);
  }
  /**
   *  The OWLA-encoded accent data.
   */
  get _accent() {
    return __privateGet(this, _accent);
  }
  /**
   *  Decode all the words for the wordlist.
   */
  _decodeWords() {
    return decodeOwlA(this._data, this._accent);
  }
};
_accent = new WeakMap();

// node_modules/ethers/lib.esm/wordlists/wordlists-browser.js
var wordlists = {
  en: LangEn.wordlist()
};
export {
  AbiCoder,
  AbstractProvider,
  AbstractSigner,
  AlchemyProvider,
  AnkrProvider,
  BaseContract,
  BaseWallet,
  Block,
  BrowserProvider,
  CloudflareProvider,
  ConstructorFragment,
  Contract,
  ContractEventPayload,
  ContractFactory,
  ContractTransactionReceipt,
  ContractTransactionResponse,
  ContractUnknownEventPayload,
  EnsPlugin,
  EnsResolver,
  ErrorDescription,
  ErrorFragment,
  EtherSymbol,
  EtherscanPlugin,
  EtherscanProvider,
  EventFragment,
  EventLog,
  EventPayload,
  FallbackFragment,
  FallbackProvider,
  FeeData,
  FeeDataNetworkPlugin,
  FetchCancelSignal,
  FetchRequest,
  FetchResponse,
  FixedNumber,
  Fragment,
  FunctionFragment,
  GasCostPlugin,
  HDNodeVoidWallet,
  HDNodeWallet,
  Indexed,
  InfuraProvider,
  InfuraWebSocketProvider,
  Interface,
  IpcSocketProvider,
  JsonRpcApiProvider,
  JsonRpcProvider,
  JsonRpcSigner,
  LangEn,
  Log,
  LogDescription,
  MaxInt256,
  MaxUint256,
  MessagePrefix,
  MinInt256,
  Mnemonic,
  MulticoinProviderPlugin,
  N,
  NamedFragment,
  Network,
  NetworkPlugin,
  NonceManager,
  ParamType,
  PocketProvider,
  QuickNodeProvider,
  Result,
  Signature2 as Signature,
  SigningKey,
  SocketBlockSubscriber,
  SocketEventSubscriber,
  SocketPendingSubscriber,
  SocketProvider,
  SocketSubscriber,
  StructFragment,
  Transaction,
  TransactionDescription,
  TransactionReceipt,
  TransactionResponse,
  Typed,
  TypedDataEncoder,
  UnmanagedSubscriber,
  Utf8ErrorFuncs,
  VoidSigner,
  Wallet,
  WebSocketProvider,
  WeiPerEther,
  Wordlist,
  WordlistOwl,
  WordlistOwlA,
  ZeroAddress,
  ZeroHash,
  accessListify,
  assert,
  assertArgument,
  assertArgumentCount,
  assertNormalize,
  assertPrivate,
  checkResultErrors,
  computeAddress,
  computeHmac,
  concat,
  copyRequest,
  dataLength,
  dataSlice,
  decodeBase58,
  decodeBase64,
  decodeBytes32String,
  decodeRlp,
  decryptCrowdsaleJson,
  decryptKeystoreJson,
  decryptKeystoreJsonSync,
  defaultPath2 as defaultPath,
  defineProperties,
  dnsEncode,
  encodeBase58,
  encodeBase64,
  encodeBytes32String,
  encodeRlp,
  encryptKeystoreJson,
  encryptKeystoreJsonSync,
  ensNormalize,
  ethers_exports as ethers,
  formatEther,
  formatUnits,
  fromTwos,
  getAccountPath,
  getAddress,
  getBigInt,
  getBytes,
  getBytesCopy,
  getCreate2Address,
  getCreateAddress,
  getDefaultProvider,
  getIcapAddress,
  getIndexedAccountPath,
  getNumber,
  getUint,
  hashMessage,
  hexlify,
  id,
  isAddress,
  isAddressable,
  isBytesLike,
  isCallException,
  isCrowdsaleJson,
  isError,
  isHexString,
  isKeystoreJson,
  isValidName,
  keccak256,
  lock,
  makeError,
  mask,
  namehash,
  parseEther,
  parseUnits,
  pbkdf22 as pbkdf2,
  randomBytes2 as randomBytes,
  recoverAddress,
  resolveAddress,
  resolveProperties,
  ripemd1602 as ripemd160,
  scrypt2 as scrypt,
  scryptSync,
  sha2562 as sha256,
  sha5122 as sha512,
  showThrottleMessage,
  solidityPacked,
  solidityPackedKeccak256,
  solidityPackedSha256,
  stripZerosLeft,
  toBeArray,
  toBeHex,
  toBigInt,
  toNumber,
  toQuantity,
  toTwos,
  toUtf8Bytes,
  toUtf8CodePoints,
  toUtf8String,
  uuidV4,
  verifyMessage,
  verifyTypedData,
  version,
  wordlists,
  zeroPadBytes,
  zeroPadValue
};
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/secp256k1/lib/esm/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

aes-js/lib.esm/aes.js:
  (*! MIT License. Copyright 2015-2022 Richard Moore <me@ricmoo.com>. See LICENSE.txt. *)
*/
//# sourceMappingURL=ethers.js.map
