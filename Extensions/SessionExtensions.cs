using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace hamburgeria.Extensions
{
public static class SessionExtensions
{
    public static void SetObject<T>(this ISession session, string key, T value)
    {
        var json = JsonConvert.SerializeObject(value);
        session.SetString(key, json);
    }

    public static T GetObject<T>(this ISession session, string key)
    {
        var json = session.GetString(key);
        return json == null ? default(T) : JsonConvert.DeserializeObject<T>(json);
    }
}
}