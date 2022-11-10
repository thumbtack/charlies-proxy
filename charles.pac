function FindProxyForURL(url, host) {
  // Exclude IT Domains including Tacknet
  if (shExpMatch(host, "*.tools.thumbtack.io")) return 'DIRECT';
  if (shExpMatch(host, "*.corp.thumbtack.com")) return 'DIRECT'; 
  // Direct all other Thumbtack domains and sumbdomains, and localhost to the proxy. This matches current configuration parameters in the application
  if (shExpMatch(host, "*.thumbtack.*")) return 'PROXY 127.0.0.1:8888; DIRECT';
  if (dnsDomainIs(host, "localhost")) return 'PROXY 127.0.0.1:8888; DIRECT';
  // Include Charles SSL Certificate URL
  if (dnsDomainIs(host, "ssl.charles")) return 'PROXY 127.0.0.1:8888';
  if (dnsDomainIs(host, "chrls.pro")) return 'PROXY 127.0.0.1:8888;';
  // All other traffic is DIRECT
    return 'DIRECT';
}
