(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"mL/g":function(e,t,r){"use strict";r.d(t,"j",(function(){return s})),r.d(t,"k",(function(){return c})),r.d(t,"l",(function(){return u})),r.d(t,"m",(function(){return v})),r.d(t,"n",(function(){return m})),r.d(t,"o",(function(){return p})),r.d(t,"p",(function(){return l})),r.d(t,"q",(function(){return b})),r.d(t,"r",(function(){return h})),r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return x})),r.d(t,"d",(function(){return S})),r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return w})),r.d(t,"g",(function(){return M})),r.d(t,"h",(function(){return T})),r.d(t,"i",(function(){return I}));var o=r("dyuC"),a=r("Enk7"),n=r("EI00"),i=r("7hq1"),d=r("elGS"),s=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p;return Object(o.d)(this,(function(l){switch(l.label){case 0:if(r=Object(o.a)(Object(o.a)({"Content-Type":""},F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),i="/{Bucket}/{Key+}",void 0===e.Key)throw new Error("No value provided for input HTTP label: Key.");if((d=e.Key).length<=0)throw new Error("Empty value provided for input HTTP label: Key.");if(i=i.replace("{Key+}",d.split("/").map((function(e){return Object(n.e)(e)})).join("/")),void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");return i=i.replace("{Bucket}",Object(n.e)(d)),s=Object(o.a)({"x-id":"AbortMultipartUpload"},void 0!==e.UploadId&&{uploadId:e.UploadId}),[4,t.endpoint()];case 1:return c=l.sent(),u=c.hostname,v=c.protocol,m=void 0===v?"https":v,p=c.port,[2,new a.a({protocol:m,hostname:u,port:p,method:"DELETE",headers:r,path:i,query:s,body:undefined})]}}))}))},c=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p,l,b;return Object(o.d)(this,(function(h){switch(h.label){case 0:if(r=Object(o.a)(Object(o.a)({"Content-Type":"application/xml"},F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),i="/{Bucket}/{Key+}",void 0===e.Key)throw new Error("No value provided for input HTTP label: Key.");if((d=e.Key).length<=0)throw new Error("Empty value provided for input HTTP label: Key.");if(i=i.replace("{Key+}",d.split("/").map((function(e){return Object(n.e)(e)})).join("/")),void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");return i=i.replace("{Bucket}",Object(n.e)(d)),s=Object(o.a)({},void 0!==e.UploadId&&{uploadId:e.UploadId}),void 0!==e.MultipartUpload&&(u=q(e.MultipartUpload,t),c='<?xml version="1.0" encoding="UTF-8"?>',u.addAttribute("xmlns","http://s3.amazonaws.com/doc/2006-03-01/"),c+=u.toString()),[4,t.endpoint()];case 1:return v=h.sent(),m=v.hostname,p=v.protocol,l=void 0===p?"https":p,b=v.port,[2,new a.a({protocol:l,hostname:m,port:b,method:"POST",headers:r,path:i,query:s,body:c})]}}))}))},u=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p;return Object(o.d)(this,(function(l){switch(l.label){case 0:if(r=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({"Content-Type":""},F(e.GrantFullControl)&&{"x-amz-grant-full-control":e.GrantFullControl}),F(e.SSECustomerKeyMD5)&&{"x-amz-server-side-encryption-customer-key-MD5":e.SSECustomerKeyMD5}),F(e.SSECustomerAlgorithm)&&{"x-amz-server-side-encryption-customer-algorithm":e.SSECustomerAlgorithm}),F(e.SSEKMSKeyId)&&{"x-amz-server-side-encryption-aws-kms-key-id":e.SSEKMSKeyId}),F(e.ObjectLockLegalHoldStatus)&&{"x-amz-object-lock-legal-hold":e.ObjectLockLegalHoldStatus}),F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),F(e.GrantRead)&&{"x-amz-grant-read":e.GrantRead}),F(e.GrantWriteACP)&&{"x-amz-grant-write-acp":e.GrantWriteACP}),F(e.WebsiteRedirectLocation)&&{"x-amz-website-redirect-location":e.WebsiteRedirectLocation}),F(e.ContentType)&&{"Content-Type":e.ContentType}),F(e.ContentLanguage)&&{"Content-Language":e.ContentLanguage}),F(e.CacheControl)&&{"Cache-Control":e.CacheControl}),F(e.GrantReadACP)&&{"x-amz-grant-read-acp":e.GrantReadACP}),F(e.Tagging)&&{"x-amz-tagging":e.Tagging}),F(e.SSEKMSEncryptionContext)&&{"x-amz-server-side-encryption-context":e.SSEKMSEncryptionContext}),F(e.ACL)&&{"x-amz-acl":e.ACL}),F(e.SSECustomerKey)&&{"x-amz-server-side-encryption-customer-key":e.SSECustomerKey}),F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),F(e.Expires)&&{Expires:Object(n.d)(e.Expires).toString()}),F(e.ObjectLockRetainUntilDate)&&{"x-amz-object-lock-retain-until-date":(e.ObjectLockRetainUntilDate.toISOString().split(".")[0]+"Z").toString()}),F(e.ServerSideEncryption)&&{"x-amz-server-side-encryption":e.ServerSideEncryption}),F(e.ContentDisposition)&&{"Content-Disposition":e.ContentDisposition}),F(e.ObjectLockMode)&&{"x-amz-object-lock-mode":e.ObjectLockMode}),F(e.StorageClass)&&{"x-amz-storage-class":e.StorageClass}),F(e.ContentEncoding)&&{"Content-Encoding":e.ContentEncoding}),void 0!==e.Metadata&&Object.keys(e.Metadata).reduce((function(t,r){return t["x-amz-meta-"+r]=e.Metadata[r],t}),{})),i="/{Bucket}/{Key+}",void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");if(i=i.replace("{Bucket}",Object(n.e)(d)),void 0===e.Key)throw new Error("No value provided for input HTTP label: Key.");if((d=e.Key).length<=0)throw new Error("Empty value provided for input HTTP label: Key.");return i=i.replace("{Key+}",d.split("/").map((function(e){return Object(n.e)(e)})).join("/")),s={uploads:""},[4,t.endpoint()];case 1:return c=l.sent(),u=c.hostname,v=c.protocol,m=void 0===v?"https":v,p=c.port,[2,new a.a({protocol:m,hostname:u,port:p,method:"POST",headers:r,path:i,query:s,body:undefined})]}}))}))},v=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p;return Object(o.d)(this,(function(l){switch(l.label){case 0:if(r=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({"Content-Type":""},F(e.MFA)&&{"x-amz-mfa":e.MFA}),F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),F(e.BypassGovernanceRetention)&&{"x-amz-bypass-governance-retention":e.BypassGovernanceRetention.toString()}),F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),i="/{Bucket}/{Key+}",void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");if(i=i.replace("{Bucket}",Object(n.e)(d)),void 0===e.Key)throw new Error("No value provided for input HTTP label: Key.");if((d=e.Key).length<=0)throw new Error("Empty value provided for input HTTP label: Key.");return i=i.replace("{Key+}",d.split("/").map((function(e){return Object(n.e)(e)})).join("/")),s=Object(o.a)({"x-id":"DeleteObject"},void 0!==e.VersionId&&{versionId:e.VersionId}),[4,t.endpoint()];case 1:return c=l.sent(),u=c.hostname,v=c.protocol,m=void 0===v?"https":v,p=c.port,[2,new a.a({protocol:m,hostname:u,port:p,method:"DELETE",headers:r,path:i,query:s,body:undefined})]}}))}))},m=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p;return Object(o.d)(this,(function(l){switch(l.label){case 0:if(r=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({"Content-Type":""},F(e.SSECustomerKey)&&{"x-amz-server-side-encryption-customer-key":e.SSECustomerKey}),F(e.SSECustomerAlgorithm)&&{"x-amz-server-side-encryption-customer-algorithm":e.SSECustomerAlgorithm}),F(e.SSECustomerKeyMD5)&&{"x-amz-server-side-encryption-customer-key-MD5":e.SSECustomerKeyMD5}),F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),F(e.IfUnmodifiedSince)&&{"If-Unmodified-Since":Object(n.d)(e.IfUnmodifiedSince).toString()}),F(e.IfModifiedSince)&&{"If-Modified-Since":Object(n.d)(e.IfModifiedSince).toString()}),F(e.IfNoneMatch)&&{"If-None-Match":e.IfNoneMatch}),F(e.IfMatch)&&{"If-Match":e.IfMatch}),F(e.Range)&&{Range:e.Range}),i="/{Bucket}/{Key+}",void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");if(i=i.replace("{Bucket}",Object(n.e)(d)),void 0===e.Key)throw new Error("No value provided for input HTTP label: Key.");if((d=e.Key).length<=0)throw new Error("Empty value provided for input HTTP label: Key.");return i=i.replace("{Key+}",d.split("/").map((function(e){return Object(n.e)(e)})).join("/")),s=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({"x-id":"GetObject"},void 0!==e.ResponseContentEncoding&&{"response-content-encoding":e.ResponseContentEncoding}),void 0!==e.ResponseCacheControl&&{"response-cache-control":e.ResponseCacheControl}),void 0!==e.ResponseContentLanguage&&{"response-content-language":e.ResponseContentLanguage}),void 0!==e.ResponseContentDisposition&&{"response-content-disposition":e.ResponseContentDisposition}),void 0!==e.PartNumber&&{partNumber:e.PartNumber.toString()}),void 0!==e.VersionId&&{versionId:e.VersionId}),void 0!==e.ResponseExpires&&{"response-expires":(e.ResponseExpires.toISOString().split(".")[0]+"Z").toString()}),void 0!==e.ResponseContentType&&{"response-content-type":e.ResponseContentType}),[4,t.endpoint()];case 1:return c=l.sent(),u=c.hostname,v=c.protocol,m=void 0===v?"https":v,p=c.port,[2,new a.a({protocol:m,hostname:u,port:p,method:"GET",headers:r,path:i,query:s,body:undefined})]}}))}))},p=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p;return Object(o.d)(this,(function(l){switch(l.label){case 0:if(r=Object(o.a)(Object(o.a)({"Content-Type":""},F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),i="/{Bucket}",void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");return i=i.replace("{Bucket}",Object(n.e)(d)),s=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},void 0!==e.MaxKeys&&{"max-keys":e.MaxKeys.toString()}),void 0!==e.Marker&&{marker:e.Marker}),void 0!==e.Prefix&&{prefix:e.Prefix}),void 0!==e.Delimiter&&{delimiter:e.Delimiter}),void 0!==e.EncodingType&&{"encoding-type":e.EncodingType}),[4,t.endpoint()];case 1:return c=l.sent(),u=c.hostname,v=c.protocol,m=void 0===v?"https":v,p=c.port,[2,new a.a({protocol:m,hostname:u,port:p,method:"GET",headers:r,path:i,query:s,body:undefined})]}}))}))},l=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p;return Object(o.d)(this,(function(l){switch(l.label){case 0:if(r=Object(o.a)(Object(o.a)({"Content-Type":""},F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),i="/{Bucket}/{Key+}",void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");if(i=i.replace("{Bucket}",Object(n.e)(d)),void 0===e.Key)throw new Error("No value provided for input HTTP label: Key.");if((d=e.Key).length<=0)throw new Error("Empty value provided for input HTTP label: Key.");return i=i.replace("{Key+}",d.split("/").map((function(e){return Object(n.e)(e)})).join("/")),s=Object(o.a)(Object(o.a)(Object(o.a)({"x-id":"ListParts"},void 0!==e.UploadId&&{uploadId:e.UploadId}),void 0!==e.MaxParts&&{"max-parts":e.MaxParts.toString()}),void 0!==e.PartNumberMarker&&{"part-number-marker":e.PartNumberMarker.toString()}),[4,t.endpoint()];case 1:return c=l.sent(),u=c.hostname,v=c.protocol,m=void 0===v?"https":v,p=c.port,[2,new a.a({protocol:m,hostname:u,port:p,method:"GET",headers:r,path:i,query:s,body:undefined})]}}))}))},b=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p,l,b;return Object(o.d)(this,(function(h){switch(h.label){case 0:if(r=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({"Content-Type":"application/octet-stream"},F(e.GrantFullControl)&&{"x-amz-grant-full-control":e.GrantFullControl}),F(e.ContentEncoding)&&{"Content-Encoding":e.ContentEncoding}),F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),F(e.GrantReadACP)&&{"x-amz-grant-read-acp":e.GrantReadACP}),F(e.SSECustomerKeyMD5)&&{"x-amz-server-side-encryption-customer-key-MD5":e.SSECustomerKeyMD5}),F(e.CacheControl)&&{"Cache-Control":e.CacheControl}),F(e.WebsiteRedirectLocation)&&{"x-amz-website-redirect-location":e.WebsiteRedirectLocation}),F(e.ObjectLockLegalHoldStatus)&&{"x-amz-object-lock-legal-hold":e.ObjectLockLegalHoldStatus}),F(e.GrantWriteACP)&&{"x-amz-grant-write-acp":e.GrantWriteACP}),F(e.ContentLength)&&{"Content-Length":e.ContentLength.toString()}),F(e.ObjectLockRetainUntilDate)&&{"x-amz-object-lock-retain-until-date":(e.ObjectLockRetainUntilDate.toISOString().split(".")[0]+"Z").toString()}),F(e.SSECustomerAlgorithm)&&{"x-amz-server-side-encryption-customer-algorithm":e.SSECustomerAlgorithm}),F(e.ContentDisposition)&&{"Content-Disposition":e.ContentDisposition}),F(e.SSECustomerKey)&&{"x-amz-server-side-encryption-customer-key":e.SSECustomerKey}),F(e.SSEKMSEncryptionContext)&&{"x-amz-server-side-encryption-context":e.SSEKMSEncryptionContext}),F(e.Tagging)&&{"x-amz-tagging":e.Tagging}),F(e.Expires)&&{Expires:Object(n.d)(e.Expires).toString()}),F(e.StorageClass)&&{"x-amz-storage-class":e.StorageClass}),F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),F(e.ContentMD5)&&{"Content-MD5":e.ContentMD5}),F(e.ServerSideEncryption)&&{"x-amz-server-side-encryption":e.ServerSideEncryption}),F(e.ObjectLockMode)&&{"x-amz-object-lock-mode":e.ObjectLockMode}),F(e.SSEKMSKeyId)&&{"x-amz-server-side-encryption-aws-kms-key-id":e.SSEKMSKeyId}),F(e.ContentLanguage)&&{"Content-Language":e.ContentLanguage}),F(e.GrantRead)&&{"x-amz-grant-read":e.GrantRead}),F(e.ACL)&&{"x-amz-acl":e.ACL}),F(e.ContentType)&&{"Content-Type":e.ContentType}),void 0!==e.Metadata&&Object.keys(e.Metadata).reduce((function(t,r){return t["x-amz-meta-"+r]=e.Metadata[r],t}),{})),i="/{Bucket}/{Key+}",void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");if(i=i.replace("{Bucket}",Object(n.e)(d)),void 0===e.Key)throw new Error("No value provided for input HTTP label: Key.");if((d=e.Key).length<=0)throw new Error("Empty value provided for input HTTP label: Key.");return i=i.replace("{Key+}",d.split("/").map((function(e){return Object(n.e)(e)})).join("/")),s={"x-id":"PutObject"},void 0!==e.Body&&(u=e.Body,c=u),[4,t.endpoint()];case 1:return v=h.sent(),m=v.hostname,p=v.protocol,l=void 0===p?"https":p,b=v.port,[2,new a.a({protocol:l,hostname:m,port:b,method:"PUT",headers:r,path:i,query:s,body:c})]}}))}))},h=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,i,d,s,c,u,v,m,p,l,b;return Object(o.d)(this,(function(h){switch(h.label){case 0:if(r=Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({"Content-Type":"application/octet-stream"},F(e.ExpectedBucketOwner)&&{"x-amz-expected-bucket-owner":e.ExpectedBucketOwner}),F(e.RequestPayer)&&{"x-amz-request-payer":e.RequestPayer}),F(e.ContentLength)&&{"Content-Length":e.ContentLength.toString()}),F(e.SSECustomerKey)&&{"x-amz-server-side-encryption-customer-key":e.SSECustomerKey}),F(e.SSECustomerAlgorithm)&&{"x-amz-server-side-encryption-customer-algorithm":e.SSECustomerAlgorithm}),F(e.SSECustomerKeyMD5)&&{"x-amz-server-side-encryption-customer-key-MD5":e.SSECustomerKeyMD5}),F(e.ContentMD5)&&{"Content-MD5":e.ContentMD5}),i="/{Bucket}/{Key+}",void 0===e.Bucket)throw new Error("No value provided for input HTTP label: Bucket.");if((d=e.Bucket).length<=0)throw new Error("Empty value provided for input HTTP label: Bucket.");if(i=i.replace("{Bucket}",Object(n.e)(d)),void 0===e.Key)throw new Error("No value provided for input HTTP label: Key.");if((d=e.Key).length<=0)throw new Error("Empty value provided for input HTTP label: Key.");return i=i.replace("{Key+}",d.split("/").map((function(e){return Object(n.e)(e)})).join("/")),s=Object(o.a)(Object(o.a)({"x-id":"UploadPart"},void 0!==e.PartNumber&&{partNumber:e.PartNumber.toString()}),void 0!==e.UploadId&&{uploadId:e.UploadId}),void 0!==e.Body&&(u=e.Body,c=u),[4,t.endpoint()];case 1:return v=h.sent(),m=v.hostname,p=v.protocol,l=void 0===p?"https":p,b=v.port,[2,new a.a({protocol:l,hostname:m,port:b,method:"PUT",headers:r,path:i,query:s,body:c})]}}))}))},y=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 204!==e.statusCode&&e.statusCode>=300?[2,g(e,t)]:(r={$metadata:V(e),RequestCharged:void 0},void 0!==e.headers["x-amz-request-charged"]&&(r.RequestCharged=e.headers["x-amz-request-charged"]),[4,W(e.body,t)]);case 1:return o.sent(),[2,Promise.resolve(r)]}}))}))},g=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c,u;return Object(o.d)(this,(function(v){switch(v.label){case 0:return a=[Object(o.a)({},e)],u={},[4,_(e.body,t)];case 1:switch(r=o.a.apply(void 0,a.concat([(u.body=v.sent(),u)])),i="UnknownError",i=Z(e,r.body),i){case"NoSuchUpload":case"com.amazonaws.s3#NoSuchUpload":return[3,2]}return[3,4];case 2:return d=[{}],[4,D(r,t)];case 3:return n=o.a.apply(void 0,[o.a.apply(void 0,d.concat([v.sent()])),{name:i,$metadata:V(e)}]),[3,5];case 4:s=r.body,i=s.code||s.Code||i,n=Object(o.a)(Object(o.a)({},s),{name:""+i,message:s.message||s.Message||i,$fault:"client",$metadata:V(e)}),v.label=5;case 5:return c=n.message||n.Message||i,n.message=c,delete n.Message,[2,Promise.reject(Object.assign(new Error(c),n))]}}))}))},f=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,O(e,t)]:(r={$metadata:V(e),Bucket:void 0,ETag:void 0,Expiration:void 0,Key:void 0,Location:void 0,RequestCharged:void 0,SSEKMSKeyId:void 0,ServerSideEncryption:void 0,VersionId:void 0},void 0!==e.headers["x-amz-expiration"]&&(r.Expiration=e.headers["x-amz-expiration"]),void 0!==e.headers["x-amz-server-side-encryption"]&&(r.ServerSideEncryption=e.headers["x-amz-server-side-encryption"]),void 0!==e.headers["x-amz-server-side-encryption-aws-kms-key-id"]&&(r.SSEKMSKeyId=e.headers["x-amz-server-side-encryption-aws-kms-key-id"]),void 0!==e.headers["x-amz-version-id"]&&(r.VersionId=e.headers["x-amz-version-id"]),void 0!==e.headers["x-amz-request-charged"]&&(r.RequestCharged=e.headers["x-amz-request-charged"]),[4,_(e.body,t)]);case 1:return void 0!==(a=o.sent()).Bucket&&(r.Bucket=a.Bucket),void 0!==a.ETag&&(r.ETag=a.ETag),void 0!==a.Key&&(r.Key=a.Key),void 0!==a.Location&&(r.Location=a.Location),[2,Promise.resolve(r)]}}))}))},O=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c;return Object(o.d)(this,(function(u){switch(u.label){case 0:return a=[Object(o.a)({},e)],c={},[4,_(e.body,t)];case 1:return r=o.a.apply(void 0,a.concat([(c.body=u.sent(),c)])),i="UnknownError",i=Z(e,r.body),d=r.body,i=d.code||d.Code||i,n=Object(o.a)(Object(o.a)({},d),{name:""+i,message:d.message||d.Message||i,$fault:"client",$metadata:V(e)}),s=n.message||n.Message||i,n.message=s,delete n.Message,[2,Promise.reject(Object.assign(new Error(s),n))]}}))}))},x=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,j(e,t)]:(r={$metadata:V(e),AbortDate:void 0,AbortRuleId:void 0,Bucket:void 0,Key:void 0,RequestCharged:void 0,SSECustomerAlgorithm:void 0,SSECustomerKeyMD5:void 0,SSEKMSEncryptionContext:void 0,SSEKMSKeyId:void 0,ServerSideEncryption:void 0,UploadId:void 0},void 0!==e.headers["x-amz-server-side-encryption-context"]&&(r.SSEKMSEncryptionContext=e.headers["x-amz-server-side-encryption-context"]),void 0!==e.headers["x-amz-server-side-encryption"]&&(r.ServerSideEncryption=e.headers["x-amz-server-side-encryption"]),void 0!==e.headers["x-amz-request-charged"]&&(r.RequestCharged=e.headers["x-amz-request-charged"]),void 0!==e.headers["x-amz-abort-date"]&&(r.AbortDate=new Date(e.headers["x-amz-abort-date"])),void 0!==e.headers["x-amz-server-side-encryption-customer-algorithm"]&&(r.SSECustomerAlgorithm=e.headers["x-amz-server-side-encryption-customer-algorithm"]),void 0!==e.headers["x-amz-server-side-encryption-aws-kms-key-id"]&&(r.SSEKMSKeyId=e.headers["x-amz-server-side-encryption-aws-kms-key-id"]),void 0!==e.headers["x-amz-abort-rule-id"]&&(r.AbortRuleId=e.headers["x-amz-abort-rule-id"]),void 0!==e.headers["x-amz-server-side-encryption-customer-key-md5"]&&(r.SSECustomerKeyMD5=e.headers["x-amz-server-side-encryption-customer-key-md5"]),[4,_(e.body,t)]);case 1:return void 0!==(a=o.sent()).Bucket&&(r.Bucket=a.Bucket),void 0!==a.Key&&(r.Key=a.Key),void 0!==a.UploadId&&(r.UploadId=a.UploadId),[2,Promise.resolve(r)]}}))}))},j=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c;return Object(o.d)(this,(function(u){switch(u.label){case 0:return a=[Object(o.a)({},e)],c={},[4,_(e.body,t)];case 1:return r=o.a.apply(void 0,a.concat([(c.body=u.sent(),c)])),i="UnknownError",i=Z(e,r.body),d=r.body,i=d.code||d.Code||i,n=Object(o.a)(Object(o.a)({},d),{name:""+i,message:d.message||d.Message||i,$fault:"client",$metadata:V(e)}),s=n.message||n.Message||i,n.message=s,delete n.Message,[2,Promise.reject(Object.assign(new Error(s),n))]}}))}))},S=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 204!==e.statusCode&&e.statusCode>=300?[2,E(e,t)]:(r={$metadata:V(e),DeleteMarker:void 0,RequestCharged:void 0,VersionId:void 0},void 0!==e.headers["x-amz-delete-marker"]&&(r.DeleteMarker="true"===e.headers["x-amz-delete-marker"]),void 0!==e.headers["x-amz-request-charged"]&&(r.RequestCharged=e.headers["x-amz-request-charged"]),void 0!==e.headers["x-amz-version-id"]&&(r.VersionId=e.headers["x-amz-version-id"]),[4,W(e.body,t)]);case 1:return o.sent(),[2,Promise.resolve(r)]}}))}))},E=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c;return Object(o.d)(this,(function(u){switch(u.label){case 0:return a=[Object(o.a)({},e)],c={},[4,_(e.body,t)];case 1:return r=o.a.apply(void 0,a.concat([(c.body=u.sent(),c)])),i="UnknownError",i=Z(e,r.body),d=r.body,i=d.code||d.Code||i,n=Object(o.a)(Object(o.a)({},d),{name:""+i,message:d.message||d.Message||i,$fault:"client",$metadata:V(e)}),s=n.message||n.Message||i,n.message=s,delete n.Message,[2,Promise.reject(Object.assign(new Error(s),n))]}}))}))},C=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a;return Object(o.d)(this,(function(o){return 200!==e.statusCode&&e.statusCode>=300?[2,k(e,t)]:(r={$metadata:V(e),AcceptRanges:void 0,Body:void 0,CacheControl:void 0,ContentDisposition:void 0,ContentEncoding:void 0,ContentLanguage:void 0,ContentLength:void 0,ContentRange:void 0,ContentType:void 0,DeleteMarker:void 0,ETag:void 0,Expiration:void 0,Expires:void 0,LastModified:void 0,Metadata:void 0,MissingMeta:void 0,ObjectLockLegalHoldStatus:void 0,ObjectLockMode:void 0,ObjectLockRetainUntilDate:void 0,PartsCount:void 0,ReplicationStatus:void 0,RequestCharged:void 0,Restore:void 0,SSECustomerAlgorithm:void 0,SSECustomerKeyMD5:void 0,SSEKMSKeyId:void 0,ServerSideEncryption:void 0,StorageClass:void 0,TagCount:void 0,VersionId:void 0,WebsiteRedirectLocation:void 0},void 0!==e.headers["x-amz-object-lock-mode"]&&(r.ObjectLockMode=e.headers["x-amz-object-lock-mode"]),void 0!==e.headers["content-language"]&&(r.ContentLanguage=e.headers["content-language"]),void 0!==e.headers["content-disposition"]&&(r.ContentDisposition=e.headers["content-disposition"]),void 0!==e.headers["cache-control"]&&(r.CacheControl=e.headers["cache-control"]),void 0!==e.headers["content-type"]&&(r.ContentType=e.headers["content-type"]),void 0!==e.headers["content-range"]&&(r.ContentRange=e.headers["content-range"]),void 0!==e.headers["x-amz-server-side-encryption-aws-kms-key-id"]&&(r.SSEKMSKeyId=e.headers["x-amz-server-side-encryption-aws-kms-key-id"]),void 0!==e.headers["content-length"]&&(r.ContentLength=parseInt(e.headers["content-length"],10)),void 0!==e.headers["x-amz-object-lock-retain-until-date"]&&(r.ObjectLockRetainUntilDate=new Date(e.headers["x-amz-object-lock-retain-until-date"])),void 0!==e.headers["x-amz-object-lock-legal-hold"]&&(r.ObjectLockLegalHoldStatus=e.headers["x-amz-object-lock-legal-hold"]),void 0!==e.headers["x-amz-delete-marker"]&&(r.DeleteMarker="true"===e.headers["x-amz-delete-marker"]),void 0!==e.headers["x-amz-storage-class"]&&(r.StorageClass=e.headers["x-amz-storage-class"]),void 0!==e.headers["content-encoding"]&&(r.ContentEncoding=e.headers["content-encoding"]),void 0!==e.headers["x-amz-restore"]&&(r.Restore=e.headers["x-amz-restore"]),void 0!==e.headers["x-amz-website-redirect-location"]&&(r.WebsiteRedirectLocation=e.headers["x-amz-website-redirect-location"]),void 0!==e.headers["x-amz-server-side-encryption"]&&(r.ServerSideEncryption=e.headers["x-amz-server-side-encryption"]),void 0!==e.headers["x-amz-mp-parts-count"]&&(r.PartsCount=parseInt(e.headers["x-amz-mp-parts-count"],10)),void 0!==e.headers["x-amz-server-side-encryption-customer-algorithm"]&&(r.SSECustomerAlgorithm=e.headers["x-amz-server-side-encryption-customer-algorithm"]),void 0!==e.headers["accept-ranges"]&&(r.AcceptRanges=e.headers["accept-ranges"]),void 0!==e.headers["x-amz-version-id"]&&(r.VersionId=e.headers["x-amz-version-id"]),void 0!==e.headers.expires&&(r.Expires=new Date(e.headers.expires)),void 0!==e.headers["x-amz-expiration"]&&(r.Expiration=e.headers["x-amz-expiration"]),void 0!==e.headers["x-amz-missing-meta"]&&(r.MissingMeta=parseInt(e.headers["x-amz-missing-meta"],10)),void 0!==e.headers["x-amz-replication-status"]&&(r.ReplicationStatus=e.headers["x-amz-replication-status"]),void 0!==e.headers["x-amz-tagging-count"]&&(r.TagCount=parseInt(e.headers["x-amz-tagging-count"],10)),void 0!==e.headers["x-amz-server-side-encryption-customer-key-md5"]&&(r.SSECustomerKeyMD5=e.headers["x-amz-server-side-encryption-customer-key-md5"]),void 0!==e.headers["last-modified"]&&(r.LastModified=new Date(e.headers["last-modified"])),void 0!==e.headers.etag&&(r.ETag=e.headers.etag),void 0!==e.headers["x-amz-request-charged"]&&(r.RequestCharged=e.headers["x-amz-request-charged"]),Object.keys(e.headers).forEach((function(t){void 0===r.Metadata&&(r.Metadata={}),t.startsWith("x-amz-meta-")&&(r.Metadata[t.substring(11)]=e.headers[t])})),a=e.body,r.Body=a,[2,Promise.resolve(r)])}))}))},k=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c,u;return Object(o.d)(this,(function(v){switch(v.label){case 0:return a=[Object(o.a)({},e)],u={},[4,_(e.body,t)];case 1:switch(r=o.a.apply(void 0,a.concat([(u.body=v.sent(),u)])),i="UnknownError",i=Z(e,r.body),i){case"NoSuchKey":case"com.amazonaws.s3#NoSuchKey":return[3,2]}return[3,4];case 2:return d=[{}],[4,R(r,t)];case 3:return n=o.a.apply(void 0,[o.a.apply(void 0,d.concat([v.sent()])),{name:i,$metadata:V(e)}]),[3,5];case 4:s=r.body,i=s.code||s.Code||i,n=Object(o.a)(Object(o.a)({},s),{name:""+i,message:s.message||s.Message||i,$fault:"client",$metadata:V(e)}),v.label=5;case 5:return c=n.message||n.Message||i,n.message=c,delete n.Message,[2,Promise.reject(Object.assign(new Error(c),n))]}}))}))},w=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,z(e,t)]:(r={$metadata:V(e),CommonPrefixes:void 0,Contents:void 0,Delimiter:void 0,EncodingType:void 0,IsTruncated:void 0,Marker:void 0,MaxKeys:void 0,Name:void 0,NextMarker:void 0,Prefix:void 0},[4,_(e.body,t)]);case 1:return""===(a=o.sent()).CommonPrefixes&&(r.CommonPrefixes=[]),void 0!==a.CommonPrefixes&&(r.CommonPrefixes=U(Object(n.f)(a.CommonPrefixes),t)),""===a.Contents&&(r.Contents=[]),void 0!==a.Contents&&(r.Contents=H(Object(n.f)(a.Contents),t)),void 0!==a.Delimiter&&(r.Delimiter=a.Delimiter),void 0!==a.EncodingType&&(r.EncodingType=a.EncodingType),void 0!==a.IsTruncated&&(r.IsTruncated="true"==a.IsTruncated),void 0!==a.Marker&&(r.Marker=a.Marker),void 0!==a.MaxKeys&&(r.MaxKeys=parseInt(a.MaxKeys)),void 0!==a.Name&&(r.Name=a.Name),void 0!==a.NextMarker&&(r.NextMarker=a.NextMarker),void 0!==a.Prefix&&(r.Prefix=a.Prefix),[2,Promise.resolve(r)]}}))}))},z=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c,u;return Object(o.d)(this,(function(v){switch(v.label){case 0:return a=[Object(o.a)({},e)],u={},[4,_(e.body,t)];case 1:switch(r=o.a.apply(void 0,a.concat([(u.body=v.sent(),u)])),i="UnknownError",i=Z(e,r.body),i){case"NoSuchBucket":case"com.amazonaws.s3#NoSuchBucket":return[3,2]}return[3,4];case 2:return d=[{}],[4,N(r,t)];case 3:return n=o.a.apply(void 0,[o.a.apply(void 0,d.concat([v.sent()])),{name:i,$metadata:V(e)}]),[3,5];case 4:s=r.body,i=s.code||s.Code||i,n=Object(o.a)(Object(o.a)({},s),{name:""+i,message:s.message||s.Message||i,$fault:"client",$metadata:V(e)}),v.label=5;case 5:return c=n.message||n.Message||i,n.message=c,delete n.Message,[2,Promise.reject(Object.assign(new Error(c),n))]}}))}))},M=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,P(e,t)]:(r={$metadata:V(e),AbortDate:void 0,AbortRuleId:void 0,Bucket:void 0,Initiator:void 0,IsTruncated:void 0,Key:void 0,MaxParts:void 0,NextPartNumberMarker:void 0,Owner:void 0,PartNumberMarker:void 0,Parts:void 0,RequestCharged:void 0,StorageClass:void 0,UploadId:void 0},void 0!==e.headers["x-amz-abort-rule-id"]&&(r.AbortRuleId=e.headers["x-amz-abort-rule-id"]),void 0!==e.headers["x-amz-request-charged"]&&(r.RequestCharged=e.headers["x-amz-request-charged"]),void 0!==e.headers["x-amz-abort-date"]&&(r.AbortDate=new Date(e.headers["x-amz-abort-date"])),[4,_(e.body,t)]);case 1:return void 0!==(a=o.sent()).Bucket&&(r.Bucket=a.Bucket),void 0!==a.Initiator&&(r.Initiator=A(a.Initiator,t)),void 0!==a.IsTruncated&&(r.IsTruncated="true"==a.IsTruncated),void 0!==a.Key&&(r.Key=a.Key),void 0!==a.MaxParts&&(r.MaxParts=parseInt(a.MaxParts)),void 0!==a.NextPartNumberMarker&&(r.NextPartNumberMarker=parseInt(a.NextPartNumberMarker)),void 0!==a.Owner&&(r.Owner=$(a.Owner,t)),void 0!==a.PartNumberMarker&&(r.PartNumberMarker=parseInt(a.PartNumberMarker)),""===a.Part&&(r.Parts=[]),void 0!==a.Part&&(r.Parts=G(Object(n.f)(a.Part),t)),void 0!==a.StorageClass&&(r.StorageClass=a.StorageClass),void 0!==a.UploadId&&(r.UploadId=a.UploadId),[2,Promise.resolve(r)]}}))}))},P=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c;return Object(o.d)(this,(function(u){switch(u.label){case 0:return a=[Object(o.a)({},e)],c={},[4,_(e.body,t)];case 1:return r=o.a.apply(void 0,a.concat([(c.body=u.sent(),c)])),i="UnknownError",i=Z(e,r.body),d=r.body,i=d.code||d.Code||i,n=Object(o.a)(Object(o.a)({},d),{name:""+i,message:d.message||d.Message||i,$fault:"client",$metadata:V(e)}),s=n.message||n.Message||i,n.message=s,delete n.Message,[2,Promise.reject(Object.assign(new Error(s),n))]}}))}))},T=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,K(e,t)]:(r={$metadata:V(e),ETag:void 0,Expiration:void 0,RequestCharged:void 0,SSECustomerAlgorithm:void 0,SSECustomerKeyMD5:void 0,SSEKMSEncryptionContext:void 0,SSEKMSKeyId:void 0,ServerSideEncryption:void 0,VersionId:void 0},void 0!==e.headers["x-amz-server-side-encryption-context"]&&(r.SSEKMSEncryptionContext=e.headers["x-amz-server-side-encryption-context"]),void 0!==e.headers["x-amz-expiration"]&&(r.Expiration=e.headers["x-amz-expiration"]),void 0!==e.headers["x-amz-server-side-encryption-customer-key-md5"]&&(r.SSECustomerKeyMD5=e.headers["x-amz-server-side-encryption-customer-key-md5"]),void 0!==e.headers.etag&&(r.ETag=e.headers.etag),void 0!==e.headers["x-amz-server-side-encryption-customer-algorithm"]&&(r.SSECustomerAlgorithm=e.headers["x-amz-server-side-encryption-customer-algorithm"]),void 0!==e.headers["x-amz-version-id"]&&(r.VersionId=e.headers["x-amz-version-id"]),void 0!==e.headers["x-amz-request-charged"]&&(r.RequestCharged=e.headers["x-amz-request-charged"]),void 0!==e.headers["x-amz-server-side-encryption-aws-kms-key-id"]&&(r.SSEKMSKeyId=e.headers["x-amz-server-side-encryption-aws-kms-key-id"]),void 0!==e.headers["x-amz-server-side-encryption"]&&(r.ServerSideEncryption=e.headers["x-amz-server-side-encryption"]),[4,W(e.body,t)]);case 1:return o.sent(),[2,Promise.resolve(r)]}}))}))},K=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c;return Object(o.d)(this,(function(u){switch(u.label){case 0:return a=[Object(o.a)({},e)],c={},[4,_(e.body,t)];case 1:return r=o.a.apply(void 0,a.concat([(c.body=u.sent(),c)])),i="UnknownError",i=Z(e,r.body),d=r.body,i=d.code||d.Code||i,n=Object(o.a)(Object(o.a)({},d),{name:""+i,message:d.message||d.Message||i,$fault:"client",$metadata:V(e)}),s=n.message||n.Message||i,n.message=s,delete n.Message,[2,Promise.reject(Object.assign(new Error(s),n))]}}))}))},I=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,B(e,t)]:(r={$metadata:V(e),ETag:void 0,RequestCharged:void 0,SSECustomerAlgorithm:void 0,SSECustomerKeyMD5:void 0,SSEKMSKeyId:void 0,ServerSideEncryption:void 0},void 0!==e.headers["x-amz-server-side-encryption-customer-key-md5"]&&(r.SSECustomerKeyMD5=e.headers["x-amz-server-side-encryption-customer-key-md5"]),void 0!==e.headers["x-amz-server-side-encryption"]&&(r.ServerSideEncryption=e.headers["x-amz-server-side-encryption"]),void 0!==e.headers["x-amz-server-side-encryption-aws-kms-key-id"]&&(r.SSEKMSKeyId=e.headers["x-amz-server-side-encryption-aws-kms-key-id"]),void 0!==e.headers["x-amz-server-side-encryption-customer-algorithm"]&&(r.SSECustomerAlgorithm=e.headers["x-amz-server-side-encryption-customer-algorithm"]),void 0!==e.headers["x-amz-request-charged"]&&(r.RequestCharged=e.headers["x-amz-request-charged"]),void 0!==e.headers.etag&&(r.ETag=e.headers.etag),[4,W(e.body,t)]);case 1:return o.sent(),[2,Promise.resolve(r)]}}))}))},B=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var r,a,n,i,d,s,c;return Object(o.d)(this,(function(u){switch(u.label){case 0:return a=[Object(o.a)({},e)],c={},[4,_(e.body,t)];case 1:return r=o.a.apply(void 0,a.concat([(c.body=u.sent(),c)])),i="UnknownError",i=Z(e,r.body),d=r.body,i=d.code||d.Code||i,n=Object(o.a)(Object(o.a)({},d),{name:""+i,message:d.message||d.Message||i,$fault:"client",$metadata:V(e)}),s=n.message||n.Message||i,n.message=s,delete n.Message,[2,Promise.reject(Object.assign(new Error(s),n))]}}))}))},N=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t;return Object(o.d)(this,(function(r){return t={name:"NoSuchBucket",$fault:"client",$metadata:V(e)},e.body,[2,t]}))}))},R=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t;return Object(o.d)(this,(function(r){return t={name:"NoSuchKey",$fault:"client",$metadata:V(e)},e.body,[2,t]}))}))},D=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t;return Object(o.d)(this,(function(r){return t={name:"NoSuchUpload",$fault:"client",$metadata:V(e)},e.body,[2,t]}))}))},q=function(e,t){var r=new i.a("CompletedMultipartUpload");void 0!==e.Parts&&L(e.Parts,t).map((function(e){e=e.withName("Part"),r.addChildNode(e)}));return r},L=function(e,t){return e.map((function(e){return function(e,t){var r=new i.a("CompletedPart");if(void 0!==e.ETag){var o=new i.a("ETag").addChildNode(new i.b(e.ETag)).withName("ETag");r.addChildNode(o)}void 0!==e.PartNumber&&(o=new i.a("PartNumber").addChildNode(new i.b(String(e.PartNumber))).withName("PartNumber"),r.addChildNode(o));return r}(e).withName("member")}))},U=function(e,t){return(e||[]).map((function(e){return function(e,t){var r={Prefix:void 0};return void 0!==e.Prefix&&(r.Prefix=e.Prefix),r}(e)}))},A=function(e,t){var r={ID:void 0,DisplayName:void 0};return void 0!==e.ID&&(r.ID=e.ID),void 0!==e.DisplayName&&(r.DisplayName=e.DisplayName),r},H=function(e,t){return(e||[]).map((function(e){return function(e,t){var r={Size:void 0,ETag:void 0,Owner:void 0,StorageClass:void 0,Key:void 0,LastModified:void 0};return void 0!==e.Size&&(r.Size=parseInt(e.Size)),void 0!==e.ETag&&(r.ETag=e.ETag),void 0!==e.Owner&&(r.Owner=$(e.Owner,t)),void 0!==e.StorageClass&&(r.StorageClass=e.StorageClass),void 0!==e.Key&&(r.Key=e.Key),void 0!==e.LastModified&&(r.LastModified=new Date(e.LastModified)),r}(e,t)}))},$=function(e,t){var r={DisplayName:void 0,ID:void 0};return void 0!==e.DisplayName&&(r.DisplayName=e.DisplayName),void 0!==e.ID&&(r.ID=e.ID),r},G=function(e,t){return(e||[]).map((function(e){return function(e,t){var r={Size:void 0,LastModified:void 0,PartNumber:void 0,ETag:void 0};return void 0!==e.Size&&(r.Size=parseInt(e.Size)),void 0!==e.LastModified&&(r.LastModified=new Date(e.LastModified)),void 0!==e.PartNumber&&(r.PartNumber=parseInt(e.PartNumber)),void 0!==e.ETag&&(r.ETag=e.ETag),r}(e)}))},V=function(e){return{httpStatusCode:e.statusCode,httpHeaders:e.headers,requestId:e.headers["x-amzn-requestid"]}},W=function(e,t){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):t.streamCollector(e)||Promise.resolve(new Uint8Array)},F=function(e){return void 0!==e&&""!==e&&(!Object.getOwnPropertyNames(e).includes("length")||0!=e.length)&&(!Object.getOwnPropertyNames(e).includes("size")||0!=e.size)},_=function(e,t){return function(e,t){return W(e,t).then((function(e){return t.utf8Encoder(e)}))}(e,t).then((function(e){if(e.length){var t=Object(d.parse)(e,{attributeNamePrefix:"",ignoreAttributes:!1,parseNodeValue:!1,tagValueProcessor:function(e,t){return e.replace(/&amp;/g,"&").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<")}}),r=Object.keys(t)[0],o=t[r];return o["#text"]&&(o[r]=o["#text"],delete o["#text"]),Object(n.g)(o)}return{}}))},Z=function(e,t){return void 0!==t.Code?t.Code:404==e.statusCode?"NotFound":""}}}]);