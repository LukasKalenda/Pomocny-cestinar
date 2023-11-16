# Firebase + Firestore specifications

## Firestore data / collections

### /rozbory/

```json
{
    "owner_uid": "<owner uid>",
    "owner": {
        "display_name": "<owner name>",
        "image_url": "<owner image url>"
    },
    "visibility": "<private/pending/public>",
    "work_status": "<planned/started/review/done>",
    "book":{
        "author": "<book author>",
        "name": "<book name>",
        "ref": "<book ref in firebase eq. /knihy/gulliverovy_cesty",
    },
    "headline": "<rozbor headline>",
    "content":{
        "body": "<rozbor body>"
        ...?
    }
}
```

### /knihy/

```json
{
    "visibility": "<private/pending/public>"
    "author": "<author full name>",
    "name": "<book name>",
    "publish_date": <datetime object>,
    "description": "<short text>"
    ...?
}
```
