$( function() {
    $(document).tooltip();
});
// Query the user for permission.
const periodicSyncPermission = await navigator.permissions.query({
    name: 'periodic-background-sync',
  });
  